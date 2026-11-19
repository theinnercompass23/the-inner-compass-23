import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Breakup & Heartbreak Support — Talk to an Empathetic Listener | Haven",
  description:
    "Suffering from a painful breakup or heartbreak? When it feels like nobody understands the ache in your chest, connect with an empathetic human listener on WhatsApp.",
  alternates: {
    canonical: "https://haven.care/breakup-support",
  },
};

export default function BreakupSupportPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="breakup-support"
      pageTitle="Breakup Support"
      badge="Heartbreak & Recovery"
      headline="Dealing with Heartbreak? You Don't Have to Suffer in Silence."
      subheadline="Sometimes the hardest part of a breakup is having nowhere to send the love and thoughts still left in your chest."
      introParagraphs={[
        "The end of a relationship can feel like physical grief. Your sleep is disrupted, your appetite disappears, and every song, location, or memory brings a wave of heartache. Society often expects you to 'snap out of it' within a few weeks, making you feel like a burden to your friends.",
        "Your pain is real, and your grief deserves time and compassion. Haven connects you with an attentive human listener who will listen to your story, your regrets, and your tears without ever checking the clock or rolling their eyes.",
      ]}
      hindiHinglishNote="'Breakup ke baad kis se baat karein?' जब दोस्त आपकी पुरानी बातें सुनकर थक जाते हैं, तब भी हमारी टीम आपके दिल का हाल सुनने के लिए हमेशा तत्पर है।"
      keyPoints={[
        {
          title: "Release the Repetitive Thoughts",
          desc: "It is normal to replay conversations in your head. Sharing them with an empathetic ear helps break the loop.",
        },
        {
          title: "No Clichés or Toxic Positivity",
          desc: "We won't tell you 'there are plenty of fish in the sea'. We sit with your pain with gentle respect.",
        },
        {
          title: "Support During Late Nights",
          desc: "The nights are often the loneliest hours. Send a message on WhatsApp and find a comforting presence.",
        },
      ]}
      faqs={[
        {
          q: "Is it okay if I cry while talking?",
          a: "Yes, completely. Crying is a natural release. Take all the time you need.",
        },
      ]}
    />
  );
}
