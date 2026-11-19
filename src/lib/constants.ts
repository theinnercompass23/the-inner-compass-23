export const WHATSAPP_NUMBER = "918810381949";
export const WHATSAPP_DISPLAY = "+91 8810381949";
export const TELE_MANAS_NUMBER = "14416";
export const EMERGENCY_NUMBER = "112";

export interface CategoryDefinition {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
  articleSlug?: string;
}

// 15 Form Dropdown Categories (Section 4.A)
export const SUPPORT_CATEGORIES: CategoryDefinition[] = [
  {
    id: "loneliness",
    label: "Loneliness – I Feel Alone",
    shortLabel: "Loneliness",
    description: "For days when you feel isolated and carry an emptiness inside.",
    icon: "HeartHandshake",
    articleSlug: "/feeling-lonely",
  },
  {
    id: "divorce",
    label: "Divorce – Going Through a Divorce",
    shortLabel: "Divorce",
    description: "Navigating legal stress, emotional exhaustion, and starting over.",
    icon: "HeartCrack",
    articleSlug: "/divorce-support",
  },
  {
    id: "separation",
    label: "Separation – Dealing With Separation",
    shortLabel: "Separation",
    description: "Coping with distance, silence, and the uncertainty of separation.",
    icon: "Split",
    articleSlug: "/separation-support",
  },
  {
    id: "heartbreak",
    label: "Heartbreak – Recovering From a Breakup",
    shortLabel: "Heartbreak",
    description: "When moving forward feels hard after a relationship ends.",
    icon: "HeartOff",
    articleSlug: "/heartbreak-support",
  },
  {
    id: "marriage",
    label: "Marriage Problems",
    shortLabel: "Marriage",
    description: "Talk about unspoken tension, silence, and marital friction in confidence.",
    icon: "ShieldAlert",
    articleSlug: "/marriage-problems",
  },
  {
    id: "relationship",
    label: "Relationship Problems",
    shortLabel: "Relationships",
    description: "Misunderstandings, trust issues, and feeling emotionally disconnected.",
    icon: "Users",
    articleSlug: "/relationship-support",
  },
  {
    id: "family",
    label: "Family Conflicts",
    shortLabel: "Family Conflicts",
    description: "When expectations, criticism, and household strain become overwhelming.",
    icon: "Users",
    articleSlug: "/family-problems",
  },
  {
    id: "grief",
    label: "Grief & Loss",
    shortLabel: "Grief & Loss",
    description: "A patient space to express bereavement and the ache of losing someone.",
    icon: "CloudRain",
    articleSlug: "/grief-support",
  },
  {
    id: "stress",
    label: "Emotional Stress",
    shortLabel: "Emotional Stress",
    description: "When daily weight, anxiety, or heavy feelings feel too difficult to bear alone.",
    icon: "Sparkles",
    articleSlug: "/emotional-stress-support",
  },
  {
    id: "overthinking",
    label: "Overthinking",
    shortLabel: "Overthinking",
    description: "Quiet the racing thoughts, what-ifs, and endless mental replay.",
    icon: "Sparkles",
    articleSlug: "/emotional-stress-support",
  },
  {
    id: "misunderstood",
    label: "Feeling Misunderstood",
    shortLabel: "Feeling Misunderstood",
    description: "When people around you don't understand what you're truly experiencing.",
    icon: "UserX",
    articleSlug: "/feeling-misunderstood",
  },
  {
    id: "personal",
    label: "Personal Life Problems",
    shortLabel: "Personal Problems",
    description: "Career setbacks, self-doubt, identity crises, or private dilemmas.",
    icon: "Compass",
    articleSlug: "/someone-to-talk",
  },
  {
    id: "nobody",
    label: "I Have Nobody to Talk To",
    shortLabel: "Nobody to Talk To",
    description: "Living alone or feeling like nobody around has time to listen.",
    icon: "UserX",
    articleSlug: "/someone-to-talk",
  },
  {
    id: "listen",
    label: "I Just Need Someone to Listen",
    shortLabel: "Someone to Listen",
    description: "No advice, no moral lectures, no judgment. Simply a genuine listener.",
    icon: "Headphones",
    articleSlug: "/someone-to-talk",
  },
  {
    id: "other",
    label: "Other",
    shortLabel: "Other",
    description: "Whatever is on your mind, you are welcome to talk about it freely.",
    icon: "MessageSquare",
    articleSlug: "/talk-to-someone",
  },
];

