import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Spring Cleanup in Macomb County, MI | Tri-Point Landscaping",
  description:
    "Professional spring cleanup services in Macomb County & Oakland County, MI. Leaf removal, bed cleanup, edging & property prep. Booking now — spots fill fast. Free estimates. Call (586) 327-8080.",
  keywords: [
    "spring cleanup Macomb County MI",
    "spring yard cleanup Washington Township",
    "spring landscaping cleanup Michigan",
    "leaf removal spring Macomb County",
    "spring cleanup near me Michigan",
    "lawn cleanup Shelby Township spring",
    "spring cleanup Rochester Hills MI",
    "spring cleanup Oakland County MI",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/spring-cleanup" },
  openGraph: {
    title: "Spring Cleanup in Macomb County, MI | Tri-Point Landscaping",
    description: "Professional spring cleanup — leaf removal, bed cleanup, edging & property prep. Booking now for Macomb County. Free estimates.",
    url: "https://www.tripointlandscaping.com/spring-cleanup",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Spring Cleanup Services — Macomb County, MI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring Cleanup in Macomb County, MI | Tri-Point Landscaping",
    description: "Professional spring cleanup — leaf removal, bed cleanup, edging & property prep. Booking now for Macomb County. Free estimates.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I schedule spring cleanup in Michigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Michigan, spring cleanups are typically done from late March through May. The earlier you book, the better — slots fill quickly as everyone wants their property ready for the season at the same time. We recommend booking in January or February.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a spring cleanup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tri-Point's spring cleanup includes leaf and debris removal, bed cleanup and edging, perennial cutback, and general property prep to get your lawn and landscape ready for the growing season.",
      },
    },
    {
      "@type": "Question",
      name: "How much does spring cleanup cost in Macomb County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spring cleanup pricing depends on your property size, leaf load, and number of garden beds. Every estimate is free — call (586) 327-8080 and we'll give you a same-day quote.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spring Cleanup",
  description: "Professional spring cleanup services including leaf removal, bed cleanup, edging, and property prep throughout Macomb County and Oakland County, Michigan.",
  provider: {
    "@type": "LandscapingBusiness",
    name: "Tri-Point Landscaping LLC",
    telephone: "+15863278080",
    url: "https://www.tripointlandscaping.com",
    areaServed: ["Macomb County, Michigan", "Oakland County, Michigan"],
  },
  areaServed: ["Macomb County, Michigan", "Oakland County, Michigan"],
};

const included = [
  { title: "Leaf & Debris Removal", desc: "We remove all winter debris, leaves, sticks, and dead plant material from your lawn and beds — and haul everything away." },
  { title: "Bed Cleanup & Edging", desc: "Garden beds are cleaned out, re-edged, and prepped for the season. Sharp edges make a huge visual difference." },
  { title: "Perennial Cutback", desc: "Dead perennial stems from last season are cut back to make room for fresh spring growth." },
  { title: "Lawn Assessment", desc: "We assess your lawn's condition after winter and flag any issues — bare spots, damage from plowing, or areas needing attention." },
  { title: "Property Walk-Through", desc: "After the cleanup, we walk the property with you to make sure everything meets your expectations." },
  { title: "Full Haul-Away", desc: "All debris is loaded and hauled away. You don't have to deal with piles or bags — we take everything." },
];

const faqs = [
  { q: "When should I schedule spring cleanup in Michigan?", a: "In Michigan, spring cleanups run from late March through May. Book in January or February for the best availability — our schedule fills quickly as the season approaches." },
  { q: "How much does spring cleanup cost?", a: "Pricing depends on your property size, leaf load, and number of beds. Every estimate is completely free — call or text (586) 327-8080 and we'll give you a same-day quote with no obligation." },
  { q: "Do you haul away the debris?", a: "Yes. All leaves, debris, and plant material are loaded and hauled away by our crew. You don't have to deal with any of it." },
  { q: "Can I add mulch to my spring cleanup?", a: "Absolutely. Many customers combine spring cleanup with fresh mulch installation — it's the most efficient way to get your property looking sharp for the season. Ask about our cleanup + mulch packages." },
];

const areas = [
  { name: "Washington Township", slug: "washington-township" },
  { name: "Shelby Township", slug: "shelby-township" },
  { name: "Macomb Township", slug: "macomb-township" },
  { name: "Romeo", slug: "romeo" },
  { name: "Ray Township", slug: "ray-township" },
  { name: "Bruce Township", slug: "bruce-township" },
  { name: "Rochester", slug: "rochester" },
  { name: "Rochester Hills", slug: "rochester-hills" },
];

export default function SpringCleanupPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Spring Cleanup", item: "https://www.tripointlandscaping.com/spring-cleanup" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: "#111111" }} className="pt-28 pb-20 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Spring Cleanup</span>
            </nav>
            <div style={{ backgroundColor: "#2C5F2E" }} className="inline-block text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
              Now Booking for Spring
            </div>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6"
            >
              Spring Cleanup in<br />
              <span style={{ color: "#7ecb82" }}>Macomb & Oakland County</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Get your property ready for spring with a professional cleanup from Tri-Point Landscaping. Leaf removal, bed cleanup, edging, and full property prep — we handle everything and haul it all away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center justify-center gap-2 text-white px-10 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Book Your Spring Cleanup
              </Link>
              <a
                href="tel:+15863278080"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Call (586) 327-8080
              </a>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Full Service</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-3xl sm:text-4xl font-bold text-gray-900"
              >
                What&apos;s Included in Your Spring Cleanup
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {included.map((item) => (
                <div key={item.title} className="bg-white p-8 border-t-2" style={{ borderColor: "#2C5F2E" }}>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOK EARLY */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center text-white">
            <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-4">Don&apos;t Wait</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl sm:text-5xl font-bold mb-5">
              Book Early — Spots Fill Fast
            </h2>
            <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-4">
              Spring is our busiest season. Every homeowner in Macomb County wants their property cleaned up at the same time — which means our schedule fills weeks in advance. Customers who book in January and February get first pick of dates.
            </p>
            <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-10">
              By March, we&apos;re often booked 2–3 weeks out. Don&apos;t wait until the snow melts. Lock in your spring cleanup now and start the season on the right foot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 font-bold text-sm hover:bg-green-50 transition-colors"
              >
                Request Your Free Estimate
              </Link>
              <a
                href="tel:+15863278080"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Call (586) 327-8080
              </a>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Where We Work</p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Spring Cleanup Service Areas
            </h2>
            <p className="text-gray-500 text-sm mb-10">We provide spring cleanup services throughout Macomb County and Oakland County, Michigan:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/service-areas/${area.slug}`}
                  className="px-5 py-2.5 border text-sm font-semibold transition-colors border-[#2C5F2E] text-[#2C5F2E] hover:bg-[#2C5F2E] hover:text-white"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-gray-900">
                Spring Cleanup FAQs
              </h2>
            </div>
            <div className="border-t border-gray-200">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-200 py-6 bg-white px-6">
                  <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section style={{ backgroundColor: "#111111" }} className="py-20 text-center">
          <div className="max-w-2xl mx-auto px-6 text-white">
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold mb-4">
              Ready to Book Your Spring Cleanup?
            </h2>
            <p className="text-white/50 text-sm mb-8">Free estimates. Same-day response. Serving Macomb County and Oakland County.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15863278080"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Call (586) 327-8080
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Request Online →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
