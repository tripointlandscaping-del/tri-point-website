// Retired blog posts: residential snow posts (snow service is commercial only) and older
// commercial snow posts that duplicated the snow hub and city pages.
// Each slug 301-redirects to the matching commercial snow page (see next.config.ts)
// and is left out of the blog index, RSS feed, sitemap, and related-post links.
export const retiredPostRedirects: Record<string, string> = {
  "snow-removal-tips-macomb-county": "/services/snow-removal",
  "how-to-choose-snow-removal-company-macomb-county": "/services/snow-removal",
  "snow-plowing-service-shelby-township": "/services/snow-removal/shelby-township",
  "snow-removal-washington-township-mi": "/services/snow-removal/washington-township",
  "snow-plowing-macomb-township-mi": "/services/snow-removal/macomb-township",
  "snow-removal-shelby-township-mi": "/services/snow-removal/shelby-township",
  "snow-removal-rochester-hills-mi": "/services/snow-removal/rochester-hills",
  "snow-removal-romeo-mi": "/services/snow-removal/romeo",
  "snow-removal-bruce-township-mi": "/services/snow-removal/bruce-township",
  "snow-removal-rochester-mi": "/services/snow-removal/rochester",
  "snow-removal-ray-township-mi": "/services/snow-removal/ray-township",
  "rock-salt-vs-calcium-chloride-michigan-driveways": "/services/snow-removal",
  "commercial-snow-removal-shelby-township-mi": "/services/snow-removal/shelby-township",
  "commercial-snow-removal-macomb-county-mi": "/services/snow-removal",
};
