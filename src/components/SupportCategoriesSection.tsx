"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Sparkles, ArrowRight, Users, Smile } from "lucide-react";

interface CategoryCard {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
}

export default function SupportCategoriesSection() {
  const categories: CategoryCard[] = [
    {
      id: "loneliness",
      title: "Feeling Lonely",
      subtitle: "Most Requested • Isolation & Solitude",
      slug: "/feeling-lonely",
    },
    {
      id: "heartbreak",
      title: "Heartbreak",
      subtitle: "Heart Healing • Breakups & Grief",
      slug: "/heartbreak-support",
    },
    {
      id: "divorce",
      title: "Divorce",
      subtitle: "Life Transition • Starting Over",
      slug: "/divorce-support",
    },
    {
      id: "separation",
      title: "Separation",
      subtitle: "Emotional Limbo • Rebuilding",
      slug: "/separation-support",
    },
    {
      id: "relationship",
      title: "Relationship Problems",
      subtitle: "Partnership • Trust & Friction",
      slug: "/relationship-support",
    },
    {
      id: "marriage",
      title: "Marriage Problems",
      subtitle: "Confidential • Unspoken Fatigue",
      slug: "/marriage-problems",
    },
    {
      id: "family",
      title: "Family Conflicts",
      subtitle: "Domestic Peace • Family Support",
      slug: "/family-problems",
    },
    {
      id: "grief",
      title: "Grief and Loss",
      subtitle: "Bereavement • Loving Memories",
      slug: "/grief-support",
    },
    {
      id: "stress",
      title: "Emotional Stress",
      subtitle: "Mental Calm • Overwhelm Release",
      slug: "/emotional-stress-support",
    },
    {
      id: "overthinking",
      title: "Overthinking",
      subtitle: "Thought Loops • 3 AM Relief",
      slug: "/overthinking-support",
    },
    {
      id: "misunderstood",
      title: "Feeling Misunderstood",
      subtitle: "Empathy • Validation & Care",
      slug: "/feeling-misunderstood",
    },
    {
      id: "someone",
      title: "Someone to Talk To",
      subtitle: "1-on-1 • 24/7 Human Listening",
      slug: "/someone-to-talk",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-warm-white via-light-beige/30 to-warm-white border-t border-soft-sage/30 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-soft-sage/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
            <ShieldCheck className="w-4 h-4 text-muted-green" />
            <span>100% Private &bull; No Clinical Judgment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.2]">
            Whatever You Are Going Through, <br className="hidden sm:inline" />
            You Can Talk About It Here.
          </h2>

          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            There is no emotional burden too small, too confusing, or too heavy. Every situation below opens a complete, in-depth guide with dedicated human listeners ready to connect.
          </p>
        </div>

        {/* Categories 2-Column Grid (Image 2 style) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={c.slug}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group block space-y-1 cursor-pointer"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                {c.title}
              </div>
              <div className="text-[11px] text-dark-charcoal/50 leading-snug">
                {c.subtitle}
              </div>
            </Link>
          ))}
        </div>

        {/* Highlighted Centered Children & Youth Support Banner (The Social Confidence Lab) */}
        <div className="pt-4 sm:pt-6 flex justify-center w-full">
          <Link
            href="/support-for-children"
            className="w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-soft-sage/20 to-amber-50/50 border-2 border-muted-green/40 hover:border-muted-green shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group block text-center cursor-pointer relative overflow-hidden"
          >
            {/* Soft decorative glow */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-muted-green/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3.5">
              {/* Highlight Badge & S.C.O.U.T Emblem */}
              <div className="flex items-center justify-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-soft-sage/40 bg-white p-0.5 shadow-2xs">
                  <Image
                    src="/scl/scout-logo-clean.png"
                    alt="S.C.O.U.T Logo"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-muted-green text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                  <span>S.C.O.U.T &bull; Children &amp; Youth Support</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-dark-charcoal group-hover:text-muted-green transition-colors">
                S.C.O.U.T: Helping Every Child Find Their Voice and Their Place
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-dark-charcoal/80 max-w-xl mx-auto leading-relaxed">
                Dedicated support for shy, introverted, single, and specially-abled children to overcome loneliness, develop confident communication, and build meaningful peer friendships.
              </p>

              {/* Specialized Cohort Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Social Skills Training
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Feeling Shy (Introvert)
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Single Child
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Specially Abled Loneliness
                </span>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-center">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal group-hover:bg-black text-white shadow-md group-hover:shadow-lg transition-all">
                  <span>Explore S.C.O.U.T for Children</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
