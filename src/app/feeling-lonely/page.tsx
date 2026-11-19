import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "I Feel Lonely and Need Someone to Talk To | Haven Emotional Support",
  description:
    "Feeling lonely and isolated? Living alone with no one to share your feelings with? Talk to a caring human listener on WhatsApp without judgment. You are not alone.",
  alternates: {
    canonical: "https://haven.care/feeling-lonely",
  },
};

export default function FeelingLonelyPage() {
  return (
    <SeoLandingTemplate
      canonicalSlug="feeling-lonely"
      pageTitle="Feeling Lonely"
      badge="Loneliness & Isolation Support"
      headline="I Feel Lonely and Need Someone to Talk To"
      subheadline="Living alone or feeling disconnected from the world can be painful. We are here to listen."
      introParagraphs={[
        "Loneliness is not just about being physically by yourself. You can be in a room full of coworkers, roommates, or family members and still experience an overwhelming emptiness inside. When your phone stays silent evening after evening, the silence can feel deafening.",
        "At Haven, we connect people struggling with isolation to attentive human listeners. You don't need to put on a brave face or pretend everything is okay. Tell us what is hurting, how your day went, or simply sit in gentle conversation.",
      ]}
      hindiHinglishNote="'Main akela hoon kis se baat karun?' अगर आपके मन में यह सवाल बार-बार आ रहा है, तो याद रखें कि आप अकेले नहीं हैं। हमारे साथ आप बिना किसी डर के खुलकर अपनी भावनाएं व्यक्त कर सकते हैं।"
      keyPoints={[
        {
          title: "A Patient, Gentle Ear",
          desc: "We don't rush you. Take all the time you need to find the words to describe what you feel.",
        },
        {
          title: "Relief From the Quiet",
          desc: "Break the cycle of endless overthinking by speaking your thoughts aloud to another person.",
        },
        {
          title: "No Judgment or Criticism",
          desc: "You will never be told that your loneliness is 'in your head' or that you shouldn't feel this way.",
        },
        {
          title: "Safe WhatsApp Conversation",
          desc: "Chat at your own pace from the privacy and comfort of your personal space.",
        },
      ]}
      faqs={[
        {
          q: "What if I don't know what to say?",
          a: "That is completely fine. You can simply write 'I'm feeling lonely and don't know where to start.' Our team will gently guide the conversation.",
        },
        {
          q: "Can I talk in Hindi or Hinglish?",
          a: "Yes! Many people feel most comfortable expressing their deepest emotions in their native tongue. We support Hindi, Hinglish, and English.",
        },
      ]}
    />
  );
}
