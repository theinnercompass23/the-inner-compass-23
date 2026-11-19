"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { useApp } from "@/context/AppContext";
import { Listener } from "@/types";
import {
  MessageSquareHeart,
  Search,
  Filter,
  ShieldCheck,
  Send,
  PhoneCall,
  X,
  AlertTriangle,
  UserX,
  Sparkles,
  Info,
  Clock,
  ShieldAlert,
} from "lucide-react";

export default function ListenersPage() {
  const {
    listeners,
    chatMessages,
    isListenerTyping,
    sendListenerMessage,
    clearListenerChat,
    openCrisisModal,
    currentUser,
  } = useApp();

  const [selectedListener, setSelectedListener] = useState<Listener>(listeners[0]);
  const [inputText, setInputText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [onlineOnly, setOnlineOnly] = useState(false);

  // Modals for Report and Block
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [blockModalOpen, setBlockModalOpen] = useState(false);
  const [voiceRequestSent, setVoiceRequestSent] = useState(false);

  // Filtered listeners
  const filteredListeners = listeners.filter((l) => {
    const matchesSearch =
      l.display_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesLang =
      languageFilter === "all" || l.languages.includes(languageFilter);
    const matchesOnline = !onlineOnly || l.is_online;
    return matchesSearch && matchesLang && matchesOnline;
  });

  const currentMessages = chatMessages[selectedListener.id] || [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    sendListenerMessage(selectedListener.id, inputText);
    setInputText("");
  };

  const starterPrompts = [
    "I'm feeling really alone today and just needed to hear a human voice.",
    "Work has been burning me out and I don't know who to talk to.",
    "I had an overwhelming day and just need someone to listen without giving advice.",
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in text-charcoal">
        {/* Important Role Scope Disclaimer Banner */}
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-4 flex items-start gap-3 text-xs text-charcoal-muted leading-relaxed">
          <Info className="w-4 h-4 text-sage-700 shrink-0 mt-0.5" />
          <div>
            <strong className="text-charcoal block mb-0.5">
              Role & Care Scope: Trained Peer Listeners
            </strong>
            Haven listeners are trained, compassionate volunteers and peers who provide emotional presence, active listening, and warmth. They are{" "}
            <strong>not licensed therapists or medical doctors</strong>. If you require psychiatric diagnosis, clinical treatment, or medical prescriptions, please visit our{" "}
            <a href="/therapists" className="text-sage-800 underline font-semibold">
              Find a Therapist
            </a>{" "}
            section.
          </div>
        </div>

        {/* Two Column Layout: Listener Directory (Left 4 cols) & Live Chat (Right 8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[640px]">
          {/* Left Column: Directory */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-warm-sand p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <h2 className="text-base font-serif font-bold text-charcoal flex items-center gap-2">
                  <MessageSquareHeart className="w-4 h-4 text-sage-600" />
                  Available Listeners
                </h2>
                <span className="text-[11px] font-semibold text-sage-700 bg-sage-50 px-2 py-0.5 rounded-full">
                  {filteredListeners.filter((l) => l.is_online).length} Online Now
                </span>
              </div>

              {/* Search & Filter */}
              <div className="space-y-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-charcoal-subtle absolute left-3 top-3" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by topic or name..."
                    className="w-full text-xs pl-9 pr-3 py-2 rounded-xl border border-gray-200 focus:border-sage-500 outline-none text-charcoal"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={languageFilter}
                    onChange={(e) => setLanguageFilter(e.target.value)}
                    className="text-xs p-1.5 rounded-xl border border-gray-200 text-charcoal bg-white outline-none flex-1"
                  >
                    <option value="all">All Languages</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Punjabi">Punjabi</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Malayalam">Malayalam</option>
                  </select>

                  <button
                    onClick={() => setOnlineOnly(!onlineOnly)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                      onlineOnly
                        ? "bg-sage-600 text-white border-sage-600"
                        : "bg-white border-gray-200 text-charcoal-muted hover:border-gray-300"
                    }`}
                  >
                    Online Only
                  </button>
                </div>
              </div>

              {/* List */}
              <div className="space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {filteredListeners.map((listener) => {
                  const isSelected = selectedListener.id === listener.id;
                  return (
                    <button
                      key={listener.id}
                      onClick={() => setSelectedListener(listener)}
                      className={`w-full p-3.5 rounded-2xl text-left transition-all border flex items-start gap-3 ${
                        isSelected
                          ? "bg-sage-50 border-sage-400 shadow-sm"
                          : "bg-warm-white/70 hover:bg-warm-white border-transparent"
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={listener.avatar_url}
                          alt={listener.display_name}
                          className="w-11 h-11 rounded-2xl object-cover border border-warm-sand"
                        />
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${
                            listener.is_online ? "bg-emerald-500" : "bg-gray-300"
                          }`}
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-serif font-bold text-xs text-charcoal truncate">
                            {listener.display_name}
                          </h4>
                          <span className="text-[10px] text-sage-800 font-bold">
                            ★ {listener.rating}
                          </span>
                        </div>
                        <p className="text-[11px] text-charcoal-muted truncate">
                          {listener.badge}
                        </p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {listener.topics.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="text-[9px] px-1.5 py-0.2 rounded bg-white text-charcoal-subtle border border-gray-100"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Chat Interface */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-warm-sand flex flex-col justify-between shadow-sm overflow-hidden">
            {/* Chat Header */}
            <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-warm-white/50">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={selectedListener.avatar_url}
                    alt={selectedListener.display_name}
                    className="w-10 h-10 rounded-2xl object-cover border border-warm-sand"
                  />
                  <span
                    className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${
                      selectedListener.is_online ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-sm text-charcoal">
                      {selectedListener.display_name}
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.2 rounded-full bg-sage-100 text-sage-800">
                      Trained Peer Listener
                    </span>
                  </div>
                  <div className="text-[11px] text-charcoal-muted flex items-center gap-2">
                    <span>Speaks {selectedListener.languages.join(", ")}</span>
                    <span>•</span>
                    <span>{selectedListener.sessions_count} sessions</span>
                  </div>
                </div>
              </div>

              {/* Top Chat Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setVoiceRequestSent(true);
                    setTimeout(() => setVoiceRequestSent(false), 3000);
                  }}
                  className="p-2 rounded-xl text-sage-800 hover:bg-sage-50 transition-colors"
                  title="Request Voice Call"
                >
                  <PhoneCall className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setReportModalOpen(true)}
                  className="p-2 rounded-xl text-charcoal-muted hover:text-coral-soft hover:bg-coral-light/50 transition-colors"
                  title="Report User"
                >
                  <AlertTriangle className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setBlockModalOpen(true)}
                  className="p-2 rounded-xl text-charcoal-muted hover:text-charcoal hover:bg-gray-100 transition-colors"
                  title="Block User"
                >
                  <UserX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {voiceRequestSent && (
              <div className="bg-sage-100 p-2 text-center text-xs text-sage-900 font-semibold animate-fade-in">
                Voice session requested. The listener will notify you if available.
              </div>
            )}

            {/* Chat Messages Body */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[380px] min-h-[340px] space-y-4">
              {/* Listener Welcome Bio Header */}
              <div className="bg-sage-50/50 p-4 rounded-2xl border border-sage-100 text-xs text-charcoal-muted text-center space-y-1">
                <p className="font-serif italic text-charcoal">
                  &ldquo;{selectedListener.bio}&rdquo;
                </p>
                <span className="text-[10px] text-sage-700 block">
                  This conversation is end-to-end confidential and anonymous.
                </span>
              </div>

              {/* Messages list */}
              {currentMessages.map((msg) => {
                const isMe = msg.sender_role === "user";
                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                        isMe
                          ? "bg-sage-600 text-white rounded-br-none shadow-sm"
                          : "bg-warm-beige text-charcoal rounded-bl-none"
                      }`}
                    >
                      <p>{msg.content}</p>
                    </div>
                    <span className="text-[9px] text-charcoal-subtle mt-1 px-1">
                      {msg.created_at.split("T")[1]?.slice(0, 5) || "Just now"}
                    </span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isListenerTyping && (
                <div className="flex items-center gap-1.5 text-xs text-sage-700 bg-sage-50 px-3 py-1.5 rounded-full w-fit animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage-600 animate-ping" />
                  <span>{selectedListener.display_name} is typing gently...</span>
                </div>
              )}
            </div>

            {/* Conversation Starter Chips */}
            {currentMessages.length <= 1 && (
              <div className="px-4 py-2 border-t border-gray-100 bg-gray-50/60 overflow-x-auto flex gap-2">
                {starterPrompts.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      sendListenerMessage(selectedListener.id, p);
                    }}
                    className="text-[11px] whitespace-nowrap px-3 py-1 rounded-full bg-white border border-gray-200 text-charcoal hover:border-sage-400 hover:text-sage-800 transition-colors shrink-0"
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}

            {/* Message Input Form */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Write gently to ${selectedListener.display_name}...`}
                  className="flex-1 text-xs px-4 py-3 rounded-full border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="p-3 rounded-full bg-sage-600 text-white hover:bg-sage-700 disabled:opacity-40 transition-all shadow-sm"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="flex items-center justify-between mt-2 text-[10px] text-charcoal-subtle">
                <button
                  onClick={() => clearListenerChat(selectedListener.id)}
                  className="hover:underline text-gray-400 hover:text-charcoal"
                >
                  End & Clear Session
                </button>
                <span>Press Enter to send</span>
              </div>
            </div>
          </div>
        </div>

        {/* Report Modal */}
        {reportModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-warm-sand text-charcoal">
              <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                Report User or Session
              </h3>
              <p className="text-xs text-charcoal-muted mb-4">
                Our safety team investigates all reports within 15 minutes. Please state the reason for concern.
              </p>
              <textarea
                rows={3}
                placeholder="Inappropriate advice, unsolicited contact, or violation of safety rules..."
                className="w-full text-xs p-3 rounded-xl border border-gray-200 mb-4 outline-none focus:border-sage-500"
              />
              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => setReportModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-charcoal hover:bg-gray-100 rounded-full"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert("Report submitted to Haven Safety Admin Team.");
                    setReportModalOpen(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-coral-soft text-white hover:bg-coral-soft/90 rounded-full"
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Block Modal */}
        {blockModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-warm-sand text-charcoal text-center">
              <h3 className="text-lg font-serif font-bold text-charcoal mb-2">
                Block {selectedListener.display_name}?
              </h3>
              <p className="text-xs text-charcoal-muted mb-6">
                This user will no longer be able to message or see your profile in chat.
              </p>
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setBlockModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-charcoal hover:bg-gray-100 rounded-full"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    alert(`${selectedListener.display_name} has been blocked.`);
                    setBlockModalOpen(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold bg-charcoal text-white hover:bg-black rounded-full"
                >
                  Confirm Block
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
