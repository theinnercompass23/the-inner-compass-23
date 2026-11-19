import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Emotional Support After Divorce – Someone to Talk To | Haven",
  description:
    "Going through a divorce or separation? You don't have to carry the emotional burden alone. Find a safe, judgment-free space to speak with a human listener.",
  alternates: {
    canonical: "https://haven.care/divorce-support",
  },
  openGraph: {
    title: "Emotional Support After Divorce – Someone to Talk To",
    description:
      "Going through a divorce or separation? You don't have to carry the emotional burden alone. Find a safe, judgment-free space to speak with a human listener.",
    url: "https://haven.care/divorce-support",
    type: "article",
  },
};

export default function DivorceSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Divorce Support"
      badge="Navigating Life After Divorce"
      headline="Going Through a Divorce? You Don't Have to Face It Alone."
      subheadline="Divorce is not merely a legal dissolution; it is the dismantling of a shared reality, routines, and identity. Having someone who listens without taking sides brings steadying calm."
      readTime="5 min read"
      canonicalSlug="divorce-support"
      introParagraphs={[
        "Going through a divorce is widely recognized as one of life's most taxing transitions. Regardless of who initiated the separation or how mutual the decision seemed, the emotional aftermath is frequently filled with grief, second-guessing, anger, and heavy loneliness.",
        "In our society, divorce often carries an exhausting layer of social scrutiny, awkward family questions, and unsolicited opinions. Having a completely neutral, compassionate person to listen allows you to untangle your real feelings without having to manage anyone else's reactions.",
      ]}
      keySections={[
        {
          heading: "The Complex Layers of Grief and Disorientation",
          subheading: "Mourning not just the person, but the shared future you had envisioned",
          paragraphs: [
            "People often expect grief only after the death of a loved one, but divorce involves profound ambiguous loss. You mourn the loss of what could have been: the home you built, anniversary traditions, in-law relationships, and the sense of security.",
            "It is completely normal to oscillate between feeling liberated one hour and crushed by grief the next. These conflicting emotions are not signs of regression; they are natural phases of emotional adjustment.",
          ],
        },
        {
          heading: "Handling Family Pressure and Social Judgment",
          subheading: "Protecting your boundaries when everyone has an opinion",
          paragraphs: [
            "Especially within Indian and traditional family structures, divorce can bring intense social friction. Parents may express disappointment or fear, while relatives might offer judgmental commentary or ask intrusive questions.",
            "This social pressure often forces people to bottle up their pain so they appear 'strong.' But having a dedicated listening space where you don't need to put on a brave face is essential for healing.",
          ],
        },
        {
          heading: "The Silence of an Altered Routine",
          subheading: "Facing quiet evenings and rebuilding daily life",
          paragraphs: [
            "After years of shared living, returning to an empty home or managing household decisions alone can feel intensely disorienting. Even small tasks like grocery shopping or deciding dinner can feel laden with memory.",
            "Talking to a peer listener about these subtle, everyday hardships helps normalize them. You realize that feeling unsteady is a natural part of a major life transition, not a personal failing.",
          ],
        },
        {
          heading: "Rebuilding Self-Worth and Moving Forward at Your Own Pace",
          subheading: "One peaceful day at a time",
          paragraphs: [
            "Healing from divorce is not linear. There is no predetermined timeline for when you 'should' feel better. Reclaiming your peace begins with forgiving yourself for what went wrong and allowing yourself to feel whatever arises.",
            "You do not have to walk through this alone. Our human listening service offers a confidential, gentle refuge whenever you need to unburden your heart.",
          ],
        },
      ]}
      hindiHinglishNote="'Divorce ke baad akelapan aur samaj ka dabav?' अगर आप तलाक या सेपरेशन के दर्द से गुजर रहे हैं और अपनी भावनाएं किसी के साथ बांटना चाहते हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम आपकी पूरी बात बिना किसी जजमेंट के सुनेंगे।"
      faqs={[
        {
          q: "How can I deal with intense loneliness after divorce?",
          a: "Acknowledge the silence without rushing to fill it with harmful distractions. Establishing gentle daily routines, connecting with compassionate listeners, and allowing yourself to grieve the shared past are key foundations.",
        },
        {
          q: "What if I feel ashamed or guilty about the divorce?",
          a: "Guilt and shame are common responses, especially when family expectations were high. Remember that a relationship ending does not define your worth as a human being.",
        },
        {
          q: "Is Haven a legal or divorce counseling service?",
          a: "No. Haven is strictly an emotional support and human peer listening service. We do not provide legal advice, marriage counseling, or psychiatric therapy. We provide a safe, empathetic human ear.",
        },
        {
          q: "How do I schedule a time to speak on WhatsApp?",
          a: "Fill out the support form on this page with your preferred date and 24-hour time. We will confirm your preferred slot directly on WhatsApp.",
        },
      ]}
      relatedArticles={[
        {
          title: "Separation Support",
          slug: "/separation-support",
          desc: "Coping with the painful uncertainty, physical distance, and silence of separation.",
        },
        {
          title: "Marriage Problems Support",
          slug: "/marriage-problems",
          desc: "A neutral space to discuss communication gaps and marital tension.",
        },
      ]}
    />
  );
}
