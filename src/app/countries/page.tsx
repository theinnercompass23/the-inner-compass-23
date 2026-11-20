import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CountriesSection from "@/components/CountriesSection";
import { Globe, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Explore Countries — Worldwide Human Emotional Support & Peer Listening | Haven",
  description:
    "Explore Haven's dedicated country hubs across the United States, United Kingdom, Canada, Australia, Germany, UAE, Singapore, Ireland, Netherlands, and New Zealand. Real people, real conversations, no judgment.",
  alternates: {
    canonical: "https://haven.care/countries",
  },
  openGraph: {
    title: "Explore Countries — Haven Human Emotional Support",
    description:
      "Find compassionate, non-judgmental human listening support tailored to your country and local timezone.",
    url: "https://haven.care/countries",
    type: "website",
  },
};

export default function CountriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
          <Globe className="w-3.5 h-3.5" />
          <span>Global Service Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal">
          Explore Countries We Support
        </h1>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
          Emotional struggles, loneliness, and heartbreak are universal, but your cultural and timezone context matters. Explore our dedicated country hubs designed to give you a comforting, accessible human ear wherever you are in the world.
        </p>
      </div>

      {/* Main Countries Grid */}
      <CountriesSection
        title="10 International Hubs"
        subtitle="Click any country below to explore city-level listening services, local timezones, and tailored support topics."
        showViewAll={false}
      />

      {/* International Guarantees */}
      <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
        <h3 className="font-serif font-bold text-lg text-dark-charcoal">
          Universal Care Across Every Country
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-dark-charcoal/75 pt-2">
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal">Local Timezone Alignment</h4>
            <p>Our team coordinates appointments according to your local time so you can talk comfortably without late-night confusion.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal">Friction-Free WhatsApp</h4>
            <p>No new apps to download or passwords to remember. You speak 1-on-1 in a private chat on WhatsApp.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal">Non-Clinical &amp; Safe</h4>
            <p>Zero clinical files, psychiatric diagnoses, or insurance claims. Just pure, respectful human listening.</p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-soft-sage/30 via-white to-light-beige/60 border border-soft-sage/40 text-center space-y-4 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
          Need to Talk to Someone Today?
        </h2>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
          Whatever country you are in, you are not alone. Message our listening team directly on WhatsApp.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
            <span>Chat on WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>
          <Link
            href="/#support-form"
            className="px-6 py-3 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book a Time Slot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
