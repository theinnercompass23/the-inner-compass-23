import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  ShieldCheck,
  Smile,
  Sun,
  Sparkles,
  AlertTriangle,
  Users,
  CheckCircle2,
  Lock,
  ArrowRight,
  Phone,
} from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import GuardianSupportForm from "@/components/GuardianSupportForm";

export const metadata: Metadata = {
  title: "Support for Children – A Safe Space to Be Heard | Haven",
  description:
    "A gentle, safe emotional resource for children and their parents. Learn how to express big feelings and request supervised parent/guardian guidance.",
  alternates: {
    canonical: "https://haven.care/support-for-children",
  },
  openGraph: {
    title: "Support for Children – A Safe Space to Be Heard",
    description:
      "A gentle, safe emotional resource for children and their parents. Learn how to express big feelings and request supervised parent/guardian guidance.",
    url: "https://haven.care/support-for-children",
    type: "website",
  },
};

export default function SupportForChildrenPage() {
  return (
    <div className="bg-warm-white text-dark-charcoal min-h-screen">
      {/* Playful & Safe Hero Section */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden border-b border-soft-sage/20">
        {/* Soft Circular Glass Glows */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-soft-sage/25 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-soft-sage/40 text-xs font-semibold text-muted-green shadow-xs">
            <Smile className="w-4 h-4 text-muted-green" />
            <span>Gentle Space for Kids &amp; Guardians</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight leading-[1.2]">
            Support for Children – A Safe Space to Be Heard
          </h1>

          <p className="text-base sm:text-lg text-dark-charcoal/75 max-w-2xl mx-auto leading-relaxed">
            Every child experiences days when feelings feel too big to hold alone. You are never in trouble for feeling sad, angry, or worried.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="#parent-guardian-form"
              className="px-6 py-3 rounded-full bg-muted-green hover:bg-[#68826d] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              Parent &amp; Guardian Request &darr;
            </a>
            <a
              href="#trusted-adults"
              className="px-6 py-3 rounded-full bg-white/80 hover:bg-white border border-soft-sage/40 text-dark-charcoal text-xs sm:text-sm font-semibold shadow-xs transition-all"
            >
              How to Talk to a Trusted Adult
            </a>
          </div>
        </div>
      </section>

      {/* 1. CHILD-FACING SECTION: It's Okay to Feel Big Feelings */}
      <section className="py-14 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-green">
            For Kids &amp; Teens
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-dark-charcoal">
            Whatever You Are Feeling, It Is Okay
          </h2>
          <p className="text-xs sm:text-sm text-dark-charcoal/70 leading-relaxed">
            Sometimes emotions feel like sudden rainstorms. Here is what you should always remember:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-soft-sage/20 text-muted-green flex items-center justify-center">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">No Feeling Is &ldquo;Bad&rdquo;</h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Feeling lonely, nervous about school, or upset after parents argue is completely normal. Feelings are messages, not mistakes.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-soft-sage/20 text-muted-green flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">Never Feel Pressured</h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              You never have to share private secrets with strangers on the internet. Your safety and privacy always come first.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-full bg-soft-sage/20 text-muted-green flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">You Matter Very Much</h3>
            <p className="text-xs text-dark-charcoal/70 leading-relaxed">
              Even when things feel confusing, there are people in the world who love you and want to help you feel safe and heard.
            </p>
          </div>
        </div>

        {/* 2. Talking to a Trusted Adult */}
        <div id="trusted-adults" className="bg-light-beige/50 rounded-3xl p-6 sm:p-8 border border-soft-sage/30 space-y-4 scroll-mt-20">
          <h3 className="text-lg font-serif font-bold text-dark-charcoal flex items-center gap-2">
            <Users className="w-5 h-5 text-muted-green" />
            Who is a &ldquo;Trusted Adult&rdquo;?
          </h3>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            A trusted adult is someone older who makes you feel safe, listens when you speak, and helps you when things are hard. It could be:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-dark-charcoal/80 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-green" /> Your Mother or Father
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-green" /> A Grandparent, Aunt, or Uncle
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-green" /> A Caring School Teacher or Counselor
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-muted-green" /> An Elder Sibling who is an adult
            </li>
          </ul>
          <p className="text-xs text-dark-charcoal/70 pt-2 italic">
            Tip: You can start by saying: &ldquo;I have something on my mind and I really need you to just listen for a few minutes.&rdquo;
          </p>
        </div>

        {/* 3. STRICT CHILD SAFETY & SAFEGUARDING NOTICE */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-soft-sage/40 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-dark-charcoal font-bold text-base">
            <ShieldCheck className="w-6 h-6 text-muted-green flex-shrink-0" />
            <span>Our Child Protection &amp; Safety Protocol</span>
          </div>
          <p className="text-xs sm:text-sm text-dark-charcoal/80 leading-relaxed">
            At Haven, the physical and emotional safety of young people is our highest priority. To strictly protect children from online harms:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-dark-charcoal/75 list-disc pl-5 leading-relaxed">
            <li>
              <strong>No Unsupervised Private Messaging:</strong> We do NOT allow minors to have direct, unsupervised private WhatsApp conversations with unknown adults.
            </li>
            <li>
              <strong>Mandatory Guardian Involvement:</strong> All support enquiries regarding a child must be submitted and authorized by their parent or legal guardian.
            </li>
            <li>
              <strong>Safeguarding Exceptions:</strong> Absolute confidentiality cannot be promised if there is reason to believe a child is in danger or at risk of harm. In such cases, legal safeguarding authorities must be notified.
            </li>
            <li>
              <strong>Non-Clinical Scope:</strong> We provide gentle guidance and listening support; we do not provide medical treatment, diagnosis, or clinical psychiatry.
            </li>
          </ul>

          <div className="p-4 bg-rose-50/70 rounded-2xl border border-rose-200 text-xs text-dark-charcoal/80 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-rose-700">
              <AlertTriangle className="w-4 h-4" />
              Emergency &amp; Childline India Helplines (24/7 Free)
            </div>
            <p>
              If a child is in immediate danger, distress, or experiencing abuse, please contact:
            </p>
            <p className="font-semibold text-dark-charcoal pt-0.5">
              Childline India (Ministry of Women &amp; Child Development): <a href="tel:1098" className="underline text-rose-700 font-bold">1098</a> &bull; Emergency: <a href="tel:112" className="underline text-rose-700 font-bold">112</a> &bull; Tele-MANAS: <a href="tel:14416" className="underline text-rose-700 font-bold">14416</a>
            </p>
          </div>
        </div>
      </section>

      {/* 4. PARENT & GUARDIAN ENQUIRY FORM */}
      <section id="parent-guardian-form" className="py-12 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <GuardianSupportForm />
      </section>
    </div>
  );
}
