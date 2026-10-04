import type { NextConfig } from "next";
import { retiredPostRedirects } from "./app/blog/retired";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // /commercial is the canonical commercial landscaping page
      { source: "/services/commercial", destination: "/commercial", statusCode: 301 },
      // Retired blog posts (see app/blog/retired.ts)
      ...Object.entries(retiredPostRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        statusCode: 301,
      })),
    ];
  },
};

export default nextConfig;
