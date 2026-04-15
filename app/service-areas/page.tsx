import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Lawn Care & Landscaping Service Areas — Macomb & Oakland County | Tri-Point",
  description:
    "Tri-Point Landscaping serves Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, Rochester, and Rochester Hills. Professional lawn care, landscaping & snow removal across Macomb County and Oakland County, MI.",
  keywords: [
    "landscaping near me Macomb County",
    "lawn care Washington Township",
    "landscaping Shelby Township MI",
    "snow removal Macomb County",
    "landscaping company near me Michigan",
    "landscaping Rochester Hills MI",
    "lawn care Rochester MI",
    "landscaping Oakland County MI",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/service-areas" },
  openGraph: {
    title: "Lawn Care & Landscaping Service Areas — Macomb & Oakland County | Tri-Point",
    description: "Serving Washington Township, Shelby Township, Macomb Township, Romeo, Rochester Hills, Rochester & more. Free estimates across Macomb County and Oakland County.",
    url: "https://www.tripointlandscaping.com/service-areas",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping Service Areas — Macomb County and Oakland County MI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawn Care & Landscaping Service Areas — Macomb & Oakland County | Tri-Point",
    description: "Serving Washington Township, Shelby Township, Macomb Township, Romeo, Rochester Hills, Rochester & more.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const areas = [
  {
    name: "Washington Township",
    slug: "washington-township",
    desc: "Our home base. We serve the entire township from 26 Mile to 32 Mile Road, Van Dyke to Romeo Plank.",
    zip: "48094",
  },
  {
    name: "Shelby Township",
    slug: "shelby-township",
    desc: "Full-service lawn care and landscaping along M-59, 23 Mile, and throughout Shelby's subdivisions.",
    zip: "48315",
  },
  {
    name: "Macomb Township",
    slug: "macomb-township",
    desc: "Residential and commercial services throughout Macomb Township along 25 Mile, 26 Mile, and Hall Road.",
    zip: "48042",
  },
  {
    name: "Romeo",
    slug: "romeo",
    desc: "Serving the Village of Romeo and surrounding rural and residential properties in northern Macomb County.",
    zip: "48065",
  },
  {
    name: "Ray Township",
    slug: "ray-township",
    desc: "Rural and residential lawn care, landscaping, and snow removal throughout Ray Township.",
    zip: "48096",
  },
  {
    name: "Bruce Township",
    slug: "bruce-township",
    desc: "Northern Macomb County properties — from acreage lots to newer subdivisions in Bruce Township.",
    zip: "48065",
  },
];

const areaListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Tri-Point Landscaping Service Areas",
  description: "Cities and townships served by Tri-Point Landscaping in Macomb County, Michigan",
  itemListElement: areas.map((area, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: area.name,
    url: `https://www.tripointlandscaping.com/service-areas/${area.slug}`,
  })),
};

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaListSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white py-20 px-6 text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm mb-3">Where We Work</p>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Landscaping Service Areas — Macomb County &amp; Oakland County, MI
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Locally owned and operated in Washington Township. We serve eight communities across Macomb County and Oakland County — from Romeo to Rochester Hills.
          </p>
        </section>

        {/* Areas Grid */}
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group border border-gray-200 rounded-xl p-8 hover:border-green-500 hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-bold mb-3 group-hover:text-green-700 transition-colors">
                  {area.name}, MI
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.desc}</p>
                <span className="text-green-700 font-semibold text-sm">View services in this area →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Not sure section */}
        <section className="bg-gray-50 py-12 px-6 text-center">
          <h2 className="text-2xl font-bold mb-3">Not Sure if We Cover Your Address?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Call or text us at <a href="tel:+15863278080" className="text-green-700 font-semibold">(586) 327-8080</a> and we'll let you know right away. If we can't serve you, we'll point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-800 text-white font-bold px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            Get a Free Estimate
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
