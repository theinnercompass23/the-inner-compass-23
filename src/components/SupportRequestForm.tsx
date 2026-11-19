"use client";

import React, { useState } from "react";
import { useLeads } from "@/context/LeadContext";
import {
  SUPPORT_CATEGORIES,
  PREFERRED_LANGUAGES,
  PREFERRED_TIMES,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import {
  Heart,
  HeartHandshake,
  HeartCrack,
  Split,
  HeartOff,
  ShieldAlert,
  Users,
  CloudRain,
  Sparkles,
  UserX,
  Headphones,
  Compass,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ArrowRight,
  Lock,
} from "lucide-react";
import Link from "next/link";

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  categories?: string;
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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [preferredLanguage, setPreferredLanguage] = useState("Hindi");
  const [preferredTime, setPreferredTime] = useState("Anytime / As soon as possible");
  const [consent, setConsent] = useState(true);

  // States
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    id: string;
    fullName: string;
    whatsappUrl: string;
  } | null>(null);

  // Map category icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake":
        return <HeartHandshake className="w-5 h-5 text-muted-green" />;
      case "HeartCrack":
        return <HeartCrack className="w-5 h-5 text-muted-green" />;
      case "Split":
        return <Split className="w-5 h-5 text-muted-green" />;
      case "HeartOff":
        return <HeartOff className="w-5 h-5 text-muted-green" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-muted-green" />;
      case "Users":
        return <Users className="w-5 h-5 text-muted-green" />;
      case "CloudRain":
        return <CloudRain className="w-5 h-5 text-muted-green" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-muted-green" />;
      case "UserX":
        return <UserX className="w-5 h-5 text-muted-green" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 text-muted-green" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-muted-green" />;
      default:
        return <MessageSquare className="w-5 h-5 text-muted-green" />;
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fullName.trim() || fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    // Phone validation: allow digits, optional plus, at least 10 digits
    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone.trim() || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid WhatsApp mobile number (at least 10 digits).";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (selectedCategories.length === 0) {
      newErrors.categories = "Please select at least one topic you would like to talk about.";
    }

    if (!consent) {
      newErrors.consent = "You must agree to the privacy consent to continue.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const result = await submitRequest({
        fullName,
        phone,
        email,
        categories: selectedCategories,
        additionalMessage,
        preferredLanguage,
        preferredTime,
        consent,
      });

      setIsSubmitting(false);

      if (result.success) {
        setSubmittedLead({
          id: result.lead.id,
          fullName: result.lead.full_name,
          whatsappUrl: result.whatsappUrl,
        });

        // Open WhatsApp in new window/tab safely
        if (typeof window !== "undefined") {
          window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
        }
      }
    } catch (err) {
      setIsSubmitting(false);
      console.error("Submission error:", err);
    }
  };

  return (
    <section id="support-form" className="py-16 sm:py-20 bg-white border-y border-light-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Form Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            Private & Confidential
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal mt-1 mb-2">
            What Would You Like to Talk About?
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Choose what you&apos;re going through. We&apos;re here to listen without judgment.
          </p>
        </div>

        {/* Confirmation Screen if already submitted */}
        {submittedLead ? (
          <div className="bg-warm-white rounded-3xl p-8 sm:p-10 border border-soft-sage text-center space-y-6 shadow-sm">
            <div className="w-16 h-16 rounded-full bg-sage-100 text-muted-green flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-dark-charcoal">
                Thank You, {submittedLead.fullName}
              </h3>
              <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                Your request has been safely received. A WhatsApp window should have opened with your pre-filled message.
              </p>
            </div>

            {/* Direct WhatsApp Confirmation Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={submittedLead.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open in WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmittedLead(null);
                  clearCategories();
                  setFullName("");
                  setPhone("");
                  setEmail("");
                  setAdditionalMessage("");
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-semibold bg-white border border-light-beige hover:bg-light-beige text-dark-charcoal transition-colors"
              >
                Submit Another Request
              </button>
            </div>

            <div className="text-xs text-charcoal-subtle pt-2">
              Didn&apos;t open automatically? Click the green button above or message our team directly at{" "}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="underline font-semibold text-dark-charcoal"
              >
                {WHATSAPP_DISPLAY}
              </a>
              .
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* 1. Support Categories Grid (12 options) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-bold uppercase tracking-wider text-dark-charcoal">
                  1. Select What You Are Going Through{" "}
                  <span className="text-coral-soft">*</span>
                </label>
                {selectedCategories.length > 0 && (
                  <button
                    type="button"
                    onClick={clearCategories}
                    className="text-[11px] text-muted-green hover:underline font-medium"
                  >
                    Clear selection ({selectedCategories.length})
                  </button>
                )}
              </div>

              {errors.categories && (
                <div className="p-3 rounded-xl bg-coral-light border border-coral-soft/30 text-coral-soft text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.categories}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SUPPORT_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategories.includes(cat.label);
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => toggleCategory(cat.label)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-start gap-3.5 ${
                        isSelected
                          ? "bg-sage-100 border-muted-green shadow-sm ring-1 ring-muted-green"
                          : "bg-warm-white border-light-beige hover:border-soft-sage hover:bg-white"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl shrink-0 transition-colors ${
                          isSelected ? "bg-white" : "bg-white/80"
                        }`}
                      >
                        {getIcon(cat.icon)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-serif font-bold text-dark-charcoal leading-snug">
                          {cat.label}
                        </div>
                        <div className="text-[11px] text-charcoal-muted leading-tight mt-0.5 line-clamp-2">
                          {cat.description}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Optional text field: Share anything else */}
            <div>
              <label
                htmlFor="additional-message"
                className="block text-xs font-bold uppercase tracking-wider text-dark-charcoal mb-1.5"
              >
                Would you like to share anything else?{" "}
                <span className="text-charcoal-subtle font-normal lowercase">(optional)</span>
              </label>
              <textarea
                id="additional-message"
                rows={3}
                value={additionalMessage}
                onChange={(e) => setAdditionalMessage(e.target.value)}
                placeholder="Write a little about what's on your mind..."
                className="w-full text-xs p-3.5 rounded-2xl border border-gray-200 focus:border-muted-green focus:ring-1 focus:ring-muted-green outline-none text-dark-charcoal bg-warm-white placeholder:text-charcoal-subtle"
              />
            </div>

            {/* 3. Personal Details */}
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-dark-charcoal">
                2. Your Contact Details <span className="text-coral-soft">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-[11px] font-semibold text-charcoal-muted mb-1"
                  >
                    Full Name <span className="text-coral-soft">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className={`w-full text-xs px-3.5 py-3 rounded-2xl border outline-none text-dark-charcoal bg-warm-white ${
                      errors.fullName
                        ? "border-coral-soft focus:ring-1 focus:ring-coral-soft"
                        : "border-gray-200 focus:border-muted-green focus:ring-1 focus:ring-muted-green"
                    }`}
                  />
                  {errors.fullName && (
                    <span className="text-[10px] text-coral-soft mt-1 block">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* WhatsApp Mobile Number */}
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-[11px] font-semibold text-charcoal-muted mb-1"
                  >
                    WhatsApp Mobile Number <span className="text-coral-soft">*</span>
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className={`w-full text-xs px-3.5 py-3 rounded-2xl border outline-none text-dark-charcoal bg-warm-white ${
                      errors.phone
                        ? "border-coral-soft focus:ring-1 focus:ring-coral-soft"
                        : "border-gray-200 focus:border-muted-green focus:ring-1 focus:ring-muted-green"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[10px] text-coral-soft mt-1 block">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email-address"
                    className="block text-[11px] font-semibold text-charcoal-muted mb-1"
                  >
                    Email Address <span className="text-coral-soft">*</span>
                  </label>
                  <input
                    id="email-address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. your.email@example.com"
                    className={`w-full text-xs px-3.5 py-3 rounded-2xl border outline-none text-dark-charcoal bg-warm-white ${
                      errors.email
                        ? "border-coral-soft focus:ring-1 focus:ring-coral-soft"
                        : "border-gray-200 focus:border-muted-green focus:ring-1 focus:ring-muted-green"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-coral-soft mt-1 block">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Optional Preferences: Language & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label
                    htmlFor="pref-language"
                    className="block text-[11px] font-semibold text-charcoal-muted mb-1"
                  >
                    Preferred Language <span className="text-charcoal-subtle font-normal">(optional)</span>
                  </label>
                  <select
                    id="pref-language"
                    value={preferredLanguage}
                    onChange={(e) => setPreferredLanguage(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-2xl border border-gray-200 bg-warm-white text-dark-charcoal outline-none focus:border-muted-green"
                  >
                    {PREFERRED_LANGUAGES.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="pref-time"
                    className="block text-[11px] font-semibold text-charcoal-muted mb-1"
                  >
                    Preferred Time to Connect <span className="text-charcoal-subtle font-normal">(optional)</span>
                  </label>
                  <select
                    id="pref-time"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-xs px-3.5 py-3 rounded-2xl border border-gray-200 bg-warm-white text-dark-charcoal outline-none focus:border-muted-green"
                  >
                    {PREFERRED_TIMES.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 4. Privacy Consent Checkbox */}
            <div className="space-y-1 pt-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 accent-muted-green h-4 w-4 rounded"
                />
                <span className="text-xs text-charcoal-muted leading-relaxed">
                  I agree to be contacted regarding my support request. My information will be handled privately according to the{" "}
                  <Link href="/privacy" className="underline text-dark-charcoal font-medium">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.consent && (
                <span className="text-[10px] text-coral-soft block pl-6">
                  {errors.consent}
                </span>
              )}
            </div>

            {/* 5. Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-full text-sm font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{isSubmitting ? "Connecting..." : "Continue on WhatsApp"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-3 text-[11px] text-charcoal-subtle">
                <Lock className="w-3.5 h-3.5 text-muted-green" />
                <span>
                  Your request is saved securely. WhatsApp will open with your pre-filled message for verification.
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
