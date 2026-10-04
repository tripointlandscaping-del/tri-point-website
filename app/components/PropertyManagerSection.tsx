import Link from "next/link";
import { SNOW_QUOTE_HREF, SNOW_URGENCY } from "../lib/snow";

const items = [
  { title: "Certificate of insurance on request", desc: "Proof of coverage for your files, owners, or board." },
  { title: "W-9 available", desc: "Straightforward vendor setup for management companies." },
  { title: "General liability & workers' comp", desc: "Fully insured, registered Michigan LLC." },
  { title: "Service logs after every visit", desc: "A record of when crews were on site and what was done." },
  { title: "One point of contact", desc: "One person to call for scheduling, changes, and questions." },
  { title: "24/7 storm response", desc: "We monitor forecasts around the clock and mobilize at your trigger depth." },
];

export default function PropertyManagerSection() {
  return (
    <section style={{ backgroundColor: "#0f2418" }} className="py-20 dot-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">For Property Managers</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl sm:text-4xl font-bold text-white">
              Paperwork and Peace of Mind
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md leading-relaxed">{SNOW_URGENCY}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {items.map((item) => (
            <div key={item.title} style={{ backgroundColor: "#0f2418" }} className="p-7">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#7ecb82" }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href={SNOW_QUOTE_HREF} style={{ backgroundColor: "#2C5F2E" }} className="inline-flex items-center gap-2 text-white px-8 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Get a Snow Contract Quote
          </Link>
          <a href="tel:+15863278080" className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-semibold tracking-wide hover:bg-white/10 transition-colors">
            Call (586) 327-8080
          </a>
        </div>
      </div>
    </section>
  );
}
