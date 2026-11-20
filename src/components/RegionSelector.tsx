"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { INTERNATIONAL_MARKETS } from "@/lib/constants";

export default function RegionSelector({
  variant = "navbar",
}: {
  variant?: "navbar" | "footer";
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Determine current active market based on path
  const currentMarket =
    INTERNATIONAL_MARKETS.find((m) => {
      if (m.code === "global") return pathname === "/";
      return pathname.startsWith(m.path);
    }) || INTERNATIONAL_MARKETS[0];

  if (variant === "footer") {
    return (
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-dark-charcoal/80">
          <Globe className="w-3.5 h-3.5 text-muted-green" />
          <span>International Service Hubs:</span>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          {INTERNATIONAL_MARKETS.map((m) => {
            const isActive =
              m.code === "global"
                ? pathname === "/"
                : pathname.startsWith(m.path);
            return (
              <Link
                key={m.code}
                href={m.path}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all ${
                  isActive
                    ? "bg-soft-sage/30 border-muted-green text-dark-charcoal font-semibold shadow-xs"
                    : "bg-white/70 border-soft-sage/40 text-dark-charcoal/70 hover:bg-white hover:text-dark-charcoal"
                }`}
              >
                <span>{m.flag}</span>
                <span>{m.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/70 hover:bg-white border border-soft-sage/40 text-dark-charcoal transition-all shadow-xs cursor-pointer"
      >
        <span>{currentMarket.flag}</span>
        <span className="hidden lg:inline">{currentMarket.name}</span>
        <ChevronDown
          className={`w-3 h-3 text-dark-charcoal/60 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white/95 backdrop-blur-md border border-soft-sage/40 shadow-lg p-1.5 z-50 text-xs">
          <div className="px-3 py-1.5 text-[10px] font-bold text-dark-charcoal/50 uppercase tracking-wider border-b border-soft-sage/20 mb-1">
            Select Your Region
          </div>
          <div className="space-y-0.5">
            {INTERNATIONAL_MARKETS.map((m) => {
              const isActive =
                m.code === "global"
                  ? pathname === "/"
                  : pathname.startsWith(m.path);
              return (
                <Link
                  key={m.code}
                  href={m.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl transition-colors ${
                    isActive
                      ? "bg-soft-sage/25 text-dark-charcoal font-semibold"
                      : "text-dark-charcoal/80 hover:bg-light-beige hover:text-dark-charcoal"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{m.flag}</span>
                    <span>{m.name}</span>
                  </div>
                  {isActive && (
                    <Check className="w-3.5 h-3.5 text-muted-green" />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="pt-1.5 mt-1 border-t border-soft-sage/20 px-2 text-[10px] text-dark-charcoal/60 text-center">
            Private &amp; Confidential Worldwide
          </div>
        </div>
      )}
    </div>
  );
}
