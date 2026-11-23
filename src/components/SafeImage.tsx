"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { Heart } from "lucide-react";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  fallbackText?: string;
}

export default function SafeImage({
  src,
  alt,
  fallbackSrc,
  fallbackText = "The Inner Compass 23 &bull; Human Emotional Support",
  className = "",
  fill,
  priority,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(!priority);

  if (hasError) {
    if (fallbackSrc) {
      return (
        <Image
          src={fallbackSrc}
          alt={alt || "The Inner Compass 23 Support"}
          fill={fill}
          className={className}
          priority={priority}
          {...props}
        />
      );
    }

    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-soft-sage/30 via-light-beige/50 to-soft-sage/20 border border-soft-sage/30 text-dark-charcoal/70 p-6 text-center select-none ${
          fill ? "absolute inset-0 w-full h-full" : "w-full min-h-[220px]"
        } ${className}`}
      >
        <div className="w-12 h-12 rounded-full bg-white/70 border border-soft-sage/40 flex items-center justify-center text-muted-green shadow-xs mb-2">
          <Heart className="w-6 h-6 fill-muted-green/20 text-muted-green" />
        </div>
        <p className="text-xs font-serif font-semibold text-dark-charcoal">
          {alt || "Safe, non-judgmental human support"}
        </p>
        <span
          className="text-[10px] text-dark-charcoal/50 mt-1 uppercase tracking-wider"
          dangerouslySetInnerHTML={{ __html: fallbackText }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${
        fill ? "absolute inset-0 w-full h-full" : "inline-block"
      }`}
    >
      {isLoading && (
        <div
          className={`absolute inset-0 bg-soft-sage/20 backdrop-blur-xs animate-pulse z-10 ${
            fill ? "w-full h-full" : ""
          }`}
        />
      )}
      <Image
        src={src}
        alt={alt || "The Inner Compass 23 Emotional Support"}
        fill={fill}
        priority={priority}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        {...props}
      />
    </div>
  );
}
