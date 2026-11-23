"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, ArrowRight, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl, CALL_DISPLAY, buildDirectCallUrl } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean navigation items with dedicated distinct pages
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Countries", href: "/countries" },
    { label: "Support Topics", href: "/support-topics" },
    { label: "Articles", href: "/articles" },
    { label: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 w-full overflow-hidden ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-xs border-b border-soft-sage/30"
          : "bg-warm-white/90 backdrop-blur-md border-b border-soft-sage/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-2 sm:gap-6">
        {/* Left: Clean Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group shrink-0 min-w-0"
          aria-label="The Inner Compass 23 Home"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-soft-sage/40 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0 p-0.5 overflow-hidden">
            <Image
              src="/the-inner-compass-icon.png"
              alt="The Inner Compass 23 Logo"
              fill
              sizes="(max-width: 640px) 36px, 40px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-base sm:text-xl font-serif font-bold text-dark-charcoal tracking-tight leading-none truncate">
              The Inner Compass 23
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-dark-charcoal/60 font-medium mt-0.5 truncate">
              Human Emotional Support
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full transition-all ${
                  active
                    ? "bg-muted-green text-white shadow-xs"
                    : "text-dark-charcoal/75 hover:text-dark-charcoal hover:bg-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Call CTA + WhatsApp CTA + Highlighted Contact CTA (Both Phone & Laptop) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Laptop Mode: Direct Call Button */}
          <a
            href={buildDirectCallUrl()}
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs font-semibold bg-white hover:bg-warm-white text-dark-charcoal border border-soft-sage/70 hover:border-muted-green shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            aria-label="Direct Phone Call"
            title={`Direct Phone Call: ${CALL_DISPLAY}`}
          >
            <Phone className="w-3.5 h-3.5 text-muted-green shrink-0" />
            <span className="font-semibold text-xs">Call Us</span>
          </a>

          {/* Laptop Mode: WhatsApp CTA */}
          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xs hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            aria-label="Connect on WhatsApp"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" color="#FFFFFF" />
            <span className="font-semibold text-xs">Chat on WhatsApp</span>
          </a>

          {/* Mobile Only: Quick Call Icon Button */}
          <a
            href={buildDirectCallUrl()}
            aria-label="Direct Call"
            title={`Direct Call: ${CALL_DISPLAY}`}
            className="lg:hidden w-8 h-8 rounded-full bg-soft-sage/30 hover:bg-soft-sage/60 text-dark-charcoal border border-soft-sage/50 flex items-center justify-center shadow-xs shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-muted-green" />
          </a>

          {/* Contact Button - Highlighted prominently in BOTH Phone and Laptop view! */}
          <Link
            href="/contact"
            className={`inline-flex items-center justify-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap shadow-xs hover:shadow-md ${
              pathname === "/contact"
                ? "bg-black text-white ring-2 ring-muted-green"
                : "bg-dark-charcoal hover:bg-black text-white"
            }`}
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-1.5 sm:p-2 rounded-full text-dark-charcoal hover:bg-soft-sage/20 transition-colors focus:outline-none shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-soft-sage/30 bg-warm-white/98 backdrop-blur-xl px-4 py-5 shadow-lg space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-1 gap-1 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-colors ${
                  isActive(item.href)
                    ? "bg-muted-green text-white font-semibold"
                    : "text-dark-charcoal/80 hover:bg-white/80 hover:text-dark-charcoal"
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-40" />
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-soft-sage/30 space-y-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-dark-charcoal text-white shadow-xs transition-all w-full"
            >
              <span>Contact Us Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={buildDirectCallUrl()}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-semibold bg-white border border-soft-sage/60 text-dark-charcoal shadow-xs w-full"
              >
                <Phone className="w-3.5 h-3.5 text-muted-green" />
                <span>Call Us</span>
              </a>

              <a
                href={buildDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-semibold bg-[#25D366] text-white shadow-xs w-full"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" color="#FFFFFF" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
