"use client";

import React, { useRef, useState, useEffect } from "react";
import { X, Play, Pause, Volume2, VolumeX, Maximize, CheckCircle2, ShieldCheck } from "lucide-react";
import { VideoStory } from "@/data/videoStories";

interface VideoPlayerModalProps {
  video: VideoStory | null;
  onClose: () => void;
}

export default function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === " " && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!video) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-dark-charcoal rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col aspect-9/16 max-h-[90vh]">
        {/* Top Bar with Close */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white drop-shadow-md">
          <div className="flex items-center gap-2">
            <span className="text-xl">{video.flag}</span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold flex items-center gap-1">
                {video.displayName}
                {video.isVerified && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]/20" />
                )}
              </span>
              <span className="text-[10px] text-white/70">{video.country}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Element */}
        <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.thumbnailUrl}
            autoPlay
            playsInline
            loop
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          {/* Central Play/Pause Watermark on Pause */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg animate-in zoom-in-75 duration-150">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Overlay & Controls */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 text-white z-20 space-y-3">
          <div>
            <span className="text-[10px] font-bold text-soft-sage uppercase tracking-wider bg-white/10 px-2 py-0.5 rounded-full">
              {video.category}
            </span>
            <h3 className="font-serif font-bold text-sm text-white mt-1 line-clamp-2">
              {video.title}
            </h3>
            <p className="text-xs text-white/80 italic mt-1 font-serif line-clamp-2">
              {video.quote}
            </p>
          </div>

          {/* Bottom Player Controls */}
          <div className="flex items-center justify-between pt-1 border-t border-white/15 text-xs text-white/80">
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="hover:text-white transition-colors cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="hover:text-white transition-colors cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-[11px] text-white/60">{video.duration}</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleFullScreen();
              }}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Full screen"
            >
              <Maximize className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
