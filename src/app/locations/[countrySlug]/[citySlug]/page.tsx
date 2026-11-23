import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SafeImage from "@/components/SafeImage";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CityProgrammaticLinks from "@/components/CityProgrammaticLinks";
import SpotifyPodcastSection from "@/components/SpotifyPodcastSection";
import { AI_READY_FAQS } from "@/data/aiFaqs";
import {
  CITIES_DATA,
  getCityBySlug,
  getCitiesByCountry,
  CityData,
} from "@/data/cities";
import { getCountryBySlug } from "@/data/countries";
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
  BookOpen,
  MessageCircle,
  Users,
  Compass,
} from "lucide-react";

export async function generateStaticParams() {
  return CITIES_DATA.map((city) => ({
    countrySlug: city.countrySlug,
    citySlug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string; citySlug: string }>;
}): Promise<Metadata> {
  const { countrySlug, citySlug } = await params;
  const city = getCityBySlug(countrySlug, citySlug);
  if (!city) return {};

  const pageTitle = `Someone to Talk to in ${city.name} — Anonymous Human Emotional Support | 24/7 Online Help – The Inner Compass 23`;
  const metaDescription = `Feeling lonely or dealing with emotional stress in ${city.name}? Talk anonymously to a trained listener or counselor online 24/7. Zero judgment, instant connect, no real name required.`;

  return {
    title: pageTitle,
    description: metaDescription,
    alternates: {
      canonical: `https://haven.care/locations/${city.countrySlug}/${city.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description: metaDescription,
      url: `https://haven.care/locations/${city.countrySlug}/${city.slug}`,
      type: "article",
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ countrySlug: string; citySlug: string }>;
}) {
  const { countrySlug, citySlug } = await params;
  const city = getCityBySlug(countrySlug, citySlug);

  if (!city) {
    notFound();
  }

  const country = getCountryBySlug(city.countrySlug);
  const siblingCities = getCitiesByCountry(city.countrySlug).filter(
    (c) => c.slug !== city.slug
  );

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
            "item": "https://haven.care"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://haven.care/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": city.countryName,
            "item": `https://haven.care/countries/${city.countrySlug}`
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": city.name,
            "item": `https://haven.care/locations/${city.countrySlug}/${city.slug}`
          }
        ]
      },
      {
        "@type": "Article",
        "headline": `Someone to Talk to in ${city.name} — Human Emotional Support & Peer Listening`,
        "description": city.metaDescription,
        "image": city.heroImage,
        "datePublished": "2026-01-15T08:00:00+00:00",
        "dateModified": "2026-02-20T08:00:00+00:00",
        "author": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Emotional Support Editorial Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Emotional Support",
          "url": "https://haven.care"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://haven.care/locations/${city.countrySlug}/${city.slug}`
        }
      },
      {
        "@type": "Service",
        "name": `Human Emotional Listening Support in ${city.name}`,
        "provider": {
          "@type": "Organization",
          "name": "The Inner Compass 23 Human Emotional Support",
          "url": "https://haven.care"
        },
        "serviceType": "Peer Support & Non-Clinical Active Listening",
        "areaServed": {
          "@type": "City",
          "name": city.name
        },
        "description": city.metaDescription
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          ...city.faqs,
          ...AI_READY_FAQS.map(f => ({ q: f.q, a: f.a }))
        ].map((f) => ({
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
    <div className="space-y-16 pb-20 bg-warm-white text-dark-charcoal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-dark-charcoal/60 flex-wrap">
          <Link href="/" className="hover:text-dark-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/locations" className="hover:text-dark-charcoal transition-colors">
            Locations
          </Link>
          <span>/</span>
          <Link
            href={`/countries/${city.countrySlug}`}
            className="hover:text-dark-charcoal transition-colors font-medium"
          >
            {city.countryName}
          </Link>
          <span>/</span>
          <span className="text-dark-charcoal font-semibold">{city.name}</span>
        </nav>
      </div>

      {/* ========================================================= */}
      {/* 1. HERO SECTION & INTRODUCTION                            */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-4 pb-14 border-b border-soft-sage/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
                <MapPin className="w-3.5 h-3.5" />
                <span>
                  {city.name}, {city.stateOrRegion} &bull; {city.countryName}
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                {city.tagline}
              </h1>

              {/* Page Introduction */}
              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {city.intro}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#support-form"
                  className="px-6 py-3 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect with a Human Listener</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={buildDirectWhatsAppUrl(
                    `Hello The Inner Compass 23 Team, I am reaching out from ${city.name}, ${city.countryName} and would like someone to talk to for emotional support.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-dark-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-muted-green" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-green" /> {city.timezone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-muted-green" /> 100% Online Remote Delivery
                </span>
              </div>
            </div>

            {/* City Featured Image */}
            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <SafeImage
                  src={city.heroImage}
                  alt={`Emotional support and compassionate human listening in ${city.name}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations. No Judgment.</p>
                    <p className="text-white/80">Support for adults in {city.name} seeking empathy and emotional presence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. UNDERSTANDING THE NEED TO TALK TO SOMEONE IN THIS CITY */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Urban Life &amp; Emotional Reality
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Understanding the Need to Talk to Someone in {city.name}
          </h2>
          <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
            {city.localContext}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-green" />
              Living Alone and Quiet Evenings
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              In high-density metropolitan areas like {city.name}, single-person households are common. Returning from long commutes to an empty apartment after a difficult day can make loneliness feel heavy and overwhelming.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-green" />
              Relationship Strain &amp; Breakups
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Navigating heartbreak, separation, or marriage stress while maintaining a demanding professional schedule leaves little room to process grief. Having a neutral listener provides immediate emotional relief.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-green" />
              High Career Expectations &amp; Burnout
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Competition, rising living costs, and imposter syndrome often force individuals in {city.name} to mask their vulnerability behind a polished exterior, creating deep internal isolation.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-muted-green" />
              Having Nobody to Share Thoughts With
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Friends are frequently busy with their own families and jobs, leaving you hesitant to reach out for fear of being a burden. Having a dedicated listener eliminates that hesitation entirely.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. WHY SOMEONE LOOKS FOR A LISTENER VS CLINICAL THERAPY   */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Non-Judgmental Presence
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Why Someone Looks for a Human Listener Instead of Advice or Therapy
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Many adults in {city.name} do not have a psychiatric disorder or clinical illness—they are simply experiencing painful life transitions, loneliness, or chronic relationship friction. Formal therapy can involve intimidating medical paperwork, high out-of-pocket fees, and weeks-long waiting lists.
          </p>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Similarly, talking to friends often results in well-intentioned but unhelpful advice: &ldquo;Just stay positive,&rdquo; or &ldquo;Download a dating app.&rdquo; An Inner Compass 23 peer listener offers what is rarely found elsewhere: pure, non-judgmental active listening. We hold a safe, patient space where you can speak your truth without being interrupted, analyzed, or rushed.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOW OUR HUMAN LISTENING SERVICE WORKS                  */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Simple &bull; Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            How Our Human Listening Service Works in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            We prioritize dignity, privacy, and ease. Connecting with our team is simple and straightforward:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="p-6 bg-white rounded-3xl border border-soft-sage/40 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="font-semibold text-sm text-dark-charcoal">Submit Your Request</h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Select your topic, preferred date, and time slot in {city.timezone}. Let us know briefly what is on your mind.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-soft-sage/40 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h3 className="font-semibold text-sm text-dark-charcoal">Coordinator Confirms</h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Our scheduling team reviews availability and connects with you directly on WhatsApp to confirm your dedicated listener.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-soft-sage/40 shadow-xs space-y-2">
            <div className="w-10 h-10 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h3 className="font-semibold text-sm text-dark-charcoal">Private 1-on-1 Session</h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Connect over private WhatsApp messaging, voice notes, or call. You decide what to share, moving entirely at your own pace.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. WHAT YOU CAN TALK ABOUT                                */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Safe Topics
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            What You Can Discuss with a Listener in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            There is no emotional burden too small or too heavy. Common situations our clients discuss include:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center justify-between">
              <span>Heartbreak &amp; Breakups</span>
              <Link href="/heartbreak-support" className="text-xs text-muted-green hover:underline">Read Guide &rarr;</Link>
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Grieving the sudden end of a relationship, dealing with difficult memories, and breaking the cycle of late-night checking.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center justify-between">
              <span>Divorce &amp; Separation</span>
              <Link href="/divorce-support" className="text-xs text-muted-green hover:underline">Read Guide &rarr;</Link>
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Coping with the end of a marriage, altered domestic routines, social scrutiny, and learning to rebuild independently.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center justify-between">
              <span>Marriage &amp; Partnership Tension</span>
              <Link href="/marriage-problems" className="text-xs text-muted-green hover:underline">Read Guide &rarr;</Link>
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              A neutral haven to voice marital stress, feeling unheard by your spouse, and navigating domestic fatigue.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center justify-between">
              <span>Urban Loneliness &amp; Solitude</span>
              <Link href="/feeling-lonely" className="text-xs text-muted-green hover:underline">Read Guide &rarr;</Link>
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              For quiet evenings when you feel deeply disconnected from the crowd and crave a warm, authentic human voice.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center justify-between">
              <span>Grief, Loss &amp; Remembrance</span>
              <Link href="/grief-support" className="text-xs text-muted-green hover:underline">Read Guide &rarr;</Link>
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              A patient space to honor someone you lost without people telling you to &ldquo;move on&rdquo; before you are ready.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-soft-sage/30 shadow-xs space-y-2">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-center justify-between">
              <span>Overthinking &amp; Mental Stress</span>
              <Link href="/emotional-stress-support" className="text-xs text-muted-green hover:underline">Read Guide &rarr;</Link>
            </h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Releasing chronic racing thoughts, perfectionism, and workplace overwhelm into the presence of an attentive listener.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BENEFITS OF BEING HEARD (NO FALSE MEDICAL PROMISES)    */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-8 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Emotional Unburdening
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            The Restorative Value of Being Truly Heard
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            We do not promise instant cures or guaranteed solutions to complex life dilemmas. What we provide is genuine psychological unburdening. When heavy emotions remain trapped in the mind, they create anxiety, physical tension, and distorted catastrophizing.
          </p>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            By putting feelings into spoken words with an empathetic human listener, your autonomic nervous system relaxes. You gain clarity, organize your thoughts, and feel validated. You leave the conversation with a lighter chest, knowing that someone truly heard you.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. STRICT PRIVACY & RESPECTFUL COMMUNICATION              */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-8 rounded-3xl bg-light-beige/50 border border-soft-sage/40 space-y-4">
          <div className="flex items-center gap-2 text-dark-charcoal font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-muted-green" />
            <span>Privacy &amp; Respectful Communication Standards</span>
          </div>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            We treat your personal details with the utmost care and respect. Your phone number, name, and conversation details are never shared with employers, uploaded to medical insurance databases, or sold to third parties. All conversations occur directly over encrypted WhatsApp messaging.
          </p>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            <strong>Clear Scope:</strong> The Inner Compass 23 is a peer listening service, not a psychiatric clinic or medical facility. We cannot promise absolute confidentiality in rare situations where there is immediate life-threatening danger, severe self-harm risk, or child abuse, in which case safeguarding authorities must be contacted.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. BOOKING INFORMATION & TIMEZONE COORDINATION            */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="p-8 rounded-3xl bg-white border border-soft-sage/40 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-dark-charcoal font-bold text-base">
            <Clock className="w-5 h-5 text-muted-green" />
            <span>Booking Guidelines for {city.name} Residents</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-dark-charcoal/75 list-disc pl-5 leading-relaxed">
            <li>
              <strong>Local Timezone:</strong> Slots are coordinated in <strong>{city.timezone}</strong> to ensure listeners are ready when you need them.
            </li>
            <li>
              <strong>One-Hour Advance Notice:</strong> Requests must be booked at least 1 hour in advance so our coordinator can confirm your listener.
            </li>
            <li>
              <strong>Zero Subscriptions:</strong> You only book sessions as you need them. No recurring monthly membership fees or hidden charges.
            </li>
            <li>
              <strong>100% Online Delivery:</strong> All sessions are conducted via WhatsApp. We do not operate a walk-in physical office in {city.name}.
            </li>
          </ul>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. CITY-SPECIFIC FREQUENTLY ASKED QUESTIONS               */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions ({city.name})
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Answers to common questions from people seeking human listening support in {city.name}.
          </p>
        </div>

        <div className="space-y-4">
          {city.faqs.map((faq, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-soft-sage/40 space-y-2 shadow-xs"
            >
              <h3 className="font-semibold text-sm text-dark-charcoal flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-muted-green flex-shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-dark-charcoal/75 pl-6 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}

          {/* Standard City FAQ Addition */}
          <div className="p-6 rounded-2xl bg-white border border-soft-sage/40 space-y-2 shadow-xs">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-muted-green flex-shrink-0 mt-0.5" />
              <span>Do I need to visit an office in {city.name}?</span>
            </h3>
            <p className="text-xs text-dark-charcoal/75 pl-6 leading-relaxed">
              No. The Inner Compass 23 is completely remote and conducted over private WhatsApp messaging. This protects your privacy and allows you to connect comfortably from home.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-soft-sage/40 space-y-2 shadow-xs">
            <h3 className="font-semibold text-sm text-dark-charcoal flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-muted-green flex-shrink-0 mt-0.5" />
              <span>How does the 1-hour advance booking work in {city.name}?</span>
            </h3>
            <p className="text-xs text-dark-charcoal/75 pl-6 leading-relaxed">
              To guarantee that a dedicated human listener is prepared and waiting for you in {city.timezone}, please submit your booking request at least 60 minutes before your desired start time.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. RELATED SUPPORT ARTICLES                              */}
      {/* ========================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Related Support Resources &amp; Articles
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Read in-depth editorial articles written by our peer support team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/feeling-lonely"
            className="p-5 bg-white rounded-2xl border border-soft-sage/40 hover:border-muted-green shadow-xs transition-all group block space-y-1.5"
          >
            <h3 className="text-sm font-semibold text-dark-charcoal group-hover:text-muted-green transition-colors flex items-center justify-between">
              <span>Understanding Modern Urban Loneliness</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </h3>
            <p className="text-xs text-dark-charcoal/65 leading-relaxed">
              Exploring why being surrounded by millions of people in a city can still leave you feeling completely alone.
            </p>
          </Link>

          <Link
            href="/heartbreak-support"
            className="p-5 bg-white rounded-2xl border border-soft-sage/40 hover:border-muted-green shadow-xs transition-all group block space-y-1.5"
          >
            <h3 className="text-sm font-semibold text-dark-charcoal group-hover:text-muted-green transition-colors flex items-center justify-between">
              <span>Healing from Heartbreak &amp; Breakups</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </h3>
            <p className="text-xs text-dark-charcoal/65 leading-relaxed">
              How active human listening helps process difficult memories, emotional withdrawal, and quiet evenings.
            </p>
          </Link>
        </div>
      </section>

      {/* Spotify Podcast & Calming Audio Section */}
      <SpotifyPodcastSection
        title={`Listen to The Inner Compass 23 on Spotify: Calming Reflections for ${city.name}`}
        subtitle={`Stream our guided mindful emotional support episodes on Spotify, or play our interactive binaural audio previews directly below.`}
        badge="Official Spotify Podcast &amp; Calming Voice Station"
      />

      {/* Programmatic Issue & Long-Tail Internal Linking */}
      <CityProgrammaticLinks
        cityName={city.name}
        citySlug={city.slug}
        countryName={city.countryName}
        countrySlug={city.countrySlug}
      />

      {/* ========================================================= */}
      {/* 11. SIBLING CITIES IN THIS COUNTRY                        */}
      {/* ========================================================= */}
      {siblingCities.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-4 border-t border-soft-sage/20">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
              Other Cities Supported Across {city.countryName}
            </h2>
            <p className="text-xs text-dark-charcoal/70">
              Explore localized listening information and timezones for other major centers in {city.countryName}.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {siblingCities.map((sib) => (
              <Link
                key={sib.slug}
                href={`/locations/${city.countrySlug}/${sib.slug}`}
                className="p-4 rounded-2xl bg-white/80 hover:bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs transition-all group block space-y-1"
              >
                <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors">
                  {sib.name}
                </div>
                <div className="text-[11px] text-dark-charcoal/50">
                  {sib.stateOrRegion} &bull; Tier {sib.tier}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================= */}
      {/* 12. FINAL CTA & SUPPORT REQUEST FORM                      */}
      {/* ========================================================= */}
      <section id="support-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 pt-8">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Need Someone to Listen? Start a Conversation.</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Connect with a Human Listener in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
            Select what you are going through, choose your preferred date and time ({city.timezone}), and we will connect with you privately on WhatsApp.
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
