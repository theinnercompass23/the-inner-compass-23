"use client";

import React from "react";
import { useLeads } from "@/context/LeadContext";
import {
  HeartHandshake,
  HeartCrack,
  HeartOff,
  ShieldAlert,
  Users,
  CloudRain,
  Compass,
  Headphones,
  ArrowRight,
} from "lucide-react";

export default function SupportCategoriesSection() {
  const { selectSingleCategoryAndScroll } = useLeads();

  const cards = [
    {
      title: "Loneliness",
      formCategory: "I Feel Lonely",
      desc: "For days when you feel alone, even when the world is around you.",
      icon: HeartHandshake,
    },
    {
      title: "Divorce & Separation",
      formCategory: "I'm Going Through a Divorce",
      desc: "Going through separation can be difficult. Have someone listen to your feelings.",
      icon: HeartCrack,
    },
    {
      title: "Breakup & Heartbreak",
      formCategory: "I Recently Had a Breakup",
      desc: "Sometimes moving forward begins with expressing what's hurting.",
      icon: HeartOff,
    },
    {
      title: "Marriage & Relationship Problems",
      formCategory: "I'm Having Marriage Problems",
      desc: "Talk about things you may find difficult to share with friends or family.",
      icon: ShieldAlert,
    },
    {
      title: "Family Problems",
      formCategory: "I'm Facing Family Problems",
      desc: "When family situations become overwhelming, you deserve to be heard.",
      icon: Users,
    },
    {
      title: "Grief & Loss",
      formCategory: "I Lost Someone Close to Me",
      desc: "A private space to express the emotions that come with losing someone.",
      icon: CloudRain,
    },
    {
      title: "Personal Stress",
      formCategory: "I'm Going Through a Difficult Time",
      desc: "Talk about difficult situations, overthinking, and everyday struggles.",
      icon: Compass,
    },
    {
      title: "Just Need Someone to Talk To",
      formCategory: "I Need Someone to Listen",
      desc: "You don't need a specific reason. Sometimes you simply need someone to listen.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Safe Conversations
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal mt-1 mb-2">
            Whatever You&apos;re Going Through, You Can Talk About It.
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            There is no emotional burden too small or too heavy. You can express yourself here in a calm, judgment-free space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-light-beige hover:border-soft-sage shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sage-50 text-muted-green flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-serif font-bold text-dark-charcoal mb-1.5 group-hover:text-muted-green transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed mb-6">
                    {c.desc}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => selectSingleCategoryAndScroll(c.formCategory)}
                  className="w-full py-2.5 px-4 rounded-full text-xs font-semibold bg-warm-white hover:bg-sage-100 text-dark-charcoal hover:text-muted-green border border-light-beige transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Talk About This</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
