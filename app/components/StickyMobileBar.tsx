import Link from "next/link";

export default function StickyMobileBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden"
      style={{ backgroundColor: "#111111" }}
    >
      <a
        href="tel:+15863278080"
        className="flex-1 flex items-center justify-center gap-2 py-4 text-white font-semibold text-sm border-r border-white/10 active:bg-white/10 transition-colors"
      >
        {/* Phone icon */}
        <svg
          className="w-5 h-5 shrink-0"
          style={{ color: "#7ecb82" }}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
        </svg>
        <span>(586) 327-8080</span>
      </a>

      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center py-4 text-white font-bold text-sm active:opacity-80 transition-opacity"
        style={{ backgroundColor: "#2C5F2E" }}
      >
        Get Estimate
      </Link>
    </div>
  );
}
