import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import PropertyManagerSection from "../../../components/PropertyManagerSection";
import { aggregateRatingSchema } from "../../../lib/business";
import { SNOW_QUOTE_HREF, SNOW_URGENCY, snowCities, propertyTypes, type PropertyType } from "../../../lib/snow";
import { activePosts as posts } from "../../../blog/activePosts";

const BASE = "https://www.tripointlandscaping.com";

export function propertyTypeMetadata(type: PropertyType): Metadata {
  const url = `${BASE}/services/snow-removal/${type.slug}`;
  return {
    title: { absolute: type.title },
    description: type.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: type.title,
      description: type.metaDescription,
      url,
      siteName: "Tri-Point Landscaping",
      type: "website",
      images: [{ url: `${BASE}/og-image.jpg`, width: 1200, height: 630, alt: type.h1 }],
    },
    twitter: { card: "summary_large_image", title: type.title, description: type.metaDescription, images: [`${BASE}/og-image.jpg`] },
  };
}

export default function PropertyTypePage({ type }: { type: PropertyType }) {
  const url = `${BASE}/services/snow-removal/${type.slug}`;
  const related = type.relatedPosts.map((s) => posts.find((p) => p.slug === s)).filter((p) => p !== undefined);
  const otherTypes = propertyTypes.filter((t) => t.slug !== type.slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
      { "@type": "ListItem", position: 3, name: "Commercial Snow Removal", item: `${BASE}/services/snow-removal` },
      { "@type": "ListItem", position: 4, name: type.name, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: type.h1,
    serviceType: "Commercial Snow Removal",
    description: type.metaDescription,
    url,
    audience: { "@type": "BusinessAudience", audienceType: type.name },
    provider: {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      "@id": `${BASE}/#business`,
      name: "Tri-Point Landscaping LLC",
      telephone: "+15863278080",
      url: BASE,
      aggregateRating: aggregateRatingSchema,
    },
    areaServed: snowCities.map((c) => ({ "@type": "City", name: `${c.name}, MI` })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: type.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>
        {/* ── HERO ── */}
        <section style={{ backgroundColor: "#0f2418" }} className="relative dot-grid">
          <div className="max-w-7xl mx-auto px-6 pt-8 pb-20">
            <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-white/50 text-xs mb-14">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <Link href="/services/snow-removal" className="hover:text-white transition-colors">Commercial Snow Removal</Link>
              <span>/</span>
              <span className="text-white">{type.name}</span>
            </nav>
            <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-4">{type.tagline}</p>
            <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6 max-w-4xl">
              {type.h1}
            </h1>
            <p className="text-lg text-white/65 max-w-2xl leading-relaxed mb-4">
              Parking lot plowing, sidewalk and entrance clearing, and salting under seasonal or per-push contracts in Macomb County and Oakland County, MI.
            </p>
            <p style={{ color: "#7ecb82" }} className="text-sm font-semibold mb-8">{SNOW_URGENCY}</p>
            <div className="flex flex-wrap gap-4">
              <Link href={SNOW_QUOTE_HREF} style={{ backgroundColor: "#2C5F2E" }} className="inline-flex items-center gap-2 text-white px-8 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity">
                Get a Snow Contract Quote
              </Link>
              <a href="tel:+15863278080" className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 font-semibold tracking-wide hover:bg-white/10 transition-colors">
                Call (586) 327-8080
              </a>
            </div>
          </div>
        </section>

        {/* ── INTRO + INCLUDED ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-14">
            <div className="lg:col-span-3">
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-gray-900 mb-6">
                Snow and Ice Management Built for {type.name}
              </h2>
              {type.intro.map((para, i) => (
                <p key={i} className={`text-gray-600 leading-relaxed${i > 0 ? " mt-4" : ""}`}>{para}</p>
              ))}
            </div>
            <div className="lg:col-span-2" style={{ backgroundColor: "#111111" }}>
              <div className="p-8">
                <h2 className="text-white font-bold text-lg mb-5">What&apos;s Included</h2>
                <ul className="space-y-3">
                  {type.included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/75 text-sm">
                      <span className="w-1.5 h-1.5 mt-2 shrink-0" style={{ backgroundColor: "#7ecb82" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONCERNS ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              {type.concernsHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {type.concerns.map((c) => (
                <div key={c.title} className="bg-white p-7 border-t-2" style={{ borderColor: "#2C5F2E" }}>
                  <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-gray-900 mb-8">
              {type.name}: Snow Removal FAQ
            </h2>
            <div className="border-t border-gray-100">
              {type.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-gray-100 py-5">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CITIES + OTHER TYPES + GUIDES ── */}
        <section style={{ backgroundColor: "#f9f7f4" }} className="py-20 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-4">Commercial Snow Removal by City</h2>
              <ul className="space-y-2">
                {snowCities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/services/snow-removal/${c.slug}`} className="text-green-800 text-sm hover:underline">
                      Commercial snow removal in {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-4">Other Property Types</h2>
              <ul className="space-y-2">
                {otherTypes.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/services/snow-removal/${t.slug}`} className="text-green-800 text-sm hover:underline">{t.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-4">Snow Contract Guides</h2>
              <ul className="space-y-2">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-green-800 text-sm hover:underline">{p.title}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/commercial" className="text-green-800 text-sm hover:underline">All commercial property services</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <PropertyManagerSection />

        {/* ── CTA ── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Plan This Winter Before the First Storm
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We&apos;ll walk your property, set trigger depths and clearing priorities with you, and give you a written quote for seasonal or per-push service.
            </p>
            <Link href={SNOW_QUOTE_HREF} style={{ backgroundColor: "#2C5F2E" }} className="inline-flex items-center gap-2 text-white px-10 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity">
              Get a Snow Contract Quote
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
