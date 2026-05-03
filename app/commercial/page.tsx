import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Commercial Landscaping — Macomb County, MI | Tri-Point",
  description:
    "Commercial landscaping, lawn maintenance, snow removal & grounds management for HOAs, business parks, retail centers & property managers in Macomb County, MI. Fully insured. Free estimates. Call (586) 327-8080.",
  keywords: [
    "commercial landscaping Macomb County MI",
    "commercial lawn maintenance Macomb County",
    "HOA landscaping contractor Michigan",
    "office park landscaping Macomb County",
    "commercial snow removal Macomb County",
    "property management landscaping Michigan",
    "retail center landscaping near me",
    "commercial grounds maintenance Washington Township",
    "commercial landscaping company near me",
  ],
  alternates: {
    canonical: "https://www.tripointlandscaping.com/commercial",
  },
  openGraph: {
    title: "Commercial Landscaping Macomb County MI | Tri-Point Landscaping",
    description: "Professional commercial grounds maintenance for HOAs, offices, retail & more across Macomb County. Reliable, insured, locally owned.",
    url: "https://www.tripointlandscaping.com/commercial",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Commercial Landscaping Macomb County MI — Tri-Point Landscaping" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Landscaping Macomb County MI | Tri-Point Landscaping",
    description: "Professional commercial grounds maintenance for HOAs, offices, retail & more across Macomb County. Reliable, insured, locally owned.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Lawn Maintenance Contracts",
    desc: "Weekly or bi-weekly mowing, edging, trimming and blowing on a consistent schedule all season long. No surprises, no missed visits.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3" />
      </svg>
    ),
    title: "Snow & Ice Management",
    desc: "Seasonal contracts for plowing, salting and ice management. Your parking lots and walkways cleared before business hours — guaranteed.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Landscaping & Curb Appeal",
    desc: "Mulching, bed maintenance, shrub trimming, plantings and seasonal color that makes your property stand out and retain value.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: "Spring & Fall Cleanups",
    desc: "Full property cleanups at the start and end of every season — debris removal, bed cleanup, leaf removal and preparation for the next season.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Mulch & Stone Installation",
    desc: "Bulk mulch delivery and installation across large commercial properties. Keeps beds clean, reduces weeds and gives a polished professional look.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "HOA & Community Grounds",
    desc: "Reliable recurring service for homeowner associations and community common areas. We maintain shared spaces to the standard your residents expect.",
  },
];

const clientTypes = [
  "HOAs & Subdivisions",
  "Office Parks & Business Centers",
  "Retail & Strip Centers",
  "Industrial Properties",
  "Property Management Companies",
  "Churches & Schools",
];

const whyUs = [
  { stat: "Fully Insured", desc: "General liability + workers' comp. Your property and business are protected." },
  { stat: "Local & Reliable", desc: "Washington Township based. We show up — same crew, same schedule, every time." },
  { stat: "Seasonal Contracts", desc: "One contract covers your full year — lawn season and snow season. No re-bidding." },
  { stat: "4.9★ Google Rated", desc: "Every residential and commercial client gets the same obsessive attention to detail." },
];

export default function CommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Commercial Landscaping & Grounds Maintenance",
            provider: {
              "@type": "LocalBusiness",
              name: "Tri-Point Landscaping LLC",
              telephone: "+15863278080",
              url: "https://www.tripointlandscaping.com",
            },
            areaServed: "Macomb County, MI",
            description:
              "Commercial landscaping, lawn maintenance contracts, snow removal and grounds management for HOAs, business parks and property managers in Macomb County, Michigan.",
            url: "https://www.tripointlandscaping.com/commercial",
          }),
        }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center" style={{ backgroundColor: "#0a0a0a" }}>
        <Image
          src="/photos/1.png"
          alt="Commercial landscaping in Macomb County Michigan by Tri-Point Landscaping"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2 mb-8">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="w-px h-4 bg-white/20" />
              <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">Fully Insured · Locally Owned</span>
            </div>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Commercial Landscaping{" "}
              <span style={{ color: "#7ecb82" }}>Macomb County</span> Businesses Trust
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl">
              Seasonal contracts for HOAs, office parks, retail centers and property managers. One call — your grounds are handled spring through winter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center gap-3 text-white px-8 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                Get a Commercial Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+15863278080"
                className="inline-flex items-center gap-3 border border-white/40 text-white px-8 py-4 font-semibold tracking-wide hover:bg-white/10 transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (586) 327-8080
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client types */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0">We serve:</span>
            {clientTypes.map((type) => (
              <span key={type} className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#2C5F2E" }} />
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24" style={{ backgroundColor: "#f9f7f4" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#2C5F2E" }}>
              What We Handle
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              Full-Service Commercial Grounds Management
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              One contractor for your entire property — every season, every service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white p-8 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group">
                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 text-white transition-colors"
                  style={{ backgroundColor: "#2C5F2E" }}
                >
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7ecb82" }}>
              Why Tri-Point
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div key={item.stat} className="border border-white/10 p-8 text-center">
                <p
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#7ecb82" }}
                  className="text-xl font-bold mb-3"
                >
                  {item.stat}
                </p>
                <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#2C5F2E" }}>
            Free · No Obligation
          </p>
          <h2
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Ready to Talk About Your Property?
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            We offer free on-site estimates for all commercial properties in Macomb County. Tell us about your property and we&apos;ll put together a seasonal contract that fits your budget and schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              style={{ backgroundColor: "#2C5F2E" }}
              className="inline-flex items-center justify-center gap-3 text-white px-10 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Request a Commercial Estimate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+15863278080"
              className="inline-flex items-center justify-center gap-3 border-2 border-gray-900 text-gray-900 px-10 py-4 font-semibold tracking-wide hover:bg-gray-900 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (586) 327-8080
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
