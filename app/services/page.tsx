import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Landscaping & Lawn Care Services — Macomb County | Tri-Point",
  description:
    "Professional landscaping, lawn care, hardscaping & snow removal in Macomb County, MI. Lawn maintenance, mulch, seasonal cleanup & more. Free estimates.",
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
    "landscaping",
    "lawn care",
    "lawn mowing",
    "grass cutting",
    "snow removal",
    "leaf removal",
    "aeration",
    "overseeding",
    "spring cleanup",
    "fall cleanup",
    "mulch installation",
    "hardscaping",
    "patio installation",
    "lawn service near me",
    "landscaping near me",
    "lawn mowing near me",
    "snow removal near me",
    "mulch near me",
    "all landscaping services Macomb County",
    "complete lawn care Macomb County MI",
    "full service landscaping Michigan",
    "landscaping and lawn care Macomb County",
    "lawn care prices Macomb County MI",
    "landscaping cost Michigan",
    "free estimate landscaping Macomb County",
    "lawn care company near me Michigan",
    "landscape contractor near me Macomb County",
    "best lawn care services Macomb County MI",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/services" },
  openGraph: {
    title: "Landscaping & Lawn Care Services — Macomb County | Tri-Point",
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
    title: "Landscaping & Lawn Care Services — Macomb County | Tri-Point",
    description:
      "Professional lawn care, landscaping, mulch, snow removal & more throughout Macomb County & Oakland County, MI. Free estimates.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const services = [
  {
    name: "Lawn Maintenance",
    slug: "lawn-maintenance",
    desc: "Weekly mowing, edging, trimming, and blowing to keep your property looking sharp all season long. Our crews arrive on a consistent schedule so you never have to chase us down. No contracts required — just reliable service every visit.",
  },
  {
    name: "Landscaping & Design",
    slug: "landscaping",
    desc: "Custom landscape design and installation — beds, borders, plantings, and curb appeal transformations that last. We work with your budget and your vision to create a look that fits your home. From a simple bed refresh to a full front-yard makeover, we handle every detail.",
  },
  {
    name: "Mulch & Stone",
    slug: "mulch-and-stone",
    desc: "Fresh mulch and decorative stone installation to protect your beds and elevate your property's appearance. We deliver, spread, and edge for a clean, finished look. Choose from a variety of mulch colors and stone types to match your home's style.",
  },
  {
    name: "Seasonal Cleanup",
    slug: "seasonal-cleanup",
    desc: "Spring and fall cleanups including leaf removal, bed cleanup, and full property prep for every season. We haul everything away so you don't have to deal with a thing. Your yard will be clean, tidy, and ready for whatever comes next.",
  },
  {
    name: "Snow Removal & Ice Management",
    slug: "snow-removal",
    desc: "Reliable snow plowing, salting, and ice management for residential and commercial properties. We monitor forecasts and show up before you have to ask — driveways and walkways cleared and safe. Seasonal contract and per-event pricing available.",
  },
  {
    name: "Lawn Renovations & Aeration",
    slug: "lawn-renovations",
    desc: "Aeration, overseeding, dethatching, and full lawn renovations to restore thin or damaged turf. Core aeration breaks up Michigan's compacted clay soil so water and nutrients finally reach the roots. Overseeding fills bare spots for a thick, healthy lawn the following season.",
  },
  {
    name: "Hardscaping",
    slug: "hardscaping",
    desc: "Patios, walkways, retaining walls, fire pits, and outdoor living spaces — designed and built to complement your landscape. Our hardscaping work adds permanent value and function to your outdoor space. From a simple brick walkway to a full patio build, we manage the entire project.",
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

        {/* TRUST STRIP */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-7">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-white text-center">
              <div className="flex items-center gap-2">
                <span className="text-yellow-300">★★★★★</span>
                <span className="font-semibold">4.9 Google Rating · 15 Reviews</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/25" />
              <span>✓ Free Estimates on All Services</span>
              <div className="hidden sm:block w-px h-4 bg-white/25" />
              <span>✓ Locally Owned &amp; Fully Insured</span>
              <div className="hidden sm:block w-px h-4 bg-white/25" />
              <span>✓ Serving Macomb &amp; Oakland County Since 2020</span>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Everything You Need</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-3xl sm:text-4xl font-bold text-gray-900"
              >
                Complete Lawn &amp; Landscaping Services
              </h2>
              <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">
                One company for every outdoor need — from weekly mowing to full hardscaping builds. All services backed by our 4.9★ Google rating.
              </p>
            </div>
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

            {/* Why Us comparison */}
            <div className="mt-20 border-t border-gray-200 pt-16">
              <div className="text-center mb-10">
                <h2
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-2xl sm:text-3xl font-bold text-gray-900"
                >
                  Why Homeowners Choose Tri-Point
                </h2>
                <p className="text-gray-500 text-sm mt-3">Over national franchises and larger crews</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { heading: "You Talk to the Owner", body: "Not a call center. When you call or text, you reach the crew that actually does the work — fast answers, no runaround." },
                  { heading: "Same Crew Every Time", body: "Consistent faces who know your property. No relearning your preferences. No surprises on service day." },
                  { heading: "We Haul Everything Away", body: "No piles left at the curb, no debris in your driveway. Every cleanup job leaves your property completely clear." },
                ].map((item) => (
                  <div key={item.heading} className="bg-white p-8 border-t-2" style={{ borderColor: "#2C5F2E" }}>
                    <h3
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                      className="font-bold text-gray-900 text-lg mb-3"
                    >
                      {item.heading}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
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
