import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haven.care";

  const routes = [
    "",
    "/feeling-lonely",
    "/heartbreak-support",
    "/divorce-support",
    "/separation-support",
    "/marriage-problems",
    "/relationship-support",
    "/family-problems",
    "/grief-support",
    "/emotional-stress-support",
    "/feeling-misunderstood",
    "/someone-to-talk",
    "/talk-to-someone",
    "/someone-to-listen",
    "/breakup-support",
    "/emotional-support-india",
    "/support-for-children",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-02-20",
    changeFrequency: route === "" ? "daily" : "weekly",
    priority:
      route === ""
        ? 1.0
        : route.startsWith("/privacy") || route.startsWith("/terms")
        ? 0.3
        : 0.8,
  }));
}
