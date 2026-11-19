"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import {
  MessageSquareHeart,
  Search,
  ShieldCheck,
  ArrowRight,
  Heart,
  Info,
  Clock,
  Sparkles,
} from "lucide-react";

export default function PublicListenersPage() {
  const { listeners } = useApp();
  const [search, setSearch] = useState("");
  const [selectedLang, setSelectedLang] = useState("all");

  const filtered = listeners.filter((l) => {
    const matchesSearch =
      l.display_name.toLowerCase().includes(search.toLowerCase()) ||
      l.topics.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchesLang =
      selectedLang === "all" || l.languages.includes(selectedLang);
    return matchesSearch && matchesLang;
  });

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-warm-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-700">
          Peer Emotional Support
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-medium text-charcoal mt-1 mb-3">
          Connect with a Trained Human Listener
        </h1>
        <p className="text-sm text-charcoal-muted leading-relaxed">
          Sometimes you don&apos;t need medical solutions or advice. You just need a compassionate person to sit quietly with your thoughts.
        </p>
      </div>

      {/* Role Disclaimer */}
      <div className="bg-sage-50 border border-sage-200 rounded-2xl p-4 mb-8 flex items-start gap-3 text-xs text-charcoal-muted max-w-3xl mx-auto">
        <Info className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
        <p>
          <strong className="text-charcoal">Role Scope:</strong> Human listeners are trained empathetic peers, not licensed healthcare providers or psychiatrists. If you are experiencing clinical symptoms or a medical crisis, please visit our{" "}
          <Link href="/therapists" className="text-sage-800 underline font-semibold">
            Licensed Therapists
          </Link>{" "}
          section or call Tele-MANAS at 14416.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="max-w-xl mx-auto mb-10 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by topic (e.g. loneliness, heartbreak, burnout)..."
            className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
          />
        </div>
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="text-xs px-4 py-3 rounded-2xl border border-gray-200 bg-white text-charcoal outline-none"
        >
          <option value="all">All Languages</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Bengali">Bengali</option>
        </select>
      </div>

      {/* Listeners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((listener) => (
          <div
            key={listener.id}
            className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative mb-4">
                <img
                  src={listener.avatar_url}
                  alt={listener.display_name}
                  className="w-full h-44 object-cover rounded-2xl border border-warm-sand"
                />
                <span
                  className={`absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm ${
                    listener.is_online
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {listener.is_online ? "● Online Now" : "○ Offline"}
                </span>
              </div>

              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif font-bold text-base text-charcoal">
                  {listener.display_name}
                </h3>
                <span className="text-xs font-bold text-sage-800">
                  ★ {listener.rating}
                </span>
              </div>

              <p className="text-xs text-sage-700 font-semibold mb-2">
                {listener.badge}
              </p>

              <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3 mb-4">
                {listener.bio}
              </p>

              <div className="space-y-1 text-[11px] text-charcoal-muted">
                <div>
                  <strong className="text-charcoal">Languages:</strong>{" "}
                  {listener.languages.join(", ")}
                </div>
                <div>
                  <strong className="text-charcoal">Topics:</strong>{" "}
                  {listener.topics.join(", ")}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 mt-4">
              <Link
                href="/dashboard/listeners"
                className="w-full py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Start Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
