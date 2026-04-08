import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Landscaping FAQ | Tri-Point Landscaping — Macomb County, MI",
  description:
    "Answers to common questions about Tri-Point Landscaping's services, pricing, service areas, insurance, and more. Serving Washington Township, Shelby Township & all of Macomb County, MI.",
  keywords: ["landscaping FAQ Macomb County", "lawn care questions Michigan", "how much does lawn care cost", "landscaping company near me", "Tri-Point Landscaping FAQ"],
  alternates: {
    canonical: "https://www.tripointlandscaping.com/faq",
  },
  openGraph: {
    title: "Landscaping FAQ | Tri-Point Landscaping — Macomb County, MI",
    description: "Answers to common questions about Tri-Point Landscaping's services, pricing, service areas, and more. Serving all of Macomb County, MI.",
    url: "https://www.tripointlandscaping.com/faq",
    siteName: "Tri-Point Landscaping",
    type: "website",
  },
};

const faqs = [
  {
    q: "How much does lawn care cost in Macomb County?",
    a: "Lawn care pricing varies based on property size, frequency, and the specific services you need. Most residential weekly mowing packages in Macomb County start in the $40–$80 range per visit. The best way to get an accurate number is to request a free estimate — we'll assess your property and give you a transparent, no-obligation quote same day.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve all of northern Macomb County, Michigan — including Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, and Bruce Township. If you're unsure whether we cover your address, give us a call at (586) 327-8080 and we'll let you know right away.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes! Every estimate from Tri-Point Landscaping is completely free with no obligation whatsoever. Simply fill out our contact form or give us a call and we'll follow up same day — usually within the hour during business hours.",
  },
  {
    q: "How often will you mow my lawn?",
    a: "Our standard lawn maintenance program runs on a weekly schedule from April through October. Weekly mowing keeps your lawn healthy, prevents it from getting too long between cuts, and ensures consistent results. We can also discuss bi-weekly options depending on your lawn's growth rate and your preferences.",
  },
  {
    q: "Are you insured?",
    a: "Absolutely. Tri-Point Landscaping LLC is fully insured with general liability coverage. We're a licensed Michigan LLC, so you can have complete peace of mind that your property — and ours — is protected on every single visit.",
  },
  {
    q: "Do you offer snow removal?",
    a: "Yes — snow and ice management is one of our core services. We offer residential and commercial snow plowing, sidewalk clearing, salting, and de-icing throughout Macomb County. Seasonal contracts mean your property is covered automatically all winter without you having to call each time.",
  },
  {
    q: "What is included in a seasonal cleanup?",
    a: "Our seasonal cleanups cover everything needed to prepare your property for the next season. Spring cleanup includes leaf removal, debris clearing, bed edging, and perennial cutback. Fall cleanup focuses on leaf removal, late-season trimming, and closing out beds. We haul everything away so you don't have to worry about disposal.",
  },
  {
    q: "How do I get started?",
    a: "Getting started is easy. Just fill out our short estimate request form on the contact page, or give us a call or text at (586) 327-8080. We'll reach out same day to discuss your needs and schedule a free walkthrough of your property.",
  },
  {
    q: "Do you offer commercial services?",
    a: "Yes! We work with commercial properties, HOAs, office parks, retail centers, and apartment complexes across Macomb County. Commercial clients receive priority scheduling, consistent crew assignments, and all the documentation and certificates of insurance that property managers require.",
  },
  {
    q: "What makes Tri-Point different from other landscaping companies?",
    a: "We're a locally owned and operated Macomb County company — not a franchise, not a national chain. Every job gets the same attention to detail whether it's a small residential lawn or a large commercial property. We communicate proactively, show up when we say we will, and genuinely care about how your property looks. Our 5.0★ Google rating from real Macomb County homeowners speaks for itself.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.tripointlandscaping.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "FAQ",
      item: "https://www.tripointlandscaping.com/faq",
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section style={{ backgroundColor: "#111111" }} className="py-24 dot-grid">
          <div className="max-w-4xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-xs text-white/40 mb-8 uppercase tracking-widest">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">FAQ</span>
            </nav>

            <span className="block h-0.5 w-10 mx-auto mb-6" style={{ backgroundColor: "#2C5F2E" }} />
            <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-4">
              Got Questions?
            </p>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our services, pricing, and how we work — answered by the Tri-Point team.
            </p>
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-20">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-white p-8 sm:p-12 shadow-sm">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: "#111111" }} className="py-20 dot-grid">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="block h-0.5 w-10 mx-auto mb-6" style={{ backgroundColor: "#2C5F2E" }} />
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Still Have Questions?
            </h2>
            <p className="text-white/50 mb-8 leading-relaxed">
              Our team is available Monday–Saturday, 7 AM–9 PM. Call, text, or send us a message and we'll respond same day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#2C5F2E" }}
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+15863278080"
                className="inline-block px-8 py-4 text-sm font-bold border-2 transition-colors hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "#ffffff" }}
              >
                Call (586) 327-8080
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
