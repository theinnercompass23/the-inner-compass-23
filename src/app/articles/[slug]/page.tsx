import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  HelpCircle,
} from "lucide-react";
import {
  OFFERING_ARTICLES,
  getOfferingArticleBySlug,
} from "@/data/offeringArticles";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";

export function generateStaticParams() {
  return OFFERING_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getOfferingArticleBySlug(slug);
  if (!article) return {};

  const canonical = `https://www.theinnercompass23.com/articles/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: canonical,
      type: "article",
    },
  };
}

export default async function OfferingArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getOfferingArticleBySlug(slug);
  if (!article) notFound();

  const canonical = `https://www.theinnercompass23.com/articles/${article.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: "The Inner Compass 23 Editorial Team",
    },
    publisher: {
      "@type": "Organization",
      name: "The Inner Compass 23",
      url: "https://www.theinnercompass23.com",
    },
    mainEntityOfPage: canonical,
    datePublished: "2026-11-28",
    dateModified: "2026-11-28",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const related = OFFERING_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-warm-white text-dark-charcoal min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <header className="pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-soft-sage/30 bg-gradient-to-b from-light-beige/40 via-warm-white to-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 text-center">
          <div>
            <Link
              href="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-green hover:text-dark-charcoal transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Articles</span>
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{article.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          <p className="text-sm sm:text-lg text-dark-charcoal/80 max-w-2xl mx-auto leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-dark-charcoal/60 pt-1">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-muted-green" />
              {article.date}
            </span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-muted-green" />
              {article.readTime}
            </span>
            <span>&bull;</span>
            <span>{article.category}</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-4 text-base sm:text-lg text-dark-charcoal/85 leading-relaxed">
          {article.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        {article.sections.map((sec) => (
          <section
            key={sec.heading}
            className="rounded-3xl bg-white border border-soft-sage/40 p-6 sm:p-8 shadow-2xs space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
              {sec.heading}
            </h2>
            {sec.paragraphs.map((p) => (
              <p
                key={p}
                className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed"
              >
                {p}
              </p>
            ))}
            {sec.bullets && (
              <ul className="space-y-2.5 pt-1">
                {sec.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-dark-charcoal/85"
                  >
                    <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Action Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-white via-soft-sage/20 to-amber-50/40 border-2 border-muted-green/35 p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-dark-charcoal">
            Ready to Begin?
          </h3>
          <p className="text-sm text-dark-charcoal/80 max-w-xl mx-auto">
            Reach out to our team to join in a group cohort, private one-to-one session, or get personalized guidance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-charcoal hover:bg-black text-white text-xs sm:text-sm font-semibold transition-all"
          >
            <span>Enquire or Book a Session</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* FAQs */}
        <section className="space-y-5 pt-2">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-green">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
              Common Questions Answered
            </h2>
          </div>

          <div className="space-y-3">
            {article.faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-soft-sage/40 p-5 sm:p-6 shadow-2xs space-y-2"
              >
                <h3 className="text-base sm:text-lg font-serif font-bold text-dark-charcoal">
                  {idx + 1}. {faq.q}
                </h3>
                <p className="text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="space-y-4 pt-4 border-t border-soft-sage/30">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal">
            Explore More Pathways &amp; Experiences
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green p-4 space-y-2 transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-green">
                  {item.category}
                </span>
                <div className="font-serif font-bold text-sm text-dark-charcoal leading-snug">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <FinalWhatsAppCta />
    </div>
  );
}
