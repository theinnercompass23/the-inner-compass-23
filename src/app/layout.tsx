import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CrisisModal from "@/components/CrisisModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Haven — Mental Wellness & Emotional Support Sanctuary",
  description:
    "Nobody should feel like they have to face everything alone. Connect with trained empathetic listeners, verified psychologists, AI emotional companion, and a supportive anonymous community.",
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
      <body className="min-h-full flex flex-col bg-warm-white text-charcoal font-sans">
        <AppProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <CrisisModal />
        </AppProvider>
      </body>
    </html>
  );
}
