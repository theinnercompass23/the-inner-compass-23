import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Grief & Loss Support – Someone to Talk to When You Are Grieving | Haven",
  description:
    "Grieving the loss of someone you love? Feeling like everyone expects you to 'move on'? Connect with a patient, compassionate human listener on WhatsApp. 100% confidential.",
  alternates: {
    canonical: "https://haven.care/grief-support",
  },
  openGraph: {
    title: "Grief & Loss Support – Someone to Talk to When You Are Grieving",
    description:
      "Grief has no expiration date. Speak freely about your memories, sorrow, and love with a patient human listener who will never rush your healing.",
    url: "https://haven.care/grief-support",
    type: "article",
  },
};

export default function GriefSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Grief & Loss Support"
      badge="Navigating Bereavement, Loss &amp; Remembrance"
      headline="Grieving Someone You Love? Take Your Time. We Are Here to Listen."
      subheadline="Grief is not a disease to be cured; it is the natural, enduring expression of love in the absence of the beloved. Having a patient human listener lets you speak their name and honor your memories without being rushed."
      readTime="8 min read"
      heroImage="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1200"
      canonicalSlug="grief-support"
      introParagraphs={[
        "The death of a parent, spouse, sibling, child, close friend, or beloved companion alters the trajectory of life forever. In the immediate days following a funeral or memorial, people gather, send condolences, and offer food. But weeks and months later, society goes back to its normal routine, while you are left standing in the silent wreckage of a world that no longer makes sense.",
        "You quickly discover that modern culture is uncomfortable with prolonged sorrow. People offer well-meaning platitudes: 'They are in a better place,' or 'Time heals all wounds.' While meant to comfort, these words often silence you. You stop talking about the person you lost because you don't want to make others uncomfortable. Haven provides a sacred, patient space where you can weep, share stories, and mourn without apology.",
      ]}
      keySections={[
        {
          heading: "1. The Non-Linear, Unpredictable Waves of Bereavement",
          subheading: "Why grief does not follow neat clinical stages",
          paragraphs: [
            "Psychology textbooks often mention the 'five stages of grief' (denial, anger, bargaining, depression, acceptance), but real human bereavement is not a linear staircase. It is a turbulent ocean. One day you feel calm and capable; the next day, catching sight of an old sweater or an unopened jar of their favorite tea sends you collapsing onto the floor.",
            "You might experience unexpected anger at the medical team, at God, or even at the person for leaving you. You might experience profound brain fog, physical fatigue, and difficulty performing simple daily tasks. These reactions are not signs of weakness; they are the natural physical and neurological toll of deep grief.",
          ],
        },
        {
          heading: "2. The Agony of Firsts: Anniversaries, Holidays, and Empty Chairs",
          subheading: "Navigating the milestones that highlight absence",
          paragraphs: [
            "The 'year of firsts' is notoriously difficult: the first birthday without them, the first festival, the first holiday season, and the first anniversary of their passing. Around these dates, the ache intensifies, and feelings of loneliness can feel suffocating.",
            "Having a scheduled conversation with an attentive human listener around these milestone dates creates an emotional lifeline. You have a dedicated appointment where you can speak their name out loud, recall cherished memories, and feel the steadying warmth of another human being who honors your sorrow.",
          ],
        },
        {
          heading: "3. Disenfranchised Grief: The Losses Society Ignores",
          subheading: "Mourning pet loss, estranged relatives, miscarriages, and unacknowledged bonds",
          paragraphs: [
            "Not all grief is socially recognized. The agonizing loss of a beloved pet, the death of an estranged parent with whom you had complicated unresolved history, the silent heartbreak of pregnancy loss, or the passing of an unspoken relationship often receives zero formal bereavement leave or societal empathy.",
            "When people tell you 'It was just a dog' or 'You can try again,' the pain of feeling invalidated compounds the loss. At Haven, all grief is honored. We understand that love is love, and the depth of your pain reflects the depth of your connection.",
          ],
        },
        {
          heading: "4. When Grief Requires Clinical Bereavement Therapy",
          subheading: "Recognizing prolonged grief disorder and clinical needs",
          paragraphs: [
            "For most people, grief is a painful natural process that requires compassionate companionship rather than medical intervention. However, if months have passed and you experience persistent feelings that life is not worth living, severe self-neglect, or hallucinations, seeking a licensed clinical grief counselor or medical professional is essential.",
            "Haven's peer listeners provide gentle, empathetic listening for everyday bereavement. We are here to walk beside you in your sorrow, offering patient warmth without clinical judgment.",
          ],
        },
      ]}
      practicalSteps={[
        {
          step: "Lower Everyday Expectations with Compassion",
          desc: "Accept that your physical and mental stamina will be reduced for months. Focus only on essential daily tasks and rest without guilt.",
        },
        {
          step: "Create a Personal Memory Anchor",
          desc: "Light a quiet candle, plant a memorial tree, or write private letters to your loved one in a dedicated journal whenever you miss their presence.",
        },
        {
          step: "Allow Tears to Flow Freely Without Resistance",
          desc: "Crying releases stress hormones and soothes the autonomic nervous system. Never apologize for crying in front of your listener.",
        },
        {
          step: "Schedule an Empathetic Listening Conversation",
          desc: "Book a private 1-on-1 session on WhatsApp with a Haven listener to speak freely about your memories and feelings.",
        },
      ]}
      serviceBoundaries={{
        provides: [
          "Patient, warm, and deeply respectful human peer active listening for grief",
          "A safe space to speak your loved one's name and share memories",
          "Validation of the unpredictable, non-linear nature of bereavement",
          "Scheduled 1-on-1 private WhatsApp conversations",
          "100% confidential and dignified emotional presence",
        ],
        doesNotProvide: [
          "Clinical bereavement psychotherapy, complicated grief medical intervention",
          "Psychiatric medication management or medical diagnosis",
          "Estate planning legal guidance, inheritance counsel, or probate advice",
          "Spiritual mediumship or paranormal communication services",
          "Emergency life-threatening crisis hotline response",
        ],
      }}
      hindiHinglishNote="'Kisi apne ko khone ka dukh dil se nahi jaa raha?' किसी करीबी के जाने का दर्द बयां करना आसान नहीं होता। जब दुनिया आगे बढ़ जाती है और आपका दिल वहीं अटका रहता है, तब बात करने के लिए एक सच्चे इंसान का होना बहुत जरूरी है। आज ही WhatsApp पर हमसे जुड़ें।"
      faqs={[
        {
          q: "Is it normal to still feel intensely sad years after a loss?",
          a: "Yes. Grief does not shrink over time; rather, our life slowly grows around it. Significant memories, smells, or dates can reawaken deep sorrow even years later. There is no shame in loving someone forever.",
        },
        {
          q: "What if I start crying during my conversation with the listener?",
          a: "Please feel completely free to cry. Our listeners are trained to hold space patiently and gently. We never rush you, tell you to stop crying, or feel uncomfortable with your tears.",
        },
        {
          q: "Can I talk about the guilt I feel regarding things I wish I had said?",
          a: "Yes. 'Survivor guilt' and regrets over unspoken words are among the most common themes in grief. Speaking them out loud brings compassionate relief.",
        },
      ]}
      relatedArticles={[
        {
          title: "Feeling Lonely Support",
          slug: "/feeling-lonely",
          desc: "Navigating quiet evenings, solitary adjustments, and living alone after loss.",
        },
        {
          title: "Someone to Talk To",
          slug: "/someone-to-talk",
          desc: "Connect with a compassionate human being who offers non-judgmental presence.",
        },
        {
          title: "Emotional Stress Support",
          slug: "/emotional-stress-support",
          desc: "Techniques and conversations to ease mental exhaustion and cognitive overwhelm.",
        },
        {
          title: "Family Conflicts Support",
          slug: "/family-problems",
          desc: "Navigating domestic tension and complicated family dynamics after a loss.",
        },
      ]}
    />
  );
}
