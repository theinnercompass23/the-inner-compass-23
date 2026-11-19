-- ====================================================================
-- HAVEN: Human Emotional Support & Peer Listening Service
-- PostgreSQL / Supabase Schema for Lead & Request Management
-- ====================================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: support_requests
CREATE TABLE IF NOT EXISTS support_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL CHECK (char_length(trim(full_name)) >= 2),
  phone TEXT NOT NULL CHECK (char_length(trim(phone)) >= 8),
  email TEXT NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  support_categories TEXT[] NOT NULL CHECK (cardinality(support_categories) >= 1),
  additional_message TEXT,
  preferred_language TEXT DEFAULT 'Hindi' NOT NULL,
  preferred_time TEXT DEFAULT 'Anytime',
  consent BOOLEAN DEFAULT true NOT NULL,
  status TEXT DEFAULT 'new' NOT NULL CHECK (status IN ('new', 'contacted', 'in_progress', 'completed')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Indexes for performance & admin search
CREATE INDEX IF NOT EXISTS idx_support_requests_created_at ON support_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_support_requests_status ON support_requests(status);
CREATE INDEX IF NOT EXISTS idx_support_requests_phone ON support_requests(phone);
CREATE INDEX IF NOT EXISTS idx_support_requests_email ON support_requests(email);

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_support_requests_modtime()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_support_requests_modtime ON support_requests;
CREATE TRIGGER trigger_update_support_requests_modtime
  BEFORE UPDATE ON support_requests
  FOR EACH ROW
  EXECUTE FUNCTION update_support_requests_modtime();

-- ====================================================================
-- Row Level Security (RLS) Policies
-- Protect personal data: NEVER expose all submitted leads through public endpoints
-- ====================================================================

ALTER TABLE support_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous or authenticated visitors to INSERT their own support request
CREATE POLICY "Allow public visitors to submit support requests"
ON support_requests
FOR INSERT
TO public
WITH CHECK (
  consent = true AND
  char_length(trim(full_name)) >= 2 AND
  char_length(trim(phone)) >= 8
);

-- Strict rule: Public SELECT is prohibited (prevents enumeration of leads)
-- Only service_role or authenticated administrators can view, update, and delete leads
CREATE POLICY "Allow service role full access"
ON support_requests
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);
