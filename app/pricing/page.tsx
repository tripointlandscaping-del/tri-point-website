import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Landscaping & Lawn Care Pricing | Tri-Point Landscaping — Macomb County, MI",
  description:
    "How much does lawn care cost in Macomb County? Get transparent pricing ranges for lawn maintenance, landscaping, mulch, snow removal & more. Free estimates from Tri-Point Landscaping.",
  keywords: [
    "how much does lawn care cost Macomb County",
    "landscaping cost Washington Township MI",
    "snow removal cost Macomb County",
    "mulch installation cost Michigan",
    "lawn maintenance pricing Macomb County",
    "landscaping prices near me Michigan",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/pricing" },
  openGraph: {
    title: "Landscaping & Lawn Care Pricing | Tri-Point Landscaping — Macomb County, MI",
    description: "Transparent pricing ranges for all landscaping and lawn care services in Macomb County, MI. Free estimates — call (586) 327-8080.",
    url: "https://www.tripointlandscaping.com/pricing",
    siteName: "Tri-Point Landscaping",
    type: "website",
  },
};

const services = [
  {
    name: "Weekly Lawn Maintenance",
    range: "$40 – $80 / visit",
    includes: [
      "Mowing at the correct height for your grass type",
      "Edging along driveway, sidewalk & beds",
      "Trimming around obstacles and fences",
      "Blowing clippings off all hard surfaces",
    ],
    note: "Priced based on property size. Most residential lots fall in the $45–$65 range.",
    href: "/services/lawn-maintenance",
  },
  {
    name: "Spring or Fall Cleanup",
    range: "$150 – $600",
    includes: [
      "Leaf removal and hauling",
      "Bed cleanup and debris removal",
      "Bed edging",
      "Perennial cutback (spring/fall dependent)",
    ],
    note: "Pricing depends on property size, leaf load, and number of beds.",
    href: "/services/seasonal-cleanup",
  },
  {
    name: "Mulch Installation",
    range: "$250 – $900+",
    includes: [
      "Delivery of premium mulch",
      "Bed prep and cleanup",
      "Mulch installation at proper depth (2–3 inches)",
      "Edge definition around beds",
    ],
    note: "Price varies by cubic yards needed and bed count. Decorative stone is priced separately.",
    href: "/services/mulch-and-stone",
  },
  {
    name: "Landscaping & Design",
    range: "$500 – $10,000+",
    includes: [
      "On-site consultation and design",
      "Plant and material selection",
      "Full installation of beds, plants, trees & shrubs",
      "Cleanup and final walk-through",
    ],
    note: "Highly variable based on scope. A simple bed installation starts around $500. Full front-yard transformations range from $3,000–$10,000+.",
    href: "/services/landscaping",
  },
  {
    name: "Lawn Aeration & Overseeding",
    range: "$120 – $350",
    includes: [
      "Core aeration of entire lawn",
      "Premium grass seed application (if overseeding)",
      "Starter fertilizer application",
      "Post-service instructions",
    ],
    note: "Best done in late summer/fall for Michigan cool-season grasses.",
    href: "/services/lawn-renovations",
  },
  {
    name: "Snow Removal (Seasonal Contract)",
    range: "$400 – $1,500 / season",
    includes: [
      "Per-push driveway plowing",
      "Sidewalk clearing",
      "Salting and de-icing",
      "Priority service during heavy storms",
    ],
    note: "Seasonal contracts guarantee service all winter. Per-push pricing also available.",
    href: "/services/snow-removal",
  },
  {
    name: "Commercial Lawn Maintenance",
    range: "Custom Quote",
    includes: [
      "Weekly mowing and edging",
      "Seasonal cleanups",
      "Mulch and bed maintenance",
      "Snow removal and de-icing",
    ],
    note: "All commercial pricing is custom based on property size, services needed, and visit frequency. Contact us for a detailed proposal.",
    href: "/commercial",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does lawn care cost in Macomb County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Weekly lawn maintenance in Macomb County typically costs $40–$80 per visit for residential properties, depending on size. Most standard lots run $45–$65 per week.",
      },
    },
    {
      "@type": "Question",
      name: "How much does landscaping cost in Washington Township, MI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landscaping costs in Washington Township vary by scope. Simple mulch installations start around $250–$500. Full landscape design and installation projects range from $1,500 to $10,000+ depending on materials and scale.",
      },
    },
    {
      "@type": "Question",
      name: "How much does snow removal cost in Macomb County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seasonal snow removal contracts in Macomb County typically range from $400–$1,500 depending on driveway size and services included. Tri-Point Landscaping offers both seasonal contracts and per-push pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free estimates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every estimate from Tri-Point Landscaping is completely free with no obligation. Call or text (586) 327-8080 or submit a request online and we'll respond same day.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white py-20 px-6 text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm mb-3">Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            How Much Does Lawn Care Cost in Macomb County?
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real pricing ranges for every service we offer — no surprises. Every job gets a free, no-obligation estimate before any work begins.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.href} className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-gray-900">{s.name}</h2>
                  <span className="text-green-700 font-bold text-lg whitespace-nowrap ml-4">{s.range}</span>
                </div>
                <ul className="space-y-1 mb-4">
                  {s.includes.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs italic mb-4">{s.note}</p>
                <Link href={s.href} className="text-green-700 font-semibold text-sm hover:underline">
                  Learn more about this service →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* What affects price */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair mb-6 text-center">What Affects the Price?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Property Size", desc: "Larger lots take more time and materials. A 1/4 acre lawn costs significantly less than a 1-acre lot." },
                { title: "Frequency", desc: "Seasonal contracts almost always cost less per visit than one-time or on-call service." },
                { title: "Current Condition", desc: "A neglected property costs more to restore than one on a regular maintenance schedule." },
                { title: "Materials", desc: "Premium mulch, stone, plants, and seed vary in cost. We'll walk you through options at every price point." },
              ].map((item) => (
                <div key={item.title} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-800 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Get Your Free Estimate Today</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Every property is different. The only way to get an accurate price is a free walkthrough — we'll give you a detailed quote with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15863278080"
              className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition"
            >
              Call (586) 327-8080
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-green-800 transition"
            >
              Request Estimate Online
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
