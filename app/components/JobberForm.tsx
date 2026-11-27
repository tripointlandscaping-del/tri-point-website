"use client";

import { useEffect, useRef, useState } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "../lib/business";

const CLIENT_HUB_ID = "ba649197-6964-43ad-a933-86b6459afbf6-1714768";
const FORM_URL =
  "https://clienthub.getjobber.com/client_hubs/ba649197-6964-43ad-a933-86b6459afbf6/public/work_request/embedded_work_request_form?form_id=1714768";

function DirectContact({ prominent }: { prominent: boolean }) {
  return (
    <div className={prominent ? "border border-gray-200 bg-[#f5f0e8] p-6" : "pt-2"}>
      {prominent ? (
        <>
          <p className="font-bold text-gray-900 mb-1">The form is taking too long</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            You can still request an estimate. Call, text, or email, or open the request form in a new tab.
          </p>
        </>
      ) : (
        <p className="text-gray-500 text-sm mb-3">Prefer not to wait on the form?</p>
      )}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2">
        <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90" style={{ backgroundColor: "#2C5F2E" }}>
          Call {PHONE_DISPLAY}
        </a>
        <a href={`sms:${PHONE_TEL}`} className="inline-flex items-center justify-center border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-green-700">
          Text {PHONE_DISPLAY}
        </a>
        <a href={`mailto:${EMAIL}`} className="inline-flex items-center justify-center border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-green-700">
          Email us
        </a>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:border-green-700">
          Open the request form
        </a>
      </div>
    </div>
  );
}

export default function JobberForm() {
  const loaded = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    let cancelled = false;
    const markReady = () => {
      if (!cancelled) setStatus("ready");
    };
    const markFallback = () => {
      if (!cancelled) setStatus((current) => (current === "ready" ? current : "fallback"));
    };

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", CLIENT_HUB_ID);
    script.setAttribute("form_url", FORM_URL);
    script.async = true;
    script.onload = () => {
      window.setTimeout(markReady, 1500);
    };
    script.onerror = markFallback;
    document.body.appendChild(script);

    const timer = window.setTimeout(markFallback, 8000);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      try { document.head.removeChild(link); } catch {}
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  const showSkeleton = status === "loading";

  return (
    <>
      <style>{`
        #${CLIENT_HUB_ID} {
          width: 100% !important;
          min-width: 100% !important;
        }
        #${CLIENT_HUB_ID} iframe {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          border: none !important;
        }
      `}</style>

      <noscript>
        <DirectContact prominent />
      </noscript>

      {showSkeleton && (
        <div className="w-full space-y-4 animate-pulse" style={{ minHeight: "280px" }}>
          <div className="h-4 bg-gray-200 rounded w-1/3" />
          <div className="h-12 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-1/3 mt-6" />
          <div className="h-12 bg-gray-200 rounded" />
          <div className="h-4 bg-gray-200 rounded w-1/2 mt-6" />
          <div className="h-12 bg-gray-200 rounded" />
          <p className="text-gray-400 text-sm text-center pt-2">Loading your estimate form...</p>
        </div>
      )}

      {status === "fallback" && <DirectContact prominent />}

      <div
        id={CLIENT_HUB_ID}
        style={{
          width: "100%",
          minHeight: status === "ready" ? "640px" : "0px",
          opacity: status === "ready" ? 1 : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {status !== "fallback" && <DirectContact prominent={false} />}
    </>
  );
}
