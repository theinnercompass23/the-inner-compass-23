"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useApp } from "@/context/AppContext";
import BreathingExercise from "@/components/BreathingExercise";
import {
  Bot,
  Send,
  Sparkles,
  ShieldAlert,
  RotateCcw,
  Languages,
  Heart,
  AlertCircle,
  Wind,
  Phone,
} from "lucide-react";

export default function AICompanionPage() {
  const {
    aiMessages,
    isAiTyping,
    sendAiMessage,
    clearAiChat,
    openCrisisModal,
  } = useApp();

  const [input, setInput] = useState("");
  const [breathingOpen, setBreathingOpen] = useState(false);

  const starters = [
    "I've been feeling lonely lately.",
    "I don't know what I'm feeling.",
    "I had a difficult day.",
    "I just want someone to listen.",
    "I feel stressed.",
    "मुझे बहुत अकेलापन महसूस हो रहा है (Hindi)",
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendAiMessage(input);
    setInput("");
  };

  const handleStarter = (text: string) => {
    sendAiMessage(text);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in text-charcoal">
        {/* Safety Header Disclaimer */}
        <div className="bg-sage-50 border border-sage-200/80 rounded-2xl p-4 flex items-start justify-between gap-4 text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-charcoal flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-sage-700" />
              Haven AI Emotional Companion • Hindi & English
            </span>
            <p className="text-charcoal-muted leading-relaxed">
              Haven AI is an empathetic emotional support conversationalist,{" "}
              <strong>not a licensed therapist, psychologist, or medical doctor</strong>. It cannot diagnose conditions or prescribe medications. In emergencies, call{" "}
              <a href="tel:14416" className="text-sage-800 underline font-semibold">
                Tele-MANAS at 14416
              </a>.
            </p>
          </div>

          <button
            onClick={openCrisisModal}
            className="shrink-0 text-[11px] font-semibold text-coral-soft hover:underline flex items-center gap-1"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Crisis Help
          </button>
        </div>

        {/* Chat Window Card */}
        <div className="bg-white rounded-3xl border border-warm-sand shadow-sm flex flex-col justify-between overflow-hidden min-h-[580px]">
          {/* Top Bar of Chat */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-warm-white/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sage-400 to-sage-200 text-sage-900 flex items-center justify-center shadow-inner">
                <Bot className="w-5 h-5 text-sage-800" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-sm text-charcoal">
                    Haven Companion
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-[11px] text-charcoal-muted">
                  Empathetic, non-judgmental ear • Supports Hindi & English
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setBreathingOpen(!breathingOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  breathingOpen
                    ? "bg-sage-600 text-white"
                    : "bg-sage-100 text-sage-800 hover:bg-sage-200"
                }`}
              >
                <Wind className="w-3.5 h-3.5" />
                <span>{breathingOpen ? "Close Breathing" : "Grounding (Breathe)"}</span>
              </button>
              <button
                onClick={clearAiChat}
                className="p-2 rounded-xl text-charcoal-muted hover:text-charcoal hover:bg-gray-100 transition-colors"
                title="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Embedded Breathing Modal or Drawer if activated */}
          {breathingOpen && (
            <div className="p-4 bg-sage-50/80 border-b border-sage-200 animate-fade-in">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-sage-900 uppercase tracking-wider">
                  Quick Breathing Pause
                </span>
                <button
                  onClick={() => setBreathingOpen(false)}
                  className="text-xs text-charcoal-muted hover:text-charcoal"
                >
                  Hide
                </button>
              </div>
              <BreathingExercise initialMode="1-min" />
            </div>
          )}

          {/* Messages list */}
          <div className="p-4 sm:p-6 overflow-y-auto max-h-[420px] min-h-[340px] space-y-4">
            {aiMessages.map((msg) => {
              const isUser = msg.sender_role === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-3xl p-4 text-xs sm:text-sm leading-relaxed ${
                      isUser
                        ? "bg-sage-600 text-white rounded-br-none shadow-sm"
                        : msg.is_crisis_detected
                        ? "bg-coral-light border border-coral-soft/40 text-charcoal rounded-bl-none shadow-sm"
                        : "bg-warm-beige text-charcoal rounded-bl-none"
                    }`}
                  >
                    {msg.is_crisis_detected && (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-coral-soft mb-2 pb-2 border-b border-coral-soft/20">
                        <ShieldAlert className="w-4 h-4" />
                        <span>Immediate Safety & Crisis Care Detected</span>
                      </div>
                    )}
                    <p className="whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <span className="text-[10px] text-charcoal-subtle mt-1 px-1">
                    {msg.sender_name}
                  </span>
                </div>
              );
            })}

            {isAiTyping && (
              <div className="flex items-center gap-2 text-xs text-sage-700 bg-sage-50 px-3.5 py-2 rounded-full w-fit animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                <span>Companion is thoughtfully listening...</span>
              </div>
            )}
          </div>

          {/* Starters Carousel / Row */}
          {aiMessages.length <= 2 && (
            <div className="px-4 py-2.5 bg-warm-white/70 border-t border-gray-100 flex items-center gap-2 overflow-x-auto">
              <span className="text-[10px] uppercase font-bold text-charcoal-subtle whitespace-nowrap">
                Starters:
              </span>
              {starters.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStarter(s)}
                  className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-sage-400 hover:text-sage-800 transition-colors text-charcoal shrink-0"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-4 border-t border-gray-100 bg-white">
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Share whatever is on your heart (English or Hindi)..."
                className="flex-1 text-xs sm:text-sm px-4 py-3 rounded-full border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-3 rounded-full bg-sage-600 text-white hover:bg-sage-700 disabled:opacity-40 transition-all shadow-sm"
                aria-label="Send message to AI"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between mt-2 text-[10px] text-charcoal-subtle">
              <span>Your conversations are stored privately in your browser session.</span>
              <button
                onClick={clearAiChat}
                className="hover:underline text-gray-400 hover:text-charcoal"
              >
                Clear chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
