"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { SupportRequest } from "@/types";
import { INITIAL_LEADS, saveLeadToSupabase } from "@/lib/leadStore";
import { buildWhatsAppUrl } from "@/lib/constants";

export interface SubmitFormData {
  fullName: string;
  age: number;
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
  isChildRequest?: boolean;
  guardianName?: string;
  consent: boolean;
}

interface LeadContextType {
  leads: SupportRequest[];
  submitRequest: (data: SubmitFormData) => Promise<{
    success: boolean;
    whatsappUrl: string;
    lead: SupportRequest;
  }>;

  // Selected categories state shared between cards and form
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  selectSingleCategoryAndScroll: (category: string) => void;
  clearCategories: () => void;
}

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export function LeadProvider({ children }: { children: React.ReactNode }) {
  const [leads, setLeads] = useState<SupportRequest[]>(INITIAL_LEADS);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    try {
      const stored = localStorage.getItem("haven_leads_v4");
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch {
      // storage quota or private mode fallback
    }
  }, []);

  useEffect(() => {
    if (!isClient) return;
    try {
      localStorage.setItem("haven_leads_v4", JSON.stringify(leads));
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
    const timestamp = new Date().toISOString();

    const newLead: SupportRequest = {
      id: `lead-${Date.now()}`,
      full_name: data.fullName.trim(),
      age: data.age,
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
      is_child_request: data.isChildRequest || false,
      guardian_name: data.guardianName?.trim() || undefined,
      consent: data.consent,
      status: "new",
      created_at: timestamp,
      updated_at: timestamp,
    };

    // 1. Save to local React / localStorage state immediately so lead is preserved
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
      age: data.age,
      phone: cleanPhone,
      countryCode: countryCode,
      email: data.email,
      categories: data.categories,
      otherText: data.otherCategoryText,
      preferredDate: data.preferredDate,
      preferredTime: data.preferredTime,
      timezone: data.timezone || "Asia/Kolkata",
      additionalMessage: data.additionalMessage,
      guardianName: data.guardianName,
      isChildRequest: data.isChildRequest,
    });

    return {
      success: true,
      whatsappUrl,
      lead: newLead,
    };
  };

  return (
    <LeadContext.Provider
      value={{
        leads,
        submitRequest,
        selectedCategories,
        toggleCategory,
        selectSingleCategoryAndScroll,
        clearCategories,
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
