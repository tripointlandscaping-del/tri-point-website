"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { snowGuideSlugs } from "../lib/snow";

// One-time (per browser session) snow + plow animation on commercial snow pages.
// Fixed to the viewport, never intercepts clicks, ends on any click/tap/keypress,
// and is skipped entirely for prefers-reduced-motion. No libraries: CSS transforms
// for the snow, one requestAnimationFrame loop for the plow.

const SESSION_KEY = "tp-snowplow-played";
const SNOW_MS = 3200; // snowfall + bank build-up
const PLOW_START_MS = 3000;
const PLOW_MS = 2700; // plow crosses the screen
const TOTAL_MS = PLOW_START_MS + PLOW_MS + 300;

function isSnowPath(pathname: string) {
  if (pathname.startsWith("/services/snow-removal")) return true;
  const blogSlug = pathname.startsWith("/blog/") ? pathname.slice(6) : "";
  return snowGuideSlugs.includes(blogSlug);
}

function alreadyPlayed() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // storage unavailable: the animation may replay, which is harmless
  }
}

type Flake = { left: number; size: number; delay: number; duration: number; drift: number; sway: number; opacity: number; blur: boolean };
type Salt = { dx: number; dy: number; size: number; delay: number; duration: number };

function makeFlakes(count: number): Flake[] {
  return Array.from({ length: count }, () => {
    const size = Math.random() < 0.15 ? 7 + Math.random() * 3 : 2 + Math.random() * 4.5;
    return {
      left: Math.random() * 104 - 2,
      size,
      delay: Math.random() * 1700,
      // bigger flakes fall a little faster, like a real storm
      duration: 2600 - size * 90 + Math.random() * 700,
      drift: (Math.random() - 0.5) * 90,
      sway: (Math.random() - 0.5) * 30,
      opacity: 0.55 + Math.random() * 0.45,
      blur: size > 7,
    };
  });
}

function makeSalt(count: number): Salt[] {
  return Array.from({ length: count }, () => ({
    dx: -(30 + Math.random() * 90),
    dy: 4 + Math.random() * 26,
    size: 2 + Math.random() * 2.5,
    delay: Math.random() * 600,
    duration: 420 + Math.random() * 260,
  }));
}

function Wheel({ cx }: { cx: number }) {
  return (
    <g>
      <circle cx={cx} cy={108} r={17} fill="#141414" />
      {/* tread blocks */}
      <circle cx={cx} cy={108} r={15.5} fill="none" stroke="#2e2e2e" strokeWidth={3} strokeDasharray="3.2 2.4" className="sp-spin" />
      <circle cx={cx} cy={108} r={8.5} fill="#8f989d" />
      <circle cx={cx} cy={108} r={6.5} fill="#6f787d" />
      <g className="sp-spin">
        {[0, 72, 144, 216, 288].map((a) => (
          <circle key={a} cx={cx + 4 * Math.cos((a * Math.PI) / 180)} cy={108 + 4 * Math.sin((a * Math.PI) / 180)} r={1.1} fill="#d6dbde" />
        ))}
      </g>
      <circle cx={cx} cy={108} r={2} fill="#3a3a3a" />
    </g>
  );
}

