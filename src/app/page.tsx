"use client";

import React from "react";
import SupportRequestForm from "@/components/SupportRequestForm";
import SupportCategoriesSection from "@/components/SupportCategoriesSection";
import FeaturedArticlesSection from "@/components/FeaturedArticlesSection";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import TrustAndPrivacy from "@/components/TrustAndPrivacy";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SafeImage from "@/components/SafeImage";
import {
  Heart,
  ArrowDown,
  Lock,
  ShieldCheck,
  Compass,
  Star,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, buildDirectWhatsAppUrl } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="bg-warm-white text-dark-charcoal w-full max-w-full overflow-x-hidden">
      {/* ========================================================= */}
      {/* 1. LUXURY HERO SECTION                                    */}
      {/* ========================================================= */}
      <section className="relative pt-10 pb-14 sm:pt-20 sm:pb-24 overflow-hidden border-b border-soft-sage/30 w-full">
        {/* Soft background ambient blurs contained strictly */}
        <div className="absolute top-10 left-1/4 w-72 sm:w-[500px] h-72 sm:h-[500px] max-w-full bg-soft-sage/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-24 right-1/4 w-64 sm:w-[450px] h-64 sm:h-[450px] max-w-full bg-amber-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Live Status Pill & Emotional Tag */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-soft-sage/40 text-[11px] sm:text-xs font-semibold text-muted-green shadow-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>Real Listeners Online Now</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-soft-sage/20 border border-soft-sage/35 text-[11px] sm:text-xs font-medium text-dark-charcoal/80">
                  <Heart className="w-3.5 h-3.5 fill-muted-green/20 text-muted-green" />
                  <span>Real People &bull; No Judgment</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.15] break-words">
                  Sometimes, You Just Need <br className="hidden sm:inline" />
                  <span className="italic font-normal text-muted-green">Someone to Listen.</span>
                </h1>
                <p className="text-sm sm:text-lg text-dark-charcoal/80 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Whatever you are carrying—loneliness, a difficult separation, heartbreak, or unspoken stress—you deserve a private space where you can express yourself without judgment.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                No clinical diagnoses, no patronizing advice, and zero automated AI chatbots. Just compassionate, trained human listeners ready to connect with you one-on-one.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                <a
                  href="#support-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal hover:bg-black text-warm-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>Connect with a Listener</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <a
                  href={buildDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" color="#FFFFFF" />
                  <span>Direct WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs text-dark-charcoal/70">
                <span className="flex items-center gap-1.5 font-medium">
                  <Lock className="w-3.5 h-3.5 text-muted-green shrink-0" /> 100% Confidential
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-muted-green shrink-0" /> Human Peer Listeners
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Globe className="w-3.5 h-3.5 text-muted-green shrink-0" /> Global Timezones
                </span>
              </div>
            </div>

            {/* Right Emotional Photography & Floating Social Proof */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full max-w-md">
                {/* Main Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 sm:aspect-square w-full">
                  <SafeImage
                    src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800"
                    alt="Comforting human connection and peaceful emotional support"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-dark-charcoal/20 to-transparent z-10 pointer-events-none" />

                  {/* Bottom Text in Image */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white z-20 space-y-1.5">
                    <div className="flex items-center gap-1 text-amber-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-300" />
                      ))}
                      <span className="text-[11px] sm:text-xs text-white/90 font-semibold ml-1">4.9 / 5.0 Rating</span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif italic drop-shadow-md text-white/95 leading-snug">
                      &ldquo;The first time in months I felt someone truly understood without lecturing or judging me.&rdquo;
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-white/70">Verified 1-on-1 WhatsApp Conversation</p>
                  </div>
                </div>

                {/* Floating Glassmorphic Chip (Top Left on desktop/tablet only) */}
                <div className="hidden sm:flex absolute -top-4 -left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-soft-sage/30 items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center font-bold shrink-0">
                    <Heart className="w-5 h-5 fill-muted-green/20" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-dark-charcoal">12,400+ Conversations</div>
                    <div className="text-[10px] text-dark-charcoal/60">Anonymous &bull; 100% Private</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4-Metric Luxury Bar */}
          <div className="pt-6 border-t border-soft-sage/30 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="space-y-1 p-2 sm:p-0">
              <div className="text-xl sm:text-3xl font-serif font-bold text-dark-charcoal">100%</div>
              <div className="text-[11px] sm:text-xs text-dark-charcoal/70">Real Human Listeners</div>
            </div>
            <div className="space-y-1 p-2 sm:p-0">
              <div className="text-xl sm:text-3xl font-serif font-bold text-dark-charcoal">0 Bots</div>
              <div className="text-[11px] sm:text-xs text-dark-charcoal/70">Zero AI / Scripts</div>
            </div>
            <div className="space-y-1 p-2 sm:p-0">
              <div className="text-xl sm:text-3xl font-serif font-bold text-dark-charcoal">&lt; 15 Mins</div>
              <div className="text-[11px] sm:text-xs text-dark-charcoal/70">Avg Response Time</div>
            </div>
            <div className="space-y-1 p-2 sm:p-0">
              <div className="text-xl sm:text-3xl font-serif font-bold text-dark-charcoal">50+ Cities</div>
              <div className="text-[11px] sm:text-xs text-dark-charcoal/70">Global Timezones</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SUPPORT REQUEST FORM (Directly after Hero)             */}
      {/* ========================================================= */}
      <SupportRequestForm />

      {/* ========================================================= */}
      {/* 3. SUPPORT CATEGORIES (What You Can Talk About)           */}
      {/* ========================================================= */}
      <div id="categories-section" className="scroll-mt-16">
        <SupportCategoriesSection />
      </div>

      {/* ========================================================= */}
      {/* 4. FEATURED SEO ARTICLES (Magazine Style)                 */}
      {/* ========================================================= */}
      <FeaturedArticlesSection />

      {/* ========================================================= */}
      {/* 5. VIDEO REVIEWS (Instagram Reels-Inspired 9:16 Gallery)   */}
      {/* ========================================================= */}
      <section className="py-16 sm:py-28 border-t border-soft-sage/30 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <VideoStoriesSection
            layout="carousel"
            showViewAll={true}
            title="Real Stories. Genuine Experiences."
            subtitle="Watch authentic video reflections from everyday individuals who found compassionate human listening when they needed it most."
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. TRUST AND PRIVACY                                      */}
      {/* ========================================================= */}
      <TrustAndPrivacy />

      {/* ========================================================= */}
      {/* 7. FINAL WHATSAPP CTA                                     */}
      {/* ========================================================= */}
      <FinalWhatsAppCta />
    </div>
  );
}
