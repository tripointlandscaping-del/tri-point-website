import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "../lib/business";

const phoneHref = `tel:${PHONE_TEL}`;
const textHref = `sms:${PHONE_TEL}`;

export default function LawnEstimateCta({ placement }: { placement: "mid" | "end" }) {
  if (placement === "end") {
    return (
      <div className="mt-16 p-8 text-center" style={{ backgroundColor: "#2C5F2E" }}>
        <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Get a free lawn care estimate
        </p>
        <p className="text-white/80 text-sm sm:text-base mb-6 max-w-lg mx-auto leading-relaxed">
          If you&apos;d rather not spend the weekend on it, we&apos;ll look at your yard and give you a clear price for mowing, edging, and trimming. No obligation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 font-bold text-sm hover:bg-green-50 transition-colors">
            Request a Lawn Estimate →
          </Link>
          <a href={phoneHref} className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors">
            Call {PHONE_DISPLAY}
          </a>
          <a href={textHref} className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors">
            Text Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="my-10 p-6 sm:p-8 border-l-4" style={{ borderColor: "#2C5F2E", backgroundColor: "#f5f0e8" }}>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#2C5F2E" }}>
        Residential lawn care
      </p>
      <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-gray-900 mb-2">
        Want this handled on your lawn?
      </p>
      <p className="text-gray-600 text-sm leading-relaxed mb-5 max-w-xl">
        Tri-Point mows, edges, and trims residential lawns across northern Macomb County and Rochester, April through October. Ask for a free estimate and we&apos;ll price your yard.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 text-white px-5 py-3 text-sm font-bold hover:opacity-90 transition-opacity" style={{ backgroundColor: "#2C5F2E" }}>
          Get a Free Lawn Estimate →
        </Link>
        <a href={phoneHref} className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:border-green-700 transition-colors">
          Call {PHONE_DISPLAY}
        </a>
        <a href={textHref} className="inline-flex items-center justify-center gap-2 border border-gray-300 bg-white text-gray-900 px-5 py-3 text-sm font-semibold hover:border-green-700 transition-colors">
          Text {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
}
