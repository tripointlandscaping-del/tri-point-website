"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isSnowPath, SNOW_QUOTE_HREF } from "../lib/snow";

const LAWN_SIGNUP_OFFER =
  "First mow free when you sign up for weekly 2027 lawn care by April 1.";

function getBanner(isSnowPage: boolean): { href: string; text: string; finePrint?: string } {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const mmdd = month * 100 + day;

  if (mmdd >= 401 && mmdd < 515) {
    return { href: "/contact", text: "🌿 Spring cleanup spots are filling fast. Book your free estimate now →" };
  }
  if (mmdd >= 515 && mmdd < 701) {
    return { href: "/contact", text: "🌳 Landscaping slots are booking up. Get your free estimate now →" };
  }
  if (mmdd >= 701 && mmdd < 1001) {
    return { href: "/contact", text: "🌿 Lawn care spots are limited. Book your free estimate now →" };
  }

  // October 1 through March 31. Spring starts April 1.
  if (isSnowPage) {
    return {
      href: SNOW_QUOTE_HREF,
      text: "❄️ Now booking 2026/27 commercial snow contracts. Limited route capacity. Get a quote →",
    };
  }

  return {
    href: "/contact",
    text: LAWN_SIGNUP_OFFER,
    finePrint: "Applies only to a full-season weekly mowing sign-up.",
  };
}

export default function UrgencyBanner() {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname() ?? "";
  const banner = getBanner(isSnowPath(pathname));

  if (dismissed) return null;

  return (
    <div
      className="relative w-full py-2 px-10 text-center text-sm text-white"
      style={{ backgroundColor: "#2C5F2E" }}
    >
      <p className="leading-snug">
        <Link
          href={banner.href}
          className="font-semibold underline underline-offset-2 hover:text-[#7ecb82] transition-colors"
        >
          {banner.text}
        </Link>
      </p>
      {banner.finePrint ? (
        <p className="mt-0.5 text-xs font-normal leading-snug text-white/90">{banner.finePrint}</p>
      ) : null}

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
