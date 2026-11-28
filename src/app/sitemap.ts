import { MetadataRoute } from "next";
import { COUNTRIES_DATA } from "@/data/countries";
import { CITIES_DATA } from "@/data/cities";
import { CORE_ISSUES } from "@/data/issues";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.theinnercompass23.com";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/counseling`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/online-counseling`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/us`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/uk`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ca`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/au`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ae`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/video-stories`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/articles/growth-pathways-and-experiences`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${baseUrl}/support-for-children`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/scout`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/children`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
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
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Country Routes
  const countryRoutes: MetadataRoute.Sitemap = COUNTRIES_DATA.map((country) => ({
    url: `${baseUrl}/countries/${country.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // City Routes
  const cityRoutes: MetadataRoute.Sitemap = CITIES_DATA.map((city) => ({
    url: `${baseUrl}/locations/${city.countrySlug}/${city.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // City + Issue Programmatic Routes
  const cityIssueRoutes: MetadataRoute.Sitemap = [];
  for (const city of CITIES_DATA) {
    for (const issue of CORE_ISSUES) {
      cityIssueRoutes.push({
        url: `${baseUrl}/locations/${city.countrySlug}/${city.slug}/${issue.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  return [...staticRoutes, ...topicRoutes, ...countryRoutes, ...cityRoutes, ...cityIssueRoutes];
}
