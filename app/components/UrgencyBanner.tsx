"use client";

import { useState } from "react";
import Link from "next/link";

function getBannerMessage(): string {
  const now = new Date();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate();
  const mmdd = month * 100 + day; // e.g. March 15 = 315

  if (mmdd >= 301 && mmdd < 515) return "🌿 Spring cleanup spots are filling fast — Book your free estimate now →";
  if (mmdd >= 515 && mmdd < 701) return "🌳 Landscaping slots are booking up — Get your free estimate now →";
  if (mmdd >= 701 && mmdd < 1015) return "🌿 Lawn care spots are limited — Book your free estimate now →";
  if (mmdd >= 1015 && mmdd < 1120) return "🍂 Fall cleanup bookings are filling up — Schedule your free estimate now →";
  return "❄️ Snow removal contracts are going fast — Secure your spot now →";
}

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="relative w-full py-2 px-4 text-center text-sm text-white"
      style={{ backgroundColor: "#2C5F2E" }}
    >
      <p className="leading-snug">
        <Link
          href="/contact"
          className="font-semibold underline underline-offset-2 hover:text-[#7ecb82] transition-colors"
        >
          {getBannerMessage()}
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
