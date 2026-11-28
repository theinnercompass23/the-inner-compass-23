"use client";

import React from "react";
import Link from "next/link";
import SupportCategoriesSection from "@/components/SupportCategoriesSection";
import CompleteOfferingSection from "@/components/CompleteOfferingSection";
import InnerCompassSection from "@/components/InnerCompassSection";
import FeaturedArticlesSection from "@/components/FeaturedArticlesSection";
import AiFaqSection from "@/components/AiFaqSection";
import TrustAndPrivacy from "@/components/TrustAndPrivacy";
import MeetFounderSection from "@/components/MeetFounderSection";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SafeImage from "@/components/SafeImage";
import {
  Heart,
  ArrowDown,
  ArrowRight,
  Lock,
  ShieldCheck,
  Compass,
  Users,
  Clock,
  CheckCircle2,
  Globe,
  Headphones,
} from "lucide-react";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  buildDirectWhatsAppUrl,
} from "@/lib/constants";

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
                  <span>Active Listeners Online Now</span>
                </div>

                <div className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-soft-sage/20 border border-soft-sage/35 text-[11px] sm:text-xs font-medium text-dark-charcoal/80">
                  <span>Life Alchemists, No Judgement</span>
                </div>
              </div>

              {/* Main Headline & Verbatim Copy */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.15] break-words">
                  Sometimes, You Just Need <br className="hidden sm:inline" />
                  <span className="italic font-normal text-muted-green">Someone to Listen.</span>
                </h1>
                <div className="text-sm sm:text-base text-dark-charcoal/85 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 space-y-2">
                  <p>
                    Our Active listeners listen your unspoken pain,
                  </p>
                  <p>
                    Our life Alchemists decode your cosmic patterns &amp; awaken your inner wisdom.
                  </p>
                  <p>
                    Our Spiritual Cartographers transform your journey by aligning your inner compass with purpose of your life.
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                No clinical diagnoses, no patronizing advice, and zero automated AI chatbots. Trained active human listeners, life alchemists, and spiritual cartographers ready to connect with you one-on-one.
              </p>

              {/* Primary Call-to-Actions */}
              <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 w-full">
                <a
                  href={buildDirectWhatsAppUrl("Hello, I would like to connect with an Active Listener to share my unspoken pain.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal hover:bg-black text-warm-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap border border-white/10"
                >
                  <Headphones className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Connect with an Active Listener</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href={buildDirectWhatsAppUrl("Hello, I would like to connect with a Life Alchemist to decode my cosmic patterns & awaken my inner wisdom.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal hover:bg-black text-warm-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap border border-white/10"
                >
                  <span>Connect with a Life Alchemist</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href={buildDirectWhatsAppUrl("Hello, I would like to connect with a Spiritual Cartographer to transform my journey by aligning my inner compass with purpose of my life.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal hover:bg-black text-warm-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap border border-white/10"
                >
                  <Compass className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Connect with a Spiritual Cartographer</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>

                <a
                  href={buildDirectWhatsAppUrl("Hello, I would like to connect on WhatsApp.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4.5 h-4.5 shrink-0" color="#FFFFFF" />
                  <span>Chat on WhatsApp or Call on WhatsApp</span>
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
      {/* 1.5 THE INNER COMPASS 23 JOURNEY SECTION                  */}
      {/* ========================================================= */}
      <InnerCompassSection />

      {/* ========================================================= */}
      {/* 2. SUPPORT CATEGORIES (What You Can Talk About)           */}
      {/* ========================================================= */}
      <div id="categories-section" className="scroll-mt-16">
        <SupportCategoriesSection />
      <CompleteOfferingSection />
      </div>

      {/* ========================================================= */}
      {/* 4. FEATURED SEO ARTICLES (Magazine Style)                 */}
      {/* ========================================================= */}
      <FeaturedArticlesSection />

      {/* ========================================================= */}
      {/* 5. AI-READY FAQS & FEATURED SNIPPETS SECTION              */}
      {/* ========================================================= */}
      <AiFaqSection
        title="Frequently Asked Questions & AI Answers"
        subtitle="Direct, factual answers to help you understand online active listening, privacy, and support options."
        badge="Direct Snippet Answers • AI & Search Optimized"
        includeSchema={true}
      />

      {/* ========================================================= */}
      {/* 7. PROGRAMMATIC CITY DIRECTORY (US & GLOBAL HUBS)         */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 border-t border-soft-sage/30 bg-warm-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
                <Globe className="w-3.5 h-3.5" />
                <span>Local Timezones &amp; Active Listening Hubs</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
                Available in 50+ Cities Across the US &amp; Worldwide
              </h2>
              <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-xl">
                Connect with an attentive human listener in your local timezone. 100% confidential, remote via WhatsApp.
              </p>
            </div>
            <Link
              href="/locations"
              className="text-xs font-semibold text-muted-green hover:underline inline-flex items-center gap-1 shrink-0"
            >
              <span>Explore All Global Cities</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            <Link
              href="/locations/united-states/new-york"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                New York City, NY
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                EST &bull; Late-Night Venting
              </div>
            </Link>

            <Link
              href="/locations/united-states/los-angeles"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                Los Angeles, CA
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                PST &bull; Career &amp; Breakups
              </div>
            </Link>

            <Link
              href="/locations/united-states/chicago"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                Chicago, IL
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                CST &bull; Divorce &amp; Loneliness
              </div>
            </Link>

            <Link
              href="/locations/united-states/miami"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                Miami, FL
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                EST &bull; 24/7 Anonymous Support
              </div>
            </Link>

            <Link
              href="/locations/united-states/san-francisco"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                San Francisco, CA
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                PST &bull; Startup Burnout &amp; Empathy
              </div>
            </Link>

            <Link
              href="/locations/united-states/seattle"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                Seattle, WA
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                PST &bull; Seasonal Blues
              </div>
            </Link>

            <Link
              href="/locations/united-states/boston"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                Boston, MA
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                EST &bull; Young Adult Support
              </div>
            </Link>

            <Link
              href="/locations/united-kingdom/london"
              className="p-4 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group block space-y-1"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                London, UK
              </div>
              <div className="text-[11px] text-dark-charcoal/50">
                GMT &bull; Tube Isolation
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. MEET OUR FOUNDER                                       */}
      {/* ========================================================= */}
      <MeetFounderSection />

      {/* ========================================================= */}
      {/* 9. TRUST AND PRIVACY                                      */}
      {/* ========================================================= */}
      <TrustAndPrivacy />

      {/* ========================================================= */}
      {/* 9. FINAL WHATSAPP CTA                                     */}
      {/* ========================================================= */}
      <FinalWhatsAppCta />
    </div>
  );
}
