"use client";

import { useState } from "react";
import Link from "next/link";

const serviceAreas: { name: string; slug: string; coreNames: string[]; zips: string[] }[] = [
  {
    name: "Washington Township",
    slug: "washington-township",
    coreNames: ["washington"],
    zips: ["48094", "48095"],
  },
  {
    name: "Shelby Township",
    slug: "shelby-township",
    coreNames: ["shelby"],
    zips: ["48315", "48316", "48317"],
  },
  {
    name: "Macomb Township",
    slug: "macomb-township",
    coreNames: ["macomb"],
    zips: ["48042", "48044"],
  },
  {
    name: "Romeo",
    slug: "romeo",
    coreNames: ["romeo"],
    zips: ["48065"],
  },
  {
    name: "Ray Township",
    slug: "ray-township",
    coreNames: ["ray"],
    zips: ["48096"],
  },
  {
    name: "Bruce Township",
    slug: "bruce-township",
    coreNames: ["bruce"],
    zips: ["48065", "48097"],
  },
  {
    name: "Rochester",
    slug: "rochester",
    coreNames: ["rochester"],
    zips: ["48306", "48307", "48308"],
  },
  {
    name: "Rochester Hills",
    slug: "rochester-hills",
    coreNames: ["rochester hills"],
    zips: ["48306", "48307", "48309", "48310"],
  },
];

// Levenshtein distance — measures how many edits between two strings
function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

// Strip filler words so "washingtn township mi" → "washingtn"
function normalize(val: string): string {
  return val
    .toLowerCase()
    .replace(/\b(township|twp|village|city|of|mi|michigan|,)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function findMatch(input: string): typeof serviceAreas[0] | "macomb-county" | null {
  const val = input.toLowerCase().trim();

  // Zip code exact match
  for (const area of serviceAreas) {
    if (area.zips.some((z) => val.includes(z))) return area;
  }

  // Macomb County shorthand
  if (val.includes("macomb county") || val.includes("macomb co")) return "macomb-county";

  const core = normalize(val);
  if (!core) return null;

  // Exact or substring match on core names
  for (const area of serviceAreas) {
    for (const name of area.coreNames) {
      if (core.includes(name) || name.includes(core)) return area;
    }
  }

  // Fuzzy match — allow up to 2 typos for names ≥5 chars, 1 typo for shorter
  for (const area of serviceAreas) {
    for (const name of area.coreNames) {
      const threshold = name.length >= 5 ? 2 : 1;
      // Check word by word in case they typed "shelbi township"
      const words = core.split(" ");
      for (const word of words) {
        if (word.length >= 3 && levenshtein(word, name) <= threshold) return area;
      }
    }
  }

  return null;
}

export default function ServiceAreaChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ inArea: boolean; area?: string; slug?: string } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locError, setLocError] = useState("");

  function applyMatch(searchVal: string) {
    const match = findMatch(searchVal);
    if (!match) {
      setResult({ inArea: false });
    } else if (match === "macomb-county") {
      setResult({ inArea: true, area: "Macomb County" });
    } else {
      setResult({ inArea: true, area: match.name, slug: match.slug });
    }
  }

  function checkArea() {
    if (!input.trim()) return;
    applyMatch(input);
  }

  function useMyLocation() {
    if (!navigator.geolocation) {
      setLocError("Geolocation is not supported by your browser.");
      return;
    }
    setLocating(true);
    setLocError("");
    setResult(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            { headers: { "Accept-Language": "en" } }
          );
          const data = await res.json();
          const addr = data.address || {};
          // Nominatim returns township, city, town, village — try each
          const place =
            addr.township ||
            addr.city ||
            addr.town ||
            addr.village ||
            addr.county ||
            "";
          const postcode = addr.postcode || "";
          const searchVal = `${place} ${postcode}`.trim();
          if (searchVal) {
            setInput(place || postcode);
            applyMatch(searchVal);
          } else {
            setLocError("Couldn't detect your location. Please type it manually.");
          }
        } catch {
          setLocError("Location lookup failed. Please type your city.");
        } finally {
          setLocating(false);
        }
      },
      () => {
        setLocating(false);
        setLocError("Location access denied. Please type your city or zip.");
      },
      { timeout: 10000 }
    );
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
      <p className="text-white/50 text-sm mb-4">Enter your city, township, or zip code — or use your location.</p>

      <div className="flex gap-2 mb-3">
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

      <button
        onClick={useMyLocation}
        disabled={locating}
        className="flex items-center gap-2 text-white/50 hover:text-white/80 text-xs transition-colors disabled:opacity-50"
      >
        <svg className={`w-3.5 h-3.5 shrink-0 ${locating ? "animate-pulse" : ""}`} style={{ color: "#7ecb82" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {locating ? "Detecting your location..." : "Use my location"}
      </button>
      {locError && <p className="text-red-400 text-xs mt-2">{locError}</p>}

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
                  We serve Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, Rochester & Rochester Hills.{" "}
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
