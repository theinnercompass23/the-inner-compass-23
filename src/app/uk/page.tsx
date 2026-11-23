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
  title: "Someone to Talk to Online UK — Human Listening & Emotional Support | The Inner Compass 23",
  description:
    "Feeling lonely, heartbroken, or overwhelmed in the UK? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private 1-on-1 support for London, Manchester, Birmingham, and across Great Britain.",
  keywords: [
    "someone to talk to online uk",
    "human listening service uk",
    "someone to talk to in london",
    "someone to listen to me manchester",
    "emotional support birmingham",
    "i have nobody to talk to uk",
    "talk to someone online without therapy",
    "lonely late at night uk",
    "divorce support conversation uk",
  ],
  alternates: {
    canonical: "https://haven.care/uk",
  },
  openGraph: {
    title: "Someone to Talk to Online UK — The Inner Compass 23 Human Peer Support",
    description:
      "Private, confidential human emotional support across the United Kingdom. Speak with someone who truly listens without judgment.",
    url: "https://haven.care/uk",
    locale: "en_GB",
    type: "website",
  },
};

export default function UnitedKingdomPage() {
  const ukCities = [
    {
      name: "London",
      region: "Greater London",
      tagline: "Metro isolation, flatmate disconnect, relationship heartbreak, corporate burnout",
      tier: "Tier 1 Metro",
    },
    {
      name: "Manchester",
      region: "North West",
      tagline: "University stress, personal transitions, finding someone outside family to confide in",
      tier: "Tier 1 Metro",
    },
    {
      name: "Birmingham",
      region: "West Midlands",
      tagline: "Family tension, marriage challenges, feeling emotionally unseen",
      tier: "Tier 1 Metro",
    },
    {
      name: "Edinburgh",
      region: "Scotland",
      tagline: "Long dark winter evenings, feeling isolated, navigating grief and separation",
      tier: "Tier 2 Metro",
    },
    {
      name: "Bristol",
      region: "South West",
      tagline: "Creative career pressure, personal loneliness, seeking non-judgmental ear",
      tier: "Tier 2 Metro",
    },
    {
      name: "Leeds",
      region: "Yorkshire",
      tagline: "Post-breakup grief, everyday anxiety, wanting an empathetic human voice",
      tier: "Tier 2 Metro",
    },
  ];

  const faqs = [
    {
      q: "How does The Inner Compass 23 differ from NHS mental health services in the UK?",
      a: "The Inner Compass 23 offers non-clinical human peer listening. While the NHS provides medical and psychiatric care, waiting lists for talking therapies can often take months. The Inner Compass 23 gives you immediate, confidential human connection right when you need to be heard, without clinical diagnosis or medical records.",
    },
    {
      q: "What hours are available for UK residents?",
      a: "Our listening team is available throughout the day and evening in UK time (GMT / BST). Late-night sessions are also available for individuals who struggle with insomnia or overthinking after midnight.",
    },
    {
      q: "How do I connect on WhatsApp?",
      a: "Simply submit your details and preferred time slot using our form. You will be connected directly to our support coordinator on WhatsApp (+91 8810381949), where a friendly, respectful listener will welcome you.",
    },
    {
      q: "Is The Inner Compass 23 an emergency crisis service?",
      a: "No. The Inner Compass 23 is peer listening for life's personal struggles. If you are in immediate danger, harm, or acute crisis, please call 111, contact the Samaritans at 116 123, or call 999 in an emergency.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Human Emotional Support & Peer Listening in the United Kingdom",
    "provider": {
      "@type": "Organization",
      "name": "The Inner Compass 23 Human Emotional Support",
      "url": "https://haven.care"
    },
    "serviceType": "Peer Support & Active Listening",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "description":
      "Private, non-clinical human emotional listening service for individuals in the UK experiencing loneliness, relationship breakdown, divorce, or grief."
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
                <span>🇬🇧</span>
                <span>Human Listening Support across the United Kingdom</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                Sometimes, You Just Need Someone in the UK Who Truly Listens.
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                British culture often encourages us to &ldquo;keep calm and carry on,&rdquo; but holding heavy feelings alone is exhausting. Whether you are living in central London or a quiet Scottish town, you deserve a safe space where you can speak openly without fear of judgment.
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
                    "Hello The Inner Compass 23 Team, I am reaching out from the UK and would like someone to talk to for emotional support."
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
                  <Clock className="w-4 h-4 text-muted-green" /> GMT &amp; BST Friendly Hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-muted-green" /> Genuine Human Presence
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Compassionate human listening and emotional support in the UK"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations.</p>
                    <p className="text-white/80">A safe haven for UK adults seeking empathy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Cities Spotlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            UK Regional Context
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Listening Across Major UK Cities
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            From the bustling boroughs of London to Manchester and Birmingham, we provide an empathetic sounding board when friends or family feel too close to confide in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ukCities.map((c) => (
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
              <p className="text-[11px] text-dark-charcoal/50 -mt-1">{c.region}</p>
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
            <span>Honest, Respectful Boundaries</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal">
            Human Connection Without Clinical Bureaucracy
          </h3>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            We are not a substitute for clinical psychological care or emergency medical intervention. The Inner Compass 23 exists for the millions of people who are not in medical danger, but who feel desperately lonely, stuck after a heartbreak, overwhelmed by family friction, or in need of someone patient to listen. No paperwork, no clinical files, just pure human presence.
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

      {/* UK FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions (UK Clients)
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
