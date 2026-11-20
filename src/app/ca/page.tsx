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
  title: "Someone to Talk to Online Canada — Human Emotional Support | Haven",
  description:
    "Feeling lonely, isolated, or heartbroken in Canada? Connect with a compassionate human listener. Real people, real conversations, no judgment. Private 1-on-1 support for Toronto, Vancouver, Montreal, Calgary, and across Canada.",
  keywords: [
    "someone to talk to online canada",
    "human emotional support canada",
    "someone to talk to in toronto",
    "someone to talk to in vancouver",
    "emotional support montreal",
    "calgary listening service",
    "i have nobody to talk to canada",
    "winter loneliness someone to talk to",
    "heartbreak support canada",
  ],
  alternates: {
    canonical: "https://haven.care/ca",
  },
  openGraph: {
    title: "Someone to Talk to Online Canada — Haven Human Peer Support",
    description:
      "Private, confidential human emotional support across Canada. Speak with someone who truly listens without judgment.",
    url: "https://haven.care/ca",
    locale: "en_CA",
    type: "website",
  },
};

export default function CanadaPage() {
  const canadianCities = [
    {
      name: "Toronto",
      province: "Ontario",
      tagline: "Fast metropolitan pace, high living cost pressure, late-night loneliness",
      tier: "Tier 1 Metro",
    },
    {
      name: "Vancouver",
      province: "British Columbia",
      tagline: "Social isolation, rainy winter blues, career burnout and life transitions",
      tier: "Tier 1 Metro",
    },
    {
      name: "Montreal",
      province: "Quebec",
      tagline: "Relationship heartache, feeling misunderstood, personal transitions",
      tier: "Tier 1 Metro",
    },
    {
      name: "Calgary",
      province: "Alberta",
      tagline: "Economic shifts, winter freeze isolation, seeking an empathetic confidant",
      tier: "Tier 2 Metro",
    },
    {
      name: "Ottawa",
      province: "Ontario",
      tagline: "Professional stress, quiet loneliness, needing an impartial human listener",
      tier: "Tier 2 Metro",
    },
  ];

  const faqs = [
    {
      q: "How does Haven support Canadians experiencing seasonal isolation?",
      a: "Canada's long winter months and early darkness often intensify feelings of loneliness and isolation. Haven provides a warm, confidential sounding board accessible from the comfort and privacy of your home over WhatsApp, without any clinical stigma.",
    },
    {
      q: "What Canadian timezones do you accommodate?",
      a: "We support Eastern Time (Toronto, Ottawa, Montreal), Central Time (Winnipeg), Mountain Time (Calgary, Edmonton), and Pacific Time (Vancouver, Victoria). You can pick your local time in the booking form.",
    },
    {
      q: "Is this a substitute for therapy or crisis care?",
      a: "No. Haven is peer listening and empathetic human conversation. If you are experiencing suicidal thoughts or severe distress, please dial 988 (Canada's Suicide Crisis Helpline) or 911 for emergency response.",
    },
    {
      q: "How private is my information?",
      a: "We treat your conversations with absolute confidentiality. We do not sell your data or share your details with any third parties. What you share in your session stays strictly between you and your listener.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Human Emotional Support & Peer Listening in Canada",
    "provider": {
      "@type": "Organization",
      "name": "Haven Human Emotional Support",
      "url": "https://haven.care"
    },
    "serviceType": "Peer Support & Active Listening",
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    },
    "description":
      "Private, non-clinical human emotional listening service for Canadians experiencing loneliness, relationship breakdown, divorce, or grief."
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
                <span>🇨🇦</span>
                <span>Human Listening Support across Canada</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                Sometimes, You Just Need Someone in Canada Who Truly Listens.
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Whether you are enduring long Canadian winter nights alone in Toronto or feeling distant from loved ones in Vancouver, carrying life&apos;s burdens in silence takes a toll. You deserve a patient human being who listens with compassion.
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
                    "Hello Haven Team, I am reaching out from Canada and would like someone to talk to for emotional support."
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
                  <Clock className="w-4 h-4 text-muted-green" /> ET, CT, MT &amp; PT Hours
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-muted-green" /> Non-Clinical &bull; No Stigma
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <Image
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800"
                  alt="Compassionate human listening and emotional support in Canada"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations.</p>
                    <p className="text-white/80">Empathetic peer support for Canadian adults.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Canadian Cities */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            Canadian Metros
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Supporting People Across Canada
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            From the bustling neighborhoods of the GTA to the West Coast and Prairie communities, you are never alone when you need someone to talk to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {canadianCities.map((c) => (
            <div
              key={c.name}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-soft-sage/40 shadow-xs space-y-3 hover:border-muted-green/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-serif font-bold text-base text-dark-charcoal">
                  <MapPin className="w-4 h-4 text-muted-green" />
                  <span>{c.name}, {c.province}</span>
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

      {/* Honest Commitment */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
            <Lock className="w-4 h-4 text-muted-green" />
            <span>A Safe, Non-Clinical Space</span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal">
            No Waiting Lists, No Clinical Labels, Just Human Listening
          </h3>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Finding accessible mental healthcare in Canada can sometimes require months of navigating public waitlists. Haven does not provide psychiatric diagnoses, medical treatments, or formal psychotherapy. We offer immediate, private peer listening from compassionate human listeners who care about your story.
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

      {/* Canada FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions (Canada)
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
