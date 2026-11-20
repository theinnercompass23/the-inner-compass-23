"use client";

import React from "react";
import Link from "next/link";
import { Heart, Smile } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-warm-white/85 backdrop-blur-md border-b border-soft-sage/30 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Circular Glass Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-soft-sage/25 border border-soft-sage/40 flex items-center justify-center text-muted-green shadow-xs group-hover:scale-105 transition-transform">
            <Heart className="w-5 h-5 fill-muted-green/20 text-muted-green" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-dark-charcoal tracking-tight">
              Haven
            </span>
            <span className="text-[10px] uppercase tracking-widest text-dark-charcoal/60 -mt-1 font-medium">
              Human Emotional Support
            </span>
          </div>
        </Link>

        {/* Nav Items & Direct WhatsApp Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/#categories-section"
            className="hidden md:inline-flex text-xs font-semibold text-dark-charcoal/80 hover:text-dark-charcoal px-3.5 py-2 rounded-full hover:bg-white/60 transition-colors"
          >
            Support Topics
          </Link>

          <Link
            href="/support-for-children"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-green hover:text-dark-charcoal px-3.5 py-2 rounded-full hover:bg-white/60 transition-colors"
          >
            <Smile className="w-3.5 h-3.5" />
            <span>For Children</span>
          </Link>

          <a
            href="#support-form"
            className="hidden sm:inline-flex text-xs font-semibold text-dark-charcoal hover:text-muted-green px-3.5 py-2 rounded-full hover:bg-white/60 transition-colors"
          >
            Talk to Someone
          </a>

          {/* Direct WhatsApp CTA Button (Official Brand Green & Logo) */}
          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
            <span className="font-semibold">WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
