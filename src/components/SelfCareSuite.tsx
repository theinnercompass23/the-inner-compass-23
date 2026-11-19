"use client";

import React, { useState } from "react";
import { useApp } from "@/context/AppContext";
import BreathingExercise from "./BreathingExercise";
import { MoodType, JournalEntry } from "@/types";
import confetti from "canvas-confetti";
import {
  Sparkles,
  Wind,
  Heart,
  Smile,
  BookOpen,
  Play,
  Pause,
  Plus,
  Trash2,
  Edit3,
  Search,
  CheckCircle2,
  Clock,
  Volume2,
  Lock,
  Calendar,
} from "lucide-react";

export default function SelfCareSuite({
  defaultTab = "breathing",
}: {
  defaultTab?: "breathing" | "meditation" | "mood" | "journal";
}) {
  const { moods, logMood, journals, createJournal, deleteJournal, updateJournal } =
    useApp();

  const [activeTab, setActiveTab] = useState<"breathing" | "meditation" | "mood" | "journal">(
    defaultTab
  );

  // Mood Tracker Form
  const [selectedMood, setSelectedMood] = useState<MoodType>("okay");
  const [moodIntensity, setMoodIntensity] = useState<number>(3);
  const [selectedTags, setSelectedTags] = useState<string[]>(["Rest"]);
  const [moodNotes, setMoodNotes] = useState("");
  const [moodSavedToast, setMoodSavedToast] = useState(false);

  // Journal Form
  const [journalTitle, setJournalTitle] = useState("");
  const [journalContent, setJournalContent] = useState("");
  const [journalMoodTag, setJournalMoodTag] = useState<MoodType>("okay");
  const [journalSearch, setJournalSearch] = useState("");
  const [isJournalModalOpen, setIsJournalModalOpen] = useState(false);

  // Guided Meditation Active Audio Simulation
  const [activeMeditation, setActiveMeditation] = useState<string | null>(null);

  const moodOptions: { label: string; mood: MoodType; emoji: string }[] = [
    { label: "Happy", mood: "happy", emoji: "😊" },
    { label: "Okay", mood: "okay", emoji: "🌿" },
    { label: "Sad", mood: "sad", emoji: "🌧️" },
    { label: "Anxious", mood: "anxious", emoji: "🌊" },
    { label: "Stressed", mood: "stressed", emoji: "⚡" },
    { label: "Lonely", mood: "lonely", emoji: "🕊️" },
    { label: "Overwhelmed", mood: "overwhelmed", emoji: "🌪️" },
  ];

  const tagOptions = [
    "Work",
    "Sleep",
    "Family",
    "Friends",
    "Health",
    "Chai/Tea",
    "Nature",
    "Exams",
    "Rest",
  ];

  const meditations = [
    {
      id: "med-1",
      title: "Releasing Overwhelm & Grounding",
      duration: "5 Mins",
      type: "Anxiety Relief",
      desc: "Gentle somatic cues to untangle tight shoulders and quiet mental racing.",
    },
    {
      id: "med-2",
      title: "Deep Night Sleep & Nervous System Reset",
      duration: "10 Mins",
      type: "Sleep",
      desc: "Warm progressive muscle relaxation designed for insomnia and nighttime loneliness.",
    },
    {
      id: "med-3",
      title: "Morning Intentionality & Soft Start",
      duration: "7 Mins",
      type: "Daily Routine",
      desc: "Start your morning without anxiety or comparison. Breathe before checking your phone.",
    },
    {
      id: "med-4",
      title: "Walking Through an Indian Forest",
      duration: "12 Mins",
      type: "Nature Visualization",
      desc: "A sensory walk through eucalyptus trees and gentle mountain rain in Himachal.",
    },
  ];

  const journalPrompts = [
    "What is one small thing you survived today?",
    "Write down three things you don't need to control right now.",
    "If your closest friend felt this way, what gentle words would you say to them?",
    "What gave you even 10 seconds of peace or comfort today?",
  ];

  const handleLogMood = (e: React.FormEvent) => {
    e.preventDefault();
    logMood(selectedMood, moodIntensity, selectedTags, moodNotes);
    setMoodNotes("");
    setMoodSavedToast(true);
    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#A8BDA5", "#78947D", "#EEECE4"],
      });
    } catch {
      // ignore
    }
    setTimeout(() => setMoodSavedToast(false), 3500);
  };

  const handleCreateJournal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!journalTitle.trim() || !journalContent.trim()) return;
    createJournal(journalTitle, journalContent, journalMoodTag, ["Reflection"]);
    setJournalTitle("");
    setJournalContent("");
    setIsJournalModalOpen(false);
  };

  const filteredJournals = journals.filter(
    (j) =>
      j.title.toLowerCase().includes(journalSearch.toLowerCase()) ||
      j.content.toLowerCase().includes(journalSearch.toLowerCase())
  );

  return (
    <div className="space-y-6 text-charcoal">
      {/* Header */}
      <div className="bg-sage-50 border border-sage-200/80 rounded-3xl p-6 sm:p-8">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
          Personal Wellness Suite
        </span>
        <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mt-1 mb-2">
          Self-Care & Mindfulness Sanctuary
        </h1>
        <p className="text-xs sm:text-sm text-charcoal-muted max-w-2xl leading-relaxed">
          Daily micro-practices to restore balance. Interactive paced breathing, guided relaxation, an encrypted private journal, and a non-judgmental mood tracker.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-warm-sand pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("breathing")}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === "breathing"
              ? "bg-sage-600 text-white shadow-sm"
              : "text-charcoal-muted hover:bg-white"
          }`}
        >
          <Wind className="w-4 h-4" />
          <span>Interactive Breathing</span>
        </button>
        <button
          onClick={() => setActiveTab("meditation")}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === "meditation"
              ? "bg-sage-600 text-white shadow-sm"
              : "text-charcoal-muted hover:bg-white"
          }`}
        >
          <Volume2 className="w-4 h-4" />
          <span>Guided Relaxation</span>
        </button>
        <button
          onClick={() => setActiveTab("mood")}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === "mood"
              ? "bg-sage-600 text-white shadow-sm"
              : "text-charcoal-muted hover:bg-white"
          }`}
        >
          <Smile className="w-4 h-4" />
          <span>Daily Mood Tracker</span>
        </button>
        <button
          onClick={() => setActiveTab("journal")}
          className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeTab === "journal"
              ? "bg-sage-600 text-white shadow-sm"
              : "text-charcoal-muted hover:bg-white"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Private Journal</span>
        </button>
      </div>

      {/* TAB 1: BREATHING */}
      {activeTab === "breathing" && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm animate-fade-in">
          <div className="text-center max-w-md mx-auto mb-6">
            <h3 className="text-xl font-serif font-bold text-charcoal mb-1">
              Paced Somatic Breathing
            </h3>
            <p className="text-xs text-charcoal-muted">
              Choose your exercise mode below. Inhale through your nose, hold softly, and release with a gentle exhale.
            </p>
          </div>
          <BreathingExercise initialMode="1-min" />
        </div>
      )}

      {/* TAB 2: GUIDED MEDITATION */}
      {activeTab === "meditation" && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meditations.map((med) => {
              const isPlaying = activeMeditation === med.id;
              return (
                <div
                  key={med.id}
                  className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
                    isPlaying
                      ? "bg-sage-50 border-sage-500 shadow-md"
                      : "bg-white border-warm-sand shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-sage-800 uppercase tracking-wider">
                        {med.type}
                      </span>
                      <span className="text-charcoal-subtle flex items-center gap-1 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {med.duration}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-charcoal">
                      {med.title}
                    </h4>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {med.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button
                      onClick={() =>
                        setActiveMeditation(isPlaying ? null : med.id)
                      }
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                        isPlaying
                          ? "bg-coral-light text-coral-soft"
                          : "bg-sage-600 text-white hover:bg-sage-700"
                      }`}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>Pause Session</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>Listen (5 Mins)</span>
                        </>
                      )}
                    </button>

                    {isPlaying && (
                      <span className="text-[11px] text-sage-700 font-semibold animate-pulse">
                        ● Playing gentle guided audio
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: MOOD TRACKER */}
      {activeTab === "mood" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
          {/* Mood Logging Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif font-bold text-charcoal">
                  Record Today&apos;s Mood
                </h3>
                <p className="text-xs text-charcoal-muted">
                  Private, optional, and never used to diagnose.
                </p>
              </div>
              {moodSavedToast && (
                <span className="text-xs font-bold text-sage-800 bg-sage-100 px-3 py-1 rounded-full animate-fade-in">
                  Saved!
                </span>
              )}
            </div>

            <form onSubmit={handleLogMood} className="space-y-5">
              {/* Mood Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  1. How would you describe your emotional state?
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {moodOptions.map((item) => {
                    const isSelected = selectedMood === item.mood;
                    return (
                      <button
                        key={item.mood}
                        type="button"
                        onClick={() => setSelectedMood(item.mood)}
                        className={`p-2.5 rounded-2xl flex flex-col items-center justify-center border transition-all ${
                          isSelected
                            ? "bg-sage-600 text-white border-sage-600 shadow-sm scale-105"
                            : "bg-warm-white hover:bg-sage-50 text-charcoal border-gray-200"
                        }`}
                      >
                        <span className="text-2xl mb-1">{item.emoji}</span>
                        <span className="text-[10px] font-semibold">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Intensity Slider */}
              <div>
                <div className="flex items-center justify-between text-xs mb-1">
                  <label className="font-bold uppercase tracking-wider text-charcoal">
                    2. Emotional Intensity
                  </label>
                  <span className="font-bold text-sage-800">{moodIntensity} / 5</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={5}
                  value={moodIntensity}
                  onChange={(e) => setMoodIntensity(parseInt(e.target.value))}
                  className="w-full accent-sage-600 h-1.5 bg-gray-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-charcoal-subtle mt-1">
                  <span>Gentle / Mild</span>
                  <span>Moderate</span>
                  <span>Very Intense</span>
                </div>
              </div>

              {/* Contributing Factors */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">
                  3. What influenced this?
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {tagOptions.map((tag) => {
                    const hasTag = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => {
                          if (hasTag) {
                            setSelectedTags(selectedTags.filter((t) => t !== tag));
                          } else {
                            setSelectedTags([...selectedTags, tag]);
                          }
                        }}
                        className={`text-xs px-3 py-1 rounded-full border transition-all ${
                          hasTag
                            ? "bg-sage-100 text-sage-900 border-sage-400 font-semibold"
                            : "bg-white text-charcoal-muted border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  4. Private Reflection (Optional)
                </label>
                <textarea
                  rows={2}
                  value={moodNotes}
                  onChange={(e) => setMoodNotes(e.target.value)}
                  placeholder="A few words on what you experienced..."
                  className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
              >
                Save Mood Check-in
              </button>
            </form>
          </div>

          {/* Mood History & Weekly Insight (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm space-y-4">
              <h4 className="text-base font-serif font-bold text-charcoal">
                Recent Mood History
              </h4>

              <div className="space-y-2.5">
                {moods.slice(0, 6).map((m) => (
                  <div
                    key={m.id}
                    className="p-3 rounded-2xl bg-warm-white border border-warm-sand/60 flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">
                        {m.mood === "happy"
                          ? "😊"
                          : m.mood === "okay"
                          ? "🌿"
                          : m.mood === "sad"
                          ? "🌧️"
                          : m.mood === "anxious"
                          ? "🌊"
                          : m.mood === "stressed"
                          ? "⚡"
                          : m.mood === "lonely"
                          ? "🕊️"
                          : "🌪️"}
                      </span>
                      <div>
                        <div className="font-semibold text-charcoal capitalize">
                          {m.mood}{" "}
                          <span className="text-[10px] text-charcoal-subtle font-normal">
                            (Intensity {m.intensity}/5)
                          </span>
                        </div>
                        {m.notes && (
                          <div className="text-[11px] text-charcoal-muted line-clamp-1">
                            {m.notes}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] text-charcoal-subtle font-medium">
                      {m.date}
                    </span>
                  </div>
                ))}
              </div>

              {/* Compassionate Insight */}
              <div className="p-4 rounded-2xl bg-sage-50 border border-sage-200 text-xs text-charcoal-muted leading-relaxed">
                <strong className="text-charcoal block mb-0.5">Gentle Insight:</strong>
                Your emotions are naturally fluctuating waves, not a fixed state. Notice them without harsh self-criticism.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PRIVATE JOURNAL */}
      {activeTab === "journal" && (
        <div className="space-y-6 animate-fade-in">
          {/* Top Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-charcoal-subtle absolute left-3.5 top-3" />
              <input
                type="text"
                value={journalSearch}
                onChange={(e) => setJournalSearch(e.target.value)}
                placeholder="Search your journal entries..."
                className="w-full text-xs pl-9 pr-4 py-2.5 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
              />
            </div>

            <button
              onClick={() => setIsJournalModalOpen(true)}
              className="px-5 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>New Journal Entry</span>
            </button>
          </div>

          {/* Prompts Drawer */}
          <div className="p-4 bg-warm-white rounded-3xl border border-warm-sand flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-[10px] uppercase font-bold text-charcoal-subtle whitespace-nowrap">
              Prompts:
            </span>
            {journalPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setJournalTitle(p);
                  setIsJournalModalOpen(true);
                }}
                className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-white border border-gray-200 hover:border-sage-400 text-charcoal hover:text-sage-800 transition-colors shrink-0"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Journal Entries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJournals.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-3xl p-6 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-charcoal-subtle font-medium">
                      {entry.created_at.split("T")[0]}
                    </span>
                    <button
                      onClick={() => deleteJournal(entry.id)}
                      className="p-1 rounded-lg text-charcoal-subtle hover:text-coral-soft transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="font-serif font-bold text-base text-charcoal mb-2">
                    {entry.title}
                  </h4>

                  <p className="text-xs text-charcoal-muted leading-relaxed whitespace-pre-wrap">
                    {entry.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-charcoal-subtle">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-sage-600" />
                    Encrypted & Private
                  </span>
                  <div className="flex gap-1">
                    {entry.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.2 rounded bg-sage-50 text-sage-800 text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* New Entry Modal */}
          {isJournalModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
              <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-warm-sand relative my-8 text-charcoal">
                <h3 className="text-xl font-serif font-bold text-charcoal mb-1">
                  Private Journal Entry
                </h3>
                <p className="text-xs text-charcoal-muted mb-4">
                  Write freely without worrying about spelling, structure, or judgment.
                </p>

                <form onSubmit={handleCreateJournal} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Title or Subject
                    </label>
                    <input
                      type="text"
                      value={journalTitle}
                      onChange={(e) => setJournalTitle(e.target.value)}
                      placeholder="e.g. Things I survived today..."
                      className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                      Thoughts & Feelings
                    </label>
                    <textarea
                      rows={6}
                      value={journalContent}
                      onChange={(e) => setJournalContent(e.target.value)}
                      placeholder="Pour whatever is inside your mind onto this page..."
                      className="w-full text-xs p-3 rounded-2xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                      required
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsJournalModalOpen(false)}
                      className="px-4 py-2 text-xs font-semibold text-charcoal hover:bg-gray-100 rounded-full"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                    >
                      Save to Private Vault
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
