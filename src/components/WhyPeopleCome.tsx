"use client";

import React from "react";
import { Headphones, ShieldCheck, Lock, Heart } from "lucide-react";

export default function WhyPeopleCome() {
  const benefits = [
    {
      title: "Someone Who Listens",
      desc: "Attentive, patient human presence when you feel invisible or overwhelmed.",
      icon: Headphones,
    },
    {
      title: "No Judgment",
      desc: "Speak freely about relationship heartbreak, family conflict, or sorrow without being lectured.",
      icon: ShieldCheck,
    },
    {
      title: "A Private Conversation",
      desc: "A safe, confidential space where your personal words are treated with profound respect.",
      icon: Lock,
    },
    {
      title: "Human Connection",
      desc: "A genuine human being who cares, not an automated chatbot, algorithm, or clinical checklist.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-light-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Genuine Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal mt-1 mb-2">
            Sometimes, Talking Makes a Difference.
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            Holding everything inside exhausts your heart and mind. Having someone simply hear you can bring a quiet sense of relief.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-warm-white border border-light-beige space-y-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-sage-100 text-muted-green flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-dark-charcoal">
                  {b.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
