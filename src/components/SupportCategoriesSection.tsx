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
  Smile,
} from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  desc: string;
  slug: string;
  icon: React.ElementType;
  badge?: string;
}

export default function SupportCategoriesSection() {
  const categories: CategoryCard[] = [
    {
      id: "loneliness",
      title: "Loneliness",
      desc: "For days when you feel isolated, alone even in a crowd, and need a caring, friendly voice.",
      slug: "/feeling-lonely",
      icon: HeartHandshake,
    },
    {
      id: "heartbreak",
      title: "Heartbreak",
      desc: "Navigating deep grief, heavy memories, sleepless nights, and healing after a painful breakup.",
      slug: "/heartbreak-support",
      icon: HeartOff,
    },
    {
      id: "divorce",
      title: "Divorce & Separation",
      desc: "Coping with the end of a marriage, personal adjustment, and rebuilding your life peacefully.",
      slug: "/divorce-support",
      icon: HeartCrack,
    },
    {
      id: "marriage",
      title: "Marriage Problems",
      desc: "A neutral space to express marital tension, unspoken sorrow, communication gaps, and fatigue.",
      slug: "/marriage-problems",
      icon: ShieldAlert,
    },
    {
      id: "relationship",
      title: "Relationship Difficulties",
      desc: "Working through misunderstandings, trust cracks, emotional distance, and unspoken pain.",
      slug: "/relationship-support",
      icon: Users,
    },
    {
      id: "family",
      title: "Family Problems",
      desc: "When domestic friction, parental expectations, or family conflict become too heavy to hold.",
      slug: "/family-problems",
      icon: Users,
    },
    {
      id: "grief",
      title: "Grief & Loss",
      desc: "A safe and patient haven to speak about losing someone you love without feeling rushed.",
      slug: "/grief-support",
      icon: CloudRain,
    },
    {
      id: "stress",
      title: "Emotional Stress",
      desc: "Overthinking, racing thoughts, panic, and mental weight — unburden yourself with someone who listens.",
      slug: "/emotional-stress-support",
      icon: Sparkles,
    },
    {
      id: "misunderstood",
      title: "Feeling Misunderstood",
      desc: "When people around dismiss your feelings. Experience the comfort of feeling truly heard.",
      slug: "/feeling-misunderstood",
      icon: UserX,
    },
    {
      id: "someone",
      title: "Someone to Talk To",
      desc: "No labels, no advice, no clinical jargon. Just a real, empathetic human listener.",
      slug: "/someone-to-talk",
      icon: Headphones,
    },
    {
      id: "children",
      title: "Support for Children",
      desc: "Safe emotional guidance and listening support requested with parent/guardian consent.",
      slug: "/support-for-children",
      icon: Smile,
      badge: "Kids & Guardians",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-warm-white border-t border-soft-sage/20 relative overflow-hidden">
      {/* Circular glass accents in background */}
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

        {/* Category Cards Grid with Circular Glassmorphism */}
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
                    {c.badge && (
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider border border-emerald-200 shadow-xs">
                        {c.badge}
                      </span>
                    )}
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
                    Article &amp; Support
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
