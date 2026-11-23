import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Heart, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import FinalWhatsAppCta from "@/components/FinalWhatsAppCta";
import RegionSelector from "@/components/RegionSelector";

export const metadata: Metadata = {
  title: "Support Topics & Active Listening Guides | The Inner Compass 23",
  description:
    "Explore our complete directory of emotional support topics: loneliness, heartbreak, divorce, separation, family stress, and overthinking. Compassionate human listeners ready to connect 24/7.",
  alternates: {
    canonical: "https://haven.care/support-topics",
  },
};

const CATEGORIES = [
  {
    id: "loneliness",
    title: "Feeling Lonely",
    subtitle: "Most Requested • Isolation & Solitude",
    desc: "For days when you feel deeply isolated, living alone, or alone even in a crowd, and need a caring, friendly voice.",
    slug: "/feeling-lonely",
  },
  {
    id: "heartbreak",
    title: "Heartbreak",
    subtitle: "Heart Healing • Breakups & Grief",
    desc: "Navigating deep emotional pain, heavy memories, sleepless nights, and the quiet journey of healing after a breakup.",
    slug: "/heartbreak-support",
  },
  {
    id: "divorce",
    title: "Divorce",
    subtitle: "Life Transition • Starting Over",
    desc: "Coping with the painful end of a marriage, altered routines, social scrutiny, and finding peace in a new life chapter.",
    slug: "/divorce-support",
  },
  {
    id: "separation",
    title: "Separation",
    subtitle: "Emotional Limbo • Rebuilding",
    desc: "Working through the uncertainty, silence, physical distance, and emotional adjustment of being separated.",
    slug: "/separation-support",
  },
  {
    id: "relationship",
    title: "Relationship Problems",
    subtitle: "Partnership • Trust & Friction",
    desc: "Untangling communication gaps, trust cracks, growing emotional distance, and unspoken friction in your partnership.",
    slug: "/relationship-support",
  },
  {
    id: "marriage",
    title: "Marriage Problems",
    subtitle: "Confidential • Unspoken Fatigue",
    desc: "A neutral, compassionate haven to express marital friction, feeling unheard by your spouse, and unspoken fatigue.",
    slug: "/marriage-problems",
  },
  {
    id: "family",
    title: "Family Conflicts",
    subtitle: "Domestic Peace • Family Support",
    desc: "When domestic expectations, parental pressure, or generational disagreements become too heavy to carry alone.",
    slug: "/family-problems",
  },
  {
    id: "grief",
    title: "Grief and Loss",
    subtitle: "Bereavement • Loving Memories",
    desc: "A safe, patient refuge to talk about losing someone you love, honor memories, and mourn without feeling rushed.",
    slug: "/grief-support",
  },
  {
    id: "stress",
    title: "Emotional Stress",
    subtitle: "Mental Calm • Overwhelm Release",
    desc: "Racing thoughts, everyday overwhelm, and heavy mental fatigue — unburden yourself with someone who genuinely listens.",
    slug: "/emotional-stress-support",
  },
  {
    id: "overthinking",
    title: "Overthinking",
    subtitle: "Thought Loops • 3 AM Relief",
    desc: "When your mind replays past conversations and worries about the future late at night. Slow down and ground your thoughts.",
    slug: "/overthinking-support",
  },
  {
    id: "misunderstood",
    title: "Feeling Misunderstood",
    subtitle: "Empathy • Validation & Care",
    desc: "When people close to you dismiss or downplay your feelings. Experience the steadying relief of being truly heard.",
    slug: "/feeling-misunderstood",
  },
  {
    id: "someone",
    title: "Someone to Talk To",
    subtitle: "1-on-1 • 24/7 Human Listening",
    desc: "No clinical diagnosis, no patronizing advice, and no judgment. Just a real, empathetic human listener who is here for you.",
    slug: "/someone-to-talk",
  },
];

