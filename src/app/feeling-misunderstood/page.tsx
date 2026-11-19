import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Feeling Misunderstood? Find Someone Who Truly Hears You | Haven",
  description:
    "Tired of people dismissing or misjudging your feelings? Experience the profound comfort of speaking to an empathetic human listener who validates your reality.",
  alternates: {
    canonical: "https://haven.care/feeling-misunderstood",
  },
  openGraph: {
    title: "Feeling Misunderstood? Find Someone Who Truly Hears You",
    description:
      "Tired of people dismissing or misjudging your feelings? Experience the profound comfort of speaking to an empathetic human listener who validates your reality.",
    url: "https://haven.care/feeling-misunderstood",
    type: "article",
  },
};

export default function FeelingMisunderstoodPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Feeling Misunderstood"
      badge="Empathetic Listening"
      headline="Feeling Misunderstood? Find Someone Who Truly Hears You"
      subheadline="When everyone around tells you that 'you are overreacting' or dismisses your pain, having someone acknowledge your reality restores your peace of mind."
      readTime="5 min read"
      canonicalSlug="feeling-misunderstood"
      introParagraphs={[
        "Few experiences are as emotionally exhausting as feeling consistently misunderstood by the people in your life. You explain your boundaries, your feelings, or your distress, only to be met with blank stares, dismissal, or defensive counter-arguments.",
        "Over time, chronic misunderstanding causes you to doubt your own intuition and emotions. Having a safe, patient listener who does not argue with your reality is deeply healing.",
      ]}
      keySections={[
        {
          heading: "The Subtle Agony of Emotional Invalidation",
          subheading: "When people minimize what you are going through",
          paragraphs: [
            "Phrases like 'You are making a big deal out of nothing,' 'You are too sensitive,' or 'Look on the bright side' are forms of toxic positivity and invalidation. They communicate that your genuine emotional experience is inconvenient or flawed.",
            "In our sessions, you will never be told you are 'too sensitive.' Whatever you feel is met with respect and gentle curiosity.",
          ],
        },
        {
          heading: "Why We Shut Down and Stop Sharing",
          subheading: "The protective silence that turns into deep isolation",
          paragraphs: [
            "When sharing feelings repeatedly leads to arguments or dismissal, a natural defense mechanism is to withdraw into silence. You answer with a perfunctory 'I'm fine' and keep your turmoil locked inside.",
            "While silence protects you from immediate criticism, it deepens inner loneliness. Speaking with a compassionate stranger lets you safely practice vulnerability again.",
          ],
        },
        {
          heading: "Reclaiming Trust in Your Own Perspective",
          subheading: "You are the primary authority on your inner experience",
          paragraphs: [
            "You don't need anyone's permission to feel hurt, tired, anxious, or lonely. Connecting with someone who reflects your feelings accurately helps rebuild your self-trust.",
            "You deserve to be heard, seen, and treated with kindness.",
          ],
        },
      ]}
      hindiHinglishNote="'Koi meri baat samajhne wala nahi hai?' अगर आप महसूस करते हैं कि आपके आसपास के लोग आपकी भावनाओं को नहीं समझ रहे हैं या आपको जज कर रहे हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम आपको पूरी निष्पक्षता से सुनेंगे।"
      faqs={[
        {
          q: "What should I do when people tell me I'm too sensitive?",
          a: "Recognize that high sensitivity is often a sign of deep empathy and awareness, not a flaw. Seek listeners who value your depth rather than asking you to suppress it.",
        },
        {
          q: "Can I speak about any personal dilemma?",
          a: "Yes. From family friction to career doubts and quiet heartache, all personal concerns are welcome.",
        },
      ]}
      relatedArticles={[
        {
          title: "Loneliness Support",
          slug: "/feeling-lonely",
          desc: "Navigating deep emotional isolation and finding connection.",
        },
        {
          title: "Family Problems Support",
          slug: "/family-problems",
          desc: "Navigating domestic misunderstandings and emotional pressure.",
        },
      ]}
    />
  );
}
