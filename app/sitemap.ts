import type { MetadataRoute } from "next";
import { activePosts as posts } from "./blog/activePosts";
import { propertyTypeSlugs } from "./lib/snow";

const BASE = "https://www.tripointlandscaping.com";

const serviceSlugs = [
  "lawn-maintenance",
  "landscaping",
  "mulch-and-stone",
  "seasonal-cleanup",
  "snow-removal",
  "lawn-renovations",
  "commercial",
  "hardscaping",
];

const areaSlugs = [
  "washington-township",
  "shelby-township",
  "macomb-township",
  "romeo",
  "ray-township",
  "bruce-township",
  "rochester",
  "rochester-hills",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE}/faq`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/gallery`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/careers`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE}/commercial`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/review`, priority: 0.5, changeFrequency: "yearly" as const },
    { url: `${BASE}/spring-cleanup`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/fall-cleanup`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/service-areas`, priority: 0.85, changeFrequency: "monthly" as const },
    { url: `${BASE}/referral`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE}/testimonials`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms-and-conditions`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // Blog posts
  const blogPages = posts
    .filter((p) => new Date(p.date) <= new Date())
    .map((p) => ({
      url: `${BASE}/blog/${p.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
      lastModified: new Date(p.date),
    }));

  // Service hub pages (/services/commercial redirects to /commercial, which is listed above)
  const servicePages = serviceSlugs.filter((slug) => slug !== "commercial").map((slug) => ({
    url: `${BASE}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // City pages
  const areaPages = areaSlugs.map((slug) => ({
    url: `${BASE}/service-areas/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // service × area pages (e.g. /services/lawn-maintenance/washington-township)
  const serviceAreaPages: MetadataRoute.Sitemap = [];
  for (const serviceSlug of serviceSlugs) {
    for (const areaSlug of areaSlugs) {
      serviceAreaPages.push({
        url: `${BASE}/services/${serviceSlug}/${areaSlug}`,
        priority: 0.75,
        changeFrequency: "monthly" as const,
        lastModified: now,
      });
    }
  }

  // Commercial snow property type pages (e.g. /services/snow-removal/churches)
  const snowPropertyTypePages = propertyTypeSlugs.map((type) => ({
    url: `${BASE}/services/snow-removal/${type}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages,
    ...areaPages,
    ...serviceAreaPages,
    ...snowPropertyTypePages,
    ...blogPages,
  ];
}
