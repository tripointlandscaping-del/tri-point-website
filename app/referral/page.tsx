import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Refer a Neighbor — Get $50 Off | Tri-Point Landscaping",
  description:
    "Refer a neighbor to Tri-Point Landscaping and get $50 off your next service. Macomb County's locally owned landscaping company — share the word and save. Call (586) 327-8080.",
  keywords: [
    "landscaping referral program Macomb County",
    "refer a friend landscaping Michigan",
    "lawn care referral discount Washington Township",
    "Tri-Point Landscaping referral",
    "landscaping discount Macomb County MI",
  ],
  alternates: { canonical: "https://www.tripointlandscaping.com/referral" },
  openGraph: {
    title: "Refer a Neighbor — Get $50 Off | Tri-Point Landscaping",
    description: "Share Tri-Point Landscaping with a neighbor. When they sign up, you get $50 off your next service.",
    url: "https://www.tripointlandscaping.com/referral",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping Referral Program" }],
  },
};

const steps = [
  {
    num: "01",
    title: "Tell a Neighbor About Us",
    desc: "Share our number or website with a friend, neighbor, or family member in Macomb County who needs lawn care, landscaping, snow removal, or any of our services.",
  },
  {
    num: "02",
    title: "They Book a Service",
    desc: "Your referral contacts us, mentions your name, and books their first service. That's all they have to do.",
  },
  {
    num: "03",
    title: "You Get $50 Off",
    desc: "Once their first service is complete, we apply $50 off your next invoice — automatically. No forms, no chasing us down.",
  },
];

const faqs = [
  {
    q: "Is there a limit on how many referrals I can make?",
    a: "No limit. Refer as many neighbors as you'd like — you earn $50 for each one who becomes a customer.",
  },
  {
    q: "Does my referral get anything?",
    a: "Yes — your referral gets the same great service at our standard rates, and they'll know they came recommended by a trusted neighbor.",
  },
  {
    q: "When does the $50 credit apply?",
    a: "After your referral's first completed service. We'll apply it to your very next invoice automatically.",
  },
  {
    q: "Can I use multiple referral credits at once?",
    a: "Yes. If you refer multiple neighbors who all sign up, your credits stack and apply to future invoices.",
  },
  {
    q: "Does the $50 apply to any service?",
    a: "Yes. Lawn maintenance, landscaping, mulch, snow removal, cleanups — it applies to any Tri-Point service invoice.",
  },
];

export default function ReferralPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Referral Program", item: "https://www.tripointlandscaping.com/referral" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <main>

        {/* HERO */}
        <section style={{ backgroundColor: "#111111" }} className="pt-28 pb-20 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <nav className="flex items-center justify-center gap-2 text-white/40 text-sm mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Referral Program</span>
            </nav>
            <div style={{ backgroundColor: "#2C5F2E" }} className="inline-block text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
              Exclusive to Current Customers
            </div>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-6"
            >
              Refer a Neighbor.<br />
              <span style={{ color: "#7ecb82" }}>Get $50 Off.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Know someone in Macomb County who needs a reliable landscaping crew? Send them our way — when they sign up, you get $50 off your next service. No forms. No hassle.
            </p>
            <a
              href="tel:+15863278080"
              style={{ backgroundColor: "#2C5F2E" }}
              className="inline-flex items-center gap-2 text-white px-10 py-4 font-bold text-sm hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              Call to Refer: (586) 327-8080
            </a>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl sm:text-4xl font-bold text-gray-900">
                How It Works
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="bg-white p-8 relative">
                  <div
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#f0f0f0" }}
                    className="absolute top-4 right-6 text-7xl font-bold leading-none select-none"
                  >
                    {num}
                  </div>
                  <div style={{ backgroundColor: "#2C5F2E" }} className="w-10 h-10 flex items-center justify-center mb-5">
                    <span style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-white text-sm font-bold">{num}</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE OFFER */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-20">
          <div className="max-w-3xl mx-auto px-6 text-center text-white">
            <p className="text-green-200 text-sm font-semibold uppercase tracking-widest mb-4">The Reward</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl sm:text-5xl font-bold mb-5">
              $50 Off Your Next Invoice
            </h2>
            <p className="text-white/70 leading-relaxed max-w-md mx-auto mb-8">
              Applies to any Tri-Point service — lawn maintenance, landscaping, snow removal, mulch, seasonal cleanups, and more. No minimum spend required.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto mb-10 text-sm">
              {["No forms to fill out", "No minimum service required", "Unlimited referrals"].map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center">
                  <svg className="w-4 h-4 shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15863278080"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 font-bold text-sm hover:bg-green-50 transition-colors"
              >
                Call to Refer: (586) 327-8080
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Send a Referral Online →
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white">
          <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-gray-900">
                Referral Program FAQ
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
              Know Someone Who Needs a Great Crew?
            </h2>
            <p className="text-white/50 text-sm mb-8">Send them to Tri-Point Landscaping — Macomb County's locally owned, fully insured landscaping company. Free estimates, same-day response.</p>
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
                Get a Free Estimate →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
