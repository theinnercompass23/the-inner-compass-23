"use client";

import React from "react";
import Link from "next/link";
import { Heart, Phone, ShieldCheck, Mail, MapPin } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { openCrisisModal } = useApp();

  return (
    <footer className="bg-warm-beige/80 border-t border-warm-sand text-charcoal pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-warm-sand/80">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-sage-500 flex items-center justify-center text-white">
                <Heart className="w-4 h-4 fill-white/90" />
              </div>
              <span className="text-2xl font-serif font-bold text-charcoal tracking-tight">
                Haven
              </span>
            </Link>

            <p className="text-sm text-charcoal-muted max-w-sm leading-relaxed">
              &ldquo;Nobody should feel like they have to face everything alone.&rdquo;
              A warm, compassionate sanctuary combining trained peer listeners, verified licensed therapists, empathetic AI companionship, and a safe anonymous community.
            </p>

            {/* India Emergency Highlights */}
            <div className="p-3.5 rounded-2xl bg-white border border-warm-sand space-y-1.5 max-w-sm">
              <div className="text-xs font-bold text-charcoal flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                Emergency Crisis Care (India)
              </div>
              <p className="text-[11px] text-charcoal-muted">
                National Mental Health Helpline:{" "}
                <a href="tel:14416" className="font-bold text-sage-700 underline">
                  Tele-MANAS (14416)
                </a>{" "}
                | Emergency:{" "}
                <a href="tel:112" className="font-bold text-coral-soft underline">
                  112
                </a>
              </p>
            </div>
          </div>

          {/* Quick links: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-muted">
              <li>
                <Link href="/dashboard/listeners" className="hover:text-charcoal transition-colors">
                  Talk to a Human Listener
                </Link>
              </li>
              <li>
                <Link href="/therapists" className="hover:text-charcoal transition-colors">
                  Find Licensed Therapists
                </Link>
              </li>
              <li>
                <Link href="/dashboard/ai-companion" className="hover:text-charcoal transition-colors">
                  AI Emotional Companion
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-charcoal transition-colors">
                  Anonymous Community
                </Link>
              </li>
              <li>
                <Link href="/dashboard/self-care" className="hover:text-charcoal transition-colors">
                  Meditation & Self-Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Community */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-muted">
              <li>
                <Link href="/how-it-works" className="hover:text-charcoal transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-charcoal transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link href="/crisis-support" className="hover:text-charcoal transition-colors text-coral-soft font-medium">
                  Crisis Support (14416)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-charcoal transition-colors">
                  User Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={openCrisisModal}
                  className="hover:text-charcoal transition-colors text-left"
                >
                  Emergency Resources
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-charcoal-muted">
              <li>
                <Link href="/privacy" className="hover:text-charcoal transition-colors">
                  Privacy Policy (DPDP)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-charcoal transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <span className="text-xs text-charcoal-subtle block pt-1">
                  Compliant with Indian digital health & mental healthcare privacy standards.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-8 text-xs text-charcoal-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="max-w-3xl leading-relaxed text-center md:text-left">
            <strong>Medical Disclaimer:</strong> Haven is an emotional wellness and support platform. Our peer listeners and AI companions provide empathetic support and are not licensed healthcare providers. If you are experiencing acute medical or psychiatric emergencies, please immediately contact Tele-MANAS (14416) or National Emergency Services (112).
          </p>
          <div className="text-center md:text-right whitespace-nowrap">
            © 2026 Haven. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
