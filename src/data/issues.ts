export interface IssueData {
  slug: string;
  name: string;
  shortLabel: string;
  tagline: string;
  description: string;
  symptoms: string[];
  canonicalArticleSlug: string;
}

export const CORE_ISSUES: IssueData[] = [
  {
    slug: "loneliness",
    name: "Loneliness",
    shortLabel: "Loneliness",
    tagline: "Overcoming isolation, living alone, and feeling unheard",
    description: "For days when you feel deeply alone even in a crowded city and carry a heavy silence inside.",
    symptoms: [
      "Returning to an empty apartment after work with nobody to talk to",
      "Feeling disconnected from busy friends and family",
      "Staring at your phone wishing someone would check in",
      "The quiet ache of weekends spent in isolation",
      "Feeling invisible and misunderstood in a crowded metropolitan city",
    ],
    canonicalArticleSlug: "feeling-lonely",
  },
  {
    slug: "divorce-support",
    name: "Divorce & Separation",
    shortLabel: "Divorce",
    tagline: "Navigating post-divorce loneliness, custody stress, and starting over",
    description: "Coping with the sudden silence, legal exhaustion, and identity changes after a marriage ends.",
    symptoms: [
      "Surviving quiet weekends alone without your children or former spouse",
      "Emotional exhaustion from legal proceedings, disputes, and mediation",
      "Navigating shame, guilt, and family judgments after separation",
      "Rebuilding your personal identity and routine from scratch",
      "Struggling to find someone neutral who will listen without taking sides",
    ],
    canonicalArticleSlug: "divorce-support",
  },
  {
    slug: "heartbreak",
    name: "Breakup & Heartbreak",
    shortLabel: "Heartbreak",
    tagline: "Healing from sudden relationship endings, betrayal, and quiet grief",
    description: "When moving forward feels impossible and your chest aches with grief after someone walked away.",
    symptoms: [
      "Constant urge to check their social media or re-read old text messages",
      "Physical chest tightness, loss of appetite, and restless sleep",
      "Feeling embarrassed that you are still hurting months after the breakup",
      "Friends telling you to 'just move on' when your heart is shattered",
      "Emotional withdrawal and feeling fearful of trusting anyone again",
    ],
    canonicalArticleSlug: "heartbreak-support",
  },
  {
    slug: "depression-anxiety",
    name: "Depression & Anxiety",
    shortLabel: "Depression & Anxiety",
    tagline: "Breaking thought spirals, cognitive overwhelm, and constant worry",
    description: "A calming, grounded human presence for racing thoughts, dread, and emotional exhaustion.",
    symptoms: [
      "Waking up with dread and heavy chest anxiety before the day begins",
      "Constant mental chatter anticipating worst-case scenarios and catastrophic outcomes",
      "Feeling emotionally depleted and unmotivated for everyday tasks",
      "Needing to vent your worries without someone lecturing you to 'stay positive'",
      "Chronic overthinking keeping you awake late into the night",
    ],
    canonicalArticleSlug: "emotional-stress-support",
  },
  {
    slug: "late-night-venting",
    name: "Late-Night Venting (3 AM)",
    shortLabel: "3 AM Venting",
    tagline: "A safe human ear at 2 AM or 3 AM when everyone else is asleep",
    description: "Immediate judgment-free companionship when insomnia strikes and worries become deafening.",
    symptoms: [
      "Lying awake at 3:00 AM unable to turn off your brain or stop overthinking",
      "Feeling utterly isolated in the dark while the rest of the world is asleep",
      "Replaying painful memories, past mistakes, and unspoken regrets",
      "Needing a patient, gentle human voice to help you feel safe and grounded",
      "Struggling with late-night anxiety without wanting to wake friends or family",
    ],
    canonicalArticleSlug: "overthinking-support",
  },
];

export function getIssueBySlug(slug: string): IssueData | undefined {
  return CORE_ISSUES.find((issue) => issue.slug === slug);
}

