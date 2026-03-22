import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Tri-Point Landscaping | Macomb County, MI",
  description:
    "Tri-Point Landscaping is Macomb County's locally owned, fully insured landscaping company. Serving Washington Township, Shelby Township & all of northern Macomb County with precision, passion, and perfection. Call (586) 327-8080.",
  alternates: {
    canonical: "https://www.tripointlandscaping.com/about",
  },
  openGraph: {
    title: "About Tri-Point Landscaping | Macomb County, MI",
    description:
      "Meet the team behind Macomb County's top-rated landscaping company. Locally owned, fully insured, and committed to transforming every property we touch.",
    url: "https://www.tripointlandscaping.com/about",
    siteName: "Tri-Point Landscaping",
    type: "website",
  },
};

const values = [
  {
    word: "Precision",
    letter: "P",
    desc: "Every edge. Every cut. Every bed. Done right the first time. We treat every property like it's our own — because attention to detail is not optional, it's who we are.",
  },
  {
    word: "Passion",
    letter: "A",
    desc: "We genuinely love transforming outdoor spaces. When a customer sees their property for the first time after we're done, that reaction is why we do this every single day.",
  },
  {
    word: "Perfection",
    letter: "P",
    desc: "Good enough isn't good enough. We hold ourselves to the highest standard on every job — residential or commercial, big or small. If it's not right, we make it right.",
  },
];

const whyLocal = [
  {
    title: "We Live Here",
    desc: "We're not a national franchise with a call center. We live and work right here in Macomb County — we know these streets, these yards, and these Michigan seasons.",
  },
  {
    title: "We Know Michigan's Climate",
    desc: "Michigan's freeze-thaw cycles, heavy clay soil, and harsh winters require a local expert. We know exactly what your property needs and when.",
  },
  {
    title: "We're Accountable",
    desc: "When you call, you reach us directly. If something needs attention, we come back. No runaround. No excuses. That's the promise of a local business.",
  },
  {
    title: "Fully Insured LLC",
    desc: "Tri-Point Landscaping is a fully licensed and insured LLC. Every job, every crew member, every visit — you're completely covered.",
  },
  {
    title: "Consistent Crews",
    desc: "You get the same familiar faces every visit. Our crew knows your property, your preferences, and your standards. No relearning. No surprises.",
  },
  {
    title: "Community Investment",
    desc: "We care about Macomb County because we're part of it. Every yard we improve makes this community a better place to live — and that matters to us.",
  },
];

