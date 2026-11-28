export interface OfferingArticleFaq {
  q: string;
  a: string;
}

export interface OfferingArticleSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface OfferingArticle {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  readTime: string;
  date: string;
  image: string;
  intro: string[];
  sections: OfferingArticleSection[];
  faqs: OfferingArticleFaq[];
}

export const OFFERING_ARTICLES: OfferingArticle[] = [
  {
    slug: "innerva",
    badge: "Pathway 01 · Discover Yourself",
    title: "INNERVA: Discover Yourself Through Self-Awareness & Emotional Intelligence",
    subtitle: "Build clarity around your identity, emotions, and inner confidence.",
    metaTitle: "INNERVA — Self-Awareness, Identity & Emotional Intelligence | The Inner Compass 23",
    metaDescription:
      "Learn how INNERVA by The Inner Compass 23 helps teenagers, adults, and shy learners build self-awareness, identity clarity, emotional intelligence, and inner confidence.",
    keywords: [
      "INNERVA",
      "The Inner Compass 23",
      "self-awareness programme",
      "emotional intelligence training",
      "inner confidence",
      "identity clarity",
    ],
    category: "Flagship Pathway",
    readTime: "6 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Many people try to fix social hesitation or loneliness by forcing themselves to speak louder in rooms where they still feel unsure inside. True confidence does not start on the outside—it starts with understanding who you are, what you feel, and why certain moments trigger self-doubt.",
      "INNERVA is the first flagship pathway at The Inner Compass 23. Designed around self-awareness, identity, emotional intelligence, and inner confidence, it gives participants a calm, structured space to reconnect with themselves before stepping into deeper social and leadership growth.",
    ],
    sections: [
      {
        heading: "What INNERVA Focuses On",
        paragraphs: [
          "Rather than offering generic motivational advice, INNERVA guides participants through practical self-reflection and real-life emotional awareness.",
        ],
        bullets: [
          "Self-awareness: Recognizing recurring thought loops, hesitation patterns, and emotional triggers.",
          "Identity clarity: Separating who you truly are from external expectations and past criticism.",
          "Emotional intelligence: Naming feelings accurately and responding thoughtfully instead of shutting down.",
          "Inner confidence: Developing quiet self-trust that stays steady even in unfamiliar rooms.",
        ],
      },
      {
        heading: "Who Should Start With INNERVA",
        paragraphs: [
          "INNERVA is tailored across our four audience categories—teenagers, adults, shy and socially hesitant children, and children with diverse abilities—with age-appropriate pacing.",
          "You can participate through small Group Interaction cohorts, Private One-to-One sessions, or as Stage 1 of the Complete Journey across Foundation, Development, and Mastery levels.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is INNERVA at The Inner Compass 23?",
        a: "INNERVA is our foundational flagship growth pathway focused on self-awareness, identity clarity, emotional intelligence, and building inner confidence from within.",
      },
      {
        q: "Is INNERVA only for adults or also for teenagers and children?",
        a: "INNERVA is available in age-banded formats for teenagers, adults, shy and socially hesitant children, and children with diverse abilities.",
      },
      {
        q: "Can I take INNERVA privately one-to-one instead of a group?",
        a: "Yes. Every pathway offers three participation options: Group Interaction, Private One-to-One, and the Complete Journey.",
      },
      {
        q: "How is INNERVA different from traditional therapy?",
        a: "INNERVA is a structured personal growth and emotional confidence pathway focused on self-awareness and practical communication habits, rather than clinical psychiatric treatment.",
      },
      {
        q: "What comes after completing INNERVA?",
        a: "Most participants naturally progress to KINORA (Connect With Others) and NEXTORA (Grow Beyond Limits), or continue in The Growth Circle community.",
      },
    ],
  },
  {
    slug: "kinora",
    badge: "Pathway 02 · Connect With Others",
    title: "KINORA: Social Confidence, Communication, Empathy & Belonging",
    subtitle: "Bridge the gap between inner clarity and meaningful human relationships.",
    metaTitle: "KINORA — Social Confidence, Communication & Belonging | The Inner Compass 23",
    metaDescription:
      "Discover KINORA by The Inner Compass 23: practical social confidence, active communication, empathy, and relationship-building for teenagers, adults, and children.",
    keywords: [
      "KINORA",
      "social confidence training",
      "how to connect with others",
      "communication skills",
      "overcoming social hesitation",
      "The Inner Compass 23",
    ],
    category: "Flagship Pathway",
    readTime: "6 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Knowing yourself is only half the journey. Many thoughtful, capable people still freeze when starting a conversation, struggle to express boundaries, or leave group gatherings feeling invisible.",
      "KINORA is our second flagship pathway—built specifically to help individuals turn inner awareness into warm, natural human connection.",
    ],
    sections: [
      {
        heading: "Core Pillars of KINORA",
        paragraphs: [
          "KINORA focuses on real-world interpersonal practice in a judgement-free environment.",
        ],
        bullets: [
          "Social confidence: Entering conversations smoothly without rehearsing every sentence in anxiety.",
          "Communication skills: Speaking clearly, listening actively, and reading social cues comfortably.",
          "Empathy & perspective-taking: Understanding others deeply without losing your own voice.",
          "Relationships & belonging: Turning casual acquaintances into supportive, lasting connections.",
        ],
      },
      {
        heading: "Three Progressive Levels of Growth",
        paragraphs: [
          "Like all signature pathways, KINORA moves through Level 1 (Foundation), Level 2 (Development), and Level 3 (Mastery & Application) so confidence becomes second nature.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does KINORA help with?",
        a: "KINORA helps participants overcome social hesitation, improve everyday communication, practice empathy, and build authentic friendships and belonging.",
      },
      {
        q: "Do I need to complete INNERVA before joining KINORA?",
        a: "While many learners start with INNERVA, you can join KINORA directly if your primary goal is social confidence and interpersonal communication.",
      },
      {
        q: "Are KINORA sessions practical or theory-based?",
        a: "KINORA is practice-first, combining guided conversation exercises, role-play, and real-world reflection.",
      },
      {
        q: "Can shy children or single children join KINORA?",
        a: "Yes. Younger learners and single children are supported through tailored cohorts alongside our S.C.O.U.T children's wing.",
      },
      {
        q: "How do I know if KINORA is right for me?",
        a: "You can start with our Loneliness & Connection Assessment or The Discovery Experience to get a personalized recommendation.",
      },
    ],
  },
  {
    slug: "nextora",
    badge: "Pathway 03 · Grow Beyond Limits",
    title: "NEXTORA: Independence, Decision-Making, Leadership & Resilience",
    subtitle: "Turn inner confidence into decisive action and everyday life leadership.",
    metaTitle: "NEXTORA — Leadership, Independence & Resilience | The Inner Compass 23",
    metaDescription:
      "Explore NEXTORA by The Inner Compass 23: build independence, clear decision-making, leadership, emotional resilience, and practical life skills.",
    keywords: [
      "NEXTORA",
      "leadership and resilience",
      "decision making skills",
      "personal independence",
      "life skills programme",
      "The Inner Compass 23",
    ],
    category: "Flagship Pathway",
    readTime: "6 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Once you understand yourself and connect comfortably with others, the next step is stepping forward into independence. Many capable individuals hold back from leadership, major life decisions, or new opportunities because they fear making mistakes.",
      "NEXTORA is the third flagship pathway at The Inner Compass 23—designed to help participants grow beyond self-imposed limits and navigate life with poise.",
    ],
    sections: [
      {
        heading: "What You Develop in NEXTORA",
        paragraphs: [
          "NEXTORA bridges personal growth and real-world execution across five core areas:",
        ],
        bullets: [
          "Independence: Trusting your own judgment without constant external validation.",
          "Decision-making: Evaluating choices calmly under pressure without overthinking.",
          "Leadership: Speaking up, taking initiative, and guiding others with empathy.",
          "Resilience & life skills: Recovering from setbacks with clarity and practical problem-solving.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who is NEXTORA built for?",
        a: "NEXTORA is ideal for teenagers preparing for independence, adults stepping into leadership or life transitions, and learners ready to apply confidence in real-world settings.",
      },
      {
        q: "What skills does NEXTORA cover?",
        a: "NEXTORA covers independence, decision-making, calm leadership, emotional resilience, and practical everyday life skills.",
      },
      {
        q: "Can NEXTORA be taken one-to-one?",
        a: "Yes. You can join NEXTORA in Group Interaction, Private One-to-One, or as part of the Complete Journey.",
      },
      {
        q: "How does NEXTORA handle overthinking around decisions?",
        a: "Participants practice structured decision frameworks and resilience exercises that replace hesitation loops with clear, grounded action.",
      },
    ],
  },
  {
    slug: "loneliness-and-connection-assessment",
    badge: "Entry Point 01 · Assessment",
    title: "Loneliness & Connection Assessment: Understand Your Disconnection",
    subtitle: "Identify hidden isolation patterns and clear steps to rebuild connection.",
    metaTitle: "Loneliness & Connection Assessment | The Inner Compass 23",
    metaDescription:
      "Take the Loneliness & Connection Assessment at The Inner Compass 23 to understand your disconnection patterns, emotional needs, and next steps toward belonging.",
    keywords: [
      "Loneliness and Connection Assessment",
      "feeling lonely assessment",
      "social disconnection test",
      "emotional needs assessment",
      "The Inner Compass 23",
    ],
    category: "Assessment",
    readTime: "5 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Loneliness is not always obvious. You can have a busy calendar, an active phone, and a supportive family—and still feel deeply disconnected inside.",
      "Our Loneliness & Connection Assessment is a gentle, structured entry point designed to help you see where disconnection is coming from and what kind of human support will actually help.",
    ],
    sections: [
      {
        heading: "What the Assessment Helps You Uncover",
        paragraphs: [
          "Instead of labeling you, this assessment maps your current relational patterns with clarity and compassion:",
        ],
        bullets: [
          "Loneliness patterns: Distinguishing between physical solitude, emotional isolation, and social fatigue.",
          "Unmet emotional needs: Identifying whether you need someone to listen, deeper friendships, or confidence in groups.",
          "Actionable next steps: Matching you to the right listener support, workshop, or pathway (INNERVA, KINORA, or NEXTORA).",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the Loneliness & Connection Assessment?",
        a: "It is a guided entry assessment at The Inner Compass 23 that helps you understand your disconnection patterns, emotional needs, and opportunities to build meaningful relationships.",
      },
      {
        q: "Is the assessment confidential?",
        a: "Yes. All assessments and follow-up conversations at The Inner Compass 23 are 100% private and confidential.",
      },
      {
        q: "Do I have to join a full course after taking the assessment?",
        a: "No. You can use the insights for personal clarity, book a single listening session, join a workshop, or explore a pathway at your own pace.",
      },
      {
        q: "How do I start the Loneliness & Connection Assessment?",
        a: "Simply reach out via our Contact page or WhatsApp and our team will guide you through the assessment.",
      },
    ],
  },
  {
    slug: "tic23-self-discovery-test",
    badge: "Entry Point 02 · Assessment",
    title: "TIC23 Self-Discovery Test: Understand Who You Are & What's Within",
    subtitle: "Map your core identity, values, self-awareness, and inner direction.",
    metaTitle: "TIC23 Self-Discovery Test | The Inner Compass 23",
    metaDescription:
      "Explore the TIC23 Self-Discovery Test by The Inner Compass 23 to uncover your identity, personal values, strengths, and inner direction.",
    keywords: [
      "TIC23 Self-Discovery Test",
      "self-discovery test",
      "personal strengths assessment",
      "inner direction",
      "The Inner Compass 23",
    ],
    category: "Assessment",
    readTime: "5 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
    intro: [
      "When life feels overwhelming or directionless, the hardest question is often the simplest one: 'What do I actually want, and who am I underneath all the noise?'",
      "The TIC23 Self-Discovery Test helps you step back and see your core identity, values, emotional strengths, and personal direction clearly.",
    ],
    sections: [
      {
        heading: "Key Dimensions Explored",
        paragraphs: [
          "The TIC23 Self-Discovery Test looks beyond surface personality labels to give you practical self-knowledge:",
        ],
        bullets: [
          "Identity & core values: What genuinely matters to you when external pressure is removed.",
          "Self-awareness: How you process stress, conflict, and personal growth.",
          "Personal strengths: Recognizing natural gifts you may be underusing.",
          "Inner direction: Choosing the right next step in life, relationships, or our growth pathways.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does TIC23 stand for in the TIC23 Self-Discovery Test?",
        a: "TIC23 stands for The Inner Compass 23—our holistic emotional support and human growth ecosystem.",
      },
      {
        q: "Who should take the TIC23 Self-Discovery Test?",
        a: "It is ideal for teenagers, young adults, and adults who feel stuck, overwhelmed, or unsure about their next personal or relational step.",
      },
      {
        q: "How is it different from random online personality quizzes?",
        a: "Unlike generic entertainment quizzes, the TIC23 Self-Discovery Test is paired with human guidance so you can turn insights into real growth.",
      },
      {
        q: "Can I discuss my results with someone?",
        a: "Yes. You can review your direction with our team in The Discovery Experience or a private one-to-one conversation.",
      },
    ],
  },
  {
    slug: "the-discovery-experience",
    badge: "Entry Point 03 · Guided Intro",
    title: "The Discovery Experience: Experience Growth Before You Begin",
    subtitle: "An interactive introductory session to explore our approach firsthand.",
    metaTitle: "The Discovery Experience | The Inner Compass 23",
    metaDescription:
      "Join The Discovery Experience at The Inner Compass 23—an introductory interactive session to experience our approach, join activities, and find your pathway.",
    keywords: [
      "The Discovery Experience",
      "introductory emotional growth session",
      "guided self-reflection",
      "The Inner Compass 23",
    ],
    category: "Guided Experience",
    readTime: "5 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Committing to a multi-week growth programme can feel like a big step—especially if you have never tried structured emotional or confidence support before.",
      "The Discovery Experience lets you experience our environment, facilitators, and interactive activities before deciding on any long-term commitment.",
    ],
    sections: [
      {
        heading: "What Happens Inside The Discovery Experience",
        paragraphs: [
          "Every Discovery Experience session is warm, pressure-free, and practical:",
        ],
        bullets: [
          "Experience our approach: See firsthand how active listening and guided reflection feel in practice.",
          "Participate in gentle activities: Engage at your own comfort level—no forced spotlight.",
          "Discover your pathway: Leave with clarity on whether INNERVA, KINORA, NEXTORA, or a themed workshop fits you best.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is The Discovery Experience?",
        a: "It is an introductory interactive experience where you explore our approach, participate in guided activities, and discover suitable growth pathways before enrolling in a full programme.",
      },
      {
        q: "Is there pressure to speak in front of everyone?",
        a: "Never. We respect shy and introverted participants and let everyone engage at their own comfortable pace.",
      },
      {
        q: "Can parents book The Discovery Experience for their child or teen?",
        a: "Yes. Parents and guardians can enquire for teenagers or children to find the right S.C.O.U.T or youth cohort.",
      },
    ],
  },
  {
    slug: "the-growth-circle",
    badge: "Continuing Growth · Membership",
    title: "The Growth Circle: Belong, Participate & Keep Growing Together",
    subtitle: "Our signature recurring monthly membership for ongoing connection and growth.",
    metaTitle: "The Growth Circle — Monthly Membership Community | The Inner Compass 23",
    metaDescription:
      "Join The Growth Circle at The Inner Compass 23: monthly live sessions, guided discussions, growth challenges, and a welcoming community.",
    keywords: [
      "The Growth Circle",
      "emotional growth community",
      "monthly membership programme",
      "live guided discussions",
      "The Inner Compass 23",
    ],
    category: "Membership Community",
    readTime: "5 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Real personal growth rarely happens in a single weekend. Without ongoing community and practice, old habits of silence, overthinking, and isolation quietly creep back in.",
      "The Growth Circle is our signature recurring monthly membership programme—created so you always have a safe, uplifting space to belong, participate, and keep growing.",
    ],
    sections: [
      {
        heading: "What Members Receive Every Month",
        paragraphs: [
          "The Growth Circle blends structured learning with genuine human companionship:",
        ],
        bullets: [
          "Live sessions & guided discussions: Meaningful conversations moderated with warmth and depth.",
          "Monthly growth challenges: Practical real-world prompts that keep momentum alive.",
          "Ongoing community & connection: A judgement-free circle of people who genuinely care about growth.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is The Growth Circle?",
        a: "The Growth Circle is The Inner Compass 23's signature recurring monthly membership programme featuring live sessions, guided discussions, monthly growth challenges, and ongoing community connection.",
      },
      {
        q: "Do I need to complete a flagship pathway before joining The Growth Circle?",
        a: "No. Both new members and pathway graduates are welcome to join The Growth Circle for ongoing support and engagement.",
      },
      {
        q: "How often do Growth Circle sessions happen?",
        a: "It is a monthly membership with regular live sessions and ongoing community challenges.",
      },
    ],
  },
  {
    slug: "special-themed-workshops",
    badge: "Open Entry · Live Workshops",
    title: "Special Themed Workshops: Focused Live Sessions on Real-Life Challenges",
    subtitle: "One Topic. One Experience. One Opportunity to Grow.",
    metaTitle: "Special Themed Workshops — Speak Without Fear, Confidence Reset & More | The Inner Compass 23",
    metaDescription:
      "Join individual live Special Themed Workshops at The Inner Compass 23: The Art of Listening, Anger Misunderstood, Confidence Reset, Emotional Intelligence, Relationship Clarity, Overcoming Loneliness, and Speak Without Fear.",
    keywords: [
      "Special Themed Workshops",
      "The Art of Listening workshop",
      "Anger Misunderstood",
      "Confidence Reset",
      "Emotional Intelligence workshop",
      "Relationship Clarity",
      "Overcoming Loneliness",
      "Speak Without Fear",
    ],
    category: "Live Workshops",
    readTime: "7 min read",
    date: "November 28, 2026",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800",
    intro: [
      "Sometimes you do not need a months-long programme—you need focused clarity on one specific challenge you are facing right now.",
      "Our Special Themed Workshops are individually accessible live sessions. Anyone can enrol in a single topic without joining a complete programme.",
    ],
    sections: [
      {
        heading: "All 7 Special Themed Workshops",
        paragraphs: [
          "Explore our current live workshop topics—each designed around practical insight and real-world application:",
        ],
        bullets: [
          "The Art of Listening: Listen to understand, not just to respond.",
          "Anger Misunderstood: Understand anger, its hidden triggers, and healthier responses.",
          "Confidence Reset: Rebuild grounded self-belief and confidence from within.",
          "Emotional Intelligence: Understand your emotions and respond consciously.",
          "Relationship Clarity: Build healthier, honest interpersonal connections.",
          "Overcoming Loneliness: Move gently from isolation toward meaningful connection.",
          "Speak Without Fear (Featured Workshop): Express yourself clearly, communicate confidently, and let your voice be heard.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I join just one Special Themed Workshop without enrolling in a full pathway?",
        a: "Yes! Every Special Themed Workshop is an open entry point—you can join any single workshop independently.",
      },
      {
        q: "Which workshop is best if I struggle with speaking up in groups or meetings?",
        a: "Our featured workshop 'Speak Without Fear' and 'Confidence Reset' are specifically designed to help you express yourself and communicate confidently.",
      },
      {
        q: "What if I am struggling with anger or relationship confusion?",
        a: "'Anger Misunderstood' helps unpack emotional triggers, while 'Relationship Clarity' and 'The Art of Listening' strengthen interpersonal communication.",
      },
      {
        q: "How do I register for an upcoming workshop?",
        a: "Click through to our Contact page or message us on WhatsApp to reserve a seat in the next live batch.",
      },
    ],
  },
];

export function getOfferingArticleBySlug(slug: string): OfferingArticle | undefined {
  return OFFERING_ARTICLES.find((a) => a.slug === slug);
}
