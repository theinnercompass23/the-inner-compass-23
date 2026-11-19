"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Sparkles } from "lucide-react";

interface BreathingExerciseProps {
  initialMode?: "1-min" | "3-min" | "5-min";
  onComplete?: () => void;
  standalone?: boolean;
}

export default function BreathingExercise({
  initialMode = "1-min",
  onComplete,
  standalone = false,
}: BreathingExerciseProps) {
  const [mode, setMode] = useState<"1-min" | "3-min" | "5-min">(initialMode);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<"Inhale" | "Hold" | "Exhale" | "Pause">("Inhale");
  const [secondsLeft, setSecondsLeft] = useState(mode === "1-min" ? 60 : mode === "3-min" ? 180 : 300);
  const [cycleSeconds, setCycleSeconds] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  // Mode durations:
  // 1-min: Box Breathing (4 in, 4 hold, 4 out, 4 hold)
  // 3-min: 4-7-8 Breathing (4 in, 7 hold, 8 out)
  // 5-min: 5-5 Paced Diaphragmatic (5 in, 5 out)

  useEffect(() => {
    const total = mode === "1-min" ? 60 : mode === "3-min" ? 180 : 300;
    setSecondsLeft(total);
    setPhase("Inhale");
    setCycleSeconds(mode === "5-min" ? 5 : 4);
    setIsActive(false);
    setCompletedCycles(0);
  }, [mode]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            if (onComplete) onComplete();
            return 0;
          }
          return prev - 1;
        });

        setCycleSeconds((prev) => {
          if (mode === "1-min") {
            // Box breathing: Inhale 4s -> Hold 4s -> Exhale 4s -> Hold 4s
            if (prev <= 1) {
              if (phase === "Inhale") {
                setPhase("Hold");
                return 4;
              } else if (phase === "Hold") {
                setPhase("Exhale");
                return 4;
              } else if (phase === "Exhale") {
                setPhase("Pause");
                return 4;
              } else {
                setPhase("Inhale");
                setCompletedCycles((c) => c + 1);
                return 4;
              }
            }
            return prev - 1;
          } else if (mode === "3-min") {
            // 4-7-8 Breathing: Inhale 4s -> Hold 7s -> Exhale 8s
            if (prev <= 1) {
              if (phase === "Inhale") {
                setPhase("Hold");
                return 7;
              } else if (phase === "Hold") {
                setPhase("Exhale");
                return 8;
              } else {
                setPhase("Inhale");
                setCompletedCycles((c) => c + 1);
                return 4;
              }
            }
            return prev - 1;
          } else {
            // 5-min: 5s in, 5s out
            if (prev <= 1) {
              if (phase === "Inhale") {
                setPhase("Exhale");
                return 5;
              } else {
                setPhase("Inhale");
                setCompletedCycles((c) => c + 1);
                return 5;
              }
            }
            return prev - 1;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, phase, mode, onComplete]);

  const toggleExercise = () => {
    setIsActive(!isActive);
  };

  const resetExercise = () => {
    setIsActive(false);
    const total = mode === "1-min" ? 60 : mode === "3-min" ? 180 : 300;
    setSecondsLeft(total);
    setPhase("Inhale");
    setCycleSeconds(mode === "5-min" ? 5 : 4);
    setCompletedCycles(0);
  };

  const formatMinSec = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Determine circle scale based on phase
  const getScaleClass = () => {
    if (!isActive) return "scale-90 opacity-75";
    if (phase === "Inhale") return "scale-125 opacity-100 transition-transform duration-4000 ease-out";
    if (phase === "Hold" || phase === "Pause") return "scale-125 opacity-90 transition-transform duration-1000";
    if (phase === "Exhale") return "scale-85 opacity-75 transition-transform duration-4000 ease-in";
    return "scale-90";
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-6 ${
        standalone ? "bg-white rounded-3xl border border-warm-sand shadow-sm max-w-xl mx-auto" : ""
      }`}
    >
      {/* Exercise Mode Selector */}
      <div className="flex items-center gap-2 p-1 bg-sage-50 rounded-2xl mb-8 border border-sage-200">
        <button
          onClick={() => setMode("1-min")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            mode === "1-min"
              ? "bg-white text-sage-900 shadow-sm"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          1-Min Box Breathing
        </button>
        <button
          onClick={() => setMode("3-min")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            mode === "3-min"
              ? "bg-white text-sage-900 shadow-sm"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          3-Min Anxiety (4-7-8)
        </button>
        <button
          onClick={() => setMode("5-min")}
          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            mode === "5-min"
              ? "bg-white text-sage-900 shadow-sm"
              : "text-charcoal-muted hover:text-charcoal"
          }`}
        >
          5-Min Deep Calm
        </button>
      </div>

      {/* Animated Breathing Circle */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center mb-8">
        {/* Outer gentle glow ring */}
        <div
          className={`absolute inset-0 rounded-full bg-sage-200/40 blur-xl transition-all duration-1000 ${
            isActive ? "scale-110" : "scale-95"
          }`}
        />

        {/* Dynamic expanding circle */}
        <div
          className={`w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-sage-300 via-sage-200 to-sage-100 flex items-center justify-center shadow-lg border border-white/60 ${getScaleClass()}`}
        >
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-sage-800 font-semibold mb-1 block">
              {isActive ? phase : "Ready"}
            </span>
            <div className="text-4xl font-serif font-bold text-sage-900 mb-1">
              {isActive ? cycleSeconds : "Begin"}
            </div>
            <div className="text-[11px] text-sage-700 font-medium">
              {phase === "Inhale"
                ? "Breathe in gently through nose"
                : phase === "Hold"
                ? "Gently retain your breath"
                : phase === "Exhale"
                ? "Slowly release through mouth"
                : "Rest in stillness"}
            </div>
          </div>
        </div>
      </div>

      {/* Session Timer & Cycle Count */}
      <div className="flex items-center gap-6 mb-6 text-sm text-charcoal-muted">
        <div>
          Remaining: <span className="font-semibold text-charcoal">{formatMinSec(secondsLeft)}</span>
        </div>
        <div className="h-4 w-px bg-warm-sand" />
        <div>
          Cycles Done: <span className="font-semibold text-charcoal">{completedCycles}</span>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleExercise}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm ${
            isActive
              ? "bg-warm-beige text-charcoal hover:bg-warm-sand"
              : "bg-sage-600 text-white hover:bg-sage-700"
          }`}
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" />
              Pause Exercise
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-white" />
              Start Breathing
            </>
          )}
        </button>

        <button
          onClick={resetExercise}
          className="p-3 rounded-full bg-warm-beige hover:bg-warm-sand text-charcoal-muted hover:text-charcoal transition-colors"
          title="Reset"
          aria-label="Reset timer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Helpful grounding tip */}
      <div className="mt-8 flex items-center gap-2 text-xs text-charcoal-subtle text-center">
        <Sparkles className="w-3.5 h-3.5 text-sage-500" />
        <span>Unclench your jaw, soften your shoulders, and let your belly expand naturally.</span>
      </div>
    </div>
  );
}
