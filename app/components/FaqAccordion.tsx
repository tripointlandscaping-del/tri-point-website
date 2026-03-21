"use client";

import { useState } from "react";

type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-100">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            aria-expanded={open === i}
          >
            <span className={`font-semibold text-base transition-colors ${open === i ? "text-[#2C5F2E]" : "text-gray-900 group-hover:text-[#2C5F2E]"}`}>
              {faq.q}
            </span>
            <span style={{ backgroundColor: open === i ? "#2C5F2E" : "#f5f0e8" }} className="w-8 h-8 flex items-center justify-center shrink-0 transition-colors">
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${open === i ? "rotate-45 text-white" : "rotate-0 text-gray-500"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-96 pb-5" : "max-h-0"}`}>
            <p className="text-gray-600 leading-relaxed text-[15px] pr-12">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
