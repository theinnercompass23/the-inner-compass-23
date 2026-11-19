"use client";

import React from "react";
import Link from "next/link";
import { X, Heart, MessageSquareHeart, Bot, Sparkles, Stethoscope, ArrowRight } from "lucide-react";
import BreathingExercise from "./BreathingExercise";

interface QuickSupportModalProps {
  cardType: "lonely" | "talk" | "overwhelmed" | "professional" | null;
  onClose: () => void;
}

export default function QuickSupportModal({ cardType, onClose }: QuickSupportModalProps) {
  if (!cardType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-warm-sand relative my-8 text-charcoal">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 1. I FEEL LONELY */}
        {cardType === "lonely" && (
          <div className="space-y-5 animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
              <Heart className="w-6 h-6 text-sage-600" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                We hear you. You are not alone.
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Loneliness is one of the most painful, silent feelings. But right now, on this platform, there are people who care and want to listen without judging you.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/dashboard/listeners"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-sage-50 hover:bg-sage-100 border border-sage-200 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <MessageSquareHeart className="w-5 h-5 text-sage-700" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal">
                      Talk to a Trained Human Listener
                    </div>
                    <div className="text-[11px] text-charcoal-muted">
                      Free, warm, confidential text conversation
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-sage-700 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/dashboard/ai-companion"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-warm-white hover:bg-warm-beige border border-warm-sand transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-sage-700" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal">
                      Talk with Haven AI Companion
                    </div>
                    <div className="text-[11px] text-charcoal-muted">
                      Instant 24/7 empathetic listener (Hindi + English)
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-charcoal-subtle group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/community?category=loneliness"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-warm-white hover:bg-warm-beige border border-warm-sand transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-sage-700" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-charcoal">
                      Read Anonymous Stories on Loneliness
                    </div>
                    <div className="text-[11px] text-charcoal-muted">
                      Find comfort in knowing others share this struggle
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-charcoal-subtle group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* 2. I NEED SOMEONE TO TALK TO */}
        {cardType === "talk" && (
          <div className="space-y-5 animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
              <MessageSquareHeart className="w-6 h-6 text-sage-600" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                Someone is ready to listen.
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Whether you had a crushing day at work, a fight with family, or simply need to speak words out loud, you don&apos;t have to keep it bottled up.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <Link
                href="/dashboard/listeners"
                onClick={onClose}
                className="block p-4 rounded-2xl bg-sage-600 text-white hover:bg-sage-700 shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-sage-100">
                    Recommended
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="text-sm font-bold">Connect with a Live Human Listener</div>
                <div className="text-xs text-sage-200 mt-0.5">
                  Real people trained in compassionate, non-judgmental listening.
                </div>
              </Link>

              <Link
                href="/dashboard/ai-companion"
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-2xl bg-warm-white hover:bg-warm-beige border border-warm-sand transition-all group"
              >
                <div>
                  <div className="text-xs font-bold text-charcoal">
                    Chat with Haven AI Companion
                  </div>
                  <div className="text-[11px] text-charcoal-muted">
                    No sign-in delay, instant empathetic response.
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-charcoal-subtle group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        )}

        {/* 3. I'M FEELING OVERWHELMED */}
        {cardType === "overwhelmed" && (
          <div className="space-y-4 animate-fade-in">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
                Grounding Session
              </span>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-1">
                Let&apos;s slow down your heart together.
              </h3>
              <p className="text-xs text-charcoal-muted">
                Follow the gentle circle below. Breathe in as it expands, hold, and breathe out as it softens.
              </p>
            </div>

            {/* Embedded interactive breathing */}
            <div className="bg-sage-50/60 rounded-3xl p-2 border border-sage-100">
              <BreathingExercise initialMode="1-min" />
            </div>

            <div className="text-center pt-2">
              <Link
                href="/dashboard/self-care"
                onClick={onClose}
                className="text-xs font-semibold text-sage-800 hover:underline"
              >
                Explore Full Guided Meditations & 4-7-8 Breathing →
              </Link>
            </div>
          </div>
        )}

        {/* 4. I WANT PROFESSIONAL HELP */}
        {cardType === "professional" && (
          <div className="space-y-5 animate-fade-in">
            <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
              <Stethoscope className="w-6 h-6 text-sage-600" />
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                Connect with Verified Mental Health Professionals
              </h3>
              <p className="text-sm text-charcoal-muted leading-relaxed">
                Browse licensed clinical psychologists, psychiatrists (MD), and certified counselling psychologists with RCI registration.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-warm-white border border-warm-sand space-y-2 text-xs text-charcoal">
              <div className="flex items-center gap-2 font-bold text-sage-900">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Next available appointments today & tomorrow
              </div>
              <p className="text-charcoal-muted text-[11px]">
                Specialized in anxiety, depression, trauma, relationships, and student burnout. Video sessions are private and end-to-end encrypted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/therapists"
                onClick={onClose}
                className="flex-1 text-center py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
              >
                Browse All Therapists
              </Link>
              <button
                onClick={onClose}
                className="px-5 py-3 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
