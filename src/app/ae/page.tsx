import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  ShieldCheck,
  Clock,
  Globe,
  MapPin,
  CheckCircle2,
  Lock,
  ArrowRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Someone to Talk to in Dubai & UAE — Private Expat Emotional Support | The Inner Compass 23",
  description:
    "Feeling lonely, stressed, or heartbroken in Dubai or Abu Dhabi? Connect with a compassionate human listener. Real people, real conversations, no judgment. 100% confidential 1-on-1 peer support for expatriates and residents via WhatsApp.",
  keywords: [
    "someone to talk to in dubai",
    "someone to talk to online uae",
    "private emotional support dubai",
    "expat loneliness support abu dhabi",
    "someone to listen without judgment uae",
    "talk to someone online sharjah",
    "fadfedah dubai online",
    "فضفضة دبي",
    "heartbreak support dubai",
  ],
  alternates: {
    canonical: "https://haven.care/ae",
  },
  openGraph: {
    title: "Someone to Talk to in Dubai & UAE — The Inner Compass 23 Human Peer Support",
    description:
      "Private, confidential human emotional support in Dubai, Abu Dhabi, and across the UAE. Speak with someone who truly listens without judgment.",
    url: "https://haven.care/ae",
    locale: "en_AE",
    type: "website",
  },
};

export default function UnitedArabEmiratesPage() {
  const uaeLocations = [
    {
      name: "Dubai",
      emirate: "Dubai",
      tagline: "High-flying corporate pressure, transient social circles, expat loneliness, relationship strain",
      tier: "Tier 1 Hub",
    },
    {
      name: "Abu Dhabi",
      emirate: "Abu Dhabi",
      tagline: "Living far from home country, high family expectations, navigating quiet heartbreak",
      tier: "Tier 1 Hub",
    },
    {
      name: "Sharjah & Northern Emirates",
      emirate: "Sharjah",
      tagline: "Work-life imbalance, commuting fatigue, feeling misunderstood by social circles",
      tier: "Tier 2 Hub",
    },
  ];

  const faqs = [
    {
      q: "Why is The Inner Compass 23 particularly suited for expatriates living in the UAE?",
      a: "Over 85% of the UAE's population is comprised of international expatriates living thousands of miles away from their families and childhood friends. The pressure to appear successful can make it difficult to admit when you are lonely, stressed, or hurting. The Inner Compass 23 provides a completely neutral, discreet, and private space where you can share your real emotions without affecting your social or professional standing.",
    },
    {
      q: "What languages can I speak in?",
      a: "Our listeners are fluent in English, Hindi, and Hinglish, and deeply understand the cultural nuances of South Asian, Western, and Gulf expat life.",
    },
    {
      q: "How does the WhatsApp connection work in the UAE?",
      a: "WhatsApp text messaging works smoothly throughout the UAE. When you submit your request, our team connects with you directly on WhatsApp (+91 8810381949) for a focused 1-on-1 private messaging conversation.",
    },
    {
      q: "Is this a medical or psychiatric service?",
      a: "No. The Inner Compass 23 is non-clinical human peer support. We do not prescribe medication, diagnose mental conditions, or provide clinical psychotherapy. If you are experiencing acute medical or psychological emergencies, please contact UAE National Crisis lines or emergency services on 999.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Human Emotional Support & Peer Listening in the UAE",
    "provider": {
      "@type": "Organization",
      "name": "The Inner Compass 23 Human Emotional Support",
      "url": "https://haven.care"
    },
    "serviceType": "Peer Support & Active Listening",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "description":
      "Private, non-clinical human emotional listening service for expatriates and residents in Dubai, Abu Dhabi, and the UAE experiencing loneliness, relationship breakdown, or stress."
  };

  return (
    <div className="space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-14 border-b border-soft-sage/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
                <span>🇦🇪</span>
                <span>Expat Human Listening Support in Dubai &amp; the UAE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                Sometimes, You Just Need Someone in Dubai Who Truly Listens.
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Behind the glittering skyline and fast career milestones, expat life in Dubai and Abu Dhabi can often feel profoundly lonely. When you are far from home, carrying relationship heartbreaks or personal anxieties in silence is painful. You deserve someone who listens with warmth, patience, and absolute privacy.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#support-form"
                  className="px-6 py-3 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect with a Human Listener</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={buildDirectWhatsAppUrl(
                    "Hello The Inner Compass 23 Team, I am reaching out from the UAE and would like someone to talk to for emotional support."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-dark-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-muted-green" /> 100% Discreet &amp; Private
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-green" /> GST (UTC+4) Convenient Hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-muted-green" /> Fadfedah &bull; Genuine Empathy
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800"
                  alt="Compassionate human listening and emotional support in Dubai UAE"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations.</p>
                    <p className="text-white/80">Discreet emotional sanctuary for UAE residents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE Focus */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            UAE Expat Life
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            A Safe Space Across the Emirates
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            In a fast-moving, competitive environment, having someone outside your workplace and social circle to unburden your thoughts (فضفضة) brings immense peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uaeLocations.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-soft-sage/40 shadow-xs space-y-3 hover:border-muted-green/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-serif font-bold text-base text-dark-charcoal">
                  <MapPin className="w-4 h-4 text-muted-green" />
                  <span>{c.name}</span>
                </div>
                <span className="text-[10px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded-full">
                  {c.tier}
                </span>
              </div>
              <p className="text-xs text-dark-charcoal/75 leading-relaxed">
                {c.tagline}
              </p>
              <div className="pt-2 text-[11px] text-muted-green font-medium flex items-center gap-1">
                <span>Discreet listening available</span>
                <CheckCircle2 className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Boundary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
            <Lock className="w-4 h-4 text-muted-green" />
            <span>Complete Discretion &amp; Privacy</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal">
            Non-Clinical Listening That Respects Your Privacy
          </h3>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            We understand that many professionals in the UAE hesitate to seek support because they worry about employer records or social gossip. The Inner Compass 23 is completely separate from your employer, insurance, or local clinics. We are non-clinical peer listeners. You can speak under a pseudonym or first name only. What you discuss is held with utmost dignity and privacy.
          </p>
        </div>
      </section>

      {/* Direct Booking Form Section */}
      <section id="support-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confidential Request</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Connect with a Human Listener Today
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
            Choose what you are going through, enter your preferred date and time, and we will connect on WhatsApp.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-soft-sage/40 shadow-sm text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Fill our quick confidential request form or connect directly on WhatsApp to speak with a listener.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-dark-charcoal hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              Open Contact Form
            </Link>
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* UAE FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions (UAE &amp; Expat Clients)
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Clear information about our peer listening service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/70 border border-soft-sage/40 space-y-2"
            >
              <h3 className="font-semibold text-sm text-dark-charcoal flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-muted-green flex-shrink-0" />
                <span>{f.q}</span>
              </h3>
              <p className="text-xs text-dark-charcoal/75 leading-relaxed pl-6">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
