import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Landscaping & Lawn Care Services — Macomb County, MI | Tri-Point",
  description:
    "Professional landscaping, lawn care, hardscaping & snow removal in Macomb County & Oakland County, MI — lawn maintenance, custom landscaping, mulch & stone, seasonal cleanup, hardscaping, snow removal & lawn renovations. Free estimates. Call (586) 327-8080.",
  keywords: [
    "landscaping services Macomb County MI",
    "lawn care services Macomb County",
    "snow removal Macomb County MI",
    "mulch installation Macomb County",
    "seasonal cleanup Macomb County",
    "lawn renovation Macomb County",
    "hardscaping Macomb County MI",
    "patio installation Macomb County",
    "landscaping services Rochester Hills MI",
    "lawn maintenance Oakland County MI",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/services" },
  openGraph: {
    title: "Landscaping & Lawn Care Services — Macomb County, MI | Tri-Point",
    description:
      "Professional lawn care, landscaping, hardscaping, mulch, snow removal & more throughout Macomb County & Oakland County, MI. Locally owned. Free estimates.",
    url: "https://www.tripointlandscaping.com/services",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [
      {
        url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg",
        width: 1200,
        height: 630,
        alt: "Tri-Point Landscaping Services — Macomb County MI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping & Lawn Care Services — Macomb County, MI | Tri-Point",
    description:
      "Professional lawn care, landscaping, mulch, snow removal & more throughout Macomb County & Oakland County, MI. Free estimates.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const services = [
  {
    name: "Lawn Maintenance",
    slug: "lawn-maintenance",
    desc: "Weekly mowing, edging, trimming, and blowing to keep your property looking sharp all season long.",
  },
  {
    name: "Landscaping & Design",
    slug: "landscaping",
    desc: "Custom landscape design and installation — beds, borders, plantings, and curb appeal transformations.",
  },
  {
    name: "Mulch & Stone",
    slug: "mulch-and-stone",
    desc: "Fresh mulch and decorative stone installation to protect your beds and elevate your property's appearance.",
  },
  {
    name: "Seasonal Cleanup",
    slug: "seasonal-cleanup",
    desc: "Spring and fall cleanups including leaf removal, bed cleanup, and property prep for every season.",
  },
  {
    name: "Snow Removal & Ice Management",
    slug: "snow-removal",
    desc: "Reliable snow plowing, salting, and ice management for residential and commercial properties.",
  },
  {
    name: "Lawn Renovations & Aeration",
    slug: "lawn-renovations",
    desc: "Aeration, overseeding, dethatching, and full lawn renovations to restore thin or damaged turf.",
  },
  {
    name: "Hardscaping",
    slug: "hardscaping",
    desc: "Patios, walkways, retaining walls, fire pits, and outdoor living spaces — designed and coordinated to complement your landscape.",
  },
];

const servicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tri-Point Landscaping Services — Macomb County, MI",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `https://www.tripointlandscaping.com/services/${s.slug}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.tripointlandscaping.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: "#111111" }} className="pt-28 pb-20 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Services</span>
            </nav>
            <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-4">What We Do</p>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6"
            >
              Landscaping &amp; Lawn Care<br className="hidden sm:block" /> Services in Macomb County, MI
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Serving Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, Rochester, and Rochester Hills.
            </p>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group bg-white p-8 border-t-2 hover:shadow-md transition-shadow"
                  style={{ borderColor: "#2C5F2E" }}
                >
                  <h2
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-800 transition-colors"
                  >
                    {s.name}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                  <span className="text-green-700 font-semibold text-sm">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-16 text-center">
          <div className="max-w-2xl mx-auto px-6 text-white">
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl font-bold mb-4"
            >
              Ready to Get Started?
            </h2>
            <p className="text-green-100 text-sm mb-8">
              Call or text us for a free estimate. We serve all of Macomb County and Oakland County, Michigan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15863278080"
                className="inline-flex items-center justify-center gap-2 bg-white font-bold px-8 py-4 text-sm hover:bg-green-50 transition-colors"
                style={{ color: "#2C5F2E" }}
              >
                Call (586) 327-8080
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Free Estimate
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
