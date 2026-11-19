import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Someone to Listen Without Judgment — Private Emotional Support | Haven",
  description:
    "Do you just need someone to listen to your problems without judging or interrupting? Connect with a real human being on WhatsApp. Safe, quiet, and understanding.",
  alternates: {
    canonical: "https://haven.care/someone-to-listen",
  },
};

export default function SomeoneToListenPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="someone-to-listen"
      pageTitle="Someone to Listen"
      badge="Empathetic Listening"
      headline="Need Someone to Listen Without Judgment?"
      subheadline="No unsolicited advice. No interruptions. Just a genuine human being giving you their full attention."
      introParagraphs={[
        "Have you ever tried opening up to someone, only to be interrupted two sentences in with 'You know what you should do?' or 'Don't worry, everything happens for a reason'? While well-intentioned, advice is often the last thing an aching heart needs.",
        "What you often crave is the quiet dignity of being fully heard. To say the ugly, contradictory, messy things out loud and have someone say, 'I hear you. That sounds really heavy, and your feelings make complete sense.' That is the core promise of Haven.",
      ]}
      hindiHinglishNote="'Koi meri baat sunne wala chahiye' — अगर आपको लगता है कि आपकी बात कोई नहीं सुन रहा, तो आप हमारे साथ WhatsApp पर जुड़ सकते हैं। हम बिना किसी सलाह के आपकी बात सुनेंगे।"
      keyPoints={[
        {
          title: "Active, Attentive Listening",
          desc: "We read every sentence with genuine care and respond with validating, grounded empathy.",
        },
        {
          title: "A Pressure-Free Space",
          desc: "You don't need to reach a conclusion or fix your life in 30 minutes. You can simply exist and be heard.",
        },
        {
          title: "Judgment-Free Zone",
          desc: "Whatever you have done, thought, or felt, you will be met with acceptance and respect.",
        },
      ]}
      faqs={[
        {
          q: "How is this different from therapy?",
          a: "Therapy is clinical treatment designed to diagnose and treat mental disorders. We provide compassionate human peer listening, which is like talking to a trusted, impartial confidant.",
        },
      ]}
    />
  );
}
