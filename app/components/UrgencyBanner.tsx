"use client";

import { useState } from "react";
import Link from "next/link";

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="relative w-full py-2 px-4 text-center text-sm text-white"
      style={{ backgroundColor: "#2C5F2E" }}
    >
      <p className="leading-snug">
        🌿 Spring spots are filling fast —{" "}
        <Link
          href="/contact"
          className="font-semibold underline underline-offset-2 hover:text-[#7ecb82] transition-colors"
        >
          Book your free estimate now →
        </Link>
      </p>

      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss banner"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
