"use client";

import React from "react";
import Link from "next/link";
import SupportRequestForm from "@/components/SupportRequestForm";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import {
  Heart,
  ChevronRight,
  ShieldCheck,
  Lock,
  Phone,
  Clock,
  BookOpen,
  ArrowRight,
  HelpCircle,
  Share2,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, TELE_MANAS_NUMBER } from "@/lib/constants";

export interface RelatedArticle {
  title: string;
  slug: string;
  desc: string;
}

export interface SeoLandingProps {
  pageTitle: string;
  badge: string;
  headline: string;
  subheadline: string;
  readTime?: string;
  introParagraphs: string[];
  keySections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
  }[];
  hindiHinglishNote?: string;
  faqs: { q: string; a: string }[];
  relatedArticles?: RelatedArticle[];
  canonicalSlug: string;
}

export default function SeoLandingTemplate({
  pageTitle,
  badge,
  headline,
  subheadline,
  readTime = "4 min read",
  introParagraphs,
  keySections,
  hindiHinglishNote,
  faqs,
  relatedArticles = [],
  canonicalSlug,
}: SeoLandingProps) {
  const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello, I was reading your article on "${pageTitle}" and would like to connect for emotional support.`
  )}`;

  const pageUrl = `https://haven.care/${canonicalSlug}`;

  // Structured Data (Article + FAQPage + BreadcrumbList)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: subheadline,
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Haven Peer Listening",
      url: "https://haven.care",
    },
    author: {
      "@type": "Organization",
      name: "Haven Emotional Support Editorial Team",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <div className="bg-warm-white text-dark-charcoal">
      {/* Schema.org Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Editorial Header Section */}
      <article className="pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-soft-sage/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-dark-charcoal/60">
            <Link href="/" className="hover:text-dark-charcoal transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/#categories-section" className="hover:text-dark-charcoal transition-colors">
              Support Topics
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-dark-charcoal font-medium">{pageTitle}</span>
          </nav>

          {/* Badge, Editorial Metadata & H1 */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
                <Heart className="w-3.5 h-3.5 fill-muted-green/20" />
                {badge}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-dark-charcoal/50">
                <Clock className="w-3.5 h-3.5 text-muted-green" />
                {readTime}
              </span>
              <span className="text-xs text-dark-charcoal/40">•</span>
              <span className="text-xs text-dark-charcoal/60">
                Published by Haven Peer Support Team
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.2]">
              {headline}
            </h1>

            <p className="text-base sm:text-xl font-serif italic text-muted-green leading-relaxed">
              {subheadline}
            </p>
          </div>

          {/* Quick Support Jump Bar */}
          <div className="p-4 bg-light-beige/60 rounded-2xl border border-soft-sage/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-dark-charcoal/80">
              <span className="font-semibold text-dark-charcoal">Need someone right now?</span>{" "}
              You can connect with a caring human listener on WhatsApp.
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="#support-form"
                className="px-4 py-2 bg-muted-green hover:bg-[#68826d] text-white rounded-full text-xs font-semibold shadow-sm transition-all text-center flex-1 sm:flex-none"
              >
                Talk to Someone
              </a>
              <a
                href={directWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xs font-semibold shadow-sm transition-all text-center flex-1 sm:flex-none flex items-center justify-center gap-1.5"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" color="#FFFFFF" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Intro Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-dark-charcoal/80 leading-relaxed pt-2">
            {introParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Detailed Editorial Sections (H2 & H3) */}
          <div className="space-y-10 pt-4">
            {keySections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <h3 className="text-sm sm:text-base font-medium text-muted-green">
                    {section.subheading}
                  </h3>
                )}
                <div className="space-y-3 text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Hindi / Hinglish Search Intent Section */}
          {hindiHinglishNote && (
            <div className="mt-8 p-6 bg-soft-sage/15 rounded-3xl border border-soft-sage/30">
              <h3 className="text-base font-serif font-semibold text-dark-charcoal mb-2 flex items-center gap-2">
                <span>बात करने के लिए कोई चाहिए? (Hindi &amp; Hinglish Support)</span>
              </h3>
              <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
                {hindiHinglishNote}
              </p>
            </div>
          )}

          {/* Frequently Asked Questions */}
          <div className="pt-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-muted-green" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-dark-charcoal mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Articles & Internal Linking */}
          {relatedArticles.length > 0 && (
            <div className="pt-10 border-t border-soft-sage/20">
              <h2 className="text-xl font-serif font-bold text-dark-charcoal mb-4">
                Related Support &amp; Reading
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel, idx) => (
                  <Link
                    key={idx}
                    href={rel.slug}
                    className="p-4 bg-white rounded-2xl border border-soft-sage/30 hover:border-muted-green transition-all shadow-sm group block"
                  >
                    <h3 className="text-sm font-semibold text-dark-charcoal group-hover:text-muted-green transition-colors flex items-center justify-between">
                      <span>{rel.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-dark-charcoal/65 mt-1 leading-snug">
                      {rel.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Reassuring Transition Callout */}
          <div className="pt-8 text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-dark-charcoal mb-2">
              You Don&apos;t Have to Go Through This Alone.
            </h3>
            <p className="text-xs sm:text-sm text-dark-charcoal/70">
              Fill out the brief support request below to choose your date &amp; time, and connect with our team on WhatsApp.
            </p>
          </div>
        </div>
      </article>

      {/* Embedded Support Form */}
      <div className="py-6">
        <SupportRequestForm />
      </div>

      {/* Final WhatsApp CTA */}
      <FinalWhatsAppCta />
    </div>
  );
}
