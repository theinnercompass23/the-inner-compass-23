"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Download, Trash2, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal space-y-12">
      {/* Header */}
      <div>
        <Link
          href="/"
          className="text-xs text-charcoal-subtle hover:text-charcoal inline-flex items-center gap-1.5 mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          DPDP Act (India) Compliant
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
          Privacy Policy & Mental Health Data Safeguards
        </h1>
        <p className="text-xs text-charcoal-muted mt-2">
          Last revised: February 2026 • Designed for complete patient dignity and confidentiality.
        </p>
      </div>

      {/* Content blocks */}
      <div className="space-y-8 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            1. Our Foundational Privacy Pledge
          </h2>
          <p>
            At Haven, we recognize that emotional vulnerability and mental wellness information require the highest standard of protection. We do not sell your data to advertisers, health insurers, or third-party brokers under any circumstances.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            2. Confidentiality of Private Journals & Chats
          </h2>
          <p>
            Your private journal reflections, mood logs, and 1-on-1 conversations with trained listeners and therapists are protected by Row Level Security (RLS) in PostgreSQL. No other community member or unauthorized staff can access your private vault.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            3. Anonymous Community Persona
          </h2>
          <p>
            When participating in the anonymous community feed, your real email, phone number, and legal identity are never visible. You are assigned a randomly generated nature handle. Our moderation filters prevent users from accidentally posting personal phone numbers or contact details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            4. Emergency Safety & Duty of Care Disclosures
          </h2>
          <p>
            In rare cases where an imminent threat to human life or self-harm is detected, our platform provides prominent emergency links to Tele-MANAS (14416) and National Emergency Services (112). We do not conduct surreptitious tracking.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            5. Your Rights Under India&apos;s DPDP Act
          </h2>
          <p>
            In compliance with the Digital Personal Data Protection Act, you have the right to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access and download a full JSON copy of all your personal data at any time via your Profile page.</li>
            <li>Request instantaneous permanent deletion of your account and all associated journals.</li>
            <li>Revoke consent for notification processing at any time in Settings.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            6. Contact Our Data Protection Officer
          </h2>
          <p>
            For privacy inquiries or grievance redressal, contact our Safety & Privacy Officer at:{" "}
            <strong className="text-charcoal">privacy@haven.care</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
