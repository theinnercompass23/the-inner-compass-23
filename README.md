# Haven — Mental Wellness & Emotional Support Platform

> **"Nobody should feel like they have to face everything alone."**

Haven is a modern, responsive, production-ready mental wellness and emotional support web application engineered using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **PostgreSQL / Supabase**.

It combines:
1. **Talk to a Human Listener**: Real-time peer chat with trained empathetic listeners.
2. **Online Counselling**: Directory and working booking system for verified clinical psychologists (RCI registered) and psychiatrists (MD).
3. **AI Emotional Companion**: Multilingual conversational support (English & Hindi) with crisis safety detection.
4. **Safe Anonymous Community**: Peer support circle with pseudonyms, content moderation, and supportive reactions.
5. **Self-Care Suite**: Interactive box breathing animations, guided meditation audio, daily mood tracking charts, and an encrypted private journal vault.
6. **Crisis Support (India)**: Dedicated crisis page featuring **Tele-MANAS (14416)**, **Emergency (112)**, **KIRAN (1800-599-0019)**, and an interactive 6-step Safety Plan generator.
7. **Admin Moderation Console**: Role-based access control, analytics, reported content moderation, and therapist verification.

---

## 🎨 Visual Identity & Color Palette

- **Primary:** Soft Sage Green (`#A8BDA5`)
- **Background:** Warm Off-White (`#F8F8F4`)
- **Secondary:** Light Beige (`#EEECE4`)
- **Text:** Dark Charcoal (`#292D2A`)
- **Accent:** Muted Green (`#78947D`)
- **Emergency / Warm Alert:** Soft Coral (`#D97762` / `#FDF2EE`)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 🔑 Demo Personas (One-Click Logins)

On the login page (`/auth/login`), one-click demo persona buttons are provided:
- **Member / User:** Aarav Mehta (`aarav.mehta@example.com`)
- **Licensed Therapist:** Dr. Ananya Sharma (`dr.ananya@haven.care`)
- **Peer Listener:** Priya Malhotra (`priya@haven.care`)
- **Safety Admin Officer:** Haven Safety Team (`admin@haven.care`)

---

## 🗄️ Database & Supabase Integration

The complete PostgreSQL database schema with Row Level Security (RLS) policies is located in:
[`supabase/schema.sql`](supabase/schema.sql)

Environment variables template is available in:
[`.env.example`](.env.example)

---

## 🚨 Emergency Helplines (India)

- **Tele-MANAS (Toll-Free 24/7):** `14416` or `1800-891-4416`
- **National Emergency Services:** `112`
- **KIRAN Mental Health Helpline:** `1800-599-0019`
- **Vandrevala Foundation:** `9999 666 555`
- **AASRA Suicide Prevention:** `9820466726`
