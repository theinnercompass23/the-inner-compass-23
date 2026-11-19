import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Heartbreak Support – When You're Struggling After a Breakup | Haven",
  description:
    "Going through heartbreak can feel overwhelming. Explore ways to process your emotions and find a supportive space to talk with someone.",
  alternates: {
    canonical: "https://haven.care/heartbreak-support",
  },
  openGraph: {
    title: "Heartbreak Support – When You're Struggling After a Breakup",
    description:
      "Going through heartbreak can feel overwhelming. Explore ways to process your emotions and find a supportive space to talk with someone.",
    url: "https://haven.care/heartbreak-support",
    type: "article",
  },
};

export default function HeartbreakSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Heartbreak Support"
      badge="Breakup & Heartbreak Recovery"
      headline="Finding Someone to Talk to After Heartbreak"
      subheadline="When the person you used to tell everything to is no longer there, having a gentle, unbiased person to listen can make all the difference."
      readTime="5 min read"
      canonicalSlug="heartbreak-support"
      introParagraphs={[
        "Heartbreak is one of the most intense and disorienting human experiences. When a romantic bond fractures, you aren't just losing a partner; you are losing routines, shared jokes, future plans, and the comforting feeling that someone is always in your corner.",
        "In the days and months following a breakup, it is entirely normal for grief to come in waves. You might feel fine in the morning, only to be struck by a wave of crushing sadness in the evening when silence fills your room. Knowing that someone is willing to sit with you in that space—without offering dismissive advice or telling you to 'just move on'—can bring immense relief.",
      ]}
      keySections={[
        {
          heading: "Why Heartbreak Feels Emotionally and Physically Overwhelming",
          subheading: "Understanding the neurochemical and emotional shock of a breakup",
          paragraphs: [
            "Psychological and neuroscience research shows that romantic rejection activates the same distress neural networks as physical pain. Your nervous system is coping with the sudden withdrawal of emotional safety, shared dopamine, and predictable intimacy.",
            "This is why heartbreak frequently manifests in physical symptoms: a hollow chest sensation, loss of appetite, insomnia, racing thoughts, and mental fog. It is not an overreaction; it is a profound grief response.",
          ],
        },
        {
          heading: "Missing Someone and Dealing With Involuntary Memories",
          subheading: "When every street, song, and notification triggers a reminder",
          paragraphs: [
            "One of the hardest aspects of moving on is the constant ambush of memories. An old text, a shared playlist, or a familiar coffee shop can suddenly reopen the emotional wound. Many people feel guilty or frustrated with themselves for 'still thinking about them.'",
            "At Haven, we believe emotional processing requires patience. Forcing yourself to suppress memories often makes them stronger. Speaking out loud about what you miss allows your mind to organize the loss rather than remaining trapped in a loop.",
          ],
        },
        {
          heading: "Why Friends and Family Sometimes Exhaust Their Capacity",
          subheading: "Finding a private space where you aren't afraid of being a burden",
          paragraphs: [
            "Friends and relatives usually mean well, but after a few weeks, they may inadvertently offer hurried platitudes like 'you deserve better' or 'plenty of fish in the sea.' While well-intentioned, these phrases can make you feel rushed or misunderstood.",
            "You might also hesitate to reach out to friends because you don't want to feel like a broken record. Having an independent human listener provides a confidential outlet where you can express the same thoughts as many times as you need, without judgment.",
          ],
        },
        {
          heading: "Small, Gentle Steps Toward Emotional Grounding",
          subheading: "Rebuilding one quiet day at a time",
          paragraphs: [
            "Recovery is not about waking up one day completely detached. It is about gradually expanding your ability to hold grief while taking care of basic needs. Small anchors—such as drinking a warm cup of tea, stepping outside for ten minutes of sunlight, or writing down your uncensored feelings—help calm your central nervous system.",
            "Most importantly, giving voice to your heartache prevents sorrow from hardening into isolation. You deserve to be heard with kindness.",
          ],
        },
      ]}
      hindiHinglishNote="क्या आप ब्रेकअप या दिल टूटने के बाद अकेलापन महसूस कर रहे हैं? 'Breakup ke baad kis se baat karein?' अगर आपके पास कोई नहीं है जो बिना जज किए आपकी बात सुने, तो हमारे WhatsApp पर कनेक्ट करें। हम हिंदी और हिंग्लिश में शांति से सुनने के लिए तैयार हैं।"
      faqs={[
        {
          q: "Is it normal to feel like I will never be happy again after a breakup?",
          a: "Yes. In the acute stages of heartbreak, cognitive narrowing makes the current pain feel permanent. While it feels unbearable right now, emotional intensity gradually stabilizes as you express and process your grief.",
        },
        {
          q: "Why do I feel lonely even when I am surrounded by friends?",
          a: "Loneliness after a breakup is not a lack of people; it is the specific absence of emotional intimacy and shared attachment with the person you were closest to.",
        },
        {
          q: "Can I talk about my breakup on WhatsApp without giving clinical details?",
          a: "Absolutely. Haven is a human peer listening service. You don't need a medical diagnosis or therapy background. You can simply share what's on your heart.",
        },
        {
          q: "How does the date and time scheduling work?",
          a: "When submitting the form, pick your preferred date and strict 24-hour time. Our peer team will confirm availability directly on WhatsApp.",
        },
      ]}
      relatedArticles={[
        {
          title: "What to Do When You Feel Lonely",
          slug: "/feeling-lonely",
          desc: "Navigating deep emotional isolation and finding someone who listens.",
        },
        {
          title: "Relationship Difficulties",
          slug: "/relationship-support",
          desc: "Understanding misunderstandings, emotional distance, and unspoken relationship pain.",
        },
      ]}
    />
  );
}
