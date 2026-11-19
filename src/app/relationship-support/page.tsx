import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Relationship Emotional Support — Unbiased Human Listening | Haven",
  description:
    "Struggling in a confusing or draining relationship? Feeling unseen, anxious, or unheard by your partner? Talk privately to a compassionate human listener on WhatsApp.",
  alternates: {
    canonical: "https://haven.care/relationship-support",
  },
};

export default function RelationshipSupportPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="relationship-support"
      pageTitle="Relationship Support"
      badge="Interpersonal Care"
      headline="Navigating Relationship Struggles? We're Here to Listen."
      subheadline="When love becomes complicated, confusing, or painful, you need a safe space to untangle your feelings."
      introParagraphs={[
        "Relationships can be our greatest source of warmth, but they can also become the source of our deepest confusion. Frequent arguments, silent treatments, emotional disconnection, and the fear of losing someone can leave you emotionally depleted.",
        "Often, you cannot talk to mutual friends without causing drama or awkwardness. Haven provides a strictly confidential sounding board where you can express your doubts, fears, and frustrations openly.",
      ]}
      hindiHinglishNote="रिश्तों की उलझनें कभी-कभी अंदर ही अंदर घुटने पर मजबूर कर देती हैं। अगर आप किसी से अपनी उलझन साझा करना चाहते हैं, तो हमारे व्हाट्सएप नंबर पर संपर्क करें।"
      keyPoints={[
        {
          title: "Untangling Confusion",
          desc: "Speak through your thoughts out loud to gain clarity on what you truly feel and need.",
        },
        {
          title: "Safe from Social Fallout",
          desc: "Because we have no connection to your social circle, you can be 100% honest without consequences.",
        },
        {
          title: "Gentle Validation",
          desc: "Your feelings are valid. Having them acknowledged brings an immediate sense of relief.",
        },
      ]}
      faqs={[
        {
          q: "Do you offer couple's therapy?",
          a: "No. Haven is an emotional listening and peer support service for individual emotional expression. We do not offer couple counseling.",
        },
      ]}
    />
  );
}
