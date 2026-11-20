import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import { ShieldCheck, Video, Lock, Heart, ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_DISPLAY, buildDirectWhatsAppUrl } from "@/lib/constants";
import { VIDEO_STORIES } from "@/data/videoStories";

export const metadata: Metadata = {
  title: "Real Customer Video Stories & Experiences — Human Emotional Support | Haven",
  description:
    "Watch real customer video reviews and heartfelt feedback from individuals who needed someone to listen during loneliness, heartbreak, divorce, and personal stress.",
  alternates: {
    canonical: "https://haven.care/video-stories",
  },
  openGraph: {
    title: "Real Customer Video Stories & Experiences — Haven",
    description:
      "Watch authentic video reflections from people around the world who found compassionate human listening when they needed it most.",
    url: "https://haven.care/video-stories",
    type: "website",
  },
};

export default function VideoStoriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Haven Customer Video Stories & Reviews",
    "description": "Authentic video stories and feedback from people who found emotional relief through Haven peer listening.",
    "itemListElement": VIDEO_STORIES.filter((v) => v.isPublished).map((v, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "VideoObject",
        "name": v.title,
        "description": v.shortDescription,
        "thumbnailUrl": v.thumbnailUrl,
        "contentUrl": v.videoUrl,
        "uploadDate": "2026-01-15T00:00:00Z",
        "duration": "PT1M",
        "author": {
          "@type": "Person",
          "name": v.displayName
        }
      }
    }))
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
          <Video className="w-3.5 h-3.5" />
          <span>Real Conversations &bull; Real Experiences</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-dark-charcoal">
          Watch What People Are Saying
        </h1>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
          When life feels heavy, knowing that others have stood where you are and found relief through human connection brings real hope. Explore authentic video reflections from individuals who reached out for emotional support.
        </p>
      </div>

      {/* Main Video Grid */}
      <VideoStoriesSection
        layout="grid"
        showViewAll={false}
        title="Browse by Category"
        subtitle="Filter by customer video reviews, personal breakup experiences, expat stories, and feedback clips."
      />

      {/* Honest Social Proof & Trust Principles */}
      <div className="p-8 rounded-3xl bg-light-beige/60 border border-soft-sage/40 space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-dark-charcoal uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-muted-green" />
          <span>Our Integrity &amp; Review Policy</span>
        </div>
        <h3 className="font-serif font-bold text-lg text-dark-charcoal">
          Transparent, Consensual, and Real Social Proof
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-dark-charcoal/75 pt-2">
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal">100% Consensual</h4>
            <p>Every video story is shared with explicit, voluntary permission. We never publish identifiable clips without written consent.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal">Zero Fabricated Testimonials</h4>
            <p>We never invent fake ratings, stock photo reviews, or exaggerated claims. What you see is authentic feedback from real individuals.</p>
          </div>
          <div className="space-y-1">
            <h4 className="font-semibold text-dark-charcoal">Private First</h4>
            <p>If you choose to use Haven, your conversations remain strictly confidential. Sharing your story is always 100% optional.</p>
          </div>
        </div>
      </div>

      {/* Direct WhatsApp Call to Action */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-soft-sage/30 via-white to-light-beige/60 border border-soft-sage/40 text-center space-y-4 shadow-sm">
        <div className="w-12 h-12 rounded-full bg-soft-sage/25 border border-soft-sage/40 flex items-center justify-center text-muted-green mx-auto">
          <Heart className="w-6 h-6 fill-muted-green/20 text-muted-green" />
        </div>
        <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
          Ready for a Private, Non-Judgmental Conversation?
        </h2>
        <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-lg mx-auto">
          You don&apos;t have to carry your feelings alone. Message our team directly and connect with an empathetic human listener.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={buildDirectWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <WhatsAppIcon className="w-4 h-4" color="#FFFFFF" />
            <span>Chat on WhatsApp: {WHATSAPP_DISPLAY}</span>
          </a>
          <Link
            href="/#support-form"
            className="px-6 py-3 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs sm:text-sm font-semibold shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Book a Time Slot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