export default function SupportTopicsPage() {
  return (
    <div className="bg-warm-white text-dark-charcoal min-h-screen">
      {/* Hero Section */}
      <section className="pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-soft-sage/30 bg-gradient-to-b from-light-beige/30 via-warm-white to-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-soft-sage/25 border border-soft-sage/40 text-xs font-semibold text-muted-green">
            <ShieldCheck className="w-4 h-4" />
            <span>Dedicated Support Directory &bull; Non-Clinical Peer Care</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-tight">
            Explore All Support Topics &amp; Listening Guides
          </h1>

          <p className="text-sm sm:text-base text-dark-charcoal/75 max-w-2xl mx-auto leading-relaxed">
            Every emotional burden deserves a safe, private space to be spoken aloud. Choose your situation below to open an in-depth editorial guide or connect directly with an active human listener.
          </p>
        </div>
      </section>

      {/* Main 2-Column Categories Grid */}
      <section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between text-xs text-dark-charcoal/70">
          <span className="font-semibold text-sm text-dark-charcoal">All 12 Core Situations</span>
          <span className="text-muted-green font-medium">100% Confidential WhatsApp Sessions</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={c.slug}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-soft-sage/40 hover:border-muted-green shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all group block space-y-1 cursor-pointer"
            >
              <div className="font-semibold text-xs sm:text-sm text-dark-charcoal group-hover:text-muted-green transition-colors leading-snug">
                {c.title}
              </div>
              <div className="text-[11px] text-dark-charcoal/50 leading-snug">
                {c.subtitle}
              </div>
            </Link>
          ))}
        </div>

        {/* Highlighted Centered Children & Youth Support Banner (The Social Confidence Lab) */}
        <div className="pt-4 sm:pt-6 flex justify-center w-full">
          <Link
            href="/support-for-children"
            className="w-full max-w-3xl rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white via-soft-sage/20 to-amber-50/50 border-2 border-muted-green/40 hover:border-muted-green shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group block text-center cursor-pointer relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-muted-green/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-muted-green text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-white/30" />
                <span>SCOUT &bull; Children &amp; Youth Support</span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-dark-charcoal group-hover:text-muted-green transition-colors">
                SCOUT: Helping Every Child Find Their Voice and Their Place
              </h3>

              <p className="text-xs sm:text-sm text-dark-charcoal/80 max-w-xl mx-auto leading-relaxed">
                Dedicated support for shy, introverted, single, and specially-abled children to overcome loneliness, develop confident communication, and build meaningful peer friendships.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Social Skills Training
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Feeling Shy (Introvert)
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Single Child
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 border border-soft-sage/50 text-[11px] font-semibold text-dark-charcoal/80">
                  Specially Abled Loneliness
                </span>
              </div>

              <div className="pt-2 flex justify-center">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-dark-charcoal group-hover:bg-black text-white shadow-md group-hover:shadow-lg transition-all">
                  <span>Explore SCOUT for Children</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Reassurance Callout */}
      <section className="py-12 border-t border-soft-sage/30 bg-light-beige/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Not Sure Which Topic Fits Your Situation?
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/75 max-w-xl mx-auto leading-relaxed">
            You don&apos;t need to label what you&apos;re experiencing. Reach out to our human listening team on WhatsApp and simply say what is on your mind.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-dark-charcoal hover:bg-black text-white text-xs sm:text-sm font-semibold shadow-xs transition-all w-full sm:w-auto"
            >
              Go to Contact Form
            </Link>
            <a
              href="https://wa.me/918810381949?text=Hello%20The%20Inner%20Compass%2023%20Team%2C%20I%20would%20like%20to%20connect%20with%20someone%20to%20talk%20to."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold shadow-xs transition-all w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Global Regions Selector */}
      <div className="py-10 border-t border-soft-sage/30 bg-warm-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RegionSelector variant="footer" />
        </div>
      </div>

      <FinalWhatsAppCta />
    </div>
  );
}
