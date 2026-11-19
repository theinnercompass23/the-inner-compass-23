import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Talk About Marriage Problems — Confidential Emotional Support | Haven",
  description:
    "Facing marital conflicts, in-law pressure, or emotional distance? Talk to an unbiased human listener in complete confidence. We listen without judging your marriage.",
  alternates: {
    canonical: "https://haven.care/marriage-problems",
  },
};

export default function MarriageProblemsPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="marriage-problems"
      pageTitle="Marriage Problems"
      badge="Marital Emotional Support"
      headline="Facing Marriage Difficulties? Find a Listening Ear."
      subheadline="Marriage challenges can feel lonely and suffocating. You deserve a private place to unburden your thoughts."
      introParagraphs={[
        "In India, marriage carries expectations not just between two individuals, but across extended families. When misunderstandings, financial strain, lack of intimacy, or in-law conflicts arise, sharing with parents often escalates tension rather than soothing it.",
        "Carrying marital strain alone day after day can damage your peace of mind and self-worth. Haven offers a private, non-judgmental space where you can share your side of the story without escalating family friction.",
      ]}
      hindiHinglishNote="शादीशुदा जिंदगी में आई कड़वाहट और तनाव को हर किसी से नहीं कहा जा सकता। अपनी पहचान पूरी तरह गुप्त रखकर हमसे अपनी बात शेयर करें।"
      keyPoints={[
        {
          title: "Complete Discretion",
          desc: "No family drama. No gossip. Your conversations stay strictly between you and our support team.",
        },
        {
          title: "A Release Valve for Stress",
          desc: "Vent out resentment, sadness, or exhaustion so you can think with a clearer, calmer mind.",
        },
        {
          title: "Non-Judgmental Listening",
          desc: "We do not take sides or preach traditional moral expectations. We listen with compassion.",
        },
      ]}
      faqs={[
        {
          q: "Will my spouse or family ever know I used this service?",
          a: "Never. We do not require public accounts, and all WhatsApp conversations are protected and private.",
        },
      ]}
    />
  );
}
