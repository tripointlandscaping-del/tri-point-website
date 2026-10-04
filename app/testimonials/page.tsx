import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reviews } from "../lib/reviews";
import { googleReviews, aggregateRatingSchema, reviewCountLabel, GBP_URL, GBP_REVIEW_URL } from "../lib/business";

const reviewsDescription = `Read ${reviewCountLabel} for Tri-Point Landscaping (${googleReviews.rating}★ rating) from homeowners in Washington Township, Shelby Township & across Macomb County, MI.`;

export const metadata: Metadata = {
  title: "Customer Reviews — Macomb County, MI",
  description: reviewsDescription,
  alternates: { canonical: "https://www.tripointlandscaping.com/testimonials" },
  openGraph: {
    title: `Customer Reviews | Tri-Point Landscaping — ${googleReviews.rating}★ Rating`,
    description: reviewsDescription,
    url: "https://www.tripointlandscaping.com/testimonials",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/og-image.jpg", width: 1200, height: 630, alt: "Tri-Point Landscaping Reviews — Macomb County, MI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Customer Reviews | Tri-Point Landscaping — ${googleReviews.rating}★ Rating`,
    description: reviewsDescription,
    images: ["https://www.tripointlandscaping.com/og-image.jpg"],
  },
};


export default function TestimonialsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.tripointlandscaping.com/testimonials" },
    ],
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LandscapingBusiness"],
    name: "Tri-Point Landscaping LLC",
    url: "https://www.tripointlandscaping.com",
    telephone: "+15863278080",
    aggregateRating: aggregateRatingSchema,
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.stars,
        bestRating: "5",
      },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.text,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: "#111111" }} className="pt-28 pb-20 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Reviews</span>
            </nav>
            <div className="text-yellow-400 text-4xl mb-6">★★★★★</div>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-4"
            >
              {googleReviews.rating} Stars on Google
            </h1>
            <p className="text-white/50 text-lg mb-3">
              Rated by real homeowners across Macomb County & Oakland County, Michigan
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 mt-8">
              {["Washington Township", "Shelby Township", "Macomb Township", "Rochester Hills", "Romeo"].map((city) => (
                <span key={city} className="flex items-center gap-1.5">
                  <span style={{ backgroundColor: "#2C5F2E" }} className="w-1.5 h-1.5 inline-block" />
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-6 text-center text-white">
              <div>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl font-bold">{googleReviews.rating}★</p>
                <p className="text-green-200 text-xs uppercase tracking-widest mt-1">Google Rating</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl font-bold">{googleReviews.count}</p>
                <p className="text-green-200 text-xs uppercase tracking-widest mt-1">Google Reviews</p>
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl font-bold">8</p>
                <p className="text-green-200 text-xs uppercase tracking-widest mt-1">Communities Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS GRID */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">From Our Customers</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-3xl sm:text-4xl font-bold text-gray-900"
              >
                What Macomb County Homeowners Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-white p-8 border-t-2" style={{ borderColor: "#2C5F2E" }}>
                  <div className="text-yellow-400 text-sm mb-4">{"★".repeat(review.stars)}</div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-bold text-gray-900 text-sm">{review.author}</p>
                    <p className="text-green-700 text-xs mt-0.5">{review.service}</p>
                    <p className="text-gray-400 text-xs mt-1.5 flex items-center gap-1">
                      <span className="text-green-600">✓</span> Verified Google Review
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 text-sm mb-5">Read all our reviews directly on Google</p>
              <a
                href={GBP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center gap-2 text-white px-8 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                View All Google Reviews →
              </a>
            </div>
          </div>
        </section>

        {/* LEAVE A REVIEW CTA */}
        <section style={{ backgroundColor: "#111111" }} className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-6 text-white">
            <div className="text-yellow-400 text-3xl mb-6">★★★★★</div>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold mb-4">
              Happy with Our Work?
            </h2>
            <p className="text-white/50 text-sm mb-8">
              A quick Google review takes less than 60 seconds and helps other Macomb County homeowners find a crew they can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GBP_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Leave a Google Review →
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
