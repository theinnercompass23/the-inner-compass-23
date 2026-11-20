"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Headphones,
  Play,
  Pause,
  Volume2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Radio,
  CheckCircle2,
} from "lucide-react";

interface SpotifyPodcastSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
}

interface AudioTrack {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  frequency: number; // For calming Web Audio synthesis
}

export default function SpotifyPodcastSection({
  title = "Now on Spotify: Guided Calm, Emotional Support & Mindful Listening",
  subtitle = "Listen to our guided emotional reflections and soothing audio sessions on Spotify, or play our interactive AI calm voice previews directly below.",
  badge = "Official Podcast & AI Voice Reflections",
}: SpotifyPodcastSectionProps) {
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Web Audio synth for instant interactive calm tones
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const tracks: AudioTrack[] = [
    {
      id: "track-1",
      title: "Late-Night 3 AM Grounding & Loneliness Release",
      category: "Mindful Voice Reflection",
      duration: "3:45",
      description:
        "A soothing human reflection for late-night overthinking, empty room silence, and releasing nighttime anxiety.",
      frequency: 432, // Healing 432Hz tone
    },
    {
      id: "track-2",
      title: "Healing from Sudden Heartbreak & Rejection",
      category: "Heartbreak Support",
      duration: "4:20",
      description:
        "Gentle words to ease chest tightness, acute grief, and the emotional shock of someone walking away.",
      frequency: 528, // 528Hz love/miracle frequency
    },
    {
      id: "track-3",
      title: "Surviving the Silence After Divorce & Separation",
      category: "Divorce Recovery",
      duration: "5:10",
      description:
        "Compassionate companionship for quiet weekends alone, navigating guilt, and beginning again.",
      frequency: 396, // 396Hz release of fear & guilt
    },
  ];

  const currentTrack = tracks[activeTrackIndex];

  // Handle Play / Stop Calming Harmonic Tone
  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio(currentTrack.frequency);
    }
  };

  const startAudio = (freq: number) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      // Soft sine wave for gentle meditation sound
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Smooth fade-in
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 1.2);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscRef.current = osc;
      gainRef.current = gain;
      setIsPlaying(true);
    } catch {
      // AudioContext not allowed without gesture
      setIsPlaying(false);
    }
  };

  const stopAudio = () => {
    if (gainRef.current && audioCtxRef.current) {
      try {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          oscRef.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
          setProgress(0);
        }, 500);
      } catch {
        setIsPlaying(false);
      }
    } else {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const selectTrack = (idx: number) => {
    if (isPlaying) {
      stopAudio();
    }
    setActiveTrackIndex(idx);
    setProgress(0);
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-light-beige/30 to-warm-white border-t border-soft-sage/30 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/30 text-[#15883e] text-xs font-semibold shadow-xs">
            <Radio className="w-3.5 h-3.5 text-[#1DB954] animate-pulse" />
            <span>{badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-dark-charcoal tracking-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Spotify Official Player + Interactive AI Voice Station */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Spotify Embed Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-soft-sage/40 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-soft-sage/20 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1DB954] flex items-center justify-center text-white shadow-sm shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-dark-charcoal">
                    Listen to Haven on Spotify
                  </h3>
                  <p className="text-[11px] text-dark-charcoal/60">
                    Official Emotional Support &amp; Mindful Active Listening Series
                  </p>
                </div>
              </div>

              <a
                href="https://open.spotify.com/episode/3Ard2e43YuXqp0Vk4UXBs7?si=jMSJUoP-SMuZIG14iqD5vQ&utm_source=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1DB954] hover:bg-[#1aa34a] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer shrink-0"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Official Spotify Iframe Embed */}
            <div className="w-full rounded-2xl overflow-hidden shadow-xs bg-black">
              <iframe
                title="Haven Spotify Podcast Episode"
                src="https://open.spotify.com/embed/episode/3Ard2e43YuXqp0Vk4UXBs7?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full border-0"
              />
            </div>

            {/* Spotify Episode Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-dark-charcoal/80 pt-1">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-light-beige/40 border border-soft-sage/30">
                <CheckCircle2 className="w-4 h-4 text-[#1DB954] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-dark-charcoal">24/7 Free Streaming</div>
                  <div className="text-[11px] text-dark-charcoal/65">Available globally on any device via Spotify Free or Premium.</div>
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-xl bg-light-beige/40 border border-soft-sage/30">
                <CheckCircle2 className="w-4 h-4 text-[#1DB954] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-dark-charcoal">Calming Voice Reflections</div>
                  <div className="text-[11px] text-dark-charcoal/65">Soothing narratives for heartbreak, loneliness, and emotional reset.</div>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:hidden text-center">
              <a
                href="https://open.spotify.com/episode/3Ard2e43YuXqp0Vk4UXBs7?si=jMSJUoP-SMuZIG14iqD5vQ&utm_source=whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#1DB954] text-white text-xs font-semibold shadow-xs"
              >
                <span>Listen on Spotify App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: AI Voice Calm Station (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-light-beige/70 to-soft-sage/20 rounded-3xl p-6 sm:p-7 border border-soft-sage/40 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-dark-charcoal">
                <Headphones className="w-4 h-4 text-muted-green" />
                <span className="font-bold text-xs uppercase tracking-wider text-muted-green">
                  Interactive Calm Voice Station
                </span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 border border-soft-sage/40 text-dark-charcoal/70">
                Web Audio Synth
              </span>
            </div>

            {/* Currently Selected Track Player Card */}
            <div className="p-5 rounded-2xl bg-white shadow-xs border border-soft-sage/30 space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-muted-green">
                  {currentTrack.category} &bull; {currentTrack.duration}
                </span>
                <h4 className="font-serif font-bold text-sm sm:text-base text-dark-charcoal leading-snug">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-dark-charcoal/70 leading-relaxed">
                  {currentTrack.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1.5 pt-1">
                <div className="w-full h-1.5 bg-soft-sage/25 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-muted-green transition-all duration-300 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-dark-charcoal/50">
                  <span>{isPlaying ? "Playing Harmonic Sound..." : "Ready to listen"}</span>
                  <span>{currentTrack.frequency} Hz</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="px-4 py-2 rounded-full bg-dark-charcoal hover:bg-black text-warm-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Pause Audio</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Play Preview</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-1.5 text-xs text-dark-charcoal/60">
                  <Volume2 className="w-3.5 h-3.5 text-muted-green" />
                  <span className="text-[11px]">Binaural Calm</span>
                </div>
              </div>
            </div>

            {/* Track Switcher List */}
            <div className="space-y-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-dark-charcoal/60">
                Select Audio Reflection:
              </div>
              <div className="space-y-1.5">
                {tracks.map((track, i) => {
                  const isSelected = activeTrackIndex === i;
                  return (
                    <button
                      key={track.id}
                      type="button"
                      onClick={() => selectTrack(i)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-white border-muted-green shadow-xs font-medium text-dark-charcoal"
                          : "bg-white/60 hover:bg-white border-soft-sage/30 text-dark-charcoal/75"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isSelected ? "bg-muted-green" : "bg-dark-charcoal/30"}`} />
                        <span className="truncate">{track.title}</span>
                      </div>
                      <span className="text-[10px] text-dark-charcoal/50 shrink-0 font-mono">
                        {track.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="text-[11px] text-dark-charcoal/60 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-muted-green shrink-0" />
              <span>100% Free soothing audio &bull; No login required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
