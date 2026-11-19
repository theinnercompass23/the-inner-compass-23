import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Need Someone to Talk to About Marriage Problems? | Haven",
  description:
    "Experiencing emotional distance, silent resentment, or communication gaps in your marriage? Find a confidential, neutral human listener to unburden your thoughts.",
  alternates: {
    canonical: "https://haven.care/marriage-problems",
  },
  openGraph: {
    title: "Need Someone to Talk to About Marriage Problems?",
    description:
      "Experiencing emotional distance, silent resentment, or communication gaps in your marriage? Find a confidential, neutral human listener to unburden your thoughts.",
    url: "https://haven.care/marriage-problems",
    type: "article",
  },
};

export default function MarriageProblemsPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Marriage Support"
      badge="Confidential Emotional Support"
      headline="When Marriage Feels Heavy: Finding an Unbiased Human Listener"
      subheadline="Living with unspoken tension, cold silence, or constant friction in marriage is deeply isolating. Having someone listen to your side without judgment brings quiet clarity."
      readTime="5 min read"
      canonicalSlug="marriage-problems"
      introParagraphs={[
        "Marriage is meant to be a sanctuary, but when communication breaks down, it can quickly become one of the loneliest places on earth. Walking on eggshells in your own home, anticipating arguments, or enduring days of punishing silence takes a severe emotional toll.",
        "Many people hesitate to confide in friends or parents because they don't want their spouse judged, or because relatives immediately offer unsolicited advice. Having an unbiased, confidential listener gives you a safe harbor to express your genuine frustration, grief, and longing.",
      ]}
      keySections={[
        {
          heading: "The Pain of Emotional Distance and the 'Roommate Syndrome'",
          subheading: "When intimacy fades into logistical routines and cold polite silence",
          paragraphs: [
            "It is rarely dramatic explosions that hurt the most; more often, it is the quiet erosion of emotional closeness. You may share a bed and coordinate household chores, but feel miles apart emotionally.",
            "Trying to initiate connection and being met with indifference or irritability can make you question your worth. Speaking these feelings out loud helps you understand that your need for warmth and connection is natural and valid.",
          ],
        },
        {
          heading: "Communication Breakdowns: The Cycle of Attack and Withdraw",
          subheading: "Why simple discussions turn into emotional battlegrounds",
          paragraphs: [
            "In strained marriages, simple everyday matters like bills or family visits frequently trigger disproportionate arguments. Underneath the surface frustration is usually a deeper cry: 'Do you see me? Does what I feel still matter to you?'",
            "When defensiveness sets in, both partners stop listening. Unloading your pent-up stress with an empathetic listener helps defuse intense emotional charges so you can think with calm clarity.",
          ],
        },
        {
          heading: "In-Law Dynamics and Extended Family Pressures",
          subheading: "The unique stressors in Indian and traditional marital households",
          paragraphs: [
            "In many cultures, marriage unites not just two individuals, but two extended family networks. Constant scrutiny from in-laws, differing cultural expectations, and feelings of being unprotected by your spouse can feel suffocating.",
            "Complaining about family to your partner often escalates loyalty conflicts. Having a completely neutral space outside your family allows you to express your real burdens without causing domestic warfare.",
          ],
        },
        {
          heading: "Important Boundary: Peer Listening vs. Clinical Therapy",
          subheading: "What Haven offers and what we do not",
          paragraphs: [
            "We want to be completely transparent: Haven is not a marriage counseling clinic, couples therapy service, or legal mediation platform. We do not provide marriage advice, assign blame, or instruct you on whether to stay or leave.",
            "What we do provide is something equally vital: an empathetic, attentive human ear. A place where you can vent, cry, reflect, and be heard with deep dignity.",
          ],
        },
      ]}
      hindiHinglishNote="'Shaadi me problems hain kis se baat karein?' अगर शादी में तनाव, अकेलापन या लगातार झगड़ों से आप परेशान हैं और किसी को अपना दुख बताना चाहते हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम बिना जजमेंट के आपकी पूरी बात सुनने के लिए उपलब्ध हैं।"
      faqs={[
        {
          q: "Will you tell my spouse or family what I share?",
          a: "Never. Your conversations are strictly confidential between you and your listener. We do not contact family members or partners.",
        },
        {
          q: "Do you give marriage advice or tell me what to do?",
          a: "No. Our role is to listen with empathy and hold a compassionate space for your feelings. We do not dictate your marital decisions.",
        },
        {
          q: "What if I feel completely alone in my marriage?",
          a: "Feeling alone inside a relationship is a very real, painful phenomenon. Sharing these thoughts helps ease the heavy isolation you are carrying.",
        },
      ]}
      relatedArticles={[
        {
          title: "Relationship Difficulties",
          slug: "/relationship-support",
          desc: "Navigating trust issues, misunderstandings, and emotional distance.",
        },
        {
          title: "Divorce & Separation Support",
          slug: "/divorce-support",
          desc: "Compassionate peer support during separation or marital dissolution.",
        },
      ]}
    />
  );
}
