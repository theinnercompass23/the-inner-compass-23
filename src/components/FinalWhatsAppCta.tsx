"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl, CALL_DISPLAY, buildDirectCallUrl } from "@/lib/constants";

export default function FinalWhatsAppCta() {
  const whatsappUrl = buildDirectWhatsAppUrl();
  const callUrl = buildDirectCallUrl();

  return (
    <section className="py-16 sm:py-24 bg-dark-charcoal text-white relative overflow-hidden">
      {/* Circular glass decorative accents */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-soft-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-soft-sage">
          <WhatsAppIcon className="w-4 h-4" color="#25D366" />
          <span>Real Human Support on WhatsApp</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2]">
          You Don&apos;t Have to Figure Everything Out Alone.
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
          If you are sitting in silence right now with a heavy heart, take one small step. Message our team directly and someone will be there to listen.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={callUrl}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <Phone className="w-4.5 h-4.5" />
            <span>Call: {CALL_DISPLAY}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer"
          >
            <span>Fill Request Form</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
