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
  Split,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  desc: string;
  slug: string;
  tag: string;
  icon: React.ElementType;
}

export default function SupportCategoriesSection() {
  const categories: CategoryCard[] = [
    {
      id: "loneliness",
      title: "Feeling Lonely",
      desc: "For days when you feel deeply isolated, living alone, or alone even in a crowd, and need a caring, friendly voice.",
      slug: "/feeling-lonely",
      tag: "Most Requested",
      icon: HeartHandshake,
    },
    {
      id: "heartbreak",
      title: "Heartbreak",
      desc: "Navigating deep emotional pain, heavy memories, sleepless nights, and the quiet journey of healing after a breakup.",
      slug: "/heartbreak-support",
      tag: "Heart Healing",
      icon: HeartOff,
    },
    {
      id: "divorce",
      title: "Divorce",
      desc: "Coping with the painful end of a marriage, altered routines, social scrutiny, and finding peace in a new life chapter.",
      slug: "/divorce-support",
      tag: "Life Transition",
      icon: HeartCrack,
    },
    {
      id: "separation",
      title: "Separation",
      desc: "Working through the uncertainty, silence, physical distance, and emotional adjustment of being separated.",
      slug: "/separation-support",
      tag: "Emotional Limbo",
      icon: Split,
    },
    {
      id: "relationship",
      title: "Relationship Problems",
      desc: "Untangling communication gaps, trust cracks, growing emotional distance, and unspoken friction in your partnership.",
      slug: "/relationship-support",
      tag: "Partnership",
      icon: Users,
    },
    {
      id: "marriage",
      title: "Marriage Problems",
      desc: "A neutral, compassionate haven to express marital friction, feeling unheard by your spouse, and unspoken fatigue.",
      slug: "/marriage-problems",
      tag: "Confidential",
      icon: ShieldAlert,
    },
    {
      id: "family",
      title: "Family Conflicts",
      desc: "When domestic expectations, parental pressure, or generational disagreements become too heavy to carry alone.",
      slug: "/family-problems",
      tag: "Domestic Peace",
      icon: Users,
    },
    {
      id: "grief",
      title: "Grief and Loss",
      desc: "A safe, patient refuge to talk about losing someone you love, honor memories, and mourn without feeling rushed.",
      slug: "/grief-support",
      tag: "Bereavement",
      icon: CloudRain,
    },
    {
      id: "stress",
      title: "Emotional Stress",
      desc: "Racing thoughts, everyday overwhelm, and heavy mental fatigue — unburden yourself with someone who genuinely listens.",
      slug: "/emotional-stress-support",
      tag: "Mental Calm",
      icon: Sparkles,
    },
    {
      id: "overthinking",
      title: "Overthinking",
      desc: "When your mind replays past conversations and worries about the future late at night. Slow down and ground your thoughts.",
      slug: "/overthinking-support",
      tag: "Thought Loops",
      icon: BrainCircuit,
    },
    {
      id: "misunderstood",
      title: "Feeling Misunderstood",
      desc: "When people close to you dismiss or downplay your feelings. Experience the steadying relief of being truly heard.",
      slug: "/feeling-misunderstood",
      tag: "Empathy",
      icon: UserX,
    },
    {
      id: "someone",
      title: "Someone to Talk To",
      desc: "No clinical diagnosis, no patronizing advice, and no judgment. Just a real, empathetic human listener who is here for you.",
      slug: "/someone-to-talk",
      tag: "1-on-1 Listening",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-warm-white via-light-beige/30 to-warm-white border-t border-soft-sage/30 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-soft-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
            <ShieldCheck className="w-4 h-4 text-muted-green" />
            <span>100% Private &bull; No Clinical Judgment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.2]">
            Whatever You Are Going Through, <br className="hidden sm:inline" />
            You Can Talk About It Here.
          </h2>

          <p className="text-sm sm:text-base text-dark-charcoal/75 leading-relaxed">
            There is no emotional burden too small, too confusing, or too heavy. Every situation below opens a complete, in-depth guide with dedicated human listeners ready to connect.
          </p>
        </div>

        {/* 12 Luxury Wellness Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.id}
                className="group relative rounded-3xl bg-gradient-to-br from-white via-white to-light-beige/40 p-7 sm:p-8 border border-soft-sage/40 hover:border-muted-green/60 shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-soft-sage/25 to-soft-sage/10 text-muted-green flex items-center justify-center border border-soft-sage/30 group-hover:scale-110 group-hover:bg-muted-green group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white/90 text-dark-charcoal/70 text-[10px] font-bold uppercase tracking-wider border border-soft-sage/30 shadow-xs">
                      {c.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-serif font-bold text-dark-charcoal mb-2.5 group-hover:text-muted-green transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-soft-sage/20 flex items-center justify-between">
                  <Link
                    href={c.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-green group-hover:text-dark-charcoal transition-colors"
                  >
                    <span>Read In-Depth Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-[11px] text-dark-charcoal/40 font-medium">
                    1-on-1 Support
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
