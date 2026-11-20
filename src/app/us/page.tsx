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
import SupportRequestForm from "@/components/SupportRequestForm";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Someone to Talk to Online in USA — Human Listening & Emotional Support | Haven",
  description:
    "Feeling lonely, heartbroken, or overwhelmed in the US? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private 1-on-1 support for NYC, LA, Chicago, and nationwide via WhatsApp.",
  keywords: [
    "someone to talk to online usa",
    "i need someone to talk to us",
    "online human listener united states",
    "someone to talk to in new york",
    "someone to talk to in los angeles",
    "emotional support online chicago",
    "talk to someone online without therapy",
    "lonely late at night someone to talk to",
    "heartbreak support online usa",
    "private peer listening service",
  ],
  alternates: {
    canonical: "https://haven.care/us",
  },
  openGraph: {
    title: "Someone to Talk to Online in USA — Haven Human Peer Support",
    description:
      "Private, confidential human emotional support across the United States. Speak with someone who truly listens without judgment.",
    url: "https://haven.care/us",
    locale: "en_US",
    type: "website",
  },
};

export default function UnitedStatesPage() {
  const usCities = [
    {
      name: "New York City",
      state: "NY",
      tagline: "High-paced urban life, late-night overthinking, living alone in the city",
      tier: "Tier 1 Metro",
    },
    {
      name: "Los Angeles",
      state: "CA",
      tagline: "Career transition pressure, creative burnout, feeling disconnected",
      tier: "Tier 1 Metro",
    },
    {
      name: "Chicago",
      state: "IL",
      tagline: "Winter isolation, family stress, navigating difficult breakups",
      tier: "Tier 1 Metro",
    },
    {
      name: "San Francisco & Bay Area",
      state: "CA",
      tagline: "Tech pressure, imposter syndrome, high cost of living stress",
      tier: "Tier 1 Metro",
    },
    {
      name: "Seattle",
      state: "WA",
      tagline: "Seasonal mood changes, social isolation, relocation loneliness",
      tier: "Tier 1 Metro",
    },
    {
      name: "Austin & Dallas",
      state: "TX",
      tagline: "New city adaptation, relationship challenges, finding someone to confide in",
      tier: "Tier 2 Metro",
    },
  ];

  const faqs = [
    {
      q: "How is Haven different from licensed therapy in the US?",
      a: "Haven provides non-clinical human peer listening and compassionate emotional support. We are not therapists, psychiatric doctors, or medical providers. Our service is for anyone feeling lonely, sad, misunderstood, or going through relationship challenges who simply wants a warm, non-judgmental human being to talk to without clinical diagnoses or high therapy fees.",
    },
    {
      q: "What timezones across the United States do you support?",
      a: "Our sessions accommodate Eastern (EST/EDT), Central (CST/CDT), Mountain (MST/MDT), and Pacific (PST/PDT) timezones. You can select your preferred time in our booking form, and our coordinators will confirm a convenient slot for you.",
    },
    {
      q: "How does the WhatsApp conversation work?",
      a: "When you submit your request, you are connected directly to our support team on WhatsApp (+91 8810381949). You speak with an attentive human listener in a private, encrypted 1-on-1 chat. You can share your story at your own pace.",
    },
    {
      q: "Is Haven an emergency hotline?",
      a: "No. Haven is non-clinical emotional listening. If you are in immediate physical danger, experiencing a severe mental health crisis, or thinking about self-harm, please dial 988 (the US Suicide & Crisis Lifeline) or 911 immediately.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Human Emotional Support & Peer Listening in the United States",
    "provider": {
      "@type": "Organization",
      "name": "Haven Human Emotional Support",
      "url": "https://haven.care"
    },
    "serviceType": "Peer Support & Active Listening",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "description":
      "Private, non-clinical human emotional listening service for individuals in the United States experiencing loneliness, relationship breakdown, divorce, or emotional distress."
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
                <span>🇺🇸</span>
                <span>Human Listening Support across the United States</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                Sometimes, You Just Need Someone in America Who Truly Listens.
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Life in fast-paced American cities can feel deeply isolating. Whether you are living alone in New York, navigating high stress in California, or walking through a quiet breakup late at night, you deserve a safe space to be heard without judgment.
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
                    "Hello Haven Team, I am reaching out from the United States and would like someone to talk to for emotional support."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                  <span>Direct WhatsApp Connect</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-dark-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-muted-green" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-green" /> EST, CST, MST &amp; PST Hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-muted-green" /> Real Human, No AI Bot
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800"
                  alt="Compassionate human emotional support in the United States"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations.</p>
                    <p className="text-white/80">Support for US adults seeking genuine connection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Americans Reach Out */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            Urban Realities
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Why People Across the United States Reach Out
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            In a nation of 330 million people, millions go to sleep each night with nobody to confide in. Reaching out is not a weakness; it is a human need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usCities.map((c) => (
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

      {/* Honest Boundary: Non-Clinical Peer Support */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
            <Lock className="w-4 h-4 text-muted-green" />
            <span>Our Transparent Commitment to You</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal">
            A Compassionate Alternative to Expensive Therapy or Automated Bots
          </h3>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Many Americans find that traditional therapy is financially out of reach or bogged down by month-long waiting lists. Other platforms force you to speak to artificial intelligence bots that sound empty and formulaic. Haven is built on a timeless premise: <strong>pure human presence</strong>. We do not provide clinical therapy, medical prescriptions, or psychiatric evaluation. We provide attentive, private, respectful listening from one human being to another.
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

        <SupportRequestForm />
      </section>

      {/* Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions (US Clients)
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Clear, honest answers about our human listening service.
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
