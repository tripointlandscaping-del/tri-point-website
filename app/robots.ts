import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly allow major AI crawlers
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "GoogleExtended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "Applebot", allow: "/" },
    ],
    sitemap: "https://www.tripointlandscaping.com/sitemap.xml",
    host: "https://www.tripointlandscaping.com",
  };
}