export interface RegionalModifier {
  counselingSpelling: "counseling" | "counselling";
  counselorSpelling: "counselor" | "counsellor";
  primaryModifiers: string[];
  systemComparison: string;
  speedBenefit: string;
  currencyOrAffordability: string;
}

export function getRegionalModifiers(countrySlug: string): RegionalModifier {
  if (
    countrySlug === "united-kingdom" ||
    countrySlug === "australia" ||
    countrySlug === "new-zealand" ||
    countrySlug === "ireland"
  ) {
    return {
      counselingSpelling: "counselling",
      counselorSpelling: "counsellor",
      primaryModifiers: [
        "private online support",
        countrySlug === "united-kingdom"
          ? "faster than NHS waitlist"
          : "no GP referral waitlists",
        "anonymous venting",
        "24/7 non-judgmental active listening",
      ],
      systemComparison:
        countrySlug === "united-kingdom"
          ? "avoids the 6 to 18-week NHS talking therapies waiting list"
          : "connects instantly without needing a doctor's referral letter",
      speedBenefit: "Immediate 24/7 access without referral delays",
      currencyOrAffordability: "Transparent pay-per-session with zero subscription lock-ins",
    };
  }

  if (countrySlug === "india" || countrySlug === "united-arab-emirates" || countrySlug === "singapore") {
    return {
      counselingSpelling: "counseling",
      counselorSpelling: "counselor",
      primaryModifiers: [
        "confidential & private",
        "anonymous without sharing real name",
        "talk in English or Hindi",
        "late night emotional support",
        "safe space without judgment",
      ],
      systemComparison: "completely private 1-on-1 space free from social stigma or family gossip",
      speedBenefit: "Instant WhatsApp connection in English or Hindi",
      currencyOrAffordability: "Accessible, transparent session pricing without long-term contracts",
    };
  }

  // USA & Canada default
  return {
    counselingSpelling: "counseling",
    counselorSpelling: "counselor",
    primaryModifiers: [
      "without insurance",
      "no waitlist or clinic paperwork",
      "24/7 online access",
      "affordable pay-per-session",
    ],
    systemComparison: "bypasses $200+ per hour clinic fees, copays, and insurance deductibles",
    speedBenefit: "Instant connection without health insurance paperwork",
    currencyOrAffordability: "Affordable transparent pricing with no insurance required",
  };
}

export interface DynamicFaq {
  q: string;
  a: string;
}

export function getDynamicFaqs(
  cityName: string,
  countryName: string,
  countrySlug: string,
  issueName: string
): DynamicFaq[] {
  const reg = getRegionalModifiers(countrySlug);
  return [
    {
      q: `Where can I talk to someone anonymously about ${issueName} in ${cityName}?`,
      a: `On Haven Emotional Support, residents of ${cityName} can connect anonymously 24/7 with trained active listeners or licensed ${reg.counselorSpelling}s via chat, voice, or video using just a temporary nickname—no real name or personal details required.`,
    },
    {
      q: `Is online emotional support in ${cityName} better than visiting a local clinic?`,
      a: `Online support removes travel time, high clinic fees, and multi-week waitlists in ${cityName}. You can connect immediately—even at 2 AM—from the privacy of your home, which ${reg.systemComparison}.`,
    },
    {
      q: `Should I talk to an active listener or a therapist for ${issueName}?`,
      a: `Choose an active listener if you feel lonely and need immediate, judgment-free venting or companionship. Choose a licensed therapist if you need structured clinical guidance for deep trauma, clinical depression, or complex ${issueName}.`,
    },
    {
      q: `Can I get support in ${cityName} without insurance or long-term subscriptions?`,
      a: `Yes. Haven offers transparent, flexible access without insurance paperwork or forced monthly lock-ins, making emotional care accessible across ${cityName} and ${countryName}.`,
    },
    {
      q: `Is my conversation about ${issueName} kept completely private?`,
      a: `Yes. Sessions are confidential, nickname-based, and built for zero-judgment privacy so you can express yourself freely without worrying about social stigma.`,
    },
  ];
}
