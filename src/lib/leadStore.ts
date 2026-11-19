"use client";

import { SupportRequest, LeadStatus } from "@/types";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export const INITIAL_LEADS: SupportRequest[] = [
  {
    id: "lead-1",
    full_name: "Aarav Sharma",
    phone: "+91 98765 43210",
    email: "aarav.sharma@example.com",
    support_categories: ["I Feel Lonely", "I Have Nobody to Talk To"],
    additional_message: "Living alone in Bangalore for work. Some evenings the quiet apartment gets really overwhelming.",
    preferred_language: "Hindi",
    preferred_time: "Evening (5:00 PM – 9:00 PM)",
    consent: true,
    status: "new",
    admin_notes: "Prefers Hindi. Follow up on WhatsApp in evening.",
    created_at: "2026-02-19T14:30:00Z",
    updated_at: "2026-02-19T14:30:00Z",
  },
  {
    id: "lead-2",
    full_name: "Meera Patel",
    phone: "+91 98112 23344",
    email: "meera.patel@example.com",
    support_categories: ["I'm Going Through a Divorce", "I'm Feeling Emotionally Overwhelmed"],
    additional_message: "Separated 3 months ago after 8 years of marriage. Finding it hard to cope with family expectations and loneliness.",
    preferred_language: "English",
    preferred_time: "Afternoon (12:00 PM – 5:00 PM)",
    consent: true,
    status: "contacted",
    admin_notes: "Initial WhatsApp message sent. She replied seeking a 30-min listening session.",
    created_at: "2026-02-18T10:15:00Z",
    updated_at: "2026-02-18T16:00:00Z",
  },
  {
    id: "lead-3",
    full_name: "Rohan Verma",
    phone: "+91 97654 32109",
    email: "rohan.v@example.com",
    support_categories: ["I Recently Had a Breakup", "I Need Someone to Listen"],
    additional_message: "Going through a sudden breakup. Don't want to bother friends with the same sorrow repeatedly.",
    preferred_language: "Hinglish",
    preferred_time: "Late Night (9:00 PM – 12:00 AM)",
    consent: true,
    status: "in_progress",
    admin_notes: "Connected with peer listener Priya. Ongoing conversation.",
    created_at: "2026-02-17T21:40:00Z",
    updated_at: "2026-02-18T09:30:00Z",
  },
  {
    id: "lead-4",
    full_name: "Sneha Nair",
    phone: "+91 99887 76655",
    email: "sneha.nair@example.com",
    support_categories: ["I Lost Someone Close to Me"],
    additional_message: "Lost my mother 6 months ago. The grief hits randomly and heavily.",
    preferred_language: "English",
    preferred_time: "Morning (9:00 AM – 12:00 PM)",
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
        email: lead.email,
        support_categories: lead.support_categories,
        additional_message: lead.additional_message || null,
        preferred_language: lead.preferred_language,
        preferred_time: lead.preferred_time || "Anytime",
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
