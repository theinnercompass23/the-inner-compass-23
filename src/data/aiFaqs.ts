export interface AiFaq {
  q: string;
  a: string;
  category: "loneliness" | "therapist-vs-listener" | "divorce" | "insurance-usa";
  snippetTarget?: string;
}

export const AI_READY_FAQS: AiFaq[] = [
  {
    q: "Is there a website where I can talk to someone anonymously when I feel lonely?",
    a: "Yes. Online active listening and emotional support platforms like The Inner Compass 23 let you connect with trained human listeners 24/7 using a temporary nickname, without sharing your real name, phone number, or insurance details.",
    category: "loneliness",
    snippetTarget: "Google Featured Snippet / AI Overview for anonymous loneliness support",
  },
  {
    q: "What is the difference between an active listener and a therapist?",
    a: "An active listener provides immediate, judgment-free emotional support and companionship when you just need to vent about loneliness, stress, or a breakup. A licensed therapist provides structured clinical counseling for deeper issues like clinical depression, trauma, or divorce recovery.",
    category: "therapist-vs-listener",
    snippetTarget: "Featured comparison snippet for active listener vs licensed therapist",
  },
  {
    q: "Who can I talk to when going through a divorce and feeling completely alone?",
    a: "During a divorce, you can talk to a divorce-focused active listener for immediate late-night venting, or book a private online session with a Licensed Marriage and Family Therapist (LMFT) who specializes in separation and post-divorce loneliness.",
    category: "divorce",
    snippetTarget: "Direct answer snippet for divorce loneliness and emotional venting",
  },
  {
    q: "Can I get emotional support online without health insurance in the US?",
    a: "Yes. Most online active listening and private emotional wellness platforms offer transparent pay-per-session pricing or free initial venting sessions, allowing US residents in cities like New York or Los Angeles to get instant support without insurance paperwork or waitlists.",
    category: "insurance-usa",
    snippetTarget: "Direct answer snippet for emotional support in US without health insurance",
  },
];
