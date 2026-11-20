"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Heart,
  Search,
  CheckCircle2,
} from "lucide-react";
import { CITIES_DATA } from "@/data/cities";
import { COUNTRIES_DATA } from "@/data/countries";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function LocationsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCities = CITIES_DATA.filter((city) => {
    const matchesCountry =
      selectedCountry === "all" || city.countrySlug === selectedCountry;
    const matchesSearch =
      city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      city.stateOrRegion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
          <MapPin className="w-3.5 h-3.5" />
          <span>Explore Cities Worldwide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal">
          City-Wise Human Emotional Support
        </h1>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
          From bustling financial hubs like New York and London to coastal cities like Sydney and Vancouver, find confidential, remote human listening support tailored to your local timezone and pace of life.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-3xl border border-soft-sage/40 shadow-xs space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 text-dark-charcoal/40 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by city, state, or country name..."
            className="w-full pl-11 pr-4 py-2.5 bg-warm-white/70 text-xs sm:text-sm rounded-full border border-soft-sage/50 focus:border-muted-green focus:outline-none transition-all shadow-xs"
          />
        </div>

        {/* Country Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedCountry("all")}
            className={`px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer border ${
              selectedCountry === "all"
                ? "bg-dark-charcoal text-warm-white border-dark-charcoal"
                : "bg-white text-dark-charcoal/70 border-soft-sage/40 hover:text-dark-charcoal"
            }`}
          >
            All Cities ({CITIES_DATA.length})
          </button>
          {COUNTRIES_DATA.map((c) => {
            const count = CITIES_DATA.filter((city) => city.countrySlug === c.slug).length;
            if (count === 0) return null;
            return (
              <button
                key={c.slug}
                onClick={() => setSelectedCountry(c.slug)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-colors cursor-pointer border whitespace-nowrap flex items-center gap-1.5 ${
                  selectedCountry === c.slug
                    ? "bg-dark-charcoal text-warm-white border-dark-charcoal"
                    : "bg-white text-dark-charcoal/70 border-soft-sage/40 hover:text-dark-charcoal"
                }`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
                <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCities.map((city) => (
          <Link
            key={`${city.countrySlug}-${city.slug}`}
            href={`/locations/${city.countrySlug}/${city.slug}`}
            className="p-6 rounded-3xl bg-white/75 hover:bg-white backdrop-blur-xs border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-xl transition-all group block space-y-3"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="font-serif font-bold text-lg text-dark-charcoal group-hover:text-muted-green transition-colors">
                  {city.name}
                </span>
                <p className="text-[11px] text-dark-charcoal/50">
                  {city.stateOrRegion}, {city.countryName}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded-full">
                Tier {city.tier}
              </span>
            </div>

            <p className="text-xs text-dark-charcoal/75 line-clamp-2 leading-relaxed">
              {city.intro}
            </p>

            <div className="pt-2 border-t border-soft-sage/20 flex items-center justify-between text-xs">
              <span className="text-[11px] text-dark-charcoal/60 flex items-center gap-1">
                <Clock className="w-3 h-3 text-muted-green" />
                <span className="truncate max-w-[140px]">{city.timezone.split("(")[0]}</span>
              </span>
              <span className="font-semibold text-muted-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View City</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filteredCities.length === 0 && (
        <div className="text-center py-12 p-8 rounded-3xl bg-white/70 border border-soft-sage/40 space-y-3">
          <p className="text-sm font-semibold text-dark-charcoal">
            No cities found matching &ldquo;{searchQuery}&rdquo;.
          </p>
          <p className="text-xs text-dark-charcoal/70">
            Our listening team provides online support worldwide. You can connect with us directly from any location.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCountry("all");
            }}
            className="px-4 py-2 rounded-full bg-dark-charcoal text-white text-xs font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Online Delivery Guarantee */}
      <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
        <h3 className="font-serif font-bold text-lg text-dark-charcoal">
          How Our City-Level Service Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-dark-charcoal/75 pt-2">
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-muted-green" />
              <span>100% Remote Delivery</span>
            </h4>
            <p>
              We do not operate physical clinics or walk-in offices in any city. All support is delivered online via private WhatsApp messaging.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-muted-green" />
              <span>Strict Privacy</span>
            </h4>
            <p>
              Your contact details are never logged in medical databases, shared with employers, or subjected to insurance audits.
            </p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-muted-green" />
              <span>Non-Clinical Peer Support</span>
            </h4>
            <p>
              We provide human listening for life&apos;s personal struggles—not psychiatric prescriptions or clinical diagnoses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
