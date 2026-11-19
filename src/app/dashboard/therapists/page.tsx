"use client";

import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import TherapistDirectory from "@/components/TherapistDirectory";

export default function DashboardTherapistsPage() {
  return (
    <DashboardLayout>
      <TherapistDirectory />
    </DashboardLayout>
  );
}
