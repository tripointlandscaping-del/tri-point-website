"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SNOW_QUOTE_HREF, SNOW_URGENCY } from "../lib/snow";

const phoneIcon = (
  <svg className="w-5 h-5 shrink-0" style={{ color: "#7ecb82" }} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
  </svg>
);

const textIcon = (
  <svg className="w-5 h-5 shrink-0" style={{ color: "#7ecb82" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

function isSnowPage(pathname: string) {
  return pathname.startsWith("/services/snow-removal") || pathname === "/commercial";
}

// Sticky bottom bar. Commercial snow pages get a quote bar on every screen size;
// all other pages keep the mobile-only call/estimate bar.
// --sticky-bar-h (see globals.css) keeps the chat button and cookie banner above it.
export default function StickyMobileBar() {
  const pathname = usePathname() ?? "";

  if (isSnowPage(pathname)) {
    return (
      <>
        <style>{`:root { --sticky-bar-h: 64px; }`}</style>
        <div className="fixed bottom-0 left-0 right-0 z-40" style={{ backgroundColor: "#111111", borderTop: "1px solid rgba(126,203,130,0.25)" }}>
          <div className="max-w-7xl mx-auto flex items-stretch md:items-center md:gap-4 md:px-6 h-16">
            <p className="hidden md:block flex-1 text-white/70 text-sm">
              <span className="text-white font-semibold">❄️ {SNOW_URGENCY}</span>
            </p>
            <a href="tel:+15863278080" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-5 text-white font-semibold text-sm border-r md:border border-white/10 md:border-white/25 md:h-11 hover:bg-white/10 transition-colors">
              {phoneIcon}
              <span className="hidden sm:inline">(586) 327-8080</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a href="sms:+15863278080" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-3 md:px-5 text-white font-semibold text-sm border-r md:border border-white/10 md:border-white/25 md:h-11 hover:bg-white/10 transition-colors">
              {textIcon}
              <span>Text</span>
            </a>
            <Link
              href={SNOW_QUOTE_HREF}
              className="flex-[1.4] md:flex-none flex items-center justify-center px-3 md:px-6 text-white font-bold text-sm md:h-11 hover:opacity-90 transition-opacity text-center leading-tight"
              style={{ backgroundColor: "#2C5F2E" }}
            >
              <span className="sm:hidden">Snow Quote</span>
              <span className="hidden sm:inline">Get a Snow Contract Quote</span>
            </Link>
          </div>
        </div>
        <div className="h-16" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden" style={{ backgroundColor: "#111111" }}>
        <a
          href="tel:+15863278080"
          className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm border-r border-white/10 active:bg-white/10 transition-colors"
        >
          {phoneIcon}
          <span>(586) 327-8080</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center py-4 text-white font-bold text-sm active:opacity-80 transition-opacity"
          style={{ backgroundColor: "#2C5F2E" }}
        >
          Get Estimate
        </Link>
      </div>
      {/* Spacer so the bar doesn't cover the footer on mobile */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
