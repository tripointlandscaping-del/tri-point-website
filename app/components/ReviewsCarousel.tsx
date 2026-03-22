"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const reviews = [
  {
    name: "Anna B.",
    text: "Outstanding job on our yard. Professional, punctual, and incredibly detailed — from the cleanup to the fresh mulch installation. This crew cares about the finished product in a way most companies don't. Highly recommend.",
    rating: 5,
    service: "Mulch & Cleanup",
  },
  {
    name: "Dave R.",
    text: "Best landscaping company in Macomb County. Period. My lawn has never looked this good. The edging work alone is something I haven't seen done this precisely anywhere. They take obvious pride in the craft.",
    rating: 5,
    service: "Lawn Maintenance",
  },
  {
    name: "Jennifer K.",
    text: "I hired Tri-Point for spring cleanup and mulch — they were incredible from start to finish. The attention to detail is something I haven't seen from other companies. Already booked them for fall. Don't look anywhere else.",
    rating: 5,
    service: "Seasonal Cleanup",
  },
  {
    name: "Noah S.",
    text: "Great cleanup and mulch installation. Hardworking, honest, and reliable. They treated my property like it was their own. Will be using Tri-Point again every season without hesitation.",
    rating: 5,
    service: "Mulch & Stone",
  },
  {
    name: "Tom H.",
    text: "Called for a quote Monday, got an estimate same day, work done by Wednesday. That kind of responsiveness is almost unheard of in this industry. And the work? Spotless. These guys are serious.",
    rating: 5,
    service: "Landscaping",
  },
  {
    name: "Lisa M.",
    text: "Reliable, honest, and genuinely proud of their work — rare qualities in any service company. My lawn has quietly become the best-looking one on the block. The neighbors ask about them constantly.",
    rating: 5,
    service: "Lawn Maintenance",
  },
  {
    name: "Marcela V.",
    text: "Quality yard cleanup and fresh mulch — hardworking and reliable team. My property looks better than it ever has. They showed up when they said they would and finished ahead of schedule. That means everything.",
    rating: 5,
    service: "Mulch & Cleanup",
  },
  {
    name: "Sarah P.",
    text: "Tri-Point completely transformed my backyard. New mulch beds, shaped hedges, crisp edging throughout — it looks like a completely different property. Absolutely worth every penny. Couldn't be more impressed.",
    rating: 5,
    service: "Landscaping",
  },
  {
    name: "Michael T.",
    text: "They showed up exactly when promised, did an incredible job on our lawn and flower beds, and left everything spotless. No shortcuts, no mess, no excuses. First class all around. 5 stars easily.",
    rating: 5,
    service: "Lawn Maintenance",
  },
  {
    name: "Chris W.",
    text: "Serious professionals. They communicate clearly, show up reliably, and the results speak for themselves. I've tried three other companies in the area — none of them come close to Tri-Point's standard.",
    rating: 5,
    service: "Snow Removal",
  },
];

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [displayed, setDisplayed] = useState(current);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback(
    (index: number, dir: "left" | "right" = "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayed(index);
        setCurrent(index);
        setIsAnimating(false);
      }, 350);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "left");
  }, [current, goTo]);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [next]);

  const pauseAuto = () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  const resumeAuto = () => { intervalRef.current = setInterval(next, 5000); };

  const r = reviews[displayed];

  return (
    <div>
      {/* Main featured review */}
      <div
        ref={containerRef}
        onMouseEnter={pauseAuto}
        onMouseLeave={resumeAuto}
        className="relative overflow-hidden"
      >
        {/* Large quote mark background */}
        <div
          style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "rgba(44,95,46,0.08)", lineHeight: 1 }}
          className="absolute -top-6 left-8 text-[120px] md:text-[220px] font-bold select-none pointer-events-none"
        >
          &ldquo;
        </div>

        <div
          className="relative z-10 transition-all duration-350"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating
              ? `translateX(${direction === "right" ? "-24px" : "24px"})`
              : "translateX(0)",
          }}
        >
          {/* Stars + service tag */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span
              style={{ backgroundColor: "rgba(44,95,46,0.2)", color: "#7ecb82" }}
              className="text-xs font-bold uppercase tracking-widest px-3 py-1"
            >
              {r.service}
            </span>
          </div>

          {/* Review text */}
          <blockquote
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.35] mb-10 max-w-4xl"
          >
            &ldquo;{r.text}&rdquo;
          </blockquote>

          {/* Reviewer */}
          <div className="flex items-center gap-4">
            <div
              style={{ backgroundColor: "#2C5F2E" }}
              className="w-14 h-14 flex items-center justify-center text-white font-bold text-lg shrink-0"
            >
              {r.name[0]}
            </div>
            <div>
              <p className="font-bold text-white text-lg">{r.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-white/40 text-xs">Google Review · Verified</span>
              </div>
            </div>
            <div className="ml-auto hidden md:flex items-center gap-2">
              <span className="text-white/25 text-sm font-mono">
                {String(displayed + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-4 mt-10">
        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="w-12 h-12 border border-white/15 flex items-center justify-center text-white hover:border-[#2C5F2E] hover:bg-[#2C5F2E]/20 transition-all shrink-0"
          aria-label="Previous review"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={next}
          className="w-12 h-12 border border-white/15 flex items-center justify-center text-white hover:border-[#2C5F2E] hover:bg-[#2C5F2E]/20 transition-all shrink-0"
          aria-label="Next review"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2 flex-1">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className="transition-all"
              style={{
                width: i === current ? "28px" : "6px",
                height: "6px",
                backgroundColor: i === current ? "#2C5F2E" : "rgba(255,255,255,0.2)",
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="https://www.google.com/search?q=Tri-Point+Landscaping+Washington+Township+MI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-xs font-semibold uppercase tracking-widest transition-colors border-b border-white/20 hover:border-white pb-0.5"
          >
            Read All Reviews
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="mt-12 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div>
          <p className="text-white/50 text-sm">Every review above is a real Google review from a real Macomb County homeowner.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://www.google.com/search?q=Tri-Point+Landscaping+Washington+Township+MI"
            target="_blank"
            rel="noopener noreferrer"
            style={{ borderColor: "#2C5F2E", color: "#7ecb82" }}
            className="inline-flex items-center gap-2 border px-6 py-3 text-sm font-semibold hover:bg-[#2C5F2E] hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            See All Google Reviews
          </a>
          <a
            href="https://g.page/r/CTWE7P6lheWxEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundColor: "#2C5F2E" }}
            className="inline-flex items-center gap-2 text-white px-6 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Leave Us a Review
          </a>
        </div>
      </div>
    </div>
  );
}
