"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShieldAlert, Phone, Lock } from "lucide-react";
import { WHATSAPP_DISPLAY, TELE_MANAS_NUMBER, EMERGENCY_NUMBER } from "@/lib/constants";

export default function Footer() {
  const seoLinks = [
    { label: "Talk to Someone Online", href: "/talk-to-someone" },
    { label: "I Feel Lonely", href: "/feeling-lonely" },
    { label: "Divorce Support", href: "/divorce-support" },
    { label: "Separation Support", href: "/separation-support" },
    { label: "Breakup & Heartbreak", href: "/breakup-support" },
    { label: "Relationship Support", href: "/relationship-support" },
    { label: "Marriage Problems", href: "/marriage-problems" },
    { label: "Family Problems", href: "/family-problems" },
    { label: "Emotional Support India", href: "/emotional-support-india" },
    { label: "Someone to Listen", href: "/someone-to-listen" },
  ];

  return (
    <footer className="bg-light-beige/70 border-t border-light-beige text-dark-charcoal pt-14 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Crisis Emergency Strip */}
        <div className="p-4 rounded-2xl bg-white border border-light-beige flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-coral-soft shrink-0" />
            <span className="text-charcoal-muted">
              <strong>Need Immediate Emergency Crisis Support?</strong> India National Mental Health Helpline:{" "}
              <a href="tel:14416" className="font-bold underline text-muted-green">
                Tele-MANAS: {TELE_MANAS_NUMBER}
              </a>{" "}
              | Emergency:{" "}
              <a href="tel:112" className="font-bold underline text-coral-soft">
                {EMERGENCY_NUMBER}
              </a>
            </span>
          </div>

          <span className="text-[11px] text-charcoal-subtle whitespace-nowrap">
            Free • 24/7 • Government of India
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
            <p className="text-charcoal-muted leading-relaxed max-w-sm">
              &ldquo;Sometimes, you just need someone to listen.&rdquo; A private, safe, and confidential human emotional support service for anyone navigating loneliness, separation, divorce, heartbreak, or grief.
            </p>
            <div className="text-[11px] text-charcoal-subtle">
              WhatsApp Support: <strong>{WHATSAPP_DISPLAY}</strong>
            </div>
          </div>

          {/* Emotional Support Topics (SEO Pages) */}
          <div>
            <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px] mb-3">
              Explore Support
            </h4>
            <ul className="space-y-2 text-charcoal-muted">
              {seoLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Topics & Legal */}
          <div>
            <h4 className="font-serif font-bold text-dark-charcoal uppercase tracking-wider text-[11px] mb-3">
              Information & Privacy
            </h4>
            <ul className="space-y-2 text-charcoal-muted">
              {seoLinks.slice(5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-dark-charcoal transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200">
                <Link href="/privacy" className="hover:text-dark-charcoal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-dark-charcoal transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-dark-charcoal transition-colors text-charcoal-subtle">
                  Admin Console
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Medical Non-Advice Disclaimer */}
        <div className="pt-6 border-t border-light-beige text-[11px] text-charcoal-subtle leading-relaxed flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="max-w-2xl text-center sm:text-left">
            <strong>Medical Disclaimer:</strong> Haven provides human emotional support and peer listening. We do not provide clinical therapy, medical diagnosis, psychiatric care, or crisis intervention. If you are experiencing acute medical or suicidal emergencies, please immediately contact Tele-MANAS (14416) or National Emergency Services (112).
          </p>
          <div className="whitespace-nowrap text-center sm:text-right">
            © 2026 Haven. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
