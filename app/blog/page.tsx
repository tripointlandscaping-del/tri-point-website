import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { posts } from "./posts";

function getPublishedPosts() {
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return posts
    .filter((p) => new Date(p.date) <= today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export const metadata: Metadata = {
  title: "Lawn Care Tips & Advice | Tri-Point Landscaping Blog",
  description: "Expert lawn care tips, seasonal advice, and landscaping guides for Macomb County homeowners. From spring cleanup to snow removal — we cover it all.",
  keywords: ["lawn care tips Macomb County", "landscaping advice Michigan", "lawn maintenance guide", "seasonal lawn care Michigan", "Tri-Point Landscaping blog"],
  alternates: { canonical: "https://www.tripointlandscaping.com/blog" },
  openGraph: {
    title: "Lawn Care Tips & Advice | Tri-Point Landscaping Blog",
    description: "Expert lawn care tips, seasonal advice, and landscaping guides for Macomb County homeowners. From spring cleanup to snow removal — we cover it all.",
    url: "https://www.tripointlandscaping.com/blog",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping Blog — Macomb County Lawn Care Tips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawn Care Tips & Advice | Tri-Point Landscaping Blog",
    description: "Expert lawn care tips, seasonal advice, and landscaping guides for Macomb County homeowners. From spring cleanup to snow removal — we cover it all.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

export default function BlogPage() {
  const publishedPosts = getPublishedPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Tri-Point Landscaping Blog",
    description: "Expert lawn care tips, seasonal advice, and landscaping guides for Macomb County homeowners.",
    url: "https://www.tripointlandscaping.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Tri-Point Landscaping LLC",
      url: "https://www.tripointlandscaping.com",
      logo: "https://www.tripointlandscaping.com/logo-black.png",
    },
    blogPost: publishedPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: `https://www.tripointlandscaping.com/blog/${p.slug}`,
      datePublished: p.date,
      author: { "@type": "Organization", name: "Tri-Point Landscaping LLC" },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.tripointlandscaping.com/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      <section className="py-20 px-6" style={{ backgroundColor: "#f9f7f4" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#2C5F2E" }}>
              Lawn Care Tips & Advice
            </p>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              The Tri-Point Blog
            </h1>
            <p className="text-gray-500 max-w-xl leading-relaxed">
              Practical lawn care advice for Macomb County homeowners — from the team that maintains hundreds of properties every season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publishedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-100 hover:border-green-200 hover:shadow-md transition-all p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1"
                    style={{ backgroundColor: "#f0f7f0", color: "#2C5F2E" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2C5F2E] transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-6">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{post.date}</span>
                  <span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: "#2C5F2E" }}>
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
