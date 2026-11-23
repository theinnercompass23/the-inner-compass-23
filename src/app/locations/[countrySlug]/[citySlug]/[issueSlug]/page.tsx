import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SafeImage from "@/components/SafeImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SpotifyPodcastSection from "@/components/SpotifyPodcastSection";
import { CITIES_DATA, getCityBySlug, getCitiesByCountry } from "@/data/cities";
import { getCountryBySlug } from "@/data/countries";
import { CORE_ISSUES, getIssueBySlug, getRegionalModifiers, getDynamicFaqs } from "@/data/issues";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  Lock,
  ArrowRight,
  HelpCircle,
  Globe,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ExternalLink,
  Radio,
} from "lucide-react";

export async function generateStaticParams() {
  const params: { countrySlug: string; citySlug: string; issueSlug: string }[] = [];
  for (const city of CITIES_DATA) {
    for (const issue of CORE_ISSUES) {
      params.push({
        countrySlug: city.countrySlug,
        citySlug: city.slug,
        issueSlug: issue.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string; citySlug: string; issueSlug: string }>;
}): Promise<Metadata> {
  const { countrySlug, citySlug, issueSlug } = await params;
  const city = getCityBySlug(countrySlug, citySlug);
  const issue = getIssueBySlug(issueSlug);
  if (!city || !issue) return {};

  const reg = getRegionalModifiers(city.countrySlug);

  // Exact formulas specified in blueprint:
  const pageTitle = `${issue.name} Support & Anonymous Listeners in ${city.name} | 24/7 Online Help – The Inner Compass 23`;
  const metaDescription = `Feeling lonely or dealing with ${issue.name} in ${city.name}? Talk anonymously to a trained listener or ${reg.counselorSpelling} online 24/7. Zero judgment, instant connect, no real name required.`;

  return {
    title: pageTitle,
    description: metaDescription,
    keywords: [
      `where can i talk to someone anonymously in ${city.name}`,
      `best online emotional support for ${issue.name.toLowerCase()} in ${city.name}`,
      `feeling lonely in ${city.name} who to talk to at night`,
      `affordable ${issue.name.toLowerCase()} ${reg.counselingSpelling} in ${city.name} without waitlist`,
      `anonymous chat and voice call for ${issue.name.toLowerCase()} in ${city.name}`,
      `talk to a trained listener in ${city.name} instead of a therapist`,
      `${issue.name.toLowerCase()} support ${city.name}`,
      `online active listener ${city.name}`,
      ...reg.primaryModifiers,
    ],
    alternates: {
      canonical: `https://haven.care/locations/${city.countrySlug}/${city.slug}/${issue.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: `https://haven.care/locations/${city.countrySlug}/${city.slug}/${issue.slug}`,
      type: "article",
    },
  };
}

export default async function DynamicCityIssuePage({
  params,
}: {
  params: Promise<{ countrySlug: string; citySlug: string; issueSlug: string }>;
}) {
  const { countrySlug, citySlug, issueSlug } = await params;
  const city = getCityBySlug(countrySlug, citySlug);
  const issue = getIssueBySlug(issueSlug);

  if (!city || !issue) {
    notFound();
  }

  const country = getCountryBySlug(city.countrySlug);
  const reg = getRegionalModifiers(city.countrySlug);
  const faqs = getDynamicFaqs(city.name, country?.name || city.countryName, city.countrySlug, issue.name);
  const siblingCities = getCitiesByCountry(city.countrySlug).filter((c) => c.slug !== city.slug).slice(0, 6);
  const otherIssues = CORE_ISSUES.filter((i) => i.slug !== issue.slug);

  const pageUrl = `https://haven.care/locations/${city.countrySlug}/${city.slug}/${issue.slug}`;

  // Structured Data (Article + FAQPage + BreadcrumbList + Service)
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
            "item": "https://haven.care",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://haven.care/locations",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": city.countryName,
            "item": `https://haven.care/countries/${city.countrySlug}`,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": city.name,
            "item": `https://haven.care/locations/${city.countrySlug}/${city.slug}`,
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": `${issue.name} Support`,
            "item": pageUrl,
          },
        ],
      },
      {
        "@type": "Article",
        "headline": `${issue.name} Emotional Support in ${city.name}: Who to Talk To & Where to Find Relief Online`,
        "description": `Feeling lonely or dealing with ${issue.name} in ${city.name}? Talk anonymously to a trained listener or ${reg.counselorSpelling} online 24/7.`,
        "image": city.heroImage,
        "datePublished": "2026-02-01T08:00:00+00:00",
        "dateModified": "2026-02-20T08:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Emotional Support Team",
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Emotional Support",
          "url": "https://haven.care",
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl,
        },
      },
      {
        "@type": "Service",
        "name": `${issue.name} Emotional Listening Support in ${city.name}`,
        "provider": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Emotional Support",
          "url": "https://haven.care",
        },
        "serviceType": "Peer Support & Non-Clinical Active Listening",
        "areaServed": {
          "@type": "City",
          "name": city.name,
        },
        "description": `${issue.name} support in ${city.name} without insurance paperwork or long clinic waitlists.`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a,
          },
        })),
      },
    ],
  };

  const whatsappMessage = `Hello The Inner Compass 23 Team, I am reaching out from ${city.name}, ${city.countryName} regarding ${issue.name} and would like to connect anonymously with someone to talk to.`;

  return (
    <div className="space-y-14 sm:space-y-20 pb-20 bg-warm-white text-dark-charcoal w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================= */}
      {/* 1. DYNAMIC HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-16 border-b border-soft-sage/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-dark-charcoal/60">
            <Link href="/" className="hover:text-dark-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/locations" className="hover:text-dark-charcoal transition-colors">Locations</Link>
            <span>/</span>
            <Link href={`/countries/${city.countrySlug}`} className="hover:text-dark-charcoal transition-colors">{city.countryName}</Link>
            <span>/</span>
            <Link href={`/locations/${city.countrySlug}/${city.slug}`} className="hover:text-dark-charcoal transition-colors">{city.name}</Link>
            <span>/</span>
            <span className="text-dark-charcoal font-semibold">{issue.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-7/12 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green">
                <MapPin className="w-3.5 h-3.5" />
                <span>{city.name}, {city.stateOrRegion} &bull; {issue.shortLabel} Support</span>
              </div>

              {/* Exact H1 Formula */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                {issue.name} Emotional Support in {city.name}: Who to Talk To &amp; Where to Find Relief Online
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Feeling lonely or dealing with {issue.name.toLowerCase()} in {city.name}? Talk anonymously to a trained listener or {reg.counselorSpelling} online 24/7. Zero judgment, instant connect, no real name required.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="#support-form"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Connect Anonymously</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={buildDirectWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Badges with Region Tweaks */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-dark-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-muted-green" /> 100% Anonymous (No Real Name)
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-green" /> {city.timezone}
                </span>
                <span className="flex items-center gap-1.5 font-medium text-muted-green">
                  <CheckCircle2 className="w-4 h-4" /> {reg.speedBenefit}
                </span>
              </div>
            </div>

            {/* Right Card / Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <SafeImage
                  src={city.heroImage}
                  alt={`${issue.name} support and human peer listening in ${city.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="text-white text-xs space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[10px] font-semibold text-emerald-300">
                      {issue.name} &bull; {city.name}
                    </span>
                    <p className="font-semibold text-sm">Real People. Real Conversations. No Judgment.</p>
                    <p className="text-white/80">{issue.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DYNAMIC LONG-TAIL KEYWORD SECTIONS (H2s & BODY)        */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Dynamic H2 #1: where can i talk to someone anonymously in {City} */}
        <div className="p-7 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Anonymous Connection &bull; {city.name}
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Where can I talk to someone anonymously in {city.name}?
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            In a bustling city like {city.name}, admitting that you are emotionally overwhelmed or lonely can feel intimidating. The Inner Compass 23 provides a strictly confidential online listening sanctuary where you can connect directly with a compassionate human being without sharing your real name, home address, social profiles, or medical insurance details.
          </p>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            All conversations are 1-on-1 via WhatsApp. You can choose a temporary nickname, share what is on your chest, and log off whenever you feel ready.
          </p>
        </div>

        {/* Dynamic H2 #2: best online emotional support for {Issue} in {City} */}
        <div className="p-7 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Targeted Relief &bull; {issue.shortLabel}
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Best online emotional support for {issue.name.toLowerCase()} in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            Navigating {issue.name.toLowerCase()} in {city.name} involves unique local pressures: career competition, long commutes, expensive housing, and social networks where people rarely talk about real vulnerability. The Inner Compass 23 pairs you with an attentive listener who understands how to hold space for {issue.description.toLowerCase()}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {issue.symptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-dark-charcoal/80 bg-light-beige/40 p-2.5 rounded-xl border border-soft-sage/20">
                <CheckCircle2 className="w-3.5 h-3.5 text-muted-green shrink-0 mt-0.5" />
                <span>{symptom}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic H2 #3: feeling lonely in {City} who to talk to at night */}
        <div className="p-7 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Late-Night Support &bull; {city.timezone}
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Feeling lonely in {city.name}: who to talk to at night
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            Loneliness hits hardest when darkness falls across {city.name}. Friends have gone to sleep, the apartment is dead quiet, and racing thoughts start to replay painful memories or future anxieties. The Inner Compass 23 listeners coordinate sessions across {city.timezone}, giving you someone warm and attentive to speak with even at 2:00 AM or 3:00 AM.
          </p>
        </div>

        {/* Dynamic H2 #4: affordable {Issue} counseling in {City} without waitlist */}
        <div className="p-7 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Zero Waitlists &bull; {reg.counselingSpelling} Alternatives
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Affordable {issue.name.toLowerCase()} {reg.counselingSpelling} in {city.name} without waitlist
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            Traditional therapy in {city.name} often requires long waiting periods (sometimes 6 to 12 weeks), complex health insurance referrals, and high session copays. The Inner Compass 23 offers immediate human active listening with zero subscription locks and {reg.currencyOrAffordability.toLowerCase()}.
          </p>
        </div>

        {/* Dynamic H2 #5: anonymous chat and voice call for {Issue} in {City} */}
        <div className="p-7 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Flexible Communication
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Anonymous chat and voice call for {issue.name.toLowerCase()} in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            You are always in full control of how you communicate. You can type via encrypted WhatsApp messaging, send audio voice notes, or schedule a direct voice conversation. You never have to turn on a webcam or reveal your physical identity.
          </p>
        </div>

        {/* Dynamic H2 #6: talk to a trained listener in {City} instead of a therapist */}
        <div className="p-7 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Non-Clinical Listening Scope
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Talk to a trained listener in {city.name} instead of a therapist
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            Not every emotional struggle is a psychiatric illness. Most of the time, what you need is simply a compassionate, non-judgmental human being who won&apos;t evaluate you, label you with clinical disorders, or give patronizing advice. The Inner Compass 23 listeners are trained to offer pure, patient, active listening from one human to another.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SPOTIFY PODCAST & AI CALM AUDIO INTEGRATION            */}
      {/* ========================================================= */}
      <SpotifyPodcastSection
        title={`Listen to The Inner Compass 23 on Spotify: Calming Reflections for ${city.name}`}
        subtitle={`Tune in to guided mindful episodes on Spotify, or play our calming interactive audio previews below before connecting with your ${city.name} listener.`}
        badge="Official Spotify Podcast &amp; Calming Voice Station"
      />

      {/* ========================================================= */}
      {/* 4. UNIVERSAL 5 AI-READY FAQS (DYNAMIC SCHEMA)             */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI &amp; Google Featured Answers &bull; {city.name}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions ({issue.name} in {city.name})
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
            Direct, factual answers to help residents of {city.name} get immediate emotional support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-soft-sage/40 space-y-2 shadow-xs"
            >
              <h3 className="font-semibold text-sm text-dark-charcoal flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-dark-charcoal/80 pl-6.5 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EXPLORE OTHER ISSUES IN THIS CITY                      */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 border-t border-soft-sage/20 pt-10">
        <div className="space-y-1">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            Other Support Topics Available in {city.name}
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Explore dedicated pages for other challenges faced by people in {city.name}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {otherIssues.map((oi) => (
            <Link
              key={oi.slug}
              href={`/locations/${city.countrySlug}/${city.slug}/${oi.slug}`}
              className="p-4 rounded-2xl bg-white hover:bg-light-beige/30 border border-soft-sage/40 hover:border-muted-green shadow-xs transition-all flex items-center justify-between group"
            >
              <div>
                <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                  {oi.name} in {city.name}
                </div>
                <div className="text-[11px] text-dark-charcoal/60">{oi.tagline}</div>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-muted-green group-hover:translate-x-1 transition-transform shrink-0" />
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SIBLING CITIES SUPPORTING THIS ISSUE                   */}
      {/* ========================================================= */}
      {siblingCities.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 border-t border-soft-sage/20 pt-8">
          <div className="space-y-1">
            <h2 className="text-lg font-serif font-bold text-dark-charcoal">
              {issue.name} Support in Nearby {city.countryName} Cities
            </h2>
            <p className="text-xs text-dark-charcoal/70">
              Select other locations across {city.countryName} for local timezone support.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {siblingCities.map((sib) => (
              <Link
                key={sib.slug}
                href={`/locations/${city.countrySlug}/${sib.slug}/${issue.slug}`}
                className="p-3.5 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green text-center space-y-0.5 transition-all group block"
              >
                <div className="font-semibold text-xs text-dark-charcoal group-hover:text-muted-green truncate">
                  {sib.name}
                </div>
                <div className="text-[10px] text-dark-charcoal/50">{sib.stateOrRegion}</div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 7. SUPPORT REQUEST FORM                                   */}
      {/* ========================================================= */}
      <section id="support-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 pt-4">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with a Human Listener in {city.name}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Book Anonymous {issue.name} Support
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
            Choose your preferred date and time ({city.timezone}). We will reach out to you directly and privately on WhatsApp.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-soft-sage/40 shadow-sm text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Fill our quick confidential request form or connect directly on WhatsApp to speak with a listener in {city.name}.
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
    </div>
  );
}
