"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShieldAlert, Lock } from "lucide-react";
import { WHATSAPP_DISPLAY, TELE_MANAS_NUMBER, EMERGENCY_NUMBER } from "@/lib/constants";

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
    { label: "Admin Console", href: "/admin" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-light-beige/70 border-t border-soft-sage/30 text-dark-charcoal pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Crisis Emergency Strip */}
        <div className="p-4 rounded-2xl bg-white border border-soft-sage/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
            <span className="text-dark-charcoal/80">
              <strong>Need Immediate Emergency Crisis Support?</strong> India National Mental Health Helpline:{" "}
              <a href="tel:14416" className="font-bold underline text-muted-green">
                Tele-MANAS: {TELE_MANAS_NUMBER}
              </a>{" "}
              | Emergency:{" "}
              <a href="tel:112" className="font-bold underline text-rose-600">
                {EMERGENCY_NUMBER}
              </a>
            </span>
          </div>

          <span className="text-[11px] text-dark-charcoal/55 whitespace-nowrap">
            Free &bull; 24/7 &bull; Government of India
          </span>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-muted-green flex items-center justify-center text-white">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <span className="text-xl font-serif font-bold text-dark-charcoal">
                Haven
              </span>
            </Link>
            <p className="text-dark-charcoal/70 leading-relaxed max-w-sm">
              &ldquo;Sometimes, you just need someone to listen.&rdquo; A private, safe, and confidential human emotional support service for anyone navigating loneliness, separation, divorce, heartbreak, or grief.
            </p>
            <div className="text-[11px] text-dark-charcoal/60 pt-1">
              Direct WhatsApp Support: <strong>{WHATSAPP_DISPLAY}</strong>
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
              More &amp; Legal
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

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-soft-sage/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-dark-charcoal/60">
          <p>
            &copy; 2026 Haven Peer Support. All rights reserved. Non-clinical emotional support.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-dark-charcoal">Privacy</Link>
            <Link href="/terms" className="hover:text-dark-charcoal">Terms</Link>
            <Link href="/contact" className="hover:text-dark-charcoal">Contact</Link>
            <Link href="/admin" className="hover:text-dark-charcoal">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
