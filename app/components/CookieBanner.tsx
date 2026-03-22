"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 md:bottom-6 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
      <div
        className="w-full max-w-2xl pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-5 shadow-2xl border border-white/10"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold mb-0.5">We use cookies</p>
          <p className="text-white/50 text-xs leading-relaxed">
            We use cookies to analyze site traffic and improve your experience. By accepting, you consent to our use of cookies.{" "}
            <Link href="/privacy-policy" className="text-green-400 underline hover:text-green-300">
              Privacy Policy
            </Link>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-white/50 hover:text-white text-xs border border-white/20 hover:border-white/40 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#2C5F2E" }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
