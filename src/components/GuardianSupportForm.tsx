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
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Smile,
} from "lucide-react";

export default function GuardianSupportForm() {
  const { submitRequest } = useLeads();

  // Inputs
  const [guardianName, setGuardianName] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("10");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [concern, setConcern] = useState("Feeling Shy (Introvert)");
  const [additionalMessage, setAdditionalMessage] = useState("");
  const [consent, setConsent] = useState(true);

  // States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    guardianName: string;
    whatsappUrl: string;
  } | null>(null);

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
        preferredDate: "As soon as possible",
        preferredTime: "Direct WhatsApp Coordination",
        timezone: "Asia/Kolkata",
        isChildRequest: true,
        consent,
      });

      setSubmittedLead({
        guardianName,
        whatsappUrl: result.whatsappUrl,
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
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-soft-sage/40 text-center shadow-lg animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <span className="px-3 py-1 rounded-full bg-soft-sage/20 text-muted-green font-medium text-xs uppercase tracking-wider">
          S.C.O.U.T Guardian Enquiry Saved
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-dark-charcoal mt-3 mb-2">
          Thank you, {submittedLead.guardianName}
        </h3>
        <p className="text-sm text-dark-charcoal/75 max-w-lg mx-auto mb-6 leading-relaxed">
          Your consultation request for S.C.O.U.T has been received. Our team will coordinate with you directly on WhatsApp.
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
            className="w-full sm:w-auto px-6 py-3.5 border border-soft-sage/40 hover:bg-light-beige text-dark-charcoal rounded-full font-medium text-xs transition-colors cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-soft-sage/40 shadow-lg relative overflow-hidden">
      {/* Decorative circular accent */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-soft-sage/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

      <div className="text-center max-w-xl mx-auto mb-8">
        <div className="w-12 h-12 rounded-full bg-soft-sage/20 text-muted-green flex items-center justify-center mx-auto mb-3">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-charcoal mb-2">
          S.C.O.U.T &bull; Parent &amp; Guardian Consultation Request
        </h2>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
          Request guidance on supporting your child&apos;s emotional wellbeing and social confidence. Direct conversations occur solely with parents or legal guardians.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
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
                className="w-[105px] sm:w-[130px] shrink-0 truncate px-2.5 py-3 bg-white text-xs rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs cursor-pointer"
              >
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code} {c.country}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your WhatsApp number"
                className="flex-1 min-w-0 px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs"
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

        {/* Primary Area of Support (Handwritten Note & Screenshot Alignment) */}
        <div>
          <label className="block text-xs font-semibold text-dark-charcoal mb-1">
            Primary Area of Support
          </label>
          <select
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            className="w-full px-4 py-3 bg-white text-xs sm:text-sm rounded-xl border border-soft-sage/50 focus:border-muted-green focus:outline-none shadow-xs cursor-pointer"
          >
            <option value="Social Skills Training">Social Skills Training – Conversation, Non-Verbal Cues &amp; Peer Ease</option>
            <option value="Feeling Shy (Introvert)">Feeling Shy (Introvert) – Finding their voice &amp; conversation skills</option>
            <option value="Single Child">Single Child – Sharing, turn-taking &amp; peer group dynamics</option>
            <option value="Specially-Abled Loneliness">Specially-Abled Loneliness – Navigating cues, triggers &amp; inclusion</option>
            <option value="Social Anxiety & Communication">Social Anxiety &amp; Hesitation in groups/school</option>
            <option value="Emotional Regulation & Expression">Emotional regulation &amp; expressing feelings safely</option>
            <option value="Other Childhood Support">Other childhood social &amp; emotional support</option>
          </select>
        </div>

        {/* Additional Note */}
        <div>
          <label className="block text-xs font-semibold text-dark-charcoal mb-1">
            Write a Message <span className="text-dark-charcoal/50">(Optional)</span>
          </label>
          <textarea
            rows={3}
            value={additionalMessage}
            onChange={(e) => setAdditionalMessage(e.target.value)}
            placeholder="Share any background or specific questions you have about your child..."
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
              I verify that I am the parent or legal guardian of this child, authorize this consultation, and agree to the{" "}
              <a href="/privacy" className="underline text-muted-green hover:text-dark-charcoal">
                Child Safeguarding Policy
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
            Direct Guardian Support &bull; Zero Spam &bull; 100% Confidential
          </p>
        </div>
      </form>
    </div>
  );
}