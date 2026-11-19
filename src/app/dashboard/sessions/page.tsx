"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useApp } from "@/context/AppContext";
import { formatCurrencyINR } from "@/lib/utils";
import Link from "next/link";
import {
  CalendarCheck,
  Video,
  Clock,
  CheckCircle2,
  XCircle,
  FileText,
  Calendar,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function MySessionsPage() {
  const { appointments, cancelAppointment, currentUser } = useApp();
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  const upcoming = appointments.filter((a) => a.status === "confirmed");
  const past = appointments.filter((a) => a.status !== "confirmed");

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in text-charcoal">
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
              Appointments & Care
            </span>
            <h1 className="text-2xl font-serif font-bold text-charcoal mt-1">
              My Therapy Sessions
            </h1>
            <p className="text-xs text-charcoal-muted mt-0.5">
              Manage your upcoming video appointments and review past consultation notes.
            </p>
          </div>

          <Link
            href="/dashboard/therapists"
            className="px-6 py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
          >
            + Book New Appointment
          </Link>
        </div>

        {/* Tabs: Upcoming vs Past */}
        <div className="flex items-center gap-2 border-b border-warm-sand pb-2">
          <button
            onClick={() => setTab("upcoming")}
            className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
              tab === "upcoming"
                ? "bg-sage-600 text-white shadow-sm"
                : "text-charcoal-muted hover:bg-white"
            }`}
          >
            Upcoming Sessions ({upcoming.length})
          </button>
          <button
            onClick={() => setTab("past")}
            className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all ${
              tab === "past"
                ? "bg-sage-600 text-white shadow-sm"
                : "text-charcoal-muted hover:bg-white"
            }`}
          >
            Past & Cancelled ({past.length})
          </button>
        </div>

        {/* Tab Content: Upcoming */}
        {tab === "upcoming" && (
          <div className="space-y-4">
            {upcoming.length > 0 ? (
              upcoming.map((apt) => (
                <div
                  key={apt.id}
                  className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={apt.therapist_photo}
                        alt={apt.therapist_name}
                        className="w-14 h-14 rounded-2xl object-cover border border-warm-sand"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-base text-charcoal">
                            {apt.therapist_name}
                          </h3>
                          <span className="px-2 py-0.2 rounded-full text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                            Confirmed
                          </span>
                        </div>
                        <p className="text-xs text-charcoal-muted">
                          {apt.therapist_credentials}
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-sage-800 mt-1">
                          <Clock className="w-3.5 h-3.5 text-sage-600" />
                          <span>
                            {apt.date} at {apt.time_slot}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right sm:self-center">
                      <span className="text-[10px] text-charcoal-subtle uppercase block">
                        Session Fee
                      </span>
                      <span className="text-base font-bold text-charcoal">
                        {formatCurrencyINR(apt.session_fee)}
                      </span>
                    </div>
                  </div>

                  {apt.notes && (
                    <div className="p-3 bg-warm-white rounded-xl border border-warm-sand text-xs text-charcoal-muted">
                      <strong className="text-charcoal block mb-0.5">Session Focus:</strong>
                      {apt.notes}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      onClick={() => cancelAppointment(apt.id)}
                      className="text-xs text-coral-soft hover:underline"
                    >
                      Cancel Appointment
                    </button>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveVideoModal(apt.meet_link)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                      >
                        <Video className="w-4 h-4" />
                        <span>Enter Video Consultation Room</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 bg-white rounded-3xl border border-warm-sand text-center space-y-3">
                <CalendarCheck className="w-12 h-12 text-sage-600 mx-auto" />
                <h3 className="font-serif font-bold text-base text-charcoal">
                  No upcoming therapy appointments
                </h3>
                <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
                  Take one small step towards emotional clarity. Connect with a verified licensed psychologist today.
                </p>
                <Link
                  href="/dashboard/therapists"
                  className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors"
                >
                  Browse Available Therapists
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Tab Content: Past */}
        {tab === "past" && (
          <div className="space-y-4">
            {past.length > 0 ? (
              past.map((apt) => (
                <div
                  key={apt.id}
                  className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-3 opacity-80"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-sm text-charcoal">
                        {apt.therapist_name}
                      </h4>
                      <p className="text-xs text-charcoal-muted">
                        {apt.date} at {apt.time_slot}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        apt.status === "completed"
                          ? "bg-sage-100 text-sage-800"
                          : "bg-coral-light text-coral-soft"
                      }`}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-8 bg-white rounded-3xl border border-warm-sand text-center text-xs text-charcoal-muted">
                No past sessions recorded yet.
              </p>
            )}
          </div>
        )}

        {/* Video Consultation Modal Simulation */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-warm-sand text-charcoal text-center relative">
              <div className="w-16 h-16 rounded-3xl bg-sage-100 text-sage-800 flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-sage-700" />
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                Secure Video Room Ready
              </h3>
              <p className="text-xs text-charcoal-muted mb-6 leading-relaxed">
                You are connecting to an encrypted clinical consultation room. Everything said between you and your therapist is protected under medical confidentiality.
              </p>

              <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200 text-xs font-mono text-charcoal-muted mb-6 truncate">
                {activeVideoModal}
              </div>

              <div className="flex items-center gap-3 justify-center">
                <button
                  onClick={() => alert("Connecting to secure stream... Consultation in progress.")}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                >
                  Join Now
                </button>
                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
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
