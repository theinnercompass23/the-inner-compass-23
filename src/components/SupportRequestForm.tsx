"use client";

import React, { useState, useId, useTransition } from "react";
import { useLeads } from "@/context/LeadContext";
import {
  SUPPORT_CATEGORIES,
  COUNTRY_CODES,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import {
  Heart,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Lock,
  ChevronDown,
  X,
  Search,
  Globe,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  categories?: string;
  otherText?: string;
  preferredDate?: string;
  preferredTime?: string;
  consent?: string;
}

export default function SupportRequestForm() {
  const {
    submitRequest,
    selectedCategories,
    toggleCategory,
    clearCategories,
  } = useLeads();

  const [isPending, startTransition] = useTransition();

  // Form inputs
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otherCategoryText, setOtherCategoryText] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");
  
  // Date & Time states
  // Default date: static deterministic values for SSR prerender, updated client-side
  const [minDate, setMinDate] = useState("2026-02-20");
  const [rawDate, setRawDate] = useState("2026-02-21");

  React.useEffect(() => {
    try {
      const now = new Date();
      const todayStr = now.toISOString().split("T")[0];
      setMinDate(todayStr);

      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setRawDate(tomorrow.toISOString().split("T")[0]);
    } catch {
      // ignore
    }
  }, []);

  // Convert YYYY-MM-DD to DD/MM/YYYY for Indian format
  const formatToDDMMYYYY = (isoDate: string): string => {
    if (!isoDate) return "";
    const parts = isoDate.split("-");
    if (parts.length === 3) {
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return isoDate;
  };

  // 24-hour time state (strict 24-hour format: HH:MM, no AM/PM)
  const [timeHour, setTimeHour] = useState("18"); // 18:00
  const [timeMinute, setTimeMinute] = useState("00");
  const [customTimeInput, setCustomTimeInput] = useState("18:00");
  const [timePickerMode, setTimePickerMode] = useState<"preset" | "custom">("preset");

  // Dropdown UI states
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Consent
  const [consent, setConsent] = useState(true);

  // Status & Submission states
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    id: string;
    fullName: string;
    whatsappUrl: string;
    date: string;
    time: string;
  } | null>(null);

  // Quick 24-hour presets (Strict 24h format, no AM/PM)
  const QUICK_TIME_PRESETS = [
    { label: "09:00", value: "09:00" },
    { label: "11:30", value: "11:30" },
    { label: "14:00", value: "14:00" },
    { label: "16:30", value: "16:30" },
    { label: "18:00", value: "18:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:30", value: "21:30" },
    { label: "23:00", value: "23:00" },
  ];

  // Quick Date Helpers
  const setQuickDate = (daysAhead: number) => {
    const target = new Date();
    target.setDate(target.getDate() + daysAhead);
    setRawDate(target.toISOString().split("T")[0]);
    if (errors.preferredDate) {
      setErrors((prev) => ({ ...prev, preferredDate: undefined }));
    }
  };

  // Filter categories for searchable dropdown
  const filteredCategories = SUPPORT_CATEGORIES.filter((cat) =>
    cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.shortLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isOtherSelected = selectedCategories.includes("Other") || selectedCategories.some(c => c.toLowerCase().includes("other"));

  // Strict 24-hour time validator: 00:00 to 23:59
  const validate24HourTime = (timeStr: string): boolean => {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return regex.test(timeStr.trim());
  };

  const getEffective24HourTime = (): string => {
    if (timePickerMode === "custom") {
      return customTimeInput.trim();
    }
    return `${timeHour.padStart(2, "0")}:${timeMinute.padStart(2, "0")}`;
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full Name
    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    // 2. WhatsApp Mobile Number
    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone.trim() || cleanPhone.length < 7) {
      newErrors.phone = "Please enter a valid mobile number for WhatsApp.";
    }

    // 3. Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 4. Categories
    if (selectedCategories.length === 0) {
      newErrors.categories = "Please select at least one topic from the dropdown.";
    }

    // If Other selected, validate text
    if (isOtherSelected && (!otherCategoryText.trim() || otherCategoryText.trim().length < 2)) {
      newErrors.otherText = "Please briefly tell us what you would like to talk about.";
    }

    // 5. Preferred Date
    if (!rawDate) {
      newErrors.preferredDate = "Please choose your preferred date.";
    } else {
      const selected = new Date(rawDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = "Please select a date from today onwards.";
      }
    }

    // 6. Preferred 24-hour Time
    const effectiveTime = getEffective24HourTime();
    if (!validate24HourTime(effectiveTime)) {
      newErrors.preferredTime = "Please enter time in 24-hour format (00:00 to 23:59).";
    }

    // 7. Consent
    if (!consent) {
      newErrors.consent = "Please agree to the privacy consent to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const errorField = document.querySelector(".form-error-anchor");
      if (errorField) {
        errorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setIsSubmitting(true);

    const formattedDate = formatToDDMMYYYY(rawDate);
    const effectiveTime = getEffective24HourTime();

    try {
      const result = await submitRequest({
        fullName,
        phone,
        countryCode,
        email,
        categories: selectedCategories,
        otherCategoryText: isOtherSelected ? otherCategoryText : undefined,
        additionalMessage,
        preferredDate: formattedDate,
        preferredTime: effectiveTime,
        timezone: "Asia/Kolkata",
        consent,
      });

      setSubmittedLead({
        id: result.lead.id,
        fullName: result.lead.full_name,
        whatsappUrl: result.whatsappUrl,
        date: formattedDate,
        time: effectiveTime,
      });

      // Automatically launch WhatsApp in new tab
      const isMobile = typeof window !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = result.whatsappUrl;
      } else {
        window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors({
        consent: "An error occurred while saving your request. Please try again or message directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION STATE
  if (submittedLead) {
    return (
      <section id="support-form" className="scroll-mt-24 py-16 px-4 bg-warm-white">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-soft-sage/30 text-center animate-fade-in">
          <div className="w-16 h-16 bg-whatsapp-green/10 text-whatsapp-green rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="inline-block px-3 py-1 bg-soft-sage/20 text-muted-green font-medium text-xs rounded-full mb-3 tracking-wide uppercase">
            Request Received & Saved
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-dark-charcoal mb-3">
            Thank you, {submittedLead.fullName}.
          </h3>

          <p className="text-dark-charcoal/75 text-base sm:text-lg mb-4 max-w-lg mx-auto leading-relaxed">
            Your support request has been securely recorded. Our team will connect with you via WhatsApp on{" "}
            <span className="font-semibold text-dark-charcoal">{submittedLead.date}</span> at{" "}
            <span className="font-semibold text-dark-charcoal">{submittedLead.time} (24h IST)</span>.
          </p>

          <div className="p-4 bg-light-beige/50 rounded-2xl mb-8 text-left text-sm text-dark-charcoal/80 space-y-1.5 max-w-md mx-auto border border-soft-sage/20">
            <p className="font-medium text-dark-charcoal flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-green" />
              Next Step: Press Send in WhatsApp
            </p>
            <p className="text-xs text-dark-charcoal/65 pl-6">
              WhatsApp will open with your pre-filled message. Simply tap <strong>Send</strong> to initiate the conversation with our listening team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={submittedLead.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-whatsapp-green hover:bg-[#20bd5a] text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              Open in WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                setSubmittedLead(null);
                setFullName("");
                setPhone("");
                setEmail("");
                setOtherCategoryText("");
                setAdditionalMessage("");
                clearCategories();
              }}
              className="w-full sm:w-auto px-6 py-4 border border-soft-sage/40 hover:bg-light-beige text-dark-charcoal/80 rounded-full font-medium transition-colors text-sm"
            >
              Submit Another Request
            </button>
          </div>

          <p className="mt-6 text-xs text-dark-charcoal/50">
            Direct WhatsApp: <span className="font-medium">{WHATSAPP_DISPLAY}</span> • Available 24/7
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="support-form" className="scroll-mt-20 py-16 sm:py-24 px-4 bg-gradient-to-b from-warm-white via-light-beige/30 to-warm-white">
      <div className="max-w-3xl mx-auto">
        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-soft-sage/30 relative overflow-hidden">
          {/* Subtle Sage Decorative Corner Accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-soft-sage/15 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-soft-sage/20 text-muted-green font-medium text-xs sm:text-sm rounded-full mb-4">
              <Heart className="w-4 h-4 fill-muted-green/20" />
              Human Peer Listening Service
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark-charcoal tracking-tight mb-3">
              Tell Us What&apos;s On Your Mind
            </h2>
            <p className="text-dark-charcoal/75 text-base sm:text-lg leading-relaxed">
              Share a little about what you&apos;re going through. Someone is here to listen without judgment.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* ========================================================= */}
            {/* SECTION A: Problem Selection Dropdown                     */}
            {/* ========================================================= */}
            <div className="bg-warm-white/70 p-5 sm:p-6 rounded-2xl border border-soft-sage/25">
              <label className="block text-sm font-semibold text-dark-charcoal mb-1.5">
                What Would You Like to Talk About? <span className="text-rose-500">*</span>
              </label>
              <p className="text-xs text-dark-charcoal/65 mb-3">
                Select one or multiple concerns that match what you are feeling right now.
              </p>

              {/* Searchable Multi-Select Dropdown Container */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  className={`w-full min-h-[50px] px-4 py-2.5 text-left bg-white rounded-xl border transition-all flex items-center justify-between gap-2 shadow-sm ${
                    errors.categories
                      ? "border-rose-400 ring-2 ring-rose-100"
                      : isDropdownOpen
                      ? "border-muted-green ring-2 ring-muted-green/20"
                      : "border-soft-sage/50 hover:border-muted-green"
                  }`}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <div className="flex-1 flex flex-wrap gap-1.5 items-center">
                    {selectedCategories.length === 0 ? (
                      <span className="text-dark-charcoal/40 text-sm">Select your concern...</span>
                    ) : (
                      selectedCategories.map((catId) => {
                        const matched = SUPPORT_CATEGORIES.find(
                          (c) => c.label === catId || c.id === catId || c.shortLabel === catId
                        );
                        const displayLabel = matched ? matched.label : catId;
                        return (
                          <span
                            key={catId}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-soft-sage/30 text-dark-charcoal text-xs font-medium rounded-lg border border-soft-sage/40"
                          >
                            <span>{displayLabel}</span>
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleCategory(catId);
                              }}
                              className="text-dark-charcoal/60 hover:text-dark-charcoal p-0.5 rounded cursor-pointer"
                              aria-label={`Remove ${displayLabel}`}
                            >
                              <X className="w-3 h-3" />
                            </span>
                          </span>
                        );
                      })
                    )}
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-dark-charcoal/50 transition-transform flex-shrink-0 ${
                      isDropdownOpen ? "rotate-180 text-muted-green" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {isDropdownOpen && (
                  <div className="absolute z-30 mt-2 w-full bg-white rounded-2xl shadow-xl border border-soft-sage/40 max-h-80 overflow-hidden flex flex-col animate-fade-in">
                    {/* Search inside Dropdown */}
                    <div className="p-3 border-b border-soft-sage/20 bg-warm-white/60">
                      <div className="relative">
                        <Search className="w-4 h-4 text-dark-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search concerns..."
                          className="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm bg-white rounded-lg border border-soft-sage/40 focus:outline-none focus:border-muted-green"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>

                    {/* Category Options List */}
                    <div className="overflow-y-auto p-2 divide-y divide-soft-sage/10 space-y-1">
                      {filteredCategories.length === 0 ? (
                        <p className="p-4 text-center text-xs text-dark-charcoal/50">
                          No matching concerns found.
                        </p>
                      ) : (
                        filteredCategories.map((cat) => {
                          const isSelected =
                            selectedCategories.includes(cat.label) ||
                            selectedCategories.includes(cat.id);

                          return (
                            <div
                              key={cat.id}
                              onClick={() => {
                                toggleCategory(cat.label);
                                if (errors.categories) {
                                  setErrors((prev) => ({ ...prev, categories: undefined }));
                                }
                              }}
                              className={`p-2.5 rounded-xl cursor-pointer transition-colors flex items-start gap-3 ${
                                isSelected
                                  ? "bg-soft-sage/25 text-dark-charcoal font-medium"
                                  : "hover:bg-warm-white text-dark-charcoal/80"
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => {}} // Handled by container
                                className="mt-1 h-4 w-4 rounded border-soft-sage text-muted-green focus:ring-muted-green"
                              />
                              <div className="flex-1 text-xs sm:text-sm">
                                <p className="leading-snug">{cat.label}</p>
                                <p className="text-[11px] text-dark-charcoal/55 font-normal mt-0.5">
                                  {cat.description}
                                </p>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Dropdown Footer Actions */}
                    <div className="p-2.5 bg-warm-white/80 border-t border-soft-sage/20 flex justify-between items-center text-xs">
                      <span className="text-dark-charcoal/60">
                        {selectedCategories.length} selected
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(false)}
                        className="px-3 py-1 bg-muted-green text-white rounded-lg font-medium hover:bg-[#68826d] transition-colors"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {errors.categories && (
                <p className="mt-2 text-xs text-rose-600 flex items-center gap-1 form-error-anchor">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.categories}
                </p>
              )}

              {/* If "Other" is selected, show mandatory custom description field */}
              {isOtherSelected && (
                <div className="mt-4 pt-4 border-t border-soft-sage/25 animate-fade-in">
                  <label className="block text-xs font-semibold text-dark-charcoal mb-1">
                    Please tell us what you would like to talk about: <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={otherCategoryText}
                    onChange={(e) => {
                      setOtherCategoryText(e.target.value);
                      if (errors.otherText) setErrors((prev) => ({ ...prev, otherText: undefined }));
                    }}
                    placeholder="Specify your topic or situation..."
                    className={`w-full px-4 py-2.5 bg-white text-sm rounded-xl border focus:outline-none transition-all shadow-sm ${
                      errors.otherText
                        ? "border-rose-400 ring-2 ring-rose-100"
                        : "border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20"
                    }`}
                  />
                  {errors.otherText && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.otherText}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* ========================================================= */}
            {/* SECTION B: Personal Information                           */}
            {/* ========================================================= */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-dark-charcoal flex items-center gap-2">
                <span>Your Contact Details</span>
                <span className="text-xs font-normal text-dark-charcoal/60">(For private connection)</span>
              </h3>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-dark-charcoal mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                  }}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 bg-white text-sm rounded-xl border focus:outline-none transition-all shadow-sm ${
                    errors.fullName
                      ? "border-rose-400 ring-2 ring-rose-100"
                      : "border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20"
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* WhatsApp Mobile Number with Country Code */}
              <div>
                <label className="block text-xs font-medium text-dark-charcoal mb-1.5">
                  WhatsApp Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="flex gap-2">
                  {/* Country Selector */}
                  <div className="relative w-36 sm:w-44 flex-shrink-0">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full appearance-none px-3 py-3 pr-8 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-sm cursor-pointer"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.flag} {c.code} ({c.country.split(" ")[0]})
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-dark-charcoal/40 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>

                  {/* Phone input */}
                  <div className="flex-1">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="Enter your WhatsApp number"
                      className={`w-full px-4 py-3 bg-white text-sm rounded-xl border focus:outline-none transition-all shadow-sm ${
                        errors.phone
                          ? "border-rose-400 ring-2 ring-rose-100"
                          : "border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20"
                      }`}
                    />
                  </div>
                </div>
                {errors.phone ? (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.phone}
                  </p>
                ) : (
                  <p className="mt-1 text-[11px] text-dark-charcoal/50">
                    We will never share your number or spam you. Used solely for your support conversation.
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-medium text-dark-charcoal mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                  placeholder="Enter your email address"
                  className={`w-full px-4 py-3 bg-white text-sm rounded-xl border focus:outline-none transition-all shadow-sm ${
                    errors.email
                      ? "border-rose-400 ring-2 ring-rose-100"
                      : "border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* ========================================================= */}
            {/* SECTION C: Preferred Date & Time – MANDATORY (Highlighted) */}
            {/* ========================================================= */}
            <div className="bg-light-beige/40 p-5 sm:p-6 rounded-2xl border border-soft-sage/40 space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="text-base font-semibold text-dark-charcoal flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-green" />
                    When Would You Like to Connect? <span className="text-rose-500">*</span>
                  </h3>
                  <p className="text-xs text-dark-charcoal/65 mt-0.5">
                    Select your preferred date & time. Our team will confirm availability.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-[11px] font-medium text-muted-green border border-soft-sage/40">
                  <Globe className="w-3 h-3" />
                  Timezone: Asia/Kolkata (IST)
                </span>
              </div>

              {/* Preferred Date Field */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-medium text-dark-charcoal">
                    Preferred Date (DD/MM/YYYY) <span className="text-rose-500">*</span>
                  </label>
                  {/* Quick date chips */}
                  <div className="flex gap-1.5 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setQuickDate(0)}
                      className="px-2 py-0.5 rounded bg-white hover:bg-soft-sage/20 border border-soft-sage/30 text-dark-charcoal/70 transition-colors"
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(1)}
                      className="px-2 py-0.5 rounded bg-white hover:bg-soft-sage/20 border border-soft-sage/30 text-dark-charcoal/70 transition-colors"
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(2)}
                      className="px-2 py-0.5 rounded bg-white hover:bg-soft-sage/20 border border-soft-sage/30 text-dark-charcoal/70 transition-colors"
                    >
                      In 2 Days
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="date"
                    min={minDate}
                    value={rawDate}
                    onChange={(e) => {
                      setRawDate(e.target.value);
                      if (errors.preferredDate) setErrors((prev) => ({ ...prev, preferredDate: undefined }));
                    }}
                    className={`w-full px-4 py-3 bg-white text-sm rounded-xl border focus:outline-none transition-all shadow-sm ${
                      errors.preferredDate
                        ? "border-rose-400 ring-2 ring-rose-100"
                        : "border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20"
                    }`}
                  />
                </div>

                <div className="flex justify-between items-center mt-1 text-[11px] text-dark-charcoal/60">
                  <span>Selected Date (Indian Format): <strong>{formatToDDMMYYYY(rawDate) || "Not chosen"}</strong></span>
                  <span>Future dates available</span>
                </div>
                {errors.preferredDate && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.preferredDate}
                  </p>
                )}
              </div>

              {/* Preferred Time Field (STRICT 24-HOUR FORMAT) */}
              <div>
                <div className="flex justify-between items-center mb-1.5 flex-wrap gap-1">
                  <label className="text-xs font-medium text-dark-charcoal flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-muted-green" />
                    Preferred Time (Strict 24-Hour Clock: 00:00 to 23:59) <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-[11px] font-semibold text-muted-green bg-soft-sage/20 px-2 py-0.5 rounded">
                    24h Format Only (No AM/PM)
                  </span>
                </div>

                {/* Quick 24h Slots */}
                <div className="mb-3">
                  <p className="text-[11px] text-dark-charcoal/60 mb-1.5">Quick 24-hour slots:</p>
                  <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
                    {QUICK_TIME_PRESETS.map((preset) => {
                      const effective = getEffective24HourTime();
                      const isSelected = effective === preset.value;
                      return (
                        <button
                          key={preset.value}
                          type="button"
                          onClick={() => {
                            const [h, m] = preset.value.split(":");
                            setTimeHour(h);
                            setTimeMinute(m);
                            setCustomTimeInput(preset.value);
                            setTimePickerMode("preset");
                            if (errors.preferredTime) setErrors((prev) => ({ ...prev, preferredTime: undefined }));
                          }}
                          className={`py-2 px-1 text-xs font-medium rounded-lg border transition-all text-center ${
                            isSelected
                              ? "bg-muted-green text-white border-muted-green shadow-sm"
                              : "bg-white hover:bg-soft-sage/20 border-soft-sage/40 text-dark-charcoal"
                          }`}
                        >
                          {preset.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 24-Hour Custom Inputs (Hours 00-23, Minutes 00-59) */}
                <div className="bg-white p-3.5 rounded-xl border border-soft-sage/40 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-dark-charcoal/70">Pick exact hour & min:</span>
                    {/* Hours (00 to 23) */}
                    <select
                      value={timeHour}
                      onChange={(e) => {
                        setTimeHour(e.target.value);
                        setCustomTimeInput(`${e.target.value.padStart(2, "0")}:${timeMinute.padStart(2, "0")}`);
                        setTimePickerMode("preset");
                        if (errors.preferredTime) setErrors((prev) => ({ ...prev, preferredTime: undefined }));
                      }}
                      className="px-2.5 py-1.5 bg-warm-white border border-soft-sage/50 rounded-lg text-sm font-semibold text-dark-charcoal focus:outline-none focus:border-muted-green cursor-pointer"
                    >
                      {Array.from({ length: 24 }).map((_, i) => {
                        const h = String(i).padStart(2, "0");
                        return (
                          <option key={h} value={h}>
                            {h}:00 (24h)
                          </option>
                        );
                      })}
                    </select>

                    <span className="font-bold text-dark-charcoal/40">:</span>

                    {/* Minutes (00 to 59) */}
                    <select
                      value={timeMinute}
                      onChange={(e) => {
                        setTimeMinute(e.target.value);
                        setCustomTimeInput(`${timeHour.padStart(2, "0")}:${e.target.value.padStart(2, "0")}`);
                        setTimePickerMode("preset");
                        if (errors.preferredTime) setErrors((prev) => ({ ...prev, preferredTime: undefined }));
                      }}
                      className="px-2.5 py-1.5 bg-warm-white border border-soft-sage/50 rounded-lg text-sm font-semibold text-dark-charcoal focus:outline-none focus:border-muted-green cursor-pointer"
                    >
                      {["00", "15", "30", "45", "10", "20", "40", "50", "59"].sort().map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Or direct typing with validation */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <span className="text-xs text-dark-charcoal/60">Or type HH:MM:</span>
                    <input
                      type="text"
                      maxLength={5}
                      value={customTimeInput}
                      onChange={(e) => {
                        const val = e.target.value;
                        setCustomTimeInput(val);
                        setTimePickerMode("custom");
                        if (validate24HourTime(val)) {
                          const [h, m] = val.split(":");
                          setTimeHour(h);
                          setTimeMinute(m);
                          if (errors.preferredTime) setErrors((prev) => ({ ...prev, preferredTime: undefined }));
                        }
                      }}
                      placeholder="e.g. 15:30"
                      className="w-24 px-2.5 py-1.5 bg-warm-white border border-soft-sage/50 rounded-lg text-sm font-semibold text-dark-charcoal focus:outline-none focus:border-muted-green text-center font-mono"
                    />
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between text-[11px] text-dark-charcoal/60">
                  <span>Selected Time: <strong className="text-dark-charcoal">{getEffective24HourTime()} (24-Hour Clock)</strong></span>
                  <span>Any time 00:00 – 23:59 permitted</span>
                </div>

                {errors.preferredTime && (
                  <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.preferredTime}
                  </p>
                )}

                <p className="mt-2.5 text-[11px] text-dark-charcoal/65 italic bg-white/70 p-2 rounded-lg border border-soft-sage/20">
                  Note: Choose the date and time that works best for you. Our team will confirm availability.
                </p>
              </div>
            </div>

            {/* ========================================================= */}
            {/* SECTION D: Additional Message – OPTIONAL                 */}
            {/* ========================================================= */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-medium text-dark-charcoal">
                  Would You Like to Share Anything Else?
                </label>
                <span className="text-[11px] text-dark-charcoal/50 italic">Optional</span>
              </div>
              <textarea
                rows={3}
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                placeholder="Write anything you'd like us to know before we connect. This is optional."
                className="w-full px-4 py-3 bg-white text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 focus:outline-none transition-all shadow-sm resize-none"
              />
              <p className="mt-1 text-[11px] text-dark-charcoal/50">
                You can submit without writing anything here. Speak only what feels comfortable.
              </p>
            </div>

            {/* ========================================================= */}
            {/* SECTION E: Privacy Consent Checkbox                       */}
            {/* ========================================================= */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    if (errors.consent) setErrors((prev) => ({ ...prev, consent: undefined }));
                  }}
                  className="mt-0.5 h-4 w-4 rounded border-soft-sage text-muted-green focus:ring-muted-green cursor-pointer"
                />
                <span className="text-xs text-dark-charcoal/80 leading-relaxed">
                  I agree to be contacted regarding my support request and understand that my information will be handled according to the{" "}
                  <Link href="/privacy" className="text-muted-green underline hover:text-dark-charcoal">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && (
                <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.consent}
                </p>
              )}
            </div>

            {/* ========================================================= */}
            {/* SECTION F: Prominent Submit Button                        */}
            {/* ========================================================= */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-whatsapp-green hover:bg-[#20bd5a] active:bg-[#1da850] text-white rounded-2xl font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Saving your request...</span>
                  </div>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5 fill-white flex-shrink-0" />
                    <span>Continue on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-dark-charcoal/60 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-muted-green" />
                  100% Private & Confidential
                </span>
                <span>•</span>
                <span>No Payment / No Subscriptions</span>
                <span>•</span>
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
