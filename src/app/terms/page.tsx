"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal space-y-12">
      <div>
        <Link
          href="/"
          className="text-xs text-charcoal-subtle hover:text-charcoal inline-flex items-center gap-1.5 mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-100 text-sage-800 text-xs font-bold uppercase tracking-wider mb-2">
          <FileText className="w-3.5 h-3.5" />
          Terms of Service & Care
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
          Terms & Conditions of Service
        </h1>
        <p className="text-xs text-charcoal-muted mt-2">
          Effective date: February 2026 • Please read carefully before using Haven.
        </p>
      </div>

      <div className="space-y-8 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
        {/* Medical Non-Advice Disclaimer */}
        <div className="p-6 rounded-3xl bg-coral-light/60 border border-coral-soft/30 text-charcoal space-y-2">
          <div className="flex items-center gap-2 font-bold text-coral-soft">
            <ShieldAlert className="w-4 h-4" />
            <span>Crucial Medical & Emergency Disclaimer</span>
          </div>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Haven is not an emergency hospital or suicide crisis center. If you are experiencing thoughts of harming yourself or others, or are in acute psychiatric crisis, please call Tele-MANAS (14416) or National Emergency (112) immediately. Peer listeners and AI companions do not provide medical diagnosis or pharmacotherapy.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            1. Role Distinction: Listeners vs. Therapists
          </h2>
          <p>
            Users acknowledge that trained peer listeners are volunteers providing compassionate emotional presence and active listening. They are not licensed healthcare practitioners. Professional psychotherapy is provided exclusively by verified clinical psychologists and psychiatrists registered with RCI / NMC.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            2. Community Conduct & Zero-Tolerance Policy
          </h2>
          <p>
            Haven maintains zero tolerance for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Harassment, stalking, or hostile behavior towards any member, listener, or therapist.</li>
            <li>Posting unverified medical advice or promoting dangerous unproven cures.</li>
            <li>Sharing personal telephone numbers, home addresses, or financial solicitations.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            3. Booking, Cancellation & Rescheduling
          </h2>
          <p>
            Therapy appointments can be rescheduled or cancelled with full credit up to 4 hours prior to the booked time slot. Cancellations within 4 hours may be subject to the individual therapist&apos;s policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-serif font-bold text-charcoal">
            4. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable Indian law, Haven and its founders, listeners, and technological partners shall not be held liable for indirect, incidental, or consequential damages resulting from the use of peer chat or AI companionship.
          </p>
        </section>
      </div>
    </div>
  );
}
