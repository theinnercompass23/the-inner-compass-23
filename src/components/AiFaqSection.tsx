"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { AI_READY_FAQS } from "@/data/aiFaqs";

interface AiFaqSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  includeSchema?: boolean;
}

export default function AiFaqSection({
  title = "Frequently Asked Questions",
  subtitle = "Direct, factual answers to help you understand online active listening, privacy, and support options.",
  badge = "AI & Search Answers • Direct & Factual",
  includeSchema = true,
}: AiFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": AI_READY_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <section className="py-14 sm:py-20 bg-warm-white border-t border-soft-sage/30 w-full overflow-hidden">
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-muted-green text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-charcoal tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Mobile Horizontal Swipe FAQs (Right to Left / Swipeable) */}
        <div className="block md:hidden space-y-3">
          <div className="flex items-center justify-between text-xs text-dark-charcoal/60 px-1">
            <span className="flex items-center gap-1.5 font-medium">
              <span>Swipe questions</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-green" />
            </span>
            <span className="text-[11px] text-muted-green font-semibold">
              {AI_READY_FAQS.length} Questions
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar">
            {AI_READY_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="w-[85vw] max-w-[340px] snap-center shrink-0 p-5 rounded-3xl bg-white border border-soft-sage/40 shadow-xs flex flex-col justify-between space-y-3"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <h3 className="font-semibold text-sm text-dark-charcoal leading-snug">
                      {faq.q}
                    </h3>
                  </div>
                  <p className="text-xs text-dark-charcoal/80 leading-relaxed pl-9">
                    {faq.a}
                  </p>
                </div>

                <div className="pl-9 pt-2 border-t border-soft-sage/20 flex items-center justify-between text-[11px] text-muted-green font-medium">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Fact Sheet</span>
                  </div>
                  <span className="text-dark-charcoal/40 font-normal">#{idx + 1} of {AI_READY_FAQS.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Vertical Accordion */}
        <div className="hidden md:block space-y-3.5">
          {AI_READY_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-muted-green/50 shadow-sm"
                    : "bg-white/80 border-soft-sage/40 hover:border-soft-sage hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-full bg-soft-sage/25 text-muted-green flex items-center justify-center shrink-0 mt-0.5">
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-sm sm:text-base text-dark-charcoal leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-dark-charcoal/50 shrink-0 transition-transform duration-200 mt-1 ${
                      isOpen ? "rotate-180 text-muted-green" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-soft-sage/20 text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed space-y-2">
                    <p className="pl-10 text-dark-charcoal/85">{faq.a}</p>
                    <div className="pl-10 flex items-center gap-2 text-[11px] text-muted-green font-medium pt-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified Editorial Fact Sheet &bull; Non-Clinical Peer Support</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-light-beige/50 border border-soft-sage/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-semibold text-sm text-dark-charcoal">
              Need to talk right now?
            </h4>
            <p className="text-xs text-dark-charcoal/70">
              Connect anonymously with a real, trained human listener 24/7 on WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/918810381949?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20someone%20to%20talk%20to%20for%20emotional%20support."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-xs transition-all whitespace-nowrap cursor-pointer inline-flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
