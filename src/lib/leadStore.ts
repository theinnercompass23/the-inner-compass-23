"use client";

import { SupportRequest, LeadStatus } from "@/types";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export const INITIAL_LEADS: SupportRequest[] = [
  {
    id: "lead-1",
    full_name: "Aarav Sharma",
    phone: "9876543210",
    country_code: "+91",
    email: "aarav.sharma@example.com",
    support_categories: ["Loneliness – I Feel Alone", "I Have Nobody to Talk To"],
    additional_message: "Living alone in Bangalore for work. Some evenings the quiet apartment gets really overwhelming.",
    preferred_date: "22/02/2026",
    preferred_time: "20:30",
    timezone: "Asia/Kolkata",
    preferred_language: "Hindi",
    consent: true,
    status: "new",
    admin_notes: "Prefers Hindi. Available after 20:00. Follow up on WhatsApp.",
    created_at: "2026-02-19T14:30:00Z",
    updated_at: "2026-02-19T14:30:00Z",
  },
  {
    id: "lead-2",
    full_name: "Meera Patel",
    phone: "9811223344",
    country_code: "+91",
    email: "meera.patel@example.com",
    support_categories: ["Divorce – Going Through a Divorce", "Emotional Stress"],
    additional_message: "Separated 3 months ago after 8 years of marriage. Finding it hard to cope with family expectations and loneliness.",
    preferred_date: "21/02/2026",
    preferred_time: "14:00",
    timezone: "Asia/Kolkata",
    preferred_language: "English",
    consent: true,
    status: "contacted",
    admin_notes: "Initial WhatsApp message sent. She replied seeking a 30-min listening session.",
    created_at: "2026-02-18T10:15:00Z",
    updated_at: "2026-02-18T16:00:00Z",
  },
  {
    id: "lead-3",
    full_name: "Rohan Verma",
    phone: "9765432109",
    country_code: "+91",
    email: "rohan.v@example.com",
    support_categories: ["Heartbreak – Recovering From a Breakup", "I Just Need Someone to Listen"],
    additional_message: "Going through a sudden breakup. Don't want to bother friends with the same sorrow repeatedly.",
    preferred_date: "20/02/2026",
    preferred_time: "22:15",
    timezone: "Asia/Kolkata",
    preferred_language: "Hinglish",
    consent: true,
    status: "in_progress",
    admin_notes: "Connected with peer listener. Ongoing conversation.",
    created_at: "2026-02-17T21:40:00Z",
    updated_at: "2026-02-18T09:30:00Z",
  },
  {
    id: "lead-4",
    full_name: "Sneha Nair",
    phone: "9988776655",
    country_code: "+91",
    email: "sneha.nair@example.com",
    support_categories: ["Grief & Loss"],
    additional_message: "Lost my mother 6 months ago. The grief hits randomly and heavily.",
    preferred_date: "23/02/2026",
    preferred_time: "11:00",
    timezone: "Asia/Kolkata",
    preferred_language: "English",
    consent: true,
    status: "completed",
    admin_notes: "Completed 2 listening conversations. She expressed heartfelt gratitude for the quiet space.",
    created_at: "2026-02-15T09:00:00Z",
    updated_at: "2026-02-17T11:00:00Z",
  },
];

export async function saveLeadToSupabase(lead: Omit<SupportRequest, "id" | "created_at" | "updated_at">) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: true, localOnly: true };
  }

  try {
    const { data, error } = await supabase.from("support_requests").insert([
      {
        full_name: lead.full_name,
        phone: lead.phone,
        country_code: lead.country_code || "+91",
        email: lead.email,
        support_categories: lead.support_categories,
        other_category_text: lead.other_category_text || null,
        additional_message: lead.additional_message || null,
        preferred_date: lead.preferred_date,
        preferred_time: lead.preferred_time,
        timezone: lead.timezone || "Asia/Kolkata",
        preferred_language: lead.preferred_language || "Hindi",
        consent: lead.consent,
        status: lead.status || "new",
      },
    ]);

    if (error) {
      console.warn("Supabase insert warning, falling back to local:", error.message);
      return { success: true, localOnly: true, error: error.message };
    }

    return { success: true, localOnly: false, data };
  } catch (err) {
    console.warn("Supabase connection error:", err);
    return { success: true, localOnly: true };
  }
}
