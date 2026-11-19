"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import { Therapist } from "@/types";
import { formatCurrencyINR } from "@/lib/utils";
import BookingModal from "./BookingModal";
import {
  Search,
  Filter,
  ShieldCheck,
  Clock,
  Calendar,
  Languages,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Info,
} from "lucide-react";

export default function TherapistDirectory() {
  const { therapists } = useApp();

  const [search, setSearch] = useState("");
  const [specializationFilter, setSpecializationFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [maxPrice, setMaxPrice] = useState<number>(3000);
  const [bookingTherapist, setBookingTherapist] = useState<Therapist | null>(null);

  const specializations = [
    { label: "All Specializations", value: "all" },
    { label: "Clinical Psychologists", value: "Clinical Psychology" },
    { label: "Counselling Psychologists", value: "Counselling Psychology" },
    { label: "Psychiatrists (MD)", value: "Psychiatry" },
    { label: "Mental Wellness Counsellors", value: "Mental Wellness Counsellors" },
    { label: "Relationships & Family", value: "Relationships & Family" },
  ];

  const languages = ["All Languages", "English", "Hindi", "Punjabi", "Bengali", "Marathi"];

  const filtered = therapists.filter((t) => {
    const matchesSearch =
      t.full_name.toLowerCase().includes(search.toLowerCase()) ||
      t.bio.toLowerCase().includes(search.toLowerCase()) ||
      t.specializations.some((s) => s.toLowerCase().includes(search.toLowerCase()));

    const matchesSpec =
      specializationFilter === "all" ||
      t.specializations.some((s) =>
        s.toLowerCase().includes(specializationFilter.toLowerCase())
      );

    const matchesLang =
      languageFilter === "All Languages" ||
      t.languages.includes(languageFilter);

    const matchesPrice = t.session_fee <= maxPrice;

    return matchesSearch && matchesSpec && matchesLang && matchesPrice;
  });

  return (
    <div className="space-y-8 text-charcoal">
      {/* Header */}
      <div className="bg-sage-50 border border-sage-200/80 rounded-3xl p-6 sm:p-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
          Professional Mental Healthcare
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mt-1 mb-2">
          Find a Verified Therapist or Psychiatrist
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl leading-relaxed">
          Every practitioner on Haven is verified with government councils (RCI / NMC). We clearly distinguish licensed clinical counselling from peer emotional listening.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-3xl p-5 border border-warm-sand shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by therapist name, expertise, or symptom..."
              className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          {/* Specialization Filter */}
          <div className="md:col-span-4">
            <select
              value={specializationFilter}
              onChange={(e) => setSpecializationFilter(e.target.value)}
              className="w-full text-xs px-3 py-3 rounded-2xl border border-gray-200 bg-white text-charcoal outline-none focus:border-sage-500"
            >
              {specializations.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          {/* Language Filter */}
          <div className="md:col-span-3">
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="w-full text-xs px-3 py-3 rounded-2xl border border-gray-200 bg-white text-charcoal outline-none focus:border-sage-500"
            >
              {languages.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Max Fee Slider and Summary */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-2 border-t border-gray-100 gap-2 text-xs text-charcoal-muted">
          <div className="flex items-center gap-3">
            <span>Max Fee:</span>
            <input
              type="range"
              min={1000}
              max={3000}
              step={200}
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="accent-sage-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
            />
            <span className="font-bold text-charcoal">{formatCurrencyINR(maxPrice)}</span>
          </div>

          <div>
            Showing <strong className="text-charcoal">{filtered.length}</strong> verified practitioners
          </div>
        </div>
      </div>

      {/* Therapists Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((therapist) => (
          <div
            key={therapist.id}
            className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Photo & verified badge */}
              <div className="relative mb-4">
                <img
                  src={therapist.photo_url}
                  alt={therapist.full_name}
                  className="w-full h-48 object-cover rounded-2xl border border-warm-sand shadow-sm"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/95 backdrop-blur-sm text-sage-900 shadow-sm flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                  Verified RCI / NMC
                </div>
              </div>

              {/* Title & Name */}
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-serif font-bold text-lg text-charcoal">
                  {therapist.full_name}
                </h3>
                <span className="text-xs font-bold text-sage-800">
                  ★ {therapist.rating} ({therapist.reviews_count})
                </span>
              </div>

              <p className="text-xs font-semibold text-sage-800 mb-1">
                {therapist.title}
              </p>

              <p className="text-[11px] text-charcoal-muted font-medium mb-3">
                {therapist.credentials}
                {therapist.rci_registration && ` • ${therapist.rci_registration}`}
              </p>

              <p className="text-xs text-charcoal-muted leading-relaxed line-clamp-3 mb-4">
                {therapist.bio}
              </p>

              {/* Specializations & Modalities */}
              <div className="space-y-1.5 mb-4 text-[11px]">
                <div className="text-charcoal-muted">
                  <strong className="text-charcoal">Specializations:</strong>{" "}
                  {therapist.specializations.join(", ")}
                </div>
                <div className="text-charcoal-muted">
                  <strong className="text-charcoal">Languages:</strong>{" "}
                  {therapist.languages.join(", ")}
                </div>
                <div className="text-charcoal-muted">
                  <strong className="text-charcoal">Experience:</strong>{" "}
                  {therapist.experience_years} years in clinical practice
                </div>
                <div className="flex items-center gap-1.5 text-sage-800 font-semibold pt-1">
                  <Clock className="w-3.5 h-3.5 text-sage-600" />
                  <span>Next Available: {therapist.next_available}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Fee & Book */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-charcoal-subtle uppercase block">
                  50-Min Session
                </span>
                <span className="text-base font-bold text-charcoal">
                  {formatCurrencyINR(therapist.session_fee)}
                </span>
              </div>

              <button
                onClick={() => setBookingTherapist(therapist)}
                className="px-5 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
              >
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      <BookingModal
        therapist={bookingTherapist}
        onClose={() => setBookingTherapist(null)}
      />
    </div>
  );
}
