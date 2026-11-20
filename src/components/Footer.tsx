"use client";

import React from "react";
import Link from "next/link";
import { Heart, Globe } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY } from "@/lib/constants";
import RegionSelector from "@/components/RegionSelector";

export default function Footer() {
  const supportTopics = [
    { label: "Loneliness Support", href: "/feeling-lonely" },
    { label: "Heartbreak Recovery", href: "/heartbreak-support" },
    { label: "Divorce Support", href: "/divorce-support" },
    { label: "Separation Support", href: "/separation-support" },
    { label: "Marriage Problems", href: "/marriage-problems" },
    { label: "Relationship Difficulties", href: "/relationship-support" },
    { label: "Family Problems", href: "/family-problems" },
    { label: "Grief & Loss Support", href: "/grief-support" },
    { label: "Overthinking & Stress", href: "/emotional-stress-support" },
    { label: "Feeling Misunderstood", href: "/feeling-misunderstood" },
    { label: "Someone to Talk To", href: "/someone-to-talk" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Global Locations", href: "/locations" },
    { label: "Support for Children", href: "/support-for-children" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-light-beige/70 border-t border-soft-sage/30 text-dark-charcoal pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-soft-sage/25 border border-soft-sage/40 flex items-center justify-center text-muted-green shadow-xs">
                <Heart className="w-4 h-4 fill-muted-green/20 text-muted-green" />
              </div>
              <span className="text-xl font-serif font-bold text-dark-charcoal">
                Haven
              </span>
            </Link>
            <p className="text-dark-charcoal/70 leading-relaxed max-w-sm">
              &ldquo;Sometimes, you just need someone to listen.&rdquo; A private, safe, and confidential human emotional support service for anyone navigating loneliness, separation, divorce, heartbreak, or grief.
            </p>
            <div className="text-[11px] text-dark-charcoal/70 pt-1 flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center shadow-xs">
                <WhatsAppIcon className="w-3 h-3" color="#FFFFFF" />
              </span>
              <span>Direct WhatsApp: <strong>{WHATSAPP_DISPLAY}</strong></span>
            </div>
          </div>

          {/* Emotional Support Topics (SEO Pages) */}
          <div>
            <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px] mb-3">
              Support Topics
            </h4>
            <ul className="space-y-2 text-dark-charcoal/70">
              {supportTopics.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Topics & Information */}
          <div>
            <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px] mb-3">
              Information &amp; Safety
            </h4>
            <ul className="space-y-2 text-dark-charcoal/70">
              {supportTopics.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-soft-sage/30" />
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors">
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
          <p>
            &copy; 2026 Haven Peer Support. All rights reserved. Non-clinical human emotional support.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-dark-charcoal">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-dark-charcoal">Terms of Service</Link>
            <Link href="/support-for-children" className="hover:text-dark-charcoal">For Children</Link>
            <Link href="/contact" className="hover:text-dark-charcoal">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
