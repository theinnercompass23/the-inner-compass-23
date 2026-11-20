import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SafeImage from "@/components/SafeImage";
import SupportRequestForm from "@/components/SupportRequestForm";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import WhatsAppIcon from "@/components/WhatsAppIcon";
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

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `https://haven.care/locations/${city.countrySlug}/${city.slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `https://haven.care/locations/${city.countrySlug}/${city.slug}`,
      type: "website",
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
        "@type": "Service",
        "name": `Human Emotional Listening Support in ${city.name}`,
        "provider": {
          "@type": "Organization",
          "name": "Haven Human Emotional Support",
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
        "mainEntity": city.faqs.map((f) => ({
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

      {/* 17. Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs text-dark-charcoal/60 flex-wrap">
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

      {/* 1. City-Specific Hero Section */}
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

              {/* 2. Unique Introduction */}
              <p className="text-base sm:text-lg text-dark-charcoal/75 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {city.intro}
              </p>

              {/* 18. Natural Primary CTAs */}
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
                    `Hello Haven Team, I am reaching out from ${city.name}, ${city.countryName} and would like someone to talk to for emotional support.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
                  <span>Direct WhatsApp Connect</span>
                </a>
              </div>

              {/* 7, 8, 9, 10. Service Badges: Timezone, Privacy, Online delivery */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-xs text-dark-charcoal/70">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-muted-green" /> 100% Confidential
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-muted-green" /> {city.timezone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-muted-green" /> Online &bull; Remote Delivery
                </span>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="relative rounded-3xl overflow-hidden shadow-md border border-soft-sage/40 aspect-4/3">
                <SafeImage
                  src={city.heroImage}
                  alt={city.tagline}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white text-xs">
                    <p className="font-semibold text-sm">Real People. Real Conversations.</p>
                    <p className="text-white/80">Support for adults in {city.name} seeking empathy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3, 4, 5. Detailed Service Explanation & Situations in this City */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl bg-white/70 backdrop-blur-xs border border-soft-sage/40 space-y-4 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-green uppercase tracking-wider">
            <Heart className="w-4 h-4" />
            <span>Living in {city.name}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Why People in {city.name} Seek a Human Listener
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            {city.localContext}
          </p>
          <div className="p-3.5 bg-light-beige/60 rounded-xl border border-soft-sage/30 text-xs text-dark-charcoal/75">
            <strong>Online &amp; Private:</strong> Our service is delivered completely remotely via encrypted WhatsApp messaging. We do not operate physical offices in {city.name}, ensuring your privacy is 100% protected without clinic waiting rooms.
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-green uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Life Experiences</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            What You Can Discuss in {city.name}
          </h2>
          <ul className="space-y-2.5 text-xs sm:text-sm text-dark-charcoal/75">
            {city.situations.map((sit, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-green mt-2 flex-shrink-0" />
                <span>{sit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 & 19. Relevant Support Categories & Topic Links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Support Topics for {city.name} Residents
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Explore dedicated resources for the emotional challenges you may be experiencing.
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
              className="p-3.5 rounded-2xl bg-white/70 hover:bg-white border border-soft-sage/40 hover:border-muted-green text-dark-charcoal font-medium transition-all shadow-xs block"
            >
              {topic.label}
            </Link>
          ))}
        </div>
      </section>

      {/* 14. Instagram-Style Video Stories Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <VideoStoriesSection
          layout="carousel"
          title={`Real Stories from ${city.name} & Beyond`}
          subtitle="Watch how people dealing with loneliness, breakups, and stress found peace through human listening."
        />
      </section>

      {/* 6, 9. How to Request & Booking Flow */}
      <section id="support-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Confidential Booking</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Connect with a Human Listener in {city.name}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
            Select your concern, choose your preferred date and time ({city.timezone}), and we will connect with you privately on WhatsApp.
          </p>
        </div>

        <SupportRequestForm />
      </section>

      {/* 12. Local City FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Frequently Asked Questions ({city.name})
          </h2>
          <p className="text-xs text-dark-charcoal/70">
            Clear information for individuals reaching out from {city.name}.
          </p>
        </div>

        <div className="space-y-4">
          {city.faqs.map((f, i) => (
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

      {/* 16. Related Sibling Cities in Same Country */}
      {siblingCities.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-soft-sage/30">
          <h3 className="font-serif font-bold text-base text-dark-charcoal mb-4">
            Other Cities in {city.countryName}
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {siblingCities.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.countrySlug}/${c.slug}`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/70 hover:bg-white border border-soft-sage/40 text-dark-charcoal transition-all shadow-xs"
              >
                <MapPin className="w-3 h-3 text-muted-green" />
                <span>{c.name}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
