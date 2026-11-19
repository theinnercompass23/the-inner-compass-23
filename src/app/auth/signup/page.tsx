"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Heart, Lock, Mail, User, ShieldCheck, ArrowRight, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const { signup } = useApp();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (!agreeTerms) {
      setError("Please agree to our privacy principles to continue.");
      return;
    }

    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      signup(displayName, email, isAnonymous);
      setIsLoading(false);
      router.push("/dashboard");
    }, 600);
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
            Create Your Safe Sanctuary
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted">
            Free, confidential, and protected. You control what the world sees.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm mb-6">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-coral-light border border-coral-soft/30 text-coral-soft text-xs">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="signup-name"
                className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1"
              >
                Display Name or Pseudonym
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
                <input
                  id="signup-name"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="e.g. Aarav or GentleWanderer"
                  className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="signup-email"
                className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
                <input
                  id="signup-email"
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
              <label
                htmlFor="signup-password"
                className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
                <input
                  id="signup-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
                  required
                />
              </div>
            </div>

            {/* Anonymous Toggle Option */}
            <div className="p-3.5 rounded-2xl bg-sage-50 border border-sage-200 space-y-1">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                  className="mt-0.5 accent-sage-600 rounded"
                />
                <div className="text-xs">
                  <span className="font-bold text-charcoal flex items-center gap-1.5">
                    <EyeOff className="w-3.5 h-3.5 text-sage-700" />
                    Always post anonymously in Community
                  </span>
                  <span className="text-charcoal-muted text-[11px] block mt-0.5">
                    Your real email and name will never be displayed publicly. You will be assigned a gentle avatar (e.g. GentleSparrow).
                  </span>
                </div>
              </label>
            </div>

            {/* Terms checkbox */}
            <div className="pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-charcoal-muted">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="accent-sage-600 rounded"
                />
                <span>
                  I agree to Haven&apos;s{" "}
                  <Link href="/terms" className="underline text-sage-800">
                    Community Safety Rules
                  </Link>{" "}
                  &{" "}
                  <Link href="/privacy" className="underline text-sage-800">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all disabled:opacity-50 mt-2 flex items-center justify-center gap-2"
            >
              <span>{isLoading ? "Creating sanctuary..." : "Create Free Account"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-charcoal-muted">
          Already have an account?{" "}
          <Link href="/auth/login" className="font-bold text-sage-800 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
