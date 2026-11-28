"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Layers,
  Sparkles,
  Users,
  User,
  Route,
  ChevronRight,
} from "lucide-react";

const PATHWAYS = [
  {
    badge: "Pathway 01 · Foundation",
    title: "INNERVA",
    subtitle: "Discover Yourself",
    description:
      "Build deep self-awareness, emotional intelligence, identity clarity, and unshakeable inner confidence.",
    tags: ["Self-Awareness", "Identity", "Emotional Intelligence", "Inner Confidence"],
    gradient: "from-white via-emerald-50/40 to-soft-sage/25",
    badgeBg: "bg-muted-green text-white",
  },
  {
    badge: "Pathway 02 · Connection",
    title: "KINORA",
    subtitle: "Connect With Others",
    description:
      "Develop social confidence, authentic communication, empathy, meaningful relationships, and true belonging.",
    tags: ["Social Confidence", "Communication", "Empathy", "Relationships"],
    gradient: "from-white via-amber-50/45 to-soft-sage/20",
    badgeBg: "bg-dark-charcoal text-white",
  },
  {
    badge: "Pathway 03 · Mastery",
    title: "NEXTORA",
    subtitle: "Grow Beyond Limits",
    description:
      "Step into independence, decisive thinking, leadership, emotional resilience, and everyday life skills.",
    tags: ["Independence", "Decision-Making", "Leadership", "Resilience"],
    gradient: "from-white via-sky-50/45 to-soft-sage/25",
    badgeBg: "bg-sage-700 text-white",
  },
];

const EXPERIENCES = [
  {
    badge: "Entry Point 01 · Assessment",
    title: "Loneliness & Connection Assessment",
    subtitle: "Understand Your Disconnection. Rediscover Connection.",
    description:
      "Explore loneliness patterns, social disconnection, emotional needs, and clear steps to build meaningful relationships.",
    tags: ["Loneliness Patterns", "Emotional Needs", "Personal Clarity"],
  },
  {
    badge: "Entry Point 02 · Assessment",
    title: "TIC23 Self-Discovery Test",
    subtitle: "Understand Who You Are. Discover What's Within.",
    description:
      "Uncover your core identity, values, self-awareness, personal strengths, and inner direction through The Inner Compass 23.",
    tags: ["Identity & Values", "Strengths", "Inner Direction"],
  },
  {
    badge: "Entry Point 03 · Guided Intro",
    title: "The Discovery Experience",
    subtitle: "Experience Growth Before You Begin.",
    description:
      "An introductory interactive experience to understand our approach, join guided activities, and find your ideal pathway.",
    tags: ["Interactive Intro", "Guided Activities", "Pathway Matching"],
  },
  {
    badge: "Continuing Growth · Membership",
    title: "The Growth Circle",
    subtitle: "Belong. Participate. Keep Growing.",
    description:
      "Our signature recurring membership community with live sessions, guided discussions, monthly challenges, and lasting connection.",
    tags: ["Live Sessions", "Community", "Monthly Challenges"],
  },
  {
    badge: "Open Entry · Live Workshops",
    title: "Special Themed Workshops",
    subtitle: "One Topic. One Experience. One Opportunity to Grow.",
    description:
      "Individually accessible live workshops—join any single topic without committing to a full programme.",
    tags: [
      "The Art of Listening",
      "Anger Misunderstood",
      "Confidence Reset",
      "Relationship Clarity",
      "Speak Without Fear",
    ],
  },
];

const PARTICIPATION = [
  { icon: Users, label: "Group Interaction" },
  { icon: User, label: "Private One-to-One" },
  { icon: Route, label: "Complete Journey" },
];

const LEVELS = [
  { level: "Level 1", name: "Foundation" },
  { level: "Level 2", name: "Development" },
  { level: "Level 3", name: "Mastery & Application" },
];

