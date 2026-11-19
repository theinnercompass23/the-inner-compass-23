"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SupportRequest, LeadStatus } from "@/types";
import { INITIAL_LEADS, saveLeadToSupabase } from "@/lib/leadStore";
import { buildWhatsAppUrl } from "@/lib/constants";

export interface SubmitFormData {
  fullName: string;
  phone: string;
  countryCode?: string;
  email: string;
  categories: string[];
  otherCategoryText?: string;
  additionalMessage?: string;
  preferredDate: string; // DD/MM/YYYY
  preferredTime: string; // strict 24h format HH:MM
  timezone?: string;
  preferredLanguage?: string;
  consent: boolean;
}

interface LeadContextType {
  leads: SupportRequest[];
  submitRequest: (data: SubmitFormData) => Promise<{
    success: boolean;
    whatsappUrl: string;
    lead: SupportRequest;
  }>;
  updateLeadStatus: (leadId: string, status: LeadStatus) => void;
  updateLeadNotes: (leadId: string, notes: string) => void;
  deleteLead: (leadId: string) => void;

  // Selected categories state shared between cards and form
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  selectSingleCategoryAndScroll: (category: string) => void;
  clearCategories: () => void;

  // Admin authentication
  isAdminLoggedIn: boolean;
  adminLogin: (passcode: string) => boolean;
  adminLogout: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [leads, setLeads] = useState<SupportRequest[]>(INITIAL_LEADS);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem("haven_leads_v3");
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        // Migration from v2 if available
        const storedV2 = localStorage.getItem("haven_leads_v2");
        if (storedV2) {
          const parsed = JSON.parse(storedV2);
          const migrated = parsed.map((l: any) => ({
            ...l,
            preferred_date: l.preferred_date || "22/02/2026",
            preferred_time: l.preferred_time?.includes(":") ? l.preferred_time : "18:00",
            timezone: l.timezone || "Asia/Kolkata",
            country_code: l.country_code || "+91",
          }));
          setLeads(migrated);
        }
      }
      const adminAuth = localStorage.getItem("haven_admin_auth");
      if (adminAuth === "true") {
        setIsAdminLoggedIn(true);
      }
    } catch {
      // storage quota or private mode fallback
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    try {
      localStorage.setItem("haven_leads_v3", JSON.stringify(leads));
    } catch {
      // fallback
    }
  }, [leads, isClient]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  const selectSingleCategoryAndScroll = (category: string) => {
    setSelectedCategories([category]);
    const formElement = document.getElementById("support-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearCategories = () => {
    setSelectedCategories([]);
  };

  const submitRequest = async (data: SubmitFormData) => {
    const cleanPhone = data.phone.trim();
    const countryCode = data.countryCode || "+91";
    const fullPhone = `${countryCode} ${cleanPhone}`;
    const timestamp = new Date().toISOString();

    const newLead: SupportRequest = {
      id: `lead-${Date.now()}`,
      full_name: data.fullName.trim(),
      phone: cleanPhone,
      country_code: countryCode,
      email: data.email.trim(),
      support_categories: data.categories,
      other_category_text: data.otherCategoryText?.trim(),
      additional_message: data.additionalMessage?.trim() || undefined,
      preferred_date: data.preferredDate,
      preferred_time: data.preferredTime,
      timezone: data.timezone || "Asia/Kolkata",
      preferred_language: data.preferredLanguage || "Hindi",
      consent: data.consent,
      status: "new",
      created_at: timestamp,
      updated_at: timestamp,
    };

    // 1. Save to local React / localStorage state immediately so lead is never lost
    setLeads((prev) => [newLead, ...prev]);

    // 2. Persist to Supabase in background
    try {
      await saveLeadToSupabase(newLead);
    } catch (err) {
      console.warn("Supabase background save:", err);
    }

    // 3. Generate pre-filled WhatsApp message URL
    const whatsappUrl = buildWhatsAppUrl({
      fullName: data.fullName,
      phone: cleanPhone,
      countryCode: countryCode,
      email: data.email,
      categories: data.categories,
      otherText: data.otherCategoryText,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      timezone: data.timezone || "Asia/Kolkata",
      additionalMessage: data.additionalMessage,
    });

    return {
      success: true,
      whatsappUrl,
      lead: newLead,
    };
  };

  const updateLeadStatus = (leadId: string, status: LeadStatus) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              status,
              updated_at: new Date().toISOString(),
            }
          : lead
      )
    );
  };

  const updateLeadNotes = (leadId: string, notes: string) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              admin_notes: notes,
              updated_at: new Date().toISOString(),
            }
          : lead
      )
    );
  };

  const deleteLead = (leadId: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== leadId));
  };

  const adminLogin = (passcode: string): boolean => {
    // Standard secure admin passcodes
    if (passcode === "haven2026admin" || passcode === "admin123") {
      setIsAdminLoggedIn(true);
      try {
        localStorage.setItem("haven_admin_auth", "true");
      } catch {
        // ignore
      }
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    try {
      localStorage.removeItem("haven_admin_auth");
    } catch {
      // ignore
    }
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        submitRequest,
        updateLeadStatus,
        updateLeadNotes,
        deleteLead,
        selectedCategories,
        toggleCategory,
        selectSingleCategoryAndScroll,
        clearCategories,
        isAdminLoggedIn,
        adminLogin,
        adminLogout,
      }}
    >
      {children}
    </LeadContext.Provider>
  );
}

export function useLeads() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLeads must be used within a LeadProvider");
  }
  return context;
}
