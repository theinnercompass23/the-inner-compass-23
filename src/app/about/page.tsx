import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Lock,
  Headphones,
  Users,
} from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/constants";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import InnerCompassSection from "@/components/InnerCompassSection";
import MeetFounderSection from "@/components/MeetFounderSection";

export const metadata: Metadata = {
  title: "About Us – Human Emotional Support & Peer Listening | The Inner Compass 23",
  description:
    "Learn about The Inner Compass 23's mission and founder Dr. Aarti Aggarwal, MPT: empathetic, judgment-free human listening for anyone feeling lonely, heartbroken, or emotionally overwhelmed.",
  alternates: {
    canonical: "https://www.theinnercompass23.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-warm-white text-dark-charcoal">
      {/* Header */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-20 border-b border-soft-sage/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            <Heart className="w-3.5 h-3.5 fill-muted-green/20" />
            Our Core Purpose
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight">
            Real People. Real Conversations. No Judgment.
          </h1>
          <p className="text-base sm:text-lg text-muted-green font-medium max-w-2xl mx-auto">
            &ldquo;Nobody should feel like they have to face everything alone.&rdquo;
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* The Why */}
        <div className="space-y-4 text-sm sm:text-base text-dark-charcoal/80 leading-relaxed">
          <h2 className="text-2xl font-serif font-bold text-dark-charcoal">
            Why We Started The Inner Compass 23
          </h2>
          <p>
            In a fast-moving world where everyone is busy, finding someone who has the time, patience, and emotional capacity to simply listen has become remarkably difficult. When going through a painful breakup, dealing with the silence after divorce, struggling in marriage, or living alone in a crowded city, the emotional weight can feel suffocating.
          </p>
          <p>
            We realized that people don&apos;t always need a hospital, clinical diagnosis, or complex psychological treatment. Very often, all a person needs is a genuine, compassionate human being to talk to—someone who won&apos;t judge them, lecture them, or gossip about their situation.
          </p>
        </div>

        {/* What We Stand For */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-soft-sage/30 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-soft-sage/25 text-muted-green flex items-center justify-center">
              <Headphones className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">Unconditional Listening</h3>
            <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
              We listen with undivided attention. No interruptions, no unsolicited advice, and no moral lectures.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-soft-sage/30 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-soft-sage/25 text-muted-green flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">Total Privacy &amp; Dignity</h3>
            <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
              Your contact details and conversations are handled with strict confidentiality and respect.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-soft-sage/30 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-soft-sage/25 text-muted-green flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">Zero Cost Barrier</h3>
            <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
              No subscription packages, no hidden fees, and no financial hurdles between you and human support.
            </p>
          </div>
        </div>

        {/* Clear Boundaries */}
        <div className="p-6 sm:p-8 bg-light-beige/60 rounded-3xl border border-soft-sage/40 space-y-3">
          <div className="flex items-center gap-2 text-dark-charcoal font-semibold text-base">
            <ShieldCheck className="w-5 h-5 text-muted-green" />
            Important Notice on Our Boundaries
          </div>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 leading-relaxed">
            The Inner Compass 23 is a peer listening and emotional support platform. We are <strong>not</strong> medical professionals, licensed psychiatrists, therapists, or doctors. We do not diagnose illness, prescribe medication, or offer clinical psychotherapy. We offer an empathetic, private space to express your thoughts and feel heard.
          </p>
        </div>
      </section>

      {/* MEET OUR FOUNDER SECTION */}
      <MeetFounderSection />

      {/* The Inner Compass 23 – Philosophical Foundation */}
      <InnerCompassSection className="border-t border-soft-sage/20 bg-warm-white" />

      {/* CTA */}
      <FinalWhatsAppCta />
    </div>
  );
}