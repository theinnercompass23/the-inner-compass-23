export const WHATSAPP_NUMBER = "918810381949";
export const WHATSAPP_DISPLAY = "+91 8810381949";
export const CALL_NUMBER = "+918810381949";
export const CALL_DISPLAY = "+91 8810381949";
export const buildDirectCallUrl = () => `tel:${CALL_NUMBER}`;

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
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", country: "Qatar", flag: "🇶🇦" },
  { code: "+965", country: "Kuwait", flag: "🇰🇼" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+973", country: "Bahrain", flag: "🇧🇭" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+43", country: "Austria", flag: "🇦🇹" },
  { code: "+32", country: "Belgium", flag: "🇧🇪" },
  { code: "+358", country: "Finland", flag: "🇫🇮" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+60", country: "Malaysia", flag: "🇲🇾" },
];

export const TARGET_TIMEZONES = [
  { value: "Asia/Kolkata", label: "IST (India Standard Time, UTC+5:30)", city: "India / Operations", offsetHours: 5.5 },
  { value: "America/New_York", label: "US Eastern (EST / UTC-5: New York, Miami, Atlanta, Boston)", city: "New York", offsetHours: -5 },
  { value: "America/Chicago", label: "US Central (CST / UTC-6: Chicago, Dallas, Houston, Austin)", city: "Chicago", offsetHours: -6 },
  { value: "America/Denver", label: "US Mountain (MST / UTC-7: Denver, Phoenix)", city: "Denver", offsetHours: -7 },
  { value: "America/Los_Angeles", label: "US Pacific (PST / UTC-8: Los Angeles, SF, Seattle)", city: "Los Angeles", offsetHours: -8 },
  { value: "America/Toronto", label: "Canada Eastern (EST / UTC-5: Toronto, Montreal, Ottawa)", city: "Toronto", offsetHours: -5 },
  { value: "America/Vancouver", label: "Canada Pacific (PST / UTC-8: Vancouver)", city: "Vancouver", offsetHours: -8 },
  { value: "Europe/London", label: "UK Time (GMT / UTC+0: London, Manchester, Edinburgh)", city: "London", offsetHours: 0 },
  { value: "Europe/Dublin", label: "Ireland (GMT / UTC+0: Dublin, Cork)", city: "Dublin", offsetHours: 0 },
  { value: "Europe/Berlin", label: "CET (Central Europe / UTC+1: Berlin, Amsterdam, Zurich, Paris)", city: "Berlin / Amsterdam", offsetHours: 1 },
  { value: "Asia/Dubai", label: "GST (Gulf Standard Time / UTC+4: Dubai, Abu Dhabi)", city: "Dubai", offsetHours: 4 },
  { value: "Asia/Riyadh", label: "AST (Arabia Standard Time / UTC+3: Riyadh, Doha, Kuwait)", city: "Riyadh", offsetHours: 3 },
  { value: "Asia/Singapore", label: "SGT (Singapore / UTC+8: Singapore, KL)", city: "Singapore", offsetHours: 8 },
  { value: "Australia/Sydney", label: "AEST / AEDT (Australia Eastern / UTC+11: Sydney, Melbourne)", city: "Sydney", offsetHours: 11 },
  { value: "Australia/Perth", label: "AWST (Australia Western / UTC+8: Perth)", city: "Perth", offsetHours: 8 },
  { value: "Pacific/Auckland", label: "NZDT (New Zealand / UTC+13: Auckland, Wellington)", city: "Auckland", offsetHours: 13 },
];

export const INTERNATIONAL_MARKETS = [
  { code: "global", name: "Global (English)", flag: "🌐", path: "/" },
  { code: "us", name: "United States", flag: "🇺🇸", path: "/us", currency: "USD", symbol: "$" },
  { code: "uk", name: "United Kingdom", flag: "🇬🇧", path: "/uk", currency: "GBP", symbol: "£" },
  { code: "ca", name: "Canada", flag: "🇨🇦", path: "/ca", currency: "CAD", symbol: "C$" },
  { code: "au", name: "Australia", flag: "🇦🇺", path: "/au", currency: "AUD", symbol: "A$" },
  { code: "ae", name: "United Arab Emirates", flag: "🇦🇪", path: "/ae", currency: "AED", symbol: "AED" },
];

export const PREFERRED_LANGUAGES = [
  "Hindi",
  "English",
  "Hinglish",
  "Other",
];

// Generates the strict WhatsApp message required by the service
export function buildWhatsAppMessage(data: {
  fullName: string;
  age?: number;
  phone: string;
  countryCode?: string;
  email: string;
  categories: string[];
  otherText?: string;
  preferredDate?: string; // DD/MM/YYYY
  preferredTime?: string; // HH:MM 24h
  timezone?: string;
  additionalMessage?: string;
  guardianName?: string;
  isChildRequest?: boolean;
}): string {
  const fullPhone = `${data.countryCode || "+91"} ${data.phone}`.trim();

  let concernList = data.categories.join(", ");
  if (data.categories.includes("Other") && data.otherText) {
    concernList += ` (Other: ${data.otherText})`;
  }

  const lines: string[] = [];

  if (data.isChildRequest) {
    lines.push("Hello The Inner Compass 23 Team, I am reaching out as a Parent/Guardian regarding support for a child.");
    lines.push("");
    lines.push(`Guardian Name: ${data.guardianName?.trim() || data.fullName.trim()}`);
    if (data.fullName && data.guardianName && data.fullName !== data.guardianName) {
      lines.push(`Child First Name / Reference: ${data.fullName.trim()}`);
    }
    if (data.age) {
      lines.push(`Child Age: ${data.age} years old`);
    }
  } else {
    lines.push("Hello, I would like to connect for emotional support.");
    lines.push("");
    lines.push(`Name: ${data.fullName.trim()}`);
    if (data.age) {
      lines.push(`Age: ${data.age} (Adult 18-80)`);
    }
  }

  lines.push(`WhatsApp Number: ${fullPhone}`);
  lines.push(`Email: ${data.email.trim()}`);
  lines.push(`Concern: ${concernList || "Emotional Support"}`);
  if (data.preferredDate) {
    lines.push(`Preferred Date: ${data.preferredDate}`);
  }
  if (data.preferredTime) {
    lines.push(`Preferred Time: ${data.preferredTime} (24-Hour Clock)`);
  }
  if (data.timezone) {
    lines.push(`Timezone: ${data.timezone}`);
  }

  if (data.additionalMessage && data.additionalMessage.trim().length > 0) {
    lines.push(`Additional Message: ${data.additionalMessage.trim()}`);
  }

  lines.push("");
  if (data.isChildRequest) {
    lines.push("I confirm I am the parent/legal guardian and request safe guidance/consultation.");
  } else {
    lines.push("I would like to speak with someone regarding my situation.");
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(data: {
  fullName: string;
  age?: number;
  phone: string;
  countryCode?: string;
  email: string;
  categories: string[];
  otherText?: string;
  preferredDate?: string;
  preferredTime?: string;
  timezone?: string;
  additionalMessage?: string;
  guardianName?: string;
  isChildRequest?: boolean;
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

