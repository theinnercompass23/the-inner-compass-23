"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, UserCheck } from "lucide-react";

export default function TrustAndPrivacy() {
  return (
    <section className="py-16 bg-warm-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-light-beige shadow-sm space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
              Trust & Confidentiality
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
              A Protected, Private Sanctuary
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              We know that reaching out requires immense vulnerability. We treat your personal circumstances with complete dignity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-sage-50 text-muted-green flex items-center justify-center mx-auto sm:mx-0">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-dark-charcoal">
                Private & Secure
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Your contact details and submissions are never published publicly, sold, or shared with third parties.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-sage-50 text-muted-green flex items-center justify-center mx-auto sm:mx-0">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-dark-charcoal">
                Human Peer Support
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Our service is compassionate peer listening. We do not provide clinical psychiatric prescriptions, medical diagnoses, or formal therapy.
              </p>
            </div>

            <div className="space-y-2 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-sage-50 text-muted-green flex items-center justify-center mx-auto sm:mx-0">
                <EyeOff className="w-4 h-4" />
              </div>
              <h3 className="font-serif font-bold text-sm text-dark-charcoal">
                Consent Driven
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We only communicate via WhatsApp based on your explicit request, and you can stop conversations at any time.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-light-beige text-center text-xs text-charcoal-subtle">
            Read our full commitments in our{" "}
            <Link href="/privacy" className="underline text-dark-charcoal font-medium">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline text-dark-charcoal font-medium">
              Terms of Service
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  );
}
