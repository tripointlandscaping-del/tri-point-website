import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Fall Cleanup in Macomb County, MI | Tri-Point Landscaping",
  description:
    "Professional fall cleanup services in Macomb County & Oakland County, MI. Leaf removal, bed cleanup, gutter clearing & winter prep. Booking now — spots fill fast. Free estimates. Call (586) 327-8080.",
  keywords: [
    "fall cleanup Macomb County MI",
    "fall yard cleanup Washington Township",
    "leaf removal fall Macomb County",
    "fall landscaping cleanup Michigan",
    "fall cleanup near me Michigan",
    "lawn cleanup Shelby Township fall",
    "fall cleanup Rochester Hills MI",
    "fall cleanup Oakland County MI",
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
        text: "Fall cleanup pricing depends on your property size, leaf load, and number of beds. Every estimate is completely free — call (586) 327-8080 and we'll give you a same-day quote.",
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
  description: "Professional fall cleanup services including leaf removal, bed cleanup, perennial cutback, and winter property prep throughout Macomb County and Oakland County, Michigan.",
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
  { title: "Full Leaf Removal", desc: "We remove every leaf from your lawn, beds, and property — then haul it all away. Leaves left on Michigan lawns over winter cause mold, suffocation, and disease." },
  { title: "Bed Cleanup & Cutback", desc: "Garden beds are cleaned out, dead annuals removed, and perennials cut back to ground level so they come back healthy in spring." },
  { title: "Perennial Trimming", desc: "Ornamental grasses, perennials, and shrubs are trimmed to their appropriate winter height before the first hard frost." },
  { title: "Lawn Assessment", desc: "We walk your property and flag any winter prep issues — bare spots, drainage concerns, or areas that need attention before snow flies." },
  { title: "Property Walk-Through", desc: "After the cleanup, we walk the property with you to make sure everything meets your expectations and is fully ready for winter." },
  { title: "Full Haul-Away", desc: "All debris, leaves, and plant material are loaded and hauled away. You don't deal with bags or piles — we take everything." },
];

const faqs = [
  { q: "When should I schedule fall cleanup in Michigan?", a: "In Michigan, fall cleanups run from October through November, once most leaves have dropped. Book in September or early October for the best availability — our schedule fills quickly heading into late fall." },
  { q: "How much does fall cleanup cost?", a: "Pricing depends on your property size, leaf load, and number of beds. Every estimate is completely free — call or text (586) 327-8080 and we'll give you a same-day quote with no obligation." },
  { q: "Do you haul away the leaves?", a: "Yes. All leaves, debris, and plant material are loaded and hauled away by our crew. You don't have to deal with any of it." },
  { q: "Why is fall cleanup so important in Michigan?", a: "Leaves left on your lawn over winter create a thick mat that smothers grass, traps moisture, and breeds disease and pests. Skipping fall cleanup typically means spending more on lawn repairs in spring." },
  { q: "Can I add mulch or aeration to my fall cleanup?", a: "Absolutely. Many customers combine fall cleanup with a final aeration and overseeding — fall is actually the best time to overseed cool-season grasses in Michigan. Ask us about package options." },
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

export default function FallCleanupPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Fall Cleanup", item: "https://www.tripointlandscaping.com/fall-cleanup" },
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
              <span className="text-white/70">Fall Cleanup</span>
            </nav>
            <div style={{ backgroundColor: "#2C5F2E" }} className="inline-block text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
              Now Booking for Fall
            </div>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6"
            >
              Fall Cleanup in<br />
              <span style={{ color: "#7ecb82" }}>Macomb & Oakland County</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Protect your lawn before Michigan winter hits. Tri-Point Landscaping handles full leaf removal, bed cleanup, perennial cutback, and complete property winterization — then hauls everything away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center justify-center gap-2 text-white px-10 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Book Your Fall Cleanup
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
                What&apos;s Included in Your Fall Cleanup
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

        {/* WHY IT MATTERS */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center text-white">
            <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-4">Protect Your Investment</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl sm:text-5xl font-bold mb-5">
              Why Fall Cleanup Matters in Michigan
            </h2>
            <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-4">
              Michigan winters are brutal. Leaves left on your lawn compact under snow and create a thick, wet mat that smothers grass, traps moisture, and becomes a breeding ground for fungal disease and grubs.
            </p>
            <p className="text-white/70 leading-relaxed max-w-lg mx-auto mb-10">
              Homeowners who skip fall cleanup typically spend significantly more on spring repairs — overseeding bare patches, treating disease, and dealing with thatch buildup. Don&apos;t pay twice. Get it done right in the fall.
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

        {/* BOOK EARLY */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Availability</p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl font-bold text-gray-900 mb-5"
            >
              Book Early — October Fills Fast
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Every homeowner in Macomb County wants their property cleaned up before the snow hits — which means our fall schedule fills weeks in advance. Customers who book in September get first pick of dates. By mid-October, we&apos;re often booked 2–3 weeks out.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Don&apos;t wait until the leaves are knee-deep. Lock in your fall cleanup now and protect your lawn before Michigan winter hits hard.
            </p>
            <Link
              href="/contact"
              style={{ backgroundColor: "#2C5F2E" }}
              className="inline-flex items-center justify-center text-white px-8 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Get a Free Estimate
            </Link>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Where We Work</p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Fall Cleanup Service Areas
            </h2>
            <p className="text-gray-500 text-sm mb-10">We provide fall cleanup services throughout Macomb County and Oakland County, Michigan:</p>
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
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-gray-900">
                Fall Cleanup FAQs
              </h2>
            </div>
            <div className="border-t border-gray-100">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-gray-100 py-6">
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
              Ready to Book Your Fall Cleanup?
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
