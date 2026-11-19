"use client";

import React from "react";
import Link from "next/link";
import {
  MessageSquareHeart,
  Stethoscope,
  Bot,
  Users,
  Smile,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Talk to a Human Listener",
      category: "Peer Connection",
      desc: "Connect anonymously in real-time with trained empathetic peers who understand life transitions, heartbreak, loneliness, and academic burnout. Non-judgmental, free, and compassionate.",
      link: "/dashboard/listeners",
      cta: "Browse Listeners",
      icon: MessageSquareHeart,
    },
    {
      title: "Licensed Clinical Counselling",
      category: "Professional Therapy",
      desc: "1-on-1 private video therapy sessions with verified clinical psychologists (RCI registered) and psychiatrists (MD) specializing in CBT, ACT, ADHD, panic, and grief.",
      link: "/therapists",
      cta: "Find a Therapist",
      icon: Stethoscope,
    },
    {
      title: "AI Emotional Companion",
      category: "24/7 Digital Check-in",
      desc: "Warm, empathetic conversational companion supporting English, Hindi, and Hinglish. Equipped with acute crisis detection and grounding prompts.",
      link: "/dashboard/ai-companion",
      cta: "Chat with Companion",
      icon: Bot,
    },
    {
      title: "Anonymous Community Circle",
      category: "Safe Social Peer Support",
      desc: "A calm forum where you can unburden your thoughts without ever revealing your real name. Moderate guidelines strictly filter harassment, commercial spam, and medical misinformation.",
      link: "/community",
      cta: "Explore Community",
      icon: Users,
    },
    {
      title: "Facilitated Group Circles",
      category: "Shared Healing",
      desc: "Small weekly virtual group discussions facilitated by senior mental wellness counselors. Safe spaces to talk about family pressure, workplace burnout, and living alone.",
      link: "/dashboard/therapists",
      cta: "View Group Circles",
      icon: Smile,
    },
    {
      title: "Mindfulness & Self-Care Suite",
      category: "Self-Regulation",
      desc: "Interactive box breathing animations, 4-7-8 anxiety relief, guided meditation audio, daily mood tracking charts, and an encrypted private journal vault.",
      link: "/self-care",
      cta: "Access Self-Care",
      icon: Sparkles,
    },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-charcoal space-y-16">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-sage-800">
          Our Full Spectrum of Care
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-charcoal">
          Compassionate Mental Wellness Offerings
        </h1>
        <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed">
          From late-night loneliness to structured clinical psychotherapeutic care, we have built a sanctuary suited for where you are right now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => {
          const Icon = svc.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-warm-sand shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-sage-100 text-sage-800 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-sage-800 block">
                  {svc.category}
                </span>
                <h3 className="font-serif font-bold text-xl text-charcoal">
                  {svc.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {svc.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <Link
                  href={svc.link}
                  className="w-full py-3 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm flex items-center justify-center gap-2 transition-all"
                >
                  <span>{svc.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
