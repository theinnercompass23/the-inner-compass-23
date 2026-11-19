"use client";

import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export default function FinalWhatsAppCta() {
  const whatsappUrl = buildDirectWhatsAppUrl();

  return (
    <section className="py-16 sm:py-20 bg-dark-charcoal text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-soft-sage">
          <MessageCircle className="w-3.5 h-3.5 fill-soft-sage" />
          <span>Real Human Support On WhatsApp</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
          You Don&apos;t Have to Figure Everything Out Alone.
        </h2>

        <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
          If you are sitting in silence right now with a heavy heart, take one small step. Message our team directly and someone will be there to listen.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
          </a>

          <a
            href="#support-form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
          >
            <span>Fill Request Form</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
