import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Landscaping Services in Macomb County, MI | Tri-Point Landscaping",
  description:
    "Professional landscaping services in Macomb County, MI — lawn maintenance, custom landscaping, mulch & stone, seasonal cleanup, snow removal & ice management, and lawn renovations. Free estimates. Call (586) 327-8080.",
  alternates: { canonical: "https://www.tripointlandscaping.com/services" },
  openGraph: {
    title: "Landscaping Services in Macomb County, MI | Tri-Point Landscaping",
    description: "Professional lawn care, landscaping, mulch, snow removal & more throughout Macomb County, MI. Locally owned. Free estimates.",
    url: "https://www.tripointlandscaping.com/services",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping Services — Macomb County MI" }],
  },
};

const services = [
  {
    name: "Lawn Maintenance",
    slug: "lawn-maintenance",
    desc: "Weekly mowing, edging, trimming, and blowing to keep your property looking sharp all season.",
    icon: "🌿",
  },
  {
    name: "Landscaping & Design",
    slug: "landscaping",
    desc: "Custom landscape design and installation — beds, borders, plantings, and curb appeal transformations.",
    icon: "🌳",
  },
  {
    name: "Mulch & Stone",
    slug: "mulch-and-stone",
    desc: "Fresh mulch and decorative stone installation to protect your beds and elevate your property's appearance.",
    icon: "🪨",
  },
  {
    name: "Seasonal Cleanup",
    slug: "seasonal-cleanup",
    desc: "Spring and fall cleanups including leaf removal, bed cleanup, and property prep for every season.",
    icon: "🍂",
  },
  {
    name: "Snow Removal & Ice Management",
    slug: "snow-removal",
    desc: "Reliable snow plowing, salting, and ice management for residential and commercial properties.",
    icon: "❄️",
  },
  {
    name: "Lawn Renovations & Aeration",
    slug: "lawn-renovations",
    desc: "Aeration, overseeding, dethatching, and full lawn renovations to restore thin or damaged turf.",
    icon: "🌱",
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

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListSchema) }} />
      <Navbar />
      <main>
        <section className="bg-black text-white py-20 px-6 text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm mb-3">What We Do</p>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Professional Landscaping Services
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Serving Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, and Bruce Township.
          </p>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group border border-gray-200 rounded-xl p-8 hover:border-green-500 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-green-700 transition-colors">
                  {s.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                <span className="text-green-700 font-semibold text-sm">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-green-800 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Ready to Get Started?</h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Call or text us for a free estimate. We serve all of Macomb County, Michigan.
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
              Free Estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
