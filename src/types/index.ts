export type LeadStatus = "new" | "contacted" | "in_progress" | "completed";

export type PreferredLanguage = "Hindi" | "English" | "Hinglish" | "Other";

export interface SupportRequest {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  support_categories: string[];
  additional_message?: string;
  preferred_language: PreferredLanguage | string;
  preferred_time?: string;
  consent: boolean;
  status: LeadStatus;
  admin_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface SupportCategoryItem {
  id: string;
  label: string;
  iconName: string;
  description?: string;
}
