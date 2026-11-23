import React from "react";
import Image from "next/image";
import { Compass, Quote } from "lucide-react";

interface InnerCompassSectionProps {
  className?: string;
}

export default function InnerCompassSection({ className = "" }: InnerCompassSectionProps) {
  return (
    <section className={`py-10 sm:py-14 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-white via-white to-light-beige/40 p-7 sm:p-10 border border-soft-sage/40 shadow-sm overflow-hidden space-y-6">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-soft-sage/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/25 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          {/* Badge & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/20 border border-soft-sage/35 text-xs font-semibold text-muted-green">
              <Compass className="w-4 h-4 text-muted-green" />
              <span>Spiritual Awakening &bull; Mindful Reflection</span>
            </div>
            <span className="text-[11px] font-serif uppercase tracking-widest text-dark-charcoal/50 font-medium">
              Inner Journey
            </span>
          </div>

          {/* Heading & Subtitle with Official Logo */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 relative z-10">
            {/* Highlighted Official Logo Emblem */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border-2 border-emerald-600/70 ring-4 ring-emerald-500/25 ring-offset-2 ring-offset-white shadow-md hover:shadow-xl hover:scale-105 transition-all overflow-hidden p-2 shrink-0">
              <Image
                src="/the-inner-compass-icon.png"
                alt="The Inner Compass 23"
                fill
                sizes="96px"
                className="object-contain p-1"
              />
            </div>
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-dark-charcoal tracking-tight">
                The Inner Compass 23
              </h2>
              <p className="text-base sm:text-lg font-serif italic text-muted-green font-medium">
                Awaken Within. Discover Beyond.
              </p>
            </div>
          </div>

          {/* Main Body Text */}
          <div className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed relative z-10">
            <p>
              The Inner Compass 23 is a journey of spiritual awakening, self-discovery, and deeper inner understanding. It is a space where you pause, look within, question your beliefs, explore your emotions, and reconnect with your authentic self. Through self-analysis, spiritual wisdom, mindful reflection, and conscious living, we help you understand not just who you are, but why you think, feel, and act the way you do. This journey is about breaking inner barriers, finding clarity, discovering your purpose, and awakening the wisdom that already exists within you.
            </p>
          </div>

          {/* Closing Quote */}
          <div className="pt-3 border-t border-soft-sage/25 relative z-10">
            <blockquote className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-warm-white/80 border border-soft-sage/30">
              <Quote className="w-5 h-5 text-muted-green shrink-0 mt-0.5 opacity-80" />
              <p className="font-serif italic text-sm sm:text-base text-dark-charcoal font-medium leading-relaxed">
                &ldquo;Because the most meaningful journey in life is the one that leads you back to yourself.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
