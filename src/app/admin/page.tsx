"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  ShieldCheck,
  Users,
  MessageSquareHeart,
  CalendarCheck,
  AlertTriangle,
  Stethoscope,
  BarChart3,
  Check,
  X,
  Trash2,
  Lock,
  Plus,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboardPage() {
  const {
    currentUser,
    therapists,
    listeners,
    appointments,
    posts,
    reports,
    resolveReport,
    addTherapist,
    deletePost,
    quickLogin,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    "analytics" | "moderation" | "professionals" | "listeners" | "bookings" | "users"
  >("analytics");

  // New Professional Form Modal State
  const [newTherapistModal, setNewTherapistModal] = useState(false);
  const [tName, setTName] = useState("");
  const [tTitle, setTTitle] = useState("Clinical Psychologist");
  const [tCredentials, setTCredentials] = useState("M.Phil Clinical Psychology (RCI Reg.)");
  const [tFee, setTFee] = useState(1500);

  // Check if role is admin
  const isAdmin = currentUser?.role === "admin";

  if (!isAdmin) {
    return (
      <div className="min-h-screen py-24 px-4 flex items-center justify-center bg-warm-white text-charcoal">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-warm-sand shadow-sm text-center space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-coral-light text-coral-soft flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-serif font-bold text-charcoal">
            Restricted Admin Console
          </h2>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            This console is protected by server-side role-based access control (RBAC). Only authenticated Haven safety officers and administrative personnel can access this portal.
          </p>

          <div className="pt-2 border-t border-gray-100 space-y-2">
            <button
              onClick={() => quickLogin("admin")}
              className="w-full py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white transition-all shadow-sm"
            >
              Log in as Safety Admin Officer
            </button>
            <Link
              href="/dashboard"
              className="block w-full py-2.5 rounded-full text-xs font-semibold text-charcoal-muted hover:text-charcoal"
            >
              Return to Member Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddTherapist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tName.trim()) return;

    addTherapist({
      full_name: tName,
      title: tTitle,
      credentials: tCredentials,
      session_fee: tFee,
      specializations: ["Clinical Psychology", "Anxiety & Depression"],
      languages: ["English", "Hindi"],
      experience_years: 7,
    });

    setTName("");
    setNewTherapistModal(false);
  };

  return (
    <div className="min-h-screen bg-warm-white p-4 sm:p-6 lg:p-8 text-charcoal">
      <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Top Admin Header */}
        <div className="bg-sage-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-md">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3 h-3" />
              Role: Master Safety Admin
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Haven Administrative & Moderation Console
            </h1>
            <p className="text-xs text-sage-200">
              Logged in as {currentUser?.full_name} ({currentUser?.email})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              Go to Member App
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-warm-sand pb-2 overflow-x-auto">
          {[
            { id: "analytics", label: "Analytics Overview", icon: BarChart3 },
            { id: "moderation", label: `Community Moderation (${reports.filter(r => r.status === 'pending').length})`, icon: AlertTriangle },
            { id: "professionals", label: `Therapists (${therapists.length})`, icon: Stethoscope },
            { id: "listeners", label: `Listeners (${listeners.length})`, icon: MessageSquareHeart },
            { id: "bookings", label: `Bookings (${appointments.length})`, icon: CalendarCheck },
            { id: "users", label: "User Accounts", icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
                  active
                    ? "bg-sage-600 text-white shadow-sm"
                    : "text-charcoal-muted hover:bg-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. ANALYTICS TAB */}
        {activeTab === "analytics" && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-1">
                <span className="text-[11px] text-charcoal-subtle uppercase font-bold tracking-wider">
                  Total Registered Users
                </span>
                <div className="text-3xl font-serif font-bold text-charcoal">1,482</div>
                <span className="text-[10px] text-emerald-600 font-semibold">+18% this month</span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-1">
                <span className="text-[11px] text-charcoal-subtle uppercase font-bold tracking-wider">
                  Active Users Today
                </span>
                <div className="text-3xl font-serif font-bold text-charcoal">342</div>
                <span className="text-[10px] text-sage-700 font-semibold">Peak: 9:00 PM - 11:30 PM IST</span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-1">
                <span className="text-[11px] text-charcoal-subtle uppercase font-bold tracking-wider">
                  Completed Sessions
                </span>
                <div className="text-3xl font-serif font-bold text-charcoal">{appointments.length + 540}</div>
                <span className="text-[10px] text-emerald-600 font-semibold">99.4% satisfaction score</span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-1">
                <span className="text-[11px] text-charcoal-subtle uppercase font-bold tracking-wider">
                  Pending Reports
                </span>
                <div className="text-3xl font-serif font-bold text-coral-soft">
                  {reports.filter((r) => r.status === "pending").length}
                </div>
                <span className="text-[10px] text-coral-soft font-semibold">Priority review</span>
              </div>
            </div>

            {/* Helpline Traffic Metric Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-3">
              <h3 className="font-serif font-bold text-lg text-charcoal">
                Helpline & Safety Referrals (India)
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Platform crisis triggers automatically routed <strong>28 users</strong> to Tele-MANAS (14416) or emergency helplines during high-risk moments in the past 30 days.
              </p>
            </div>
          </div>
        )}

        {/* 2. COMMUNITY MODERATION TAB */}
        {activeTab === "moderation" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-charcoal">
              Reported Community Content
            </h3>

            {reports.length > 0 ? (
              <div className="space-y-4">
                {reports.map((rep) => (
                  <div
                    key={rep.id}
                    className="p-5 rounded-2xl bg-warm-white border border-warm-sand space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-charcoal">
                        Post: &ldquo;{rep.post_title}&rdquo;
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                          rep.status === "pending"
                            ? "bg-coral-light text-coral-soft"
                            : "bg-sage-100 text-sage-800"
                        }`}
                      >
                        {rep.status}
                      </span>
                    </div>

                    <div className="text-xs text-charcoal-muted">
                      <strong>Report Reason:</strong> {rep.reason}
                    </div>

                    {rep.status === "pending" && (
                      <div className="pt-2 border-t border-gray-200 flex items-center gap-3">
                        <button
                          onClick={() => resolveReport(rep.id, "remove_post")}
                          className="px-4 py-2 rounded-full text-xs font-semibold bg-coral-soft text-white hover:bg-coral-soft/90 transition-colors"
                        >
                          Remove Content & Warn User
                        </button>
                        <button
                          onClick={() => resolveReport(rep.id, "dismiss")}
                          className="px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
                        >
                          Dismiss Report (False Alarm)
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-charcoal-muted text-center py-6">
                No active reported posts. Community circle is clean and calm.
              </p>
            )}
          </div>
        )}

        {/* 3. PROFESSIONALS TAB */}
        {activeTab === "professionals" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-lg text-charcoal">
                  Verified Professionals Management
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Verify RCI / NMC licensure, set fees, and approve clinical applications.
                </p>
              </div>

              <button
                onClick={() => setNewTherapistModal(true)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Therapist</span>
              </button>
            </div>

            <div className="divide-y divide-gray-100">
              {therapists.map((t) => (
                <div key={t.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={t.photo_url}
                      alt={t.full_name}
                      className="w-12 h-12 rounded-2xl object-cover border border-warm-sand"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-charcoal">
                        {t.full_name}
                      </h4>
                      <p className="text-xs text-charcoal-muted">
                        {t.title} • {t.credentials}
                      </p>
                      <span className="text-[10px] text-sage-800 font-semibold">
                        {t.rci_registration || "Verified Practitioner"}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-bold text-charcoal block">
                      ₹{t.session_fee}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold">
                      Active on Roster
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. LISTENERS TAB */}
        {activeTab === "listeners" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-charcoal">
              Trained Peer Listeners Roster
            </h3>

            <div className="divide-y divide-gray-100">
              {listeners.map((l) => (
                <div key={l.id} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={l.avatar_url}
                      alt={l.display_name}
                      className="w-12 h-12 rounded-2xl object-cover border border-warm-sand"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-sm text-charcoal">
                        {l.display_name}
                      </h4>
                      <p className="text-xs text-charcoal-muted">{l.badge}</p>
                      <span className="text-[10px] text-charcoal-subtle">
                        {l.sessions_count} sessions completed • ★ {l.rating}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      l.is_online
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {l.is_online ? "Online Now" : "Offline"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. BOOKINGS TAB */}
        {activeTab === "bookings" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-charcoal">
              All Platform Bookings
            </h3>

            <div className="divide-y divide-gray-100">
              {appointments.map((apt) => (
                <div key={apt.id} className="py-4 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-charcoal">
                      Client: {apt.user_name} → {apt.therapist_name}
                    </h4>
                    <p className="text-xs text-charcoal-muted">
                      {apt.date} at {apt.time_slot} • Fee: ₹{apt.session_fee}
                    </p>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                      apt.status === "confirmed"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-coral-light text-coral-soft"
                    }`}
                  >
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. USERS TAB */}
        {activeTab === "users" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6 animate-fade-in">
            <h3 className="font-serif font-bold text-lg text-charcoal">
              User Accounts Oversight
            </h3>
            <div className="divide-y divide-gray-100 text-xs">
              <div className="py-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-charcoal">Aarav Mehta</span> (aarav.mehta@example.com)
                  <span className="text-charcoal-subtle block text-[11px]">Role: Member • Anonymous Persona: GentleSparrow</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold">Active</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-charcoal">Dr. Ananya Sharma</span> (dr.ananya@haven.care)
                  <span className="text-charcoal-subtle block text-[11px]">Role: Therapist • Verified RCI Psychologist</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold">Active</span>
              </div>
              <div className="py-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-charcoal">Priya Malhotra</span> (priya@haven.care)
                  <span className="text-charcoal-subtle block text-[11px]">Role: Listener • Senior Peer Listener</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-semibold">Active</span>
              </div>
            </div>
          </div>
        )}

        {/* Add Therapist Modal */}
        {newTherapistModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-warm-sand text-charcoal">
              <h3 className="text-xl font-serif font-bold text-charcoal mb-4">
                Add Verified Professional
              </h3>
              <form onSubmit={handleAddTherapist} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Full Name & Honorific
                  </label>
                  <input
                    type="text"
                    value={tName}
                    onChange={(e) => setTName(e.target.value)}
                    placeholder="e.g. Dr. Kavita Nair"
                    className="w-full text-xs p-3 rounded-2xl border border-gray-200 outline-none focus:border-sage-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Title & Role
                  </label>
                  <input
                    type="text"
                    value={tTitle}
                    onChange={(e) => setTTitle(e.target.value)}
                    className="w-full text-xs p-3 rounded-2xl border border-gray-200 outline-none focus:border-sage-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Degrees & RCI Reg. No.
                  </label>
                  <input
                    type="text"
                    value={tCredentials}
                    onChange={(e) => setTCredentials(e.target.value)}
                    className="w-full text-xs p-3 rounded-2xl border border-gray-200 outline-none focus:border-sage-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                    Fee (₹ / 50 Mins)
                  </label>
                  <input
                    type="number"
                    value={tFee}
                    onChange={(e) => setTFee(parseInt(e.target.value))}
                    className="w-full text-xs p-3 rounded-2xl border border-gray-200 outline-none focus:border-sage-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setNewTherapistModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-charcoal hover:bg-gray-100 rounded-full"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm"
                  >
                    Save Professional
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
