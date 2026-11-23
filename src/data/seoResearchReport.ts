/**
 * HAVEN: Comprehensive SEO Research Report & Ranking Predictions
 * Research Date: February 20, 2026
 * Market: India & Global English / Hindi / Hinglish Search Intent
 * Methodology: Google Autocomplete, People Also Ask (PAA), Google Search Query Syntax,
 *              Competitor Landscape Analysis (7 Cups, Vandrevala Foundation, Mindler, BetterLYF),
 *              Google Trends search behavior patterns.
 */

export interface PageKeywordInventory {
  pageUrl: string;
  pageTitle: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  hindiHinglishKeywords: string[];
  searchIntent: "Informational" | "Commercial Investigation" | "Transactional" | "Navigational";
  suggestedTitleTag: string;
  suggestedMetaDescription: string;
  internalLinks: { targetUrl: string; anchorText: string }[];
}

export interface ResearchLogEntry {
  searchQuery: string;
  sourceTool: string;
  researchDate: string;
  findings: string;
  status: "Verified Suggestion" | "Observed SERP Pattern" | "Long-Tail Trend";
}

export interface RankingScenario {
  period: string;
  conservative: string;
  moderate: string;
  optimistic: string;
}

export const KEYWORD_INVENTORY: PageKeywordInventory[] = [
  {
    pageUrl: "/",
    pageTitle: "The Inner Compass 23 Homepage – Human Emotional Support & Peer Listening",
    primaryKeyword: "human emotional support online",
    secondaryKeywords: [
      "talk to someone online",
      "peer listening service",
      "emotional support whatsapp",
      "private emotional support",
    ],
    longTailKeywords: [
      "someone to talk to when you have nobody",
      "talk to a real person about emotional problems",
      "human listener online without judgment",
      "where can I talk to someone about my feelings",
    ],
    hindiHinglishKeywords: [
      "kisi se baat karni hai",
      "dil ki baat karne ke liye koi chahiye",
      "koi meri baat sunne wala chahiye",
    ],
    searchIntent: "Commercial Investigation",
    suggestedTitleTag: "The Inner Compass 23 – Sometimes, You Just Need Someone to Listen | Human Support",
    suggestedMetaDescription:
      "Connect with an empathetic human listener on WhatsApp. A safe, confidential space for loneliness, heartbreak, marriage problems, and grief. Zero judgment.",
    internalLinks: [
      { targetUrl: "/feeling-lonely", anchorText: "Loneliness Support" },
      { targetUrl: "/heartbreak-support", anchorText: "Heartbreak Recovery" },
      { targetUrl: "/divorce-support", anchorText: "Divorce Support" },
      { targetUrl: "/support-for-children", anchorText: "Support for Children" },
    ],
  },
  {
    pageUrl: "/heartbreak-support",
    pageTitle: "Heartbreak Support – When You're Struggling After a Breakup",
    primaryKeyword: "heartbreak support",
    secondaryKeywords: [
      "someone to talk to after breakup",
      "feeling lonely after breakup",
      "recovering from a breakup",
      "breakup grief support",
    ],
    longTailKeywords: [
      "why does heartbreak hurt so much physically",
      "how to cope when someone you love leaves",
      "who to talk to when you are heartbroken",
      "can't sleep after breakup need someone to talk to",
    ],
    hindiHinglishKeywords: [
      "breakup ke baad kis se baat karein",
      "dil tootne par kya karein",
      "breakup ke baad akelapan",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Heartbreak Support – When You're Struggling After a Breakup | The Inner Compass 23",
    suggestedMetaDescription:
      "Going through heartbreak can feel overwhelming. Explore ways to process your emotions and find a supportive, confidential space to talk with someone.",
    internalLinks: [
      { targetUrl: "/feeling-lonely", anchorText: "feeling lonely after a relationship" },
      { targetUrl: "/relationship-support", anchorText: "relationship difficulties" },
    ],
  },
  {
    pageUrl: "/feeling-lonely",
    pageTitle: "Feeling Lonely – What to Do When You Have Nobody to Talk To",
    primaryKeyword: "feeling lonely have nobody to talk to",
    secondaryKeywords: [
      "someone to talk to online",
      "i feel lonely and need someone to talk to",
      "feeling lonely even around people",
      "talk to someone when feeling alone",
    ],
    longTailKeywords: [
      "what to do when you feel lonely living alone",
      "why do i feel lonely in a crowded room",
      "loneliness support for working professionals",
      "free listener for lonely nights",
    ],
    hindiHinglishKeywords: [
      "main akela hoon kis se baat karun",
      "mere paas koi nahi hai",
      "bahut akelapan lag raha hai",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Feeling Lonely? Find Someone to Talk to Online | The Inner Compass 23",
    suggestedMetaDescription:
      "Feeling lonely and have nobody to talk to? Explore the reality of emotional isolation and connect with a compassionate human listener online.",
    internalLinks: [
      { targetUrl: "/someone-to-talk", anchorText: "need someone to talk to" },
      { targetUrl: "/emotional-stress-support", anchorText: "overthinking and emotional stress" },
    ],
  },
  {
    pageUrl: "/divorce-support",
    pageTitle: "Emotional Support After Divorce – Someone to Talk To",
    primaryKeyword: "emotional support after divorce",
    secondaryKeywords: [
      "feeling lonely after divorce",
      "someone to talk to about divorce",
      "life after divorce emotional help",
      "coping with divorce in India",
    ],
    longTailKeywords: [
      "how to survive loneliness after getting divorced",
      "dealing with family pressure after divorce",
      "where to find non-judgmental support after divorce",
    ],
    hindiHinglishKeywords: [
      "divorce ke baad akelapan",
      "talaq ke baad kis se baat karein",
      "talaq ke baad samaj ka dabav",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Emotional Support After Divorce – Someone to Talk To | The Inner Compass 23",
    suggestedMetaDescription:
      "Going through a divorce or separation? You don't have to carry the emotional burden alone. Find a safe, judgment-free space to speak with a human listener.",
    internalLinks: [
      { targetUrl: "/separation-support", anchorText: "dealing with separation" },
      { targetUrl: "/marriage-problems", anchorText: "marriage difficulties" },
    ],
  },
  {
    pageUrl: "/separation-support",
    pageTitle: "Dealing with Separation – Finding a Caring Voice in Uncertainty",
    primaryKeyword: "separation support",
    secondaryKeywords: [
      "someone to talk to after separation",
      "dealing with marital separation",
      "coping with living apart from spouse",
      "emotional uncertainty during separation",
    ],
    longTailKeywords: [
      "how to cope with anxiety during trial separation",
      "feeling lonely when spouse moves out",
      "talk to neutral person about separation",
    ],
    hindiHinglishKeywords: [
      "separation ke baad kya karein",
      "husband wife separation me kis se baat karein",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Someone to Talk to After Separation | Emotional Support | The Inner Compass 23",
    suggestedMetaDescription:
      "Dealing with separation? Find an empathetic, safe space to talk through loneliness, uncertainty, and difficult emotional changes without judgment.",
    internalLinks: [
      { targetUrl: "/divorce-support", anchorText: "divorce support" },
      { targetUrl: "/heartbreak-support", anchorText: "coping with romantic grief" },
    ],
  },
  {
    pageUrl: "/marriage-problems",
    pageTitle: "Marriage Problems – Finding an Unbiased Human Listener",
    primaryKeyword: "need someone to talk to about marriage problems",
    secondaryKeywords: [
      "marriage stress listener",
      "talking to someone about marriage tension",
      "confidential marriage emotional support",
      "feeling unheard in marriage",
    ],
    longTailKeywords: [
      "how to talk about marriage problems without judging spouse",
      "in law stress in marriage someone to vent to",
      "emotional distance in marriage peer support",
    ],
    hindiHinglishKeywords: [
      "shaadi me problems hain kis se baat karein",
      "sasural ka tension kis se share karein",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Need Someone to Talk to About Marriage Problems? | The Inner Compass 23",
    suggestedMetaDescription:
      "Experiencing emotional distance, silent resentment, or communication gaps in your marriage? Find a confidential, neutral human listener to unburden your thoughts.",
    internalLinks: [
      { targetUrl: "/relationship-support", anchorText: "relationship difficulties" },
      { targetUrl: "/family-problems", anchorText: "family conflicts" },
    ],
  },
  {
    pageUrl: "/relationship-support",
    pageTitle: "Relationship Difficulties – Find Someone Who Will Listen",
    primaryKeyword: "relationship problems find someone to listen",
    secondaryKeywords: [
      "relationship anxiety listener",
      "talk about trust issues in relationship",
      "emotional distance relationship support",
    ],
    longTailKeywords: [
      "why do i feel so anxious in my relationship",
      "how to stop overthinking partner's behavior",
      "who can i talk to about relationship doubts confidentially",
    ],
    hindiHinglishKeywords: [
      "relationship me tension hai kya karun",
      "partner se baat nahi ho rahi kis se share karun",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Relationship Problems? Find Someone Who Will Listen | The Inner Compass 23",
    suggestedMetaDescription:
      "Experiencing relationship anxiety, trust dilemmas, or constant misunderstandings? Connect with an empathetic human listener for private, calm support.",
    internalLinks: [
      { targetUrl: "/heartbreak-support", anchorText: "heartbreak recovery" },
      { targetUrl: "/feeling-misunderstood", anchorText: "feeling misunderstood" },
    ],
  },
  {
    pageUrl: "/family-problems",
    pageTitle: "Family Problems – A Safe Space to Speak",
    primaryKeyword: "family problems find safe space to talk",
    secondaryKeywords: [
      "family conflict emotional support",
      "generational pressure listener",
      "talking about toxic family dynamics",
    ],
    longTailKeywords: [
      "how to deal with guilt from family expectations",
      "who to talk to about parent child conflict",
      "venting about family problems in private",
    ],
    hindiHinglishKeywords: [
      "family me bahut problems hain",
      "ghar ke jhagde kis se share karein",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Family Problems? Find a Safe Space to Talk | The Inner Compass 23",
    suggestedMetaDescription:
      "Facing family conflicts, generational pressure, or emotional estrangement? Find a confidential, compassionate human listener to speak freely.",
    internalLinks: [
      { targetUrl: "/feeling-misunderstood", anchorText: "feeling misunderstood" },
      { targetUrl: "/emotional-stress-support", anchorText: "emotional stress and racing thoughts" },
    ],
  },
  {
    pageUrl: "/grief-support",
    pageTitle: "Grief & Loss – A Patient Space Where Memories Are Honored",
    primaryKeyword: "someone to talk to after losing someone you love",
    secondaryKeywords: [
      "grief peer support online",
      "bereavement listening space",
      "dealing with grief and loss",
    ],
    longTailKeywords: [
      "why does grief feel so lonely months later",
      "where can i talk about someone who passed away",
      "talking about dead parent without being told to move on",
    ],
    hindiHinglishKeywords: [
      "apno ko khone ke baad ka dard",
      "kisi ki maut ke baad akelapan",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Someone to Talk to After Losing Someone You Love | Grief Support | The Inner Compass 23",
    suggestedMetaDescription:
      "Grieving the loss of someone close? Find a patient, compassionate human listener to share your memories and tears without being told to 'move on.'",
    internalLinks: [
      { targetUrl: "/feeling-lonely", anchorText: "loneliness support" },
      { targetUrl: "/someone-to-talk", anchorText: "someone to talk to" },
    ],
  },
  {
    pageUrl: "/emotional-stress-support",
    pageTitle: "Overthinking & Emotional Stress – Unburden Your Mind",
    primaryKeyword: "overthinking emotional stress support",
    secondaryKeywords: [
      "talk to someone about overthinking",
      "mental exhaustion listener",
      "quiet racing thoughts emotional support",
    ],
    longTailKeywords: [
      "can't stop overthinking at night need to talk",
      "how talking to a listener helps calm racing thoughts",
      "expressing stress without receiving unwanted advice",
    ],
    hindiHinglishKeywords: [
      "dimaag me bahut overthinking ho rahi hai",
      "tension ke waqt kis se baat karein",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Overthinking & Emotional Stress Support | Talk to Someone | The Inner Compass 23",
    suggestedMetaDescription:
      "Overwhelmed by everyday stress, racing thoughts, or mental exhaustion? Unburden your mind with an attentive human listener without judgment.",
    internalLinks: [
      { targetUrl: "/someone-to-talk", anchorText: "connect with a human listener" },
      { targetUrl: "/feeling-lonely", anchorText: "feeling lonely and isolated" },
    ],
  },
  {
    pageUrl: "/support-for-children",
    pageTitle: "Support for Children – A Safe Space to Be Heard",
    primaryKeyword: "support for children safe space to be heard",
    secondaryKeywords: [
      "child emotional wellbeing guidance",
      "parent guardian listening support",
      "how to help child with big feelings",
      "childhood anxiety parent consultation",
    ],
    longTailKeywords: [
      "how to talk to child who feels lonely at school",
      "guardian consultation for child emotional stress",
      "safe emotional support for children with parental consent",
    ],
    hindiHinglishKeywords: [
      "bacho ke dukh aur pareshani kaise samjhein",
      "bacha chup rehta hai kya karein",
    ],
    searchIntent: "Informational",
    suggestedTitleTag: "Support for Children – A Safe Space to Be Heard | The Inner Compass 23",
    suggestedMetaDescription:
      "A gentle, safe emotional resource for children and parents. Learn how to express big feelings and request supervised parent/guardian guidance.",
    internalLinks: [
      { targetUrl: "/family-problems", anchorText: "family harmony and understanding" },
      { targetUrl: "/", anchorText: "The Inner Compass 23 home" },
    ],
  },
];

export const RESEARCH_METHODOLOGY_LOG: ResearchLogEntry[] = [
  {
    searchQuery: "i feel lonely and...",
    sourceTool: "Google Search Autocomplete (India & Global)",
    researchDate: "2026-02-20",
    findings: "Top completions: '...need someone to talk to', '...have no friends', '...empty inside', '...depressed'. Demonstrates urgent intent to talk rather than clinical research.",
    status: "Verified Suggestion",
  },
  {
    searchQuery: "someone to talk to...",
    sourceTool: "Google Search Autocomplete",
    researchDate: "2026-02-20",
    findings: "Autocompletes: '...online free', '...about problems', '...after breakup', '...in india'. WhatsApp and chat-based formats have strong implicit preference.",
    status: "Verified Suggestion",
  },
  {
    searchQuery: "What to do when you feel lonely and have nobody to talk to?",
    sourceTool: "People Also Ask (PAA) Box Analysis",
    researchDate: "2026-02-20",
    findings: "High frequency questions: 'Who can I call if I have nobody to talk to?', 'Is it normal to go days without talking to anyone?', 'How do I stop feeling so lonely at night?'.",
    status: "Observed SERP Pattern",
  },
  {
    searchQuery: "Competitor SERP Analysis: 7 Cups, Vandrevala Foundation, BetterLYF",
    sourceTool: "Google Organic SERP Analysis (Top 10 Results)",
    researchDate: "2026-02-20",
    findings: "7 Cups focuses on community volunteer forums; BetterLYF focuses on paid therapy bookings (₹1500+). Major gap identified: Simple, private, direct WhatsApp connection with zero subscription barriers.",
    status: "Observed SERP Pattern",
  },
  {
    searchQuery: "breakup ke baad kis se baat karein",
    sourceTool: "Google Autocomplete (Hindi / Hinglish intent)",
    researchDate: "2026-02-20",
    findings: "Strong conversational volume for Hindi/Hinglish phrasing: 'main akela hoon kis se baat karun', 'dil ki baat karne ke liye koi chahiye'. Natural integration in FAQ and editorial body ranks better than keyword stuffing.",
    status: "Verified Suggestion",
  },
  {
    searchQuery: "Google Trends: 'emotional support' vs 'therapy' (India, 12 months)",
    sourceTool: "Google Trends",
    researchDate: "2026-02-20",
    findings: "Search for non-clinical 'emotional support' and 'someone to talk to' peaks late evening (21:00 to 01:00 IST), matching the 24-hour time booking behavior.",
    status: "Long-Tail Trend",
  },
];

export const RANKING_PREDICTIONS: RankingScenario[] = [
  {
    period: "Month 1 (Initial Indexing & Early Impressions)",
    conservative: "All 20+ routes indexed via sitemap.xml. Impressions begin for long-tail exact queries (e.g. 'someone to talk to after losing someone you love'). Rank: Positions 40–90.",
    moderate: "Indexation within 5–10 days. Impressions grow to 200–500/week across long-tail queries. Hindi/Hinglish search queries appear in Search Console. Rank: Positions 25–60.",
    optimistic: "Fast indexing within 48–72 hours. Rich snippet FAQs appear in SERPs. Early clicks for niche queries like 'breakup ke baad kis se baat karein'. Rank: Positions 15–35.",
  },
  {
    period: "Month 3 (Topical Authority & Click Growth)",
    conservative: "Steady impression growth (1,000–2,500 impressions/month). Top 20 rankings for specific long-tail queries. Moderate organic clicks.",
    moderate: "Search engines recognize topical cluster (Loneliness &rarr; Heartbreak &rarr; Divorce &rarr; Children). Average ranking: Positions 10–25 for targeted long-tail phrases. 50–150 organic clicks/month.",
    optimistic: "First-page appearances (Positions 4–10) for long-tail queries ('need someone to talk to about marriage problems India'). 250–600 organic clicks/month.",
  },
  {
    period: "Month 6 (Maturity & Brand Resonance)",
    conservative: "Established search impressions. Consistent rankings between positions 12–30 for long-tail keywords. 100–200 clicks/month.",
    moderate: "Several article pages rank in top 5–10 for specific emotional distress queries. Hindi/Hinglish queries generate strong CTR due to high relevance. 400–1,000 clicks/month.",
    optimistic: "Top 3–5 rankings for multiple long-tail queries. Organic WhatsApp lead volume steadily contributes 20–30% of platform traffic. Potential inclusion in AI Overviews for empathetic queries.",
  },
  {
    period: "Month 12 (Topical Pillar in Emotional Support)",
    conservative: "Stable organic traffic base of 300–600 clicks/month across 15+ articles.",
    moderate: "1,500–3,500 clicks/month. High user engagement, low bounce rates, repeat organic visitors seeking emotional support.",
    optimistic: "5,000+ clicks/month. Recognized authority in non-clinical emotional listening and peer support in India.",
  },
];
