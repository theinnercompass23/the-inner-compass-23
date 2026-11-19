import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Family Problems Emotional Support — Talk to an Empathetic Listener | Haven",
  description:
    "Overwhelmed by family expectations, guilt, or conflict? Talk through your emotions in a safe, confidential environment. We listen with deep empathy on WhatsApp.",
  alternates: {
    canonical: "https://haven.care/family-problems",
  },
};

export default function FamilyProblemsPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="family-problems"
      pageTitle="Family Problems"
      badge="Family Dynamics & Boundaries"
      headline="Overwhelmed by Family Conflicts? You Deserve to Be Heard."
      subheadline="When family expectations become suffocating, having someone validate your feelings makes all the difference."
      introParagraphs={[
        "Family is meant to be a haven, but sometimes it becomes the source of intense pressure, boundary violations, comparison, and guilt. Navigating generational divides, parental pressure regarding career or marriage, or sibling rivalries can feel exhausting.",
        "Because cultural norms often dictate silence, you might feel like an 'ungrateful' person for even admitting that your family dynamic is hurting you. Haven provides a liberating, safe space where you can speak the honest truth without feeling guilty.",
      ]}
      hindiHinglishNote="परिवार के झगड़े और उम्मीदों का बोझ जब बर्दाश्त से बाहर हो जाए, तो किसी निष्पक्ष व्यक्ति से बात करना मन को असीम शांति देता है।"
      keyPoints={[
        {
          title: "Freedom from Family Guilt",
          desc: "You can love your family while still acknowledging that certain behaviors or expectations hurt you deeply.",
        },
        {
          title: "Safe Boundary Reflection",
          desc: "Talking through your experiences helps you recognize where your boundaries need gentle reinforcement.",
        },
        {
          title: "Culturally Sensitive Empathy",
          desc: "We understand the nuances of Indian family dynamics, parental expectations, and joint-family stresses.",
        },
      ]}
      faqs={[
        {
          q: "Can I talk about sensitive issues like inheritance or forced marriage pressure?",
          a: "Yes. Everything you share is handled with utmost sensitivity and confidentiality.",
        },
      ]}
    />
  );
}
