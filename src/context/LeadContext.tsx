"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SupportRequest, LeadStatus } from "@/types";
import { INITIAL_LEADS, saveLeadToSupabase } from "@/lib/leadStore";
import { buildWhatsAppUrl } from "@/lib/constants";

interface SubmitFormData {
  fullName: string;
  phone: string;
  email: string;
  categories: string[];
  additionalMessage?: string;
  preferredLanguage?: string;
  preferredTime?: string;
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
      const stored = localStorage.getItem("haven_leads_v2");
      if (stored) {
        setLeads(JSON.parse(stored));
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
      localStorage.setItem("haven_leads_v2", JSON.stringify(leads));
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
    const newLead: SupportRequest = {
      id: `lead-${Date.now()}`,
      full_name: data.fullName.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      support_categories: data.categories,
      additional_message: data.additionalMessage?.trim() || undefined,
      preferred_language: data.preferredLanguage || "Hindi",
      preferred_time: data.preferredTime || "Anytime / As soon as possible",
      consent: data.consent,
      status: "new",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Save to local reactive state immediately
    setLeads((prev) => [newLead, ...prev]);

    // Try saving to Supabase asynchronously
    saveLeadToSupabase(newLead).catch((err) => {
      console.warn("Async Supabase save notification:", err);
    });

    // Generate WhatsApp link
    const whatsappUrl = buildWhatsAppUrl({
      fullName: newLead.full_name,
      phone: newLead.phone,
      email: newLead.email,
      categories: newLead.support_categories,
      additionalMessage: newLead.additional_message,
      preferredLanguage: newLead.preferred_language,
      preferredTime: newLead.preferred_time,
    });

    return {
      success: true,
      whatsappUrl,
      lead: newLead,
    };
  };

  const updateLeadStatus = (leadId: string, status: LeadStatus) => {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === leadId
          ? { ...l, status, updated_at: new Date().toISOString() }
          : l
      )
    );
  };

  const updateLeadNotes = (leadId: string, notes: string) => {
    setLeads((prev) =>
      prev.map((l) =>
        l.id === leadId
          ? { ...l, admin_notes: notes, updated_at: new Date().toISOString() }
          : l
      )
    );
  };

  const deleteLead = (leadId: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== leadId));
  };

  const adminLogin = (passcode: string) => {
    // Default passcodes for demonstration and owner access
    if (passcode === "haven2026admin" || passcode === "admin123" || passcode === "haven") {
      setIsAdminLoggedIn(true);
      if (typeof window !== "undefined") {
        localStorage.setItem("haven_admin_auth", "true");
      }
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("haven_admin_auth");
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
