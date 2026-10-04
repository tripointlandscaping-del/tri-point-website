import { featuredReviews } from "../lib/reviews";
import { GBP_URL } from "../lib/business";

function initials(name: string) {
  return name
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4"
          fill={i < count ? "#FBBC05" : "#e5e7eb"}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function LiveReviewFeed() {
  return (
    <div>
      {/* Review grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {featuredReviews.map((review) => (
          <div
            key={review.author}
            className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4"
            style={{ borderLeft: "3px solid #2C5F2E" }}
          >
            {/* Card header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-10 h-10 flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#2C5F2E" }}
                  aria-hidden="true"
                >
                  {initials(review.author)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-tight">{review.author}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{review.service}</p>
                </div>
              </div>
              <GoogleLogo />
            </div>

            {/* Stars */}
            <StarRating count={review.stars} />

            {/* Review text */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href={GBP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-2 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          style={{ borderColor: "rgba(255,255,255,0.3)", color: "#ffffff" }}
        >
          <GoogleLogo />
          <span>See All Reviews on Google</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
