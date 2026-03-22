"use client";

import { useState } from "react";
import Link from "next/link";

const serviceAreas: { name: string; slug: string; keywords: string[]; zips: string[] }[] = [
  {
    name: "Washington Township",
    slug: "washington-township",
    keywords: ["washington township", "washington twp", "washington, mi"],
    zips: ["48094", "48095"],
  },
  {
    name: "Shelby Township",
    slug: "shelby-township",
    keywords: ["shelby township", "shelby twp", "shelby, mi"],
    zips: ["48315", "48316", "48317"],
  },
  {
    name: "Macomb Township",
    slug: "macomb-township",
    keywords: ["macomb township", "macomb twp", "macomb, mi"],
    zips: ["48042", "48044"],
  },
  {
    name: "Romeo",
    slug: "romeo",
    keywords: ["romeo", "romeo, mi", "village of romeo"],
    zips: ["48065"],
  },
  {
    name: "Ray Township",
    slug: "ray-township",
    keywords: ["ray township", "ray twp", "ray, mi"],
    zips: ["48096"],
  },
  {
    name: "Bruce Township",
    slug: "bruce-township",
    keywords: ["bruce township", "bruce twp", "bruce, mi"],
    zips: ["48065", "48097"],
  },
];

export default function ServiceAreaChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ inArea: boolean; area?: string; slug?: string } | null>(null);

  function checkArea() {
    const val = input.toLowerCase().trim();
    if (!val) return;

    for (const area of serviceAreas) {
      if (area.keywords.some((k) => val.includes(k))) {
        setResult({ inArea: true, area: area.name, slug: area.slug });
        return;
      }
      if (area.zips.some((z) => val.includes(z))) {
        setResult({ inArea: true, area: area.name, slug: area.slug });
        return;
      }
    }

    // Check for general Macomb County terms
    if (val.includes("macomb county") || val.includes("macomb co")) {
      setResult({ inArea: true, area: "Macomb County" });
      return;
    }

    setResult({ inArea: false });
  }

  return (
    <div style={{ backgroundColor: "#111111", borderColor: "rgba(44,95,46,0.3)" }} className="border p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div style={{ backgroundColor: "#2C5F2E" }} className="w-8 h-8 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-lg font-bold text-white">
          Are You in Our Service Area?
        </h3>
      </div>
      <p className="text-white/50 text-sm mb-4">Enter your city, township, or zip code to find out.</p>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => { setInput(e.target.value); setResult(null); }}
          onKeyDown={(e) => e.key === "Enter" && checkArea()}
          placeholder="e.g. Washington Township or 48094"
          className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-green-600 transition-colors"
          style={{ fontSize: "16px" }}
        />
        <button
          onClick={checkArea}
          style={{ backgroundColor: "#2C5F2E" }}
          className="px-5 py-3 text-white text-sm font-semibold hover:opacity-90 transition-opacity shrink-0"
        >
          Check
        </button>
      </div>

      {result && (
        <div className={`mt-4 p-4 flex items-start gap-3 ${result.inArea ? "bg-green-900/30 border border-green-700/40" : "bg-red-900/20 border border-red-700/30"}`}>
          {result.inArea ? (
            <>
              <svg className="w-5 h-5 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-green-300 font-semibold text-sm">
                  Yes! We serve {result.area}.
                </p>
                <p className="text-white/50 text-xs mt-1">
                  {result.slug ? (
                    <>Learn more about our services in <Link href={`/service-areas/${result.slug}`} className="text-green-400 underline hover:text-green-300">{result.area}</Link>, or get your free estimate below.</>
                  ) : (
                    "Get your free estimate using the form below."
                  )}
                </p>
              </div>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <div>
                <p className="text-red-300 font-semibold text-sm">We don&apos;t currently serve that area.</p>
                <p className="text-white/50 text-xs mt-1">
                  We serve Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township & Bruce Township.{" "}
                  <a href="tel:+15863278080" className="text-green-400 underline hover:text-green-300">Call us</a> to confirm — we may be able to help.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
