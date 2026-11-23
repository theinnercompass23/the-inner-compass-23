"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Check } from "lucide-react";
import { formatISOToIndianDate } from "@/lib/bookingValidation";

interface CustomDatePickerProps {
  value: string; // ISO date 'YYYY-MM-DD'
  onChange: (isoDate: string) => void;
  minDate: string; // ISO date 'YYYY-MM-DD'
  error?: string;
}

export default function CustomDatePicker({
  value,
  onChange,
  minDate,
  error,
}: CustomDatePickerProps) {
  // Parse initial selected date or minDate
  const parseISODate = (iso: string) => {
    if (!iso) return new Date("2026-11-20T00:00:00Z");
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d);
  };

  const initialDate = parseISODate(value || minDate);
  const [viewYear, setViewYear] = useState(initialDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(initialDate.getMonth()); // 0-indexed

  // Synchronize when value changes externally
  useEffect(() => {
    if (value) {
      const d = parseISODate(value);
      setViewYear(d.getFullYear());
      setViewMonth(d.getMonth());
    }
  }, [value]);

  const minDateObj = parseISODate(minDate);
  const minYear = minDateObj.getFullYear();
  const minMonth = minDateObj.getMonth();

  // Navigation: Previous month allowed only if not before minDate month
  const isPrevDisabled =
    viewYear < minYear || (viewYear === minYear && viewMonth <= minMonth);

  const prevMonth = () => {
    if (isPrevDisabled) return;
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  // Days in month calculation
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay(); // 0 is Sunday
  const daysInCurrentMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const toISO = (y: number, m: number, d: number) => {
    return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  };

  const todayISO =
    typeof window === "undefined"
      ? "2026-11-20"
      : (() => {
          const now = new Date();
          return toISO(now.getFullYear(), now.getMonth(), now.getDate());
        })();

  return (
    <div className="space-y-2">
      {/* Calendar Card Container */}
      <div
        className={`bg-white rounded-2xl border transition-all shadow-xs p-4 sm:p-5 ${
          error
            ? "border-rose-400 ring-2 ring-rose-100"
            : "border-soft-sage/50 hover:border-soft-sage focus-within:border-muted-green"
        }`}
      >
        {/* Month Header & Controls */}
        <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-soft-sage/20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center shrink-0">
              <CalendarIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif font-bold text-sm sm:text-base text-dark-charcoal">
                {monthNames[viewMonth]} {viewYear}
              </span>
              <p className="text-[10px] text-dark-charcoal/55">Select your preferred session date</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={prevMonth}
              disabled={isPrevDisabled}
              aria-label="Previous Month"
              className="w-8 h-8 rounded-full flex items-center justify-center text-dark-charcoal hover:bg-soft-sage/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextMonth}
              aria-label="Next Month"
              className="w-8 h-8 rounded-full flex items-center justify-center text-dark-charcoal hover:bg-soft-sage/20 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 text-center mb-1">
          {daysOfWeek.map((day, i) => (
            <div
              key={day}
              className={`text-[11px] font-semibold py-1 ${
                i === 0 || i === 6 ? "text-dark-charcoal/50" : "text-dark-charcoal/70"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {/* Empty cells before 1st day of month */}
          {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
            <div key={`empty-${idx}`} className="h-9 sm:h-10" />
          ))}

          {/* Actual days of month */}
          {Array.from({ length: daysInCurrentMonth }).map((_, idx) => {
            const dayNum = idx + 1;
            const currentCellISO = toISO(viewYear, viewMonth, dayNum);
            const isPast = currentCellISO < minDate;
            const isSelected = currentCellISO === value;
            const isToday = currentCellISO === todayISO;

            return (
              <button
                key={currentCellISO}
                type="button"
                disabled={isPast}
                onClick={() => onChange(currentCellISO)}
                className={`h-9 sm:h-10 rounded-xl text-xs sm:text-sm font-medium transition-all relative flex flex-col items-center justify-center ${
                  isSelected
                    ? "bg-muted-green text-white font-bold shadow-sm scale-102"
                    : isPast
                    ? "text-gray-300 cursor-not-allowed line-through"
                    : "text-dark-charcoal hover:bg-soft-sage/25 cursor-pointer"
                } ${isToday && !isSelected ? "ring-1.5 ring-muted-green/60 font-semibold" : ""}`}
              >
                <span>{dayNum}</span>
                {isToday && (
                  <span
                    className={`w-1 h-1 rounded-full absolute bottom-1 ${
                      isSelected ? "bg-white" : "bg-muted-green"
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Date Indicator Banner */}
        <div className="mt-3.5 pt-3 border-t border-soft-sage/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 text-xs">
          <div className="flex items-center gap-1.5 text-dark-charcoal">
            <Check className="w-3.5 h-3.5 text-muted-green shrink-0" />
            <span>
              Selected Date: <strong>{formatISOToIndianDate(value)}</strong>
            </span>
          </div>
          <span className="text-[11px] text-dark-charcoal/50">
            Past dates disabled automatically
          </span>
        </div>
      </div>

      {error && (
        <p className="text-xs text-rose-600 font-medium pl-1 flex items-center gap-1">
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
