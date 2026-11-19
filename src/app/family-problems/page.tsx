import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Family Problems? Find a Safe Space to Talk | Haven",
  description:
    "Facing family conflicts, generational pressure, or emotional estrangement? Find a confidential, compassionate human listener to speak freely.",
  alternates: {
    canonical: "https://haven.care/family-problems",
  },
  openGraph: {
    title: "Family Problems? Find a Safe Space to Talk",
    description:
      "Facing family conflicts, generational pressure, or emotional estrangement? Find a confidential, compassionate human listener to speak freely.",
    url: "https://haven.care/family-problems",
    type: "article",
  },
};

export default function FamilyProblemsPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Family Problems Support"
      badge="Navigating Family Conflict"
      headline="Family Problems? Find a Safe Space to Talk"
      subheadline="When the people who are supposed to understand you best feel like your biggest source of emotional pressure, having an external confidant brings relief."
      readTime="5 min read"
      canonicalSlug="family-problems"
      introParagraphs={[
        "Family ties are among the deepest bonds we have, which is why conflicts within the family hurt so intensely. When parents, siblings, or extended relatives subject you to constant comparison, emotional guilt, or unbending expectations, it can feel impossible to breathe.",
        "Because cultural norms often dictate that family matters must remain strictly behind closed doors, many individuals suffer in complete silence. Having a private, safe space outside your family allows you to express your real feelings without risking family backlash.",
      ]}
      keySections={[
        {
          heading: "Generational Expectations and Career/Life Pressure",
          subheading: "When your parents' dreams clash with your authentic desires",
          paragraphs: [
            "In Indian households, expectations regarding career choices, marriage partners, and lifestyle milestones are frequently heavy. When children attempt to set boundaries or choose an unconventional path, accusations of disrespect or selfishness often follow.",
            "Carrying this filial guilt while trying to build an honest life leads to immense internal anxiety. Talking with an empathetic listener helps you disentangle your healthy individuality from unreasonable familial guilt.",
          ],
        },
        {
          heading: "Sibling Rivalry, Favoritism, and Comparisons",
          subheading: "The lasting sting of never feeling 'good enough'",
          paragraphs: [
            "Being constantly compared to successful siblings or cousins leaves deep emotional scars. Over time, it can foster self-doubt, perfectionism, and deep-seated resentment that lingers into adulthood.",
            "Speaking about these dynamics openly helps validate the quiet pain of being overlooked or unfavorably judged in your own home.",
          ],
        },
        {
          heading: "Domestic Friction and Toxic Communication Cycles",
          subheading: "Walking into your home and immediately feeling physical tension",
          paragraphs: [
            "A home should be a sanctuary of rest. But when domestic life is filled with shouting matches, passive-aggressive remarks, or silent cold wars, your nervous system remains in perpetual fight-or-flight.",
            "You cannot always control your family members' behavior, but you can find healthy, private outlets to decompress and preserve your sanity.",
          ],
        },
        {
          heading: "Finding Peace and Protecting Your Emotional Energy",
          subheading: "Honoring boundaries without losing compassion",
          paragraphs: [
            "Setting boundaries with family is not an act of hostility; it is an act of self-preservation. Having an empathetic listener provides the validation you need to stand firm in your boundaries with peace and dignity.",
            "You deserve a space where your voice is heard and respected.",
          ],
        },
      ]}
      hindiHinglishNote="'Family me bahut problems hain, kisi se share nahi kar sakte?' अगर परिवार के झगड़ों, माता-पिता के दबाव या पारिवारिक मतभेदों से आप परेशान हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम आपकी बात पूरी गोपनीयता के साथ सुनेंगे।"
      faqs={[
        {
          q: "Is it wrong to feel angry with my parents or family?",
          a: "No. Anger is an instinctive emotional signal indicating that your boundaries or feelings have been ignored. Experiencing anger does not mean you do not love your family.",
        },
        {
          q: "How can I deal with constant family criticism?",
          a: "Recognize that persistent criticism often reflects the other person's anxieties and conditioning rather than your true value. Talking with a neutral peer listener helps rebuild your internal confidence.",
        },
        {
          q: "Will my family ever find out I submitted this form?",
          a: "Never. Your submission is strictly confidential and protected. No notices or calls are made to your family.",
        },
      ]}
      relatedArticles={[
        {
          title: "Feeling Misunderstood",
          slug: "/feeling-misunderstood",
          desc: "Finding human resonance when nobody around validates your reality.",
        },
        {
          title: "Marriage Problems Support",
          slug: "/marriage-problems",
          desc: "Navigating in-law dynamics and marital tension.",
        },
      ]}
    />
  );
}