// Original illustration of a commercial plow truck with a V-box salt spreader (no real brands).
function PlowTruck() {
  return (
    <svg viewBox="0 0 300 130" className="w-full h-full" style={{ overflow: "visible" }} aria-hidden="true">
      <defs>
        <linearGradient id="sp-steel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#dfe5e8" />
          <stop offset="0.5" stopColor="#a9b4ba" />
          <stop offset="1" stopColor="#6c777d" />
        </linearGradient>
        <linearGradient id="sp-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d9eef6" />
          <stop offset="1" stopColor="#8fb7c7" />
        </linearGradient>
        <linearGradient id="sp-beam" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff7d6" stopOpacity="0.75" />
          <stop offset="1" stopColor="#fff7d6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* headlight beams (drawn first so the blade sits in front) */}
      <polygon points="250,52 360,36 360,74" fill="url(#sp-beam)" />
      <polygon points="249,76 350,68 350,98" fill="url(#sp-beam)" opacity="0.7" />

      {/* exhaust stack */}
      <rect x="118" y="4" width="7" height="60" rx="2" fill="#b9c2c7" />
      <rect x="117" y="2" width="9" height="5" rx="1.5" fill="#3a3a3a" />
      <rect x="119" y="20" width="5" height="10" fill="#8d979c" />

      {/* V-box salt spreader on the bed */}
      <polygon points="14,24 116,24 106,60 24,60" fill="url(#sp-steel)" stroke="#59646a" strokeWidth="1.2" />
      <rect x="12" y="20" width="106" height="6" rx="1.5" fill="#4a555b" />
      {[34, 54, 74, 94].map((x) => (
        <line key={x} x1={x} y1={26} x2={x - (x - 65) * 0.12} y2={60} stroke="#7c878d" strokeWidth="1.2" />
      ))}

      {/* bed */}
      <rect x="10" y="58" width="112" height="38" rx="2" fill="#2C5F2E" />
      <rect x="10" y="58" width="112" height="6" fill="#24502a" />
      <rect x="10" y="88" width="112" height="3" fill="#1d4222" />

      {/* rear spinner throwing salt */}
      <rect x="8" y="90" width="7" height="12" fill="#3d464b" />
      <ellipse cx="11" cy="104" rx="9" ry="2.6" fill="#2a2a2a" className="sp-spinner" />

      {/* cab */}
      <path d="M126 98 V38 Q126 30 134 30 H186 Q193 30 197 37 L212 64 V98 Z" fill="#2C5F2E" />
      <polygon points="134,37 183,37 197,62 134,62" fill="url(#sp-glass)" stroke="#1d4222" strokeWidth="1.5" />
      <line x1="160" y1="37" x2="160" y2="62" stroke="#1d4222" strokeWidth="3" />
      <polygon points="138,40 150,40 140,58 136,58" fill="#ffffff" opacity="0.35" />
      {/* door with company name */}
      <rect x="132" y="64" width="64" height="31" rx="2" fill="none" stroke="#1d4222" strokeWidth="1.2" />
      <rect x="138" y="68" width="8" height="2.5" rx="1" fill="#1d4222" />
      <text x="166" y="86" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="12.5" fill="#ffffff" letterSpacing="0.2">
        Tri-Point
      </text>
      <rect x="142" y="89" width="48" height="1.6" fill="#7ecb82" />
      {/* side mirror */}
      <line x1="197" y1="44" x2="207" y2="42" stroke="#1e1e1e" strokeWidth="2" />
      <rect x="205" y="34" width="6" height="15" rx="1.5" fill="#1e1e1e" />
      {/* amber light bar */}
      <rect x="134" y="25" width="54" height="5" rx="1.5" fill="#222222" />
      <rect x="136" y="19" width="23" height="7" rx="2" fill="#f5a300" className="sp-amber-a" />
      <rect x="163" y="19" width="23" height="7" rx="2" fill="#f5a300" className="sp-amber-b" />

      {/* hood and grille */}
      <path d="M210 62 H238 Q246 62 247 70 V98 H210 Z" fill="#2C5F2E" />
      <rect x="210" y="62" width="34" height="5" fill="#24502a" />
      <rect x="242" y="70" width="7" height="26" rx="1" fill="#1b1b1b" />
      {[74, 79, 84, 89].map((y) => (
        <line key={y} x1="243" y1={y} x2="248" y2={y} stroke="#4a4a4a" strokeWidth="1" />
      ))}
      <rect x="243" y="72" width="6" height="6" rx="1" fill="#fff4c2" />
      {/* plow light bar above the hood */}
      <line x1="232" y1="62" x2="240" y2="50" stroke="#2a2a2a" strokeWidth="2.5" />
      <rect x="238" y="47" width="13" height="7" rx="2" fill="#2a2a2a" />
      <rect x="246" y="48" width="5" height="5" rx="1" fill="#fff4c2" />

      {/* chassis and bumper */}
      <rect x="8" y="96" width="240" height="8" rx="2" fill="#151515" />
      <rect x="244" y="92" width="18" height="9" rx="1.5" fill="#2b2b2b" />
      <line x1="248" y1="100" x2="266" y2="108" stroke="#2b2b2b" strokeWidth="4" />

      {/* mud flaps */}
      <rect x="20" y="100" width="5" height="22" rx="1" fill="#0d0d0d" />
      <rect x="194" y="100" width="4" height="16" rx="1" fill="#0d0d0d" />

      {/* chunky treaded tires */}
      <Wheel cx={44} />
      <Wheel cx={84} />
      <Wheel cx={222} />

      {/* angled steel plow blade with rubber cutting edge */}
      <path d="M258 44 L278 40 Q298 76 292 116 L271 120 Q279 82 258 44 Z" fill="url(#sp-steel)" stroke="#4f5a60" strokeWidth="1.2" />
      {[62, 80, 98].map((y) => (
        <line key={y} x1={264 + (y - 44) * 0.18} y1={y} x2={284 + (y - 44) * 0.1} y2={y - 3} stroke="#7d888e" strokeWidth="1.2" />
      ))}
      <path d="M258 44 L278 40 L279 45 L260 49 Z" fill="#7ecb82" />
      <path d="M271 117 L293 113 L295 125 L272 128 Z" fill="#111111" />
    </svg>
  );
}

