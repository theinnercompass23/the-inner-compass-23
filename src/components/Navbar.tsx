"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import AmbientSoundPlayer from "./AmbientSoundPlayer";
import {
  Heart,
  Menu,
  X,
  ShieldAlert,
  User,
  LogOut,
  ChevronDown,
  Sparkles,
  PhoneCall,
  LayoutDashboard,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { currentUser, isAuthenticated, logout, openCrisisModal, quickExit } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/services" },
    { label: "Community", href: "/community" },
    { label: "Find a Therapist", href: "/therapists" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <>
      {/* Top micro emergency bar */}
      <div className="bg-sage-900 text-white text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-sage-200">24/7 National Mental Health Helpline (India):</span>
            <a
              href="tel:14416"
              className="font-bold underline text-white hover:text-sage-300 ml-1"
            >
              Tele-MANAS: 14416
            </a>
            <span className="hidden md:inline text-sage-400">| Emergency: 112</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openCrisisModal}
              className="text-[11px] font-semibold text-coral-light hover:text-white flex items-center gap-1 transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-coral-soft" />
              <span className="hidden sm:inline">Emergency Help</span>
            </button>
            <span className="text-sage-700">|</span>
            <button
              onClick={quickExit}
              className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-sage-800 text-sage-300 hover:bg-sage-700 hover:text-white transition-colors"
              title="Immediately redirects to Google for privacy"
            >
              Quick Exit
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-warm-white/90 backdrop-blur-md border-b border-warm-sand/50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-sage-500 to-sage-300 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white/80" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-charcoal tracking-tight group-hover:text-sage-700 transition-colors">
                Haven
              </span>
              <span className="text-[10px] uppercase tracking-widest text-charcoal-subtle -mt-1 font-medium">
                Mental Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active
                      ? "text-sage-700 font-semibold"
                      : "text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions on right */}
          <div className="flex items-center gap-3">
            {/* Ambient Sound Toggle */}
            <AmbientSoundPlayer />

            {/* Need Support button */}
            <button
              onClick={openCrisisModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-coral-light text-coral-soft hover:bg-coral-soft/20 border border-coral-soft/30 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Crisis Support
            </button>

            {/* Auth Buttons or User Avatar */}
            {isAuthenticated && currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-warm-beige transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-sage-300 text-sage-900 font-bold flex items-center justify-center text-xs">
                    {currentUser.display_name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-medium text-charcoal hidden md:inline max-w-[100px] truncate">
                    {currentUser.display_name}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-charcoal-muted" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-xl border border-warm-sand p-2 z-50 animate-fade-in text-charcoal">
                    <div className="px-3 py-2 border-b border-gray-100">
                      <p className="text-xs font-bold text-charcoal truncate">
                        {currentUser.full_name}
                      </p>
                      <p className="text-[11px] text-charcoal-muted truncate">
                        {currentUser.email}
                      </p>
                      <span className="inline-block mt-1 px-1.5 py-0.5 rounded text-[10px] font-semibold uppercase bg-sage-100 text-sage-800">
                        {currentUser.role}
                      </span>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs rounded-xl hover:bg-sage-50 text-charcoal transition-colors"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 text-sage-600" />
                        User Dashboard
                      </Link>
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setUserDropdownOpen(false)}
                        className="flex items-center gap-2 px-3 py-2 text-xs rounded-xl hover:bg-sage-50 text-charcoal transition-colors"
                      >
                        <User className="w-3.5 h-3.5 text-sage-600" />
                        My Profile & Settings
                      </Link>
                      {currentUser.role === "admin" && (
                        <Link
                          href="/admin"
                          onClick={() => setUserDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 text-xs rounded-xl bg-sage-50 text-sage-900 font-semibold"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-sage-600" />
                          Admin Console
                        </Link>
                      )}
                    </div>

                    <div className="pt-1 border-t border-gray-100">
                      <button
                        onClick={() => {
                          setUserDropdownOpen(false);
                          logout();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs rounded-xl hover:bg-coral-light text-coral-soft transition-colors"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/login"
                  className="px-3.5 py-2 text-xs font-semibold text-charcoal hover:text-sage-700 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
                >
                  Get Support
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-charcoal hover:bg-warm-beige transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-warm-white border-b border-warm-sand px-4 pt-2 pb-6 space-y-2 animate-fade-in">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? "bg-sage-100 text-sage-900 font-semibold"
                      : "text-charcoal-muted hover:bg-warm-beige hover:text-charcoal"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-warm-sand/60 space-y-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-sage-200 text-sage-900"
              >
                Go to Dashboard
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCrisisModal();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold bg-coral-light text-coral-soft flex items-center justify-center gap-1.5"
              >
                <ShieldAlert className="w-4 h-4" />
                Emergency Crisis Helplines (14416)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
