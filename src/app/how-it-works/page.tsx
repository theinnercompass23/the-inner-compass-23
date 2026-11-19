"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  MessageSquareHeart,
  Stethoscope,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Tell Us How You're Feeling",
      desc: "Take a quiet moment to identify your emotional state. Are you feeling acute loneliness? Overwhelmed by deadlines or relationship conflict? Or do you just want someone who will sit quietly and listen without unsolicited advice?",
    },
    {
      num: "02",
      title: "Choose the Support That Feels Right",
      desc: "Haven lets you move at your own speed. If you need immediate non-judgmental listening, hop onto a text chat with a trained human listener or our AI companion. If you need deep clinical healing, book a video session with an RCI-registered psychologist.",
    },
    {
      num: "03",
      title: "Connect in Complete Confidentiality",
      desc: "All conversations are private. Community reflections are published under anonymous handles. You never have to explain or justify yourself. Take things one gentle step at a time.",
    },
  ];

  const faqs = [
    {
      q: "Are human listeners certified therapists?",
      a: "No. Human listeners are trained empathetic peers who provide warmth, active listening, and emotional presence. They do not diagnose conditions, prescribe medications, or offer clinical psychotherapy. For medical and psychological treatment, we provide verified licensed therapists.",
    },
    {
      q: "Can I remain completely anonymous in the community?",
      a: "Yes. When posting in our community circle, your real name, email, and location are never displayed. You are assigned a calming avatar and persona like 'GentleSparrow'.",
    },
    {
      q: "What should I do if I am in immediate crisis or feeling suicidal?",
      a: "Please immediately contact India's toll-free Government Mental Health Helpline at Tele-MANAS (14416 or 1800-891-4416) or National Emergency Services at 112. Free, confidential support is available 24/7.",
    },
    {
      q: "How does therapist booking and cancellation work?",
      a: "You can book a 50-minute private video consultation by selecting any open slot on the therapist's calendar. You may reschedule or cancel your appointment up to 4 hours before the session without penalty.",
    },
  ];

  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
          Simple, Gentle, Frictionless
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-charcoal">
          How Haven Works
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Asking for help is often the hardest part. We designed Haven to be as gentle, comforting, and clear as possible.
        </p>
      </div>

      {/* Steps Visual */}
      <div className="space-y-6">
        {steps.map((s, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-16 h-16 rounded-3xl bg-sage-100 text-sage-800 font-serif font-bold text-2xl flex items-center justify-center shrink-0">
              {s.num}
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-charcoal">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-charcoal-muted">
            Clear answers about your privacy, safety, and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-warm-sand shadow-sm space-y-2"
            >
              <h4 className="font-serif font-bold text-sm text-charcoal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-sage-700 shrink-0" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-md transition-all"
        >
          <span>Get Started Today — It&apos;s Free</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
