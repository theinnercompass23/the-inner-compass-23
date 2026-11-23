"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Mail,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import GuardianSupportForm from "@/components/GuardianSupportForm";
import MeetFounderSection from "@/components/MeetFounderSection";
import { buildDirectWhatsAppUrl } from "@/lib/constants";

// 6 Pillars data directly matching the Odoo carousel
const PILLARS = [
  {
    id: 1,
    number: "1",
    title: "1. Emotional Intelligence",
    lead: "Identifying feelings, triggers, self-esteem and personal boundaries.",
    image: "/scl/Emotional_Intelligence.jpg",
    alt: "Child learning emotional intelligence and self-expression",
  },
  {
    id: 2,
    number: "2",
    title: "2. Social Observation",
    lead: "Conversation skills, active listening, tone, body language and social cues.",
    image: "/scl/Observation.jpg",
    alt: "Children practicing social observation and cues",
  },
  {
    id: 3,
    number: "3",
    title: "3. Friendship and Empathy",
    lead: "Making and keeping friends, perspective-taking, kindness and healthy boundaries.",
    image: "/scl/FriendShip.jpg",
    alt: "Children bonding through friendship and empathy",
  },
  {
    id: 4,
    number: "4",
    title: "4. Problem solving and Conflict",
    lead: "STOP-THINK-CHOOSE-ACT-REVIEW methodology, anger management and negotiation.",
    image: "/scl/problem_solving.jpg",
    alt: "Children learning problem solving and conflict resolution",
  },
  {
    id: 5,
    number: "5",
    title: "5. Confidence and Independence",
    lead: "Self-expression, trying new things, handling mistakes and building resilience.",
    image: "/scl/confidence.jpg",
    alt: "Confident child stepping into new social situations",
  },
  {
    id: 6,
    number: "6",
    title: "6. Real World Practice",
    lead: "Role-play, school life, safety and social behaviour.",
    image: "/scl/children_group_talking.jpg",
    alt: "Group of children talking and practicing real-world social skills",
  },
];

// 3 Unique Courses from Odoo
const COURSES = [
  {
    id: "specially-abled",
    title: "Specially-Abled Children",
    badge: "Inclusive Cohort",
    description:
      "Ideal for children who benefit from explicit, structured practice to understand and navigate social situations.",
    bullets: [
      "Reading social cues",
      "Understanding social expectations",
      "Practising everyday interactions",
      "Problem Solving - Basic Math, Logic Puzzles & General Knowledge",
      "Navigating OCD, Sharp triggers and Overstimulation",
    ],
    pricingNote: "*Pricing coming soon, contact us for further queries",
  },
  {
    id: "only-children",
    title: "Only Children",
    badge: "Peer Dynamics",
    description:
      "Ideal for children who need more opportunities to practise sharing, collaboration and everyday peer dynamics.",
    bullets: [
      "Sharing and turn-taking",
      "Navigating group dynamics",
      "Learning compromise and negotiation",
      "Building peer relationships",
      "Handling rejection & building healthy friendships",
    ],
    pricingNote: "*Pricing coming soon, contact us for further queries",
  },
  {
    id: "shy-introverted",
    title: "Shy & Introverted Children",
    badge: "Gentle Confidence",
    description:
      "Ideal for children who need a safe, supportive space to gradually find their voice and build social confidence.",
    bullets: [
      "Starting conversations confidently",
      "Finding and expressing their voice",
      "Participating in group activities",
      "Taking initiative and gentle leadership",
    ],
    pricingNote: "*Pricing coming soon, contact us for further queries",
  },
];

// FAQs from Odoo
const FAQS = [
  {
    q: "What is the overall course structure?",
    a: "Our courses are designed for children, inclusive of introverted, single and specially abled children. Our 3 stages - Beginner, Intermediate and Advanced, are passed by each student and the instructor evaluates the students performance throughout. For more info visit our Courses section below.",
  },
  {
    q: "Will the classes be grouped or individual?",
    a: "Classes are a good mix of both one-on-one interaction and group settings to help children build friendships and connections step by step.",
  },
  {
    q: "How many courses do you have?",
    a: "One program, delivered through age-banded cohorts and flexible individual or small-group formats.",
  },
];

