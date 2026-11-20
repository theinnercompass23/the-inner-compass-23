"use client";

import React from "react";
import Link from "next/link";
import {
  HeartHandshake,
  HeartOff,
  HeartCrack,
  ShieldAlert,
  Users,
  CloudRain,
  Sparkles,
  UserX,
  Headphones,
  ArrowRight,
  BrainCircuit,
  MessageCircleQuestion,
  Split,
} from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  desc: string;
  slug: string;
  icon: React.ElementType;
}

export default function SupportCategoriesSection() {
  const categories: CategoryCard[] = [
    {
      id: "loneliness",
      title: "Feeling Lonely",
      desc: "For days when you feel deeply isolated, living alone, or alone even in a crowd, and need a caring, friendly voice.",
      slug: "/feeling-lonely",
      icon: HeartHandshake,
    },
    {
      id: "heartbreak",
      title: "Heartbreak",
      desc: "Navigating deep emotional pain, heavy memories, sleepless nights, and the quiet journey of healing after a breakup.",
      slug: "/heartbreak-support",
      icon: HeartOff,
    },
    {
      id: "divorce",
      title: "Divorce",
      desc: "Coping with the painful end of a marriage, altered routines, social scrutiny, and finding peace in a new life chapter.",
      slug: "/divorce-support",
      icon: HeartCrack,
    },
    {
      id: "separation",
      title: "Separation",
      desc: "Working through the uncertainty, silence, physical distance, and emotional adjustment of being separated.",
      slug: "/separation-support",
      icon: Split,
    },
    {
      id: "relationship",
      title: "Relationship Problems",
      desc: "Untangling communication gaps, trust cracks, growing emotional distance, and unspoken friction in your partnership.",
      slug: "/relationship-support",
      icon: Users,
    },
    {
      id: "marriage",
      title: "Marriage Problems",
      desc: "A neutral, compassionate haven to express marital friction, feeling unheard by your spouse, and unspoken fatigue.",
      slug: "/marriage-problems",
      icon: ShieldAlert,
    },
    {
      id: "family",
      title: "Family Conflicts",
      desc: "When domestic expectations, parental pressure, or generational disagreements become too heavy to carry alone.",
      slug: "/family-problems",
      icon: Users,
    },
    {
      id: "grief",
      title: "Grief and Loss",
      desc: "A safe, patient refuge to talk about losing someone you love, honor memories, and mourn without feeling rushed.",
      slug: "/grief-support",
      icon: CloudRain,
    },
    {
      id: "stress",
      title: "Emotional Stress",
      desc: "Racing thoughts, everyday overwhelm, and heavy mental fatigue — unburden yourself with someone who genuinely listens.",
      slug: "/emotional-stress-support",
      icon: Sparkles,
    },
    {
      id: "overthinking",
      title: "Overthinking",
      desc: "When your mind replays past conversations and worries about the future late at night. Slow down and ground your thoughts.",
      slug: "/overthinking-support",
      icon: BrainCircuit,
    },
    {
      id: "misunderstood",
      title: "Feeling Misunderstood",
      desc: "When people close to you dismiss or downplay your feelings. Experience the steadying relief of being truly heard.",
      slug: "/feeling-misunderstood",
      icon: UserX,
    },
    {
      id: "someone",
      title: "Someone to Talk To",
      desc: "No clinical diagnosis, no patronizing advice, and no judgment. Just a real, empathetic human listener who is here for you.",
      slug: "/someone-to-talk",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-warm-white border-t border-soft-sage/20 relative overflow-hidden">
      {/* Subtle circular glass accents in background */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-soft-sage/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-soft-sage/30 shadow-xs">
            Safe &amp; Confidential Conversations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal mt-4 mb-3">
            Whatever You&apos;re Going Through, You Can Talk About It.
          </h2>
          <p className="text-sm sm:text-base text-dark-charcoal/70 leading-relaxed">
            There is no emotional burden too small or too heavy. Explore how we help with each situation, or read our in-depth guidance before reaching out.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/60 hover:border-soft-sage shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-soft-sage/20 text-muted-green flex items-center justify-center group-hover:scale-110 group-hover:bg-soft-sage/30 transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-dark-charcoal mb-2 group-hover:text-muted-green transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-soft-sage/20 flex items-center justify-between">
                  <Link
                    href={c.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-green hover:text-dark-charcoal transition-colors group-hover:translate-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <span className="text-[11px] text-dark-charcoal/50">
                    Dedicated Article &bull; Support
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
