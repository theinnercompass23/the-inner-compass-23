import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import MeetFounderSection from "@/components/MeetFounderSection";
import AiFaqSection from "@/components/AiFaqSection";
import {
  Heart,
  ShieldCheck,
  Lock,
  Globe,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Users,
  Compass,
  Headphones,
  Calendar,
  Award,
} from "lucide-react";
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  buildDirectWhatsAppUrl,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Online Counseling & Human Emotional Support Worldwide — The Inner Compass 23",
  description:
    "Confidential online counseling, active human listening, and whole-person wellness support. Private, compassionate guidance for loneliness, depression, heartbreak, and divorce without insurance hurdles or waitlists.",
  keywords: [
    "online counseling",
    "online counseling worldwide",
    "emotional counseling",
    "holistic counseling",
    "confidential counseling online",
    "counseling for loneliness",
    "counseling for depression",
    "breakup counseling",
    "divorce counseling online",
    "relationship counseling",
    "grief counseling",
    "counseling without insurance usa",
    "talk to a counselor online",
    "online counseling usa",
    "online counseling uk",
    "online counseling canada",
    "online counseling australia",
    "online counseling dubai uae",
    "online counseling india",
    "affordable online counseling",
  ],
  alternates: {
    canonical: "https://www.theinnercompass23.com/counseling",
  },
  openGraph: {
    title: "Online Counseling & Human Emotional Support Worldwide",
    description:
      "Compassionate, confidential online counseling and peer active listening. Connect 24/7 on WhatsApp for guidance through life's toughest transitions.",
    url: "https://www.theinnercompass23.com/counseling",
    siteName: "The Inner Compass 23",
    type: "website",
    images: [
      {
        url: "https://www.theinnercompass23.com/the-inner-compass-logo.png",
        width: 1200,
        height: 630,
        alt: "Online Counseling — The Inner Compass 23",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Counseling & Emotional Support Worldwide",
    description:
      "Confidential online counseling and empathetic listening 24/7 on WhatsApp. No waitlists, no insurance barriers.",
    images: ["https://www.theinnercompass23.com/the-inner-compass-logo.png"],
  },
};

const counselingSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CounselingService",
      "@id": "https://www.theinnercompass23.com/counseling#service",
      "name": "The Inner Compass 23 — Online Counseling & Emotional Support",
      "alternateName": ["Online Counseling Worldwide", "Holistic Emotional Counseling"],
      "url": "https://www.theinnercompass23.com/counseling",
      "provider": {
        "@type": "Organization",
        "name": "The Inner Compass 23",
        "url": "https://www.theinnercompass23.com",
        "logo": "https://www.theinnercompass23.com/the-inner-compass-logo.png",
        "telephone": "+91-8810381949",
        "founder": {
          "@type": "Person",
          "name": "Dr. Aarti Aggarwal, MPT",
          "jobTitle": "Founder & Healthcare/Whole-Person Wellness Leader"
        }
      },
      "serviceType": "Online Counseling, Human Active Listening & Life Alchemy",
      "description":
        "Confidential, accessible online counseling and peer active listening for loneliness, grief, heartbreak, divorce, and personal struggles worldwide.",
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://www.theinnercompass23.com/counseling",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+91-8810381949",
          "contactType": "counseling support"
        }
      },
      "areaServed": [
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "United Arab Emirates",
        "India",
        "Ireland",
        "Germany",
        "Singapore",
        "Worldwide"
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "description": "Free initial peer listening and accessible pay-per-session holistic counseling"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.theinnercompass23.com/counseling#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is online counseling on The Inner Compass 23?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online counseling at The Inner Compass 23 is a compassionate, non-judgmental human support service connecting individuals worldwide directly with empathetic listeners and holistic wellness counselors via private WhatsApp messaging and voice calls."
          }
        },
        {
          "@type": "Question",
          "name": "Can I access online counseling without health insurance or clinical waitlists?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Unlike conventional clinical therapy in the US or UK that requires insurance authorizations or months on a waiting list, The Inner Compass 23 provides immediate, affordable, out-of-pocket support 24/7 without paperwork."
          }
        },
        {
          "@type": "Question",
          "name": "What issues can I discuss in an online counseling session?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can openly discuss loneliness, marital separation, divorce, painful breakups, chronic overthinking, family friction, bereavement and grief, career burnout, or existential confusion in complete privacy."
          }
        },
        {
          "@type": "Question",
          "name": "Is online counseling on The Inner Compass 23 confidential?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, 100%. Conversations take place over end-to-end encrypted WhatsApp. You can choose to remain completely anonymous using a chosen nickname."
          }
        }
      ]
    }
  ]
};

