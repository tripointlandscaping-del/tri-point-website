import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center px-6 py-24 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-8xl font-bold mb-6" style={{ color: "#2C5F2E" }}>404</p>
          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Page Not Found
          </h1>
          <p className="text-gray-500 leading-relaxed mb-10">
            Looks like this page got overgrown. The link you followed may have moved or no longer exists. Head back to the homepage or find what you&apos;re looking for below.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/"
              style={{ backgroundColor: "#2C5F2E" }}
              className="inline-flex items-center justify-center gap-2 text-white px-6 py-3 font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Back to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 font-semibold text-sm hover:border-green-700 hover:text-green-700 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Quick Links</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
                { name: "Landscaping", href: "/services/landscaping" },
                { name: "Mulch & Stone", href: "/services/mulch-and-stone" },
                { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
                { name: "Snow Removal", href: "/services/snow-removal" },
                { name: "Service Areas", href: "/service-areas" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-green-700 transition-colors py-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-3">Need help right now?</p>
            <a
              href="tel:+15863278080"
              className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call (586) 327-8080
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
