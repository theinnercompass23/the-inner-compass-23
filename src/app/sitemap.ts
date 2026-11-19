import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haven.care";

  const routes = [
    "",
    "/talk-to-someone",
    "/feeling-lonely",
    "/divorce-support",
    "/separation-support",
    "/breakup-support",
    "/relationship-support",
    "/marriage-problems",
    "/family-problems",
    "/emotional-support-india",
    "/someone-to-listen",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/privacy") || route.startsWith("/terms") ? 0.3 : 0.8,
  }));
}
