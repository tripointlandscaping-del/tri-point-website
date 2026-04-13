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

type ApiMessage = {
  role: "user" | "assistant";
  content: string;
};

/* ─── Extract page links from AI response text ─── */
const SERVICE_LINKS: { label: string; href: string; keywords: string[] }[] = [
  { label: "Lawn Maintenance", href: "/services/lawn-maintenance", keywords: ["lawn maintenance", "mowing", "mow", "edging", "trimming"] },
  { label: "Landscaping", href: "/services/landscaping", keywords: ["landscaping", "landscape design", "plantings", "sod", "bed design"] },
  { label: "Mulch & Stone", href: "/services/mulch-and-stone", keywords: ["mulch", "stone", "river rock", "lava rock", "decorative"] },
  { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup", keywords: ["cleanup", "spring cleanup", "fall cleanup", "leaf removal"] },
  { label: "Snow Removal", href: "/services/snow-removal", keywords: ["snow", "plow", "plowing", "ice", "salting", "winter"] },
  { label: "Lawn Renovations", href: "/services/lawn-renovations", keywords: ["aeration", "overseed", "overseeding", "dethatching", "renovation"] },
  { label: "Commercial", href: "/services/commercial", keywords: ["commercial", "hoa", "office", "retail", "apartment"] },
  { label: "Get a Free Estimate", href: "/contact", keywords: ["estimate", "quote", "free estimate", "pricing", "cost", "how much"] },
  { label: "Contact Us", href: "/contact", keywords: ["contact", "call", "text", "phone", "reach"] },
];

const extractLinks = (text: string): { label: string; href: string }[] => {
  const lower = text.toLowerCase();
  const seen = new Set<string>();
  const links: { label: string; href: string }[] = [];
  for (const s of SERVICE_LINKS) {
    if (s.keywords.some((k) => lower.includes(k)) && !seen.has(s.href)) {
      seen.add(s.href);
      links.push({ label: s.label, href: s.href });
      if (links.length >= 3) break;
    }
  }
  return links;
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
  const [apiHistory, setApiHistory] = useState<ApiMessage[]>([]);
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

  const sendMessage = async (text: string) => {
    if (!text.trim() || typing) return;

    const userMsg: Message = { role: "user", text: text.trim(), time: now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const newHistory: ApiMessage[] = [
      ...apiHistory,
      { role: "user", content: text.trim() },
    ];

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newHistory }),
      });
      const data = await res.json() as { text: string };
      const replyText = data.text || "Sorry, something went wrong. Call us at (586) 327-8080!";
      const links = extractLinks(replyText);

      setApiHistory([...newHistory, { role: "assistant", content: replyText }]);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: replyText, time: now(), links },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Sorry, I'm having trouble connecting right now. Give us a call at (586) 327-8080!",
          time: now(),
          links: [{ label: "Call (586) 327-8080", href: "tel:+15863278080" }],
        },
      ]);
    } finally {
      setTyping(false);
    }
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
              {`Hey! 👋 I'm ${EMPLOYEE.name} from Tri-Point. Have a question about services or pricing? I'm online right now!`}
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
              <span className="font-semibold">Tri-Point Landscaping</span> · Macomb County, MI · 24/7 AI Assistant
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
