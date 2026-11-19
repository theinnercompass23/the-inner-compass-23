"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Users, Sparkles, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal space-y-16">
      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-sage-500 text-white flex items-center justify-center mx-auto shadow-sm">
          <Heart className="w-6 h-6 fill-white" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
          Our Heart & Purpose
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-charcoal tracking-tight">
          Nobody should feel like they have to face everything alone.
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          Haven was founded on a simple realization: in a modern hyper-connected world, emotional loneliness, burnout, and invisible suffering are at an all-time peak. We exist to build a gentle bridge back to human warmth and professional clinical support.
        </p>
      </div>

      {/* Core Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
            <Heart className="w-5 h-5 text-sage-700" />
          </div>
          <h3 className="font-serif font-bold text-lg text-charcoal">
            Unconditional Positive Regard
          </h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Whether you connect with an empathetic peer listener or share in the community circle, you will never be judged, lectured, or dismissed.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-sage-700" />
          </div>
          <h3 className="font-serif font-bold text-lg text-charcoal">
            Rigorous Clinical Transparency
          </h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            We never mislead users. Trained peer listeners are clearly distinguished from licensed clinical psychologists and psychiatrists registered with RCI/NMC.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-sage-700" />
          </div>
          <h3 className="font-serif font-bold text-lg text-charcoal">
            Complete Anonymity & Data Dignity
          </h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Compliant with Indian digital health privacy standards. Your journals are strictly encrypted, and community posts are masked under gentle pseudonyms.
          </p>
        </div>
      </div>

      {/* Indian Helpline Affiliation Banner */}
      <div className="p-8 rounded-3xl bg-sage-50 border border-sage-200 text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
          Emergency Mental Health Care
        </span>
        <h3 className="font-serif font-bold text-xl text-charcoal">
          Committed to National Suicide Prevention & Crisis Care
        </h3>
        <p className="text-xs text-charcoal-muted leading-relaxed">
          We actively collaborate with government initiatives such as Tele-MANAS (14416) to ensure that any individual exhibiting acute distress is immediately guided to free, live intervention.
        </p>
        <div className="pt-2">
          <Link
            href="/crisis-support"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-sage-800 hover:text-sage-900 underline"
          >
            <span>Explore All Crisis Numbers & Safety Planning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
