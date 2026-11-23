"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ArrowLeft } from "lucide-react";
import { WHATSAPP_DISPLAY } from "@/lib/constants";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-dark-charcoal space-y-10">
      <div>
        <Link
          href="/"
          className="text-xs text-charcoal-subtle hover:text-dark-charcoal inline-flex items-center gap-1.5 mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-50 text-muted-green text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          Privacy & Trust Commitment
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal">
          Privacy Policy
        </h1>
        <p className="text-xs text-charcoal-muted mt-2">
          Effective date: February 2026 • Designed for emotional safety and confidentiality.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            1. Nature of Our Emotional Support Service
          </h2>
          <p>
            The Inner Compass 23 provides human emotional support and peer listening. We are not a hospital, clinical medical practice, or formal psychiatric facility. When you contact us, you connect with caring human listeners who offer empathy and a listening ear.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            2. How We Collect and Use Your Information
          </h2>
          <p>
            When you submit our support request form, we collect your Full Name, WhatsApp Mobile Number, Email Address, selected support categories, and any optional message you choose to provide.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>We use this information exclusively to communicate with you regarding your support request via WhatsApp ({WHATSAPP_DISPLAY}).</li>
            <li>We never publicly display your submitted details.</li>
            <li>We never sell, rent, or share your contact information with advertisers or marketing brokers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            3. Explicit Consent
          </h2>
          <p>
            Before initiating a connection, we obtain your explicit consent via our consent checkbox. You have full control over the conversation and may discontinue WhatsApp messaging at any time by simply letting us know.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            4. Service Scope &amp; Boundaries
          </h2>
          <p>
            The Inner Compass 23 provides empathetic non-clinical peer listening and emotional presence. We do not provide clinical psychiatric therapy, medical diagnoses, psychological treatment, or medical emergency services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            5. Data Access & Deletion Requests
          </h2>
          <p>
            You have the right to request deletion of your contact information from our administrative records at any time. Simply send a message to our WhatsApp support ({WHATSAPP_DISPLAY}) requesting data removal, and our administrators will promptly erase your record.
          </p>
        </section>
      </div>
    </div>
  );
}
