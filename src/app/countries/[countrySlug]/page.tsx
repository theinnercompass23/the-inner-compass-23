import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SafeImage from "@/components/SafeImage";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  COUNTRIES_DATA,
  getCountryBySlug,
  CountryData,
} from "@/data/countries";
import { getCitiesByCountry } from "@/data/cities";
import { FEATURED_ARTICLES } from "@/data/articles";
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
} from "lucide-react";

export async function generateStaticParams() {
  return COUNTRIES_DATA.map((country) => ({
    countrySlug: country.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}): Promise<Metadata> {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return {};

  return {
    title: country.metaTitle,
    description: country.metaDescription,
    alternates: {
      canonical: `https://www.theinnercompass23.com/countries/${country.slug}`,
    },
    openGraph: {
      title: country.metaTitle,
      description: country.metaDescription,
      url: `https://www.theinnercompass23.com/countries/${country.slug}`,
      type: "website",
    },
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  const citiesInCountry = getCitiesByCountry(country.slug);
  const tier1Cities = citiesInCountry.filter((c) => c.tier === 1);
  const tier2Cities = citiesInCountry.filter((c) => c.tier === 2);
  const tier3Cities = citiesInCountry.filter((c) => c.tier === 3);

  const otherCountries = COUNTRIES_DATA.filter((c) => c.slug !== country.slug);

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
            "name": "Countries",
            "item": "https://www.theinnercompass23.com/countries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": country.name,
            "item": `https://www.theinnercompass23.com/countries/${country.slug}`
          }
        ]
      },
      {
        "@type": "Service",
        "name": `Human Emotional Support in ${country.name}`,
        "provider": {
          "@type": "Organization",
          "name": "The Inner Compass 23",
          "url": "https://www.theinnercompass23.com"
        },
        "serviceType": "Peer Support & Active Listening",
        "areaServed": {
          "@type": "Country",
          "name": country.name
        },
        "description": country.metaDescription
      },
      {
        "@type": "FAQPage",
        "mainEntity": country.faqs.map((f) => ({
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

      {/* 1. Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-dark-charcoal/60">
          <Link href="/" className="hover:text-dark-charcoal transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/countries" className="hover:text-dark-charcoal transition-colors">
            Countries
          </Link>
          <span>/</span>
          <span className="text-dark-charcoal font-semibold">{country.name}</span>
        </nav>
      </div>

      {/* 2. Country Hero Section */}
      <section className="relative overflow-hidden pt-4 pb-14 border-b border-soft-sage/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
                <span>{country.flag}</span>
                <span>Human Listening Support across {country.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-dark-charcoal leading-tight">
                {country.tagline}
              </h1>

              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {country.intro}
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
                    `Hello The Inner Compass 23 Team, I am reaching out from ${country.name} and would like someone to talk to for emotional support.`
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
                  <Clock className="w-4 h-4 text-muted-green" /> {country.timezones.join(", ")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-muted-green" /> Real Human, No AI Bot
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <SafeImage
                  src={country.heroImage}
                  alt={country.tagline}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations. No Judgment.</p>
                    <p className="text-white/80">Support for adults in {country.name} seeking empathy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Service Explanation & Common Situations */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white/80 backdrop-blur-xs border border-soft-sage/40 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-green uppercase tracking-wider">
            <Heart className="w-4 h-4" />
            <span>How Our Listening Service Works</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            A Respectful Human Ear in {country.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            {country.listeningExplanation}
          </p>
          <div className="pt-2 text-xs text-dark-charcoal/70 space-y-1.5">
            <p className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-muted-green" />
              <span>Available in your local timezone ({country.timezones[0]})</span>
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-muted-green" />
              <span>Coordinated directly over private WhatsApp messaging</span>
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-muted-green" />
              <span>Zero clinical diagnostic labels, judgment, or unsolicited advice</span>
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-green uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Common Situations</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            What People in {country.name} Want to Talk About
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-dark-charcoal/75">
            {country.situations.map((sit, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-green mt-2 flex-shrink-0" />
                <span>{sit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Relevant Support Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            Emotional Support Resources
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Support Topics for Residents in {country.name}
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Read our complete editorial guides on navigating life transitions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs text-center">
          {[
            { label: "Loneliness Support", path: "/feeling-lonely" },
            { label: "Heartbreak Support", path: "/heartbreak-support" },
            { label: "Divorce Support", path: "/divorce-support" },
            { label: "Separation Support", path: "/separation-support" },
            { label: "Marriage Problems", path: "/marriage-problems" },
            { label: "Someone to Talk To", path: "/someone-to-talk" },
          ].map((topic) => (
            <Link
              key={topic.path}
              href={topic.path}
              className="p-3.5 rounded-2xl bg-white/80 hover:bg-white border border-soft-sage/40 hover:border-muted-green text-dark-charcoal font-medium transition-all shadow-xs block"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Clickable Cities Section (Tier 1, 2, 3) */}
      <section id="cities-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold tracking-wider uppercase text-muted-green">
            Metropolitan Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Explore Cities Across {country.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70">
            Click on any city below to open its dedicated full-length editorial article, local timezone, and localized peer listening information.
          </p>
        </div>

        {/* Tier 1 Cities */}
        {tier1Cities.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-lg text-dark-charcoal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-green" />
              <span>Tier 1 Major Metropolitan Centers</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier1Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${country.slug}/${city.slug}`}
                  className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-lg transition-all group block space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-base text-dark-charcoal group-hover:text-muted-green transition-colors">
                      {city.name}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded-full">
                      Tier 1
                    </span>
                  </div>
                  <p className="text-[11px] text-dark-charcoal/50 -mt-1">{city.population}</p>
                  <p className="text-xs text-dark-charcoal/75 line-clamp-2">
                    {city.intro}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-muted-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read {city.name} City Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tier 2 Cities */}
        {tier2Cities.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="font-serif font-bold text-lg text-dark-charcoal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-green" />
              <span>Tier 2 Regional &amp; Growth Hubs</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier2Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${country.slug}/${city.slug}`}
                  className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-lg transition-all group block space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-base text-dark-charcoal group-hover:text-muted-green transition-colors">
                      {city.name}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded-full">
                      Tier 2
                    </span>
                  </div>
                  <p className="text-[11px] text-dark-charcoal/50 -mt-1">{city.population}</p>
                  <p className="text-xs text-dark-charcoal/75 line-clamp-2">
                    {city.intro}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-muted-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read {city.name} City Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tier 3 Cities */}
        {tier3Cities.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="font-serif font-bold text-lg text-dark-charcoal flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-green" />
              <span>Tier 3 Communities</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier3Cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${country.slug}/${city.slug}`}
                  className="p-6 rounded-2xl bg-white/80 hover:bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-lg transition-all group block space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-base text-dark-charcoal group-hover:text-muted-green transition-colors">
                      {city.name}
                    </span>
                    <span className="text-[10px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded-full">
                      Tier 3
                    </span>
                  </div>
                  <p className="text-[11px] text-dark-charcoal/50 -mt-1">{city.population}</p>
                  <p className="text-xs text-dark-charcoal/75 line-clamp-2">
                    {city.intro}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-muted-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read {city.name} City Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* 7. Instagram-Style Video Stories Carousel */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoStoriesSection
          layout="carousel"
          title={`Real Stories from ${country.name} & Worldwide`}
          subtitle="Listen to what everyday people say about finding a safe space to speak freely."
        />
      </section>

      {/* 8. Relevant Editorial Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Featured Editorial Reading
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Insights on navigating loneliness, relationship transitions, and emotional unburdening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_ARTICLES.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              href={article.slug}
              className="p-5 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs transition-all group block space-y-2"
            >
              <div className="text-[10px] font-bold text-muted-green uppercase tracking-wider">
                {article.category}
              </div>
              <h3 className="font-serif font-bold text-sm text-dark-charcoal group-hover:text-muted-green transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-xs text-dark-charcoal/70 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="pt-2 text-xs font-semibold text-muted-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 9. Direct Booking Form Section */}
      <section id="support-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confidential Request</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Connect with a Human Listener in {country.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
            Select what you are going through, enter your preferred date and time, and we will connect with you privately on WhatsApp.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-soft-sage/40 shadow-sm text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            Fill our quick confidential request form or connect directly on WhatsApp to speak with a listener in {country.name}.
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

      {/* 10. Country FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions ({country.name})
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Clear information about our peer listening service.
          </p>
        </div>

        <div className="space-y-4">
          {country.faqs.map((f, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-soft-sage/40 space-y-2 shadow-xs"
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

      {/* 11. Related Countries Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-soft-sage/30">
        <h3 className="font-serif font-bold text-base text-dark-charcoal mb-4">
          Other Supported Countries
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {otherCountries.map((c) => (
            <Link
              key={c.slug}
              href={`/countries/${c.slug}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white border border-soft-sage/40 text-dark-charcoal transition-all shadow-xs"
            >
              <span>{c.flag}</span>
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
