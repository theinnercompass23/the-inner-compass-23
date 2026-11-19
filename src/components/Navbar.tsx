"use client";

import React from "react";
import Link from "next/link";
import { Heart, MessageCircle, ShieldAlert, Lock } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";

export default function Navbar() {
  return (
    <>
      {/* Top Crisis Emergency Strip */}
      <div className="bg-dark-charcoal text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shrink-0" />
            <span className="text-gray-300">National Mental Health Helpline (India):</span>
            <a
              href="tel:14416"
              className="font-bold underline text-white hover:text-soft-sage ml-1"
            >
              Tele-MANAS: 14416
            </a>
            <span className="hidden sm:inline text-gray-400">| Emergency: 112</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] text-gray-300 hidden md:inline">
              Private Human Conversations
            </span>
            <Link
              href="/admin"
              className="text-[10px] text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Admin Lead Console"
            >
              <Lock className="w-3 h-3" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-warm-white/95 backdrop-blur-md border-b border-light-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-2xl bg-muted-green flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-dark-charcoal tracking-tight">
                Haven
              </span>
              <span className="text-[10px] uppercase tracking-widest text-charcoal-subtle -mt-1 font-medium">
                Human Emotional Support
              </span>
            </div>
          </Link>

          {/* Quick Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#support-form"
              className="hidden sm:inline-flex text-xs font-semibold text-dark-charcoal hover:text-muted-green px-3 py-2 transition-colors"
            >
              Talk to Someone
            </a>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-muted-green hover:bg-sage-600 text-white shadow-sm transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