export default function SupportForChildrenClient() {
  const whatsappUrl = buildDirectWhatsAppUrl(
    "Hello! I am enquiring about SCOUT by The Social Confidence Lab for my child. Please share details regarding course batches and consultation."
  );

  // Carousel State
  const [activeSlide, setActiveSlide] = useState(0);
  // 0: Overview banner, 1..6: Pillars
  const totalSlides = PILLARS.length + 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5500);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-[#FFFBF6] text-[#384347] font-sans antialiased min-h-screen selection:bg-[#7ED1ED]/40 selection:text-black">
      {/* 1. CLEAN SCOUT EMBLEM HEADER (Fixed on scroll with Highlighted Inner Compass Logo) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF6]/95 backdrop-blur-md border-b border-[#384347]/15 py-2.5 sm:py-3 shadow-xs transition-all w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo & Brand Identification */}
          <Link
            href="/support-for-children"
            className="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-hidden"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden shadow-xs border border-[#384347]/15 bg-white p-0.5 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/scl/scout-logo-clean.png"
                alt="SCOUT — Social Confidence Oration & Unfolding Talents"
                fill
                sizes="(max-width: 640px) 44px, 52px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif font-bold text-xl sm:text-2xl text-[#292D2A] tracking-wider leading-none">
                SCOUT
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#595F5A] tracking-wider uppercase font-medium mt-1">
                Social Confidence Oration &amp; Unfolding Talents
              </span>
            </div>
          </Link>

          {/* Highlighted The Inner Compass 23 Navigation with Official Logo */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm text-[#292D2A] hover:text-black font-semibold transition-all px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 border-soft-sage/60 bg-white hover:bg-warm-white shadow-xs hover:shadow-md hover:scale-[1.02] shrink-0 group ring-1 ring-black/5"
            aria-label="Return to The Inner Compass 23"
          >
            <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-green group-hover:-translate-x-0.5 transition-transform shrink-0" />
            
            {/* Highlighted Logo Emblem */}
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-soft-sage/60 flex items-center justify-center p-0.5 overflow-hidden shadow-2xs shrink-0 ring-2 ring-muted-green/25 group-hover:ring-muted-green/45 transition-all">
              <Image
                src="/the-inner-compass-icon.png"
                alt="The Inner Compass 23 Logo"
                fill
                sizes="32px"
                className="object-contain p-0.5"
                priority
              />
            </div>

            <div className="flex flex-col text-left leading-tight">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-green font-bold hidden sm:inline">
                Return to
              </span>
              <span className="font-serif font-bold text-xs sm:text-sm text-dark-charcoal">
                The Inner Compass 23
              </span>
            </div>
          </Link>
        </div>
      </header>

      {/* Spacer for Fixed Header so content is never covered */}
      <div className="h-[68px] sm:h-[78px]" aria-hidden="true" />

      {/* 2. HERO SECTION: "Build real world confidence." (Exact match to Section 3 of Odoo) */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-[#384347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* SCOUT Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDE5C1] text-[#384347] text-xs font-bold shadow-2xs border border-[#384347]/15">
                <span>SCOUT &bull; Social Confidence Oration &amp; Unfolding Talents</span>
              </div>

              {/* Exact Odoo Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#384347] font-normal tracking-tight leading-[1.15]">
                Build real world <strong className="font-bold text-[#212529]">confidence.</strong>
              </h1>

              {/* Exact Odoo Lead Paragraph with highlighted text */}
              <p className="text-lg sm:text-xl text-[#384347]/90 leading-relaxed font-normal">
                Supportive classes and workshops{" "}
                <strong className="font-semibold">
                  <span
                    style={{ backgroundColor: "rgba(255, 214, 99, 0.6)" }}
                    className="px-1.5 py-0.5 rounded text-[#212529]"
                  >
                    for your children
                  </span>
                </strong>{" "}
                that build confidence, social ease, and practical skills for everyday success.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="#parent-guardian-form"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#7ED1ED] hover:bg-[#91d8f0] text-[#212529] font-bold text-sm sm:text-base shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base shadow-sm transition-all transform hover:-translate-y-0.5"
                >
                  <WhatsAppIcon className="w-5 h-5" color="#FFFFFF" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Graphic: Picture1.svg */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-lg aspect-square">
                <Image
                  src="/scl/Picture1.svg"
                  alt="Build real world confidence illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASONRY FEATURE BLOCK (Exact Match to Section 4 of Odoo) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#384347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-stretch">
            {/* Left Big Graphic: masonry_square.webp */}
            <div className="lg:col-span-5 relative w-full rounded-2xl overflow-hidden border border-[#384347]/10 shadow-xs min-h-[300px] sm:min-h-[350px] aspect-4/3 sm:aspect-square lg:aspect-auto">
              <Image
                src="/scl/masonry_square.webp"
                alt="Social Confidence Lab children growth framework"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 450px"
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>

            {/* 4 Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: 14 Skill Domains */}
              <div className="bg-[#FFFBF6] border border-[#384347]/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-end shadow-2xs hover:shadow-sm transition-shadow min-h-[160px]">
                <h2 className="text-2xl font-serif font-bold text-[#384347] mb-2">
                  14 Skill Domains
                </h2>
                <p className="text-sm sm:text-base text-[#384347]/80 leading-snug">
                  Caters to each personality type
                </p>
              </div>

              {/* Card 2: Practice First Method (With Warm Gradient) */}
              <div
                style={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF -400%, #FDE5C1 100%)",
                }}
                className="border border-[#384347]/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-end shadow-2xs hover:shadow-sm transition-shadow min-h-[160px]"
              >
                <h2 className="text-2xl font-serif font-bold text-[#384347] mb-2">
                  Practice First Method
                </h2>
                <p className="text-sm sm:text-base text-[#384347]/85 leading-snug">
                  Role-play and real-world challenges, not just theory
                </p>
              </div>

              {/* Card 3: Measurable Outcomes (With Sky Blue Gradient) */}
              <div
                style={{
                  backgroundImage: "linear-gradient(135deg, #FFFFFF -400%, #7ED1ED 100%)",
                }}
                className="border border-[#384347]/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-end shadow-2xs hover:shadow-sm transition-shadow min-h-[160px]"
              >
                <h2 className="text-2xl font-serif font-bold text-[#384347] mb-2">
                  Measurable Outcomes
                </h2>
                <p className="text-sm sm:text-base text-[#384347]/85 leading-snug">
                  5 dimensional scoring across 3 tracks
                </p>
              </div>

              {/* Card 4: Community Focus */}
              <div className="bg-[#FFFBF6] border border-[#384347]/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-end shadow-2xs hover:shadow-sm transition-shadow min-h-[160px]">
                <h2 className="text-2xl font-serif font-bold text-[#384347] mb-2">
                  Community Focus
                </h2>
                <p className="text-sm sm:text-base text-[#384347]/80 leading-snug">
                  Helping students in building healthy connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CAROUSEL / 6 PILLARS & 14 SKILL DOMAINS (Exact Match to Section 5 of Odoo) */}
      <section id="pillars" className="py-16 sm:py-24 bg-[#384347] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#7ED1ED]/20 text-[#7ED1ED] text-xs font-bold tracking-wider uppercase">
              Core Framework
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
              6 Pillars, 14 Skill Domains
            </h2>
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              Our course is highly personalized for your children, keeping in mind the 6 fundamentals of social growth.
            </p>
          </div>

          {/* Interactive Slide Viewer */}
          <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xs">
            {activeSlide === 0 ? (
              /* Overview Slide */
              <div className="p-8 sm:p-16 lg:p-20 text-center flex flex-col items-center justify-center min-h-[420px] bg-gradient-to-b from-white/10 to-transparent">
                <div className="w-16 h-16 rounded-2xl bg-[#7ED1ED] text-[#212529] flex items-center justify-center font-bold text-2xl mb-6 shadow-md">
                  6
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
                  6 Pillars &bull; 14 Skill Domains
                </h3>
                <p className="text-lg sm:text-xl text-white/85 max-w-2xl leading-relaxed mb-8">
                  Our course is highly personalized for your children, keeping in mind the 6 fundamentals of social growth.
                </p>
                <button
                  onClick={() => setActiveSlide(1)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#7ED1ED] hover:bg-[#91d8f0] text-[#212529] font-bold text-sm shadow-md transition-all"
                >
                  <span>Explore Pillar 1: Emotional Intelligence</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              /* Pillar Slide */
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[460px]">
                {/* Pillar Image */}
                <div className="lg:col-span-6 relative h-72 sm:h-96 lg:h-full min-h-[340px]">
                  <Image
                    src={PILLARS[activeSlide - 1].image}
                    alt={PILLARS[activeSlide - 1].alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#384347] via-transparent to-transparent lg:hidden" />
                </div>

                {/* Pillar Content */}
                <div className="lg:col-span-6 p-8 sm:p-12 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7ED1ED]/20 text-[#7ED1ED] text-xs font-bold">
                    Pillar {PILLARS[activeSlide - 1].number} of 6
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                    {PILLARS[activeSlide - 1].title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                    {PILLARS[activeSlide - 1].lead}
                  </p>
                  <div className="pt-4 flex flex-wrap gap-3">
                    <a
                      href="#parent-guardian-form"
                      className="px-5 py-2.5 rounded-lg bg-[#7ED1ED] hover:bg-[#91d8f0] text-[#212529] font-bold text-sm transition-all"
                    >
                      Enquire About This Pillar &rarr;
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Controls */}
            <div className="flex items-center justify-between p-4 sm:p-6 bg-black/20 border-t border-white/10">
              <button
                onClick={() => setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Indicator Pills */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <button
                  onClick={() => setActiveSlide(0)}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    activeSlide === 0
                      ? "bg-[#7ED1ED] text-[#212529]"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                >
                  Overview
                </button>
                {PILLARS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActiveSlide(idx + 1)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                      activeSlide === idx + 1
                        ? "bg-[#7ED1ED] text-[#212529]"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    Pillar {p.number}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setActiveSlide((prev) => (prev + 1) % totalSlides)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 6 Pillars Quick Grid for Mobile/Desktop reference */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6">
            {PILLARS.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveSlide(idx + 1)}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  activeSlide === idx + 1
                    ? "bg-white/15 border-[#7ED1ED] text-white shadow-md"
                    : "bg-white/5 border-white/10 text-white/75 hover:bg-white/10"
                }`}
              >
                <div className="text-xs font-bold text-[#7ED1ED] mb-1">Pillar {p.number}</div>
                <div className="text-xs sm:text-sm font-semibold line-clamp-2 leading-snug">
                  {p.title.replace(/^\d+\.\s*/, "")}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COURSES SECTION: "3 Unique Courses" (From Odoo /courses) */}
      <section id="courses" className="py-16 sm:py-24 bg-[#FFFBF6] border-b border-[#384347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FDE5C1] text-[#384347] text-xs font-bold tracking-wider uppercase border border-[#384347]/10">
              Personalized Programs
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#384347] tracking-tight">
              3 Unique Courses
            </h2>
            <p className="text-base sm:text-lg text-[#384347]/85 leading-relaxed font-normal">
              Each course type specially catered for your child, underscoring their more immediate needs and further strengthening what they already know.
            </p>
          </div>

          {/* 3 Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-[#384347]/10 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#7ED1ED]/20 text-[#384347] text-xs font-bold">
                      {course.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#384347]">
                    {course.title}
                  </h3>

                  <p className="text-sm text-[#384347]/80 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="border-t border-[#384347]/10 pt-4 space-y-2.5">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#384347]/60">
                      Curriculum Highlights
                    </div>
                    {course.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#384347]">
                        <CheckCircle2 className="w-4 h-4 text-muted-green shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#384347]/10 space-y-3">
                  <p className="text-xs italic text-[#384347]/70 text-center">
                    {course.pricingNote}
                  </p>
                  <a
                    href="#parent-guardian-form"
                    className="block w-full py-3 rounded-xl bg-[#7ED1ED] hover:bg-[#91d8f0] text-[#212529] font-bold text-xs sm:text-sm text-center shadow-xs transition-colors"
                  >
                    Enquire for {course.title} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Steady Growth Model */}
          <div className="bg-[#FAF9F6] rounded-3xl border border-[#384347]/10 p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#384347]">
                Our Steady Growth Model
              </h3>
              <p className="text-sm sm:text-base text-[#384347]/80">
                A structured 3-stage progression where instructors evaluate every child&apos;s comfort and confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Level 1 */}
              <div className="bg-white rounded-2xl p-6 border border-[#384347]/10 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FDE5C1] text-[#384347] font-bold text-lg flex items-center justify-center">
                  1
                </div>
                <h4 className="text-lg font-serif font-bold text-[#384347]">Beginner</h4>
                <ul className="text-xs sm:text-sm text-[#384347]/85 space-y-1.5 list-disc list-inside">
                  <li>Understanding self and others</li>
                  <li>Learning core social skills</li>
                  <li>Practising simple interactions</li>
                  <li>Building comfort and confidence</li>
                </ul>
              </div>

              {/* Level 2 */}
              <div className="bg-white rounded-2xl p-6 border border-[#384347]/10 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#7ED1ED]/40 text-[#212529] font-bold text-lg flex items-center justify-center">
                  2
                </div>
                <h4 className="text-lg font-serif font-bold text-[#384347]">Intermediate</h4>
                <ul className="text-xs sm:text-sm text-[#384347]/85 space-y-1.5 list-disc list-inside">
                  <li>Navigating varied social situations</li>
                  <li>Combining multiple social skills</li>
                  <li>Handling unexpected responses</li>
                  <li>Peer collaboration &amp; role play</li>
                </ul>
              </div>

              {/* Level 3 */}
              <div className="bg-white rounded-2xl p-6 border border-[#384347]/10 shadow-2xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#384347] text-white font-bold text-lg flex items-center justify-center">
                  3
                </div>
                <h4 className="text-lg font-serif font-bold text-[#384347]">Advanced</h4>
                <ul className="text-xs sm:text-sm text-[#384347]/85 space-y-1.5 list-disc list-inside">
                  <li>Managing complex social situations</li>
                  <li>Adapting to different contexts</li>
                  <li>Leading and problem-solving</li>
                  <li>Building independent social confidence</li>
                </ul>
              </div>
            </div>

            <p className="text-center text-sm font-semibold text-[#384347]/90 pt-2">
              One program, delivered through age-banded cohorts and flexible individual or small-group formats.
            </p>
          </div>
        </div>
      </section>

      {/* 6. "Designed specially for..." SECTION (Exact Match to Sections 6, 7, 8, 9 of Odoo) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#384347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#384347] tracking-tight">
              Designed specially for...
            </h2>
          </div>

          {/* Row 1: Shy & Introverted Children (Text left, Image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#FDE5C1] text-[#384347] text-xs font-bold">
                Cohort 1
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#384347]">
                Shy &amp; Introverted Children
              </h3>
              <p className="text-base sm:text-lg text-[#384347]/85 leading-relaxed">
                A safe, repeatable space to build a voice - from the first hello to leading a group activity.
              </p>
              <div className="pt-2">
                <a
                  href="#parent-guardian-form"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#384347] hover:text-black border-b border-[#7ED1ED] pb-0.5"
                >
                  <span>Explore Shy &amp; Introverted Support</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 lg:offset-1">
              <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/scl/ahmadreza-rezaie-FxzoAr9QBKw-unsplash.jpg"
                  alt="Shy and Introverted children"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Specially-Abled Children (Image left, Text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/scl/ruslan-horovyi-ycuGtOTAtuU-unsplash.jpg"
                  alt="Specially-Abled Children"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:offset-1 order-1 lg:order-2 space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#7ED1ED]/30 text-[#212529] text-xs font-bold">
                Cohort 2
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#384347]">
                Specially-Abled Children
              </h3>
              <p className="text-base sm:text-lg text-[#384347]/85 leading-relaxed">
                Structured, low-stigma rehearsal for children who need explicit teaching of cues that most kids absorb effortlessly.
              </p>
              <div className="pt-2">
                <a
                  href="#parent-guardian-form"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#384347] hover:text-black border-b border-[#7ED1ED] pb-0.5"
                >
                  <span>Explore Specially-Abled Support</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Row 3: Only Children (Text left, Image right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
            <div className="lg:col-span-5 space-y-4">
              <span className="px-3 py-1 rounded-full bg-[#FDE5C1] text-[#384347] text-xs font-bold">
                Cohort 3
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#384347]">
                Only Children
              </h3>
              <p className="text-base sm:text-lg text-[#384347]/85 leading-relaxed">
                Extra practice with sharing, turn-taking and group dynamics that siblings would otherwise provide at home.
              </p>
              <div className="pt-2">
                <a
                  href="#parent-guardian-form"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#384347] hover:text-black border-b border-[#7ED1ED] pb-0.5"
                >
                  <span>Explore Only Children Support</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 lg:offset-1">
              <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md">
                <Image
                  src="/scl/single_child.jpg"
                  alt="Only Child practicing social ease"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. KEY MILESTONES CARD (Exact Match to Section 10 of Odoo) */}
      <section className="py-16 sm:py-24 bg-[#FDE5C1] border-b border-[#384347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Headline */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-white text-[#384347] text-xs font-bold shadow-2xs">
                Measurable Growth
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#384347] tracking-tight">
                Keep track with our key Milestones
              </h2>
              <p className="text-base sm:text-lg text-[#384347]/85 max-w-xl">
                Every child progresses through clear, transparent evaluation checkpoints so guardians observe tangible behavioral improvements.
              </p>
            </div>

            {/* Floating Card: "Check each one!" */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-[#384347]/10 space-y-5">
                <div className="flex items-center justify-between border-b border-[#384347]/10 pb-3">
                  <h3 className="text-xl font-serif font-bold text-[#384347]">
                    Check each one!
                  </h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#7ED1ED]/25 text-[#384347]">
                    5 Checkpoints
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {[
                    "Clear communication",
                    "Friendship",
                    "Emotional Regulation",
                    "Problem-Solving",
                    "Social Confidence",
                  ].map((milestone, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-[#384347]">
                      <div className="w-6 h-6 rounded-full bg-[#7ED1ED]/30 text-[#212529] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-muted-green" />
                      </div>
                      <span>{milestone}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href="#parent-guardian-form"
                    className="block w-full py-3 rounded-xl bg-[#384347] hover:bg-black text-white font-bold text-center text-xs sm:text-sm shadow-md transition-all"
                  >
                    Start Your Child&apos;s Journey &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (Exact Match to Section 11 of Odoo) */}
      <section id="faq" className="py-16 sm:py-24 bg-[#FFFBF6] border-b border-[#384347]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Questions Accordion */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#7ED1ED]/20 text-[#384347] text-xs font-bold tracking-wider uppercase mb-3">
                  Clarifications &amp; Help
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#384347]">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl border border-[#384347]/10 overflow-hidden shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-[#384347] hover:text-black transition-colors"
                      >
                        <span className="text-base sm:text-lg">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#384347]/60 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#384347]" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-[#384347]/85 border-t border-[#384347]/5 leading-relaxed">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Picture4.svg illustration */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                <Image
                  src="/scl/Picture4.svg"
                  alt="Frequently Asked Questions Illustration"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 MEET OUR FOUNDER */}
      <MeetFounderSection id="about-founder" className="bg-[#FFFBF6]" />

      {/* 9. GUARDIAN CONSULTATION & ENQUIRY FORM */}
      <section
        id="parent-guardian-form"
        className="py-16 sm:py-24 bg-white border-b border-[#384347]/10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#7ED1ED]/20 text-[#384347] text-xs font-bold tracking-wider uppercase">
              Parent &amp; Guardian Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#384347]">
              Enquire for Your Child
            </h2>
            <p className="text-sm sm:text-base text-[#384347]/80 max-w-xl mx-auto leading-relaxed">
              Fill out this confidential enquiry form. Our lead educator will connect with you via WhatsApp to understand your child&apos;s specific needs and recommend the right cohort.
            </p>
          </div>

          {/* Form Component */}
          <GuardianSupportForm />
        </div>
      </section>

      {/* 10. EXACT ODOO FOOTER (Dual Branding & Email Contacts) */}
      <footer className="bg-[#FFFBF6] pt-16 pb-12 border-t border-[#384347]/10 text-[#384347]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            {/* Pages Navigation */}
            <div className="lg:col-span-3 space-y-4">
              <h5 className="font-serif font-bold text-lg text-[#384347]">Pages</h5>
              <ul className="space-y-2 text-sm text-[#384347]/80">
                <li>
                  <Link href="/support-for-children" className="hover:text-black hover:underline transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#courses" className="hover:text-black hover:underline transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <Link href="/about" className="hover:text-black hover:underline transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#parent-guardian-form" className="hover:text-black hover:underline transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <h5 className="font-serif font-bold text-lg text-[#384347]">Contact Us</h5>
              <div className="space-y-2 text-sm">
                <div>
                  <a
                    href="mailto:thesocialconfidencelab@gmail.com"
                    className="inline-flex items-center gap-2 text-[#384347] hover:text-black hover:underline font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 text-muted-green" />
                    <span>thesocialconfidencelab@gmail.com</span>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:theinnercompass23.info@gmail.com"
                    className="inline-flex items-center gap-2 text-[#384347] hover:text-black hover:underline font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4 text-muted-green" />
                    <span>theinnercompass23.info@gmail.com</span>
                  </a>
                </div>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#128C7E] hover:underline"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" color="#128C7E" />
                    <span>Chat with admissions on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Dual Logos: The Inner Compass & SCL */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-6 pt-2">
              {/* Inner Compass Logo */}
              <div className="relative w-28 h-20">
                <Image
                  src="/scl/The_inner_compass_logo.png"
                  alt="The Inner Compass 23"
                  fill
                  sizes="120px"
                  className="object-contain"
                />
              </div>

              {/* SCOUT Circular Emblem Logo */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#384347]/15 bg-white p-1 shadow-xs">
                <Image
                  src="/scl/scout-logo-clean.png"
                  alt="SCOUT — Social Confidence Oration & Unfolding Talents"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Subfooter */}
          <div className="border-t border-[#384347]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#384347]/70">
            <p className="font-medium">
              Powered by TheInnerCompass23
            </p>
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:underline">
                The Inner Compass 23 Peer Support
              </Link>
              <span>&bull;</span>
              <a
                href="https://codeorbit.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#384347]/80 font-medium"
              >
                created by codeorbit.cloud
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
