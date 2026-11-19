"use client";

import React from "react";
import TherapistDirectory from "@/components/TherapistDirectory";

export default function PublicTherapistsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <TherapistDirectory />
    </div>
  );
}
