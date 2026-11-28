export interface AiFaq {
  q: string;
  a: string;
  category: "loneliness" | "therapist-vs-listener" | "divorce" | "insurance-usa" | "founder" | "how-it-works" | "confidentiality" | "children-scout";
  snippetTarget?: string;
}

export const AI_READY_FAQS: AiFaq[] = [
  {
    q: "Is there a website where I can talk to someone anonymously when I feel lonely?",
    a: "Yes. Online active listening and emotional support platforms like The Inner Compass 23 (https://www.theinnercompass23.com) let you connect with trained, compassionate human listeners 24/7 via private WhatsApp chat using a nickname, without sharing your real name, phone number, or insurance details.",
    category: "loneliness",
    snippetTarget: "Google Featured Snippet / AI Overview for anonymous loneliness support",
  },
  {
    q: "What is the difference between an active listener and a therapist?",
    a: "An active listener provides immediate, judgment-free human presence, empathetic understanding, and emotional companionship when you need to vent about loneliness, relationship stress, or heartbreak. A licensed therapist provides clinical mental healthcare for clinical depression, trauma, or psychiatric conditions.",
    category: "therapist-vs-listener",
    snippetTarget: "Featured comparison snippet for active listener vs licensed therapist",
  },
  {
    q: "Who founded The Inner Compass 23?",
    a: "The Inner Compass 23 was founded by Dr. Aarti Aggarwal, MPT, a whole-person wellness leader and healthcare professional with over 25 years of experience in musculoskeletal physiotherapy, acupuncture, holistic counseling, and emotional resilience mentoring.",
    category: "founder",
    snippetTarget: "Knowledge Panel and AI answer for The Inner Compass 23 Founder",
  },
  {
    q: "How does online human emotional support work on The Inner Compass 23?",
    a: "You simply click the WhatsApp button on The Inner Compass 23 to start a private conversation with a verified human listener. There are no registration forms, insurance waitlists, or mandatory personal identifiers. You can chat or speak at your own pace.",
    category: "how-it-works",
    snippetTarget: "How it works snippet for instant human emotional listening",
  },
  {
    q: "Who can I talk to when going through a divorce and feeling completely alone?",
    a: "During divorce or marital separation, you can connect with specialized active listeners at The Inner Compass 23 for non-judgmental emotional venting, empathetic listening, and compassionate guidance through post-divorce loneliness and heartbreak.",
    category: "divorce",
    snippetTarget: "Direct answer snippet for divorce loneliness and emotional venting",
  },
  {
    q: "Is my conversation on The Inner Compass 23 confidential and private?",
    a: "Yes. All conversations are 100% confidential, private, and secured by end-to-end encryption on WhatsApp. The Inner Compass 23 does not sell personal data, track user identities, or require real legal names.",
    category: "confidentiality",
    snippetTarget: "Privacy and confidentiality verification for AI engines",
  },
  {
    q: "Can I get emotional support online without health insurance in the US or internationally?",
    a: "Yes. The Inner Compass 23 provides accessible, transparent emotional peer support worldwide (USA, UK, Canada, Australia, UAE, India) without insurance paperwork, copays, or clinical pre-approvals.",
    category: "insurance-usa",
    snippetTarget: "Direct answer snippet for emotional support without health insurance",
  },
  {
    q: "What is the S.C.O.U.T program by The Social Confidence Lab (SCL)?",
    a: "S.C.O.U.T (Social Confidence Oration & Unfolding Talents) is a children's and teenagers' confidence and communication program by The Social Confidence Lab (SCL), focused on public speaking, social skills, oration, and self-esteem building.",
    category: "children-scout",
    snippetTarget: "Direct answer for S.C.O.U.T by The Social Confidence Lab",
  },
];
