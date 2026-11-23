"use client";

import React from "react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { buildDirectWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const whatsappUrl = buildDirectWhatsAppUrl("Hello, I would like to connect on WhatsApp.");

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect on WhatsApp"
        title="Chat on WhatsApp: +91 8810381949"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/80 cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 shrink-0" color="#FFFFFF" />
      </a>
    </div>
  );
}
