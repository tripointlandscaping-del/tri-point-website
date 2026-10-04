// Real Google reviews (verbatim). Shared by the homepage, testimonials page, and review page.
export type Review = { stars: number; text: string; author: string; service: string };

export const reviews: Review[] = [
  {
    stars: 5,
    text: "Tri-Point Landscaping did an outstanding job on my yard! They were professional, punctual, and paid attention to every detail. From the clean-up to the fresh mulch, everything looked perfect when they finished. Highly recommend them for anyone looking for reliable and high-quality landscaping services!",
    author: "Noah S.",
    service: "Cleanup & Mulch Installation",
  },
  {
    stars: 5,
    text: "These 3 guys did a great job at a reasonable price. They communicated well, were respectful and cleaned everything up when done. We are very happy with the work we had done by them.",
    author: "Anna B.",
    service: "Landscaping",
  },
  {
    stars: 5,
    text: "I had them do a clean up of our yard and install mulch. They did really great work! Hardworking, honest and reliable. I'll for sure use them again!! Definitely recommend.",
    author: "Marcela V.",
    service: "Yard Cleanup & Mulch",
  },
  {
    stars: 5,
    text: "Noah did a very good job with my lawn. Very professional and very experienced. Would recommend for anyone that needed grass cutting and snow removal or any thing else. Noah and his team are the best.",
    author: "Javen K.",
    service: "Lawn Care & Snow Removal",
  },
  {
    stars: 5,
    text: "Very pleased with the work and professionalism these young men displayed. Highly recommend. 10 stars.",
    author: "Lori A.",
    service: "Landscaping",
  },
  {
    stars: 4,
    text: "This was our first time hiring a snow removal company and were truly happy with the experience. The service was timely, thorough, and a good value for the task. I really appreciated their messages regarding whether we needed service when the snow totals differed in their area. I would highly recommend the company.",
    author: "Paula S.",
    service: "Snow Removal",
  },
  {
    stars: 5,
    text: "Noah is great! Highly recommend Tri Point Landscaping!",
    author: "Pam M.",
    service: "Landscaping",
  },
  {
    stars: 5,
    text: "Tri-Point Landscaping did a great job on my lawn!",
    author: "Detroit Community Cares",
    service: "Lawn Care",
  },
  {
    stars: 5,
    text: "Job well done, friendly and reliable.",
    author: "Rebecca A.",
    service: "Landscaping",
  },
  {
    stars: 5,
    text: "Needed some landscape cleanup and mulch. The guys at Tri-Point were polite, very attentive to our requests and cleaned up the site after the mulch was down. Highly recommended.",
    author: "Douglas T.",
    service: "Landscape Cleanup & Mulch",
  },
  {
    stars: 5,
    text: "Noah and his crew did a nice job installing decorative stone in my front yard. Although they ordered a bit more stone than was needed, fortunately we had other pieces to put it down and it looks good as well.",
    author: "Joe Z.",
    service: "Decorative Stone Installation",
  },
  {
    stars: 5,
    text: "I had a great experience with the team at Tri-Point. They were professional, pleasant to work with, and communicated clearly throughout the entire process. They showed up on time, paid attention to detail, and did an excellent job.",
    author: "J. Morgan",
    service: "Landscaping",
  },
  {
    stars: 5,
    text: "Tri-Point Landscaping did an outstanding job on my landscaping!! I could not be more happy, satisfied or impressed! They were professional, friendly, proficient, and efficient. Communication, responsiveness and follow through were also excellent.",
    author: "Master Cheese",
    service: "Landscaping",
  },
  {
    stars: 5,
    text: "Tri Point Landscaping did an amazing job. They were on time, professional, and paid attention to all the small details. The yard looks way better than I expected, and you can tell they actually care about the quality of their work.",
    author: "Jovan H.",
    service: "Landscaping",
  },
];

// Shown on the homepage. Picked from the reviews above (no dates. They're quoted, not live).
const featuredAuthors = ["Jovan H.", "J. Morgan", "Anna B.", "Douglas T.", "Marcela V.", "Master Cheese"];
export const featuredReviews: Review[] = featuredAuthors.map(
  (author) => reviews.find((r) => r.author === author)!,
);
