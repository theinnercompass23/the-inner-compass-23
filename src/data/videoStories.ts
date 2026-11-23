export interface VideoStory {
  id: string;
  title: string;
  shortDescription: string;
  category:
    | "Customer Video Reviews"
    | "Service Experiences"
    | "Customer Feedback"
    | "Why I Needed Someone to Talk To"
    | "Real Conversation Experiences"
    | "Community Stories"
    | "Short Feedback Clips";
  displayName: string;
  country: string;
  flag: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  isVerified: boolean;
  reviewDate: string;
  quote: string;
  isPublished: boolean;
}

export const VIDEO_CATEGORIES = [
  "All Stories",
  "Customer Video Reviews",
  "Service Experiences",
  "Why I Needed Someone to Talk To",
  "Real Conversation Experiences",
  "Customer Feedback",
  "Community Stories",
] as const;

export const VIDEO_STORIES: VideoStory[] = [
  {
    id: "vs-1",
    title: "Speaking Without the Fear of Being Judged",
    shortDescription: "How having a dedicated person to listen made all the difference during a tough breakup in New York.",
    category: "Customer Video Reviews",
    displayName: "Rachel M.",
    country: "United States",
    flag: "🇺🇸",
    thumbnailUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=720&h=1280",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "1:12",
    isVerified: true,
    reviewDate: "Jan 2026",
    quote: "“I didn't need medical therapy—I just needed someone who didn't judge me. The Inner Compass 23 gave me that space.”",
    isPublished: true,
  },
  {
    id: "vs-2",
    title: "Late Night Loneliness in London",
    shortDescription: "Living in a shared flat and having nobody to talk to when thoughts spiral at 2:00 AM.",
    category: "Why I Needed Someone to Talk To",
    displayName: "James K.",
    country: "United Kingdom",
    flag: "🇬🇧",
    thumbnailUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=720&h=1280",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "0:54",
    isVerified: true,
    reviewDate: "Feb 2026",
    quote: "“The prompt reply on WhatsApp when I was overthinking late at night saved me from spiraling.”",
    isPublished: true,
  },
  {
    id: "vs-3",
    title: "Navigating Divorce as an Expat in Dubai",
    shortDescription: "Living thousands of miles from family roots and finding a discreet, confidential confidant.",
    category: "Service Experiences",
    displayName: "Ananya R.",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    thumbnailUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=720&h=1280",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "1:28",
    isVerified: true,
    reviewDate: "Jan 2026",
    quote: "“Complete discretion and respect. In Dubai, gossip spreads fast—The Inner Compass 23 gave me absolute privacy.”",
    isPublished: true,
  },
  {
    id: "vs-4",
    title: "Surviving the Winter Freeze in Toronto",
    shortDescription: "How weekly peer conversations broke the isolation of sub-zero Canadian winter months.",
    category: "Real Conversation Experiences",
    displayName: "David L.",
    country: "Canada",
    flag: "🇨🇦",
    thumbnailUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=720&h=1280",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    duration: "1:05",
    isVerified: true,
    reviewDate: "Dec 2025",
    quote: "“Having a calm, patient person on the other end of the line was like having a warm friend.”",
    isPublished: true,
  },
  {
    id: "vs-5",
    title: "Tech Burnout & Imposter Syndrome in Sydney",
    shortDescription: "Breaking the silence around career pressure and personal isolation in coastal Australia.",
    category: "Customer Feedback",
    displayName: "Liam S.",
    country: "Australia",
    flag: "🇦🇺",
    thumbnailUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=720&h=1280",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    duration: "0:48",
    isVerified: true,
    reviewDate: "Feb 2026",
    quote: "“No robotic AI responses. Real human empathy when I needed it most.”",
    isPublished: true,
  },
  {
    id: "vs-6",
    title: "Jemand der zuhört — Berlin Life Reflections",
    shortDescription: "Expressing feelings of grief and loneliness openly in a fast-moving European capital.",
    category: "Community Stories",
    displayName: "Hannah B.",
    country: "Germany",
    flag: "🇩🇪",
    thumbnailUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=720&h=1280",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    duration: "1:15",
    isVerified: true,
    reviewDate: "Jan 2026",
    quote: "“Einfach ehrlich reden zu können ohne therapeutische Akten war unendlich befreiend.”",
    isPublished: true,
  },
];

export function getPublishedVideos(): VideoStory[] {
  return VIDEO_STORIES.filter((v) => v.isPublished);
}

export function getVideosByCategory(category: string): VideoStory[] {
  if (category === "All Stories" || !category) {
    return getPublishedVideos();
  }
  return VIDEO_STORIES.filter((v) => v.isPublished && v.category === category);
}
