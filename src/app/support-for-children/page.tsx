import type { Metadata } from "next";
import SupportForChildrenClient from "@/components/SupportForChildrenClient";

export const metadata: Metadata = {
  title: "SCOUT — Helping Every Child Find Their Voice and Their Place | The Social Confidence Lab",
  description:
    "Supportive classes and workshops for your children that build confidence, social ease, and practical skills for everyday success. 6 Pillars, 14 Skill Domains by The Social Confidence Lab.",
  alternates: {
    canonical: "https://haven.care/support-for-children",
  },
  openGraph: {
    title: "SCOUT — Helping Every Child Find Their Voice and Their Place | The Social Confidence Lab",
    description:
      "Supportive classes and workshops for your children that build confidence, social ease, and practical skills for everyday success. 6 Pillars, 14 Skill Domains by The Social Confidence Lab.",
    url: "https://haven.care/support-for-children",
    type: "website",
  },
};

export default function SupportForChildrenPage() {
  return <SupportForChildrenClient />;
}
