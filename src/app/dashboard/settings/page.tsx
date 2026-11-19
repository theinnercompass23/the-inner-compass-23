"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Bell,
  Lock,
  Volume2,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Smartphone,
} from "lucide-react";

export default function SettingsPage() {
  const [sessionReminders, setSessionReminders] = useState(true);
  const [communityReplies, setCommunityReplies] = useState(true);
  const [dailyCheckin, setDailyCheckin] = useState(false);
  const [ambientAudioOnStart, setAmbientAudioOnStart] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPass.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    setPasswordSaved(true);
    setCurrentPass("");
    setNewPass("");
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in text-charcoal">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm">
          <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
            Preferences & Security
          </span>
          <h1 className="text-2xl font-serif font-bold text-charcoal mt-1 mb-2">
            Platform Settings
          </h1>
          <p className="text-xs text-charcoal-muted">
            Customize notifications, privacy toggles, and security controls.
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-4">
          <h2 className="text-base font-serif font-bold text-charcoal flex items-center gap-2 pb-2 border-b border-gray-100">
            <Bell className="w-4 h-4 text-sage-600" />
            Notification Preferences
          </h2>

          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 rounded-2xl bg-warm-white border border-warm-sand/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-charcoal block">
                  Therapy Session Reminders (Email & SMS)
                </span>
                <span className="text-[11px] text-charcoal-muted">
                  Receive a reminder 1 hour and 15 minutes before your video appointment.
                </span>
              </div>
              <input
                type="checkbox"
                checked={sessionReminders}
                onChange={(e) => setSessionReminders(e.target.checked)}
                className="accent-sage-600 h-4 w-4 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-2xl bg-warm-white border border-warm-sand/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-charcoal block">
                  Community Post Replies
                </span>
                <span className="text-[11px] text-charcoal-muted">
                  Notify me when someone leaves an empathetic comment on my anonymous post.
                </span>
              </div>
              <input
                type="checkbox"
                checked={communityReplies}
                onChange={(e) => setCommunityReplies(e.target.checked)}
                className="accent-sage-600 h-4 w-4 rounded"
              />
            </label>

            <label className="flex items-center justify-between p-3 rounded-2xl bg-warm-white border border-warm-sand/60 cursor-pointer">
              <div>
                <span className="text-xs font-bold text-charcoal block">
                  Daily Evening Check-in Prompt
                </span>
                <span className="text-[11px] text-charcoal-muted">
                  Gentle encouragement to record your daily mood and do 1-min breathing.
                </span>
              </div>
              <input
                type="checkbox"
                checked={dailyCheckin}
                onChange={(e) => setDailyCheckin(e.target.checked)}
                className="accent-sage-600 h-4 w-4 rounded"
              />
            </label>
          </div>
        </div>

        {/* Change Password Form */}
        <form
          onSubmit={handlePasswordChange}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-4"
        >
          <div className="flex items-center justify-between pb-2 border-b border-gray-100">
            <h2 className="text-base font-serif font-bold text-charcoal flex items-center gap-2">
              <Lock className="w-4 h-4 text-sage-600" />
              Security & Credentials
            </h2>
            {passwordSaved && (
              <span className="text-xs font-bold text-sage-800 bg-sage-100 px-3 py-1 rounded-full flex items-center gap-1.5 animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5 text-sage-700" />
                Password Updated
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                Current Password
              </label>
              <input
                type="password"
                value={currentPass}
                onChange={(e) => setCurrentPass(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                placeholder="At least 6 characters"
                className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
          >
            Update Password
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
}
