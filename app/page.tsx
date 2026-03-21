import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateOnScroll from "./components/AnimateOnScroll";
import StatCounter from "./components/StatCounter";
import MagneticButton from "./components/MagneticButton";
import InteractiveServices from "./components/InteractiveServices";
import CursorGlow from "./components/CursorGlow";
import ReviewsCarousel from "./components/ReviewsCarousel";

export const metadata: Metadata = {
  title: "Tri-Point Landscaping | Macomb County's #1 Lawn Care, Landscaping & Snow Removal",
  description:
    "Macomb County's most trusted landscaping company. Professional lawn maintenance, custom landscaping, mulch & stone, snow removal & ice management, lawn renovations. Serving Washington Township, Shelby Township, Macomb Township & more. 5.0★ Google rated. Free estimates — call (586) 327-8080.",
  keywords: [
    "landscaping Macomb County MI",
    "lawn care Washington Township Michigan",
    "snow removal Macomb County",
    "landscaping Shelby Township MI",
    "lawn maintenance Macomb County",
    "mulch installation Macomb County",
    "lawn aeration Macomb County MI",
    "Tri-Point Landscaping",
  ],
};

const marqueeItems = [
  "Lawn Maintenance", "Landscape Design", "Mulch & Stone", "Seasonal Cleanup",
  "Snow Removal & Ice Management", "Lawn Renovations", "Commercial Services", "Aeration & Overseeding",
  "Free Estimates", "5.0★ Google Rated", "Macomb County, Michigan", "Fully Insured LLC",
];

