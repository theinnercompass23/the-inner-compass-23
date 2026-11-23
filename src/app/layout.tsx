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
  metadataBase: new URL("https://haven.care"),
  alternates: {
    canonical: "https://haven.care",
    languages: {
      "en-US": "https://haven.care/us",
      "en-GB": "https://haven.care/uk",
      "en-CA": "https://haven.care/ca",
      "en-AU": "https://haven.care/au",
      "en-AE": "https://haven.care/ae",
      "en": "https://haven.care",
      "x-default": "https://haven.care",
    },
  },
  openGraph: {
    title: "The Inner Compass 23 — Human Emotional Support & Peer Listening Service",
    description:
      "Whether you're feeling lonely, dealing with separation, or need someone to listen, we're here without judgment. Real people, real conversations, no judgment.",
    url: "https://haven.care",
    siteName: "The Inner Compass 23",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Inner Compass 23 — Human Emotional Support & Peer Listening",
    description:
      "Sometimes, you just need someone to listen. Connect privately on WhatsApp for non-judgmental human support.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://haven.care/#organization",
      "name": "The Inner Compass 23 — Human Emotional Support",
      "url": "https://haven.care",
      "logo": "https://haven.care/the-inner-compass-logo.png",
      "description":
        "A private, safe, and confidential human emotional support and peer listening service for people navigating loneliness, heartbreak, separation, divorce, and personal struggles.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8810381949",
        "contactType": "customer support",
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
      }
    },
    {
      "@type": "Service",
      "@id": "https://haven.care/#service",
      "name": "Human Peer Listening & Emotional Support",
      "provider": {
        "@id": "https://haven.care/#organization"
      },
      "serviceType": "Peer Support & Non-Clinical Active Listening",
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
        { "@type": "Country", "name": "Germany" }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://haven.care/#website",
      "url": "https://haven.care",
      "name": "The Inner Compass 23",
      "publisher": {
        "@id": "https://haven.care/#organization"
      }
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
