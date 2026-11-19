"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import AmbientSoundPlayer from "./AmbientSoundPlayer";
import {
  LayoutDashboard,
  MessageSquareHeart,
  Bot,
  Users,
  CalendarCheck,
  Sparkles,
  User,
  Settings,
  ShieldAlert,
  LogOut,
  Heart,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Menu,
  X,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { currentUser, logout, openCrisisModal, quickExit } = useApp();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const menuItems = [
    { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { label: "Talk to Someone", href: "/dashboard/listeners", icon: MessageSquareHeart },
    { label: "AI Companion", href: "/dashboard/ai-companion", icon: Bot },
    { label: "Community", href: "/dashboard/community", icon: Users },
    { label: "Find a Therapist", href: "/dashboard/therapists", icon: Stethoscope },
    { label: "My Sessions", href: "/dashboard/sessions", icon: CalendarCheck },
    { label: "Self-Care", href: "/dashboard/self-care", icon: Sparkles },
    { label: "My Profile", href: "/dashboard/profile", icon: User },
    { label: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-warm-white flex flex-col md:flex-row text-charcoal">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-warm-sand sticky top-0 z-30">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sage-500 flex items-center justify-center text-white">
            <Heart className="w-4 h-4 fill-white" />
          </div>
          <span className="font-serif font-bold text-lg text-charcoal">Haven</span>
        </Link>

        <div className="flex items-center gap-2">
          <AmbientSoundPlayer />
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 rounded-xl text-charcoal hover:bg-warm-beige"
            aria-label="Open navigation"
          >
            {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-warm-sand flex flex-col justify-between p-5 transform transition-transform md:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-6">
          {/* Logo & Brand */}
          <div className="flex items-center justify-between pb-4 border-b border-warm-sand/60">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-2xl bg-sage-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <Heart className="w-4 h-4 fill-white" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold text-charcoal block leading-none">
                  Haven
                </span>
                <span className="text-[10px] tracking-wider uppercase text-charcoal-subtle font-medium">
                  Support Sanctuary
                </span>
              </div>
            </Link>

            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden p-1 text-charcoal-muted hover:text-charcoal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Micro Profile */}
          <div className="p-3 rounded-2xl bg-sage-50 border border-sage-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sage-300 text-sage-900 font-bold flex items-center justify-center text-sm shadow-inner">
              {currentUser?.display_name ? currentUser.display_name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-charcoal truncate">
                {currentUser?.display_name || "Aarav"}
              </div>
              <div className="text-[11px] text-sage-700 flex items-center gap-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {currentUser?.is_anonymous ? "Anonymous Persona" : "Standard Profile"}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 overflow-y-auto max-h-[calc(100vh-320px)] pr-1">
            {menuItems.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? "bg-sage-600 text-white shadow-sm"
                      : "text-charcoal-muted hover:bg-sage-50 hover:text-charcoal"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? "text-white" : "text-sage-700"}`} />
                    <span>{item.label}</span>
                  </div>
                  {active && <ChevronRight className="w-3.5 h-3.5 text-white/80" />}
                </Link>
              );
            })}

            {/* Admin console link if admin */}
            {currentUser?.role === "admin" && (
              <Link
                href="/admin"
                onClick={() => setMobileSidebarOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  pathname === "/admin"
                    ? "bg-sage-800 text-white"
                    : "bg-coral-light/60 text-coral-soft hover:bg-coral-light"
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-coral-soft" />
                  <span>Admin Console</span>
                </div>
              </Link>
            )}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-warm-sand/60 space-y-2">
          {/* Emergency Crisis Trigger */}
          <button
            onClick={openCrisisModal}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-coral-light/80 hover:bg-coral-light text-coral-soft text-xs font-semibold transition-colors"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Crisis Helpline (14416)</span>
          </button>

          {/* Sign Out */}
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-charcoal-muted hover:text-charcoal hover:bg-gray-100 text-xs font-medium transition-colors"
          >
            <LogOut className="w-4 h-4 text-charcoal-subtle" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        {/* Top Desktop Bar */}
        <header className="hidden md:flex items-center justify-between h-16 px-8 bg-white/70 backdrop-blur-md border-b border-warm-sand sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-charcoal-muted">
            <span className="font-serif italic text-sage-800">
              &ldquo;Take one small step towards feeling better.&rdquo;
            </span>
          </div>

          <div className="flex items-center gap-4">
            <AmbientSoundPlayer />
            <button
              onClick={openCrisisModal}
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-coral-light text-coral-soft hover:bg-coral-soft/20 border border-coral-soft/30 transition-colors flex items-center gap-1.5"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Crisis Helpline 14416
            </button>
            <button
              onClick={quickExit}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-charcoal transition-colors"
              title="Quickly exit for privacy"
            >
              Quick Exit
            </button>
          </div>
        </header>

        {/* Page Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-24 md:pb-8 max-w-7xl w-full mx-auto">
          {children}
        </main>

        {/* Mobile Bottom Navigation Bar (Sticky at bottom for quick thumb access) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-warm-sand px-3 py-2 flex items-center justify-around">
          <Link
            href="/dashboard"
            className={`flex flex-col items-center text-[10px] font-medium ${
              pathname === "/dashboard" ? "text-sage-700 font-bold" : "text-charcoal-muted"
            }`}
          >
            <LayoutDashboard className="w-5 h-5 mb-0.5" />
            <span>Home</span>
          </Link>
          <Link
            href="/dashboard/listeners"
            className={`flex flex-col items-center text-[10px] font-medium ${
              pathname === "/dashboard/listeners" ? "text-sage-700 font-bold" : "text-charcoal-muted"
            }`}
          >
            <MessageSquareHeart className="w-5 h-5 mb-0.5" />
            <span>Listen</span>
          </Link>
          <Link
            href="/dashboard/ai-companion"
            className={`flex flex-col items-center text-[10px] font-medium ${
              pathname === "/dashboard/ai-companion" ? "text-sage-700 font-bold" : "text-charcoal-muted"
            }`}
          >
            <Bot className="w-5 h-5 mb-0.5" />
            <span>AI Chat</span>
          </Link>
          <Link
            href="/dashboard/community"
            className={`flex flex-col items-center text-[10px] font-medium ${
              pathname === "/dashboard/community" ? "text-sage-700 font-bold" : "text-charcoal-muted"
            }`}
          >
            <Users className="w-5 h-5 mb-0.5" />
            <span>Circle</span>
          </Link>
          <Link
            href="/dashboard/self-care"
            className={`flex flex-col items-center text-[10px] font-medium ${
              pathname === "/dashboard/self-care" ? "text-sage-700 font-bold" : "text-charcoal-muted"
            }`}
          >
            <Sparkles className="w-5 h-5 mb-0.5" />
            <span>Care</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}
