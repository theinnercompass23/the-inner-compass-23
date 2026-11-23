import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Relationship Support – Someone to Talk to About Relationship Problems | The Inner Compass 23",
  description:
    "Feeling unheard, distant, or anxious in your relationship? Need a safe, neutral space to untangle your feelings? Connect with an empathetic human listener on WhatsApp.",
  alternates: {
    canonical: "https://haven.care/relationship-support",
  },
  openGraph: {
    title: "Relationship Support – Someone to Talk to About Relationship Problems",
    description:
      "When communication breaks down or trust feels fragile, speaking with a neutral human listener brings relief and clarity. 100% confidential 1-on-1 support.",
    url: "https://haven.care/relationship-support",
    type: "article",
  },
};

export default function RelationshipSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Relationship Support"
      badge="Navigating Partnership Difficulties"
      headline="Feeling Unheard in Your Relationship? We Are Here to Listen."
      subheadline="When communication breaks down, silence turns into resentment, and emotional distance grows, carrying the tension alone is exhausting. Talk through your feelings in a safe, neutral space."
      readTime="7 min read"
      heroImage="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=1200"
      canonicalSlug="relationship-support"
      introParagraphs={[
        "Every partnership experiences difficult seasons, but when misunderstandings become frequent, emotional distance sets in, and simple conversations spiral into arguments, relationship stress can dominate every waking hour. You feel like you are walking on eggshells in your own life, constantly guarding your words or wondering why your partner seems distant.",
        "Often, talking to mutual friends or family members feels risky—they may judge your partner, offer biased advice, or gossip. You need a completely independent, neutral human listener who has no personal stake in your relationship, giving you the freedom to express your deepest worries honestly.",
      ]}
      keySections={[
        {
          heading: "1. The Pain of Feeling Emotionally Unheard",
          subheading: "When words are spoken but connection is absent",
          paragraphs: [
            "One of the loneliest experiences in life is feeling invisible inside your own romantic partnership. You try to explain what is hurting you, but your partner gets defensive, shuts down ('stonewalling'), or minimizes your concerns with: 'You're overreacting' or 'You're too sensitive.'",
            "Over time, you stop bringing up issues to avoid conflict. But silence does not heal problems; it transforms unspoken hurt into deep emotional exhaustion and chronic resentment. Having an Inner Compass 23 peer listener who truly hears you validates your inner reality and breaks the feeling of being crazy.",
          ],
        },
        {
          heading: "2. Navigating Trust Cracks and Lingering Insecurity",
          subheading: "Rebuilding emotional safety when confidence has been shaken",
          paragraphs: [
            "Whether caused by emotional betrayal, broken promises, secrecy, or sudden distance, cracks in relationship trust trigger intense hypervigilance. You find yourself analyzing their schedule, checking their social media, or feeling a pit in your stomach when their phone buzzes.",
            "Living in chronic suspicion is mentally agonizing. Speaking these fears out loud to an objective human listener helps you separate grounded intuition from anxiety loops, allowing you to approach your partner with calm clarity rather than panic.",
          ],
        },
        {
          heading: "3. The Exhaustion of Walking on Eggshells",
          subheading: "Losing your authentic self to keep the peace",
          paragraphs: [
            "When a partner has an unpredictable temper, emotional volatility, or gives the silent treatment, you gradually reshape your entire personality to avoid setting them off. You swallow your preferences, hide your friendships, and censor your thoughts.",
            "This chronic accommodation slowly erodes your self-esteem. You forget who you were before the relationship. A conversation with a peer listener provides a supportive mirror where you can reconnect with your own voice and remember your inherent worth.",
          ],
        },
        {
          heading: "4. What a Human Listening Session Provides vs. What It Does Not",
          subheading: "Clarity on our non-clinical peer support model",
          paragraphs: [
            "Our listeners do not act as marriage judges, tell you whether to break up, or analyze your partner's psychology. We are not couples therapists. We are a dedicated sounding board for *you* as an individual.",
            "We listen to your doubts, fears, and hopes without interruption. By speaking freely, you untangle the emotional knot in your chest and find the courage to make decisions that honor your well-being.",
          ],
        },
      ]}
      practicalSteps={[
        {
          step: "Identify Your Non-Negotiable Emotional Needs",
          desc: "Write down the three core emotional requirements you need to feel safe and loved (e.g., honest communication, emotional responsiveness, mutual respect).",
        },
        {
          step: "Practice the 'I-Statement' Communication Pause",
          desc: "Instead of saying 'You never listen,' try 'I feel lonely when our conversations get interrupted.' If defensive reactions persist, step away calmly.",
        },
        {
          step: "Stop Involving Biased Family Members",
          desc: "Protect your relationship privacy from relatives who hold long-term grudges. Use a confidential, neutral listener to process frustration.",
        },
        {
          step: "Schedule an Individual Decompression Session",
          desc: "Book a 1-on-1 listening slot on WhatsApp to speak freely without fearing your words will be used against you in your next argument.",
        },
      ]}
      serviceBoundaries={{
        provides: [
          "Attentive, empathetic, and neutral human active listening for individuals",
          "A safe, judgment-free sounding board to untangle relationship stress",
          "Scheduled 1-on-1 private WhatsApp conversations",
          "Respectful validation without telling you what decisions to make",
          "100% confidential communication",
        ],
        doesNotProvide: [
          "Joint couples therapy, marital mediation, or relationship counseling",
          "Psychological diagnostic labeling of your partner (e.g. narcissism)",
          "Legal advice concerning domestic contracts, prenups, or separation",
          "Domestic violence emergency intervention or physical safety protection",
        ],
      }}
      hindiHinglishNote="'Relationship me baatein band ho gayi hain aur samjhauta karna mushkil lag raha hai?' अगर आपके रिश्ते में गलतफहमियां बढ़ गई हैं और आप किसी ऐसे इंसान से बात करना चाहते हैं जो बिना जज किए आपकी बात समझे, तो आज ही WhatsApp पर हमसे जुड़ें।"
      faqs={[
        {
          q: "Can my partner and I join the conversation together?",
          a: "No. The Inner Compass 23 is an individual peer listening service. We provide 1-on-1 confidential space for you as an individual to express your feelings without pressure from your partner.",
        },
        {
          q: "Will the listener tell me whether I should leave my relationship?",
          a: "No. We believe you hold the answers to your own life. Our role is to listen deeply, ask thoughtful questions, and help you untangle your feelings so you can arrive at your own clear decisions.",
        },
        {
          q: "How can I tell if my relationship problems are normal or toxic?",
          a: "All relationships have disagreements, but chronic contempt, silent treatment, emotional manipulation, or walking on eggshells are unhealthy patterns that require careful personal reflection and firm boundaries.",
        },
      ]}
      relatedArticles={[
        {
          title: "Marriage Problems Support",
          slug: "/marriage-problems",
          desc: "A neutral space to discuss marital tension, family expectations, and feeling unheard.",
        },
        {
          title: "Heartbreak Support",
          slug: "/heartbreak-support",
          desc: "Navigating deep emotional grief, difficult memories, and healing after a breakup.",
        },
        {
          title: "Separation Support",
          slug: "/separation-support",
          desc: "Coping with the painful uncertainty and altered routines of living apart.",
        },
        {
          title: "Feeling Misunderstood",
          slug: "/feeling-misunderstood",
          desc: "When partners dismiss your feelings, experience the relief of feeling truly heard.",
        },
      ]}
    />
  );
}
