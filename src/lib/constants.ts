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
}

export const SUPPORT_CATEGORIES: CategoryDefinition[] = [
  {
    id: "lonely",
    label: "I Feel Lonely",
    shortLabel: "Loneliness",
    description: "For days when you feel alone, even when the world is around you.",
    icon: "HeartHandshake",
  },
  {
    id: "divorce",
    label: "I'm Going Through a Divorce",
    shortLabel: "Divorce & Separation",
    description: "Going through divorce can be difficult. Have someone listen to your feelings.",
    icon: "HeartCrack",
  },
  {
    id: "separation",
    label: "I'm Dealing With Separation",
    shortLabel: "Separation Support",
    description: "Coping with the painful uncertainty and emotional distance of separation.",
    icon: "Split",
  },
  {
    id: "breakup",
    label: "I Recently Had a Breakup",
    shortLabel: "Breakup & Heartbreak",
    description: "Sometimes moving forward begins with expressing what's hurting inside.",
    icon: "HeartOff",
  },
  {
    id: "marriage",
    label: "I'm Having Marriage Problems",
    shortLabel: "Marriage Difficulties",
    description: "Talk about things you may find difficult to share with friends or family.",
    icon: "ShieldAlert",
  },
  {
    id: "family",
    label: "I'm Facing Family Problems",
    shortLabel: "Family Conflict",
    description: "When family situations become overwhelming, you deserve to be heard.",
    icon: "Users",
  },
  {
    id: "grief",
    label: "I Lost Someone Close to Me",
    shortLabel: "Grief & Loss",
    description: "A private space to express the deep emotions that come with losing someone.",
    icon: "CloudRain",
  },
  {
    id: "overwhelmed",
    label: "I'm Feeling Emotionally Overwhelmed",
    shortLabel: "Emotional Overwhelm",
    description: "When mental exhaustion, panic, or crying spells feel too heavy to manage alone.",
    icon: "Sparkles",
  },
  {
    id: "nobody",
    label: "I Have Nobody to Talk To",
    shortLabel: "Nobody to Talk To",
    description: "Living alone or feeling like nobody around truly understands or cares.",
    icon: "UserX",
  },
  {
    id: "listen",
    label: "I Need Someone to Listen",
    shortLabel: "Need a Listener",
    description: "No advice, no judgment, no lectures. Just an open, patient ear.",
    icon: "Headphones",
  },
  {
    id: "difficult",
    label: "I'm Going Through a Difficult Time",
    shortLabel: "Difficult Life Stage",
    description: "Navigating career setbacks, health worries, or quiet personal turmoil.",
    icon: "Compass",
  },
  {
    id: "other",
    label: "Something Else",
    shortLabel: "Personal Thoughts",
    description: "Whatever is weighing on your heart, you can share it freely with us.",
    icon: "MessageSquare",
  },
];

export const PREFERRED_LANGUAGES = ["Hindi", "English", "Hinglish", "Other"];

export const PREFERRED_TIMES = [
  "Anytime / As soon as possible",
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 5:00 PM)",
  "Evening (5:00 PM – 9:00 PM)",
  "Late Night (9:00 PM – 12:00 AM)",
];

export function buildWhatsAppUrl(data: {
  fullName: string;
  phone: string;
  email: string;
  categories: string[];
  additionalMessage?: string;
  preferredLanguage?: string;
  preferredTime?: string;
}): string {
  const parts: string[] = [
    "Hello, I would like to talk to someone.",
    "",
    `My Name: ${data.fullName}`,
    "",
    `My WhatsApp Number: ${data.phone}`,
    "",
    `My Email: ${data.email}`,
    "",
    `What I'm Going Through: ${data.categories.join(", ")}`,
  ];

  if (data.additionalMessage && data.additionalMessage.trim()) {
    parts.push("");
    parts.push(`Additional Message: ${data.additionalMessage.trim()}`);
  }

  parts.push("");
  parts.push(`Preferred Language: ${data.preferredLanguage || "Hindi"}`);
  parts.push("");
  parts.push(`Preferred Time: ${data.preferredTime || "Anytime"}`);
  parts.push("");
  parts.push("I would like to connect with someone for emotional support.");

  const message = parts.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildDirectWhatsAppUrl(): string {
  const message = "Hello, I would like to talk to someone. I need emotional support.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