export default function CompleteOfferingSection() {
  return (
    <section
      id="complete-offering"
      className="py-14 sm:py-22 bg-warm-white border-t border-soft-sage/30 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-muted-green/30 text-dark-charcoal text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-muted-green" />
            <span>Our Complete Offering</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal tracking-tight">
            Three Signature Growth Pathways
          </h2>
          <p className="text-sm sm:text-base text-dark-charcoal/75 leading-relaxed">
            Structured programmes designed for teenagers, adults, shy children, and diverse abilities—choose group interaction, private one-to-one, or the complete journey.
          </p>
        </div>

        {/* 1. THREE SIGNATURE GROWTH PATHWAYS (Mobile: Horizontal Scroll | Desktop: 3-Col Grid) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between md:hidden text-xs font-medium text-dark-charcoal/60 px-1">
            <span>Swipe to explore pathways</span>
            <span className="inline-flex items-center gap-1 text-muted-green font-semibold">
              Scroll <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {PATHWAYS.map((item) => (
              <Link
                key={item.title}
                href="/contact"
                className={`w-[84vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-center rounded-3xl p-6 sm:p-7 bg-gradient-to-br ${item.gradient} border-2 border-muted-green/35 hover:border-muted-green shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between text-center relative overflow-hidden`}
              >
                <div className="space-y-3.5">
                  <div className="flex justify-center">
                    <span
                      className={`inline-flex items-center px-3.5 py-1 rounded-full ${item.badgeBg} text-[11px] font-bold uppercase tracking-wider shadow-2xs`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal group-hover:text-muted-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-green mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 flex justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal group-hover:bg-black text-white shadow-sm transition-all">
                    <span>Explore {item.title}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ways to Participate & Growth Levels Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border border-soft-sage/40 p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-green">
              <Sparkles className="w-4 h-4" />
              <span>Three Ways to Participate</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {PARTICIPATION.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl bg-warm-white border border-soft-sage/40 p-3 text-center flex flex-col items-center justify-center gap-1.5"
                >
                  <Icon className="w-4 h-4 text-muted-green" />
                  <span className="text-[11px] sm:text-xs font-semibold text-dark-charcoal leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white border border-soft-sage/40 p-5 sm:p-6 shadow-2xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-green">
              <Layers className="w-4 h-4" />
              <span>Three Progressive Growth Levels</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {LEVELS.map((l) => (
                <div
                  key={l.level}
                  className="rounded-xl bg-warm-white border border-soft-sage/40 p-3 text-center flex flex-col items-center justify-center gap-1"
                >
                  <span className="px-2 py-0.5 rounded-full bg-soft-sage/30 text-[10px] font-bold uppercase text-dark-charcoal">
                    {l.level}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-dark-charcoal leading-tight">
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. ASSESSMENTS & SPECIALISED EXPERIENCES (Mobile: Horizontal Scroll | Desktop: Grid) */}
        <div className="space-y-5 pt-2">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-dark-charcoal">
              Assessments &amp; Specialised Experiences
            </h3>
            <p className="text-xs sm:text-sm text-dark-charcoal/75">
              Focused entry points, ongoing community membership, and topic-specific live workshops.
            </p>
          </div>

          <div className="flex items-center justify-between md:hidden text-xs font-medium text-dark-charcoal/60 px-1">
            <span>Swipe to explore experiences</span>
            <span className="inline-flex items-center gap-1 text-muted-green font-semibold">
              Scroll <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
            {EXPERIENCES.map((exp, idx) => (
              <Link
                key={exp.title}
                href="/contact"
                className={`w-[84vw] max-w-[340px] md:w-auto md:max-w-none shrink-0 snap-center rounded-3xl p-6 bg-gradient-to-br from-white via-soft-sage/15 to-amber-50/40 border-2 border-muted-green/30 hover:border-muted-green shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col justify-between text-center ${
                  idx === EXPERIENCES.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted-green/15 text-dark-charcoal text-[11px] font-bold uppercase tracking-wider">
                      {exp.badge}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal group-hover:text-muted-green transition-colors">
                    {exp.title}
                  </h4>

                  <p className="text-xs font-semibold text-muted-green">
                    {exp.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 flex justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-dark-charcoal group-hover:bg-black text-white shadow-sm transition-all">
                    <span>Begin This Experience</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
