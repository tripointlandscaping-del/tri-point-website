"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO;
const ADS_SEND_TO = SEND_TO && /^AW-\d+\/[\w-]+$/.test(SEND_TO) ? SEND_TO : undefined;

function track(method: "call" | "text" | "form") {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "quote_request", {
    method,
    event_category: "lead",
  });
  if (ADS_SEND_TO) {
    window.gtag("event", "conversion", { send_to: ADS_SEND_TO });
  }
}

function isJobberSubmit(data: unknown): boolean {
  if (typeof data === "string") {
    const value = data.trim().toLowerCase();
    if (!value || value === "close" || value === "scrolltop" || value === "recaptcha-setup") return false;
    if (/^\d+(\.\d+)?(px)?$/.test(value)) return false;
    return value.includes("submitted") || value.includes("success") || value.includes("thank");
  }
  if (!data || typeof data !== "object") return false;
  const blob = JSON.stringify(data).toLowerCase();
  return blob.includes("submitted") || blob.includes('"success":true') || blob.includes("thank you");
}

// Fires quote_request on a real call, text, or (when Jobber reports one) form
// submit. Visiting /contact does not count.
export default function ContactConversion() {
  useEffect(() => {
    const lastFired: Record<string, number> = {};
    const fire = (method: "call" | "text" | "form") => {
      const now = Date.now();
      if (lastFired[method] && now - lastFired[method] < 2000) return;
      lastFired[method] = now;
      track(method);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) fire("call");
      else if (href.startsWith("sms:")) fire("text");
    };

    const onMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("getjobber.com")) return;
      if (isJobberSubmit(event.data)) fire("form");
    };

    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  return null;
}
