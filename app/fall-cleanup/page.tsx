import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fall Cleanup in Macomb County, MI | Tri-Point Landscaping",
  description:
    "Professional fall cleanup services in Macomb County, MI. Leaf removal, bed cleanup, gutter clearing & winter prep. Booking now — spots fill fast. Free estimates. Call (586) 327-8080.",
  keywords: [
    "fall cleanup Macomb County MI",
    "fall yard cleanup Washington Township",
    "leaf removal fall Macomb County",
    "fall landscaping cleanup Michigan",
    "fall cleanup near me Michigan",
    "lawn cleanup Shelby Township fall",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/fall-cleanup" },
  openGraph: {
    title: "Fall Cleanup in Macomb County, MI | Tri-Point Landscaping",
    description: "Professional fall cleanup — leaf removal, bed cleanup, gutter clearing & winter prep. Booking now for Macomb County. Free estimates.",
    url: "https://www.tripointlandscaping.com/fall-cleanup",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Fall Cleanup Services — Macomb County, MI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fall Cleanup in Macomb County, MI | Tri-Point Landscaping",
    description: "Professional fall cleanup — leaf removal, bed cleanup, gutter clearing & winter prep. Booking now for Macomb County. Free estimates.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I schedule fall cleanup in Michigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Michigan, fall cleanups are typically done from October through November, once most leaves have dropped. Booking in September or early October gives you the best pick of dates — our schedule fills quickly as everyone wants their property cleaned before the first frost.",
      },
    },
    {
      "@type": "Question",
      name: "What is included in a fall cleanup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tri-Point's fall cleanup includes leaf and debris removal, bed cleanup and cutback, perennial trimming, and full property prep to winterize your lawn and landscape ahead of Michigan's harsh winters.",
      },
    },
    {
      "@type": "Question",
      name: "How much does fall cleanup cost in Macomb County?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fall cleanup pricing in Macomb County typically ranges from $150–$600 depending on property size, leaf load, and number of beds. Every estimate is free — call (586) 327-8080.",
      },
    },
    {
      "@type": "Question",
      name: "Why is fall cleanup important in Michigan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Leaving leaves on your lawn through winter smothers the grass, creates mold, and invites pests and disease. A thorough fall cleanup protects your lawn investment and means less work — and cost — come spring.",
      },
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fall Cleanup",
  description: "Professional fall cleanup services including leaf removal, bed cleanup, perennial cutback, and winter property prep throughout Macomb County, Michigan.",
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

export default function FallCleanupPage() {
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
            Fall Cleanup in<br />Macomb County, MI
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-8">
            Protect your lawn before Michigan winter hits. Tri-Point Landscaping handles full leaf removal, bed cleanup, perennial cutback, and complete property winterization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-700 text-white font-bold px-8 py-4 rounded-full hover:bg-green-600 transition text-lg"
            >
              Book Your Fall Cleanup
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
          <h2 className="text-3xl font-bold font-playfair text-center mb-12">What&apos;s Included in Your Fall Cleanup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Full Leaf Removal", desc: "We remove every leaf from your lawn, beds, and property — then haul it all away. Leaves left on Michigan lawns over winter cause mold, suffocation, and disease." },
              { title: "Bed Cleanup & Cutback", desc: "Garden beds are cleaned out, dead annuals removed, and perennials cut back to ground level so they come back healthy in spring." },
              { title: "Perennial Trimming", desc: "Ornamental grasses, perennials, and shrubs are trimmed to their appropriate winter height before the first hard frost." },
              { title: "Lawn Assessment", desc: "We walk your property and flag any winter prep issues — bare spots, drainage concerns, or areas that need attention before snow flies." },
              { title: "Property Walk-Through", desc: "After the cleanup, we walk the property with you to make sure everything meets your expectations and is fully ready for winter." },
              { title: "Full Haul-Away", desc: "All debris, leaves, and plant material are loaded and hauled away. You don't deal with bags or piles — we take everything." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why it matters */}
        <section className="bg-green-50 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Why Fall Cleanup Matters in Michigan</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Michigan winters are brutal. Leaves left on your lawn compact under snow and create a thick, wet mat that smothers grass, traps moisture, and becomes a breeding ground for fungal disease and grubs. A thorough fall cleanup is one of the best investments you can make in your lawn — it directly affects how well your grass survives winter and bounces back in spring.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Homeowners who skip fall cleanup typically spend significantly more on spring repairs — overseeding bare patches, treating disease, and dealing with thatch buildup. Don&apos;t pay twice. Get it done right in the fall.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-800 text-white font-bold px-8 py-4 rounded-full hover:bg-green-700 transition"
            >
              Request Your Free Estimate
            </Link>
          </div>
        </section>

        {/* Book early */}
        <section className="py-16 px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Book Early — October Fills Fast</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every homeowner in Macomb County wants their property cleaned up before the snow hits — which means our fall schedule fills weeks in advance. Customers who book in September get first pick of dates. By mid-October, we&apos;re often booked 2–3 weeks out.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Don&apos;t wait until the leaves are knee-deep. Lock in your fall cleanup now and protect your lawn before Michigan winter hits hard.
          </p>
        </section>

        {/* Service areas */}
        <section className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Fall Cleanup Service Areas</h2>
          <p className="text-gray-600 mb-8">We provide fall cleanup services throughout all of Macomb County, Michigan:</p>
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
        <section className="bg-white py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-center mb-10">Fall Cleanup FAQs</h2>
            <div className="space-y-6">
              {[
                { q: "When should I schedule fall cleanup in Michigan?", a: "In Michigan, fall cleanups run from October through November, once most leaves have dropped. Book in September or early October for the best availability — our schedule fills quickly heading into late fall." },
                { q: "How much does fall cleanup cost in Macomb County?", a: "Pricing ranges from $150–$600 depending on property size, leaf load, and number of beds. Every estimate is free — call or text (586) 327-8080." },
                { q: "Do you haul away the leaves?", a: "Yes. All leaves, debris, and plant material are loaded and hauled away by our crew. You don't have to deal with any of it." },
                { q: "Why is fall cleanup so important in Michigan?", a: "Leaves left on your lawn over winter create a thick mat that smothers grass, traps moisture, and breeds disease and pests. Skipping fall cleanup typically means spending more on lawn repairs in spring." },
                { q: "Can I add mulch or aeration to my fall cleanup?", a: "Absolutely. Many customers combine fall cleanup with a final aeration and overseeding — fall is actually the best time to overseed cool-season grasses in Michigan. Ask us about package options." },
              ].map((faq) => (
                <div key={faq.q} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-800 text-white py-16 px-6 text-center">
          <h2 className="text-3xl font-bold font-playfair mb-4">Ready to Book Your Fall Cleanup?</h2>
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
