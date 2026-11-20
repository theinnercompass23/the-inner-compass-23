import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Heart,
  Lock,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Global Service Directory — Worldwide Human Emotional Support | Haven",
  description:
    "Explore Haven's international human emotional listening hubs across the United States, United Kingdom, Canada, Australia, UAE, Europe, and worldwide. Real people, real conversations, no judgment.",
  alternates: {
    canonical: "https://haven.care/locations",
  },
};

export default function LocationsPage() {
  const hubs = [
    {
      country: "United States",
      flag: "🇺🇸",
      path: "/us",
      description: "Dedicated peer support for New York, Los Angeles, Chicago, San Francisco, and nationwide across EST, CST, MST, and PST timezones.",
      cities: "New York, LA, Chicago, Houston, Seattle, Austin",
    },
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      path: "/uk",
      description: "Confidential human listening across London, Manchester, Birmingham, Edinburgh, and Great Britain throughout GMT & BST hours.",
      cities: "London, Manchester, Birmingham, Edinburgh, Bristol",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      path: "/ca",
      description: "Empathetic emotional support for Toronto, Vancouver, Montreal, Calgary, and nationwide through winter blues and personal transitions.",
      cities: "Toronto, Vancouver, Montreal, Calgary, Ottawa",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      path: "/au",
      description: "Warm, respectful conversations for Sydney, Melbourne, Brisbane, Perth, and across Australia in AEST, ACST, and AWST timezones.",
      cities: "Sydney, Melbourne, Brisbane, Perth, Adelaide",
    },
    {
      country: "United Arab Emirates",
      flag: "🇦🇪",
      path: "/ae",
      description: "Discreet, private emotional sanctuary for expatriates and residents in Dubai, Abu Dhabi, and Sharjah in GST (UTC+4).",
      cities: "Dubai, Abu Dhabi, Sharjah",
    },
    {
      country: "Global & Other Countries",
      flag: "🌐",
      path: "/",
      description: "Available to English, Hindi, and multilingual speakers worldwide in Ireland, Singapore, Germany, Netherlands, New Zealand, and beyond.",
      cities: "Dublin, Singapore, Berlin, Amsterdam, Auckland",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
          <Globe className="w-3.5 h-3.5" />
          <span>Global Service Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal">
          Human Emotional Support Worldwide
        </h1>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
          Loneliness, heartbreak, and emotional stress know no borders. Haven connects people from major metropolitan centers across the globe with caring human listeners via private WhatsApp messaging.
        </p>
      </div>

      {/* Hub Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hubs.map((hub) => (
          <div
            key={hub.path}
            className="p-6 rounded-3xl bg-white/70 backdrop-blur-xs border border-soft-sage/40 shadow-xs flex flex-col justify-between hover:border-muted-green/60 transition-all space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl p-2 rounded-2xl bg-light-beige/70 border border-soft-sage/30">
                  {hub.flag}
                </span>
                <div>
                  <h2 className="font-serif font-bold text-lg text-dark-charcoal">
                    {hub.country}
                  </h2>
                  <p className="text-[11px] text-muted-green font-medium">
                    {hub.cities}
                  </p>
                </div>
              </div>
              <p className="text-xs text-dark-charcoal/75 leading-relaxed">
                {hub.description}
              </p>
            </div>

            <Link
              href={hub.path}
              className="inline-flex items-center justify-between px-4 py-2.5 rounded-full text-xs font-semibold bg-soft-sage/25 hover:bg-soft-sage/40 text-dark-charcoal transition-colors group"
            >
              <span>Explore {hub.country} Hub</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      {/* Global Guarantees */}
      <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
        <h3 className="font-serif font-bold text-lg text-dark-charcoal">
          How Our International Service Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-dark-charcoal/75 pt-2">
          <div className="space-y-1.5">
            <div className="font-semibold text-dark-charcoal flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-muted-green" />
              <span>Timezone Coordination</span>
            </div>
            <p>
              When you submit a request, you can select your local timezone. Our coordinators convert your slot and ensure a dedicated listener is ready.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="font-semibold text-dark-charcoal flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-muted-green" />
              <span>Universal Privacy</span>
            </div>
            <p>
              Your identity, phone number, and personal circumstances are never shared or sold. Conversations occur directly through encrypted WhatsApp chats.
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="font-semibold text-dark-charcoal flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-muted-green" />
              <span>Real Human Presence</span>
            </div>
            <p>
              No algorithms, no canned responses, and no AI chatbots. You speak with real, empathetic people whose sole focus is listening without judgment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
