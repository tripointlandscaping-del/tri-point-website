import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Spring Cleanup in Macomb County, MI | Tri-Point Landscaping",
  description:
    "Professional spring cleanup services in Macomb County, MI. Leaf removal, bed cleanup, edging & property prep. Booking now — spots fill fast. Free estimates. Call (586) 327-8080.",
  keywords: [
    "spring cleanup Macomb County MI",
    "spring yard cleanup Washington Township",
    "spring landscaping cleanup Michigan",
    "leaf removal spring Macomb County",
    "spring cleanup near me Michigan",
    "lawn cleanup Shelby Township spring",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/spring-cleanup" },
  openGraph: {
    title: "Spring Cleanup in Macomb County, MI | Tri-Point Landscaping",
    description: "Professional spring cleanup — leaf removal, bed cleanup, edging & property prep. Booking now for Macomb County. Free estimates.",
    url: "https://www.tripointlandscaping.com/spring-cleanup",
    siteName: "Tri-Point Landscaping",
    type: "website",
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
        text: "Spring cleanup pricing in Macomb County typically ranges from $150–$600 depending on property size, leaf load, and number of beds. Every estimate is free — call (586) 327-8080.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Spring Cleanup",
  description: "Professional spring cleanup services including leaf removal, bed cleanup, edging, and property prep throughout Macomb County, Michigan.",
  provider: {
    "@type": "LandscapingBusiness",
    name: "Tri-Point Landscaping LLC",
    telephone: "+15863278080",
    url: "https://www.tripointlandscaping.com",
    areaServed: "Macomb County, Michigan",
  },
  areaServed: "Macomb County, Michigan",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: "150",
      maxPrice: "600",
      priceCurrency: "USD",
    },
  },
};

export default function SpringCleanupPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-black text-white py-24 px-6 text-center">
          <p className="text-green-400 uppercase tracking-widest text-sm mb-3">Now Booking</p>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Spring Cleanup in<br />Macomb County, MI
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Get your property ready for spring with a professional cleanup from Tri-Point Landscaping. Leaf removal, bed cleanup, edging, and full property prep — we handle everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-700 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition text-lg"
            >
              Book Your Spring Cleanup
            </Link>
            <a
              href="tel:+15863278080"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-black transition text-lg"
            >
              Call (586) 327-8080
            </a>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">What's Included in Your Spring Cleanup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Leaf & Debris Removal", desc: "We remove all winter debris, leaves, sticks, and dead plant material from your lawn and beds — and haul everything away." },
              { title: "Bed Cleanup & Edging", desc: "Garden beds are cleaned out, re-edged, and prepped for the season. Sharp edges make a huge visual difference." },
              { title: "Perennial Cutback", desc: "Dead perennial stems from last season are cut back to make room for fresh spring growth." },
              { title: "Lawn Assessment", desc: "We assess your lawn's condition after winter and flag any issues — bare spots, damage from plowing, or areas needing attention." },
              { title: "Property Walk-Through", desc: "After the cleanup, we walk the property with you to make sure everything meets your expectations." },
              { title: "Full Haul-Away", desc: "All debris is loaded and hauled away. You don't have to deal with piles or bags — we take everything." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why book early */}
        <section className="bg-green-50 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Book Early — Spots Fill Fast</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Spring is our busiest season. Every homeowner in Macomb County wants their property cleaned up at the same time — which means our schedule fills weeks in advance. Customers who book in January and February get first pick of dates. By March, we&apos;re often booked 2–3 weeks out.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Don&apos;t wait until the snow melts. Lock in your spring cleanup now and start the season on the right foot.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-800 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition"
            >
              Request Your Free Estimate
            </Link>
          </div>
        </section>

        {/* Service areas */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Spring Cleanup Service Areas</h2>
          <p className="text-gray-600 mb-8">We provide spring cleanup services throughout all of Macomb County, Michigan:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Washington Township", slug: "washington-township" },
              { name: "Shelby Township", slug: "shelby-township" },
              { name: "Macomb Township", slug: "macomb-township" },
              { name: "Romeo", slug: "romeo" },
              { name: "Ray Township", slug: "ray-township" },
              { name: "Bruce Township", slug: "bruce-township" },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="px-4 py-2 border border-green-700 text-green-700 rounded-full text-sm font-semibold hover:bg-green-700 hover:text-white transition"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-center mb-10">Spring Cleanup FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "When should I schedule spring cleanup in Michigan?", a: "In Michigan, spring cleanups run from late March through May. Book in January or February for the best availability — our schedule fills quickly as the season approaches." },
                { q: "How much does spring cleanup cost in Macomb County?", a: "Pricing ranges from $150–$600 depending on property size, leaf load, and number of beds. Every estimate is free — call or text (586) 327-8080." },
                { q: "Do you haul away the debris?", a: "Yes. All leaves, debris, and plant material are loaded and hauled away by our crew. You don't have to deal with any of it." },
                { q: "Can I add mulch to my spring cleanup?", a: "Absolutely. Many customers combine spring cleanup with fresh mulch installation — it's the most efficient way to get your property looking sharp for the season. Ask about our cleanup + mulch packages." },
              ].map((faq) => (
                <div key={faq.q} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-800 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Ready to Book Your Spring Cleanup?</h2>
          <p className="text-green-100 mb-8">Free estimates. Same-day response. Serving all of Macomb County.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15863278080" className="bg-white text-green-800 font-bold px-8 py-3 rounded-full hover:bg-green-50 transition">
              Call (586) 327-8080
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-green-800 transition">
              Request Online
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