export default function CounselingPage() {
  const counselingAreas = [
    {
      title: "Loneliness & Solitude Counseling",
      desc: "For those living alone, feeling invisible in large cities, or disconnected from friends and family. A genuine human presence that validates your experience.",
      href: "/feeling-lonely",
      badge: "High Demand",
    },
    {
      title: "Divorce & Separation Counseling",
      desc: "Navigating the devastating emotional aftermath of marital breakdown, custody heartache, and rebuilding your independent identity with compassionate support.",
      href: "/divorce-support",
      badge: "Specialized",
    },
    {
      title: "Heartbreak & Relationship Healing",
      desc: "Unburden the raw ache of unreciprocated feelings, sudden endings, and romantic trauma in a safe, judgment-free space.",
      href: "/heartbreak-support",
      badge: "Confidential",
    },
    {
      title: "Overthinking & Stress Counseling",
      desc: "Calm the 2:00 AM mental spiral. Practical conversational decompression to untangle anxiety and restore mental equilibrium.",
      href: "/overthinking-support",
      badge: "24/7 Available",
    },
    {
      title: "Grief, Bereavement & Loss Support",
      desc: "Holding gentle space as you process the absence of a loved one, companion, or foundational life anchor. Never hurried, never judged.",
      href: "/grief-support",
      badge: "Gentle Pace",
    },
    {
      title: "Life Alchemy & Purpose Alignment",
      desc: "Holistic spiritual cartography led by Dr. Aarti Aggarwal's 25+ years of whole-person clinical healthcare, astrology, and emotional resilience mentoring.",
      href: "/about",
      badge: "Founder-Led",
    },
  ];

  const globalRegions = [
    { name: "United States", href: "/us", cities: "New York, Los Angeles, Chicago, Miami, Houston, San Francisco, Dallas" },
    { name: "United Kingdom", href: "/uk", cities: "London, Manchester, Birmingham, Edinburgh, Leeds, Glasgow" },
    { name: "Canada", href: "/ca", cities: "Toronto, Vancouver, Montreal, Calgary, Ottawa, Edmonton" },
    { name: "Australia", href: "/au", cities: "Sydney, Melbourne, Brisbane, Perth, Adelaide" },
    { name: "United Arab Emirates", href: "/ae", cities: "Dubai, Abu Dhabi, Sharjah" },
    { name: "India & Worldwide", href: "/emotional-support-india", cities: "Delhi NCR, Mumbai, Bengaluru, Global Expats" },
  ];

  return (
    <div className="bg-warm-white text-dark-charcoal min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(counselingSchema) }}
      />

      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden border-b border-soft-sage/30">
        <div className="absolute top-12 left-1/3 w-80 sm:w-[550px] h-80 sm:h-[550px] bg-soft-sage/20 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-28 right-1/4 w-72 sm:w-[450px] h-72 sm:h-[450px] bg-amber-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Online Counseling &amp; Active Listening Available Worldwide</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.15]">
              Compassionate Online Counseling. <br className="hidden sm:inline" />
              <span className="italic font-normal text-muted-green">Real Human Support, Zero Judgment.</span>
            </h1>

            <p className="text-sm sm:text-lg text-dark-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              Whether you are navigating the loneliness of living alone, struggling through a painful divorce, or carrying silent emotional burdens — connect instantly on WhatsApp with empathetic listeners and whole-person wellness counselors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3">
              <a
                href={buildDirectWhatsAppUrl("Hello, I am looking for online counseling and someone compassionate to talk to.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm sm:text-base shadow-md transition-all group"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Start Confidential Counseling</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-soft-sage/20 border border-soft-sage/50 text-dark-charcoal font-medium text-sm transition-all"
              >
                <span>Meet Founder Dr. Aarti</span>
              </Link>
            </div>

            {/* Micro Trust Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-dark-charcoal/70 pt-2">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-muted-green" />
                <span>End-to-End Encrypted</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-muted-green" />
                <span>No Insurance Required</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-muted-green" />
                <span>Available 24/7 Worldwide</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. WHY CHOOSE THE INNER COMPASS 23 COUNSELING             */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-soft-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              A Modern Alternative to Clinical Therapy
            </h2>
            <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
              Traditional healthcare often leaves people feeling like case files. We prioritize genuine human empathy, immediate accessibility, and holistic healing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-warm-white border border-soft-sage/30 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-muted-green flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-dark-charcoal">
                No 6-Week Waitlists
              </h3>
              <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
                Emotional crises and late-night loneliness don&apos;t keep office hours. Connect directly within minutes, not months.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-warm-white border border-soft-sage/30 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-muted-green flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-dark-charcoal">
                No Insurance Hurdles
              </h3>
              <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
                Zero clinical diagnostic labels sent to employers or insurance companies. Transparent, accessible, pay-as-you-go sessions.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-warm-white border border-soft-sage/30 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-muted-green flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-dark-charcoal">
                Whole-Person Wellness
              </h3>
              <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
                Grounded in Dr. Aarti Aggarwal&apos;s 25+ years of healthcare expertise, Chinese medicine, acupuncture wisdom, and spiritual cartography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DEDICATED COUNSELING SPECIALIZATIONS                   */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-warm-white border-b border-soft-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-green">
              Tailored Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              Counseling Areas We Support
            </h2>
            <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
              Select an area to explore deep compassionate guidance tailored to your exact emotional journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {counselingAreas.map((area, idx) => (
              <Link
                key={idx}
                href={area.href}
                className="group p-6 rounded-3xl bg-white border border-soft-sage/40 shadow-xs hover:shadow-md hover:border-emerald-600/40 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-muted-green bg-soft-sage/20 px-2.5 py-1 rounded-full">
                      {area.badge}
                    </span>
                    <ArrowRight className="w-4 h-4 text-dark-charcoal/40 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-dark-charcoal group-hover:text-emerald-700 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
                <span className="text-xs font-medium text-emerald-600 flex items-center gap-1 pt-2">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. MEET THE FOUNDER SECTION                               */}
      {/* ========================================================= */}
      <MeetFounderSection />

      {/* ========================================================= */}
      {/* 5. GLOBAL LOCATIONS & WORLDWIDE COVERAGE                  */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-soft-sage/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-green">
              Worldwide Reach
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal">
              Global Online Counseling Support
            </h2>
            <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
              We connect individuals across all time zones with English and Hindi speaking counselors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalRegions.map((region, idx) => (
              <Link
                key={idx}
                href={region.href}
                className="p-5 rounded-2xl bg-warm-white border border-soft-sage/30 hover:border-emerald-600/40 hover:shadow-xs transition-all space-y-2 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-base text-dark-charcoal group-hover:text-emerald-700 transition-colors">
                    {region.name}
                  </h3>
                  <Globe className="w-4 h-4 text-muted-green" />
                </div>
                <p className="text-xs text-dark-charcoal/60 leading-relaxed">
                  {region.cities}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. AI & DIRECT FAQ SECTION                                */}
      {/* ========================================================= */}
      <AiFaqSection
        title="Online Counseling — Common Questions"
        subtitle="Clear, factual answers regarding online counseling sessions, privacy protocols, and how to get started."
        badge="Counseling FAQ • Direct & Factual"
      />

      {/* ========================================================= */}
      {/* 7. FINAL WHATSAPP CALL TO ACTION                          */}
      {/* ========================================================= */}
      <FinalWhatsAppCta />
    </div>
  );
}
