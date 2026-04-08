import type { MetadataRoute } from "next";

const BASE = "https://www.tripointlandscaping.com";

const serviceSlugs = [
  "lawn-maintenance",
  "landscaping",
  "mulch-and-stone",
  "seasonal-cleanup",
  "snow-removal",
  "lawn-renovations",
  "commercial",
];

const areaSlugs = [
  "washington-township",
  "shelby-township",
  "macomb-township",
  "romeo",
  "ray-township",
  "bruce-township",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: `${BASE}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE}/terms-and-conditions`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // 8 service pages
  const servicePages = serviceSlugs.map((slug) => ({
    url: `${BASE}/services/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // 6 area pages
  const areaPages = areaSlugs.map((slug) => ({
    url: `${BASE}/service-areas/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
    lastModified: now,
  }));

  // 48 service × area pages (e.g. /services/lawn-maintenance/washington-township)
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

  return [
    ...staticPages.map((p) => ({ ...p, lastModified: now })),
    ...servicePages,
    ...areaPages,
    ...serviceAreaPages,
  ];
}
