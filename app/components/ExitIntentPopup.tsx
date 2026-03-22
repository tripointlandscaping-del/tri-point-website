"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SESSION_KEY = "exitPopupShown";

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    let triggered = false;

    const show = () => {
      if (triggered) return;
      triggered = true;
      sessionStorage.setItem(SESSION_KEY, "1");
      setVisible(true);
    };

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (isMobile) {
      // Mobile: trigger after 45 seconds
      const timer = setTimeout(show, 45000);
      return () => clearTimeout(timer);
    } else {
      // Desktop: trigger when mouse leaves toward browser chrome (top of window)
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 5) {
          show();
        }
      };
      document.addEventListener("mouseleave", handleMouseLeave);
      return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }
  }, []);

  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md bg-white p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Green accent bar */}
        <div className="h-1 w-12 mb-6" style={{ backgroundColor: "#2C5F2E" }} />

        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Before You Go...
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          Get a free estimate — no obligation, same-day response.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/contact"
            onClick={dismiss}
            className="flex-1 text-center py-3 px-5 text-white text-sm font-bold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#2C5F2E" }}
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:+15863278080"
            onClick={dismiss}
            className="flex-1 text-center py-3 px-5 text-sm font-bold border-2 transition-colors hover:bg-gray-50"
            style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
