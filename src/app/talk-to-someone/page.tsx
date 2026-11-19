import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Talk to Someone Online — Private Human Emotional Support in India | Haven",
  description:
    "Need someone to talk to right now? Connect privately with a compassionate human listener without judgment. We listen to your feelings via WhatsApp. Zero clinical jargon.",
  alternates: {
    canonical: "https://haven.care/talk-to-someone",
  },
};

export default function TalkToSomeonePage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="talk-to-someone"
      pageTitle="Talk to Someone"
      badge="Human Peer Listening Service"
      headline="Need Someone to Talk To? We're Here to Listen."
      subheadline="Sometimes the greatest relief comes from simply being heard by a real human being."
      introParagraphs={[
        "When emotions become too heavy to hold, keeping them locked inside can feel suffocating. You might find yourself scrolling through your phone, looking at hundreds of contacts, yet realizing there is no one you can comfortably text without fear of burdening them or being judged.",
        "Haven exists for moments exactly like this. We provide private, non-judgmental human emotional support. You don't need a medical diagnosis or a formal reason to reach out. If something is bothering you, that is reason enough to talk.",
      ]}
      hindiHinglishNote="अगर आप अकेला महसूस कर रहे हैं और किसी से दिल की बात कहना चाहते हैं ('Mujhe kisi se baat karni hai'), तो आप बेझिझक हिंदी या हिंग्लिश में अपनी बात साझा कर सकते हैं।"
      keyPoints={[
        {
          title: "Zero Unsolicited Advice",
          desc: "We don't tell you how to fix your life or dismiss your pain with toxic positivity. We listen deeply.",
        },
        {
          title: "Direct WhatsApp Connection",
          desc: "No complicated signups or apps to download. Connect directly with our team on WhatsApp.",
        },
        {
          title: "Complete Privacy",
          desc: "Your conversation remains between you and our support team. Your details are never published.",
        },
        {
          title: "Human Empathy Over Algorithms",
          desc: "You talk with a genuine, caring human being who gives you their undivided, patient attention.",
        },
      ]}
      faqs={[
        {
          q: "How soon can I talk to someone after submitting?",
          a: "Once you submit the form, a WhatsApp chat opens immediately with our team (+91 8810381949). We respond promptly based on your preferred time.",
        },
        {
          q: "Is this a free service?",
          a: "Reaching out and starting your conversation on WhatsApp is completely straightforward. Our goal is to ensure emotional support is within reach.",
        },
        {
          q: "Is Haven an alternative to hospital or psychiatric care?",
          a: "No. We provide peer emotional listening. For psychiatric medication or severe clinical emergencies, please call Tele-MANAS at 14416.",
        },
      ]}
    />
  );
}
