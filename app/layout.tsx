import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "./components/ChatBot";
import ScrollProgress from "./components/ScrollProgress";
import UrgencyBanner from "./components/UrgencyBanner";
import StickyMobileBar from "./components/StickyMobileBar";
import ExitIntentPopup from "./components/ExitIntentPopup";
import CookieBanner from "./components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tri-Point Landscaping | Landscaping, Lawn Care & Snow Removal in Macomb County, MI",
    template: "%s | Tri-Point Landscaping",
  },
  description:
    "Tri-Point Landscaping provides professional landscaping, lawn care, snow removal & ice management, mulch & stone, and lawn renovations throughout Macomb County, MI. Free estimates.",
  keywords: [
    "landscaping Washington Township MI",
    "lawn care Macomb County",
    "snow removal Washington Township",
    "landscaping Shelby Township",
    "lawn maintenance Macomb County MI",
  ],
  openGraph: {
    title: "Tri-Point Landscaping | Macomb County, MI",
    description:
      "Professional landscaping, lawn care & snow removal in Macomb County, MI. Precision. Passion. Perfection.",
    url: "https://tripointlandscaping.com",
    siteName: "Tri-Point Landscaping",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://tripointlandscaping.com"),
  alternates: {
    canonical: "https://www.tripointlandscaping.com",
  },
  other: {
    "ai-content-declaration": "This website represents a real local business: Tri-Point Landscaping LLC, a professional landscaping company serving Macomb County, Michigan. Phone: (586) 327-8080.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17037272520"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0E3BSQGJ9Z');
            gtag('config', 'AW-17037272520');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LandscapingBusiness",
              name: "Tri-Point Landscaping LLC",
              image: "https://tripointlandscaping.com/logo-black.png",
              "@id": "https://tripointlandscaping.com/#business",
              url: "https://tripointlandscaping.com",
              telephone: "+15863278080",
              email: "tripointlandscaping@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Washington Township",
                addressLocality: "Washington Township",
                addressRegion: "MI",
                addressCountry: "US",
                postalCode: "48094",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.7367,
                longitude: -82.9929,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "10",
              },
              areaServed: [
                { "@type": "City", "name": "Washington Township", "containedInPlace": { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" } },
                { "@type": "City", "name": "Shelby Township", "containedInPlace": { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" } },
                { "@type": "City", "name": "Macomb Township", "containedInPlace": { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" } },
                { "@type": "City", "name": "Romeo", "containedInPlace": { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" } },
                { "@type": "City", "name": "Ray Township", "containedInPlace": { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" } },
                { "@type": "City", "name": "Bruce Township", "containedInPlace": { "@type": "AdministrativeArea", "name": "Macomb County, Michigan" } },
                { "@type": "AdministrativeArea", "name": "Macomb County", "containedInPlace": { "@type": "State", "name": "Michigan" } },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Landscaping & Lawn Care Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Maintenance", url: "https://tripointlandscaping.com/services/lawn-maintenance", areaServed: "Macomb County, MI" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscaping & Design", url: "https://tripointlandscaping.com/services/landscaping", areaServed: "Macomb County, MI" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mulch & Stone Installation", url: "https://tripointlandscaping.com/services/mulch-and-stone", areaServed: "Macomb County, MI" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Seasonal Cleanup", url: "https://tripointlandscaping.com/services/seasonal-cleanup", areaServed: "Macomb County, MI" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Snow Removal & Ice Management", url: "https://tripointlandscaping.com/services/snow-removal", areaServed: "Macomb County, MI" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Lawn Renovations & Aeration", url: "https://tripointlandscaping.com/services/lawn-renovations", areaServed: "Macomb County, MI" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Landscaping", url: "https://tripointlandscaping.com/commercial", areaServed: "Macomb County, MI" } },
                ],
              },
              priceRange: "$$",
              description:
                "Professional landscaping, lawn care, snow removal, mulch & stone, and lawn renovation services throughout Macomb County, Michigan. Serving Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, and Bruce Township.",
              knowsAbout: [
                "Lawn Maintenance", "Landscape Design", "Mulch Installation", "Seasonal Cleanup",
                "Snow Removal", "Ice Management", "Lawn Aeration", "Overseeding", "Commercial Landscaping",
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} min-h-screen flex flex-col`}>
        <UrgencyBanner />
        <ScrollProgress />
        {children}
        <ChatBot />
        <StickyMobileBar />
        <ExitIntentPopup />
        <CookieBanner />
        {/* Spacer so StickyMobileBar doesn't overlap content on mobile */}
        <div className="h-16 md:hidden" aria-hidden="true" />
      </body>
    </html>
  );
}
