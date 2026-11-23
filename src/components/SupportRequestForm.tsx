"use client";

import React, { useState } from "react";
import { useLeads } from "@/context/LeadContext";
import {
  SUPPORT_CATEGORIES,
  COUNTRY_CODES,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  Heart,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lock,
  ChevronDown,
  X,
  Search,
  Smile,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Link from "next/link";
import { validateAdultAge } from "@/lib/bookingValidation";

interface FormErrors {
  fullName?: string;
  age?: string;
  phone?: string;
  email?: string;
  categories?: string;
  otherText?: string;
  consent?: string;
}

export default function SupportRequestForm() {
  const {
    submitRequest,
    selectedCategories,
    toggleCategory,
    clearCategories,
  } = useLeads();

  // Form inputs
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [otherCategoryText, setOtherCategoryText] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");

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
  } | null>(null);

  // Filter categories for searchable dropdown
  const filteredCategories = SUPPORT_CATEGORIES.filter((cat) =>
    cat.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.shortLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isOtherSelected =
    selectedCategories.includes("Other") ||
    selectedCategories.some((c) => c.toLowerCase().includes("other"));

  // Validation
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Full Name
    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    // 2. Adult Age (18 to 80)
    if (!age || !age.trim()) {
      newErrors.age = "Please enter your age.";
    } else {
      const ageNum = parseInt(age, 10);
      if (isNaN(ageNum) || ageNum < 18 || ageNum > 80) {
        newErrors.age = "Our active listening service is exclusively for adults aged 18 to 80.";
      }
    }

    // 3. WhatsApp Mobile Number
    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone.trim() || cleanPhone.length < 7) {
      newErrors.phone = "Please enter a valid WhatsApp mobile number.";
    }

    // 4. Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    // 5. Categories
    if (selectedCategories.length === 0) {
      newErrors.categories = "Please select at least one topic from the dropdown.";
    }

    if (isOtherSelected && (!otherCategoryText.trim() || otherCategoryText.trim().length < 2)) {
      newErrors.otherText = "Please tell us what you would like to talk about.";
    }

    // 6. Consent
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
    const ageNum = parseInt(age, 10);

    try {
      // 1. Perform Server-Side Validation via API Route
      try {
        const res = await fetch("/api/submit-request", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName,
            age: ageNum,
            phone,
            email,
            categories: selectedCategories,
            consent,
          }),
        });

        if (!res.ok) {
          const resData = await res.json();
          if (resData.error) {
            setErrors({ phone: resData.error });
            setIsSubmitting(false);
            return;
          }
        }
      } catch {
        // network or server-side fallback: proceed with client-validated data
      }

      // 2. Save lead in local store & Supabase
      const result = await submitRequest({
        fullName,
        age: ageNum,
        phone,
        countryCode,
        email,
        categories: selectedCategories,
        otherCategoryText: isOtherSelected ? otherCategoryText : undefined,
        additionalMessage,
        consent,
      });

      setSubmittedLead({
        id: result.lead.id,
        fullName: result.lead.full_name,
        whatsappUrl: result.whatsappUrl,
      });

      // 3. Open WhatsApp in new tab / application
      const isMobile =
        typeof window !== "undefined" &&
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = result.whatsappUrl;
      } else {
        window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors({
        consent:
          "An error occurred while saving your request. Please message directly on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // SUCCESS CONFIRMATION STATE (Circular Glassmorphism)
  if (submittedLead) {
    return (
      <section id="support-form" className="scroll-mt-24 py-16 px-4 bg-warm-white">
        <div className="max-w-2xl mx-auto bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl border border-white/60 text-center animate-fade-in">
          {/* Circular Glass Icon */}
          <div className="w-20 h-20 bg-[#25D366]/15 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <WhatsAppIcon className="w-10 h-10" color="#25D366" />
          </div>

          <span className="inline-block px-3.5 py-1 bg-soft-sage/25 text-muted-green font-semibold text-xs rounded-full mb-3 tracking-wider uppercase">
            Request Saved &bull; Ready on WhatsApp
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl text-dark-charcoal mb-3">
            Thank you, {submittedLead.fullName}.
          </h3>

          <p className="text-dark-charcoal/75 text-sm sm:text-base mb-6 max-w-lg mx-auto leading-relaxed">
            Your support request has been received. Our listening team is ready to connect with you in complete confidence.
          </p>

          <div className="p-4 bg-light-beige/60 backdrop-blur-xs rounded-2xl mb-8 text-left text-xs sm:text-sm text-dark-charcoal/80 space-y-1.5 max-w-md mx-auto border border-soft-sage/30">
            <p className="font-semibold text-dark-charcoal flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-green" />
              Next Step: Press Send in WhatsApp
            </p>
            <p className="text-xs text-dark-charcoal/65 pl-6 leading-relaxed">
              WhatsApp will open with your pre-filled message. Simply press <strong>Send</strong> to initiate your confidential conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <a
              href={submittedLead.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base group cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
              <span>Open in WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
              className="w-full sm:w-auto px-6 py-4 border border-soft-sage/40 hover:bg-light-beige text-dark-charcoal rounded-full font-medium transition-colors text-xs sm:text-sm cursor-pointer"
            >
              Submit Another Request
            </button>
          </div>

          {/* Fallback Contact Instructions */}
          <div className="mt-8 pt-6 border-t border-soft-sage/20 text-xs text-dark-charcoal/60 space-y-1">
            <p className="font-medium text-dark-charcoal">
              WhatsApp didn&apos;t open automatically?
            </p>
            <p>
              Message our listening desk directly at{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-muted-green underline hover:text-dark-charcoal"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="support-form"
      className="scroll-mt-20 py-16 sm:py-24 px-4 bg-gradient-to-b from-warm-white via-light-beige/30 to-warm-white"
    >
      <div className="max-w-3xl mx-auto">
        {/* Circular Glassmorphism Card Container */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-4 sm:p-10 shadow-xl border border-white/60 relative overflow-hidden w-full max-w-full">
          {/* Decorative Accents */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-soft-sage/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber-100/25 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-xs border border-soft-sage/40 text-muted-green font-semibold text-xs rounded-full mb-4 shadow-xs">
              <Heart className="w-4 h-4 fill-muted-green/20" />
              <span>Human Peer Listening Service &bull; Adults 18–80</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-dark-charcoal tracking-tight mb-3">
              Tell Us What&apos;s On Your Mind
            </h2>
            <p className="text-dark-charcoal/75 text-sm sm:text-base leading-relaxed">
              Share a little about what you&apos;re going through. Someone is here to listen without judgment.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* ========================================================= */}
            {/* SECTION A: Problem Selection Dropdown                     */}
            {/* ========================================================= */}
            <div className="bg-white/70 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-soft-sage/30 shadow-xs">
              <label className="block text-xs sm:text-sm font-semibold text-dark-charcoal mb-1">
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
                  className={`w-full min-h-[50px] px-4 py-2.5 text-left bg-white/90 rounded-xl border transition-all flex items-center justify-between gap-2 shadow-xs ${
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
                      <span className="text-dark-charcoal/40 text-xs sm:text-sm">
                        Select your concerns...
                      </span>
                    ) : (
                      selectedCategories.map((cat) => (
                        <span
                          key={cat}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-soft-sage/35 text-dark-charcoal text-xs font-medium rounded-lg"
                        >
                          {cat}
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCategory(cat);
                            }}
                            className="hover:text-rose-500 cursor-pointer p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </span>
                        </span>
                      ))
                    )}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-dark-charcoal/50 transition-transform ${
                      isDropdownOpen ? "rotate-180 text-muted-green" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu Panel */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-soft-sage/40 z-30 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="p-3 border-b border-soft-sage/20 bg-warm-white/50">
                      <div className="relative">
                        <Search className="w-4 h-4 text-dark-charcoal/40 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search issues (e.g. Loneliness, Breakup)..."
                          className="w-full pl-9 pr-3 py-2 text-xs bg-white rounded-lg border border-soft-sage/50 focus:outline-none focus:border-muted-green"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="max-h-60 overflow-y-auto p-2 space-y-1">
                      {filteredCategories.length === 0 ? (
                        <div className="p-4 text-center text-xs text-dark-charcoal/50">
                          No topics match your search.
                        </div>
                      ) : (
                        filteredCategories.map((cat) => {
                          const isSelected = selectedCategories.includes(cat.shortLabel);
                          return (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => toggleCategory(cat.shortLabel)}
                              className={`w-full px-3 py-2.5 rounded-xl text-left text-xs sm:text-sm flex items-center justify-between transition-colors ${
                                isSelected
                                  ? "bg-soft-sage/30 text-dark-charcoal font-semibold"
                                  : "hover:bg-warm-white text-dark-charcoal/80"
                              }`}
                            >
                              <div className="flex flex-col">
                                <span>{cat.label}</span>
                                <span className="text-[11px] text-dark-charcoal/50 font-normal">
                                  {cat.description}
                                </span>
                              </div>
                              {isSelected && (
                                <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })
                      )}
                    </div>

                    <div className="p-2.5 border-t border-soft-sage/20 bg-warm-white/80 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={clearCategories}
                        className="text-dark-charcoal/60 hover:text-rose-500 font-medium px-2 py-1"
                      >
                        Clear All
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(false)}
                        className="px-3 py-1 bg-dark-charcoal text-white rounded-lg font-medium hover:bg-black"
                      >
                        Done ({selectedCategories.length})
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Other Category Specification Input */}
              {isOtherSelected && (
                <div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-150">
                  <label className="block text-xs font-medium text-dark-charcoal mb-1">
                    Please describe what you are going through: <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={otherCategoryText}
                    onChange={(e) => {
                      setOtherCategoryText(e.target.value);
                      if (errors.otherText) setErrors((prev) => ({ ...prev, otherText: undefined }));
                    }}
                    placeholder="e.g., Struggling with career transition and social burnout"
                    className="w-full px-3.5 py-2.5 bg-white rounded-xl border border-soft-sage/50 text-xs sm:text-sm focus:outline-none focus:border-muted-green"
                  />
                  {errors.otherText && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.otherText}
                    </p>
                  )}
                </div>
              )}

              {errors.categories && (
                <p className="mt-2 text-xs text-rose-600 flex items-center gap-1 form-error-anchor">
                  <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                  {errors.categories}
                </p>
              )}
            </div>

            {/* ========================================================= */}
            {/* SECTION B: Your Information                               */}
            {/* ========================================================= */}
            <div className="bg-white/70 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-soft-sage/30 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-soft-sage/20">
                <span className="text-xs font-semibold text-dark-charcoal uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-muted-green" />
                  Your Information (Strictly Confidential)
                </span>
                <span className="text-[11px] text-muted-green font-medium flex items-center gap-1">
                  <Lock className="w-3 h-3" /> End-to-End Private
                </span>
              </div>

              {/* Full Name & Age Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
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
                    className={`w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border focus:outline-none transition-all shadow-xs ${
                      errors.fullName
                        ? "border-rose-400 ring-2 ring-rose-100"
                        : "border-soft-sage/50 focus:border-muted-green"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 form-error-anchor">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
                    Your Age (18–80) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="80"
                    value={age}
                    onChange={(e) => {
                      setAge(e.target.value);
                      if (errors.age) setErrors((prev) => ({ ...prev, age: undefined }));
                    }}
                    placeholder="Enter your age (e.g. 28)"
                    className={`w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border focus:outline-none transition-all shadow-xs ${
                      errors.age
                        ? "border-rose-400 ring-2 ring-rose-100"
                        : "border-soft-sage/50 focus:border-muted-green"
                    }`}
                  />
                  {errors.age && (
                    <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 form-error-anchor">
                      <AlertCircle className="w-3 h-3" />
                      {errors.age}
                    </p>
                  )}
                </div>
              </div>

              {/* Children Support Notice Link */}
              <div className="p-2.5 bg-warm-white rounded-xl border border-soft-sage/30 text-[11px] text-dark-charcoal/70 flex items-center justify-between">
                <span>Looking for support for a child or minor under 18?</span>
                <Link
                  href="/support-for-children"
                  className="font-semibold text-muted-green hover:underline flex items-center gap-1"
                >
                  Visit SCOUT (Children) &rarr;
                </Link>
              </div>

              {/* WhatsApp Mobile Number Row */}
              <div>
                <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
                  WhatsApp Mobile Number <span className="text-rose-500">*</span>
                </label>
                <div className="flex gap-2 w-full">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="w-[105px] sm:w-[130px] shrink-0 px-2 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs truncate"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={`${c.code}-${c.country}`} value={c.code}>
                        {c.code} ({c.country})
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    placeholder="Enter your WhatsApp number"
                    className={`flex-1 min-w-0 px-3.5 sm:px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border focus:outline-none transition-all shadow-xs ${
                      errors.phone
                        ? "border-rose-400 ring-2 ring-rose-100"
                        : "border-soft-sage/50 focus:border-muted-green"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 form-error-anchor">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-dark-charcoal mb-1.5">
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
                  className={`w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border focus:outline-none transition-all shadow-xs ${
                    errors.email
                      ? "border-rose-400 ring-2 ring-rose-100"
                      : "border-soft-sage/50 focus:border-muted-green"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 form-error-anchor">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* ========================================================= */}
            {/* SECTION C: Message – OPTIONAL                             */}
            {/* ========================================================= */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-semibold text-dark-charcoal">
                  Write a Message
                </label>
                <span className="text-[11px] text-dark-charcoal/50 italic">Optional</span>
              </div>
              <textarea
                rows={3}
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:ring-2 focus:ring-muted-green/20 focus:outline-none transition-all shadow-xs resize-none"
              />
            </div>

            {/* ========================================================= */}
            {/* SECTION D: Privacy Consent Checkbox                       */}
            {/* ========================================================= */}
            <div className="pt-1">
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
                  <Link href="/privacy" className="text-muted-green underline hover:text-dark-charcoal font-medium">
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
            {/* SECTION E: Submit Button with WhatsApp Brand Icon         */}
            {/* ========================================================= */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white rounded-full font-semibold text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Validating &amp; Connecting...</span>
                  </div>
                ) : (
                  <>
                    <WhatsAppIcon className="w-6 h-6" color="#FFFFFF" />
                    <span>Continue on WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-dark-charcoal/60 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-muted-green" />
                  100% Confidential
                </span>
                <span>&bull;</span>
                <span>Zero Cost / No Subscription</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <WhatsAppIcon className="w-3.5 h-3.5" color="#25D366" />
                  Instant WhatsApp Connect
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
