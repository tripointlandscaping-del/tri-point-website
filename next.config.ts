import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // /commercial is the canonical commercial landscaping page
      { source: "/services/commercial", destination: "/commercial", permanent: true },
    ];
  },
};

export default nextConfig;