const serviceAreas = [
  { name: "Washington Township", slug: "washington-township", detail: "26 Mile – 32 Mile · Van Dyke to Romeo Plank" },
  { name: "Shelby Township", slug: "shelby-township", detail: "M-59 · 23 Mile – 26 Mile" },
  { name: "Macomb Township", slug: "macomb-township", detail: "25 Mile – 27 Mile · Hall Road" },
  { name: "Romeo", slug: "romeo", detail: "Village of Romeo & surrounding areas" },
  { name: "Ray Township", slug: "ray-township", detail: "Rural & residential properties" },
  { name: "Bruce Township", slug: "bruce-township", detail: "Northern Macomb County" },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ═══ HERO — FULL VIEWPORT ═══ */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <Image
            src="/photos/weekly-mowing-shelby-township-mi.jpg.png"
            alt="Professional landscaping in Washington Township Michigan by Tri-Point Landscaping"
            fill
            className="object-cover scale-[1.06]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute inset-0 dot-grid opacity-30" />

          {/* Floating accent — top right */}
          <div className="absolute top-1/3 right-8 lg:right-20 hidden lg:flex flex-col items-center gap-6 float-badge">
            <div style={{ backgroundColor: "rgba(0,0,0,0.6)", borderColor: "rgba(255,255,255,0.12)" }} className="border backdrop-blur-md p-5 text-center">
              <div style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl font-bold text-white">5.0</div>
              <div className="text-yellow-400 text-sm mt-1">★★★★★</div>
              <div className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Google Rating</div>
            </div>
            <div style={{ height: "80px", width: "1px", background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)" }} />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-36">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 border border-white/20 px-5 py-2.5 mb-10 backdrop-blur-sm anim-hidden animate-fade-up">
                <span className="text-yellow-400 tracking-widest text-sm">★★★★★</span>
                <span className="w-px h-4 bg-white/20" />
                <span className="text-white/75 text-xs font-semibold tracking-widest uppercase">Macomb County&apos;s Most Trusted</span>
              </div>

              {/* Headline */}
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="font-bold text-white leading-[1.0] mb-8">
                <span className="block text-6xl md:text-7xl lg:text-[88px] anim-hidden animate-fade-up delay-100">Precision.</span>
                <span className="block text-6xl md:text-7xl lg:text-[88px] anim-hidden animate-fade-up delay-200 shimmer-text">Passion.</span>
                <span className="block text-6xl md:text-7xl lg:text-[88px] anim-hidden animate-fade-up delay-300">Perfection.</span>
              </h1>

              <p className="text-xl text-white/65 mb-12 leading-relaxed max-w-xl anim-hidden animate-fade-up delay-400">
                Macomb County&apos;s premier landscaping team. Locally owned, fully insured, and obsessively
                detail-oriented on every property we touch — spring through winter, every season.
              </p>

              <div className="flex flex-wrap gap-4 anim-hidden animate-fade-up delay-500">
                <MagneticButton>
                  <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="group inline-flex items-center gap-3 text-white px-10 py-4 text-base font-semibold tracking-wide hover:opacity-90 transition-opacity">
                    Get a Free Estimate
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a href="tel:+15863278080" className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 text-base font-semibold tracking-wide hover:bg-white/10 hover:border-white transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    (586) 327-8080
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-md border-t border-white/8">
            <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { end: 5.0, suffix: "★", decimals: 1, label: "Google Rating" },
                { end: 100, suffix: "%", decimals: 0, label: "Satisfaction Guaranteed" },
                { end: 8, suffix: "+", decimals: 0, label: "Services Offered" },
                { end: 6, suffix: "+", decimals: 0, label: "Cities Served" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-white">
                    <StatCounter end={s.end} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="text-xs text-white/45 uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <section style={{ backgroundColor: "#2C5F2E" }} className="py-4 overflow-hidden" aria-hidden="true">
          <div className="flex">
            <div className="marquee-track flex items-center shrink-0">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span key={i} className="flex items-center gap-5 px-6 text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                  {item}
                  <span className="w-1 h-1 bg-green-200/60 shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROJECT SHOWCASE — replaces before/after ═══ */}
        <section style={{ backgroundColor: "#0a0a0a" }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll animation="fade-up" className="text-center mb-14">
              <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">Our Work Speaks</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-white mb-4">
                The Tri-Point Standard
              </h2>
              <p className="text-white/40 max-w-md mx-auto text-sm leading-relaxed">
                Every property deserves to be exceptional. Here&apos;s what that looks like in practice.
              </p>
            </AnimateOnScroll>

            {/* 3-panel showcase */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3" style={{ height: "520px" }}>
              {[
                {
                  img: "/photos/mulch1.jpeg",
                  alt: "Premium mulch bed installation in Macomb County Michigan",
                  service: "Mulch & Stone",
                  num: "01",
                  headline: "Sharp edges. Fresh color. One visit changes everything.",
                  stat: "Same-Day Transformation",
                  href: "/services/mulch-and-stone",
                },
                {
                  img: "/photos/IMG_4417.jpeg",
                  alt: "Custom landscape installation in Washington Township Michigan",
                  service: "Landscape Design",
                  num: "02",
                  headline: "Your vision, built to last. Custom design every time.",
                  stat: "100% Custom Design",
                  href: "/services/landscaping",
                },
                {
                  img: "/photos/Aeration-with-aerator.jpg",
                  alt: "Lawn aeration and renovation service in Macomb County Michigan",
                  service: "Lawn Renovations",
                  num: "03",
                  headline: "Aeration, overseeding & dethatching — a thicker lawn guaranteed.",
                  stat: "Science-Backed Results",
                  href: "/services/lawn-renovations",
                },
              ].map((card) => (
                <AnimateOnScroll key={card.num} animation="scale-in" delay={Number(card.num) * 80} className="h-full">
                  <Link
                    href={card.href}
                    className="showcase-card group relative overflow-hidden block h-full"
                    style={{ minHeight: "520px" }}
                  >
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="showcase-card-img object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="showcase-card-overlay absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                    {/* Top label */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                      <span
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "rgba(255,255,255,0.2)" }}
                        className="text-6xl font-bold leading-none select-none"
                      >
                        {card.num}
                      </span>
                      <span
                        style={{ borderColor: "rgba(44,95,46,0.6)", color: "#7ecb82" }}
                        className="border text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 backdrop-blur-sm"
                      >
                        {card.service}
                      </span>
                    </div>

                    {/* Bottom content — always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                      <div
                        style={{ backgroundColor: "#2C5F2E" }}
                        className="inline-block text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4"
                      >
                        {card.stat}
                      </div>
                      <h3
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        className="text-xl font-bold text-white leading-snug mb-4"
                      >
                        {card.headline}
                      </h3>

                      {/* Reveal on hover */}
                      <div className="showcase-card-reveal">
                        <div className="flex items-center gap-2 text-white font-semibold text-sm">
                          <span>View Service</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                        <div className="w-12 h-0.5 mt-3" style={{ backgroundColor: "#2C5F2E" }} />
                      </div>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>

            {/* Bottom row — 2 more showcase cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              {[
                {
                  img: "/photos/1.png",
                  alt: "Striped lawn maintenance in Macomb County Michigan by Tri-Point Landscaping",
                  service: "Lawn Maintenance",
                  headline: "Crisp edges. Perfect stripes. Every single week.",
                  stat: "Consistent Scheduling",
                  href: "/services/lawn-maintenance",
                },
                {
                  img: "/photos/12D7CE8B-99F8-4285-BFD8-A33E849120E0.jpeg",
                  alt: "Snow removal and ice management in Macomb County Michigan",
                  service: "Snow & Ice Management",
                  headline: "Cleared before you wake up. Every storm. All winter.",
                  stat: "24/7 Storm Response",
                  href: "/services/snow-removal",
                },
              ].map((card) => (
                <Link
                  key={card.service}
                  href={card.href}
                  className="showcase-card group relative overflow-hidden block"
                  style={{ height: "280px" }}
                >
                  <Image src={card.img} alt={card.alt} fill className="showcase-card-img object-cover" />
                  <div className="showcase-card-overlay absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
                  <div className="absolute inset-0 flex items-end p-8 z-10">
                    <div>
                      <span
                        style={{ color: "#7ecb82" }}
                        className="text-[10px] font-bold uppercase tracking-widest"
                      >
                        {card.service}
                      </span>
                      <h3
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        className="text-2xl font-bold text-white mt-2 mb-3 max-w-xs leading-snug"
                      >
                        {card.headline}
                      </h3>
                      <div className="showcase-card-reveal flex items-center gap-2 text-white/70 text-sm font-semibold">
                        Learn More
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ INTRO STRIP ═══ */}
        <section className="bg-white py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll animation="fade-left">
                <span className="section-line" />
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">Macomb County, Michigan</p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05] mb-6">
                  Your Neighbors.<br />
                  <span style={{ color: "#2C5F2E" }}>Your Landscapers.</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Not a franchise. Not a call center. A real local crew that takes it personally when your property looks anything less than outstanding.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={150}>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We&apos;re a locally owned, fully insured landscaping company rooted in Macomb County.
                  Every property gets our complete attention — from the first cut of spring to the
                  last plow of winter. No franchises. No shortcuts. No excuses. Just the best property care in northern Michigan.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We know Macomb County&apos;s soil, its seasons, and its homeowners — because we live here too.
                  That local accountability isn&apos;t a talking point. It shows up on every property, every visit.
                </p>
                <p style={{ color: "#2C5F2E", borderColor: "#2C5F2E" }} className="border-l-2 pl-4 text-sm font-semibold leading-relaxed mb-10 italic">
                  &ldquo;The right crew makes your property the one neighbors remember. That&apos;s what we do.&rdquo;
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Fully Insured LLC", sub: "General liability on every job" },
                    { label: "5.0★ Google Rating", sub: "10+ five-star reviews" },
                    { label: "Same-Day Response", sub: "We don't let you wait" },
                    { label: "Free Estimates", sub: "No cost, no obligation" },
                  ].map(({ label, sub }) => (
                    <div key={label} className="flex items-start gap-3 p-4 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all">
                      <div style={{ backgroundColor: "#2C5F2E" }} className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">{label}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ INTERACTIVE SERVICES SHOWCASE ═══ */}
        <CursorGlow className="w-full" style={{ backgroundColor: "#111111" }}>
          <div style={{ backgroundColor: "#111111" }} className="dot-grid">
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-4">
              <AnimateOnScroll animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-white leading-tight">
                    Full-Service<br />Property Care
                  </h2>
                </div>
                <p className="text-white/40 max-w-xs text-sm leading-relaxed">Hover each service to explore. Serving all of northern Macomb County, Michigan — every season.</p>
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-up" delay={100}>
              <InteractiveServices />
            </AnimateOnScroll>
            <div className="max-w-7xl mx-auto px-6 py-12 flex justify-center">
              <MagneticButton>
                <Link href="/contact" style={{ borderColor: "#2C5F2E", color: "#7ecb82" }} className="inline-flex items-center gap-2 border px-8 py-4 text-sm font-semibold hover:bg-[#2C5F2E] hover:text-white transition-all">
                  Get a Free Estimate for Any Service
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </MagneticButton>
            </div>
          </div>
        </CursorGlow>

        {/* ═══ WHY TRI-POINT — differentiator section ═══ */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimateOnScroll animation="fade-left">
                <span className="section-line" />
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">The Difference</p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Why Homeowners<br />Choose Tri-Point
                </h2>
                <p className="text-gray-500 leading-relaxed mb-10">
                  We don&apos;t compete on price. We compete on quality, reliability, and reputation.
                  When you hire Tri-Point, you get a crew that takes your property personally.
                </p>
                <MagneticButton className="inline-block">
                  <Link href="/about" style={{ backgroundColor: "#111111" }} className="group inline-flex items-center gap-2 text-white px-8 py-4 font-semibold tracking-wide hover:opacity-80 transition-opacity">
                    Our Story
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </MagneticButton>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    num: "01",
                    title: "We Show Up — Every Time",
                    desc: "Our schedule is our promise. Consistent, same-day weekly visits — no gaps, no last-minute cancellations, no chasing us down.",
                  },
                  {
                    num: "02",
                    title: "We're Detail Obsessed",
                    desc: "We don't leave until every edge is sharp, every surface is blown, and your property looks exactly the way it should. That's the Tri-Point standard.",
                  },
                  {
                    num: "03",
                    title: "We Know This Area",
                    desc: "Macomb County's soil, climate, and neighborhoods are in our DNA. The right plants, the right timing, the right technique — every single time.",
                  },
                  {
                    num: "04",
                    title: "We Stand Behind the Work",
                    desc: "Not happy? We come back and make it right. No questions, no excuses. 100% satisfaction is the only outcome we accept.",
                  },
                ].map(({ num, title, desc }, i) => (
                  <AnimateOnScroll key={num} animation="fade-right" delay={i * 80}>
                    <div className="group flex items-start gap-5 p-6 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                      <div
                        style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#2C5F2E" }}
                        className="text-2xl font-bold shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                      >
                        {num}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ANIMATED STATS ═══ */}
        <CursorGlow style={{ backgroundColor: "#111111" }}>
          <div style={{ backgroundColor: "#111111" }} className="py-24 dot-grid">
            <div className="max-w-7xl mx-auto px-6">
              <AnimateOnScroll animation="fade-up" className="text-center mb-16">
                <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">By the Numbers</p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-white">Results That Speak</h2>
              </AnimateOnScroll>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
                {[
                  { end: 5.0, suffix: "★", decimals: 1, label: "Google Rating", sub: "Rated by real Macomb County homeowners" },
                  { end: 100, suffix: "%", decimals: 0, label: "Satisfaction", sub: "Or we come back and make it right" },
                  { end: 6, suffix: "+", decimals: 0, label: "Cities Served", sub: "All of northern Macomb County" },
                  { end: 8, suffix: "", decimals: 0, label: "Services", sub: "Lawn care to snow removal" },
                ].map(({ end, suffix, decimals, label, sub }, i) => (
                  <AnimateOnScroll key={label} animation="fade-up" delay={i * 100} className="h-full">
                    <div style={{ backgroundColor: "#111111" }} className="stat-card text-center px-8 py-14 hover:bg-[#1a1a1a] transition-colors h-full">
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-6xl font-bold text-white mb-2">
                        <StatCounter end={end} suffix={suffix} decimals={decimals} />
                      </div>
                      <p className="text-white font-semibold text-sm tracking-wide mb-1">{label}</p>
                      <p className="text-white/30 text-xs">{sub}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </CursorGlow>

        {/* ═══ INLINE URGENCY STRIP ═══ */}
        <div style={{ backgroundColor: "#0a0a0a", borderTop: "1px solid rgba(44,95,46,0.3)", borderBottom: "1px solid rgba(44,95,46,0.3)" }} className="py-5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <p className="text-white/70 text-sm">
                <span className="text-white font-semibold">Accepting new clients</span> in Washington Township, Shelby Township, Macomb Township &amp; more.
              </p>
            </div>
            <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="shrink-0 inline-flex items-center gap-2 text-white px-6 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
              Book Before We Fill Up →
            </Link>
          </div>
        </div>

        {/* ═══ ABOUT SPLIT ═══ */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              <AnimateOnScroll animation="fade-left" className="relative min-h-[580px] lg:min-h-0">
                <div className="relative h-full min-h-[580px]">
                  <Image src="/photos/IMG_4417.jpeg" alt="Tri-Point Landscaping crew at work in Washington Township Michigan" fill className="object-cover" />
                  {/* Floating stat card */}
                  <div style={{ backgroundColor: "#2C5F2E" }} className="absolute bottom-10 left-10 right-10 p-6">
                    <div className="flex items-center justify-between text-white">
                      {[["5.0★", "Google Rating"], ["100%", "Satisfaction"], ["Local", "& Insured"]].map(([val, sub]) => (
                        <div key={val} className="text-center flex-1">
                          <div style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold">{val}</div>
                          <div className="text-xs text-green-200 mt-1">{sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Award badge */}
                  <div className="absolute top-6 right-6 float-badge">
                    <Image
                      src="/photos/nextdoor-fave-2025-website-banner.png"
                      alt="Nextdoor Neighborhood Favorite 2025"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={100} className="h-full">
                <div className="bg-white px-12 lg:px-16 py-16 lg:py-20 h-full flex flex-col justify-center">
                  <span className="section-line" />
                  <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">About Tri-Point</p>
                  <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Built on Hard Work<br />&amp; Uncompromising Standards
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    We&apos;re a locally owned, fully insured landscaping company based in Washington Township,
                    serving all of northern Macomb County. We know this area&apos;s soil, its seasons, and its
                    homeowners — because we&apos;re one of them.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-10">
                    Every property gets our complete attention. We don&apos;t cut corners, rush jobs, or
                    disappear after the first visit. <em>Precision. Passion. Perfection.</em> — that&apos;s not
                    just our motto, it&apos;s the standard we hold ourselves to every day.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      ["Precision", "Every edge done right, every time."],
                      ["Passion", "We genuinely love what we do."],
                      ["Reliability", "We show up. No exceptions."],
                      ["Local", "Washington Township based."],
                    ].map(([title, desc]) => (
                      <div key={title} className="flex items-start gap-3">
                        <div style={{ backgroundColor: "#2C5F2E" }} className="w-2 h-2 mt-1.5 shrink-0" />
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{title}</p>
                          <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <MagneticButton className="self-start">
                    <Link href="/about" style={{ backgroundColor: "#111111" }} className="group inline-flex items-center gap-2 text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:opacity-80 transition-opacity">
                      Our Full Story
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </Link>
                  </MagneticButton>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ═══ PHOTO GALLERY ═══ */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div>
                <span className="section-line" />
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-gray-900">
                  Results You Can See
                </h2>
              </div>
              <Link
                href="/contact"
                style={{ color: "#2C5F2E", borderColor: "#2C5F2E" }}
                className="self-start inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-semibold hover:opacity-70 transition-opacity"
              >
                Get This for Your Property →
              </Link>
            </AnimateOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3" style={{ gridAutoRows: "220px" }}>
              {[
                { src: "/photos/mulch1.jpeg", alt: "Mulch bed installation in Washington Township Michigan", label: "Mulch Installation", col: "md:col-span-2 md:row-span-2" },
                { src: "/photos/boxwood.jpg", alt: "Hedge trimming service in Macomb County", label: "Hedge Trimming", col: "" },
                { src: "/photos/spring.jpg", alt: "Spring cleanup in Washington Township MI", label: "Spring Cleanup", col: "" },
                { src: "/photos/IMG_3369.jpeg", alt: "Weekly lawn maintenance Macomb County Michigan", label: "Lawn Maintenance", col: "" },
                { src: "/photos/IMG_4417.jpeg", alt: "Custom landscape installation Macomb County", label: "Landscape Design", col: "" },
              ].map((p, i) => (
                <AnimateOnScroll key={p.src} animation="scale-in" delay={i * 80} className={`relative overflow-hidden photo-hover-wrap group ${p.col}`}>
                  <Image src={p.src} alt={p.alt} fill className="photo-hover-img object-cover" />
                  <div className="photo-hover-overlay absolute inset-0 bg-black/65 flex items-end p-6">
                    <div>
                      <span style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-white font-bold text-xl">{p.label}</span>
                      <div className="w-10 h-0.5 bg-green-400 mt-2" />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ REVIEWS — carousel ═══ */}
        <CursorGlow style={{ backgroundColor: "#0d0d0d" }}>
          <div style={{ backgroundColor: "#0d0d0d" }} className="py-28 dot-grid">
            <div className="max-w-6xl mx-auto px-6">
              <AnimateOnScroll animation="fade-up" className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-white">
                      What Macomb County<br />Homeowners Say
                    </h2>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-center">
                      <div style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-white">5.0</div>
                      <div className="text-yellow-400 text-lg mt-1">★★★★★</div>
                      <div className="text-white/40 text-xs uppercase tracking-widest mt-1">Google Rating</div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <ReviewsCarousel />
              </AnimateOnScroll>
            </div>
          </div>
        </CursorGlow>

        {/* ═══ SERVICE AREAS ═══ */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll animation="fade-up" className="mb-14">
              <span className="section-line" />
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Where We Work</p>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-gray-900">
                  Serving All of<br />Macomb County
                </h2>
                <p className="text-gray-500 max-w-sm leading-relaxed text-sm">
                  Proudly serving homeowners and businesses throughout northern Macomb County, Michigan — every season, every year. Select your area for local details.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {serviceAreas.map((area, i) => (
                <AnimateOnScroll key={area.slug} animation="fade-up" delay={i * 80}>
                  <Link href={`/service-areas/${area.slug}`} className="group flex items-center justify-between p-7 bg-white border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <div>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="font-bold text-gray-900 text-lg group-hover:text-green-800 transition-colors mb-1">{area.name}</h3>
                      <p className="text-gray-400 text-xs">{area.detail}</p>
                    </div>
                    <div style={{ color: "#2C5F2E" }} className="w-10 h-10 border border-gray-200 group-hover:border-green-400 group-hover:bg-green-50 flex items-center justify-center transition-all">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-28 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <AnimateOnScroll animation="fade-up" className="text-center mb-20">
              <span className="section-line" style={{ display: "block", margin: "0 auto 16px" }} />
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Simple Process</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl font-bold text-gray-900">Getting Started Is Easy</h2>
              <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm">Three steps from &ldquo;I need help&rdquo; to a property you&apos;re proud of.</p>
            </AnimateOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
              {[
                {
                  num: "01",
                  title: "Request a Free Estimate",
                  desc: "Fill out our quick form or call us directly. We respond same day — usually within the hour. No runaround, no wait.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
                },
                {
                  num: "02",
                  title: "We Visit Your Property",
                  desc: "A Tri-Point team member walks your property and gives you a detailed, honest quote — at no charge. We never guess from the road.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                },
                {
                  num: "03",
                  title: "We Get to Work",
                  desc: "Our crew shows up on time, executes with precision, and leaves your property looking better than it ever has. Every single visit.",
                  icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
                },
              ].map(({ num, title, desc, icon }, i) => (
                <AnimateOnScroll key={num} animation="fade-up" delay={i * 120} className="h-full">
                  <div className="relative flex flex-col items-center text-center px-10 py-14 h-full group hover:shadow-xl transition-shadow border border-transparent hover:border-gray-100">
                    <div style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#f2f2f2" }} className="absolute top-6 right-8 text-8xl font-bold leading-none select-none">{num}</div>
                    <div style={{ backgroundColor: "#2C5F2E" }} className="w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-white">{icon}</div>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link href="/contact" style={{ backgroundColor: "#111111" }} className="group inline-flex items-center gap-3 text-white px-10 py-4 font-semibold tracking-wide hover:opacity-80 transition-opacity">
                Start With a Free Estimate
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ TRUST BAR ═══ */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-gray-100">
              {[
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: "Fully Insured LLC", desc: "General liability on every job, every time." },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Locally Owned", desc: "Washington Township based. Real people, real accountability." },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: "Same-Day Response", desc: "We don't let you wait. Real response, same day, every time." },
                { icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>, title: "Free Estimates", desc: "No cost. No obligation. Honest pricing, always." },
              ].map(({ icon, title, desc }, i) => (
                <AnimateOnScroll key={title} animation="fade-up" delay={i * 80}>
                  <div className="flex flex-col items-center text-center px-4">
                    <div style={{ color: "#2C5F2E" }} className="mb-3">{icon}</div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FULL BLEED CTA ═══ */}
        <section className="relative py-48 overflow-hidden">
          <Image src="/photos/mulch1.jpeg" alt="Professional landscaping services in Macomb County Michigan" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/82" />
          <div className="absolute inset-0 dot-grid opacity-20" />

          {/* Side accents */}
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#2C5F2E" }} />
          <div className="absolute right-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#2C5F2E" }} />

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <AnimateOnScroll animation="fade-up">
              <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-5">Ready to Get Started?</p>
              <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-6xl md:text-7xl font-bold mb-6 leading-[1.0]">
                Let&apos;s Transform<br />Your Property
              </h2>
              <p className="text-xl text-white/55 mb-4 max-w-lg mx-auto">
                Free estimates. Same-day response. Macomb County&apos;s most trusted landscaping team — ready when you are.
              </p>
              <p className="text-white/30 text-sm mb-14">Serving Washington Township · Shelby Township · Macomb Township · Romeo · Ray Township · Bruce Township</p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <MagneticButton>
                  <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="group inline-flex items-center justify-center gap-3 text-white px-14 py-5 text-base font-semibold tracking-wide hover:opacity-90 transition-opacity">
                    Request a Free Estimate
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a href="tel:+15863278080" className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-14 py-5 text-base font-semibold tracking-wide hover:bg-white/10 hover:border-white transition-all">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                    (586) 327-8080
                  </a>
                </MagneticButton>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