const timeline = [
  { year: "Day One", title: "Started with a mower and a promise", desc: "Tri-Point was founded right here in northern Macomb County with one mission: deliver better landscaping than anyone else in the area. We started small, but the standard was always high." },
  { year: "Year Two", title: "Expanded to year-round service", desc: "Added snow removal and seasonal cleanups to serve our clients through Michigan's full four seasons. Same crew. Same quality. Just more ways to help." },
  { year: "Now", title: "Macomb County's trusted name", desc: "8 services, 6+ cities, and a 5.0 Google rating. We've grown by word of mouth — neighbor to neighbor, property to property — and we're just getting started." },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://www.tripointlandscaping.com/about" },
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

        {/* ── HERO ── */}
        <section className="relative min-h-[620px] flex items-center overflow-hidden">
          <Image
            src="/photos/IMG_4417.jpeg"
            alt="Tri-Point Landscaping team working on a property in Macomb County Michigan"
            fill
            className="object-cover scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/70 to-black/30" />
          <div className="absolute inset-0 dot-grid opacity-20" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-28">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/70">About</span>
            </nav>

            <div className="max-w-2xl">
              <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Macomb County&apos;s<br />
                <span style={{ color: "#7ecb82" }}>Trusted Landscapers.</span>
              </h1>
              <p className="text-xl text-white/65 leading-relaxed max-w-lg mb-8">
                Not a franchise. Not a call center. A real local crew — fully insured, detail-obsessed, and proud of every yard we touch across northern Macomb County.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="inline-flex items-center gap-2 text-white px-7 py-3.5 font-semibold hover:opacity-90 transition-opacity text-sm">
                  Get a Free Estimate
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
                <a href="tel:+15863278080" className="inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 font-semibold hover:bg-white/10 transition-colors text-sm">
                  (586) 327-8080
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── STORY + PHOTO ── */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              {/* Content side */}
              <div className="pr-0 lg:pr-20 flex flex-col justify-center py-8">
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">Who We Are</p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Built on Hard Work,<br />High Standards & Local Pride
                </h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Tri-Point Landscaping LLC is a locally owned and fully insured landscaping company serving residential and commercial properties throughout all of northern Macomb County — Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, and beyond.
                  </p>
                  <p>
                    We started with a simple belief: every property in Macomb County deserves the same level of care and attention, regardless of size or budget. That belief drives everything we do — from how we answer the phone to how we clean up after every single job.
                  </p>
                  <p>
                    We&apos;re not a national franchise. When you call us, you talk to us. When something needs fixing, we come back. When we say we&apos;ll be there Thursday at 8, we&apos;re there Thursday at 8. That&apos;s what local accountability looks like — and it&apos;s a standard we refuse to lower.
                  </p>
                </div>
                {/* Inline CTA */}
                <div style={{ backgroundColor: "#f5f0e8", borderLeft: "4px solid #2C5F2E" }} className="mt-8 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">Spots are limited each season.</p>
                    <p className="text-gray-500 text-xs mt-0.5">We keep our route tight so every client gets our full attention. Don&apos;t wait until the season is full.</p>
                  </div>
                  <Link href="/contact" style={{ backgroundColor: "#111111", whiteSpace: "nowrap" }} className="inline-flex items-center gap-2 text-white px-6 py-3 text-sm font-semibold shrink-0 hover:opacity-80 transition-opacity">
                    Reserve Your Spot →
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    style={{ backgroundColor: "#2C5F2E" }}
                    className="inline-flex items-center gap-2 text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Get a Free Estimate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+15863278080"
                    style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
                    className="inline-flex items-center gap-2 border px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-green-50 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (586) 327-8080
                  </a>
                </div>
              </div>

              {/* Image grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <Image src="/photos/mulch.jpg" alt="Mulch installation in Washington Township Michigan by Tri-Point Landscaping" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative h-44 sm:h-56 overflow-hidden md:mt-6">
                  <Image src="/photos/IMG_4417.jpeg" alt="Custom landscaping in Macomb County Michigan" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <Image src="/photos/spring.jpg" alt="Spring cleanup in Washington Township Michigan" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative h-44 sm:h-56 overflow-hidden md:mt-6">
                  <Image src="/photos/boxwood.jpg" alt="Professional hedge trimming in Macomb County" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section style={{ backgroundColor: "#111111" }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Three Words.<br />One Standard.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {values.map((v, i) => (
                <div key={v.word} style={{ backgroundColor: "#111111" }} className="p-10 hover:bg-[#1a1a1a] transition-colors group">
                  <div className="flex items-center gap-4 mb-6">
                    <div style={{ backgroundColor: "#2C5F2E" }} className="w-14 h-14 flex items-center justify-center shrink-0">
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-white text-2xl font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-white group-hover:text-green-300 transition-colors">
                      {v.word}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MID-PAGE CTA STRIP ── */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-10 overflow-hidden relative">
          <div className="absolute inset-0 dot-grid opacity-10" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-green-200 text-xs font-bold uppercase tracking-widest mb-1">Free · No Obligation · Same-Day Response</p>
              <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-white">
                Ready to see what Tri-Point can do for your property?
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 font-bold text-sm hover:bg-green-50 transition-colors">
                Get a Free Estimate →
              </Link>
              <a href="tel:+15863278080" className="inline-flex items-center gap-2 border border-white/40 text-white px-7 py-3.5 font-semibold text-sm hover:bg-white/10 transition-colors">
                (586) 327-8080
              </a>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">Our Journey</p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  How We Got Here
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Every great company starts somewhere. Ours started right here in northern Macomb County — with a commitment to doing the work right, treating customers with respect, and never settling for mediocre. That hasn&apos;t changed and it never will.
                </p>
              </div>

              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={item.year} className="flex gap-6">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center">
                      <div style={{ backgroundColor: "#2C5F2E" }} className="w-4 h-4 shrink-0 mt-1" />
                      {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-300 my-2" />}
                    </div>
                    <div className="pb-10">
                      <span className="text-xs font-bold text-green-700 uppercase tracking-widest">{item.year}</span>
                      <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY LOCAL ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Local</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The Difference Is Real
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyLocal.map(({ title, desc }) => (
                <div key={title} className="p-8 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group">
                  <div style={{ backgroundColor: "#2C5F2E" }} className="w-10 h-10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS BAND ── */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              {[
                { value: "5.0★", label: "Google Rating" },
                { value: "6+", label: "Cities Served" },
                { value: "8", label: "Services Offered" },
                { value: "100%", label: "Insured & Local" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl font-bold mb-1">{value}</div>
                  <div className="text-green-200 text-sm uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-40 overflow-hidden">
          <Image src="/photos/mulch1.jpeg" alt="Professional landscaping in Washington Township Michigan" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-4">Ready to Work Together?</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Transform<br />Your Property
            </h2>
            <p className="text-xl text-white/65 mb-10 max-w-xl mx-auto">
              Free estimates. Same-day response. Macomb County&apos;s most trusted landscaping team — ready to make your property exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="inline-flex items-center justify-center gap-2 text-white px-10 py-4 text-base font-semibold tracking-wide hover:opacity-90 transition-opacity">
                Request a Free Estimate
              </Link>
              <a href="tel:+15863278080" className="inline-flex items-center justify-center gap-2 border border-white/50 text-white px-10 py-4 text-base font-semibold tracking-wide hover:bg-white/10 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (586) 327-8080
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
