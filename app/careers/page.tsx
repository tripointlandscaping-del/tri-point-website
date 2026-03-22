import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobberCareersForm from "../components/JobberCareersForm";

export const metadata: Metadata = {
  title: "Join the Team | Tri-Point Landscaping | Macomb County, MI",
  description:
    "Join the Tri-Point Landscaping team in Macomb County, MI. We're hiring crew members for lawn care, landscaping, and snow removal. Apply online today.",
  alternates: { canonical: "https://www.tripointlandscaping.com/careers" },
};

const perks = [
  { emoji: "💰", title: "Competitive Pay", desc: "Paid based on experience and performance. We reward hard workers." },
  { emoji: "📅", title: "Consistent Schedule", desc: "Full-time and part-time positions available. Know your hours in advance." },
  { emoji: "🌿", title: "Outdoor Work", desc: "No desk job here. Work outside across Macomb County all season long." },
  { emoji: "🤝", title: "Team Environment", desc: "Small crew, big impact. We look out for each other on every job." },
  { emoji: "📈", title: "Room to Grow", desc: "We're growing fast. Opportunities to take on more responsibility as we expand." },
  { emoji: "🏆", title: "Be Part of Something", desc: "Join a 5.0★ rated company that takes pride in every property we touch." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="py-24 px-6 text-center" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7ecb82" }}>
            Now Hiring · Macomb County, MI
          </p>
          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Join the <span style={{ color: "#7ecb82" }}>Tri-Point</span> Team
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
            We're a fast-growing, 5.0★ rated landscaping company based in Washington Township. If you take pride in your work and want to be part of a team that does things the right way — we want to hear from you.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f9f7f4" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#2C5F2E" }}>
              Why Work With Us
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl sm:text-4xl font-bold text-gray-900"
            >
              More Than Just a Job
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-white p-6 border border-gray-100">
                <div className="text-3xl mb-4">{perk.emoji}</div>
                <h3 className="font-bold text-gray-900 mb-2">{perk.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we're looking for */}
      <section className="py-20 px-6" style={{ backgroundColor: "#2C5F2E" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              What We Look For
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Experience helps but attitude is everything. We can teach the skills — we can't teach work ethic.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              "Strong work ethic and reliability",
              "Ability to work outdoors in all weather",
              "Team player who communicates well",
              "Takes pride in quality work",
              "Valid driver's license (preferred)",
              "Landscaping experience (a plus, not required)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/85 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#7ecb82" }}>
              Apply Now
            </p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Ready to Apply?
            </h2>
            <p className="text-white/50">
              Fill out the form below and we&apos;ll be in touch. Questions? Call us at{" "}
              <a href="tel:+15863278080" className="text-green-400 hover:text-green-300">(586) 327-8080</a>.
            </p>
          </div>
          <JobberCareersForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
