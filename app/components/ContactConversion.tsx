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

const JOBBER_ORIGINS = new Set([
  "https://clienthub.getjobber.com",
  "https://secure.getjobber.com",
  "https://getjobber.com",
  "https://www.getjobber.com",
]);

function isJobberOrigin(origin: string): boolean {
  return JOBBER_ORIGINS.has(origin);
}

function isSubmitText(value: string): boolean {
  const text = value.trim().toLowerCase();
  if (!text || text.length > 160) return false;
  if (text === "close" || text === "scrolltop" || text === "recaptcha-setup") return false;
  if (/^\d+(\.\d+)?(px)?$/.test(text)) return false;
  return (
    text === "submitted" ||
    text === "work_request_submitted" ||
    text === "form_submitted" ||
    text === "request_submitted" ||
    /^work request submitted[.!]?$/.test(text) ||
    /^form submitted[.!]?$/.test(text) ||
    /^thank you[.!]?$/.test(text) ||
    /^thank you for (your |submitting )/.test(text)
  );
}

function isJobberSubmit(data: unknown): boolean {
  if (typeof data === "string") return isSubmitText(data);
  if (!data || typeof data !== "object") return false;
  const record = data as Record<string, unknown>;
  if (record.submitted === true) return true;
  const eventName = [record.type, record.event, record.name, record.action]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();
  if (!eventName) return false;
  if (record.success === true && /submit|work_request|request_submitted/.test(eventName)) return true;
  return (
    eventName === "submitted" ||
    eventName === "work_request_submitted" ||
    eventName === "form_submitted" ||
    eventName === "request_submitted"
  );
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
      if (!isJobberOrigin(event.origin)) return;
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
