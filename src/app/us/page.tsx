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
  title: "Online Emotional Support & Active Listening USA — Anonymous 24/7 Chat | The Inner Compass 23",
  description:
    "Private, anonymous human emotional support and active listening across the United States. Connect 24/7 on WhatsApp for loneliness, divorce, heartbreak, and 3 AM emotional venting without insurance or waiting lists.",
  keywords: [
    // Short-tail Core
    "online emotional support",
    "active listening service",
    "anonymous chat support",
    "online therapy usa",
    "talk to someone online",
    "loneliness help",
    "feeling lonely",
    "overcome loneliness",
    "companionship online",
    "divorce support",
    "divorce counseling online",
    "breakup support",
    "post divorce loneliness",
    "depression chat online",
    "anxiety support chat",
    "late night emotional support",
    "vent online",
    // Long-tail High-Intent
    "where can i talk to someone anonymously when i feel lonely",
    "who can i call or chat with at 3am when feeling depressed",
    "websites to vent to a real person without signing up",
    "safe space to talk anonymously without giving real name",
    "talk to a trained listener online instead of a therapist",
    "who to talk to when going through a lonely divorce",
    "how to survive weekends alone after getting divorced",
    "affordable online divorce emotional support without insurance",
    "anonymous support for men going through divorce",
    // US City Programmatic
    "feeling lonely in new york city where to talk to someone online",
    "affordable divorce emotional support counselor in new york",
    "best online active listener for loneliness in los angeles",
    "confidential breakup support chat for chicago residents",
    "24/7 anonymous emotional support platform in miami",
  ],
  alternates: {
    canonical: "https://www.theinnercompass23.com/us",
  },
  openGraph: {
    title: "Online Emotional Support & Active Listening USA — The Inner Compass 23",
    description:
      "Private, confidential human emotional support across NYC, LA, Chicago, Miami, and nationwide. Connect 24/7 on WhatsApp.",
    url: "https://www.theinnercompass23.com/us",
    locale: "en_US",
    type: "website",
  },
};

export default function UnitedStatesPage() {
  const usCities = [
    {
      slug: "new-york",
      name: "New York City",
      state: "NY",
      tagline: "High-paced urban life, late-night overthinking, living alone in the city",
      tier: "Tier 1 Metro",
    },
    {
      slug: "los-angeles",
      name: "Los Angeles",
      state: "CA",
      tagline: "Career transition pressure, creative burnout, feeling disconnected",
      tier: "Tier 1 Metro",
    },
    {
      slug: "chicago",
      name: "Chicago",
      state: "IL",
      tagline: "Winter isolation, family stress, navigating difficult breakups",
      tier: "Tier 1 Metro",
    },
    {
      slug: "miami",
      name: "Miami",
      state: "FL",
      tagline: "24/7 anonymous emotional support, transplant loneliness, post-breakup recovery",
      tier: "Tier 1 Metro",
    },
    {
      slug: "san-francisco",
      name: "San Francisco & Bay Area",
      state: "CA",
      tagline: "Tech pressure, imposter syndrome, high cost of living stress",
      tier: "Tier 1 Metro",
    },
    {
      slug: "seattle",
      name: "Seattle",
      state: "WA",
      tagline: "Seasonal mood changes, social isolation, relocation loneliness",
      tier: "Tier 1 Metro",
    },
    {
      slug: "boston",
      name: "Boston",
      state: "MA",
      tagline: "Academic pressure, life transitions, young professional isolation",
      tier: "Tier 1 Metro",
    },
  ];

  const faqs = [
    {
      q: "Is there a website where I can talk to someone anonymously when I feel lonely?",
      a: "Yes. Online active listening and emotional support platforms like The Inner Compass 23 let you connect with trained human listeners 24/7 using a temporary nickname, without sharing your real name, phone number, or insurance details.",
    },
    {
      q: "What is the difference between an active listener and a therapist?",
      a: "An active listener provides immediate, judgment-free emotional support and companionship when you just need to vent about loneliness, stress, or a breakup. A licensed therapist provides structured clinical counseling for deeper issues like clinical depression, trauma, or divorce recovery.",
    },
    {
      q: "Who can I talk to when going through a divorce and feeling completely alone?",
      a: "During a divorce, you can talk to a divorce-focused active listener for immediate late-night venting, or book a private online session with a Licensed Marriage and Family Therapist (LMFT) who specializes in separation and post-divorce loneliness.",
    },
    {
      q: "Can I get emotional support online without health insurance in the US?",
      a: "Yes. Most online active listening and private emotional wellness platforms offer transparent pay-per-session pricing or free initial venting sessions, allowing US residents in cities like New York or Los Angeles to get instant support without insurance paperwork or waitlists.",
    },
    {
      q: "What timezones across the United States do you support?",
      a: "Our sessions accommodate Eastern (EST/EDT), Central (CST/CDT), Mountain (MST/MDT), and Pacific (PST/PDT) timezones. You can select your preferred time in our booking form, and our coordinators will confirm a convenient slot for you.",
    },
    {
      q: "How does the WhatsApp conversation work?",
      a: "When you submit your request, you are connected directly to our support team on WhatsApp (+91 8810381949). You speak with an attentive human listener in a private, encrypted 1-on-1 chat. You can share your story at your own pace.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.theinnercompass23.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "United States",
            "item": "https://www.theinnercompass23.com/us"
          }
        ]
      },
      {
        "@type": "Article",
        "headline": "Online Emotional Support & Active Listening Across the United States",
        "description": "Private, anonymous human emotional support and active listening in US cities including New York, Los Angeles, Chicago, and Miami.",
        "image": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": "2026-02-20T08:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Support Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Emotional Support",
          "url": "https://www.theinnercompass23.com"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.theinnercompass23.com/us"
        }
      },
      {
        "@type": "Service",
        "name": "Human Emotional Support & Peer Listening in the United States",
        "provider": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Emotional Support",
          "url": "https://www.theinnercompass23.com"
        },
        "serviceType": "Peer Support & Active Listening",
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "description":
          "Private, non-clinical human emotional listening service for individuals in the United States experiencing loneliness, relationship breakdown, divorce, or emotional distress."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
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
                    "Hello The Inner Compass 23 Team, I am reaching out from the United States and would like someone to talk to for emotional support."
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
            <Link
              key={c.name}
              href={`/locations/united-states/${c.slug}`}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-xs border border-soft-sage/40 shadow-xs space-y-3 hover:border-muted-green/60 hover:bg-white hover:shadow-md transition-all group block"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-serif font-bold text-base text-dark-charcoal group-hover:text-muted-green transition-colors">
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
              <div className="pt-2 text-[11px] text-muted-green font-medium flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <span>Connect in {c.name}</span>
                  <CheckCircle2 className="w-3 h-3" />
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
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
            Many Americans find that traditional therapy is financially out of reach or bogged down by month-long waiting lists. Other platforms force you to speak to artificial intelligence bots that sound empty and formulaic. The Inner Compass 23 is built on a timeless premise: <strong>pure human presence</strong>. We do not provide clinical therapy, medical prescriptions, or psychiatric evaluation. We provide attentive, private, respectful listening from one human being to another.
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
