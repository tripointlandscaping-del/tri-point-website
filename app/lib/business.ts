// Single source of truth for business facts shown across the site, schema, and llms.txt.
// Update the review numbers here when the Google Business Profile changes.

export const googleReviews = {
  rating: 4.9,
  count: 16,
} as const;

export const SITE_URL = "https://www.tripointlandscaping.com";
export const BUSINESS_NAME = "Tri-Point Landscaping LLC";

export const PHONE_DISPLAY = "(586) 327-8080";
export const PHONE_TEL = "+15863278080";
export const EMAIL = "tripointlandscaping@gmail.com";

// Google Business Profile
export const GBP_URL = "https://g.page/r/CTWE7P6lheWxEBM";
export const GBP_REVIEW_URL = "https://g.page/r/CTWE7P6lheWxEBM/review";

export const FOUNDING_DATE = "2025-04";

export const BUSINESS_HOURS = "Business hours 7am to 9pm daily. Call or text 24/7.";

export const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "21:00",
  },
];

export const aggregateRatingSchema = {
  "@type": "AggregateRating",
  ratingValue: String(googleReviews.rating),
  reviewCount: String(googleReviews.count),
  bestRating: "5",
  worstRating: "1",
};

// Visible wording for reviews. The count stays in schema only (aggregateRatingSchema).
export const googleRatingLabel = "Highly rated on Google";
