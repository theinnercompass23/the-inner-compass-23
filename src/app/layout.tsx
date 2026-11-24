import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LeadProvider } from "@/context/LeadContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Inner Compass 23 — Human Emotional Support & Peer Listening Service",
  description:
    "Sometimes, you just need someone to listen. Private, confidential human emotional support for loneliness, divorce, separation, breakups, grief, and personal struggles. Connect directly on WhatsApp with compassionate human listeners worldwide.",
  keywords: [
    // Core Platform Short-Tail
    "online emotional support",
    "active listening service",
    "anonymous chat support",
    "online therapy usa",
    "talk to someone online",
    "someone to talk to online",
    "online human listener",
    "private emotional support online",
    "non-judgmental listener",
    "real person to talk to online",
    // Loneliness
    "loneliness help",
    "feeling lonely",
    "overcome loneliness",
    "companionship online",
    "i have nobody to talk to",
    "i just need someone to listen",
    // Divorce & Breakup
    "divorce support",
    "divorce counseling online",
    "breakup support",
    "post divorce loneliness",
    "someone to talk to after divorce",
    "someone to talk to after a breakup",
    // Depression & Anxiety / Late-Night
    "depression chat online",
    "anxiety support chat",
    "late night emotional support",
    "vent online",
    "someone to talk to late at night",
    // Long-Tail Urgent / High-Intent
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
    // Global Hubs
    "someone to talk to online USA",
    "human listening service UK",
    "someone to talk to Canada",
    "online listening service Australia",
    "someone to talk to in Dubai",
  ],
  authors: [{ name: "The Inner Compass 23 Support Team" }],
  metadataBase: new URL("https://www.theinnercompass23.com"),
  alternates: {
    canonical: "https://www.theinnercompass23.com",
    languages: {
      "en-US": "https://www.theinnercompass23.com/us",
      "en-GB": "https://www.theinnercompass23.com/uk",
      "en-CA": "https://www.theinnercompass23.com/ca",
      "en-AU": "https://www.theinnercompass23.com/au",
      "en-AE": "https://www.theinnercompass23.com/ae",
      "en": "https://www.theinnercompass23.com",
      "x-default": "https://www.theinnercompass23.com",
    },
  },
  openGraph: {
    title: "The Inner Compass 23 — Human Emotional Support & Peer Listening Service",
    description:
      "Whether you're feeling lonely, dealing with separation, or need someone to listen, we're here without judgment. Real people, real conversations, 24/7 on WhatsApp.",
    url: "https://www.theinnercompass23.com",
    siteName: "The Inner Compass 23",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.theinnercompass23.com/the-inner-compass-logo.png",
        width: 1200,
        height: 630,
        alt: "The Inner Compass 23 — Human Emotional Support & Peer Listening",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Inner Compass 23 — Human Emotional Support & Peer Listening",
    description:
      "Sometimes, you just need someone to listen. Connect privately on WhatsApp for non-judgmental human support.",
    images: ["https://www.theinnercompass23.com/the-inner-compass-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google1df1e5f69523e99f",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.theinnercompass23.com/#organization",
      "name": "The Inner Compass 23",
      "alternateName": ["The Inner Compass", "Inner Compass 23"],
      "url": "https://www.theinnercompass23.com",
      "logo": "https://www.theinnercompass23.com/the-inner-compass-logo.png",
      "image": "https://www.theinnercompass23.com/the-inner-compass-logo.png",
      "slogan": "Awaken Within. Discover Beyond.",
      "description":
        "A private, safe, and confidential human emotional support and peer listening service for people navigating loneliness, heartbreak, separation, divorce, and personal struggles worldwide.",
      "email": "theinnercompass23.info@gmail.com",
      "telephone": "+91-8810381949",
      "founder": {
        "@id": "https://www.theinnercompass23.com/#founder"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8810381949",
        "contactType": "customer support",
        "contactOption": "HearingImpairedSupported",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": [
          "US",
          "GB",
          "CA",
          "AU",
          "AE",
          "IE",
          "SG",
          "DE",
          "NZ",
          "IN"
        ]
      },
      "sameAs": [
        "https://open.spotify.com/episode/3Ard2e43YuXqp0Vk4UXBs7"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://www.theinnercompass23.com/#founder",
      "name": "Dr. Aarti Aggarwal",
      "honorificSuffix": "MPT",
      "jobTitle": "Founder & CEO, Healthcare & Whole-Person Wellness Leader",
      "worksFor": {
        "@id": "https://www.theinnercompass23.com/#organization"
      },
      "description":
        "Healthcare professional with over 25 years of experience in musculoskeletal physiotherapy, Chinese medicine, acupuncture, astrology, and holistic emotional counseling.",
      "image": "https://www.theinnercompass23.com/the-inner-compass-icon.png",
      "knowsAbout": [
        "Human Emotional Support",
        "Active Listening",
        "Holistic Health",
        "Musculoskeletal Physiotherapy",
        "Chinese Medicine & Acupuncture",
        "Emotional Healing & Social Confidence"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.theinnercompass23.com/#service",
      "name": "Human Peer Listening & Emotional Support",
      "provider": {
        "@id": "https://www.theinnercompass23.com/#organization"
      },
      "serviceType": "Peer Support, Non-Clinical Active Listening & Emotional Venting",
      "description":
        "Compassionate, non-judgmental human peer listening conversations via private WhatsApp messaging. Real people, real conversations, no clinical checklists.",
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "Canada" },
        { "@type": "Country", "name": "Australia" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Ireland" },
        { "@type": "Country", "name": "Singapore" },
        { "@type": "Country", "name": "Germany" },
        { "@type": "Country", "name": "India" }
      ]
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://www.theinnercompass23.com/#scout",
      "name": "The Social Confidence Lab (SCL) — SCOUT Program",
      "alternateName": "SCOUT by SCL",
      "url": "https://www.theinnercompass23.com/support-for-children",
      "description":
        "SCOUT (Social Confidence Oration & Unfolding Talents) is an elite communication, speech, public speaking, and emotional resilience program for children and teenagers.",
      "parentOrganization": {
        "@id": "https://www.theinnercompass23.com/#organization"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.theinnercompass23.com/#website",
      "url": "https://www.theinnercompass23.com",
      "name": "The Inner Compass 23",
      "alternateName": "The Inner Compass 23 — Human Emotional Support",
      "publisher": {
        "@id": "https://www.theinnercompass23.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.theinnercompass23.com/locations?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.theinnercompass23.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is there a website where I can talk to someone anonymously when I feel lonely?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Online active listening and emotional support platforms like The Inner Compass 23 (https://www.theinnercompass23.com) let you connect with trained, compassionate human listeners 24/7 via private WhatsApp chat using a nickname, without sharing your real name, phone number, or insurance details."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between an active listener and a therapist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An active listener provides immediate, judgment-free human presence, empathetic understanding, and emotional companionship when you need to vent about loneliness, relationship stress, or heartbreak. A licensed therapist provides clinical mental healthcare for clinical depression, trauma, or psychiatric conditions."
          }
        },
        {
          "@type": "Question",
          "name": "Who founded The Inner Compass 23?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Inner Compass 23 was founded by Dr. Aarti Aggarwal, MPT, a whole-person wellness leader and healthcare professional with over 25 years of experience in musculoskeletal physiotherapy, acupuncture, holistic counseling, and emotional resilience mentoring."
          }
        },
        {
          "@type": "Question",
          "name": "How does online human emotional support work on The Inner Compass 23?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You simply click the WhatsApp button on The Inner Compass 23 to start a private conversation with a verified human listener. There are no registration forms, insurance waitlists, or mandatory personal identifiers. You can chat or speak at your own pace."
          }
        },
        {
          "@type": "Question",
          "name": "Who can I talk to when going through a divorce and feeling completely alone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "During divorce or marital separation, you can connect with specialized active listeners at The Inner Compass 23 for non-judgmental emotional venting, empathetic listening, and compassionate guidance through post-divorce loneliness and heartbreak."
          }
        },
        {
          "@type": "Question",
          "name": "Is my conversation on The Inner Compass 23 confidential and private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All conversations are 100% confidential, private, and secured by end-to-end encryption on WhatsApp. The Inner Compass 23 does not sell personal data, track user identities, or require real legal names."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get emotional support online without health insurance in the US or internationally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Inner Compass 23 provides accessible, transparent emotional peer support worldwide (USA, UK, Canada, Australia, UAE, India) without insurance paperwork, copays, or clinical pre-approvals."
          }
        },
        {
          "@type": "Question",
          "name": "What is the SCOUT program by The Social Confidence Lab (SCL)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SCOUT (Social Confidence Oration & Unfolding Talents) is a children's and teenagers' confidence and communication program by The Social Confidence Lab (SCL), focused on public speaking, social skills, oration, and self-esteem building."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-warm-white text-dark-charcoal font-sans">
        <LeadProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LeadProvider>
      </body>
    </html>
  );
}
