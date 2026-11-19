"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, FileText } from "lucide-react";
import { TELE_MANAS_NUMBER, EMERGENCY_NUMBER, WHATSAPP_DISPLAY } from "@/lib/constants";

export default function TermsPage() {
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
          <FileText className="w-3.5 h-3.5" />
          Terms of Service
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal">
          Terms & Conditions
        </h1>
        <p className="text-xs text-charcoal-muted mt-2">
          Effective date: February 2026 • Please read carefully before using our service.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        {/* Medical Non-Advice Disclaimer */}
        <div className="p-6 rounded-3xl bg-coral-light/60 border border-coral-soft/30 text-dark-charcoal space-y-2">
          <div className="flex items-center gap-2 font-bold text-coral-soft">
            <ShieldAlert className="w-4 h-4" />
            <span>Non-Medical & Emergency Care Notice</span>
          </div>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Haven is an emotional support and human peer listening service. We are not a medical hospital, mental health clinic, or suicide crisis center. Conversations do not constitute medical, psychiatric, or psychological diagnosis or treatment. In urgent life-threatening crises, immediately call <strong>Tele-MANAS ({TELE_MANAS_NUMBER})</strong> or <strong>Emergency Services ({EMERGENCY_NUMBER})</strong>.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            1. Scope of Service
          </h2>
          <p>
            Haven facilitates private conversations between individuals seeking emotional support and our team of trained human peer listeners via WhatsApp ({WHATSAPP_DISPLAY}). Our role is to provide compassionate listening, human presence, and non-judgmental acceptance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            2. User Conduct
          </h2>
          <p>
            We expect respectful and sincere interactions. We do not tolerate abusive, sexually explicit, threatening, or harassing messages directed at our human support team. Inappropriate conduct may result in immediate termination of the WhatsApp conversation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            3. Confidentiality and Staff Review
          </h2>
          <p>
            While your conversations are private and treated with strict confidentiality, support requests and WhatsApp messages are handled by trained human operators to ensure safety, quality, and continuity of care.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-dark-charcoal">
            4. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permissible by applicable law in India, Haven and its peer listeners shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of or inability to use this listening service.
          </p>
        </section>
      </div>
    </div>
  );
}
