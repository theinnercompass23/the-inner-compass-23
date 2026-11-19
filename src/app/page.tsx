"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import QuickSupportModal from "@/components/QuickSupportModal";
import BookingModal from "@/components/BookingModal";
import { Therapist } from "@/types";
import { formatCurrencyINR } from "@/lib/utils";
import {
  Heart,
  MessageSquareHeart,
  Bot,
  Users,
  Sparkles,
  ShieldCheck,
  Calendar,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Clock,
  ThumbsUp,
  MessageCircle,
  HelpCircle,
  UserCheck,
  Stethoscope,
  Smile,
} from "lucide-react";

export default function HomePage() {
  const { therapists, posts, toggleLikePost, openCrisisModal } = useApp();
  const [quickSupportType, setQuickSupportType] = useState<
    "lonely" | "talk" | "overwhelmed" | "professional" | null
  >(null);
  const [bookingTherapist, setBookingTherapist] = useState<Therapist | null>(null);

  return (
    <div className="bg-warm-white">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
        {/* Soft background aura circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-warm-sand/40 rounded-full blur-2xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sage-100 border border-sage-200 text-xs font-semibold text-sage-800">
                <Heart className="w-3.5 h-3.5 fill-sage-700 text-sage-700" />
                <span>Safe • Judgment-Free • Always Confidential</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-charcoal tracking-tight leading-[1.15]">
                You Don&apos;t Have to Go Through It Alone.
              </h1>

              <p className="text-base sm:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Sometimes, all you need is someone who listens. Find compassionate support, connect with real people who understand, and take one small, gentle step towards feeling better.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/dashboard/listeners"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 group"
                >
                  <span>Talk to Someone</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href="#quick-support"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold bg-white hover:bg-warm-beige text-charcoal border border-warm-sand shadow-sm transition-all text-center"
                >
                  Explore Support
                </a>
              </div>

              {/* Trust Badge */}
              <div className="pt-4 flex items-center justify-center lg:justify-start gap-2 text-xs text-charcoal-subtle">
                <ShieldCheck className="w-4 h-4 text-sage-600" />
                <span className="font-serif italic text-charcoal-muted">
                  &ldquo;A safe space. No judgment. Just support.&rdquo;
                </span>
              </div>
            </div>

            {/* Right Illustration: Organic Calming Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
                {/* Outer Breathing Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-sage-300 animate-spin-slow opacity-60 pointer-events-none" />

                {/* Soft Glowing Circle */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-sage-200 via-sage-100 to-warm-sand/80 shadow-inner animate-breathing flex items-center justify-center" />

                {/* Center serene editorial graphic */}
                <div className="relative z-10 text-center p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-white shadow-xl max-w-xs animate-float">
                  <div className="w-14 h-14 rounded-2xl bg-sage-500 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-charcoal mb-1">
                    Pause & Breathe
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Unclench your jaw. Drop your shoulders. In this moment, you are safe.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-50 text-[11px] font-semibold text-sage-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Listeners Online Right Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK SUPPORT SECTION */}
      <section id="quick-support" className="py-16 bg-white border-y border-warm-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
              Immediate Care
            </span>
            <h2 className="text-3xl font-serif font-medium text-charcoal mt-1 mb-2">
              How are you feeling right now?
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Choose the card that resonates closest to where you are. We will guide you to gentle, immediate support.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: I Feel Lonely */}
            <button
              onClick={() => setQuickSupportType("lonely")}
              className="group p-6 rounded-3xl bg-warm-white hover:bg-sage-50 border border-warm-sand hover:border-sage-300 transition-all text-left shadow-sm hover:shadow-md flex flex-col justify-between h-56"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-200/60 text-sage-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Heart className="w-6 h-6 text-sage-700" />
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal mb-1 group-hover:text-sage-800 transition-colors">
                  I Feel Lonely
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  When the quiet feels heavy and you simply want to feel seen and heard by someone who cares.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-sage-700 group-hover:translate-x-1 transition-transform">
                <span>Find connection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 2: I Need Someone to Talk To */}
            <button
              onClick={() => setQuickSupportType("talk")}
              className="group p-6 rounded-3xl bg-warm-white hover:bg-sage-50 border border-warm-sand hover:border-sage-300 transition-all text-left shadow-sm hover:shadow-md flex flex-col justify-between h-56"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-200/60 text-sage-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <MessageSquareHeart className="w-6 h-6 text-sage-700" />
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal mb-1 group-hover:text-sage-800 transition-colors">
                  I Need Someone to Talk To
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Connect anonymously with a trained human peer listener or start a private conversational chat.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-sage-700 group-hover:translate-x-1 transition-transform">
                <span>Start conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 3: I'm Feeling Overwhelmed */}
            <button
              onClick={() => setQuickSupportType("overwhelmed")}
              className="group p-6 rounded-3xl bg-warm-white hover:bg-sage-50 border border-warm-sand hover:border-sage-300 transition-all text-left shadow-sm hover:shadow-md flex flex-col justify-between h-56"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-200/60 text-sage-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6 text-sage-700" />
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal mb-1 group-hover:text-sage-800 transition-colors">
                  I&apos;m Feeling Overwhelmed
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Fast grounding: 1-minute box breathing or paced diaphragmatic calming to regulate your nervous system.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-sage-700 group-hover:translate-x-1 transition-transform">
                <span>Begin breathing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>

            {/* Card 4: I Want Professional Help */}
            <button
              onClick={() => setQuickSupportType("professional")}
              className="group p-6 rounded-3xl bg-warm-white hover:bg-sage-50 border border-warm-sand hover:border-sage-300 transition-all text-left shadow-sm hover:shadow-md flex flex-col justify-between h-56"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sage-200/60 text-sage-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Stethoscope className="w-6 h-6 text-sage-700" />
                </div>
                <h3 className="text-lg font-serif font-bold text-charcoal mb-1 group-hover:text-sage-800 transition-colors">
                  I Want Professional Help
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Schedule a private 1-on-1 video therapy session with a verified licensed clinical psychologist or psychiatrist.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-semibold text-sage-700 group-hover:translate-x-1 transition-transform">
                <span>Browse therapists</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
            A Complete Sanctuary
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-medium text-charcoal mt-1 mb-3">
            Compassionate Care for Every Stage of Your Healing
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Whether you need a listening ear at 2:00 AM, clinical therapy for anxiety, or gentle daily meditation, Haven brings together four essential pillars of mental wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white rounded-3xl p-7 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                <MessageSquareHeart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Talk to a Human Listener
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Connect in real-time with trained empathetic peers who hold quiet, non-judgmental space for whatever you are feeling. Free, anonymous, and warm.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/dashboard/listeners"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 hover:text-sage-900 group"
              >
                <span>Browse Available Listeners</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-7 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Online Counselling
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                1-on-1 confidential therapy sessions with verified clinical psychologists (RCI registered) and psychiatrists (MD) specializing in CBT, trauma, and anxiety.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/therapists"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 hover:text-sage-900 group"
              >
                <span>Find Your Therapist</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-3xl p-7 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Bot className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                AI Emotional Companion
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                24/7 empathetic conversational check-in supporting English, Hindi, and Hinglish. Built with empathetic de-escalation and safety guardrails.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/dashboard/ai-companion"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 hover:text-sage-900 group"
              >
                <span>Chat with Companion</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-3xl p-7 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Anonymous Community
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                A judgment-free peer circle where you can share raw reflections, unburden your heart, and receive gentle words from people walking similar paths.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 hover:text-sage-900 group"
              >
                <span>Enter Community Circle</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-3xl p-7 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Group Support Sessions
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Facilitated peer circles centered around specific themes: Student Academic Stress, Dealing with Parental Expectations, Living Alone, and Workplace Burnout.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 hover:text-sage-900 group"
              >
                <span>Learn About Groups</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-3xl p-7 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sage-100 flex items-center justify-center text-sage-800">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal">
                Meditation & Self-Care
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Interactive box breathing, 4-7-8 anxiety relief animations, daily mood tracking charts, and an encrypted private journal to release your thoughts.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/dashboard/self-care"
                className="inline-flex items-center gap-2 text-xs font-semibold text-sage-700 hover:text-sage-900 group"
              >
                <span>Explore Self-Care Tools</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 bg-warm-beige/40 border-y border-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
              Simple & Gentle
            </span>
            <h2 className="text-3xl font-serif font-medium text-charcoal mt-1 mb-2">
              How Haven Works
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              We know that asking for help can feel overwhelming. We made connecting with support as quiet, frictionless, and respectful as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm text-center relative">
              <div className="w-12 h-12 rounded-full bg-sage-200 text-sage-900 font-serif font-bold text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                Tell us how you&apos;re feeling
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Take a quiet moment to identify your emotional state. Whether it is acute loneliness, burnout, or grief, you are valid.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm text-center relative">
              <div className="w-12 h-12 rounded-full bg-sage-200 text-sage-900 font-serif font-bold text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                Choose the support that feels right
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Select between a trained peer listener, an AI companion, self-care exercises, or a licensed professional psychologist.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-warm-sand shadow-sm text-center relative">
              <div className="w-12 h-12 rounded-full bg-sage-200 text-sage-900 font-serif font-bold text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                Connect and take one step at a time
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Chat at your own pace. Everything is private and safe. You never have to rush or explain yourself before you are ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROFESSIONAL SUPPORT SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
              Verified Practitioners
            </span>
            <h2 className="text-3xl font-serif font-medium text-charcoal mt-1">
              Verified Mental Health Professionals
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Experienced, licensed clinical psychologists and psychiatrists. Clearly verified credentials.
            </p>
          </div>
          <Link
            href="/therapists"
            className="text-xs font-bold text-sage-800 hover:text-sage-900 flex items-center gap-1.5 transition-colors"
          >
            <span>View All Therapists</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Therapists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {therapists.map((therapist) => (
            <div
              key={therapist.id}
              className="bg-white rounded-3xl p-5 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-4">
                  <img
                    src={therapist.photo_url}
                    alt={therapist.full_name}
                    className="w-full h-48 object-cover rounded-2xl border border-warm-sand"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-sage-900 shadow-sm flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-sage-600" />
                    Verified
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base text-charcoal mb-0.5">
                  {therapist.full_name}
                </h3>
                <p className="text-xs font-semibold text-sage-800 mb-1">
                  {therapist.title}
                </p>
                <p className="text-[11px] text-charcoal-muted mb-3 line-clamp-1">
                  {therapist.credentials}
                </p>

                {/* Badges: Languages & Specialization */}
                <div className="space-y-1.5 mb-4 text-[11px]">
                  <div className="text-charcoal-muted">
                    <strong className="text-charcoal">Focus:</strong>{" "}
                    {therapist.specializations.slice(0, 2).join(", ")}
                  </div>
                  <div className="text-charcoal-muted">
                    <strong className="text-charcoal">Languages:</strong>{" "}
                    {therapist.languages.join(", ")}
                  </div>
                  <div className="text-charcoal-muted flex items-center gap-1">
                    <Clock className="w-3 h-3 text-sage-600" />
                    <span>{therapist.next_available}</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Fee & Book Button */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-charcoal-subtle uppercase block">Session</span>
                  <span className="text-sm font-bold text-charcoal">
                    {formatCurrencyINR(therapist.session_fee)}
                  </span>
                </div>

                <button
                  onClick={() => setBookingTherapist(therapist)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. COMMUNITY PREVIEW */}
      <section className="py-20 bg-warm-beige/30 border-y border-warm-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
                Safe Peer Circle
              </span>
              <h2 className="text-3xl font-serif font-medium text-charcoal mt-1">
                From Our Anonymous Community
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
                Real reflections from people who found the courage to speak their truth without fear of judgment.
              </p>
            </div>
            <Link
              href="/community"
              className="text-xs font-bold text-sage-800 hover:text-sage-900 flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Community Feed</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{post.author_avatar}</span>
                      <span className="text-xs font-semibold text-charcoal">
                        {post.author_display_name}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sage-100 text-sage-800 uppercase">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-charcoal mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3 mb-4">
                    {post.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-charcoal-muted">
                  <button
                    onClick={() => toggleLikePost(post.id)}
                    className={`flex items-center gap-1.5 transition-colors ${
                      post.liked_by_user ? "text-sage-700 font-bold" : "hover:text-charcoal"
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.likes_count} support</span>
                  </button>

                  <Link
                    href={`/community?post=${post.id}`}
                    className="flex items-center gap-1.5 hover:text-charcoal transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{post.comments_count} replies</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Join CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold bg-white border border-warm-sand hover:bg-warm-beige text-charcoal shadow-sm transition-all"
            >
              <span>Share Your Story Anonymously</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CRISIS HELPLINE EMPHASIS BANNER */}
      <section className="py-14 bg-gradient-to-r from-sage-800 to-sage-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-sage-200">
                <ShieldAlert className="w-3.5 h-3.5 text-coral-light" />
                24/7 National Emergency & Crisis Care
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-medium">
                Are you or someone you care about in immediate crisis?
              </h2>
              <p className="text-xs sm:text-sm text-sage-200 max-w-2xl leading-relaxed">
                Please do not wait. Call India&apos;s toll-free Government Mental Health Helpline at{" "}
                <strong className="text-white">Tele-MANAS: 14416</strong> or Emergency Services at{" "}
                <strong className="text-white">112</strong> immediately.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:14416"
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-white text-sage-900 hover:bg-sage-100 shadow-md transition-all text-center"
              >
                Call Tele-MANAS (14416)
              </a>
              <button
                onClick={openCrisisModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all text-center"
              >
                View Safety Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <QuickSupportModal
        cardType={quickSupportType}
        onClose={() => setQuickSupportType(null)}
      />

      <BookingModal
        therapist={bookingTherapist}
        onClose={() => setBookingTherapist(null)}
      />
    </div>
  );
}
