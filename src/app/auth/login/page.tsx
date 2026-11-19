"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Heart, Lock, Mail, ArrowRight, UserCheck, ShieldAlert, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login, quickLogin } = useApp();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      login(email, "user");
      setIsLoading(false);
      router.push("/dashboard");
    }, 500);
  };

  const handleQuick = (role: "user" | "therapist" | "listener" | "admin") => {
    quickLogin(role);
    if (role === "admin") {
      router.push("/admin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center bg-warm-white">
      <div className="max-w-md w-full">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
            <div className="w-10 h-10 rounded-2xl bg-sage-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-charcoal">Haven</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-charcoal mb-2">
            Welcome Back to Sanctuary
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted">
            Take a slow breath. Enter your details to continue your journey.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm mb-6">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-coral-light border border-coral-soft/30 text-coral-soft text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label
                  htmlFor="login-password"
                  className="block text-xs font-bold uppercase tracking-wider text-charcoal"
                >
                  Password
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-xs text-sage-800 hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
                <input
                  id="login-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
            >
              <span>{isLoading ? "Signing in..." : "Log In"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Accounts */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <span className="block text-[11px] font-bold uppercase tracking-wider text-charcoal-subtle text-center mb-3">
              One-Click Instant Demo Login
            </span>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button
                type="button"
                onClick={() => handleQuick("user")}
                className="p-2.5 rounded-xl bg-sage-50 hover:bg-sage-100 border border-sage-200 text-sage-900 font-semibold text-center transition-colors"
              >
                👤 Member (Aarav)
              </button>
              <button
                type="button"
                onClick={() => handleQuick("therapist")}
                className="p-2.5 rounded-xl bg-sage-50 hover:bg-sage-100 border border-sage-200 text-sage-900 font-semibold text-center transition-colors"
              >
                🩺 Dr. Ananya (Therapist)
              </button>
              <button
                type="button"
                onClick={() => handleQuick("listener")}
                className="p-2.5 rounded-xl bg-warm-white hover:bg-warm-sand border border-warm-sand text-charcoal font-semibold text-center transition-colors"
              >
                💬 Priya (Listener)
              </button>
              <button
                type="button"
                onClick={() => handleQuick("admin")}
                className="p-2.5 rounded-xl bg-coral-light/70 hover:bg-coral-light border border-coral-soft/30 text-coral-soft font-semibold text-center transition-colors"
              >
                🛡️ Safety Admin
              </button>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-charcoal-muted">
          Don&apos;t have an account yet?{" "}
          <Link href="/auth/signup" className="font-bold text-sage-800 hover:underline">
            Create a free safe account
          </Link>
        </p>
      </div>
    </div>
  );
}
