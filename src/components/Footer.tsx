"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Heart, ChevronDown } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import RegionSelector from "@/components/RegionSelector";

export default function Footer() {
  const pathname = usePathname();
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Dedicated children support page uses its own isolated SCOUT footer
  const isChildrenPage = pathname === "/support-for-children" || pathname === "/scout";
  if (isChildrenPage) {
    return null;
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const supportTopics = [
    { label: "Loneliness Support", href: "/feeling-lonely" },
    { label: "Heartbreak Recovery", href: "/heartbreak-support" },
    { label: "Divorce Support", href: "/divorce-support" },
    { label: "Separation Support", href: "/separation-support" },
    { label: "Marriage Problems", href: "/marriage-problems" },
    { label: "Relationship Difficulties", href: "/relationship-support" },
  ];

  const informationSafety = [
    { label: "Family Problems", href: "/family-problems" },
    { label: "Grief & Loss Support", href: "/grief-support" },
    { label: "Overthinking & Stress", href: "/overthinking-support" },
    { label: "Feeling Misunderstood", href: "/feeling-misunderstood" },
    { label: "Someone to Talk To", href: "/someone-to-talk" },
    { label: "Emotional Stress Relief", href: "/emotional-stress-support" },
  ];

  const pageLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Global Locations", href: "/locations" },
    { label: "Countries Directory", href: "/countries" },
    { label: "Support Topics Hub", href: "/support-topics" },
    { label: "Articles & Perspectives", href: "/articles" },
    { label: "SCOUT (Children Support)", href: "/support-for-children" },
    { label: "Spotify Podcast", href: "https://open.spotify.com/episode/3Ard2e43YuXqp0Vk4UXBs7" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-light-beige/70 border-t border-soft-sage/30 text-dark-charcoal pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xs">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full bg-white border-2 border-emerald-600/70 ring-2 ring-emerald-500/25 flex items-center justify-center shadow-xs overflow-hidden p-0.5 shrink-0">
                <Image
                  src="/the-inner-compass-icon.png"
                  alt="The Inner Compass 23"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-xl font-serif font-bold text-dark-charcoal">
                The Inner Compass 23
              </span>
            </Link>
            <p className="text-dark-charcoal/70 leading-relaxed max-w-sm">
              &ldquo;Sometimes, you just need someone to listen.&rdquo; A private, safe, and confidential human emotional support service for anyone navigating loneliness, separation, divorce, heartbreak, or grief.
            </p>
            <div className="pt-1">
              <a
                href="https://wa.me/918810381949"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-dark-charcoal/80 inline-flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center shadow-xs">
                  <WhatsAppIcon className="w-3 h-3" color="#FFFFFF" />
                </span>
                <span className="font-semibold">Chat with Us on WhatsApp</span>
              </a>
            </div>
            <div className="pt-2">
              <a
                href="https://open.spotify.com/episode/3Ard2e43YuXqp0Vk4UXBs7?si=jMSJUoP-SMuZIG14iqD5vQ&utm_source=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1DB954]/15 hover:bg-[#1DB954]/25 border border-[#1DB954]/30 text-[#127735] text-[11px] font-semibold transition-all cursor-pointer"
              >
                <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
                <span>Listen to The Inner Compass 23 on Spotify</span>
              </a>
            </div>
          </div>

          {/* Column 1: Support Topics (Collapsible Accordion on Mobile, Open on Desktop) */}
          <div className="border-b border-soft-sage/30 pb-3 md:border-b-0 md:pb-0">
            <button
              type="button"
              onClick={() => toggleSection("topics")}
              className="w-full flex items-center justify-between md:cursor-default focus:outline-none py-1 md:py-0"
              aria-expanded={openSection === "topics"}
            >
              <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px]">
                Support Topics
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-dark-charcoal/60 md:hidden transition-transform duration-200 ${
                  openSection === "topics" ? "rotate-180 text-muted-green" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-dark-charcoal/70 pt-2.5 md:pt-3 ${
                openSection === "topics" ? "block" : "hidden md:block"
              }`}
            >
              {supportTopics.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors block py-0.5 md:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Information & Safety (Collapsible Accordion on Mobile, Open on Desktop) */}
          <div className="border-b border-soft-sage/30 pb-3 md:border-b-0 md:pb-0">
            <button
              type="button"
              onClick={() => toggleSection("safety")}
              className="w-full flex items-center justify-between md:cursor-default focus:outline-none py-1 md:py-0"
              aria-expanded={openSection === "safety"}
            >
              <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px]">
                Information &amp; Safety
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-dark-charcoal/60 md:hidden transition-transform duration-200 ${
                  openSection === "safety" ? "rotate-180 text-muted-green" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-dark-charcoal/70 pt-2.5 md:pt-3 ${
                openSection === "safety" ? "block" : "hidden md:block"
              }`}
            >
              {informationSafety.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors block py-0.5 md:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Pages (Collapsible Accordion on Mobile, Open on Desktop) */}
          <div className="border-b border-soft-sage/30 pb-3 md:border-b-0 md:pb-0">
            <button
              type="button"
              onClick={() => toggleSection("pages")}
              className="w-full flex items-center justify-between md:cursor-default focus:outline-none py-1 md:py-0"
              aria-expanded={openSection === "pages"}
            >
              <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px]">
                Pages
              </h4>
              <ChevronDown
                className={`w-4 h-4 text-dark-charcoal/60 md:hidden transition-transform duration-200 ${
                  openSection === "pages" ? "rotate-180 text-muted-green" : ""
                }`}
              />
            </button>
            <ul
              className={`space-y-2 text-dark-charcoal/70 pt-2.5 md:pt-3 ${
                openSection === "pages" ? "block" : "hidden md:block"
              }`}
            >
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors block py-0.5 md:py-0">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* International Service Hubs Bar */}
        <div className="pt-6 border-t border-soft-sage/30">
          <RegionSelector variant="footer" />
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-soft-sage/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-dark-charcoal/60">
          <div className="space-y-1 text-center sm:text-left">
            <p>
              &copy; 2026 The Inner Compass 23. All rights reserved. Non-clinical human emotional support.
            </p>
            <p className="text-[10px] text-dark-charcoal/50">
              Created by{" "}
              <a
                href="https://codeorbit.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-dark-charcoal/80 hover:text-muted-green underline transition-colors"
              >
                codeorbit.cloud
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-dark-charcoal">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-dark-charcoal">Terms of Service</Link>
            <Link href="/support-for-children" className="hover:text-dark-charcoal">SCOUT (Children)</Link>
            <Link href="/contact" className="hover:text-dark-charcoal">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
