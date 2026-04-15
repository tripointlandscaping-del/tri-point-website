import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Leave a Google Review — Macomb County | Tri-Point Landscaping",
  description: "Loved your Tri-Point Landscaping experience? Leave us a Google review — it takes 30 seconds and helps other Macomb County & Oakland County homeowners find us.",
  alternates: { canonical: "https://www.tripointlandscaping.com/review" },
  openGraph: {
    title: "Rate Tri-Point Landscaping | Leave a Google Review",
    description: "Leave us a Google review — it takes 30 seconds and helps other Macomb County homeowners find us.",
    url: "https://www.tripointlandscaping.com/review",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping — Leave a Review" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rate Tri-Point Landscaping | Leave a Google Review",
    description: "Leave us a Google review — it takes 30 seconds and helps other Macomb County homeowners find us.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const steps = [
  { number: "1", text: "Click the button below to open Google Reviews" },
  { number: "2", text: "Sign in to your Google account if prompted" },
  { number: "3", text: "Select your star rating (we hope it's 5!)" },
  { number: "4", text: "Write a few words about your experience" },
  { number: "5", text: "Hit Post — done in under a minute" },
];

const prompts = [
  "Was the crew professional and on time?",
  "Did we do a great job on your lawn or landscape?",
  "Would you recommend us to a neighbor?",
  "Did we show up when we said we would?",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
    { "@type": "ListItem", position: 2, name: "Leave a Review", item: "https://www.tripointlandscaping.com/review" },
  ],
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tri-Point Landscaping LLC",
  url: "https://www.tripointlandscaping.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "10",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function ReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Navbar />
      <main style={{ backgroundColor: "#0d0d0d" }}>

        {/* Hero — two clear paths */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-6">⭐⭐⭐⭐⭐</div>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl sm:text-5xl font-bold text-white mb-5"
            >
              Review Tri-Point Landscaping — Macomb County, MI
            </h1>
            <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Tell us how we did. Choose the option that fits your experience below.
            </p>

            {/* Two-path cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">

              {/* Happy path */}
              <div className="border border-white/10 p-8 flex flex-col">
                <div className="text-3xl mb-4">😊</div>
                <h2 className="text-xl font-bold text-white mb-2">Great Experience</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                  We&apos;re glad to hear it! A quick Google review takes less than 60 seconds and helps other Macomb County homeowners find us.
                </p>
                <a
                  href="https://g.page/r/CTWE7P6lheWxEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 text-white font-bold text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#2C5F2E" }}
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Leave a Google Review
                </a>
              </div>

              {/* Unhappy path */}
              <div className="border border-white/10 p-8 flex flex-col" style={{ borderColor: "rgba(239,68,68,0.3)", backgroundColor: "rgba(239,68,68,0.05)" }}>
                <div className="text-3xl mb-4">😟</div>
                <h2 className="text-xl font-bold text-white mb-2">Something Wasn&apos;t Right</h2>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                  We want to make it right before anything else. Please reach out directly — we&apos;re a small local business and we take every job seriously.
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="tel:+15863278080"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 py-3 font-bold text-sm hover:bg-red-50 transition-colors"
                  >
                    Call (586) 327-8080
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/70 py-3 font-semibold text-sm hover:text-white hover:border-white/40 transition-colors"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 px-6" style={{ backgroundColor: "#111111" }}>
          <div className="max-w-2xl mx-auto">
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-2xl font-bold text-white text-center mb-10"
            >
              It Takes Less Than 60 Seconds
            </h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center gap-5">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ backgroundColor: "#2C5F2E" }}
                  >
                    {step.number}
                  </div>
                  <p className="text-white/70 text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Writing prompts */}
        <section className="py-16 px-6" style={{ backgroundColor: "#0d0d0d" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-2xl font-bold text-white mb-4"
            >
              Not Sure What to Write?
            </h2>
            <p className="text-white/40 text-sm mb-8">Try answering one of these:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {prompts.map((prompt) => (
                <div key={prompt} className="border border-white/10 px-5 py-4 text-left">
                  <p className="text-white/60 text-sm leading-relaxed">&ldquo;{prompt}&rdquo;</p>
                </div>
              ))}
            </div>
            <a
              href="https://g.page/r/CTWE7P6lheWxEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-3 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Open Google Reviews →
            </a>
          </div>
        </section>


      </main>
      <Footer />
    </>
  );
}
