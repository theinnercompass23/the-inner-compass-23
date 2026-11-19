"use client";

import React from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const url = buildDirectWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with human emotional support team on WhatsApp"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white pl-3.5 pr-5 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 active:translate-y-0 border-2 border-white/60 backdrop-blur-xs"
      >
        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
        </span>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">Talk on WhatsApp</span>
          <span className="text-[10px] text-white/95 font-medium leading-none">{WHATSAPP_DISPLAY}</span>
        </div>
      </a>
    </div>
  );
}
