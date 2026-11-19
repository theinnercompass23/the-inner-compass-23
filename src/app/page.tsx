"use client";

import React from "react";
import SupportRequestForm from "@/components/SupportRequestForm";
import SupportCategoriesSection from "@/components/SupportCategoriesSection";
import WhyPeopleCome from "@/components/WhyPeopleCome";
import TrustAndPrivacy from "@/components/TrustAndPrivacy";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import { Heart, ArrowDown, MessageCircle, Lock, ShieldCheck } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export default function HomePage() {
  const directWhatsApp = buildDirectWhatsAppUrl();

  return (
    <div className="bg-warm-white text-dark-charcoal">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        {/* Soft background glow circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-soft-sage/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-50 border border-soft-sage/40 text-xs font-semibold text-muted-green">
                <Heart className="w-3.5 h-3.5 fill-muted-green" />
                <span>Private Human Listening • Zero Judgment</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.18]">
                  Sometimes, You Just Need Someone to Listen.
                </h1>
                <p className="text-base sm:text-lg font-serif italic text-muted-green">
                  You don&apos;t have to carry everything alone.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-charcoal-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Whether you&apos;re feeling lonely, going through a difficult relationship, dealing with a separation, or simply need someone to talk to, we&apos;re here to listen without judgment.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#support-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold bg-muted-green hover:bg-sage-600 text-white shadow-sm transition-all"
                >
                  <span>Talk to Someone</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>

                <a
                  href={directWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>

              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-[11px] text-charcoal-subtle">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-muted-green" /> 100% Confidential
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-muted-green" /> Genuine Human Being
                </span>
              </div>
            </div>

            {/* Right Emotional Photography */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=700"
                    alt="Comforting human connection and peaceful emotional support"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic drop-shadow-md">
                    &ldquo;A safe space where you can let down your guard.&rdquo;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SUPPORT REQUEST FORM (Directly after Hero) */}
      <SupportRequestForm />

      {/* 3. WHAT YOU CAN TALK ABOUT (Support Categories) */}
      <SupportCategoriesSection />

      {/* 4. WHY PEOPLE COME TO US */}
      <WhyPeopleCome />

      {/* 5. SMALL TRUST & PRIVACY SECTION */}
      <TrustAndPrivacy />

      {/* 6. FINAL WHATSAPP CTA */}
      <FinalWhatsAppCta />
    </div>
  );
}
