"use client";

import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { COUNTRIES_DATA } from "@/data/countries";
import { Globe, MapPin, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";

export default function CountriesSection({
  title = "Explore Countries We Support",
  subtitle = "Compassionate, non-judgmental human listening tailored to life in major nations worldwide.",
  showViewAll = true,
}: {
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}) {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Globe className="w-3.5 h-3.5" />
            <span>Worldwide Peer Listening</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-xl">
            {subtitle}
          </p>
        </div>

        {showViewAll && (
          <Link
            href="/countries"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-green hover:text-dark-charcoal transition-colors group cursor-pointer"
          >
            <span>View All Countries &bull; 10 Hubs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      {/* Country Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {COUNTRIES_DATA.map((country) => {
          const totalCities =
            country.tier1CitySlugs.length +
            country.tier2CitySlugs.length +
            country.tier3CitySlugs.length;

          return (
            <div
              key={country.slug}
              className="rounded-3xl bg-white/80 backdrop-blur-xs border border-soft-sage/40 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              {/* Country Image & Flag Badge */}
              <div className="relative h-44 overflow-hidden">
                <SafeImage
                  src={country.heroImage}
                  alt={country.tagline}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-black/20 to-transparent" />
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-2xl p-1.5 rounded-2xl bg-white/80 backdrop-blur-md shadow-xs">
                    {country.flag}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-semibold text-white border border-white/20">
                    {country.currency} ({country.symbol})
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-lg leading-tight">
                    {country.name}
                  </h3>
                  <p className="text-[11px] text-white/80 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-soft-sage" />
                    <span>{country.timezones[0]}</span>
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-dark-charcoal/75 leading-relaxed line-clamp-3">
                  {country.intro}
                </p>

                {/* Cities preview */}
                <div className="pt-2 border-t border-soft-sage/20 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-dark-charcoal/60">
                    <span className="font-semibold text-dark-charcoal/80 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-muted-green" />
                      <span>{totalCities} Featured Cities</span>
                    </span>
                    <span className="text-muted-green font-medium">
                      Tier 1, 2 &amp; 3
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-1">
                    <Link
                      href={`/countries/${country.slug}`}
                      className="flex-1 text-center py-2 px-3 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Explore {country.name}
                    </Link>
                    <Link
                      href={`/countries/${country.slug}#cities-section`}
                      className="py-2 px-3.5 rounded-full bg-soft-sage/20 hover:bg-soft-sage/35 text-dark-charcoal text-xs font-medium transition-colors cursor-pointer"
                    >
                      Cities
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
