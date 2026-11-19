import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock, Phone, AlertTriangle, Lock } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER, TELE_MANAS_NUMBER, EMERGENCY_NUMBER } from "@/lib/constants";
import SupportRequestForm from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "Contact Us – Connect With Haven | Human Emotional Support",
  description:
    "Get in touch with Haven's peer support team directly on WhatsApp or submit a support request with your preferred date and time.",
  alternates: {
    canonical: "https://haven.care/contact",
  },
};

export default function ContactPage() {
  const directWhatsApp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Haven team, I would like to reach out regarding your emotional support service."
  )}`;

  return (
    <div className="bg-warm-white text-dark-charcoal">
      {/* Header */}
      <section className="pt-12 pb-14 sm:pt-20 sm:pb-16 border-b border-soft-sage/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-soft-sage/25 text-xs font-semibold text-muted-green">
            Direct Reach
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-dark-charcoal tracking-tight">
            We Are Here to Listen
          </h1>
          <p className="text-sm sm:text-base text-dark-charcoal/70 max-w-xl mx-auto">
            Reach out directly through WhatsApp or submit a private support request below with your preferred connection time.
          </p>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* WhatsApp Direct */}
          <div className="bg-white rounded-3xl p-6 border border-soft-sage/30 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-whatsapp-green/10 text-whatsapp-green flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-whatsapp-green" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">WhatsApp Direct</h3>
            <p className="text-xs text-dark-charcoal/65 leading-relaxed">
              Fastest way to connect with our peer listening team. Available daily.
            </p>
            <p className="text-sm font-semibold text-dark-charcoal">{WHATSAPP_DISPLAY}</p>
            <a
              href={directWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-whatsapp-green hover:underline pt-1"
            >
              Open in WhatsApp &rarr;
            </a>
          </div>

          {/* Email Support */}
          <div className="bg-white rounded-3xl p-6 border border-soft-sage/30 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-soft-sage/20 text-muted-green flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">Email Communication</h3>
            <p className="text-xs text-dark-charcoal/65 leading-relaxed">
              For general inquiries, privacy deletion requests, or feedback.
            </p>
            <p className="text-sm font-semibold text-dark-charcoal">support@haven.care</p>
            <a
              href="mailto:support@haven.care"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-green hover:underline pt-1"
            >
              Send an Email &rarr;
            </a>
          </div>

          {/* Operating Timezone */}
          <div className="bg-white rounded-3xl p-6 border border-soft-sage/30 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-soft-sage/20 text-muted-green flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-dark-charcoal">Availability &amp; Timezone</h3>
            <p className="text-xs text-dark-charcoal/65 leading-relaxed">
              Operating on Indian Standard Time (IST / Asia/Kolkata). Request any 24-hour time slot.
            </p>
            <p className="text-sm font-semibold text-dark-charcoal">Flexible 24/7 Requests</p>
            <p className="text-xs text-dark-charcoal/50">Our team confirms availability on WhatsApp</p>
          </div>
        </div>

        {/* Crisis Notice */}
        <div className="p-5 bg-rose-50/60 rounded-2xl border border-rose-200 text-xs text-dark-charcoal/80 space-y-1 mb-12">
          <div className="flex items-center gap-2 font-semibold text-rose-700">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            Emergency Crisis Notice
          </div>
          <p>
            Haven is a peer listening service, not an emergency intervention unit. If you are experiencing suicidal thoughts or immediate physical crisis, please call Tele-MANAS at <strong>{TELE_MANAS_NUMBER}</strong> (24/7 free helpline) or Emergency at <strong>{EMERGENCY_NUMBER}</strong>.
          </p>
        </div>
      </section>

      {/* Embedded Support Form */}
      <div className="pb-16">
        <SupportRequestForm />
      </div>
    </div>
  );
}
