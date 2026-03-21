"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Employee persona ─── */
const EMPLOYEE = {
  name: "Jake",
  full: "Jake M.",
  title: "Service Coordinator",
  avatar: "/Social_Profile (3).jpg",
};

const now = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

type Message = {
  role: "bot" | "user";
  text: string;
  time: string;
  links?: { label: string; href: string }[];
};

/* ─── Responses ─── */
const getBotResponse = (
  input: string
): { text: string; links?: { label: string; href: string }[] } => {
  const q = input.toLowerCase().trim();

  if (q.match(/^(hi|hello|hey|howdy|good morning|good afternoon|good evening|sup|yo)/)) {
    return {
      text: "Hey, great to hear from you! I'm here to help — what can I do for you today?",
      links: [
        { label: "Get a Free Estimate", href: "/contact" },
        { label: "View Our Services", href: "/services/lawn-maintenance" },
      ],
    };
  }
  if (q.match(/service|offer|do you|what can|provide|speciali/)) {
    return {
      text: "We offer 7 professional services across Macomb County. Click any to learn more:",
      links: [
        { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
        { label: "Landscaping", href: "/services/landscaping" },
        { label: "Mulch & Stone", href: "/services/mulch-and-stone" },
        { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
        { label: "Snow & Ice Management", href: "/services/snow-removal" },
        { label: "Lawn Renovations", href: "/services/lawn-renovations" },
        { label: "Commercial", href: "/services/commercial" },
      ],
    };
  }
  if (q.match(/area|serve|cover|location|where|city|cities|township|come to/)) {
    return {
      text: "We cover all of northern Macomb County — here's where we work:",
      links: [
        { label: "Washington Township", href: "/service-areas/washington-township" },
        { label: "Shelby Township", href: "/service-areas/shelby-township" },
        { label: "Macomb Township", href: "/service-areas/macomb-township" },
        { label: "Romeo", href: "/service-areas/romeo" },
        { label: "Ray Township", href: "/service-areas/ray-township" },
        { label: "Bruce Township", href: "/service-areas/bruce-township" },
      ],
    };
  }
  if (q.match(/price|cost|how much|charge|rate|afford|cheap|expensive|quote/)) {
    return {
      text: "Our estimates are 100% free — no obligation at all. Pricing depends on your property and what you need. Fill out the form and I'll personally follow up same day, usually within the hour.",
      links: [{ label: "Request a Free Estimate", href: "/contact" }],
    };
  }
  if (q.match(/hour|open|when|schedule|available|time|day/)) {
    return {
      text: "We're here Monday–Saturday, 7:00 AM to 9:00 PM. Closed Sundays. Call, text, or send a form — I'll get back to you same day!",
      links: [{ label: "Contact Us", href: "/contact" }],
    };
  }
  if (q.match(/estimate|quote|start|begin|get started|free/)) {
    return {
      text: "Getting started is easy — fill out our short form and I'll follow up same day. Or give us a call if you'd rather talk!",
      links: [
        { label: "Get My Free Estimate", href: "/contact" },
        { label: "Call (586) 327-8080", href: "tel:+15863278080" },
      ],
    };
  }
  if (q.match(/snow|plow|winter|ice|salt|shovel|driveway/)) {
    return {
      text: "Yep! We do full snow & ice management — plowing, sidewalk clearing, salting and de-icing across Macomb County. Seasonal contracts mean you're covered all winter without lifting a finger.",
      links: [
        { label: "Snow & Ice Management", href: "/services/snow-removal" },
        { label: "Get a Quote", href: "/contact" },
      ],
    };
  }
  if (q.match(/aerat|overseed|dethatch|top dress|renovat|thin lawn|bare spot/)) {
    return {
      text: "That's our lawn renovation program — core aeration, overseeding, dethatching, and top dressing. It's the science-backed way to go from a thin patchy lawn to thick healthy turf. Most customers see results in 2–3 weeks.",
      links: [
        { label: "Lawn Renovations", href: "/services/lawn-renovations" },
        { label: "Get a Quote", href: "/contact" },
      ],
    };
  }
  if (q.match(/lawn|mow|cut|grass|mowing|edg|trim/)) {
    return {
      text: "Lawn maintenance is our bread and butter — weekly mowing, edging, trimming, and blowing April through October. Super consistent and we always let you know when we're coming.",
      links: [
        { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
        { label: "Free Estimate", href: "/contact" },
      ],
    };
  }
  if (q.match(/mulch|stone|decorative|bed|garden/)) {
    return {
      text: "Fresh mulch with clean sharp edges can completely transform the look of a property — we hear that from customers all the time after their first install. We carry premium hardwood and a full selection of decorative stone.",
      links: [
        { label: "Mulch & Stone", href: "/services/mulch-and-stone" },
        { label: "Get a Quote", href: "/contact" },
      ],
    };
  }
  if (q.match(/commercial|hoa|office|business|retail|apartment/)) {
    return {
      text: "Absolutely — commercial is a big part of what we do. Offices, HOAs, retail centers — we offer priority scheduling and provide all the documentation property management companies need.",
      links: [
        { label: "Commercial Services", href: "/services/commercial" },
        { label: "Request a Commercial Quote", href: "/contact" },
      ],
    };
  }
  if (q.match(/cleanup|spring|fall|leaf|leave|season/)) {
    return {
      text: "Spring and fall cleanups are one of our most popular services. Leaf removal, perennial cutback, bed cleanup — we haul it all away. Saves you an entire weekend of hard work.",
      links: [
        { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
        { label: "Schedule Your Cleanup", href: "/contact" },
      ],
    };
  }
  if (q.match(/landscap|design|install|plant|bed|sod/)) {
    return {
      text: "I love talking landscaping — we do custom bed design, plantings, stone features, sod, and full property transformations. Let's talk about what you're envisioning.",
      links: [
        { label: "Landscaping Services", href: "/services/landscaping" },
        { label: "Free Estimate", href: "/contact" },
      ],
    };
  }
  if (q.match(/insur|licens|safe|bonded|certif|legit|trust/)) {
    return {
      text: "Tri-Point Landscaping LLC is fully insured with general liability coverage. We're a licensed Michigan LLC — your property is 100% protected on every visit.",
    };
  }
  if (q.match(/phone|call|number|contact|reach|text|email/)) {
    return {
      text: "Best way: call or text (586) 327-8080. You can also email tripointlandscaping@gmail.com. Available Mon–Sat, 7AM–9PM.",
      links: [{ label: "All Contact Options", href: "/contact" }],
    };
  }
  if (q.match(/about|who are you|company|owner|local|founded/)) {
    return {
      text: "We're a locally owned company right here in Macomb County — not a franchise, not a call center. Just a team that genuinely cares about how your property looks.",
      links: [{ label: "Learn About Us", href: "/about" }],
    };
  }
  if (q.match(/review|rating|google|star|recommend|feedback/)) {
    return {
      text: "We hold a 5.0★ Google rating from real Macomb County homeowners. Check us out!",
      links: [
        {
          label: "Read Our Google Reviews",
          href: "https://www.google.com/search?q=Tri-Point+Landscaping+Washington+Township+MI",
        },
      ],
    };
  }
  if (q.match(/thank|thanks|great|perfect|awesome|appreciate|helpful/)) {
    return {
      text: "Of course — happy to help! Don't hesitate to reach out anytime. We'd love to earn your business!",
      links: [{ label: "Request a Free Estimate", href: "/contact" }],
    };
  }
  return {
    text: "Good question! For the most accurate answer, give me a call or text at (586) 327-8080. Or send in an estimate request and I'll follow up same day.",
    links: [
      { label: "Get a Free Estimate", href: "/contact" },
      { label: "Call (586) 327-8080", href: "tel:+15863278080" },
    ],
  };
};

const quickReplies = [
  "What services do you offer?",
  "What areas do you serve?",
  "How much does it cost?",
  "Get a free estimate",
  "What are your hours?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Show teaser after 6 seconds
  useEffect(() => {
    const t = setTimeout(() => {
      if (!hasOpened) setShowTeaser(true);
    }, 6000);
    return () => clearTimeout(t);
  }, [hasOpened]);

  // Init greeting when opened
  useEffect(() => {
    if (open && messages.length === 0) {
      setHasOpened(true);
      setShowTeaser(false);
      setTyping(true);
      const t = setTimeout(() => {
        setTyping(false);
        setMessages([
          {
            role: "bot",
            text: `Hey there! 👋 I'm ${EMPLOYEE.name}, the service coordinator here at Tri-Point Landscaping. What can I help you with today?`,
            time: now(),
          },
        ]);
      }, 1100);
      return () => clearTimeout(t);
    }
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text: text.trim(), time: now() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: response.text, time: now(), links: response.links },
      ]);
      setTyping(false);
    }, 800 + Math.random() * 500);
  };

  const handleOpen = () => {
    setOpen(true);
    setShowTeaser(false);
    setTeaserDismissed(true);
  };

  return (
    <>
      {/* ── Teaser bubble ── */}
      {showTeaser && !open && !teaserDismissed && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-72 shadow-2xl overflow-hidden"
          style={{ animation: "chatSlideUp 0.35s ease forwards" }}
        >
          <div style={{ backgroundColor: "#111111" }} className="px-4 py-3 flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-9 h-9 flex items-center justify-center overflow-hidden border-2 border-green-400" style={{ backgroundColor: "#ffffff" }}>
                <Image src={EMPLOYEE.avatar} alt="Tri-Point Landscaping" width={36} height={36} className="object-contain" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 border-2 border-gray-900 rounded-full" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-none">{EMPLOYEE.full}</p>
              <p className="text-white/50 text-xs mt-0.5">{EMPLOYEE.title} · Tri-Point</p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setShowTeaser(false); setTeaserDismissed(true); }}
              className="text-white/40 hover:text-white transition-colors shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button onClick={handleOpen} className="w-full text-left px-4 py-4 bg-white hover:bg-gray-50 transition-colors">
            <p className="text-gray-800 text-sm leading-relaxed">
              Hey! 👋 I&apos;m {EMPLOYEE.name} from Tri-Point. Have a question about services or pricing? I&apos;m online right now!
            </p>
            <p className="text-green-600 text-xs font-semibold mt-2">Tap to reply →</p>
          </button>
        </div>
      )}

      {/* ── Launcher button ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={open ? () => setOpen(false) : handleOpen}
          className="relative flex items-center gap-2.5 shadow-2xl hover:scale-105 transition-transform px-4 py-3"
          style={{ backgroundColor: "#2C5F2E" }}
          aria-label="Chat with Tri-Point Landscaping"
        >
          {open ? (
            <>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-white text-sm font-semibold">Close Chat</span>
            </>
          ) : (
            <>
              {/* Logo */}
              <div className="relative">
                <div className="w-8 h-8 flex items-center justify-center overflow-hidden border-2 border-green-400" style={{ backgroundColor: "#ffffff" }}>
                  <Image src={EMPLOYEE.avatar} alt="Tri-Point Landscaping" width={32} height={32} className="object-contain" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 border-2 border-green-800 rounded-full" />
              </div>
              <div className="text-left">
                <p className="text-white text-xs font-bold leading-none">Tri-Point Landscaping</p>
                <p className="text-white/70 text-xs mt-0.5">Chat with {EMPLOYEE.name} →</p>
              </div>
              {/* Unread dot */}
              {!hasOpened && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-xs font-bold flex items-center justify-center rounded-full border-2 border-white">
                  1
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* ── Chat window ── */}
      {open && (
        <div
          className="fixed z-50 flex flex-col shadow-2xl overflow-hidden"
          style={{
            /* Mobile: full screen overlay; desktop: anchored bottom-right */
            bottom: "var(--chat-bottom, 80px)",
            right: "var(--chat-right, 16px)",
            width: "var(--chat-width, 100vw)",
            maxWidth: "var(--chat-max, 375px)",
            maxHeight: "var(--chat-max-h, calc(100vh - 100px))",
            backgroundColor: "#ffffff",
            animation: "chatOpen 0.22s ease forwards",
          }}
        >
          {/* ── Header ── */}
          <div style={{ backgroundColor: "#111111" }} className="px-4 py-3 flex items-center gap-3 shrink-0">
            <div className="relative shrink-0">
              <div className="w-11 h-11 flex items-center justify-center overflow-hidden border-2 border-green-400" style={{ backgroundColor: "#ffffff" }}>
                <Image src={EMPLOYEE.avatar} alt="Tri-Point Landscaping" width={44} height={44} className="object-contain" />
              </div>
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-gray-900 rounded-full"
                style={{ boxShadow: "0 0 0 2px rgba(74,222,128,0.3)" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">{EMPLOYEE.full}</p>
              <p className="text-white/50 text-xs">{EMPLOYEE.title} · Tri-Point Landscaping</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                <span className="text-green-400 text-xs font-medium">Online now</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white transition-colors p-1 ml-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* ── Info strip ── */}
          <div style={{ backgroundColor: "#f0faf0", borderBottom: "1px solid #d1fae5" }} className="px-4 py-2 shrink-0">
            <p className="text-green-800 text-xs">
              <span className="font-semibold">Tri-Point Landscaping</span> · Macomb County, MI · Mon–Sat 7AM–9PM
            </p>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-4" style={{ backgroundColor: "#f6f6f6" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                {msg.role === "bot" && (
                  <div className="w-7 h-7 flex items-center justify-center overflow-hidden shrink-0 mt-auto mb-6 border border-green-400" style={{ backgroundColor: "#ffffff" }}>
                    <Image src={EMPLOYEE.avatar} alt="Tri-Point Landscaping" width={28} height={28} className="object-contain" />
                  </div>
                )}
                <div className="flex flex-col gap-1 max-w-[80%]">
                  {msg.role === "bot" && (
                    <span className="text-gray-400 text-xs font-medium ml-0.5">{EMPLOYEE.name}</span>
                  )}
                  <div
                    className="px-4 py-2.5 text-sm leading-relaxed"
                    style={{
                      backgroundColor: msg.role === "user" ? "#2C5F2E" : "#ffffff",
                      color: msg.role === "user" ? "#fff" : "#1f2937",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.07)",
                    }}
                  >
                    {msg.text}
                  </div>
                  {msg.links && msg.links.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-0.5">
                      {msg.links.map((link) =>
                        link.href.startsWith("http") || link.href.startsWith("tel") ? (
                          <a
                            key={link.href}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-xs font-semibold border px-3 py-1.5 hover:bg-green-50 transition-colors"
                            style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-xs font-semibold border px-3 py-1.5 hover:bg-green-50 transition-colors"
                            style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                  <div className="flex items-center gap-1 ml-0.5">
                    <span className="text-xs" style={{ color: "#9ca3af" }}>{msg.time}</span>
                    {msg.role === "user" && (
                      <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18 7l-1.41-1.41-6.34 6.34-2.83-2.83L6 10.52l4.24 4.24L18 7zm-11.24 4.24L4 14l4.24 4.24 9.18-9.18-1.41-1.41-7.77 7.76-2.48-2.47z" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex justify-start gap-2">
                <div className="w-7 h-7 flex items-center justify-center overflow-hidden shrink-0 border border-green-400" style={{ backgroundColor: "#ffffff" }}>
                  <Image src={EMPLOYEE.avatar} alt="Tri-Point Landscaping" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400 text-xs font-medium ml-0.5">{EMPLOYEE.name}</span>
                  <div className="px-4 py-3 bg-white flex items-center gap-1.5" style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.07)" }}>
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" style={{ animation: "typingDot 1.2s infinite", animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ── Quick replies ── */}
          {messages.length <= 1 && !typing && (
            <div className="px-3 py-3 bg-white border-t border-gray-100 shrink-0">
              <p className="text-xs text-gray-400 font-medium mb-2">Common questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickReplies.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-xs font-medium border border-gray-200 px-3 py-1.5 hover:border-green-500 hover:text-green-700 transition-colors text-gray-600 bg-gray-50 active:bg-green-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Input ── */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white flex gap-2 shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder={`Message ${EMPLOYEE.name}...`}
              className="flex-1 border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-green-500 transition-colors text-gray-800 placeholder-gray-400 bg-gray-50 rounded-none"
              style={{ fontSize: "16px" /* prevent iOS zoom */ }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || typing}
              style={{ backgroundColor: "#2C5F2E" }}
              className="px-4 py-2.5 text-white font-semibold text-sm hover:opacity-90 disabled:opacity-40 transition-opacity shrink-0 flex items-center gap-1.5"
            >
              Send
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>

          {/* ── Footer ── */}
          <div className="px-4 py-2 bg-white border-t border-gray-50 flex items-center justify-between shrink-0">
            <p className="text-gray-300 text-xs">Tri-Point Landscaping LLC</p>
            <a href="tel:+15863278080" className="text-xs text-green-600 font-semibold hover:underline">
              (586) 327-8080
            </a>
          </div>
        </div>
      )}

      <style>{`
        /* Mobile: full-screen chat */
        @media (max-width: 480px) {
          .fixed.z-50.flex.flex-col.shadow-2xl {
            --chat-bottom: 0px !important;
            --chat-right: 0px !important;
            --chat-width: 100vw !important;
            --chat-max: 100vw !important;
            --chat-max-h: 100dvh !important;
          }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatOpen {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes typingDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
