import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Relationship Problems? Find Someone Who Will Listen | Haven",
  description:
    "Experiencing relationship anxiety, trust dilemmas, or constant misunderstandings? Connect with an empathetic human listener for private, calm support.",
  alternates: {
    canonical: "https://haven.care/relationship-support",
  },
  openGraph: {
    title: "Relationship Problems? Find Someone Who Will Listen",
    description:
      "Experiencing relationship anxiety, trust dilemmas, or constant misunderstandings? Connect with an empathetic human listener for private, calm support.",
    url: "https://haven.care/relationship-support",
    type: "article",
  },
};

export default function RelationshipSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Relationship Support"
      badge="Navigating Romantic Strain"
      headline="Relationship Problems? Find Someone Who Will Listen"
      subheadline="When someone you love feels distant, or when doubts and misunderstandings start eroding your peace, having a neutral person to talk to restores calm."
      readTime="5 min read"
      canonicalSlug="relationship-support"
      introParagraphs={[
        "Modern romantic partnerships carry enormous emotional expectations. We expect our partner to be our best friend, lover, confidant, and emotional anchor. When cracks form—whether through jealousy, mixed signals, trust fractures, or emotional burnout—the pain is visceral.",
        "Overanalyzing texts, replaying arguments in your head, and losing sleep over relationship anxiety can consume your days. Having a patient, independent listener provides an immediate release valve so you can untangle your thoughts without escalating conflict.",
      ]}
      keySections={[
        {
          heading: "The Exhausting Spiral of Overthinking and Mixed Signals",
          subheading: "When silence feels like a message of rejection",
          paragraphs: [
            "Delayed replies, changes in affection, or sudden emotional coldness frequently trigger relationship anxiety. You might find yourself analyzing every word or agonizing over whether they still care.",
            "Speaking about your vulnerabilities out loud helps slow down spiraling catastrophic thoughts. A listener helps you separate factual reality from fear-driven assumptions.",
          ],
        },
        {
          heading: "Trust Cracks and the Weight of Suspicion",
          subheading: "Rebuilding peace after dishonesty or emotional betrayal",
          paragraphs: [
            "Once trust is broken, maintaining hyper-vigilance is exhausting. Checking phones, questioning intentions, or fearing abandonment takes a severe psychological toll on your wellbeing.",
            "Carrying this suspicion alone causes profound distress. In a private peer session, you can openly discuss your fears and heartache without fearing that someone will judge you for being 'paranoid.'",
          ],
        },
        {
          heading: "Misunderstandings and Unmet Emotional Needs",
          subheading: "Why two loving people can still feel completely misunderstood",
          paragraphs: [
            "Often, conflicts don't arise from a lack of love, but from differing emotional styles. One partner may seek immediate reassurance, while the other withdraws to regulate stress. This dynamic can leave both feeling profoundly rejected.",
            "Articulating what you genuinely need—respect, consistency, affection, or space—in a safe conversation helps you express yourself more calmly when interacting with your partner.",
          ],
        },
        {
          heading: "Prioritizing Your Own Emotional Health",
          subheading: "You cannot pour from an empty cup",
          paragraphs: [
            "A healthy relationship should enrich your life, not constantly drain your spirit. Taking time to voice your personal feelings and reconnect with your self-worth is essential for your emotional stability.",
            "We are here to listen with warmth, patience, and zero judgment.",
          ],
        },
      ]}
      hindiHinglishNote="'Relationship problems me kis se advice ya baat karein?' अगर आप अपने रिश्ते में तनाव, शक या अकेलेपन से परेशान हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम बिना किसी पक्षपात के आपकी बात शांति से सुनेंगे।"
      faqs={[
        {
          q: "Will speaking to a listener fix my relationship?",
          a: "A listener does not 'fix' your partner, but talking helps calm your emotional turmoil, clarify your boundaries, and reduce impulsive reactions.",
        },
        {
          q: "What if I feel embarrassed to talk about my relationship?",
          a: "Almost everyone experiences relationship doubt, jealousy, or heartache at some point. Our listeners treat your thoughts with utmost respect and zero judgment.",
        },
        {
          q: "Can I connect anytime of the day?",
          a: "Yes. In the form on this page, choose any date and strict 24-hour time that fits your schedule, and our team will coordinate with you.",
        },
      ]}
      relatedArticles={[
        {
          title: "Heartbreak Support",
          slug: "/heartbreak-support",
          desc: "Processing breakup pain, grief, and emotional recovery.",
        },
        {
          title: "Marriage Problems Support",
          slug: "/marriage-problems",
          desc: "Navigating marital tension and communication breakdowns.",
        },
      ]}
    />
  );
}
