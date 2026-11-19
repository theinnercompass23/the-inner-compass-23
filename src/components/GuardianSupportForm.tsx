"use client";

import React, { useState } from "react";
import { useLeads } from "@/context/LeadContext";
import {
  COUNTRY_CODES,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  ShieldCheck,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Lock,
  Globe,
  Smile,
  ChevronDown,
} from "lucide-react";
import {
  getISTDateTime,
  validateBookingDateTime,
  formatISOToIndianDate,
} from "@/lib/bookingValidation";

export default function GuardianSupportForm() {
  const { submitRequest } = useLeads();

  // Inputs
  const [guardianName, setGuardianName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("10");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("School stress & anxiety");
  const [additionalMessage, setAdditionalMessage] = useState("");

  // Date & Time (strict 24-hour clock, Asia/Kolkata)
  const [minDate, setMinDate] = useState("2026-02-20");
  const [rawDate, setRawDate] = useState("2026-02-21");
  const [timeHour, setTimeHour] = useState("18");
  const [timeMinute, setTimeMinute] = useState("00");
  const [consent, setConsent] = useState(true);

  // States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    guardianName: string;
    whatsappUrl: string;
    date: string;
    time: string;
  } | null>(null);

  // Update dates client-side
  React.useEffect(() => {
    try {
      const { todayISO } = getISTDateTime();
      setMinDate(todayISO);
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setRawDate(tomorrow.toISOString().split("T")[0]);
    } catch {
      // fallback
    }
  }, []);

  const getEffective24HourTime = () => `${timeHour.padStart(2, "0")}:${timeMinute.padStart(2, "0")}`;

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!guardianName.trim() || guardianName.trim().length < 2) {
      errs.guardianName = "Please enter your full parent or guardian name.";
    }

    const ageNum = parseInt(childAge, 10);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 17) {
      errs.childAge = "Child age must be between 1 and 17 years.";
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (!phone.trim() || cleanPhone.length < 7) {
      errs.phone = "Please enter a valid WhatsApp mobile number.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    // Strict 1-hour advance booking validation
    const dtCheck = validateBookingDateTime(rawDate, getEffective24HourTime());
    if (!dtCheck.isValid) {
      errs.preferredDate = dtCheck.error || "Invalid booking time.";
    }

    if (!consent) {
      errs.consent = "Verifiable parental consent is mandatory for child-related support.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const indianDate = formatISOToIndianDate(rawDate);
    const effectiveTime = getEffective24HourTime();

    try {
      const result = await submitRequest({
        fullName: childName.trim() ? `${childName.trim()} (Child of ${guardianName.trim()})` : `Child of ${guardianName.trim()}`,
        guardianName: guardianName.trim(),
        age: parseInt(childAge, 10),
        phone,
        countryCode,
        email,
        categories: [concern],
        additionalMessage,
        preferredDate: indianDate,
        preferredTime: effectiveTime,
        timezone: "Asia/Kolkata",
        isChildRequest: true,
        consent,
      });

      setSubmittedLead({
        guardianName,
        whatsappUrl: result.whatsappUrl,
        date: indianDate,
        time: effectiveTime,
      });

      // Auto redirect
      const isMobile = typeof window !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
        window.location.href = result.whatsappUrl;
      } else {
        window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
      }
    } catch (err) {
      console.error(err);
      setErrors({ consent: "An error occurred while saving your enquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedLead) {
    return (
      <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-soft-sage/40 text-center shadow-lg animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="px-3 py-1 rounded-full bg-soft-sage/20 text-muted-green font-medium text-xs uppercase tracking-wider">
          Guardian Enquiry Saved
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark-charcoal mt-3 mb-2">
          Thank you, {submittedLead.guardianName}
        </h3>
        <p className="text-sm text-dark-charcoal/75 max-w-lg mx-auto mb-6 leading-relaxed">
          Your parent consultation request has been received. Our team will coordinate with you on WhatsApp for{" "}
          <strong className="text-dark-charcoal">{submittedLead.date}</strong> at{" "}
          <strong className="text-dark-charcoal">{submittedLead.time} (24h IST)</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={submittedLead.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-semibold shadow-md transition-all text-sm"
          >
            <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
            <span>Open in WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setSubmittedLead(null)}
            className="w-full sm:w-auto px-6 py-3.5 border border-soft-sage/40 hover:bg-light-beige text-dark-charcoal rounded-full font-medium text-xs transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/85 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-white/60 shadow-lg relative overflow-hidden">
      {/* Decorative circular glass accent */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-soft-sage/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="w-12 h-12 rounded-full bg-soft-sage/20 text-muted-green flex items-center justify-center mx-auto mb-3">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-charcoal mb-2">
          Parent &amp; Guardian Consultation Request
        </h2>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
          Request guidance on supporting your child&apos;s emotional wellbeing. Direct conversations with our team occur solely with parents/legal guardians.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Guardian Name */}
        <div>
          <label className="block text-xs font-semibold text-dark-charcoal mb-1">
            Parent / Legal Guardian Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={guardianName}
            onChange={(e) => setGuardianName(e.target.value)}
            placeholder="Enter your full name as parent/guardian"
            className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs"
          />
          {errors.guardianName && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.guardianName}
            </p>
          )}
        </div>

        {/* Child Reference & Age */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-dark-charcoal mb-1">
              Child First Name / Reference <span className="text-dark-charcoal/50">(Optional)</span>
            </label>
            <input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="e.g. My 10yo daughter"
              className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-dark-charcoal mb-1">
              Child Age (1 to 17 years) <span className="text-rose-500">*</span>
            </label>
            <select
              value={childAge}
              onChange={(e) => setChildAge(e.target.value)}
              className="w-full px-3 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs cursor-pointer"
            >
              {Array.from({ length: 17 }, (_, i) => i + 1).map((age) => (
                <option key={age} value={age}>
                  {age} {age === 1 ? "year old" : "years old"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Contact info: Phone & Email */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-dark-charcoal mb-1">
              Guardian WhatsApp Mobile Number <span className="text-rose-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-32 px-3 py-3 bg-white text-xs rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs cursor-pointer"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your WhatsApp number"
                className="flex-1 px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs"
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-dark-charcoal mb-1">
              Guardian Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs"
            />
            {errors.email && (
              <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Concern Selection */}
        <div>
          <label className="block text-xs font-semibold text-dark-charcoal mb-1">
            Primary Area of Concern
          </label>
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs cursor-pointer"
          >
            <option value="School stress & anxiety">School stress, exam worry &amp; peer anxiety</option>
            <option value="Loneliness & social isolation">Loneliness, difficulty making friends</option>
            <option value="Family separation or divorce">Coping with family separation, divorce, or conflict</option>
            <option value="Grief or loss of a loved one">Grief or bereavement in the family</option>
            <option value="Difficulty expressing feelings">Emotional withdrawal, silence, or anger outbursts</option>
            <option value="Parenting support & active listening">How I can become a better listener for my child</option>
            <option value="Other">Other childhood emotional concern</option>
          </select>
        </div>

        {/* Booking Date & 24h Time (With 1-hour advance notice) */}
        <div className="bg-light-beige/40 p-4 sm:p-5 rounded-2xl border border-soft-sage/30 space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-1">
            <span className="text-xs font-bold text-dark-charcoal flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-muted-green" /> Preferred Consultation Time (24h IST)
            </span>
            <span className="text-[11px] text-muted-green font-semibold">Strict 24-Hour Clock</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-dark-charcoal mb-1">Date</label>
              <input
                type="date"
                value={rawDate}
                min={minDate}
                onChange={(e) => setRawDate(e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-lg border border-soft-sage/40 text-xs focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-dark-charcoal mb-1">Time (24h Clock)</label>
              <div className="flex items-center gap-2">
                <select
                  value={timeHour}
                  onChange={(e) => setTimeHour(e.target.value)}
                  className="w-1/2 px-2 py-2 bg-white rounded-lg border border-soft-sage/40 text-xs font-semibold focus:outline-none"
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
                <select
                  value={timeMinute}
                  onChange={(e) => setTimeMinute(e.target.value)}
                  className="w-1/2 px-2 py-2 bg-white rounded-lg border border-soft-sage/40 text-xs font-semibold focus:outline-none"
                >
                  {["00", "15", "30", "45"].map((m) => (
                    <option key={m} value={m}>
                      :{m}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-dark-charcoal/65 italic">
            Please book at least 1 hour in advance. Our team will confirm availability.
          </p>

          {errors.preferredDate && (
            <p className="text-xs text-rose-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.preferredDate}
            </p>
          )}
        </div>

        {/* Additional Note */}
        <div>
          <label className="block text-xs font-semibold text-dark-charcoal mb-1">
            Anything else you would like us to know? <span className="text-dark-charcoal/50">(Optional)</span>
          </label>
          <textarea
            rows={2}
            value={additionalMessage}
            onChange={(e) => setAdditionalMessage(e.target.value)}
            placeholder="Share any background you feel comfortable discussing..."
            className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs resize-none"
          />
        </div>

        {/* Mandatory Legal Guardian Consent */}
        <div>
          <label className="flex items-start gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-soft-sage text-muted-green focus:ring-muted-green"
            />
            <span className="text-xs text-dark-charcoal/80 leading-relaxed">
              I verify that I am the parent or legal guardian of this child, authorize this support consultation, and agree to our{" "}
              <a href="/privacy" className="underline text-muted-green hover:text-dark-charcoal">
                Child Safeguarding &amp; Privacy Policy
              </a>
              .
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.consent}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-2xl font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 disabled:opacity-70 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
            <span>{isSubmitting ? "Saving Request..." : "Continue on WhatsApp"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-[11px] text-dark-charcoal/55 mt-2">
            Direct Guardian Support: {WHATSAPP_DISPLAY} &bull; 100% Confidential
          </p>
        </div>
      </form>
    </div>
  );
}
