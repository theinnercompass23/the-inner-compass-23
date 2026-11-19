"use client";

import React, { useState, useEffect } from "react";
import { Therapist } from "@/types";
import { useApp } from "@/context/AppContext";
import { formatCurrencyINR } from "@/lib/utils";
import confetti from "canvas-confetti";
import {
  Calendar,
  Clock,
  CheckCircle2,
  X,
  ShieldCheck,
  Video,
  AlertCircle,
  FileText,
} from "lucide-react";
import Link from "next/link";

interface BookingModalProps {
  therapist: Therapist | null;
  onClose: () => void;
}

interface DateOption {
  formatted: string;
  dayName: string;
  dateNumber: number;
  month: string;
}

export default function BookingModal({ therapist, onClose }: BookingModalProps) {
  const { bookAppointment } = useApp();

  const [dateOptions, setDateOptions] = useState<DateOption[]>([
    { formatted: "2026-02-23", dayName: "Mon", dateNumber: 23, month: "Feb" },
    { formatted: "2026-02-24", dayName: "Tue", dateNumber: 24, month: "Feb" },
    { formatted: "2026-02-25", dayName: "Wed", dateNumber: 25, month: "Feb" },
    { formatted: "2026-02-26", dayName: "Thu", dateNumber: 26, month: "Feb" },
    { formatted: "2026-02-27", dayName: "Fri", dateNumber: 27, month: "Feb" },
    { formatted: "2026-02-28", dayName: "Sat", dateNumber: 28, month: "Feb" },
    { formatted: "2026-03-01", dayName: "Sun", dateNumber: 1, month: "Mar" },
  ]);

  const [selectedDate, setSelectedDate] = useState<string>("2026-02-23");
  const [selectedSlot, setSelectedSlot] = useState<string>(
    therapist?.available_slots[0] || "04:00 PM"
  );
  const [notes, setNotes] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [bookedDetails, setBookedDetails] = useState<{
    id: string;
    date: string;
    time: string;
    meetLink: string;
  } | null>(null);

  // Safely calculate dynamic future dates on client mount
  useEffect(() => {
    const dates = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() + i + 1);
      return {
        formatted: d.toISOString().split("T")[0],
        dayName: d.toLocaleDateString("en-IN", { weekday: "short" }),
        dateNumber: d.getDate(),
        month: d.toLocaleDateString("en-IN", { month: "short" }),
      };
    });
    setDateOptions(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].formatted);
    }
  }, []);

  if (!therapist) return null;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    setTimeout(() => {
      const result = bookAppointment(therapist.id, selectedDate, selectedSlot, notes);
      setIsSubmitting(false);

      if (result.success && result.appointment) {
        setBookedDetails({
          id: result.appointment.id,
          date: result.appointment.date,
          time: result.appointment.time_slot,
          meetLink: result.appointment.meet_link,
        });
        // Trigger celebratory gentle confetti
        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.7 },
            colors: ["#A8BDA5", "#78947D", "#EEECE4", "#E5988A"],
          });
        } catch {
          // ignore
        }
      } else {
        setErrorMessage(result.message);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-warm-sand my-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {bookedDetails ? (
          // Success Confirmation Screen
          <div className="text-center py-6 animate-fade-in">
            <div className="w-16 h-16 rounded-3xl bg-sage-100 text-sage-800 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-sage-600" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
              Your Session is Confirmed
            </h3>
            <p className="text-sm text-charcoal-muted max-w-md mx-auto mb-6">
              You took a brave and important step today. We have reserved your appointment with{" "}
              <strong>{therapist.full_name}</strong>.
            </p>

            <div className="bg-sage-50/70 border border-sage-200 rounded-2xl p-4 text-left mb-6 space-y-2">
              <div className="flex items-center justify-between text-xs text-charcoal">
                <span className="text-charcoal-muted">Date & Time:</span>
                <span className="font-bold">
                  {bookedDetails.date} at {bookedDetails.time}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-charcoal">
                <span className="text-charcoal-muted">Therapist:</span>
                <span className="font-semibold">{therapist.full_name}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-charcoal">
                <span className="text-charcoal-muted">Private Video Room:</span>
                <span className="font-mono text-sage-800 underline truncate max-w-[200px]">
                  {bookedDetails.meetLink}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-charcoal pt-2 border-t border-sage-200">
                <span className="text-charcoal-muted">Session Fee (50 Mins):</span>
                <span className="font-bold text-sage-900">
                  {formatCurrencyINR(therapist.session_fee)} (Demo Mode - No Charge)
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <Link
                href="/dashboard/sessions"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white transition-all shadow-sm"
              >
                View in My Sessions
              </Link>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          // Booking Form
          <div>
            <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
              <img
                src={therapist.photo_url}
                alt={therapist.full_name}
                className="w-16 h-16 rounded-2xl object-cover border border-warm-sand shadow-sm"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-serif font-bold text-charcoal">
                    {therapist.full_name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-sage-100 text-sage-800">
                    <ShieldCheck className="w-3 h-3 text-sage-600" />
                    Verified
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted font-medium mb-1">
                  {therapist.credentials}
                </p>
                <div className="text-xs text-sage-800 font-bold">
                  {formatCurrencyINR(therapist.session_fee)} / 50-minute consultation
                </div>
              </div>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-coral-light border border-coral-soft/40 text-coral-soft text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleBooking} className="space-y-5">
              {/* Select Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  1. Select Date
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {dateOptions.map((item) => {
                    const isSelected = selectedDate === item.formatted;
                    return (
                      <button
                        key={item.formatted}
                        type="button"
                        onClick={() => setSelectedDate(item.formatted)}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center border transition-all text-center ${
                          isSelected
                            ? "bg-sage-600 text-white border-sage-600 shadow-sm"
                            : "bg-white border-gray-200 text-charcoal hover:border-sage-400"
                        }`}
                      >
                        <span className="text-[10px] uppercase font-semibold">{item.dayName}</span>
                        <span className="text-base font-bold my-0.5">{item.dateNumber}</span>
                        <span className="text-[9px] opacity-80">{item.month}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Select Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  2. Select Available Slot (IST)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {therapist.available_slots.map((slot) => {
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                          isSelected
                            ? "bg-sage-100 text-sage-900 border-sage-500 shadow-sm"
                            : "bg-white border-gray-200 text-charcoal-muted hover:border-gray-300"
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 text-sage-600" />
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label
                  htmlFor="booking-notes-input"
                  className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1"
                >
                  3. What would you like to discuss? (Confidential)
                </label>
                <textarea
                  id="booking-notes-input"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Dealing with sudden panic attacks at work, loneliness since moving, or grief."
                  className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal placeholder:text-charcoal-subtle"
                />
              </div>

              {/* Cancellation policy note */}
              <div className="p-3 rounded-xl bg-warm-white border border-warm-sand text-[11px] text-charcoal-muted space-y-1">
                <div className="font-semibold text-charcoal flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sage-600" />
                  Free Rescheduling & Cancellation Policy
                </div>
                <p>
                  You can reschedule or cancel this appointment free of charge up to 4 hours before the session.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-charcoal hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Securing Slot..." : "Confirm & Book Session"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
