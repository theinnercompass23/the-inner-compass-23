"use client";

import React, { useState } from "react";
import SafeImage from "@/components/SafeImage";
import { Play, CheckCircle2, Sparkles, Filter, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  VIDEO_STORIES,
  VIDEO_CATEGORIES,
  VideoStory,
  getVideosByCategory,
} from "@/data/videoStories";
import VideoPlayerModal from "@/components/VideoPlayerModal";

export default function VideoStoriesSection({
  layout = "carousel",
  showViewAll = true,
  title = "Real Stories. Real Experiences.",
  subtitle = "Watch real people share what having an empathetic human listener meant during their hardest moments.",
}: {
  layout?: "carousel" | "grid";
  showViewAll?: boolean;
  title?: string;
  subtitle?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Stories");
  const [activeVideo, setActiveVideo] = useState<VideoStory | null>(null);

  const displayedVideos = getVideosByCategory(selectedCategory);

  return (
    <section className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Watch What People Say</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 max-w-xl">
            {subtitle}
          </p>
        </div>

        {showViewAll && (
          <Link
            href="/video-stories"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-green hover:text-dark-charcoal transition-colors group cursor-pointer"
          >
            <span>Explore All Video Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        {VIDEO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer font-medium border ${
              selectedCategory === cat
                ? "bg-dark-charcoal text-warm-white border-dark-charcoal shadow-xs"
                : "bg-white/80 hover:bg-white text-dark-charcoal/70 border-soft-sage/40 hover:text-dark-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Cards Layout */}
      {layout === "carousel" ? (
        <div className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="w-56 sm:w-64 flex-shrink-0 snap-start relative rounded-3xl overflow-hidden aspect-9/16 shadow-md border border-soft-sage/40 group cursor-pointer hover:shadow-xl transition-all"
            >
              <SafeImage
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                sizes="300px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/20 to-black/30" />

              {/* Top Meta */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                <span className="text-lg drop-shadow">{video.flag}</span>
                <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-semibold border border-white/20">
                  {video.duration}
                </span>
              </div>

              {/* Center Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#25D366] transition-all shadow-lg">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  <span>{video.displayName}</span>
                  {video.isVerified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/20" />
                  )}
                  <span className="text-[10px] text-white/60">• {video.country}</span>
                </div>
                <h3 className="font-serif font-bold text-xs text-white leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[11px] text-white/80 line-clamp-1 italic font-serif">
                  {video.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="relative rounded-3xl overflow-hidden aspect-9/16 shadow-md border border-soft-sage/40 group cursor-pointer hover:shadow-xl transition-all"
            >
              <SafeImage
                src={video.thumbnailUrl}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/90 via-dark-charcoal/20 to-black/30" />

              {/* Top Meta */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs">
                <span className="text-lg drop-shadow">{video.flag}</span>
                <span className="px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-semibold border border-white/20">
                  {video.duration}
                </span>
              </div>

              {/* Center Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-115 group-hover:bg-[#25D366] transition-all shadow-lg">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  <span>{video.displayName}</span>
                  {video.isVerified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/20" />
                  )}
                  <span className="text-[10px] text-white/60">• {video.country}</span>
                </div>
                <h3 className="font-serif font-bold text-xs text-white leading-snug line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-[11px] text-white/80 line-clamp-1 italic font-serif">
                  {video.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
