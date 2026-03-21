import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobberForm from "../components/JobberForm";

export const metadata: Metadata = {
  title: "Free Estimate | Contact Tri-Point Landscaping — Macomb County, MI",
  description:
    "Request a free landscaping, lawn care, snow removal, or lawn renovation estimate from Tri-Point Landscaping. Serving all of Macomb County, MI — Washington Township, Shelby Township & more. Fast response. Call (586) 327-8080.",
  alternates: { canonical: "https://www.tripointlandscaping.com/contact" },
  openGraph: {
    title: "Free Estimate | Contact Tri-Point Landscaping",
    description:
      "Get a free, no-obligation estimate from Macomb County's most trusted landscaping company. We respond same day.",
    url: "https://www.tripointlandscaping.com/contact",
    siteName: "Tri-Point Landscaping",
    type: "website",
  },
};

const trustPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Response",
    desc: "We reply to every estimate request the same day — usually within a few hours.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Fully Insured",
    desc: "Tri-Point Landscaping LLC carries full general liability. Your property is protected.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "No Obligation",
    desc: "Estimates are 100% free. You review the quote and decide — zero pressure.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Locally Owned",
    desc: "Serving all of Macomb County — not a franchise, not a call center. Real people, real accountability.",
  },
];

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.tripointlandscaping.com/contact" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>

        {/* ── DARK HERO ── */}
        <section style={{ backgroundColor: "#111111" }} className="pt-28 pb-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-10">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">Free Estimate</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-4">Free · No Obligation · Same-Day Response</p>
                <h1
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6"
                >
                  Get Your<br />
                  <span style={{ color: "#7ecb82" }}>Free Estimate</span>
                </h1>
                <p className="text-white/65 text-lg leading-relaxed max-w-lg mb-6">
                  Fill out the form and a Tri-Point team member responds same day — usually within the hour — with a clear, honest quote. No fluff. No pressure. Just real answers.
                </p>
                <div style={{ borderColor: "rgba(44,95,46,0.5)", backgroundColor: "rgba(44,95,46,0.12)" }} className="border px-5 py-4 flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#7ecb82" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-sm">Limited spots available this season</p>
                    <p className="text-white/45 text-xs mt-0.5">We keep our route intentionally small so every client gets our best. Once we&apos;re full, we&apos;re full — book early.</p>
                  </div>
                </div>
              </div>

              {/* Quick-contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="tel:+15863278080"
                  style={{ borderColor: "#333" }}
                  className="flex items-center gap-4 border p-5 hover:border-green-700 transition-colors group"
                >
                  <div style={{ backgroundColor: "#2C5F2E" }} className="w-11 h-11 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Call or Text</p>
                    <p className="font-bold text-white group-hover:text-green-300 transition-colors">(586) 327-8080</p>
                  </div>
                </a>

                <a
                  href="mailto:tripointlandscaping@gmail.com"
                  style={{ borderColor: "#333" }}
                  className="flex items-center gap-4 border p-5 hover:border-green-700 transition-colors group"
                >
                  <div style={{ backgroundColor: "#2C5F2E" }} className="w-11 h-11 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email Us</p>
                    <p className="font-bold text-white group-hover:text-green-300 transition-colors text-sm">tripointlandscaping<br />@gmail.com</p>
                  </div>
                </a>

                <div style={{ borderColor: "#333" }} className="flex items-center gap-4 border p-5 sm:col-span-2">
                  <div style={{ backgroundColor: "#2C5F2E" }} className="w-11 h-11 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Business Hours</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1">
                      <p className="font-bold text-white text-sm">Mon – Sat: 7:00 AM – 9:00 PM</p>
                      <p className="text-white/50 text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN FORM SECTION ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-start">

              {/* LEFT SIDEBAR */}
              <div className="space-y-6 xl:sticky xl:top-28">

                {/* Hours card */}
                <div className="bg-white p-7 shadow-sm">
                  <h3
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-xl font-bold text-gray-900 mb-5"
                  >
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    {[
                      ["Monday", "7:00 AM – 9:00 PM"],
                      ["Tuesday", "7:00 AM – 9:00 PM"],
                      ["Wednesday", "7:00 AM – 9:00 PM"],
                      ["Thursday", "7:00 AM – 9:00 PM"],
                      ["Friday", "7:00 AM – 9:00 PM"],
                      ["Saturday", "7:00 AM – 9:00 PM"],
                      ["Sunday", "Closed"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex justify-between items-center py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-gray-500">{day}</span>
                        <span className={`font-semibold text-xs ${hours === "Closed" ? "text-red-400" : "text-gray-900"}`}>
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service areas */}
                <div className="bg-white p-7 shadow-sm">
                  <h3
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-xl font-bold text-gray-900 mb-4"
                  >
                    Where We Serve
                  </h3>
                  <div className="space-y-2">
                    {[
                      ["Washington Township", "/service-areas/washington-township"],
                      ["Shelby Township", "/service-areas/shelby-township"],
                      ["Macomb Township", "/service-areas/macomb-township"],
                      ["Romeo", "/service-areas/romeo"],
                      ["Ray Township", "/service-areas/ray-township"],
                      ["Bruce Township", "/service-areas/bruce-township"],
                    ].map(([area, href]) => (
                      <Link
                        key={area}
                        href={href}
                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-700 font-medium group py-1"
                      >
                        <div style={{ backgroundColor: "#2C5F2E" }} className="w-1.5 h-1.5 shrink-0" />
                        {area}
                        <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                    Not sure if we cover your area? Give us a call — we may be able to help.
                  </p>
                </div>

                {/* Rating card */}
                <div style={{ backgroundColor: "#2C5F2E" }} className="p-7 text-white">
                  <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
                  <p
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-2xl font-bold mb-1"
                  >
                    5.0 on Google
                  </p>
                  <p className="text-green-200 text-sm mb-5">Rated by real Macomb County homeowners</p>
                  <a
                    href="https://www.google.com/search?q=Tri-Point+Landscaping+Washington+Township"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors"
                  >
                    Read Our Reviews
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* FORM — takes up 2/3 */}
              <div className="xl:col-span-2 bg-white shadow-sm">
                {/* Form header inside the white box */}
                <div style={{ backgroundColor: "#111111" }} className="px-10 py-8">
                  <h2
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-2xl font-bold text-white mb-1"
                  >
                    Request Your Free Estimate
                  </h2>
                  <p className="text-white/50 text-sm">
                    Tell us about your property. We&apos;ll follow up same day with a clear quote.
                  </p>
                </div>

                {/* Jobber form fills the rest */}
                <div className="px-10 py-8">
                  <JobberForm />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST PILLARS ── */}
        <section style={{ backgroundColor: "#111111" }} className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Tri-Point</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-4xl font-bold text-white"
              >
                The Tri-Point Difference
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {trustPoints.map(({ icon, title, desc }) => (
                <div key={title} style={{ backgroundColor: "#111111" }} className="p-8 hover:bg-[#1a1a1a] transition-colors">
                  <div style={{ color: "#7ecb82" }} className="mb-4">{icon}</div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GOOGLE MAP ── */}
        <section className="w-full" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-7xl mx-auto px-6 pb-16">
            <div className="text-center pt-2 pb-8">
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-2">Where We Work</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-3xl font-bold text-white"
              >
                Serving All of Macomb County, MI
              </h2>
            </div>
            <div className="w-full overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d375485.8971034591!2d-82.90442845!3d42.672298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f896ca9afa2c99%3A0xb1e585a5feec8435!2sTri-Point%20Landscaping!5e0!3m2!1sen!2sus!4v1774060034441!5m2!1sen!2sus"
                width="100%"
                height="520"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Tri-Point Landscaping — Macomb County MI Service Area"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: "#7ecb82" }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Washington Township, MI
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: "#7ecb82" }} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (586) 327-8080
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 shrink-0" style={{ color: "#7ecb82" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon – Sat · 7AM – 9PM
              </span>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREA STRIP ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-14">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm mb-6">Proudly serving homeowners and businesses throughout northern Macomb County, Michigan</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                ["Washington Township", "/service-areas/washington-township"],
                ["Shelby Township", "/service-areas/shelby-township"],
                ["Macomb Township", "/service-areas/macomb-township"],
                ["Romeo", "/service-areas/romeo"],
                ["Ray Township", "/service-areas/ray-township"],
                ["Bruce Township", "/service-areas/bruce-township"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
                  className="border text-sm font-semibold px-5 py-2 hover:bg-green-50 transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
