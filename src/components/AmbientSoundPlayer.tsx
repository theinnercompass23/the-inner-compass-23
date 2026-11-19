"use client";

import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, CloudRain, Wind, Waves, Sparkles } from "lucide-react";

type SoundType = "rain" | "waves" | "calm";

export default function AmbientSoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundType, setSoundType] = useState<SoundType>("rain");
  const [volume, setVolume] = useState(0.3);
  const [isOpen, setIsOpen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);

  const startSound = (type: SoundType) => {
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      // Stop previous
      if (noiseNodeRef.current) {
        noiseNodeRef.current.disconnect();
      }

      const ctx = audioCtxRef.current;
      const bufferSize = ctx.sampleRate * 2;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);

      // Generate soft pink/brown noise for rain or calming waves
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        if (type === "rain") {
          // Pink-ish noise
          lastOut = (lastOut + 0.02 * white) / 1.02;
          data[i] = lastOut * 3.5;
        } else if (type === "waves") {
          // Deeper ocean rumble
          lastOut = (lastOut + 0.01 * white) / 1.01;
          data[i] = lastOut * 4.5;
        } else {
          // Soft ambient hum
          lastOut = (lastOut + 0.015 * white) / 1.015;
          data[i] = Math.sin(i * 0.01) * 0.1 + lastOut * 2.0;
        }
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      noise.loop = true;

      // Filter to soften the sound
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = type === "rain" ? 1200 : type === "waves" ? 600 : 800;

      const gain = ctx.createGain();
      gain.gain.value = volume;

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start();

      noiseNodeRef.current = noise;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    } catch {
      // AudioContext not allowed before user interaction
    }
  };

  const stopSound = () => {
    if (noiseNodeRef.current) {
      noiseNodeRef.current.disconnect();
      noiseNodeRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopSound();
    } else {
      startSound(soundType);
    }
  };

  const changeType = (newType: SoundType) => {
    setSoundType(newType);
    if (isPlaying) {
      startSound(newType);
    }
  };

  const changeVolume = (newVol: number) => {
    setVolume(newVol);
    if (gainNodeRef.current) {
      gainNodeRef.current.gain.value = newVol;
    }
  };

  useEffect(() => {
    return () => {
      if (noiseNodeRef.current) noiseNodeRef.current.disconnect();
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
          isPlaying
            ? "bg-sage-300 text-sage-900 shadow-sm"
            : "bg-warm-beige/80 text-charcoal-muted hover:bg-warm-sand/80 hover:text-charcoal"
        }`}
        title="Calming Ambient Sounds"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 text-sage-800 animate-pulse" />
            <span className="hidden sm:inline">Sound: {soundType}</span>
          </>
        ) : (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Calm Sound</span>
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 p-3 bg-white rounded-2xl shadow-xl border border-warm-sand z-50 animate-fade-in text-charcoal">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-100">
            <span className="text-xs font-semibold text-charcoal flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-sage-500" />
              Soothing Ambient
            </span>
            <button
              onClick={togglePlay}
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                isPlaying
                  ? "bg-coral-light text-coral-soft"
                  : "bg-sage-200 text-sage-800"
              }`}
            >
              {isPlaying ? "Stop" : "Play"}
            </button>
          </div>

          {/* Sound selector */}
          <div className="grid grid-cols-3 gap-1.5 mb-3">
            <button
              onClick={() => changeType("rain")}
              className={`flex flex-col items-center p-2 rounded-xl text-center text-[11px] transition-colors ${
                soundType === "rain"
                  ? "bg-sage-100 text-sage-800 font-semibold border border-sage-300"
                  : "hover:bg-gray-50 text-charcoal-muted"
              }`}
            >
              <CloudRain className="w-4 h-4 mb-1 text-sage-600" />
              Rain
            </button>
            <button
              onClick={() => changeType("waves")}
              className={`flex flex-col items-center p-2 rounded-xl text-center text-[11px] transition-colors ${
                soundType === "waves"
                  ? "bg-sage-100 text-sage-800 font-semibold border border-sage-300"
                  : "hover:bg-gray-50 text-charcoal-muted"
              }`}
            >
              <Waves className="w-4 h-4 mb-1 text-sage-600" />
              Ocean
            </button>
            <button
              onClick={() => changeType("calm")}
              className={`flex flex-col items-center p-2 rounded-xl text-center text-[11px] transition-colors ${
                soundType === "calm"
                  ? "bg-sage-100 text-sage-800 font-semibold border border-sage-300"
                  : "hover:bg-gray-50 text-charcoal-muted"
              }`}
            >
              <Wind className="w-4 h-4 mb-1 text-sage-600" />
              Breeze
            </button>
          </div>

          {/* Volume slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-charcoal-muted font-medium">
              <span>Volume</span>
              <span>{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.05"
              max="0.8"
              step="0.05"
              value={volume}
              onChange={(e) => changeVolume(parseFloat(e.target.value))}
              className="w-full accent-sage-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
