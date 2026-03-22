"use client";

import { useEffect, useRef, useState } from "react";

export default function JobberForm() {
  const loaded = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Load Jobber CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css";
    document.head.appendChild(link);

    // Load Jobber script
    const script = document.createElement("script");
    script.src = "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js";
    script.setAttribute("clienthub_id", "ba649197-6964-43ad-a933-86b6459afbf6-1714768");
    script.setAttribute(
      "form_url",
      "https://clienthub.getjobber.com/client_hubs/ba649197-6964-43ad-a933-86b6459afbf6/public/work_request/embedded_work_request_form?form_id=1714768"
    );
    script.async = true;
    script.onload = () => {
      setTimeout(() => setIsLoaded(true), 1500);
    };
    document.body.appendChild(script);

    return () => {
      try { document.head.removeChild(link); } catch {}
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return (
    <>
      <style>{`
        #ba649197-6964-43ad-a933-86b6459afbf6-1714768 {
          width: 100% !important;
          min-width: 100% !important;
        }
        #ba649197-6964-43ad-a933-86b6459afbf6-1714768 iframe {
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          border: none !important;
        }
      `}</style>

      {/* Loading skeleton */}
      {!isLoaded && (
        <div className="w-full space-y-4 animate-pulse" style={{ minHeight: "640px" }}>
          <div className="h-4 bg-white/10 rounded w-1/3" />
          <div className="h-12 bg-white/10 rounded" />
          <div className="h-4 bg-white/10 rounded w-1/3 mt-6" />
          <div className="h-12 bg-white/10 rounded" />
          <div className="h-4 bg-white/10 rounded w-1/2 mt-6" />
          <div className="h-12 bg-white/10 rounded" />
          <div className="h-4 bg-white/10 rounded w-1/3 mt-6" />
          <div className="h-32 bg-white/10 rounded" />
          <div className="h-12 bg-white/20 rounded w-1/3 mt-4" />
          <p className="text-white/40 text-sm text-center pt-2">Loading your estimate form...</p>
        </div>
      )}

      <div
        id="ba649197-6964-43ad-a933-86b6459afbf6-1714768"
        style={{ width: "100%", minHeight: isLoaded ? "640px" : "0px", opacity: isLoaded ? 1 : 0, transition: "opacity 0.4s ease" }}
      />
    </>
  );
}
