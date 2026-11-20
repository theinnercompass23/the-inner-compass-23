"use client";

import React from "react";
import Link from "next/link";
import {
  Heart,
  HeartCrack,
  Clock,
  MessageCircle,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  Globe,
} from "lucide-react";

interface CityProgrammaticLinksProps {
  cityName: string;
  countryName: string;
  countrySlug: string;
}

export default function CityProgrammaticLinks({
  cityName,
  countryName,
  countrySlug,
}: CityProgrammaticLinksProps) {
  const issues = [
    {
      title: `${cityName} Loneliness & Companionship`,
      href: "/feeling-lonely",
      targetQuery: `feeling lonely in ${cityName.toLowerCase()} where to talk to someone online`,
      desc: `Overcome urban isolation, living alone in ${cityName}, and feeling disconnected in a crowded city.`,
      icon: Heart,
      badge: "Loneliness Help",
    },
    {
      title: `${cityName} Divorce & Separation Support`,
      href: "/divorce-support",
      targetQuery: `affordable divorce emotional support counselor in ${cityName.toLowerCase()}`,
      desc: `Survive difficult weekends alone after divorce, custody stress, and heartbreak without insurance paperwork.`,
      icon: HeartCrack,
      badge: "Divorce Support",
    },
    {
      title: `${cityName} Breakup & Heartbreak Recovery`,
      href: "/heartbreak-support",
      targetQuery: `confidential breakup support chat for ${cityName.toLowerCase()} residents`,
      desc: `Compassionate sounding board for moving forward after a relationship ends, betrayal, and quiet grief.`,
      icon: Users,
      badge: "Breakup Help",
    },
    {
      title: `${cityName} 3 AM Late-Night Venting`,
      href: "/overthinking-support",
      targetQuery: `who can i call or chat with at 3am when feeling depressed in ${cityName.toLowerCase()}`,
      desc: `Immediate confidential ear for racing thoughts, midnight insomnia, and emotional overwhelm.`,
      icon: Clock,
      badge: "24/7 Late-Night",
    },
    {
      title: `${cityName} Anonymous Online Active Listener`,
      href: "/someone-to-talk",
      targetQuery: `talk to a trained listener online instead of a therapist in ${cityName.toLowerCase()}`,
      desc: `Safe space to vent to a real human listener using a temporary nickname—no clinical checklists.`,
      icon: MessageCircle,
      badge: "Active Listening",
    },
    {
      title: `${cityName} Marriage & Family Struggles`,
      href: "/marriage-problems",
      targetQuery: `confidential relationship and marriage venting in ${cityName.toLowerCase()}`,
      desc: `Patient, judgment-free listening space to process marital friction, domestic stress, and silent tension.`,
      icon: Compass,
      badge: "Relationship Care",
    },
  ];

  return (
    <section className="py-12 border-t border-soft-sage/30 bg-warm-white/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Globe className="w-3.5 h-3.5" />
            <span>Targeted Support Pathways in {cityName}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Specialized Emotional Support Services in {cityName}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-2xl">
            Explore dedicated listening support topics tailored for residents and workers navigating life transitions across {cityName}, {countryName}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {issues.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="p-5 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-soft-sage/20 text-muted-green">
                      {item.badge}
                    </span>
                    <Icon className="w-4 h-4 text-muted-green/70 group-hover:text-muted-green transition-colors" />
                  </div>
                  <h3 className="font-semibold text-sm text-dark-charcoal group-hover:text-muted-green transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-dark-charcoal/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-soft-sage/20 flex items-center justify-between text-[11px] text-muted-green font-semibold">
                  <span className="italic text-dark-charcoal/50 text-[10px] truncate max-w-[200px]">
                    &ldquo;{item.targetQuery}&rdquo;
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* National Hub Callout */}
        <div className="p-4 rounded-2xl bg-light-beige/50 border border-soft-sage/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-dark-charcoal/80">
            <ShieldCheck className="w-4 h-4 text-muted-green shrink-0" />
            <span>
              Looking for nationwide support across {countryName}? Visit our dedicated hub.
            </span>
          </div>
          <Link
            href={countrySlug === "united-states" ? "/us" : `/countries/${countrySlug}`}
            className="text-xs font-semibold text-muted-green hover:underline inline-flex items-center gap-1 shrink-0"
          >
            <span>View {countryName} Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
