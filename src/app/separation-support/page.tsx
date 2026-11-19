import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Separation Support — Human Emotional Listening When Living Apart | Haven",
  description:
    "Dealing with marital or relationship separation? The limbo and quiet nights can be exhausting. Talk to a caring human listener privately on WhatsApp without judgment.",
  alternates: {
    canonical: "https://haven.care/separation-support",
  },
};

export default function SeparationSupportPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="separation-support"
      pageTitle="Separation Support"
      badge="Navigating Separation"
      headline="Coping with Separation? Have Someone Listen."
      subheadline="Living apart brings uncertainty, emotional shock, and quiet longing. We provide a calm space to talk."
      introParagraphs={[
        "Separation is often an ambiguous grief. You are no longer living together, yet legal and emotional ties remain unresolved. The sudden quiet of an empty home, the disruption of everyday habits, and the dread of an uncertain future can trigger intense anxiety.",
        "When friends tell you to 'move on' before you are ready, or when you hesitate to worry your aging parents, Haven offers an understanding human listener who will simply hold space for where you are today.",
      ]}
      hindiHinglishNote="अलग होने का दर्द और भविष्य की अनिश्चितता मन को बहुत विचलित करती है। अगर आपके पास कोई नहीं है जिससे आप अपना दिल हल्का कर सकें, तो हमारे WhatsApp पर सीधे जुड़ें।"
      keyPoints={[
        {
          title: "Honoring Ambiguous Loss",
          desc: "It is normal to feel hope one day and deep sorrow the next. We accept your contradictory emotions.",
        },
        {
          title: "A Sounding Board for Heavy Days",
          desc: "Express the thoughts you cannot tell your spouse or mutual friends without fear of retaliation.",
        },
        {
          title: "Safe, Respectful Space",
          desc: "We treat your story with complete dignity. No prying questions or judgment.",
        },
        {
          title: "Accessible Anytime",
          desc: "Connect from home or anywhere you feel safe via direct WhatsApp messaging.",
        },
      ]}
      faqs={[
        {
          q: "What if I am still hoping for reconciliation?",
          a: "You can talk about your hopes, your grief, and your fears freely. We don't push any agenda; we support your emotional peace.",
        },
      ]}
    />
  );
}
