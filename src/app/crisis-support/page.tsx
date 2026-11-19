"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import {
  Phone,
  ShieldAlert,
  Heart,
  Globe,
  FileDown,
  ExternalLink,
  LifeBuoy,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function CrisisSupportPage() {
  const { quickExit } = useApp();

  // Safety Plan Builder State
  const [warningSigns, setWarningSigns] = useState(
    "Racing thoughts, withdrawing from family, sleeplessness for 2+ nights."
  );
  const [copingStrategies, setCopingStrategies] = useState(
    "1-minute box breathing on Haven, making a hot cup of chamomile tea, listening to rainfall."
  );
  const [distractionSettings, setDistractionSettings] = useState(
    "Going for a walk in the local park, sitting in a quiet café, watching comforting cooking videos."
  );
  const [trustedPeople, setTrustedPeople] = useState(
    "Rohan (Brother - 98765 43210), Ankit (Friend - 98123 45678)"
  );
  const [professionalsToCall, setProfessionalsToCall] = useState(
    "Tele-MANAS: 14416, Dr. Ananya Sharma (Haven Psychologist)"
  );
  const [safeEnvironment, setSafeEnvironment] = useState(
    "Give medicine box to roommate, stay in the living room rather than isolated bedroom."
  );
  const [planSaved, setPlanSaved] = useState(false);

  const indianHelplines = [
    {
      name: "Tele-MANAS (Govt. of India)",
      number: "14416",
      altNumber: "1800-891-4416",
      desc: "Comprehensive 24/7 mental health service by Ministry of Health & Family Welfare, NIMHANS. Available in 20+ Indian languages.",
      highlight: true,
      badge: "Free • 24/7 • Multilingual",
    },
    {
      name: "National Emergency Services",
      number: "112",
      altNumber: "102 (Ambulance)",
      desc: "Single emergency response number across India for police, fire, and medical ambulance.",
      highlight: true,
      badge: "Immediate Dispatch",
    },
    {
      name: "KIRAN Mental Health Helpline",
      number: "1800-599-0019",
      altNumber: "Toll Free",
      desc: "Dedicated mental health helpline by the Department of Empowerment of Persons with Disabilities.",
      highlight: false,
      badge: "Govt of India",
    },
    {
      name: "Vandrevala Foundation",
      number: "9999 666 555",
      altNumber: "WhatsApp / Call",
      desc: "Free, confidential 24/7 counseling support for distress, depression, and severe anxiety.",
      highlight: false,
      badge: "Non-Profit 24/7",
    },
    {
      name: "AASRA Suicide Prevention",
      number: "9820466726",
      altNumber: "24/7 Helpline",
      desc: "Confidential crisis intervention for individuals experiencing suicidal thoughts.",
      highlight: false,
      badge: "Crisis Line",
    },
    {
      name: "iCall (TISS Mumbai)",
      number: "9152987821",
      altNumber: "Mon - Sat (8 AM - 10 PM)",
      desc: "Psychosocial counseling provided by trained mental health professionals at Tata Institute of Social Sciences.",
      highlight: false,
      badge: "TISS Mumbai",
    },
  ];

  const internationalHelplines = [
    { country: "United States & Canada", number: "988", name: "Suicide & Crisis Lifeline" },
    { country: "United Kingdom", number: "111", name: "NHS Mental Health Services" },
    { country: "Australia", number: "13 11 14", name: "Lifeline Australia" },
    { country: "International Directory", number: "befrienders.org", name: "Befrienders Worldwide" },
  ];

  const downloadSafetyPlan = () => {
    const content = `HAVEN PERSONAL CRISIS SAFETY PLAN
===================================================
1. My Personal Warning Signs:
${warningSigns}

2. Internal Coping Strategies (What I can do alone):
${copingStrategies}

3. People & Places that provide gentle distraction:
${distractionSettings}

4. Trusted Loved Ones I can reach out to:
${trustedPeople}

5. Professionals & Emergency Helplines to contact:
• Tele-MANAS (India Govt Helpline): 14416
• National Emergency: 112
${professionalsToCall}

6. Steps to make my environment safe:
${safeEnvironment}
===================================================
Generated on Haven (https://haven.care)
"Nobody should feel like they have to face everything alone."`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "my-haven-safety-plan.txt";
    a.click();
    URL.revokeObjectURL(url);
    setPlanSaved(true);
    setTimeout(() => setPlanSaved(false), 3000);
  };

  return (
    <div className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal">
      {/* Top Banner & Quick Exit */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-sand">
        <div className="flex items-center gap-2 text-coral-soft font-bold text-xs uppercase tracking-wider">
          <ShieldAlert className="w-4 h-4" />
          <span>Immediate Crisis & Safety Resources</span>
        </div>
        <button
          onClick={quickExit}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
          title="Immediately redirects to Google for privacy"
        >
          Quick Exit
        </button>
      </div>

      {/* Main Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal">
          You Are Not Alone. Help Is Right Here.
        </h1>
        <p className="text-sm text-charcoal-muted leading-relaxed">
          If you are in distress, having thoughts of self-harm, or feel unable to keep yourself safe, please reach out to the dedicated crisis services below immediately. These numbers are free, confidential, and staffed by compassionate professionals.
        </p>
      </div>

      {/* Emergency Immediate Callout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {/* Tele-MANAS Card */}
        <div className="p-8 rounded-3xl bg-sage-50 border-2 border-sage-300 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-200 text-sage-900 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-3.5 h-3.5" />
              National 24/7 Helpline (India)
            </div>
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              Tele-MANAS
            </h2>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Government of India&apos;s National Tele Mental Health Programme. Connects you with certified clinical counselors and psychiatrists across all Indian states in your mother tongue.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="tel:14416"
              className="w-full py-4 rounded-2xl bg-sage-700 hover:bg-sage-800 text-white font-bold text-center block shadow-md transition-all text-sm tracking-wide"
            >
              📞 Call 14416 (Toll-Free 24/7)
            </a>
            <span className="block text-center text-[11px] text-sage-800 font-medium mt-2">
              Alternate: 1800-891-4416
            </span>
          </div>
        </div>

        {/* National Emergency Services 112 */}
        <div className="p-8 rounded-3xl bg-coral-light/60 border-2 border-coral-soft/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-soft/20 text-coral-soft text-xs font-bold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              Immediate Rescue & Medical Emergency
            </div>
            <h2 className="text-2xl font-serif font-bold text-charcoal">
              National Emergency Services
            </h2>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              If you or someone around you is in immediate danger of injury, overdose, or requires rapid ambulance dispatch, contact National Emergency Services directly.
            </p>
          </div>

          <div className="pt-6">
            <a
              href="tel:112"
              className="w-full py-4 rounded-2xl bg-coral-soft hover:bg-coral-soft/90 text-white font-bold text-center block shadow-md transition-all text-sm tracking-wide"
            >
              🚨 Call 112 (Emergency Police & Ambulance)
            </a>
            <span className="block text-center text-[11px] text-coral-soft font-medium mt-2">
              Available nationwide across all mobile operators
            </span>
          </div>
        </div>
      </div>

      {/* Directory of Helplines in India */}
      <div className="mb-16 space-y-4">
        <h3 className="font-serif font-bold text-xl text-charcoal">
          Comprehensive Helplines Directory (India)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {indianHelplines.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-warm-sand shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2 mb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-charcoal">{item.name}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-sage-50 text-sage-800">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-charcoal-subtle">{item.altNumber}</span>
                <a
                  href={`tel:${item.number.replace(/\s+/g, "")}`}
                  className="px-4 py-1.5 rounded-full text-xs font-bold bg-sage-100 hover:bg-sage-200 text-sage-900 transition-colors"
                >
                  Call {item.number}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Safety Plan Builder */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-warm-sand shadow-sm space-y-8 mb-16">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
            Interactive Safety Plan
          </span>
          <h3 className="text-2xl font-serif font-bold text-charcoal mt-1 mb-2">
            Create Your Personal Safety Plan
          </h3>
          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            A safety plan is a personalized, evidence-based roadmap you create during calmer moments so that you have clear, gentle steps to take when emotional pain feels overwhelming.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              Step 1: Warning Signs That a Crisis May Be Developing
            </label>
            <textarea
              rows={2}
              value={warningSigns}
              onChange={(e) => setWarningSigns(e.target.value)}
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              Step 2: Internal Coping Strategies (Things I can do myself)
            </label>
            <textarea
              rows={2}
              value={copingStrategies}
              onChange={(e) => setCopingStrategies(e.target.value)}
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              Step 3: People and Settings That Provide Gentle Distraction
            </label>
            <textarea
              rows={2}
              value={distractionSettings}
              onChange={(e) => setDistractionSettings(e.target.value)}
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              Step 4: Friends or Family I Can Reach Out To
            </label>
            <textarea
              rows={2}
              value={trustedPeople}
              onChange={(e) => setTrustedPeople(e.target.value)}
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              Step 5: Professionals & Crisis Lines
            </label>
            <textarea
              rows={2}
              value={professionalsToCall}
              onChange={(e) => setProfessionalsToCall(e.target.value)}
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
              Step 6: Making My Environment Safe
            </label>
            <textarea
              rows={2}
              value={safeEnvironment}
              onChange={(e) => setSafeEnvironment(e.target.value)}
              className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={downloadSafetyPlan}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download & Print My Safety Plan</span>
            </button>

            {planSaved && (
              <span className="text-xs font-bold text-sage-800 flex items-center gap-1.5 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 text-sage-700" />
                Downloaded successfully to your device. Keep it accessible.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* International Helplines */}
      <div className="p-8 rounded-3xl bg-warm-white border border-warm-sand space-y-4">
        <h4 className="font-serif font-bold text-base text-charcoal flex items-center gap-2">
          <Globe className="w-4 h-4 text-sage-700" />
          International Helplines
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          {internationalHelplines.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-gray-100">
              <span className="font-bold text-charcoal block mb-0.5">{item.country}</span>
              <span className="text-sage-800 font-bold block mb-1">{item.number}</span>
              <span className="text-charcoal-subtle text-[11px]">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
