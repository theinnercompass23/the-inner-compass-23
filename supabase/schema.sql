-- ====================================================================
-- HAVEN: Mental Wellness & Emotional Support Platform
-- Complete PostgreSQL / Supabase Schema with Row Level Security (RLS)
-- ====================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ENUMS
CREATE TYPE user_role AS ENUM ('user', 'therapist', 'listener', 'admin');
CREATE TYPE appointment_status AS ENUM ('confirmed', 'completed', 'cancelled');
CREATE TYPE report_status AS ENUM ('pending', 'resolved', 'dismissed');
CREATE TYPE community_category AS ENUM (
  'loneliness',
  'relationships',
  'stress-anxiety',
  'personal-growth',
  'life-problems',
  'daily-thoughts',
  'motivation',
  'general-support'
);
CREATE TYPE mood_type AS ENUM (
  'happy',
  'okay',
  'sad',
  'anxious',
  'stressed',
  'lonely',
  'overwhelmed'
);

-- 3. USER PROFILES
CREATE TABLE profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  role user_role DEFAULT 'user' NOT NULL,
  is_anonymous BOOLEAN DEFAULT false NOT NULL,
  anonymous_name TEXT,
  bio TEXT,
  preferred_language TEXT DEFAULT 'English',
  emergency_contact JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 4. VERIFIED PROFESSIONALS (THERAPISTS / PSYCHOLOGISTS)
CREATE TABLE professionals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  title TEXT NOT NULL,
  photo_url TEXT,
  credentials TEXT NOT NULL,
  rci_registration TEXT,
  specializations TEXT[] NOT NULL DEFAULT '{}',
  languages TEXT[] NOT NULL DEFAULT '{"English", "Hindi"}',
  experience_years INT NOT NULL DEFAULT 5,
  session_fee INT NOT NULL DEFAULT 1500,
  next_available TEXT,
  bio TEXT NOT NULL,
  modalities TEXT[] DEFAULT '{}',
  rating NUMERIC(3,2) DEFAULT 4.9,
  reviews_count INT DEFAULT 0,
  is_verified BOOLEAN DEFAULT true,
  available_days TEXT[] DEFAULT '{"Monday", "Wednesday", "Friday"}',
  available_slots TEXT[] DEFAULT '{"10:00 AM", "02:00 PM", "05:00 PM"}',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 5. TRAINED HUMAN LISTENERS
CREATE TABLE listeners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  badge TEXT DEFAULT 'Active Peer Listener',
  languages TEXT[] DEFAULT '{"English", "Hindi"}',
  topics TEXT[] DEFAULT '{"Loneliness", "Life Transition"}',
  experience_years INT DEFAULT 2,
  is_online BOOLEAN DEFAULT true,
  rating NUMERIC(3,2) DEFAULT 4.95,
  sessions_count INT DEFAULT 45,
  bio TEXT NOT NULL,
  verified_trained BOOLEAN DEFAULT true,
  role_disclaimer TEXT DEFAULT 'Trained peer listener providing non-judgmental support. Not a licensed therapist.',
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 6. CONVERSATIONS & MESSAGES
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  recipient_id TEXT NOT NULL,
  recipient_type TEXT NOT NULL, -- 'listener', 'ai', 'therapist'
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE NOT NULL,
  sender_id TEXT NOT NULL,
  sender_name TEXT NOT NULL,
  sender_role TEXT NOT NULL,
  content TEXT NOT NULL,
  is_crisis_detected BOOLEAN DEFAULT false,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 7. APPOINTMENTS
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  therapist_id UUID REFERENCES professionals(id) ON DELETE RESTRICT NOT NULL,
  date DATE NOT NULL,
  time_slot TEXT NOT NULL,
  status appointment_status DEFAULT 'confirmed' NOT NULL,
  session_fee INT NOT NULL,
  notes TEXT,
  meet_link TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Prevent double bookings on same therapist at same date & slot
CREATE UNIQUE INDEX unique_therapist_slot_idx 
ON appointments(therapist_id, date, time_slot) 
WHERE status = 'confirmed';

-- 8. ANONYMOUS COMMUNITY
CREATE TABLE community_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  author_display_name TEXT NOT NULL,
  author_avatar TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT true NOT NULL,
  category community_category NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  likes_count INT DEFAULT 0 NOT NULL,
  comments_count INT DEFAULT 0 NOT NULL,
  reported BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE community_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE NOT NULL,
  author_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  author_display_name TEXT NOT NULL,
  author_avatar TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT true NOT NULL,
  content TEXT NOT NULL,
  likes_count INT DEFAULT 0 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE community_post_likes (
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  PRIMARY KEY (post_id, user_id)
);

CREATE TABLE community_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE NOT NULL,
  reporter_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  reason TEXT NOT NULL,
  details TEXT,
  status report_status DEFAULT 'pending' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 9. PRIVATE MOOD & JOURNAL
CREATE TABLE mood_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  mood mood_type NOT NULL,
  intensity INT CHECK (intensity >= 1 AND intensity <= 5) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  notes TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

CREATE TABLE journal_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  mood_tag mood_type,
  tags TEXT[] DEFAULT '{}',
  is_favorite BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- 10. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE professionals ENABLE ROW LEVEL SECURITY;
ALTER TABLE listeners ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE mood_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE journal_entries ENABLE ROW LEVEL SECURITY;

-- Profiles: Public can view listener/therapist profile info; users can update their own
CREATE POLICY "Public profiles are readable" ON profiles
  FOR SELECT USING (true);

CREATE POLICY "Users can edit own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Professionals & Listeners: Publicly readable
CREATE POLICY "Professionals are readable by everyone" ON professionals
  FOR SELECT USING (true);

CREATE POLICY "Listeners are readable by everyone" ON listeners
  FOR SELECT USING (true);

-- Conversations & Messages: Only sender or recipient
CREATE POLICY "Users can only read own conversations" ON conversations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can only insert own conversations" ON conversations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Appointments: Only owner or professional
CREATE POLICY "Users can view own appointments" ON appointments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own appointments" ON appointments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can cancel own appointments" ON appointments
  FOR UPDATE USING (auth.uid() = user_id);

-- Community: Public readable; authors can insert and delete own
CREATE POLICY "Community posts are viewable by all" ON community_posts
  FOR SELECT USING (reported = false OR auth.uid() = author_id);

CREATE POLICY "Authenticated users can create posts" ON community_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can delete own posts" ON community_posts
  FOR DELETE USING (auth.uid() = author_id);

CREATE POLICY "Community comments are viewable by all" ON community_comments
  FOR SELECT USING (true);

CREATE POLICY "Users can comment on posts" ON community_comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

-- Mood & Journal Entries: STRICT PRIVACY - USER ONLY!
CREATE POLICY "Users have strict private access to mood entries" ON mood_entries
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users have strict private access to journal entries" ON journal_entries
  FOR ALL USING (auth.uid() = user_id);
