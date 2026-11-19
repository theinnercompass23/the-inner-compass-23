import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Someone to Talk to After Separation | Emotional Support | Haven",
  description:
    "Dealing with separation? Find an empathetic, safe space to talk through loneliness, uncertainty, and difficult emotional changes without judgment.",
  alternates: {
    canonical: "https://haven.care/separation-support",
  },
  openGraph: {
    title: "Someone to Talk to After Separation | Emotional Support",
    description:
      "Dealing with separation? Find an empathetic, safe space to talk through loneliness, uncertainty, and difficult emotional changes without judgment.",
    url: "https://haven.care/separation-support",
    type: "article",
  },
};

export default function SeparationSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Separation Support"
      badge="Navigating Separation & Distance"
      headline="Dealing With Separation: Finding a Caring Voice in the Uncertainty"
      subheadline="Living in emotional limbo is exhausting. When you don't know what tomorrow holds, having a safe, calm presence to listen helps you stay grounded."
      readTime="5 min read"
      canonicalSlug="separation-support"
      introParagraphs={[
        "Separation is often described as one of the most agonizing emotional spaces because of its inherent ambiguity. Unlike a definitive ending, separation leaves you suspended between hope, grief, resentment, and fear of the unknown.",
        "Whether you are physically separated and living in different spaces, or emotionally detached while sharing the same roof, the daily strain can drain your emotional stamina. Having someone outside your family who listens with compassion gives you clarity and breathing room.",
      ]}
      keySections={[
        {
          heading: "The Exhausting Weight of the 'In-Between'",
          subheading: "Living with constant questions about the future",
          paragraphs: [
            "Will we reconcile? Is this permanent? What should I tell our families? What happens next? These questions often spin endlessly in your mind, leading to sleepless nights and difficulty concentrating during the day.",
            "In this state of limbo, well-meaning friends may push you to take quick decisions before you are emotionally prepared. Having a dedicated human listener who does not pressure you allows your feelings to settle organically.",
          ],
        },
        {
          heading: "Navigating Sudden Changes in Living Spaces and Silence",
          subheading: "The shock of a quiet home and changed communication",
          paragraphs: [
            "When communication drops to purely logistical texts or total silence, the absence feels palpable. Checking your phone repeatedly or expecting their footsteps in the hallway is an instinctive attachment reaction.",
            "Acknowledging these grief reactions without shame is essential. You are human, and adapting to abrupt disconnection takes time and tenderness.",
          ],
        },
        {
          heading: "Why You Need a Confidant Who Doesn't Take Sides",
          subheading: "Protecting yourself from polarized advice",
          paragraphs: [
            "When you talk to close relatives about marital separation, their instinct is often to attack the other person or insist on immediate reconciliation. Both extremes can make you feel cornered or unheard.",
            "Our peer listeners are completely independent. We do not judge your partner, tell you what choices to make, or try to steer your relationship. We are here solely to hear your experience and offer genuine human warmth.",
          ],
        },
        {
          heading: "Taking Care of Your Emotional Foundations Today",
          subheading: "Focusing on what is within your control right now",
          paragraphs: [
            "While you cannot control the outcome of the separation single-handedly, you can nurture your own emotional stability. Eating regular meals, sleeping without guilt, and releasing heavy emotions through conversation are powerful acts of self-care.",
            "You are not alone in this difficult phase. Someone is ready to listen whenever you want to reach out.",
          ],
        },
      ]}
      hindiHinglishNote="'Separation ke baad kya karein? Kis se baat karein?' सेपरेशन के दौरान अकेलापन और अनिश्चितता बहुत भारी पड़ सकती है। अगर आप अपने दिल का बोझ हल्का करना चाहते हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम हिंदी और हिंग्लिश में ध्यान से सुनेंगे।"
      faqs={[
        {
          q: "How can I deal with the anxiety of not knowing if we will get back together?",
          a: "Focus on bringing your attention back to the present day. When your mind races months ahead, ground yourself in your immediate physical environment and speak with a compassionate listener to release acute tension.",
        },
        {
          q: "Is it normal to still miss them even after severe disagreements?",
          a: "Yes. Emotional attachment is deep and complex. Loving someone and recognizing that the dynamic was harmful or broken can exist at the same time.",
        },
        {
          q: "Can I connect privately without anyone finding out?",
          a: "Yes. Your privacy is paramount. Conversations happen directly on WhatsApp between you and our support team.",
        },
      ]}
      relatedArticles={[
        {
          title: "Divorce Support",
          slug: "/divorce-support",
          desc: "Navigating legal stress, life re-adjustment, and emotional healing.",
        },
        {
          title: "Heartbreak Support",
          slug: "/heartbreak-support",
          desc: "Processing grief, loneliness, and moving forward after romantic loss.",
        },
      ]}
    />
  );
}
