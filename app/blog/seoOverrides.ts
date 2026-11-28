// Document <title> and meta description only. Blog post files keep their own
// title and description so the publisher and /blog/rss.xml stay unchanged.

export const blogSeoOverrides: Record<string, { title: string; description: string }> = {
  "how-to-water-lawn-michigan": {
    title: "How Often to Water a Lawn in Michigan | Tri-Point",
    description:
      "How often and how deep to water a Michigan lawn, including Macomb County clay soil and summer dry spells. Tri-Point Landscaping. Free estimate: (586) 327-8080.",
  },
  "best-fertilizer-schedule-macomb-county-lawns": {
    title: "Best Fertilizer Schedule, Macomb County | Tri-Point",
    description:
      "A season-by-season fertilizer schedule for Macomb County, MI lawns and local clay soil. Tri-Point Landscaping. Call (586) 327-8080 for a free estimate.",
  },
  "michigan-lawn-care-calendar": {
    title: "Michigan Lawn Calendar, Month by Month | Tri-Point",
    description:
      "Month-by-month Michigan lawn care timing for Macomb County homeowners, from spring cleanup to winter prep. Tri-Point Landscaping. Free estimate: (586) 327-8080.",
  },
};
