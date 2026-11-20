"use client";

import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import SupportRequestForm from "@/components/SupportRequestForm";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import {
  Heart,
  ChevronRight,
  ShieldCheck,
  Lock,
  Clock,
  BookOpen,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";

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
  heroImage?: string;
  introParagraphs: string[];
  keySections: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
  }[];
  practicalSteps?: {
    step: string;
    desc: string;
  }[];
  serviceBoundaries?: {
    provides: string[];
    doesNotProvide: string[];
  };
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
  readTime = "6 min read",
  heroImage,
  introParagraphs,
  keySections,
  practicalSteps,
  serviceBoundaries,
  hindiHinglishNote,
  faqs,
  relatedArticles = [],
  canonicalSlug,
}: SeoLandingProps) {
  const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Haven Team, I was reading your article on "${pageTitle}" and would like someone to talk to for emotional support.`
  )}`;

  const pageUrl = `https://haven.care/${canonicalSlug}`;

  // Structured Data (Article + FAQPage + BreadcrumbList)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: subheadline,
    image: heroImage || "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&q=80&w=800",
    url: pageUrl,
    datePublished: "2026-02-15T00:00:00+05:30",
    dateModified: "2026-02-20T00:00:00+05:30",
    publisher: {
      "@type": "Organization",
      name: "Haven Human Emotional Support",
      url: "https://haven.care",
    },
    author: {
      "@type": "Organization",
      name: "Haven Peer Support Editorial Team",
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
        name: "Support Topics",
        item: "https://haven.care/#categories-section",
      },
      {
        "@type": "ListItem",
        position: 3,
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
      <article className="pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-soft-sage/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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

          {/* Badge, Metadata & H1 */}
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
              <span className="text-xs text-dark-charcoal/40">&bull;</span>
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

          {/* Featured Hero Image if provided */}
          {heroImage && (
            <div className="relative h-64 sm:h-96 rounded-3xl overflow-hidden shadow-sm border border-soft-sage/30">
              <SafeImage
                src={heroImage}
                alt={headline}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}

          {/* Quick Support Jump Bar */}
          <div className="p-4 bg-light-beige/70 rounded-2xl border border-soft-sage/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-dark-charcoal/80">
              <span className="font-semibold text-dark-charcoal">Need someone to talk to right now?</span>{" "}
              You can connect with a caring human listener on WhatsApp.
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href="#support-form"
                className="px-4 py-2 bg-dark-charcoal hover:bg-black text-white rounded-full text-xs font-semibold shadow-xs transition-all text-center flex-1 sm:flex-none cursor-pointer"
              >
                Request a Listener
              </a>
              <a
                href={directWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full text-xs font-semibold shadow-xs transition-all text-center flex-1 sm:flex-none flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" color="#FFFFFF" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
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
          <div className="space-y-12 pt-4">
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

          {/* Practical Next Steps */}
          {practicalSteps && practicalSteps.length > 0 && (
            <div className="mt-8 p-6 sm:p-8 bg-white rounded-3xl border border-soft-sage/40 shadow-xs space-y-4">
              <h3 className="text-lg font-serif font-bold text-dark-charcoal flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-muted-green" />
                <span>Gentle Steps You Can Take Today</span>
              </h3>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {practicalSteps.map((s, idx) => (
                  <div key={idx} className="p-4 bg-light-beige/40 rounded-2xl border border-soft-sage/20 space-y-1">
                    <div className="font-semibold text-xs sm:text-sm text-dark-charcoal">
                      {idx + 1}. {s.step}
                    </div>
                    <p className="text-xs text-dark-charcoal/75 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Service Boundaries (What We Provide vs What We Do Not) */}
          {serviceBoundaries && (
            <div className="mt-8 p-6 sm:p-8 bg-light-beige/50 rounded-3xl border border-soft-sage/40 space-y-5">
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-serif font-bold text-dark-charcoal flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-muted-green" />
                  <span>Clear Boundaries &amp; Scope of Support</span>
                </h3>
                <p className="text-xs text-dark-charcoal/70">
                  We believe in complete transparency about what our peer listening service can and cannot offer.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-4 bg-white rounded-2xl border border-emerald-100 space-y-2">
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>What We Provide</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-dark-charcoal/75">
                    {serviceBoundaries.provides.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-rose-100 space-y-2">
                  <div className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>What We Do Not Provide</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-dark-charcoal/75">
                    {serviceBoundaries.doesNotProvide.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-rose-500 font-bold">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

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
                  className="bg-white rounded-2xl p-5 border border-soft-sage/30 shadow-xs"
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
                    className="p-4 bg-white rounded-2xl border border-soft-sage/30 hover:border-muted-green transition-all shadow-xs group block"
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
          <div className="pt-8 text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-serif font-bold text-dark-charcoal">
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