// 10 Section Cards for Homepage Section 5 (Each links to its dedicated SEO Article)
export const HOMEPAGE_CATEGORY_CARDS = [
  {
    id: "loneliness",
    title: "Loneliness",
    description: "What to do when you feel alone, even in a crowded room, and need a caring voice.",
    slug: "/feeling-lonely",
    icon: "HeartHandshake",
  },
  {
    id: "heartbreak",
    title: "Heartbreak",
    description: "Processing grief, intense memories, and loneliness following a painful breakup.",
    slug: "/heartbreak-support",
    icon: "HeartOff",
  },
  {
    id: "divorce",
    title: "Divorce & Separation",
    description: "Navigating emotional shock, life re-adjustment, and rebuilding after marriage ends.",
    slug: "/divorce-support",
    icon: "HeartCrack",
  },
  {
    id: "marriage",
    title: "Marriage Problems",
    description: "Finding a private space to voice marital distance, strain, and unspoken pain.",
    slug: "/marriage-problems",
    icon: "ShieldAlert",
  },
  {
    id: "relationship",
    title: "Relationship Difficulties",
    description: "Working through misunderstandings, silence, and emotional disconnect with your partner.",
    slug: "/relationship-support",
    icon: "Users",
  },
  {
    id: "family",
    title: "Family Problems",
    description: "When domestic pressure, parent-child clashes, or generational tension become too heavy.",
    slug: "/family-problems",
    icon: "Users",
  },
  {
    id: "grief",
    title: "Grief & Loss",
    description: "Honoring memories and carrying the weight of losing someone close to your heart.",
    slug: "/grief-support",
    icon: "CloudRain",
  },
  {
    id: "stress",
    title: "Emotional Stress",
    description: "Unburdening racing thoughts, anxiety, and sleepless nights with someone who listens.",
    slug: "/emotional-stress-support",
    icon: "Sparkles",
  },
  {
    id: "misunderstood",
    title: "Feeling Misunderstood",
    description: "Finding human acceptance when everyone around dismisses your genuine feelings.",
    slug: "/feeling-misunderstood",
    icon: "UserX",
  },
  {
    id: "someone",
    title: "Someone to Talk To",
    description: "Having an unbiased, compassionate human listener when you simply need to speak.",
    slug: "/someone-to-talk",
    icon: "Headphones",
  },
];

export const COUNTRY_CODES = [
  { code: "+91", country: "India (भारत)", flag: "🇮🇳" },
  { code: "+1", country: "USA / Canada", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
];

export const PREFERRED_LANGUAGES = [
  "Hindi",
  "English",
  "Hinglish",
  "Other",
];

// Generates the strict WhatsApp message required by Section 4
export function buildWhatsAppMessage(data: {
  fullName: string;
  phone: string;
  countryCode?: string;
  email: string;
  categories: string[];
  otherText?: string;
  preferredDate: string; // DD/MM/YYYY
  preferredTime: string; // HH:MM 24h
  timezone?: string;
  additionalMessage?: string;
}): string {
  const fullPhone = `${data.countryCode || "+91"} ${data.phone}`.trim();
  
  let concernList = data.categories.join(", ");
  if (data.categories.includes("Other") && data.otherText) {
    concernList += ` (Other: ${data.otherText})`;
  }

  const lines = [
    "Hello, I would like to connect for emotional support.",
    "",
    `Name: ${data.fullName.trim()}`,
    `WhatsApp Number: ${fullPhone}`,
    `Email: ${data.email.trim()}`,
    `Concern: ${concernList || "Emotional Support"}`,
    `Preferred Date: ${data.preferredDate}`,
    `Preferred Time: ${data.preferredTime}`,
    `Timezone: ${data.timezone || "Asia/Kolkata"}`,
  ];

  if (data.additionalMessage && data.additionalMessage.trim().length > 0) {
    lines.push(`Additional Message: ${data.additionalMessage.trim()}`);
  }

  lines.push("");
  lines.push("I would like to speak with someone regarding my situation.");

  return lines.join("\n");
}

export function buildWhatsAppUrl(data: {
  fullName: string;
  phone: string;
  countryCode?: string;
  email: string;
  categories: string[];
  otherText?: string;
  preferredDate: string;
  preferredTime: string;
  timezone?: string;
  additionalMessage?: string;
}): string {
  const message = buildWhatsAppMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildDirectWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage ||
    "Hello, I would like to connect with someone to talk to for emotional support.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

