"use client";

import React from "react";
import { useApp } from "@/context/AppContext";
import { Phone, ShieldAlert, X, Heart, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CrisisModal() {
  const { isCrisisModalOpen, closeCrisisModal, quickExit } = useApp();

  if (!isCrisisModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-coral-soft/20 relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="crisis-title"
      >
        {/* Soft background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-coral-light rounded-full blur-3xl -z-10 pointer-events-none" />

        {/* Top actions: Close and Quick Exit */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-light text-coral-soft text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            Immediate Safety & Crisis Care
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={quickExit}
              className="text-xs px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-charcoal font-medium transition-colors"
              title="Immediately redirects to Google for your privacy"
            >
              Quick Exit
            </button>
            <button
              onClick={closeCrisisModal}
              className="p-1 rounded-full text-charcoal-subtle hover:text-charcoal hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <h2 id="crisis-title" className="text-2xl font-serif font-medium text-charcoal mb-2">
          You don&apos;t have to carry this alone.
        </h2>
        <p className="text-sm text-charcoal-muted mb-6 leading-relaxed">
          If you or someone you know is in immediate danger, feeling overwhelmed, or experiencing thoughts of self-harm, please connect with a compassionate professional right now. Help is free, confidential, and available 24/7.
        </p>

        {/* Primary Helplines (India) */}
        <div className="space-y-3 mb-6">
          {/* Tele-MANAS */}
          <a
            href="tel:14416"
            className="flex items-center justify-between p-4 rounded-2xl bg-sage-50 border border-sage-200 hover:border-sage-400 hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-sage-300/40 flex items-center justify-center text-sage-800">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-charcoal flex items-center gap-2">
                  Tele-MANAS (India Helpline)
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sage-200 text-sage-800 uppercase">
                    Free 24/7
                  </span>
                </div>
                <div className="text-xs text-charcoal-muted">
                  Govt. of India National Mental Health Programme
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-base font-bold text-sage-800 tracking-wide">14416</span>
              <div className="text-[11px] text-sage-600 font-medium">Tap to call</div>
            </div>
          </a>

          {/* National Emergency Services */}
          <a
            href="tel:112"
            className="flex items-center justify-between p-4 rounded-2xl bg-coral-light/50 border border-coral-soft/30 hover:border-coral-soft hover:shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-coral-soft/20 flex items-center justify-center text-coral-soft">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-charcoal">
                  Emergency Services
                </div>
                <div className="text-xs text-charcoal-muted">
                  Police, Ambulance, Immediate Rescue
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-base font-bold text-coral-soft tracking-wide">112</span>
              <div className="text-[11px] text-coral-soft/80 font-medium">Tap to call</div>
            </div>
          </a>

          {/* Vandrevala Foundation */}
          <a
            href="tel:9999666555"
            className="flex items-center justify-between p-3.5 rounded-2xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gray-200/80 flex items-center justify-center text-charcoal">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-charcoal">
                  Vandrevala Foundation
                </div>
                <div className="text-xs text-charcoal-muted">
                  24/7 Mental Health Counselling
                </div>
              </div>
            </div>
            <span className="text-sm font-semibold text-charcoal">9999 666 555</span>
          </a>
        </div>

        {/* Grounding & Safety note */}
        <div className="bg-warm-white p-3.5 rounded-xl border border-warm-sand/60 mb-6 text-xs text-charcoal-muted leading-relaxed">
          <strong className="text-charcoal block mb-0.5">While you reach out:</strong>
          Slow down. Take three deep breaths. Put both feet flat on the floor. Look around and name 3 things you can see. You are here, you are breathing, and this agonizing moment will pass.
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <Link
            href="/crisis-support"
            onClick={closeCrisisModal}
            className="text-xs font-semibold text-sage-700 hover:text-sage-900 flex items-center gap-1.5 transition-colors"
          >
            View Full Crisis Safety Plan & International Directory
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <button
            onClick={closeCrisisModal}
            className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-charcoal text-xs font-semibold transition-colors"
          >
            I am safe for now
          </button>
        </div>
      </div>
    </div>
  );
}
