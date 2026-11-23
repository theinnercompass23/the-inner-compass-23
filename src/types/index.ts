export type LeadStatus = "new" | "contacted" | "in_progress" | "completed";

export type PreferredLanguage = "Hindi" | "English" | "Hinglish" | "Other";

export interface SupportRequest {
  id: string;
  full_name: string;
  age: number; // 18-80 for adult support
  phone: string;
  country_code?: string;
  email: string;
  support_categories: string[];
  other_category_text?: string;
  additional_message?: string;
  preferred_date?: string; // DD/MM/YYYY
  preferred_time?: string; // 24-hour format HH:MM (e.g. "15:30", "00:00", "23:59")
  timezone?: string; // "Asia/Kolkata"
  preferred_language?: PreferredLanguage | string;
  is_child_request?: boolean;
  guardian_name?: string;
  consent: boolean;
  status: LeadStatus;
  created_at: string;
  updated_at: string;
}

export interface SupportCategoryItem {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
  articleSlug?: string;
}
