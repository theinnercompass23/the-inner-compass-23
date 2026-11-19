"use client";

import React from "react";
import Link from "next/link";
import SupportRequestForm from "@/components/SupportRequestForm";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import { Heart, ChevronRight, MessageCircle, ShieldCheck, Lock, Phone } from "lucide-react";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl, TELE_MANAS_NUMBER } from "@/lib/constants";

export interface SeoLandingProps {
  pageTitle: string;
  badge: string;
  headline: string;
  subheadline: string;
  introParagraphs: string[];
  keyPoints: { title: string; desc: string }[];
  hindiHinglishNote?: string;
  faqs: { q: string; a: string }[];
  canonicalSlug: string;
}

export default function SeoLandingTemplate({
  pageTitle,
  badge,
  headline,
  subheadline,
  introParagraphs,
  keyPoints,
  hindiHinglishNote,
  faqs,
  canonicalSlug,
}: SeoLandingProps) {
  const directWhatsApp = buildDirectWhatsAppUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: headline,
    description: subheadline,
    url: `https://haven.care/${canonicalSlug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://haven.care",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageTitle,
          item: `https://haven.care/${canonicalSlug}`,
        },
      ],
    },
  };

  return (
    <div className="bg-warm-white text-dark-charcoal">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero & Breadcrumb */}
      <section className="pt-10 pb-14 sm:pt-16 sm:pb-20 border-b border-light-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-charcoal-subtle">
            <Link href="/" className="hover:text-dark-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-dark-charcoal font-medium">{pageTitle}</span>
          </nav>

          {/* Badge & H1 */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sage-50 border border-soft-sage/40 text-xs font-semibold text-muted-green">
              <Heart className="w-3.5 h-3.5 fill-muted-green" />
              <span>{badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.2]">
              {headline}
            </h1>

            <p className="text-base sm:text-lg font-serif italic text-muted-green">
              {subheadline}
            </p>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted leading-relaxed pt-2">
            {introParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Hindi / Hinglish Cultural Resonance Note */}
          {hindiHinglishNote && (
            <div className="p-4 rounded-2xl bg-sage-50/70 border border-soft-sage/50 text-xs text-dark-charcoal leading-relaxed">
              <strong className="block text-muted-green font-semibold mb-0.5">
                दिल की बात, अपनी भाषा में (Hindi & Hinglish Support):
              </strong>
              {hindiHinglishNote}
            </div>
          )}

          {/* Direct CTA Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#support-form"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-semibold bg-muted-green hover:bg-sage-600 text-white shadow-sm transition-all text-center"
            >
              Fill Support Form Below
            </a>

            <a
              href={directWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Support Request Form */}
      <SupportRequestForm />

      {/* Key Insights & Emotional Guidance */}
      <section className="py-16 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
              Why Having an Unbiased Listener Matters
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted">
              Sometimes the people closest to us are too entangled in our problems to simply listen without judgment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {keyPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-light-beige space-y-2 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-sage-50 text-muted-green flex items-center justify-center font-serif font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-sm text-dark-charcoal">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic-Specific FAQs */}
      <section className="py-16 bg-white border-t border-light-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
              Common Questions & Answers
            </h2>
            <p className="text-xs text-charcoal-muted">
              Understanding how our human emotional support service works.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-warm-white border border-light-beige space-y-1.5"
              >
                <h4 className="font-serif font-bold text-xs sm:text-sm text-dark-charcoal">
                  {faq.q}
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Crisis reminder */}
          <div className="p-4 rounded-2xl bg-coral-light/60 border border-coral-soft/30 text-xs text-charcoal-muted flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-coral-soft shrink-0 mt-0.5" />
            <p>
              <strong>Safety Reminder:</strong> If you are feeling severe suicidal distress or are in immediate physical danger, please contact India&apos;s 24/7 Government Mental Health Helpline at <strong>Tele-MANAS (14416)</strong> or <strong>Emergency (112)</strong> immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Final WhatsApp CTA */}
      <FinalWhatsAppCta />
    </div>
  );
}
