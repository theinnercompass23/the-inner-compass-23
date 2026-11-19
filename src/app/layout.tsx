import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LeadProvider } from "@/context/LeadContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haven — Human Emotional Support & Peer Listening Service",
  description:
    "Sometimes, you just need someone to listen. Private, confidential human emotional support for loneliness, divorce, separation, breakups, grief, and personal struggles. Connect directly on WhatsApp.",
  keywords: [
    "someone to talk to online",
    "emotional support online India",
    "feeling lonely need someone to talk to",
    "divorce support",
    "breakup emotional support",
    "someone to listen without judgment",
    "main akela hoon kis se baat karun",
    "mujhe kisi se baat karni hai",
  ],
  authors: [{ name: "Haven Human Support Team" }],
  metadataBase: new URL("https://haven.care"),
  alternates: {
    canonical: "https://haven.care",
  },
  openGraph: {
    title: "Haven — Human Emotional Support & Peer Listening Service",
    description:
      "Whether you're feeling lonely, dealing with separation, or need someone to listen, we're here without judgment. Connect on WhatsApp.",
    url: "https://haven.care",
    siteName: "Haven",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven — Human Emotional Support",
    description:
      "Sometimes, you just need someone to listen. Connect privately on WhatsApp for emotional support.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-white text-dark-charcoal font-sans">
        <LeadProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </LeadProvider>
      </body>
    </html>
  );
}
