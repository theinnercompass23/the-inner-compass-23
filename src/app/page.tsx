"use client";

import React from "react";
import SupportRequestForm from "@/components/SupportRequestForm";
import SupportCategoriesSection from "@/components/SupportCategoriesSection";
import WhyPeopleCome from "@/components/WhyPeopleCome";
import TrustAndPrivacy from "@/components/TrustAndPrivacy";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Heart, ArrowDown, Lock, ShieldCheck, Compass } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";

export default function HomePage() {
  const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello, I would like to connect with someone to talk to for emotional support."
  )}`;

  return (
    <div className="bg-warm-white text-dark-charcoal">
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        {/* Soft background glow circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-soft-sage/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green">
                <Heart className="w-3.5 h-3.5 fill-muted-green/20" />
                <span>Real People • Real Conversations • No Judgment</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.15]">
                  Sometimes, You Just Need Someone to Listen.
                </h1>
                <p className="text-base sm:text-lg text-muted-green font-medium">
                  Whatever you&apos;re going through, you deserve a space where you can express yourself without judgment.
                </p>
              </div>

              <p className="text-sm sm:text-base text-dark-charcoal/75 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Whether you&apos;re feeling lonely, going through a difficult relationship, dealing with a separation, heartbreak, or simply need someone to talk to, we&apos;re here to listen.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#support-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-muted-green hover:bg-[#68826d] text-white shadow-md hover:shadow-lg transition-all"
                >
                  <span>Talk to Someone</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href="#categories-section"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold bg-white hover:bg-light-beige border border-soft-sage/50 text-dark-charcoal transition-all shadow-sm"
                >
                  <Compass className="w-4 h-4 text-muted-green" />
                  <span>Find Your Support</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 text-xs text-dark-charcoal/60">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-muted-green" /> 100% Confidential
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-muted-green" /> Human Peer Listener
                </span>
                <span>•</span>
                <span>Zero Cost / No Subscription</span>
              </div>
            </div>

            {/* Right Emotional Photography */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800"
                    alt="Comforting human connection and peaceful emotional support"
                    className="w-full h-84 sm:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/60 via-dark-charcoal/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-sm font-serif italic drop-shadow-md">
                      &ldquo;A safe, quiet place where you can be yourself and let down your guard.&rdquo;
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-white/90 mt-2 font-medium">
                      <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center">
                        <WhatsAppIcon className="w-3 h-3" color="#FFFFFF" />
                      </span>
                      <span>Direct WhatsApp: {WHATSAPP_DISPLAY}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. HIGHLIGHTED SUPPORT REQUEST FORM (Directly after Hero) */}
      {/* ========================================================= */}
      <SupportRequestForm />

      {/* ========================================================= */}
      {/* 3. SUPPORT CATEGORIES (What You Can Talk About)           */}
      {/* ========================================================= */}
      <div id="categories-section" className="scroll-mt-16">
        <SupportCategoriesSection />
      </div>

      {/* ========================================================= */}
      {/* 4. WHY PEOPLE COME TO US                                  */}
      {/* ========================================================= */}
      <WhyPeopleCome />

      {/* ========================================================= */}
      {/* 5. PRIVACY & TRUST SECTION                                */}
      {/* ========================================================= */}
      <TrustAndPrivacy />

      {/* ========================================================= */}
      {/* 6. FINAL WHATSAPP CTA                                     */}
      {/* ========================================================= */}
      <FinalWhatsAppCta />
    </div>
  );
}
