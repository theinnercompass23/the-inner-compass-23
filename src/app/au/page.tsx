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
  title: "Someone to Talk to Online Australia — Human Listening & Emotional Support | The Inner Compass 23",
  description:
    "Feeling lonely, heartbroken, or stressed in Australia? Connect with an attentive human listener. Real people, real conversations, no judgment. Private 1-on-1 support for Sydney, Melbourne, Brisbane, Perth, and nationwide via WhatsApp.",
  keywords: [
    "someone to talk to online australia",
    "online listening service australia",
    "someone to talk to in sydney",
    "someone to talk to in melbourne",
    "emotional support brisbane",
    "perth listening service",
    "i have nobody to talk to australia",
    "talk to someone online without therapy",
    "heartbreak support australia",
  ],
  alternates: {
    canonical: "https://www.theinnercompass23.com/au",
  },
  openGraph: {
    title: "Someone to Talk to Online Australia — The Inner Compass 23 Human Peer Support",
    description:
      "Private, confidential human emotional support across Australia. Speak with someone who truly listens without judgment.",
    url: "https://www.theinnercompass23.com/au",
    locale: "en_AU",
    type: "website",
  },
};

export default function AustraliaPage() {
  const australianCities = [
    {
      name: "Sydney",
      state: "NSW",
      tagline: "High cost of living pressure, fast urban pace, late-night loneliness",
      tier: "Tier 1 Metro",
    },
    {
      name: "Melbourne",
      state: "VIC",
      tagline: "Career stress, shifting social circles, heartbreak and relationship sorrow",
      tier: "Tier 1 Metro",
    },
    {
      name: "Brisbane",
      state: "QLD",
      tagline: "Interstate relocation isolation, family friction, needing an empathetic ear",
      tier: "Tier 1 Metro",
    },
    {
      name: "Perth",
      state: "WA",
      tagline: "Timezone distance from family, FIFO lifestyle challenges, personal isolation",
      tier: "Tier 2 Metro",
    },
    {
      name: "Adelaide",
      state: "SA",
      tagline: "Quiet loneliness, relationship transitions, wanting non-judgmental dialogue",
      tier: "Tier 2 Metro",
    },
    {
      name: "Gold Coast",
      state: "QLD",
      tagline: "Transient community blues, personal stress, seeking genuine human connection",
      tier: "Tier 3 Metro",
    },
  ];

  const faqs = [
    {
      q: "How does The Inner Compass 23 support Australians facing personal challenges?",
      a: "Whether you are navigating a painful breakup, dealing with separation, or feeling isolated in an Australian city far from your support network, The Inner Compass 23 provides a calm, confidential space to talk freely without clinical evaluation or long waitlists.",
    },
    {
      q: "What Australian timezones do you cover?",
      a: "We support Australian Eastern Time (AEST / AEDT: Sydney, Melbourne, Brisbane), Australian Central Time (Adelaide), and Australian Western Time (AWST: Perth). You can pick your local time slot in the booking form.",
    },
    {
      q: "Is The Inner Compass 23 an emergency crisis service?",
      a: "No. The Inner Compass 23 provides non-clinical peer support and human listening. If you are experiencing a crisis, please dial 000 for emergency services or contact Lifeline Australia at 13 11 14 (available 24/7).",
    },
    {
      q: "How does the WhatsApp conversation work?",
      a: "After you submit your request, our coordinator connects with you on WhatsApp (+91 8810381949). You can chat privately with a dedicated human listener who gives you their full, undivided attention.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Human Emotional Support & Peer Listening in Australia",
    "provider": {
      "@type": "Organization",
      "name": "The Inner Compass 23 Human Emotional Support",
      "url": "https://www.theinnercompass23.com"
    },
    "serviceType": "Peer Support & Active Listening",
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    },
    "description":
      "Private, non-clinical human emotional listening service for individuals in Australia experiencing loneliness, relationship breakdown, divorce, or emotional strain."
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
                <span>🇦🇺</span>
                <span>Human Listening Support across Australia</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                Sometimes, You Just Need Someone in Australia Who Truly Listens.
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Australia is known for its wide open spaces, but urban isolation in cities like Sydney and Melbourne is very real. When you are going through a difficult breakup, marriage conflict, or quiet loneliness, having someone impartial to listen changes everything.
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
                    "Hello The Inner Compass 23 Team, I am reaching out from Australia and would like someone to talk to for emotional support."
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
                  <ShieldCheck className="w-4 h-4 text-muted-green" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-green" /> AEST, ACST &amp; AWST Hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-muted-green" /> Real People &bull; No Judgment
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                  alt="Compassionate human listening and emotional support in Australia"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations.</p>
                    <p className="text-white/80">Support for Australian adults seeking empathy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Australian Cities Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            Australian Cities
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Listening Across Australian Communities
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            Whether you are on the East Coast, in Western Australia, or anywhere in between, we provide a private ear whenever you need someone to listen.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {australianCities.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-soft-sage/40 shadow-xs space-y-3 hover:border-muted-green/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-serif font-bold text-base text-dark-charcoal">
                  <MapPin className="w-4 h-4 text-muted-green" />
                  <span>{c.name}, {c.state}</span>
                </div>
                <span className="text-[10px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded-full">
                  {c.tier}
                </span>
              </div>
              <p className="text-xs text-dark-charcoal/75 leading-relaxed">
                {c.tagline}
              </p>
              <div className="pt-2 text-[11px] text-muted-green font-medium flex items-center gap-1">
                <span>Private listening available</span>
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
            <span>Non-Clinical Peer Support</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal">
            A Safe Space for Everyday Emotional Burdens
          </h3>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            The Inner Compass 23 does not provide clinical psychological therapy, mental health diagnoses, or medical treatment. We are a human peer listening service designed for everyday people who need someone attentive, understanding, and respectful to talk to about loneliness, heartbreak, or life stress without judgment.
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

      {/* Australia FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions (Australia)
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
