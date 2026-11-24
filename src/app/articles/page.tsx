import type { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { FEATURED_ARTICLES } from "@/data/articles";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";

export const metadata: Metadata = {
  title: "Articles & Perspectives on Emotional Healing | The Inner Compass 23",
  description:
    "In-depth editorial articles exploring loneliness, heartbreak, marriage transitions, and how compassionate human conversations restore mental clarity.",
  alternates: {
    canonical: "https://www.theinnercompass23.com/articles",
  },
};

export default function ArticlesPage() {
  return (
    <div className="bg-warm-white text-dark-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-soft-sage/30 bg-gradient-to-b from-light-beige/30 via-warm-white to-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green">
            <BookOpen className="w-4 h-4" />
            <span>Editorial Journal &bull; Human Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-tight">
            Thoughtful Perspectives on Emotional Healing
          </h1>

          <p className="text-sm sm:text-base text-dark-charcoal/75 max-w-2xl mx-auto leading-relaxed">
            In-depth reflections exploring loneliness, heartbreak, marriage transitions, and how compassionate human conversations restore mental clarity.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="rounded-3xl bg-white border border-soft-sage/40 overflow-hidden shadow-xs hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <SafeImage
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 z-20">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold text-dark-charcoal uppercase tracking-wider border border-white/60 shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3.5">
                  <div className="flex items-center gap-3 text-[11px] text-dark-charcoal/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-muted-green" />
                      {article.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-muted-green" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-serif font-bold text-dark-charcoal leading-snug group-hover:text-muted-green transition-colors">
                    <Link href={article.slug}>{article.title}</Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-dark-charcoal/70 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-soft-sage/20 flex items-center justify-between">
                <Link
                  href={article.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-green group-hover:text-dark-charcoal transition-colors"
                >
                  <span>Read Complete Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <span className="text-[11px] text-dark-charcoal/40 font-medium">
                  Editorial Team
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalWhatsAppCta />
    </div>
  );
}
