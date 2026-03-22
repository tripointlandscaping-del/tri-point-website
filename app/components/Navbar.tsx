"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const services = [
  { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
  { name: "Landscaping", href: "/services/landscaping" },
  { name: "Mulch & Stone", href: "/services/mulch-and-stone" },
  { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
  { name: "Snow & Ice Management", href: "/services/snow-removal" },
  { name: "Lawn Renovations", href: "/services/lawn-renovations" },
  { name: "Commercial", href: "/commercial" },
];

const areas = [
  { name: "Washington Township", href: "/service-areas/washington-township" },
  { name: "Shelby Township", href: "/service-areas/shelby-township" },
  { name: "Macomb Township", href: "/service-areas/macomb-township" },
  { name: "Romeo", href: "/service-areas/romeo" },
  { name: "Ray Township", href: "/service-areas/ray-township" },
  { name: "Bruce Township", href: "/service-areas/bruce-township" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"}`}>
      {/* Top bar */}
      <div style={{ backgroundColor: "#111111" }} className="text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="hidden sm:flex items-center gap-4 text-white/60">
            <span>Proudly Serving All of Macomb County, MI</span>
            <span className="w-px h-3 bg-white/20" />
            <span>Available 24/7</span>
          </span>
          <div className="flex items-center gap-6 ml-auto">
            <a href="tel:+15863278080" className="flex items-center gap-1.5 hover:text-green-300 transition-colors font-medium tracking-wide">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (586) 327-8080
            </a>
            <a href="sms:+15863278080" className="hidden sm:flex items-center gap-1.5 hover:text-green-300 transition-colors font-medium tracking-wide">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Text Us
            </a>
            <div className="hidden sm:flex items-center gap-1 text-yellow-400 text-xs font-medium">
              ★★★★★ <span className="text-white/60 ml-1">5.0 Google</span>
            </div>
            <a
              href="https://clienthub.getjobber.com/client_hubs/ba649197-6964-43ad-a933-86b6459afbf6/login/new?source=share_login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-xs border border-white/20 px-3 py-1 hover:border-white/50"
            >
              Client Login
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-black.png"
              alt="Tri-Point Landscaping — Washington Township MI"
              width={200}
              height={65}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className="px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
              Home
            </Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
                Services
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#2C5F2E] py-2 w-56" style={{ marginTop: "0px" }}>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="flex items-center gap-2 px-5 py-2.5 text-sm text-gray-700 hover:bg-[#f5f0e8] hover:text-[#2C5F2E] transition-colors group"
                    >
                      <span className="w-1 h-1 bg-[#2C5F2E] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Areas dropdown */}
            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
                Service Areas
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 bg-white shadow-xl border-t-2 border-[#2C5F2E] py-2 w-52" style={{ marginTop: "0px" }}>
                  {areas.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="flex items-center gap-2 px-5 py-2.5 text-sm text-gray-700 hover:bg-[#f5f0e8] hover:text-[#2C5F2E] transition-colors group"
                    >
                      <span className="w-1 h-1 bg-[#2C5F2E] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
              About
            </Link>
            <Link href="/blog" className="px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
              Blog
            </Link>
            <Link href="/faq" className="px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
              FAQ
            </Link>
            <Link href="/contact" className="px-4 py-2 text-gray-700 hover:text-[#2C5F2E] font-medium text-sm transition-colors tracking-wide">
              Contact
            </Link>

            <Link
              href="/contact"
              style={{ backgroundColor: "#2C5F2E" }}
              className="ml-4 text-white px-6 py-2.5 font-semibold text-sm hover:opacity-90 transition-opacity tracking-wide"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-6 py-5 space-y-1">
            <Link href="/" className="block py-2.5 text-gray-800 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>Home</Link>

            <div className="border-b border-gray-50">
              <button
                className="flex items-center justify-between w-full py-2.5 text-gray-800 font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="block py-2 text-sm text-gray-600 hover:text-[#2C5F2E]" onClick={() => setMobileOpen(false)}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="border-b border-gray-50">
              <button
                className="flex items-center justify-between w-full py-2.5 text-gray-800 font-medium"
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Service Areas
                <svg className={`w-4 h-4 transition-transform ${areasOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {areasOpen && (
                <div className="pl-4 pb-2 space-y-1">
                  {areas.map((a) => (
                    <Link key={a.href} href={a.href} className="block py-2 text-sm text-gray-600 hover:text-[#2C5F2E]" onClick={() => setMobileOpen(false)}>
                      {a.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="block py-2.5 text-gray-800 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/blog" className="block py-2.5 text-gray-800 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>Blog</Link>
            <Link href="/faq" className="block py-2.5 text-gray-800 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>FAQ</Link>
            <Link href="/contact" className="block py-2.5 text-gray-800 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>Contact</Link>

            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                style={{ backgroundColor: "#2C5F2E" }}
                className="block text-white text-center px-4 py-3 font-semibold tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+15863278080"
                className="block text-center border border-gray-300 text-gray-700 px-4 py-3 font-semibold text-sm"
              >
                Call (586) 327-8080
              </a>
              <a
                href="sms:+15863278080"
                className="block text-center border border-gray-300 text-gray-700 px-4 py-3 font-semibold text-sm"
              >
                Text (586) 327-8080
              </a>
              <a
                href="https://clienthub.getjobber.com/client_hubs/ba649197-6964-43ad-a933-86b6459afbf6/login/new?source=share_login"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-gray-200 text-gray-500 px-4 py-3 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Client Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
