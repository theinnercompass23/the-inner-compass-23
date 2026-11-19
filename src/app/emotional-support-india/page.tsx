import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Online Emotional Support in India — Private Peer Listening Service | Haven",
  description:
    "Looking for someone to talk to in India? Haven offers private, confidential human emotional support via WhatsApp for loneliness, career burnout, heartbreak, and stress.",
  alternates: {
    canonical: "https://haven.care/emotional-support-india",
  },
};

export default function EmotionalSupportIndiaPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="emotional-support-india"
      pageTitle="Emotional Support India"
      badge="Indian Peer Support"
      headline="Private Human Emotional Support in India"
      subheadline="A peaceful sanctuary designed for people living across India who need someone to listen without judgment."
      introParagraphs={[
        "Modern life in Indian metropolitan cities like Bangalore, Mumbai, Delhi-NCR, Pune, and Hyderabad has brought immense opportunity, but also unprecedented loneliness. Millions of young professionals and students move away from their hometowns, living alone in compact flats and working grueling hours.",
        "When the workday ends and the silence takes over, the lack of authentic human connection can feel unbearable. Haven bridges this gap by providing an accessible, immediate human listener directly on WhatsApp (+91 8810381949).",
      ]}
      hindiHinglishNote="भारत में रहकर जब अकेलापन घेर ले ('Dil ki baat karne ke liye koi chahiye'), तो हमारी टीम आपके साथ है। अपनी पसंदीदा भाषा हिंदी या अंग्रेजी में खुलकर बात करें।"
      keyPoints={[
        {
          title: "Rooted in Indian Realities",
          desc: "Our team understands everyday Indian struggles — from competitive exam burnout to joint-family tensions and urban isolation.",
        },
        {
          title: "Simple WhatsApp Delivery",
          desc: "India lives on WhatsApp. We don't force you into complex portals or logins. Talk directly from your existing messaging app.",
        },
        {
          title: "Affordable & Accessible",
          desc: "Support should never be gated behind exorbitant consultation fees. Reaching out is easy and compassionate.",
        },
      ]}
      faqs={[
        {
          q: "What are your operating hours?",
          a: "You can submit a request 24/7 on our website. Our listeners connect with you promptly based on your preferred time window.",
        },
      ]}
    />
  );
}
