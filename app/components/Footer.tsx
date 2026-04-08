import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111" }} className="text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand — 4 cols */}
          <div className="lg:col-span-4">
            <Image
              src="/logo-white.png"
              alt="Tri-Point Landscaping LLC — Macomb County, Michigan"
              width={200}
              height={65}
              className="h-14 w-auto mb-5"
            />
            <p
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#7ecb82" }}
              className="text-lg italic mb-4"
            >
              Precision. Passion. Perfection.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Macomb County&apos;s trusted landscaping company. Fully insured, locally owned, and committed to excellence on every property we touch — Washington Township, Shelby Township, Macomb Township &amp; beyond.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-white/60 text-xs">Google 5.0</span>
              </div>
              <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-white/60 text-xs">Fully Insured LLC</span>
              </div>
              <div className="flex items-center gap-1.5 border border-white/10 px-3 py-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-white/60 text-xs">Macomb County, MI</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/p/Tri-Point-Landscaping-LLC-61575067540062/" target="_blank" rel="noopener noreferrer" aria-label="Tri-Point Landscaping on Facebook" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/tripointlandscapingllc/" target="_blank" rel="noopener noreferrer" aria-label="Tri-Point Landscaping on Instagram" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.yelp.com/biz/tri-point-landscaping-washington-township-2" target="_blank" rel="noopener noreferrer" aria-label="Tri-Point Landscaping on Yelp" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.275-1.766-.8-1.216-1.665l2.88-4.614a1.15 1.15 0 011.916.064 8.7 8.7 0 011.485 4.343 1.15 1.15 0 01-.07.439zM12.64 9.032L11.1 4.094a1.15 1.15 0 00-.46-.6 8.7 8.7 0 00-4.5-.527 1.15 1.15 0 00-.822 1.61l2.338 4.81c.45.926 1.815.826 2.12-.155l.065-.2zM11.39 14.556l-1.932 4.82a1.15 1.15 0 00.408 1.38 8.7 8.7 0 004.303 1.11 1.15 1.15 0 00.955-1.7l-2.586-4.674c-.497-.896-1.827-.726-2.148.064zM8.31 13.13l-5.117.254a1.15 1.15 0 00-1.005.73 8.7 8.7 0 00.5 4.458 1.15 1.15 0 001.748.434l4.037-2.913c.776-.56.6-1.747-.29-2.07l-.873-.893zM8.52 11.348L4.922 8.04a1.15 1.15 0 00-1.81.357 8.7 8.7 0 00-.6 4.457 1.15 1.15 0 001.16.988l5.107-.502c.98-.096 1.264-1.37.43-1.92l-.689-.072z" />
                </svg>
              </a>
              <a href="https://www.google.com/search?q=Tri-Point+Landscaping+Washington+Township" target="_blank" rel="noopener noreferrer" aria-label="Tri-Point Landscaping on Google" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.15em] mb-5">Our Services</h3>
            <ul className="space-y-3">
              {[
                ["Lawn Maintenance", "/services/lawn-maintenance"],
                ["Landscaping", "/services/landscaping"],
                ["Mulch & Stone", "/services/mulch-and-stone"],
                ["Seasonal Cleanup", "/services/seasonal-cleanup"],
                ["Snow & Ice Management", "/services/snow-removal"],
                ["Lawn Renovations", "/services/lawn-renovations"],
                ["Commercial", "/commercial"],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-white/20 group-hover:bg-[#7ecb82] group-hover:w-4 transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas — 2 cols */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.15em] mb-5">Service Areas</h3>
            <ul className="space-y-3">
              {[
                ["Washington Twp", "/service-areas/washington-township"],
                ["Shelby Township", "/service-areas/shelby-township"],
                ["Macomb Township", "/service-areas/macomb-township"],
                ["Romeo", "/service-areas/romeo"],
                ["Ray Township", "/service-areas/ray-township"],
                ["Bruce Township", "/service-areas/bruce-township"],
              ].map(([name, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/55 hover:text-white text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-3 h-px bg-white/20 group-hover:bg-[#7ecb82] group-hover:w-4 transition-all" />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.15em] mb-5">Get In Touch</h3>
            <div className="space-y-4 mb-7">
              <a href="tel:+15863278080" className="flex items-center gap-3 group">
                <div style={{ backgroundColor: "#2C5F2E" }} className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Phone / Text</p>
                  <p className="text-white font-semibold text-sm group-hover:text-green-300 transition-colors">(586) 327-8080</p>
                </div>
              </a>
              <a href="mailto:tripointlandscaping@gmail.com" className="flex items-center gap-3 group">
                <div style={{ backgroundColor: "#2C5F2E" }} className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Email</p>
                  <p className="text-white font-semibold text-sm group-hover:text-green-300 transition-colors">tripointlandscaping@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <div style={{ backgroundColor: "#2C5F2E" }} className="w-9 h-9 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wider">Hours</p>
                  <p className="text-white/70 text-sm">24/7 — Call or Text Anytime</p>
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              style={{ backgroundColor: "#2C5F2E" }}
              className="inline-flex items-center gap-2 text-white px-6 py-3 font-semibold text-sm hover:opacity-90 transition-opacity tracking-wide w-full justify-center"
            >
              Get a Free Estimate
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Pre-footer CTA */}
      <div style={{ backgroundColor: "#2C5F2E" }} className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-green-200 text-xs font-bold uppercase tracking-widest mb-1">Free · No Obligation</p>
            <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-xl font-bold text-white">
              Your property deserves the Tri-Point standard.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 font-bold text-sm hover:bg-green-50 transition-colors">
              Get a Free Estimate →
            </Link>
            <a href="tel:+15863278080" className="inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors">
              (586) 327-8080
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Tri-Point Landscaping LLC · Macomb County, Michigan · All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/gallery" className="hover:text-white/60 transition-colors">Gallery</Link>
            <Link href="/blog" className="hover:text-white/60 transition-colors">Blog</Link>
            <Link href="/careers" className="hover:text-white/60 transition-colors">Careers</Link>
            <Link href="/faq" className="hover:text-white/60 transition-colors">FAQ</Link>
            <Link href="/service-areas" className="hover:text-white/60 transition-colors">Service Areas</Link>
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white/60 transition-colors">Terms &amp; Conditions</Link>
            <a href="https://clienthub.getjobber.com/client_hubs/ba649197-6964-43ad-a933-86b6459afbf6/login/new?source=share_login" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Client Login</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
