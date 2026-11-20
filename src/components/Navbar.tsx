"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Menu, X, ArrowRight } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";
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

  // Suggested clean navigation items
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Countries", href: "/countries" },
    { label: "Support Topics", href: "/#categories-section" },
    { label: "Articles", href: "/#articles-section" },
    { label: "Video Stories", href: "/video-stories" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-warm-white/95 backdrop-blur-md shadow-xs border-b border-soft-sage/30"
          : "bg-warm-white/80 backdrop-blur-xs border-b border-soft-sage/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-6">
        {/* Left: Clean Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Haven Home"
        >
          <div className="w-9 h-9 rounded-full bg-soft-sage/25 border border-soft-sage/40 flex items-center justify-center text-muted-green shadow-xs group-hover:scale-105 transition-transform">
            <Heart className="w-4.5 h-4.5 fill-muted-green/20 text-muted-green" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold text-dark-charcoal tracking-tight leading-none">
              Haven
            </span>
            <span className="text-[10px] uppercase tracking-wider text-dark-charcoal/60 font-medium mt-0.5">
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
                className={`text-xs font-semibold px-3.5 py-2 rounded-full transition-all ${
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

        {/* Right: Clean WhatsApp CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xs hover:shadow-md transition-all cursor-pointer"
            aria-label="Connect on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
            <span className="font-semibold">WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-full text-dark-charcoal hover:bg-soft-sage/20 transition-colors focus:outline-none"
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

          <div className="pt-3 border-t border-soft-sage/30">
            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xs transition-all w-full"
            >
              <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
              <span>Connect on WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
