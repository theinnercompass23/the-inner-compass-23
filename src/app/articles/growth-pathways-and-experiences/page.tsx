import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  HelpCircle,
  Layers,
  Sparkles,
} from "lucide-react";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";

const CANONICAL_URL =
  "https://www.theinnercompass23.com/articles/growth-pathways-and-experiences";

export const metadata: Metadata = {
  title:
    "INNERVA, KINORA, NEXTORA & Specialised Experiences: Complete Guide & FAQs | The Inner Compass 23",
  description:
    "Explore The Inner Compass 23 complete offering: INNERVA, KINORA, and NEXTORA growth pathways, Loneliness & Connection Assessment, TIC23 Self-Discovery Test, The Discovery Experience, The Growth Circle, Special Themed Workshops, and S.C.O.U.T.",
  keywords: [
    "INNERVA",
    "KINORA",
    "NEXTORA",
    "The Inner Compass 23",
    "TIC23 Self-Discovery Test",
    "Loneliness and Connection Assessment",
    "The Discovery Experience",
    "The Growth Circle",
    "Special Themed Workshops",
    "Speak Without Fear",
    "Confidence Reset",
    "Emotional Intelligence workshop",
    "Overcoming Loneliness",
    "S.C.O.U.T program",
    "Single Child social confidence",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title:
      "INNERVA, KINORA, NEXTORA & Specialised Experiences: Complete Guide & FAQs",
    description:
      "A comprehensive guide to our three signature growth pathways, assessments, monthly membership, themed workshops, and S.C.O.U.T.",
    url: CANONICAL_URL,
    type: "article",
  },
};

const ARTICLE_FAQS = [
  {
    q: "What are INNERVA, KINORA, and NEXTORA at The Inner Compass 23?",
    a: "INNERVA, KINORA, and NEXTORA are our three signature growth pathways. INNERVA focuses on discovering yourself (self-awareness, identity, emotional intelligence, and inner confidence). KINORA focuses on connecting with others (social confidence, communication, empathy, relationships, and belonging). NEXTORA focuses on growing beyond limits (independence, decision-making, leadership, resilience, and life skills).",
  },
  {
    q: "Who are these growth pathways designed for?",
    a: "Our programmes are structured across four audience categories: Teenagers, Adults, Shy and socially hesitant children, and Children with diverse abilities—including Single Child and S.C.O.U.T cohorts.",
  },
  {
    q: "What are the three ways to participate in a pathway?",
    a: "You can join through Group Interaction (small peer cohorts for shared practice), Private One-to-One (personalized individual guidance), or the Complete Journey (a structured end-to-end progression across all stages).",
  },
  {
    q: "How do the Three Progressive Growth Levels work?",
    a: "Every pathway moves through three structured stages: Level 1 (Foundation) builds comfort and core awareness; Level 2 (Development) strengthens real-world communication and emotional regulation; and Level 3 (Mastery & Application) develops independent confidence, leadership, and lasting habits.",
  },
  {
    q: "What is the Loneliness & Connection Assessment?",
    a: "The Loneliness & Connection Assessment helps you understand your disconnection patterns, social fatigue, and unmet emotional needs so you can identify practical steps toward meaningful human connection.",
  },
  {
    q: "What does the TIC23 Self-Discovery Test measure?",
    a: "The TIC23 Self-Discovery Test explores your core identity, personal values, self-awareness, strengths, and inner direction, helping you choose the right pathway or workshop with clarity.",
  },
  {
    q: "What happens in The Discovery Experience?",
    a: "The Discovery Experience is an introductory interactive session where you experience our approach firsthand, participate in guided reflection activities, and receive personalized recommendations before committing to a full pathway.",
  },
  {
    q: "What is The Growth Circle membership?",
    a: "The Growth Circle is our signature recurring monthly membership programme offering ongoing live sessions, guided discussions, monthly growth challenges, and a supportive community so progress continues long after an initial course.",
  },
  {
    q: "Can I attend a Special Themed Workshop without joining a full programme?",
    a: "Yes. Our Special Themed Workshops—including The Art of Listening, Anger Misunderstood, Confidence Reset, Emotional Intelligence, Relationship Clarity, Overcoming Loneliness, and Speak Without Fear—are open entry points that anyone can join individually.",
  },
  {
    q: "How does S.C.O.U.T fit into The Inner Compass 23 ecosystem?",
    a: "S.C.O.U.T (Social Confidence Oration & Unfolding Talents) is our dedicated children and youth wing for shy, introverted, single child, and specially-abled learners, helping them build communication skills, friendships, and everyday confidence.",
  },
];

export default function GrowthPathwaysArticlePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "INNERVA, KINORA, NEXTORA & Specialised Experiences: Complete Guide to Emotional Growth and Social Confidence",
    description:
      "In-depth guide covering INNERVA, KINORA, NEXTORA, Loneliness & Connection Assessment, TIC23 Self-Discovery Test, The Discovery Experience, The Growth Circle, Special Themed Workshops, and S.C.O.U.T.",
    author: {
      "@type": "Organization",
      name: "The Inner Compass 23 Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "The Inner Compass 23",
      url: "https://www.theinnercompass23.com",
    },
    mainEntityOfPage: CANONICAL_URL,
    datePublished: "2026-11-28",
    dateModified: "2026-11-28",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ARTICLE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="bg-warm-white text-dark-charcoal min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Article Hero */}
      <header className="pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-soft-sage/30 bg-gradient-to-b from-light-beige/40 via-warm-white to-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Pillar Guide &bull; Complete Offering &amp; FAQs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.15]">
            INNERVA, KINORA, NEXTORA &amp; Our Complete Growth Ecosystem
          </h1>

          <p className="text-sm sm:text-lg text-dark-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            How The Inner Compass 23 helps teenagers, adults, and children move from isolation and hesitation to self-awareness, meaningful connection, and confident independence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-dark-charcoal/60 pt-1">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-muted-green" />
              Updated November 2026
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-muted-green" />
              9 min read
            </span>
            <span>&bull;</span>
            <span>By The Inner Compass 23 Editorial Team</span>
          </div>
        </div>
      </header>

      {/* Main Article Body */}
      <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Quick Table of Contents */}
        <nav
          aria-label="Article contents"
          className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-7 shadow-2xs space-y-3"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-green">
            <Compass className="w-4 h-4" />
            <span>In This Guide</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium text-dark-charcoal/85">
            <a href="#pathways" className="hover:text-muted-green transition-colors">
              1. Three Signature Growth Pathways (INNERVA, KINORA, NEXTORA)
            </a>
            <a href="#participation" className="hover:text-muted-green transition-colors">
              2. Audiences, Formats &amp; Three Progressive Levels
            </a>
            <a href="#assessments" className="hover:text-muted-green transition-colors">
              3. Assessments &amp; The Discovery Experience
            </a>
            <a href="#growth-circle-workshops" className="hover:text-muted-green transition-colors">
              4. The Growth Circle &amp; Special Themed Workshops
            </a>
            <a href="#scout-link" className="hover:text-muted-green transition-colors">
              5. S.C.O.U.T for Children &amp; Youth
            </a>
            <a href="#faqs" className="hover:text-muted-green transition-colors">
              6. Frequently Asked Questions (10 Detailed FAQs)
            </a>
          </div>
        </nav>

        {/* Intro */}
        <section className="space-y-4 text-base sm:text-lg text-dark-charcoal/85 leading-relaxed">
          <p>
            Modern loneliness rarely looks like being physically alone. Many people spend their days in crowded offices, classrooms, or family homes while quietly feeling unseen, unheard, or unsure of how to express what they truly carry inside.
          </p>
          <p>
            At <strong>The Inner Compass 23</strong>, we designed a clear, step-by-step human growth ecosystem rather than one-size-fits-all advice. Whether you are beginning with a self-discovery assessment, joining a focused workshop, or stepping into one of our three flagship pathways, every experience meets you where you are.
          </p>
        </section>

        {/* Section 1: Three Signature Growth Pathways */}
        <section id="pathways" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
              Flagship Programmes
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              1. Our Three Signature Growth Pathways
            </h2>
          </div>

          <div className="space-y-5">
            <div className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-8 shadow-2xs space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-muted-green text-white text-xs font-bold uppercase tracking-wider">
                Pathway 01 &bull; Discover Yourself
              </span>
              <h3 className="text-2xl font-serif font-bold text-dark-charcoal">
                INNERVA — Self-Awareness, Identity &amp; Inner Confidence
              </h3>
              <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
                Growth begins inward. <strong>INNERVA</strong> helps participants slow down, understand their emotional triggers, clarify personal values, and build genuine emotional intelligence. Instead of masking insecurity behind overthinking or silence, you learn how to trust your own voice.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted-green">
                Core Focus: Self-awareness &middot; Identity &middot; Emotional intelligence &middot; Inner confidence
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-8 shadow-2xs space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-dark-charcoal text-white text-xs font-bold uppercase tracking-wider">
                Pathway 02 &bull; Connect With Others
              </span>
              <h3 className="text-2xl font-serif font-bold text-dark-charcoal">
                KINORA — Social Confidence, Empathy &amp; Belonging
              </h3>
              <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
                Once you feel grounded within yourself, <strong>KINORA</strong> bridges the gap between internal clarity and everyday relationships. Through guided communication practice, active listening, and empathy building, participants learn to start conversations naturally, set healthy boundaries, and build lasting friendships.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted-green">
                Core Focus: Social confidence &middot; Communication &middot; Empathy &middot; Relationships &middot; Belonging
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-8 shadow-2xs space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-sage-700 text-white text-xs font-bold uppercase tracking-wider">
                Pathway 03 &bull; Grow Beyond Limits
              </span>
              <h3 className="text-2xl font-serif font-bold text-dark-charcoal">
                NEXTORA — Independence, Leadership &amp; Resilience
              </h3>
              <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
                <strong>NEXTORA</strong> equips teenagers, adults, and young learners to navigate real-world decisions with poise. From handling setbacks and speaking up in rooms that matter to developing practical life skills and calm leadership, NEXTORA turns confidence into everyday action.
              </p>
              <p className="text-xs sm:text-sm font-semibold text-muted-green">
                Core Focus: Independence &middot; Decision-making &middot; Leadership &middot; Resilience &middot; Life skills
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Audiences, Formats & Levels */}
        <section id="participation" className="space-y-5 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
              Structured Progression
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              2. Who It Serves, How You Join &amp; Growth Levels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-white border border-soft-sage/40 p-6 space-y-3">
              <h3 className="text-lg font-serif font-bold text-dark-charcoal">
                Four Audience Categories
              </h3>
              <ul className="space-y-2 text-sm text-dark-charcoal/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span>Teenagers navigating identity &amp; peer pressure</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span>Adults seeking connection &amp; clarity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span>Shy and socially hesitant children</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span>Children with diverse abilities</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-soft-sage/40 p-6 space-y-3">
              <h3 className="text-lg font-serif font-bold text-dark-charcoal">
                Three Ways to Participate
              </h3>
              <ul className="space-y-2 text-sm text-dark-charcoal/80">
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span><strong>Group Interaction:</strong> Safe peer practice cohorts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span><strong>Private One-to-One:</strong> Dedicated individual sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span><strong>Complete Journey:</strong> Guided end-to-end pathway</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-soft-sage/40 p-6 space-y-3">
              <h3 className="text-lg font-serif font-bold text-dark-charcoal">
                Three Progressive Levels
              </h3>
              <ul className="space-y-2 text-sm text-dark-charcoal/80">
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span><strong>Level 1:</strong> Foundation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span><strong>Level 2:</strong> Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <Layers className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                  <span><strong>Level 3:</strong> Mastery &amp; Application</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Assessments & Entry Experiences */}
        <section id="assessments" className="space-y-5 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
              Guided Entry Points
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              3. Assessments &amp; The Discovery Experience
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-dark-charcoal/85 leading-relaxed">
            <p>
              Not sure where to start? Our entry assessments remove the guesswork:
            </p>
            <ul className="space-y-3">
              <li>
                <strong>01. Loneliness &amp; Connection Assessment:</strong> Understand your disconnection patterns, emotional needs, and the practical steps required to rediscover meaningful connection.
              </li>
              <li>
                <strong>02. TIC23 Self-Discovery Test:</strong> Understand who you are and discover what lies within—mapping identity, core values, self-awareness, and personal strengths.
              </li>
              <li>
                <strong>03. The Discovery Experience:</strong> Experience growth before you begin through an introductory interactive session with activities and pathway matching.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: The Growth Circle & Special Themed Workshops */}
        <section id="growth-circle-workshops" className="space-y-5 scroll-mt-24">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
              Community &amp; Focused Topics
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              4. The Growth Circle &amp; Special Themed Workshops
            </h2>
          </div>

          <div className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-dark-charcoal">
              The Growth Circle — Monthly Membership Programme
            </h3>
            <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
              Belong, participate, and keep growing. <strong>The Growth Circle</strong> is our signature recurring community featuring live sessions, guided discussions, monthly growth challenges, and ongoing human connection.
            </p>
          </div>

          <div className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-8 space-y-4">
            <h3 className="text-xl font-serif font-bold text-dark-charcoal">
              Special Themed Workshops (Open Entry Points)
            </h3>
            <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
              One topic, one experience, one opportunity to grow. Anyone can enrol in an individual live workshop without joining a complete programme:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl bg-warm-white border border-soft-sage/35">
                <strong>The Art of Listening:</strong> Listen to understand, not just to respond.
              </div>
              <div className="p-3.5 rounded-xl bg-warm-white border border-soft-sage/35">
                <strong>Anger Misunderstood:</strong> Understand anger, triggers, and healthier responses.
              </div>
              <div className="p-3.5 rounded-xl bg-warm-white border border-soft-sage/35">
                <strong>Confidence Reset:</strong> Build grounded confidence from within.
              </div>
              <div className="p-3.5 rounded-xl bg-warm-white border border-soft-sage/35">
                <strong>Emotional Intelligence:</strong> Understand emotions and respond consciously.
              </div>
              <div className="p-3.5 rounded-xl bg-warm-white border border-soft-sage/35">
                <strong>Relationship Clarity:</strong> Build healthier interpersonal connections.
              </div>
              <div className="p-3.5 rounded-xl bg-warm-white border border-soft-sage/35">
                <strong>Overcoming Loneliness:</strong> Move from isolation toward connection.
              </div>
              <div className="p-3.5 rounded-xl bg-soft-sage/20 border border-muted-green/40 sm:col-span-2">
                <strong>Speak Without Fear (Featured Workshop):</strong> Express yourself, communicate confidently, and let your voice be heard.
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: S.C.O.U.T */}
        <section id="scout-link" className="rounded-3xl bg-gradient-to-br from-white via-soft-sage/20 to-amber-50/40 border-2 border-muted-green/35 p-6 sm:p-8 space-y-4 scroll-mt-24">
          <span className="inline-block px-3 py-1 rounded-full bg-muted-green text-white text-xs font-bold uppercase tracking-wider">
            Children &amp; Youth Wing
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            5. S.C.O.U.T — Helping Every Child Find Their Voice
          </h2>
          <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
            For shy, introverted, single child, and specially-abled learners, our <strong>S.C.O.U.T</strong> (Social Confidence Oration &amp; Unfolding Talents) wing translates these same principles into age-appropriate, supportive sessions.
          </p>
          <Link
            href="/support-for-children"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-charcoal hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all"
          >
            <span>Explore S.C.O.U.T for Children</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Section 6: Comprehensive FAQs */}
        <section id="faqs" className="space-y-6 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-green">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              6. Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3.5">
            {ARTICLE_FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-soft-sage/40 p-5 sm:p-6 shadow-2xs space-y-2"
              >
                <h3 className="text-base sm:text-lg font-serif font-bold text-dark-charcoal">
                  {idx + 1}. {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <FinalWhatsAppCta />
    </div>
  );
}
