"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Heart, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 flex items-center justify-center bg-warm-white">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
            <div className="w-10 h-10 rounded-2xl bg-sage-500 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-white" />
            </div>
            <span className="text-2xl font-serif font-bold text-charcoal">Haven</span>
          </Link>
          <h1 className="text-2xl font-serif font-bold text-charcoal mb-2">
            Reset Your Password
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-muted">
            Enter your email and we will send you a secure link to reset your credentials.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-warm-sand shadow-sm mb-6">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-sage-600" />
              </div>
              <h3 className="text-lg font-serif font-bold text-charcoal">
                Reset Link Sent
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                If an account exists for <strong>{email}</strong>, you will receive an email with instructions within the next few minutes.
              </p>
              <Link
                href="/auth/login"
                className="inline-block px-6 py-2.5 rounded-full text-xs font-semibold bg-sage-600 text-white hover:bg-sage-700 transition-colors"
              >
                Back to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="forgot-email"
                  className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-1"
                >
                  Your Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-charcoal-subtle absolute left-3.5 top-3.5" />
                  <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="w-full text-xs pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-sage-500 focus:ring-1 focus:ring-sage-500 outline-none text-charcoal"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-semibold bg-sage-600 hover:bg-sage-700 text-white shadow-sm transition-all"
              >
                Send Password Reset Link
              </button>
            </form>
          )}
        </div>

        <div className="text-center">
          <Link
            href="/auth/login"
            className="text-xs font-semibold text-charcoal-muted hover:text-charcoal inline-flex items-center gap-1.5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
