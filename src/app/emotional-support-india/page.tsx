import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Online Emotional Support in India — Private Peer Listening Service | Haven",
  description:
    "Looking for someone to talk to in India? Haven offers private, confidential human emotional support via WhatsApp for loneliness, career burnout, heartbreak, and stress.",
  alternates: {
    canonical: "https://haven.care/emotional-support-india",
  },
  openGraph: {
    title: "Online Emotional Support in India — Private Peer Listening Service",
    description:
      "Looking for someone to talk to in India? Haven offers private, confidential human emotional support via WhatsApp for loneliness, career burnout, heartbreak, and stress.",
    url: "https://haven.care/emotional-support-india",
    type: "article",
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
      readTime="5 min read"
      introParagraphs={[
        "Modern life in Indian metropolitan cities like Bangalore, Mumbai, Delhi-NCR, Pune, and Hyderabad has brought immense opportunity, but also unprecedented loneliness. Millions of young professionals and students move away from their hometowns, living alone in compact flats and working grueling hours.",
        "When the workday ends and the silence takes over, the lack of authentic human connection can feel unbearable. Haven bridges this gap by providing an accessible, immediate human listener directly on WhatsApp (+91 8810381949).",
      ]}
      hindiHinglishNote="भारत में रहकर जब अकेलापन घेर ले ('Dil ki baat karne ke liye koi chahiye'), तो हमारी टीम आपके साथ है। अपनी पसंदीदा भाषा हिंदी या अंग्रेजी में खुलकर बात करें।"
      keySections={[
        {
          heading: "Rooted in Everyday Indian Realities",
          subheading: "Understanding joint family dynamics, career exams, and societal expectations",
          paragraphs: [
            "Indian family and social structures carry unique beauty, but also distinct pressures: marriage expectations, career comparisons, in-law scrutiny, and cultural stigmas around emotional struggle.",
            "Our listeners live and understand these realities. You don't have to spend half your time explaining cultural context; you can speak naturally about your life.",
          ],
        },
        {
          heading: "Connecting Directly on WhatsApp: Frictionless and Private",
          subheading: "No new apps to install, no complicated portals",
          paragraphs: [
            "India lives on WhatsApp. We don't force you through awkward account creations, video portals, or clinical intake forms. You simply select your concern, choose your time, and chat naturally.",
            "All conversations are protected by end-to-end encryption and our strict ethical commitment to complete confidentiality.",
          ],
        },
        {
          heading: "Free Access Without Financial Hurdles",
          subheading: "Support when you need it most",
          paragraphs: [
            "Therapy sessions in India can cost ₹2,000 to ₹5,000 per hour, making emotional support inaccessible to students and young earners. Haven eliminates payment barriers so you have a real human to confide in without financial stress.",
            "You are never alone in this country. Reach out whenever you need someone to listen.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Can I talk in Hindi or Hinglish?",
          a: "Yes. Our listeners are fluent in Hindi, English, and Hinglish. Speak whatever feels most natural to you.",
        },
        {
          q: "What are your operating hours?",
          a: "You can submit a request 24/7 on our website. In the form, pick your preferred date and 24-hour time slot, and our team will coordinate with you.",
        },
      ]}
      relatedArticles={[
        {
          title: "Loneliness Support",
          slug: "/feeling-lonely",
          desc: "Navigating deep emotional isolation and finding someone who listens.",
        },
        {
          title: "Need Someone to Talk To?",
          slug: "/someone-to-talk",
          desc: "Connect with an empathetic, unbiased human listener online.",
        },
      ]}
    />
  );
}
