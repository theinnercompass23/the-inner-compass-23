import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Need Someone to Talk To? Find a Human Listener | Haven",
  description:
    "Have nobody to talk to? Connect with an empathetic, compassionate human listener online. Safe, private, and 100% judgment-free on WhatsApp.",
  alternates: {
    canonical: "https://haven.care/someone-to-talk",
  },
  openGraph: {
    title: "Need Someone to Talk To? Find a Human Listener",
    description:
      "Have nobody to talk to? Connect with an empathetic, compassionate human listener online. Safe, private, and 100% judgment-free on WhatsApp.",
    url: "https://haven.care/someone-to-talk",
    type: "article",
  },
};

export default function SomeoneToTalkPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Someone to Talk To"
      badge="Human Peer Listening"
      headline="Need Someone to Talk To? Connect With an Empathetic Human Listener"
      subheadline="Sometimes, all you need is a genuine human being who will listen to your story with patience, dignity, and zero judgment."
      readTime="5 min read"
      canonicalSlug="someone-to-talk"
      introParagraphs={[
        "There are moments in life when your heart is full of thoughts, but your contact list feels completely empty. You might scroll through hundreds of phone numbers and realize: there is no one you can call at 10 PM without feeling like a burden, an inconvenience, or an oversharer.",
        "That is why Haven exists. We are not an automated bot, an algorithm, a clinical hospital, or a social network. We are real human beings dedicated to the simple, transformative act of listening.",
      ]}
      keySections={[
        {
          heading: "The Rare Gift of Being Heard Without Unsolicited Advice",
          subheading: "Why active listening is different from ordinary conversation",
          paragraphs: [
            "In most everyday conversations, people listen only enough to formulate their next reply. They interrupt with stories about themselves, offer immediate solutions, or tell you how you should feel.",
            "Genuine peer listening is different. A listener holds a quiet, attentive space where you are the focus. You can pause, search for words, change direction, or express contradictory feelings without being rushed.",
          ],
        },
        {
          heading: "No Diagnosis, No Medical Labels, No Pathologizing",
          subheading: "A safe haven where normal human struggle is respected",
          paragraphs: [
            "Not every emotional struggle requires clinical medication or psychiatric evaluation. Often, sadness, loneliness, or frustration is a natural, healthy reaction to difficult life events: a breakup, job stress, bereavement, or social isolation.",
            "At Haven, we do not diagnose you or attach clinical labels. We meet you simply as one human being to another.",
          ],
        },
        {
          heading: "Complete Anonymity and Privacy on WhatsApp",
          subheading: "Freedom to speak openly without social consequences",
          paragraphs: [
            "Because our listeners are not part of your social circle or family network, you can speak with radical honesty. You don't have to protect reputations, filter embarrassing details, or worry about gossip.",
            "All conversations occur directly on WhatsApp, protected by end-to-end security and our strict non-disclosure ethics.",
          ],
        },
        {
          heading: "Taking the First Simple Step",
          subheading: "You don't need a polished script to begin",
          paragraphs: [
            "You don't have to prepare what you are going to say. Simply fill out the form below, select your concern, pick your preferred date and time, and our team will connect with you.",
            "You do not have to carry everything alone. We are here to listen.",
          ],
        },
      ]}
      hindiHinglishNote="'Mujhe kisi se baat karni hai, par mere paas koi nahi hai.' अगर आप अकेलेपन, दुख या मानसिक तनाव में हैं और सिर्फ एक सुनने वाला कान चाहते हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम हिंदी और हिंग्लish में बिना किसी जजमेंट के सुनने के लिए हमेशा तैयार हैं।"
      faqs={[
        {
          q: "What can I talk about during a session?",
          a: "Anything that is on your mind: loneliness, relationship difficulties, career anxiety, family strain, grief, or simply everyday thoughts you cannot share elsewhere.",
        },
        {
          q: "Is there any cost or subscription fee?",
          a: "No. Haven is focused on providing accessible human emotional support without charging subscription fees or locking support behind payment gates.",
        },
        {
          q: "Can I choose my preferred date and time to connect?",
          a: "Yes. In the form, pick your exact date and 24-hour time slot (00:00 to 23:59 IST), and our team will confirm availability directly on WhatsApp.",
        },
      ]}
      relatedArticles={[
        {
          title: "Loneliness Support",
          slug: "/feeling-lonely",
          desc: "What to do when you feel lonely and have nobody to talk to.",
        },
        {
          title: "Heartbreak Support",
          slug: "/heartbreak-support",
          desc: "Processing grief and healing after a romantic breakup.",
        },
      ]}
    />
  );
}
