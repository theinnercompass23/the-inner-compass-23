"use client";

import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import CommunityFeed from "@/components/CommunityFeed";

export default function DashboardCommunityPage() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <CommunityFeed />
      </div>
    </DashboardLayout>
  );
}
