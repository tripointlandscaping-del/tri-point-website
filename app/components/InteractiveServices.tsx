"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Lawn Maintenance",
    slug: "lawn-maintenance",
    tagline: "Crisp edges. Perfect stripes. Every week.",
    desc: "Weekly mowing, precision edging, string trimming & full blowing — April through October. Consistent, reliable, professional.",
    img: "/photos/1.png",
  },
  {
    num: "02",
    title: "Landscaping",
    slug: "landscaping",
    tagline: "Custom design. Expert installation.",
    desc: "Full landscape design and installation — new beds, plantings, stone features, sod, and complete property transformations.",
    img: "/photos/0728A183-FBB6-4A53-AA3D-103C3E39A7EF.jpeg",
  },
  {
    num: "03",
    title: "Mulch & Stone",
    slug: "mulch-and-stone",
    tagline: "Sharp edges. Fresh color. Instant curb appeal.",
    desc: "Premium hardwood mulch and decorative stone installed with clean, spade-cut edges. Your property transformed in one visit.",
    img: "/photos/mulch1.jpeg",
  },
  {
    num: "04",
    title: "Seasonal Cleanup",
    slug: "seasonal-cleanup",
    tagline: "Spring ready. Winter ready. Always.",
    desc: "Complete spring and fall cleanups — leaf removal, perennial cutback, bed cleanup, debris hauling. We handle it all.",
    img: "/photos/217A6A02-1ABD-438C-90B1-CB49915F1D1A.jpeg",
  },
  {
    num: "05",
    title: "Snow & Ice Management",
    slug: "snow-removal",
    tagline: "Cleared before you wake up.",
    desc: "Residential plowing, salting, and de-icing across Macomb County. Seasonal contracts and per-push pricing available.",
    img: "/photos/12D7CE8B-99F8-4285-BFD8-A33E849120E0.jpeg",
  },
  {
    num: "06",
    title: "Lawn Renovations",
    slug: "lawn-renovations",
    tagline: "Thicker. Greener. Healthier turf.",
    desc: "Core aeration, overseeding, dethatching & top dressing — the science-backed way to transform a struggling lawn into a showpiece.",
    img: "/photos/Aeration-with-aerator.jpg",
  },
  {
    num: "07",
    title: "Hardscaping",
    slug: "hardscaping",
    tagline: "Patios, walkways, retaining walls & more.",
    desc: "Custom patio installations, natural stone walkways, retaining walls, fire pits, and outdoor living spaces — designed and coordinated to transform your outdoor space.",
    img: "/photos/0728A183-FBB6-4A53-AA3D-103C3E39A7EF.jpeg",
  },
  {
    num: "08",
    title: "Commercial",
    slug: "commercial",
    tagline: "Impress clients before they walk in.",
    desc: "Full-service commercial landscaping for HOAs, offices, and retail centers. Reliable, professional, on schedule — every time.",
    img: "/photos/boxwood.jpg",
  },
];

export default function InteractiveServices() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 lg:min-h-[700px]">
      {/* LEFT — service list */}
      <div className="lg:col-span-2 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5">
        {services.map((svc, i) => (
          <button
            key={svc.slug}
            onMouseEnter={() => setActive(i)}
            onTouchStart={() => setActive(i)}
            onClick={() => setActive(i)}
            className="text-left px-6 lg:px-8 py-4 lg:py-5 border-b border-white/5 group transition-all relative overflow-hidden"
            style={{
              backgroundColor: active === i ? "rgba(44,95,46,0.15)" : "transparent",
            }}
          >
            {active === i && (
              <div
                className="absolute left-0 top-0 bottom-0 w-1"
                style={{ backgroundColor: "#2C5F2E" }}
              />
            )}

            <div className="flex items-center gap-4">
              <span
                className="font-mono text-xs shrink-0 transition-colors"
                style={{ color: active === i ? "#7ecb82" : "rgba(255,255,255,0.25)" }}
              >
                {svc.num}
              </span>
              <div className="flex-1 min-w-0">
                <p
                  className="font-bold text-base transition-colors"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: active === i ? "#ffffff" : "rgba(255,255,255,0.6)",
                  }}
                >
                  {svc.title}
                </p>
                {active === i && (
                  <p className="text-white/50 text-xs mt-1 leading-relaxed line-clamp-2">
                    {svc.tagline}
                  </p>
                )}
              </div>
              <svg
                className="w-4 h-4 shrink-0 transition-all"
                style={{
                  color: active === i ? "#7ecb82" : "transparent",
                  transform: active === i ? "translateX(0)" : "translateX(-4px)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* RIGHT — photo + description panel */}
      <div className="lg:col-span-3 relative h-72 sm:h-96 lg:h-auto">
        {services.map((svc, i) => (
          <div
            key={svc.slug}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
          >
            <Image
              src={svc.img}
              alt={svc.title + " in Macomb County Michigan by Tri-Point Landscaping"}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10">
              <p className="text-green-400 text-xs font-bold uppercase tracking-widest mb-2">{svc.num} / 08</p>
              <h3
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-2xl lg:text-3xl font-bold text-white mb-2 lg:mb-3"
              >
                {svc.title}
              </h3>
              <p className="hidden sm:block text-white/65 text-sm leading-relaxed mb-4 lg:mb-6 max-w-md">{svc.desc}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/services/${svc.slug}`}
                  style={{ backgroundColor: "#2C5F2E" }}
                  className="inline-flex items-center gap-2 text-white px-5 py-2.5 lg:px-6 lg:py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Full Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 lg:px-6 lg:py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Get Estimate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
