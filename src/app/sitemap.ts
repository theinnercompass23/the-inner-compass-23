import { MetadataRoute } from "next";
import { COUNTRIES_DATA } from "@/data/countries";
import { CITIES_DATA } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://haven.care";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: "2026-02-20",
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: "2026-02-20",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: "2026-02-20",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/video-stories`,
      lastModified: "2026-02-20",
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/support-for-children`,
      lastModified: "2026-02-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-02-20",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-02-20",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: "2026-02-20",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: "2026-02-20",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Topical SEO Pages
  const topicSlugs = [
    "feeling-lonely",
    "heartbreak-support",
    "divorce-support",
    "separation-support",
    "marriage-problems",
    "relationship-support",
    "family-problems",
    "grief-support",
    "emotional-stress-support",
    "overthinking-support",
    "feeling-misunderstood",
    "someone-to-talk",
    "talk-to-someone",
    "someone-to-listen",
    "breakup-support",
    "emotional-support-india",
  ];

  const topicRoutes: MetadataRoute.Sitemap = topicSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: "2026-02-20",
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Country Routes
  const countryRoutes: MetadataRoute.Sitemap = COUNTRIES_DATA.map((country) => ({
    url: `${baseUrl}/countries/${country.slug}`,
    lastModified: "2026-02-20",
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // City Routes
  const cityRoutes: MetadataRoute.Sitemap = CITIES_DATA.map((city) => ({
    url: `${baseUrl}/locations/${city.countrySlug}/${city.slug}`,
    lastModified: "2026-02-20",
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...topicRoutes, ...countryRoutes, ...cityRoutes];
}
