import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Landscaping FAQ | Tri-Point Landscaping — Macomb County, MI",
  description:
    "Answers to common questions about Tri-Point Landscaping's services, pricing, service areas, insurance, and more. Serving Washington Township, Shelby Township & all of Macomb County, MI.",
  keywords: [
    "landscaping FAQ Macomb County",
    "lawn care questions Michigan",
    "how much does lawn care cost Macomb County",
    "landscaping company near me Washington Township",
    "Tri-Point Landscaping FAQ",
    "spring cleanup FAQ Michigan",
    "snow removal FAQ Macomb County",
    "lawn maintenance questions Shelby Township",
    "best landscaping company Macomb County",
    "landscaping estimate Macomb County MI",
  ],
  alternates: {
    canonical: "https://www.tripointlandscaping.com/faq",
  },
  openGraph: {
    title: "Landscaping FAQ | Tri-Point Landscaping — Macomb County, MI",
    description: "Answers to common questions about Tri-Point Landscaping's services, pricing, service areas, and more. Serving all of Macomb County, MI.",
    url: "https://www.tripointlandscaping.com/faq",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping FAQ — Macomb County, MI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping FAQ | Tri-Point Landscaping — Macomb County, MI",
    description: "Answers to common questions about Tri-Point Landscaping's services, pricing, and service areas. Serving all of Macomb County, MI.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const faqs = [
  {
    q: "How much does lawn care cost in Macomb County?",
    a: "Lawn care pricing varies based on property size, frequency, and the specific services you need. The best way to get an accurate number is to request a free estimate — we'll assess your property and give you a transparent, no-obligation quote same day. Call (586) 327-8080 or fill out our contact form.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Macomb County and parts of Oakland County, Michigan — including Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, Rochester, and Rochester Hills. If you're unsure whether we cover your address, give us a call at (586) 327-8080 and we'll let you know right away.",
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
    a: "We're a locally owned and operated Macomb County company — not a franchise, not a national chain. Every job gets the same attention to detail whether it's a small residential lawn or a large commercial property. We communicate proactively, show up when we say we will, and genuinely care about how your property looks. Our 4.9★ Google rating from real Macomb County homeowners speaks for itself.",
  },
  {
    q: "What is the best time to aerate a lawn in Michigan?",
    a: "In Michigan, the best time to aerate cool-season lawns is late August through October — when temperatures drop and grass is actively growing roots. Spring aeration (April–May) is also effective but fall is preferred because weeds are less aggressive and the lawn has all winter to recover. Avoid aerating during summer heat stress.",
  },
  {
    q: "How much does landscaping cost in Washington Township?",
    a: "Landscaping project costs vary widely depending on scope, materials, and the size of your property. We provide free detailed estimates so you know exactly what you're getting before any work begins — call (586) 327-8080 or request a quote online.",
  },
  {
    q: "Do you offer lawn care contracts or one-time services?",
    a: "Both. We offer seasonal contracts for weekly lawn maintenance, which most of our customers prefer for consistent results and priority scheduling. We also take on one-time jobs like spring cleanups, mulch installations, and aeration. Call or text (586) 327-8080 to discuss what works best for your situation.",
  },
  {
    q: "What types of mulch do you offer?",
    a: "We offer a range of mulch options including hardwood, cedar, black dyed, brown dyed, and natural. We also install decorative stone, river rock, and lava rock as alternatives to mulch. During your free estimate, we'll walk you through the options and help you choose what works best for your landscape style and budget.",
  },
  {
    q: "Do you work on weekends?",
    a: "Yes — our crews work Monday through Saturday. We're available 24/7 by phone or text at (586) 327-8080 for estimates, scheduling, and questions. Emergency snow removal service is also available outside of normal hours during Michigan's winter months.",
  },
  {
    q: "What's included in weekly lawn maintenance?",
    a: "Our weekly lawn maintenance includes mowing at the correct height for your grass type, edging along all hard surfaces (driveway, sidewalk, beds), trimming around obstacles like fences and trees, and blowing clippings off all hard surfaces. We leave your property clean and sharp every single visit.",
  },
  {
    q: "How do I know if I need lawn renovation or just regular maintenance?",
    a: "If more than 50% of your lawn is bare, thin, or overrun with weeds, renovation is likely the better investment. Signs you need renovation include large dead patches, soil that's rock-hard even after rain, or a lawn that hasn't responded to fertilizer or overseeding. We'll assess your lawn during the free estimate and give you an honest recommendation.",
  },
  {
    q: "When should I book spring cleanup?",
    a: "As early as possible — ideally January or February. Our spring cleanup schedule fills fast because demand peaks in March and April when everyone wants their property ready at the same time. Customers who book early get priority scheduling and the best available slots. Call (586) 327-8080 to get on the schedule now.",
  },
  {
    q: "Do you offer mulch delivery only, without installation?",
    a: "Our mulch services include delivery and installation together. We don't do delivery-only, but our installation pricing is competitive and includes all the labor to properly prep and place the mulch in your beds. Most customers find the full-service option saves them significant time and effort.",
  },
  {
    q: "Can you help design my landscape from scratch?",
    a: "Yes. We work with homeowners from concept through completion. Whether you have a clear vision or no idea where to start, we'll walk your property, understand your goals and budget, and develop a plan that works. We handle everything — design, plant selection, installation, and cleanup.",
  },
  {
    q: "What's the difference between aeration and dethatching?",
    a: "Aeration uses hollow tines to pull plugs of soil from the ground, reducing compaction and improving water and nutrient penetration. Dethatching removes the layer of dead grass stems and roots (thatch) that accumulates between the soil surface and green grass. Many Michigan lawns benefit from both — aeration in fall, dethatching in early spring before new growth begins.",
  },
  {
    q: "Do you service rental properties or landlords with multiple properties?",
    a: "Yes. We work with landlords, property managers, and investors who own multiple rental properties in Macomb County. We can set up recurring maintenance on multiple addresses under one account and provide consolidated billing. Call (586) 327-8080 to discuss a multi-property arrangement.",
  },
  {
    q: "How far in advance should I book snow removal?",
    a: "We recommend booking snow removal contracts before November 1st. Once winter hits, our schedule is typically full. Customers who lock in seasonal contracts before the first snowfall get guaranteed service all winter without having to call each storm. Don't wait until December — spots go fast.",
  },
  {
    q: "What should I do to prepare my lawn for spring?",
    a: "The most important thing is to stay off a wet, soft lawn in early spring to avoid soil compaction. Once the ground firms up, schedule a spring cleanup to remove debris and dead material, apply pre-emergent weed control before soil temps hit 50°F, and consider aeration if you skipped it in fall. We can handle all of this — just call (586) 327-8080 for a free spring assessment.",
  },
  {
    q: "Do you offer senior discounts?",
    a: "We always aim to provide the most competitive pricing in Macomb County regardless of age, but we're happy to discuss your situation when you call. We treat every customer fairly and price based on the actual scope of work — not a flat rate that ignores your specific property.",
  },
  {
    q: "How quickly can you start after I call?",
    a: "For estimates, we typically respond same day — often within the hour. For actual service start dates, it depends on the time of year. During peak spring season, lead times can be 1–2 weeks. In the off-season, we can often start within days. Call (586) 327-8080 and we'll tell you exactly what our current availability looks like.",
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
              Landscaping FAQs — Macomb County &amp; Oakland County, MI
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
