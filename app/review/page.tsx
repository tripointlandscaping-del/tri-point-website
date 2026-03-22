import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Leave a Review | Tri-Point Landscaping",
  description: "Loved your Tri-Point Landscaping experience? Leave us a Google review — it takes 30 seconds and helps us grow.",
  alternates: { canonical: "https://www.tripointlandscaping.com/review" },
};

export default function ReviewPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-lg w-full text-center">

          {/* Stars */}
          <div className="text-4xl mb-6">⭐⭐⭐⭐⭐</div>

          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Happy with our work?
          </h1>

          <p className="text-white/55 leading-relaxed mb-10">
            A quick Google review means the world to a small local business. It takes less than 30 seconds and helps other Macomb County homeowners find us — thank you.
          </p>

          {/* Main CTA */}
          <a
            href="https://g.page/r/CTWE7P6lheWxEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-5 text-white font-bold text-lg tracking-wide hover:opacity-90 transition-opacity mb-4"
            style={{ backgroundColor: "#2C5F2E" }}
          >
            {/* Google G */}
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Leave a Google Review
          </a>

          <p className="text-white/25 text-xs">Opens Google Reviews in a new tab</p>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-white/40 text-sm mb-4">Have a concern instead? We want to make it right.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+15863278080"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white px-6 py-3 text-sm font-semibold transition-colors hover:border-white/40"
              >
                Call (586) 327-8080
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white px-6 py-3 text-sm font-semibold transition-colors hover:border-white/40"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
