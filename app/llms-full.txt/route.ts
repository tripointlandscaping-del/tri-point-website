import { faqs } from "../faq/page";
import { PHONE_DISPLAY, SITE_URL } from "../lib/business";

export const dynamic = "force-static";

// Longer companion to /llms.txt, built from the same answers shown on /faq.
export function GET() {
  const lines = [
    "# Tri-Point Landscaping LLC",
    "",
    "Full answers from the FAQ page. Snow removal is commercial only: businesses, HOAs, and commercial lots. Residential driveway plowing is not offered.",
    `Phone: ${PHONE_DISPLAY}`,
    `FAQ: ${SITE_URL}/faq`,
    "",
  ];

  for (const faq of faqs) {
    lines.push(`## ${faq.q}`, "", faq.a, "");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
