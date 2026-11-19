"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
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
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white pl-4 pr-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold leading-tight">Talk on WhatsApp</span>
          <span className="text-[10px] text-white/90 leading-none">{WHATSAPP_DISPLAY}</span>
        </div>
      </a>
    </div>
  );
}
