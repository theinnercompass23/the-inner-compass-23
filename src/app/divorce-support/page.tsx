import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Emotional Support After Divorce — Private Human Listening in India | Haven",
  description:
    "Navigating the emotional aftermath of divorce? Facing societal judgment, grief, or loneliness? Talk to an empathetic human listener on WhatsApp in complete privacy.",
  alternates: {
    canonical: "https://haven.care/divorce-support",
  },
};

export default function DivorceSupportPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="divorce-support"
      pageTitle="Divorce Support"
      badge="Life Transition & Healing"
      headline="Emotional Support for People Going Through Divorce"
      subheadline="The end of a marriage brings grief, identity shifts, and loneliness. You don't have to walk this path alone."
      introParagraphs={[
        "Going through a divorce in India often carries heavy social scrutiny, family pressure, and an acute sense of isolation. Even when divorce is the right decision, the grief of losing a shared future, familiar routines, and personal certainty can be overwhelming.",
        "Friends and relatives frequently offer unsolicited opinions or take sides. Haven provides an impartial, empathetic human listener who is solely there to support your emotional well-being without judging your past decisions.",
      ]}
      hindiHinglishNote="डिवोर्स के बाद समाज और परिवार का दबाव बहुत भारी हो सकता है ('Divorce ke baad kis se baat karein'). आप अपने दर्द, अकेलेपन और उलझन को बिना किसी संकोच के साझा कर सकते हैं।"
      keyPoints={[
        {
          title: "Grieving Without Shame",
          desc: "Acknowledge the sorrow and loss without having to defend your choices or apologize for your feelings.",
        },
        {
          title: "Impartial Human Presence",
          desc: "Unlike family members who may have emotional stakes, our team offers objective, compassionate listening.",
        },
        {
          title: "Processing Identity Changes",
          desc: "Rebuilding your life after marriage requires patience. Talking through your thoughts brings clarity.",
        },
        {
          title: "Confidentiality Guaranteed",
          desc: "Your identity and conversations remain private. No social stigma or exposure.",
        },
      ]}
      faqs={[
        {
          q: "Do you provide legal or divorce counseling?",
          a: "No. We provide human emotional support and peer listening. We do not offer legal counsel or marital arbitration.",
        },
        {
          q: "How do I start a conversation?",
          a: "Select 'I'm Going Through a Divorce' in the form below, enter your WhatsApp details, and connect with our team directly.",
        },
      ]}
    />
  );
}
