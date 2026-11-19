"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useApp } from "@/context/AppContext";
import {
  User,
  ShieldCheck,
  Mail,
  EyeOff,
  Download,
  Trash2,
  CheckCircle2,
  Languages,
  Phone,
} from "lucide-react";

export default function ProfilePage() {
  const { currentUser, updateProfile, exportUserData, deleteAccount } = useApp();

  const [displayName, setDisplayName] = useState(currentUser?.display_name || "");
  const [fullName, setFullName] = useState(currentUser?.full_name || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [preferredLang, setPreferredLang] = useState(
    currentUser?.preferred_language || "English"
  );
  const [isAnonymous, setIsAnonymous] = useState(
    currentUser?.is_anonymous ?? true
  );
  const [emergencyPhone, setEmergencyPhone] = useState(
    currentUser?.emergency_contact?.phone || "+91 98765 43210"
  );
  const [savedToast, setSavedToast] = useState(false);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      display_name: displayName,
      full_name: fullName,
      bio,
      preferred_language: preferredLang,
      is_anonymous: isAnonymous,
      emergency_contact: {
        name: "Emergency Contact",
        relationship: "Family",
        phone: emergencyPhone,
      },
    });
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in text-charcoal">
        {/* Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-sage-300 text-sage-900 font-serif font-bold text-2xl flex items-center justify-center shadow-inner">
              {currentUser?.display_name?.charAt(0).toUpperCase() || "A"}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-serif font-bold text-charcoal">
                  {currentUser?.full_name || "Aarav Mehta"}
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-sage-100 text-sage-800">
                  {currentUser?.role || "Member"}
                </span>
              </div>
              <p className="text-xs text-charcoal-muted">
                {currentUser?.email || "aarav.mehta@example.com"}
              </p>
            </div>
          </div>

          {savedToast && (
            <span className="text-xs font-bold text-sage-800 bg-sage-100 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sage-700" />
              Profile Saved
            </span>
          )}
        </div>

        {/* Profile Settings Form */}
        <form
          onSubmit={handleSave}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6"
        >
          <h2 className="text-base font-serif font-bold text-charcoal pb-2 border-b border-gray-100">
            Personal Information & Preferences
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Display Name (In Platform)
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Full Legal Name (For Consultations)
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              About You & Personal Intentions
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="A few words on what you hope to experience or heal on Haven..."
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Preferred Language
              </label>
              <select
                value={preferredLang}
                onChange={(e) => setPreferredLang(e.target.value)}
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 bg-white text-charcoal outline-none focus:border-sage-500"
              >
                <option value="English">English</option>
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="Bengali">Bengali (বাংলা)</option>
                <option value="Tamil">Tamil (தமிழ்)</option>
                <option value="Telugu">Telugu (తెలుగు)</option>
                <option value="Marathi">Marathi (मराठी)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Trusted Emergency Contact (India)
              </label>
              <input
                type="text"
                value={emergencyPhone}
                onChange={(e) => setEmergencyPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
              />
            </div>
          </div>

          {/* Privacy Controls */}
          <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 space-y-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="mt-0.5 accent-sage-600 rounded"
              />
              <div className="text-xs">
                <span className="font-bold text-charcoal flex items-center gap-1.5">
                  <EyeOff className="w-3.5 h-3.5 text-sage-700" />
                  Default to Anonymous Persona in Community
                </span>
                <span className="text-charcoal-muted text-[11px] block mt-0.5">
                  When enabled, your name will be masked with an anonymous animal/nature handle in the community circle.
                </span>
              </div>
            </label>
          </div>

          <button
            type="submit"
            className="px-6 py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
          >
            Save Profile Changes
          </button>
        </form>

        {/* Data Rights & DPDP India Download */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-4">
          <h2 className="text-base font-serif font-bold text-charcoal">
            Data Privacy & Compliance (DPDP Act)
          </h2>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            You own 100% of your data. You can download a complete JSON archive of your personal profile, appointments, mood entries, and private journal reflections at any time.
          </p>

          <button
            onClick={exportUserData}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-warm-white border border-warm-sand hover:bg-warm-beige text-charcoal transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-sage-700" />
            <span>Download My Personal Data (.JSON)</span>
          </button>
        </div>

        {/* Danger Zone: Account Deletion */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-coral-soft/30 shadow-sm space-y-3">
          <h3 className="text-base font-serif font-bold text-coral-soft">
            Danger Zone
          </h3>
          <p className="text-xs text-charcoal-muted leading-relaxed">
            Permanently delete your Haven account, encrypted journal entries, mood charts, and active conversations. This action cannot be undone.
          </p>

          {deleteConfirmOpen ? (
            <div className="p-4 bg-coral-light/70 rounded-2xl border border-coral-soft/40 space-y-3 animate-fade-in">
              <p className="text-xs font-bold text-coral-soft">
                Are you completely sure you want to delete your account?
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={deleteAccount}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-coral-soft text-white hover:bg-coral-soft/90"
                >
                  Yes, Permanently Delete
                </button>
                <button
                  onClick={() => setDeleteConfirmOpen(false)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-charcoal"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setDeleteConfirmOpen(true)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-coral-soft hover:bg-coral-light/60 border border-coral-soft/30 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete My Account</span>
            </button>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
