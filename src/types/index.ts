export type UserRole = "user" | "therapist" | "listener" | "admin";

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  display_name: string;
  avatar_url?: string;
  role: UserRole;
  is_anonymous: boolean;
  anonymous_name?: string;
  bio?: string;
  preferred_language: string;
  emergency_contact?: {
    name: string;
    relationship: string;
    phone: string;
  };
  created_at: string;
}

export interface Listener {
  id: string;
  display_name: string;
  avatar_url: string;
  badge: string;
  languages: string[];
  topics: string[];
  experience_years: number;
  is_online: boolean;
  rating: number;
  sessions_count: number;
  bio: string;
  verified_trained: boolean;
  role_disclaimer: string;
}

export interface Therapist {
  id: string;
  full_name: string;
  title: string;
  photo_url: string;
  credentials: string;
  rci_registration?: string;
  specializations: string[];
  languages: string[];
  experience_years: number;
  session_fee: number;
  next_available: string;
  bio: string;
  modalities: string[];
  rating: number;
  reviews_count: number;
  available_days: string[];
  available_slots: string[];
}

export interface Appointment {
  id: string;
  user_id: string;
  user_name: string;
  therapist_id: string;
  therapist_name: string;
  therapist_photo: string;
  therapist_credentials: string;
  date: string;
  time_slot: string;
  status: "confirmed" | "completed" | "cancelled";
  session_fee: number;
  notes?: string;
  meet_link: string;
  created_at: string;
}

export type CommunityCategory =
  | "all"
  | "loneliness"
  | "relationships"
  | "stress-anxiety"
  | "personal-growth"
  | "life-problems"
  | "daily-thoughts"
  | "motivation"
  | "general-support";

export interface CommunityPost {
  id: string;
  author_id: string;
  author_display_name: string;
  author_avatar: string;
  is_anonymous: boolean;
  category: Exclude<CommunityCategory, "all">;
  title: string;
  content: string;
  likes_count: number;
  comments_count: number;
  created_at: string;
  reported?: boolean;
  liked_by_user?: boolean;
}

export interface CommunityComment {
  id: string;
  post_id: string;
  author_id: string;
  author_display_name: string;
  author_avatar: string;
  is_anonymous: boolean;
  content: string;
  created_at: string;
  likes_count: number;
}

export interface ChatMessage {
  id: string;
  conversation_id: string;
  sender_id: string;
  sender_name: string;
  sender_role: "user" | "listener" | "ai" | "therapist";
  content: string;
  created_at: string;
  is_read: boolean;
  is_crisis_detected?: boolean;
}

export type MoodType =
  | "happy"
  | "okay"
  | "sad"
  | "anxious"
  | "stressed"
  | "lonely"
  | "overwhelmed";

export interface MoodEntry {
  id: string;
  user_id: string;
  mood: MoodType;
  intensity: number; // 1-5
  tags: string[];
  notes?: string;
  date: string; // YYYY-MM-DD
  created_at: string;
}

export interface JournalEntry {
  id: string;
  user_id: string;
  title: string;
  content: string;
  mood_tag?: MoodType;
  tags: string[];
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}

export interface CommunityReport {
  id: string;
  post_id: string;
  post_title: string;
  reporter_id: string;
  reason: string;
  details?: string;
  status: "pending" | "resolved" | "dismissed";
  created_at: string;
}
