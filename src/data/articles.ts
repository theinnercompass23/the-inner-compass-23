export interface EditorialArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export const FEATURED_ARTICLES: EditorialArticle[] = [
  {
    id: "living-alone-isolation",
    slug: "/feeling-lonely",
    title: "The Quiet Weight of Living Alone: Understanding Modern Isolation",
    excerpt:
      "Surrounded by digital noise, millions return each evening to silent apartments. Exploring the psychological reality of urban solitude and the restorative power of speaking with a real listener.",
    category: "Loneliness & Solitude",
    date: "February 18, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
    author: "Haven Editorial Team",
  },
  {
    id: "navigating-divorce-maze",
    slug: "/divorce-support",
    title: "When Silence Speaks: Navigating the Emotional Maze of Divorce",
    excerpt:
      "Divorce is far more than legal separation—it is the dismantling of shared routines, memories, and identity. A guide to coping with social scrutiny and finding emotional footing.",
    category: "Divorce & Transition",
    date: "February 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    author: "Haven Editorial Team",
  },
  {
    id: "heartbreak-digital-age",
    slug: "/heartbreak-support",
    title: "Heartbreak in the Digital Age: Why Healing Takes Time and Grace",
    excerpt:
      "Social media algorithms constantly resurface memories, making breakups uniquely agonizing. Why giving yourself permission to mourn is essential for genuine emotional closure.",
    category: "Heartbreak Recovery",
    date: "February 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    author: "Haven Editorial Team",
  },
  {
    id: "exhaustion-of-pretending",
    slug: "/someone-to-talk",
    title: "The Exhaustion of Pretending: Why You Need Someone to Listen Without Judgment",
    excerpt:
      "Putting on a brave face for family, colleagues, and friends drains mental energy. The quiet relief of speaking with a compassionate stranger who holds zero preconceived expectations.",
    category: "Emotional Well-Being",
    date: "February 08, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
    author: "Haven Editorial Team",
  },
  {
    id: "anatomy-of-overthinking",
    slug: "/overthinking-support",
    title: "The Anatomy of Overthinking: How Racing Thoughts Cloud Everyday Life",
    excerpt:
      "Replaying past interactions and imagining worst-case futures keeps the mind trapped. Practical perspectives on breaking late-night thought loops and regaining grounded peace.",
    category: "Mental Clarity",
    date: "February 05, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    author: "Haven Editorial Team",
  },
  {
    id: "separation-marital-strain",
    slug: "/separation-support",
    title: "When Words Are Hard to Find: Moving Through Separation and Marital Strain",
    excerpt:
      "Living in marital limbo or enduring the quiet ache of physical separation brings acute emotional fatigue. How active listening helps process complex relationship decisions.",
    category: "Separation & Marriage",
    date: "January 29, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?auto=format&fit=crop&q=80&w=800",
    author: "Haven Editorial Team",
  },
];
