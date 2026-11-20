"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Smile, Menu, X, Globe, Video, Compass, MapPin, Info, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import RegionSelector from "@/components/RegionSelector";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Countries", href: "/countries" },
    { label: "Explore Cities", href: "/locations" },
    { label: "Support Topics", href: "/#categories-section" },
    { label: "Video Stories", href: "/video-stories" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-warm-white/90 backdrop-blur-md border-b border-soft-sage/30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Circular Glass Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
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

        {/* Center: 7 Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold px-3 py-2 rounded-full transition-colors ${
                  active
                    ? "bg-muted-green text-white shadow-xs"
                    : "text-dark-charcoal/80 hover:text-dark-charcoal hover:bg-white/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Medium screens (lg to xl) condensed links */}
        <nav className="hidden lg:flex xl:hidden items-center gap-1">
          <Link
            href="/countries"
            className="text-xs font-semibold text-dark-charcoal/80 hover:text-dark-charcoal px-2.5 py-1.5 rounded-full hover:bg-white/70 transition-colors"
          >
            Countries
          </Link>
          <Link
            href="/locations"
            className="text-xs font-semibold text-dark-charcoal/80 hover:text-dark-charcoal px-2.5 py-1.5 rounded-full hover:bg-white/70 transition-colors"
          >
            Cities
          </Link>
          <Link
            href="/video-stories"
            className="text-xs font-semibold text-dark-charcoal/80 hover:text-dark-charcoal px-2.5 py-1.5 rounded-full hover:bg-white/70 transition-colors"
          >
            Videos
          </Link>
          <Link
            href="/#categories-section"
            className="text-xs font-semibold text-dark-charcoal/80 hover:text-dark-charcoal px-2.5 py-1.5 rounded-full hover:bg-white/70 transition-colors"
          >
            Topics
          </Link>
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* For Children Pill */}
          <Link
            href="/support-for-children"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-muted-green hover:text-dark-charcoal bg-soft-sage/20 hover:bg-soft-sage/35 border border-soft-sage/40 px-3 py-1.5 rounded-full transition-colors"
          >
            <Smile className="w-3.5 h-3.5" />
            <span>For Children</span>
          </Link>

          {/* Global Region / Country Dropdown */}
          <RegionSelector />

          {/* Official WhatsApp CTA Button */}
          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
            <span className="font-semibold hidden sm:inline">WhatsApp</span>
            <span className="font-semibold hidden 2xl:inline">: {WHATSAPP_DISPLAY}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden p-2 rounded-full text-dark-charcoal hover:bg-soft-sage/20 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu with All 7 Links */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-soft-sage/30 bg-warm-white/98 backdrop-blur-xl px-4 py-5 shadow-lg space-y-4 animate-in slide-in-from-top-2 duration-200">
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
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-soft-sage/30 flex flex-col gap-2.5">
            <Link
              href="/support-for-children"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-soft-sage/25 text-xs font-semibold text-muted-green hover:bg-soft-sage/40 transition-colors"
            >
              <Smile className="w-4 h-4" />
              <span>Support for Children &amp; Guardians</span>
            </Link>

            <a
              href={buildDirectWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-sm transition-all"
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
