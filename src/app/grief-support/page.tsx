import type { Metadata } from "next";
import SeoLandingTemplate from "@/components/SeoLandingTemplate";

export const metadata: Metadata = {
  title: "Someone to Talk to After Losing Someone You Love | Grief Support | Haven",
  description:
    "Grieving the loss of someone close? Find a patient, compassionate human listener to share your memories and tears without being told to 'move on.'",
  alternates: {
    canonical: "https://haven.care/grief-support",
  },
  openGraph: {
    title: "Someone to Talk to After Losing Someone You Love | Grief Support",
    description:
      "Grieving the loss of someone close? Find a patient, compassionate human listener to share your memories and tears without being told to 'move on.'",
    url: "https://haven.care/grief-support",
    type: "article",
  },
};

export default function GriefSupportPage() {
  return (
    <SeoLandingTemplate
      pageTitle="Grief & Loss Support"
      badge="Compassionate Bereavement Support"
      headline="Living With Grief & Loss: A Patient Space Where Memories Are Honored"
      subheadline="Grief does not have an expiration date. When the funeral has passed and the world rushes back to normal, we are here to listen to your stories and sorrow."
      readTime="5 min read"
      canonicalSlug="grief-support"
      introParagraphs={[
        "Losing someone you love rearranges the architecture of your life. In the initial weeks, there are ceremonies, visitors, and constant condolences. But as weeks turn into months, the world moves on, and people stop asking how you are doing.",
        "Yet for you, the silence can grow louder. You may look at their empty chair, replay their voice notes, or feel sudden tears in the middle of a mundane chore. At Haven, we believe grief is love with nowhere to go. You deserve a space where you can speak their name freely.",
      ]}
      keySections={[
        {
          heading: "The Unpredictable Waves of Bereavement",
          subheading: "Why grief does not follow neat, orderly 'stages'",
          paragraphs: [
            "You might have heard of the five stages of grief, but in reality, grief feels more like an unpredictable ocean. One day you might experience numb disbelief, the next intense longing, followed by guilt, anger, or deep sadness.",
            "There is no 'correct' way to grieve. Crying uncontrollably is normal, and having moments of laughter is equally normal. Giving yourself permission to feel whatever arises is the foundation of honoring loss.",
          ],
        },
        {
          heading: "Dealing With the Well-Intentioned 'You Have to Be Strong'",
          subheading: "Why societal discomfort with death can leave you feeling silenced",
          paragraphs: [
            "People often feel awkward around deep grief. To cope with their own discomfort, friends might say things like 'They are in a better place,' 'Time heals everything,' or 'You have to be strong for the family.'",
            "While intended as comfort, these remarks can make you feel that expressing sadness is a failure. You do not have to be strong all the time. In our conversations, you can weep, reminisce, or sit in quiet contemplation without apology.",
          ],
        },
        {
          heading: "The Power of Sharing Memories Out Loud",
          subheading: "Keeping their spirit and stories alive",
          paragraphs: [
            "One of the greatest fears grieving people share is that their loved one will be forgotten. Recounting funny memories, remembering their habits, or talking about what they meant to you brings immense comfort.",
            "A listener provides an attentive, respectful presence to witness your love and honor your loss without rushing you.",
          ],
        },
        {
          heading: "Gentle Self-Compassion in the Everyday",
          subheading: "Taking life in gentle, fifteen-minute increments",
          paragraphs: [
            "When grief is acute, thinking about the future can feel terrifying. Focus only on the hour in front of you. Drink water, rest your eyes, and allow yourself to rest when fatigue strikes.",
            "You do not have to carry the weight of this loss in total solitude. Our listening team is here to hold space for you.",
          ],
        },
      ]}
      hindiHinglishNote="'Apno ko khone ke baad ka dard aur akelapan?' जब कोई अपना हमेशा के लिए चला जाता है, तो दिल का दर्द शब्दों में बयां नहीं होता। अगर आप अपनी यादें, दुख या आंसू किसी के साथ बांटना चाहते हैं, तो हमारे WhatsApp पर कनेक्ट करें। हम पूरे सम्मान और धैर्य के साथ सुनेंगे।"
      faqs={[
        {
          q: "How long does grief usually last?",
          a: "Grief does not have a set timeline. It doesn't disappear; rather, your life gradually grows around the loss. You never have to apologize for grieving months or years later.",
        },
        {
          q: "Is it normal to feel angry at the person who passed away?",
          a: "Yes. Grieving individuals often feel anger at being left behind or feelings of guilt about things left unsaid. These conflicting emotions are a normal part of processing loss.",
        },
        {
          q: "Can I connect on WhatsApp if I just want to sit in silence and share a memory?",
          a: "Yes. Our listeners understand that sometimes you just want to write a memory or express sadness without feeling pressured to have a standard conversation.",
        },
      ]}
      relatedArticles={[
        {
          title: "Loneliness Support",
          slug: "/feeling-lonely",
          desc: "Navigating deep emotional isolation and finding someone who listens.",
        },
        {
          title: "Need Someone to Talk To?",
          slug: "/someone-to-talk",
          desc: "Connect with an empathetic, unbiased human listener online.",
        },
      ]}
    />
  );
}