export default function SnowPlowIntro() {
  const pathname = usePathname() ?? "";
  const [active, setActive] = useState(false);
  const [flakes, setFlakes] = useState<Flake[]>([]);
  const [salt, setSalt] = useState<Salt[]>([]);
  const plowRef = useRef<HTMLDivElement>(null);
  const bankRef = useRef<HTMLDivElement>(null);
  const moundRef = useRef<HTMLDivElement>(null);

  // Decide whether to play (client only, after hydration, so there's no layout shift).
  useEffect(() => {
    if (!isSnowPath(pathname) || alreadyPlayed()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Start on the next frame so the page paints first.
    const frame = requestAnimationFrame(() => {
      markPlayed();
      setFlakes(makeFlakes(window.innerWidth < 640 ? 60 : 100));
      setSalt(makeSalt(window.innerWidth < 640 ? 12 : 18));
      setActive(true);
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Run the timeline and listen for anything that should end it early.
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const stop = () => setActive(false);

    const tick = (now: number) => {
      const elapsed = now - start;
      const plow = plowRef.current;
      const bank = bankRef.current;
      if (plow && bank && elapsed >= PLOW_START_MS) {
        const progress = Math.min((elapsed - PLOW_START_MS) / PLOW_MS, 1);
        const width = plow.offsetWidth;
        const x = -width + progress * (window.innerWidth + width * 1.6);
        plow.style.transform = `translate3d(${x}px, 0, 0)`;
        // Clear the bank right behind the blade.
        bank.style.clipPath = `inset(0 0 0 ${Math.max(0, x + width * 0.95)}px)`;
        if (moundRef.current) moundRef.current.style.transform = `scale(${0.4 + progress * 0.9})`;
      }
      if (elapsed >= TOTAL_MS) return stop();
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    // Capture phase + passive: we never cancel the event, so the click/tap still lands.
    const opts = { capture: true, passive: true } as const;
    window.addEventListener("pointerdown", stop, opts);
    window.addEventListener("keydown", stop, opts);
    window.addEventListener("touchstart", stop, opts);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointerdown", stop, opts);
      window.removeEventListener("keydown", stop, opts);
      window.removeEventListener("touchstart", stop, opts);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="snowplow-overlay fixed left-0 right-0 top-0 z-[60] overflow-hidden pointer-events-none"
      style={{ bottom: "var(--sticky-bar-h)" }}
    >
      {/* falling snow: each column spans the overlay and slides down so its flake lands on the bank */}
      {flakes.map((f, i) => (
        <div
          key={i}
          className="snowplow-flake-col absolute top-0 h-full"
          style={{ left: `${f.left}%`, animationDuration: `${f.duration}ms`, animationDelay: `${f.delay}ms`, "--drift": `${f.drift}px`, "--sway": `${f.sway}px` } as React.CSSProperties}
        >
          <span
            className="absolute bottom-0 rounded-full bg-white"
            style={{
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              filter: f.blur ? "blur(1px)" : undefined,
              boxShadow: "0 0 0 1px rgba(110,135,150,0.3), 0 1px 3px rgba(0,0,0,0.18)",
            }}
          />
        </div>
      ))}

      {/* snow bank along the bottom of the screen */}
      <div ref={bankRef} className="absolute left-0 right-0 bottom-0 h-7 sm:h-9">
        <div className="snowplow-bank w-full h-full" style={{ filter: "drop-shadow(0 -1px 2px rgba(60,80,95,0.35))" }}>
          <svg viewBox="0 0 400 40" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 40 V22 Q20 10 45 18 T95 16 T150 20 T205 13 T260 19 T320 14 T370 20 T400 15 V40 Z" fill="#ffffff" stroke="#c9d6dd" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path d="M0 40 V30 Q60 24 120 30 T240 28 T400 30 V40 Z" fill="#dfe8ed" />
          </svg>
        </div>
      </div>

      {/* plow truck, pushing a growing mound of snow off the right side and spreading salt behind */}
      <div ref={plowRef} className="absolute bottom-0 left-0 w-[200px] h-[87px] sm:w-[300px] sm:h-[130px]" style={{ transform: "translate3d(-120%, 0, 0)" }}>
        {salt.map((s, i) => (
          <span
            key={i}
            className="snowplow-salt absolute rounded-full"
            style={{
              left: "3%",
              bottom: "18%",
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}ms`,
              animationDuration: `${s.duration}ms`,
              "--dx": `${s.dx}px`,
              "--dy": `${s.dy}px`,
            } as React.CSSProperties}
          />
        ))}
        <div
          ref={moundRef}
          className="absolute bottom-0 right-[-24px] sm:right-[-34px] w-[46px] h-[30px] sm:w-[66px] sm:h-[42px] rounded-t-full bg-white"
          style={{ transformOrigin: "left bottom", transform: "scale(0.4)", boxShadow: "inset -4px -2px 0 #dfe8ed, 0 0 0 1px #c9d6dd" }}
        />
        <PlowTruck />
      </div>

      <style>{`
        .snowplow-flake-col { transform: translateY(-100%); animation-name: snowplow-fall; animation-timing-function: linear; animation-fill-mode: forwards; }
        @keyframes snowplow-fall {
          0% { transform: translate3d(0, -100%, 0); opacity: 1; }
          50% { transform: translate3d(calc(var(--drift) * 0.5 + var(--sway)), -50%, 0); }
          92% { opacity: 1; }
          100% { transform: translate3d(var(--drift), 0, 0); opacity: 0; }
        }
        .snowplow-bank { transform: scaleY(0); transform-origin: bottom; animation: snowplow-bank ${SNOW_MS - 600}ms ease-out 600ms forwards; }
        @keyframes snowplow-bank { to { transform: scaleY(1); } }
        .snowplow-overlay { animation: snowplow-fade 300ms ease-in ${TOTAL_MS - 300}ms forwards; }
        @keyframes snowplow-fade { to { opacity: 0; } }
        .snowplow-salt { background: #f4f6f7; box-shadow: 0 0 0 1px rgba(90,100,110,0.35); opacity: 0; animation-name: snowplow-salt; animation-iteration-count: infinite; animation-timing-function: ease-out; }
        @keyframes snowplow-salt {
          0% { transform: translate3d(0, 0, 0); opacity: 0.95; }
          100% { transform: translate3d(var(--dx), var(--dy), 0); opacity: 0; }
        }
        .sp-amber-a { animation: sp-blink 0.6s steps(1) infinite; }
        .sp-amber-b { animation: sp-blink 0.6s steps(1) 0.3s infinite; }
        @keyframes sp-blink { 0% { opacity: 1; } 50% { opacity: 0.2; } }
        .sp-spin { transform-box: fill-box; transform-origin: center; animation: sp-spin 0.45s linear infinite; }
        @keyframes sp-spin { to { transform: rotate(360deg); } }
        .sp-spinner { transform-box: fill-box; transform-origin: center; animation: sp-spinner 0.25s linear infinite; }
        @keyframes sp-spinner { 50% { transform: scaleX(0.4); } }
      `}</style>
    </div>
  );
}
