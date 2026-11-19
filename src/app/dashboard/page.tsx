"use client";

import React, { useState } from "react";
import Link from "next/link";
import DashboardLayout from "@/components/DashboardLayout";
import { useApp } from "@/context/AppContext";
import { MoodType } from "@/types";
import { formatCurrencyINR } from "@/lib/utils";
import confetti from "canvas-confetti";
import {
  Heart,
  MessageSquareHeart,
  Bot,
  Users,
  Sparkles,
  CalendarCheck,
  Video,
  Clock,
  ArrowRight,
  Smile,
  Meh,
  Frown,
  AlertCircle,
  BookOpen,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export default function DashboardOverviewPage() {
  const {
    currentUser,
    appointments,
    moods,
    logMood,
    journals,
    cancelAppointment,
    openCrisisModal,
  } = useApp();

  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);
  const [moodLoggedSuccess, setMoodLoggedSuccess] = useState(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const upcomingAppointments = appointments.filter(
    (a) => a.status === "confirmed"
  );

  const handleMoodSelect = (mood: MoodType) => {
    setSelectedMood(mood);
    logMood(mood, 3, ["Daily Check-in"]);
    setMoodLoggedSuccess(true);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.6 },
        colors: ["#A8BDA5", "#78947D", "#EEECE4"],
      });
    } catch {
      // ignore
    }
    setTimeout(() => setMoodLoggedSuccess(false), 4000);
  };

  const moodButtons: { label: string; mood: MoodType; emoji: string }[] = [
    { label: "Happy", mood: "happy", emoji: "😊" },
    { label: "Okay", mood: "okay", emoji: "🌿" },
    { label: "Sad", mood: "sad", emoji: "🌧️" },
    { label: "Anxious", mood: "anxious", emoji: "🌊" },
    { label: "Stressed", mood: "stressed", emoji: "⚡" },
    { label: "Lonely", mood: "lonely", emoji: "🕊️" },
    { label: "Overwhelmed", mood: "overwhelmed", emoji: "🌪️" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8 animate-fade-in">
        {/* 1. Welcome & Greeting */}
        <div className="bg-gradient-to-r from-sage-100 via-sage-50 to-warm-white p-6 sm:p-8 rounded-3xl border border-sage-200/80 shadow-sm relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
              Personal Sanctuary
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mt-1 mb-2">
              Welcome, {currentUser?.display_name || "Friend"}.
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              Take a slow, deep breath. No matter what happened today, you are safe here. Take everything one gentle moment at a time.
            </p>
          </div>

          <div className="absolute right-6 -bottom-6 w-44 h-44 bg-sage-200/50 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 2. Daily Mood Check-In Widget */}
        <div className="bg-white p-6 rounded-3xl border border-warm-sand shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-base font-serif font-bold text-charcoal">
                How are you feeling right now?
              </h2>
              <p className="text-xs text-charcoal-muted">
                Track your emotional pulse. Completely private and never shared.
              </p>
            </div>
            {moodLoggedSuccess && (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-800 bg-sage-100 px-3 py-1 rounded-full animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-700" />
                Mood recorded gently
              </span>
            )}
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-2.5">
            {moodButtons.map((item) => {
              const isChosen = selectedMood === item.mood;
              return (
                <button
                  key={item.mood}
                  onClick={() => handleMoodSelect(item.mood)}
                  className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all border ${
                    isChosen
                      ? "bg-sage-600 text-white border-sage-600 shadow-sm scale-105"
                      : "bg-warm-white hover:bg-sage-50 text-charcoal border-warm-sand/80 hover:border-sage-300"
                  }`}
                >
                  <span className="text-2xl mb-1">{item.emoji}</span>
                  <span className="text-[11px] font-semibold">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Quick Support Shortcuts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/dashboard/listeners"
            className="p-5 rounded-3xl bg-white border border-warm-sand hover:border-sage-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <MessageSquareHeart className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-sm text-charcoal mb-0.5">
              Talk to Someone
            </h3>
            <p className="text-[11px] text-charcoal-muted">
              Connect with a live trained listener.
            </p>
          </Link>

          <Link
            href="/dashboard/ai-companion"
            className="p-5 rounded-3xl bg-white border border-warm-sand hover:border-sage-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Bot className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-sm text-charcoal mb-0.5">
              AI Companion
            </h3>
            <p className="text-[11px] text-charcoal-muted">
              24/7 empathetic chat (Hindi/English).
            </p>
          </Link>

          <Link
            href="/dashboard/self-care"
            className="p-5 rounded-3xl bg-white border border-warm-sand hover:border-sage-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-sm text-charcoal mb-0.5">
              1-Min Breathing
            </h3>
            <p className="text-[11px] text-charcoal-muted">
              Fast box breathing to center mind.
            </p>
          </Link>

          <Link
            href="/dashboard/self-care?tab=journal"
            className="p-5 rounded-3xl bg-white border border-warm-sand hover:border-sage-300 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-sage-700" />
            </div>
            <h3 className="font-serif font-bold text-sm text-charcoal mb-0.5">
              Daily Journal
            </h3>
            <p className="text-[11px] text-charcoal-muted">
              Release private thoughts securely.
            </p>
          </Link>
        </div>

        {/* 4. Two Column Layout: Upcoming Sessions & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Upcoming Appointments (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-serif font-bold text-charcoal">
                Upcoming Therapy Sessions
              </h2>
              <Link
                href="/dashboard/therapists"
                className="text-xs font-semibold text-sage-800 hover:underline"
              >
                + Book New Session
              </Link>
            </div>

            {upcomingAppointments.length > 0 ? (
              <div className="space-y-3">
                {upcomingAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="p-5 rounded-3xl bg-white border border-warm-sand shadow-sm space-y-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={apt.therapist_photo}
                          alt={apt.therapist_name}
                          className="w-12 h-12 rounded-2xl object-cover border border-warm-sand"
                        />
                        <div>
                          <h4 className="font-serif font-bold text-sm text-charcoal">
                            {apt.therapist_name}
                          </h4>
                          <p className="text-[11px] text-charcoal-muted">
                            {apt.therapist_credentials}
                          </p>
                          <div className="flex items-center gap-2 mt-1 text-xs text-sage-800 font-semibold">
                            <Clock className="w-3.5 h-3.5 text-sage-600" />
                            <span>
                              {apt.date} at {apt.time_slot}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                        Confirmed
                      </span>
                    </div>

                    {apt.notes && (
                      <div className="text-xs bg-warm-white p-3 rounded-xl border border-warm-sand/60 text-charcoal-muted">
                        <strong className="text-charcoal block mb-0.5">Focus:</strong>
                        {apt.notes}
                      </div>
                    )}

                    <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={() => cancelAppointment(apt.id)}
                        className="text-xs font-medium text-coral-soft hover:underline"
                      >
                        Cancel Appointment
                      </button>

                      <button
                        onClick={() => setActiveVideoModal(apt.meet_link)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                      >
                        <Video className="w-3.5 h-3.5" />
                        <span>Join Video Room</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-3xl bg-white border border-warm-sand text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sage-50 text-sage-700 flex items-center justify-center mx-auto">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-serif font-bold text-charcoal">
                  No upcoming sessions
                </h4>
                <p className="text-xs text-charcoal-muted max-w-xs mx-auto leading-relaxed">
                  Booking regular sessions helps establish continuity and long-term emotional resilience.
                </p>
                <Link
                  href="/dashboard/therapists"
                  className="inline-block px-5 py-2 rounded-full text-xs font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors"
                >
                  Browse Verified Therapists
                </Link>
              </div>
            )}
          </div>

          {/* Right Column: Private Journals & Self-Care Resources (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-serif font-bold text-charcoal">
                Recent Journal Reflections
              </h2>
              <Link
                href="/dashboard/self-care?tab=journal"
                className="text-xs font-semibold text-sage-800 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-3">
              {journals.slice(0, 2).map((j) => (
                <div
                  key={j.id}
                  className="p-4 rounded-3xl bg-white border border-warm-sand shadow-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-charcoal truncate">
                      {j.title}
                    </h4>
                    <span className="text-[10px] text-charcoal-subtle">
                      {j.created_at.split("T")[0]}
                    </span>
                  </div>
                  <p className="text-xs text-charcoal-muted line-clamp-2 leading-relaxed">
                    {j.content}
                  </p>
                </div>
              ))}

              {/* Recommended Gentle Audio Reading Card */}
              <div className="p-5 rounded-3xl bg-sage-50 border border-sage-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sage-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sage-900">
                    Recommended Reading
                  </span>
                </div>
                <h4 className="text-sm font-serif font-bold text-charcoal">
                  Navigating Emotional Overwhelm When Living Away From Home
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  Moving cities in India often brings sudden isolation. Read 5 grounding techniques from Dr. Ananya Sharma.
                </p>
                <Link
                  href="/community?category=loneliness"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sage-800 hover:text-sage-900"
                >
                  <span>Read full reflection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Video Session Modal Simulation */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-warm-sand text-charcoal text-center relative">
              <div className="w-16 h-16 rounded-3xl bg-sage-100 text-sage-800 flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                Secure Video Therapy Room
              </h3>
              <p className="text-xs text-charcoal-muted max-w-sm mx-auto mb-6 leading-relaxed">
                Your private session room is prepared. Ensure your microphone and camera are connected. All sessions are peer-to-peer encrypted.
              </p>

              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 text-xs font-mono text-charcoal-muted mb-6 truncate">
                {activeVideoModal}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                <button
                  onClick={() => alert("Connecting to encrypted video stream... Session active.")}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white transition-all shadow-sm"
                >
                  Enter Room Now
                </button>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
