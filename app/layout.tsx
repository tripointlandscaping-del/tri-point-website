import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ChatBot from "./components/ChatBot";
import ScrollProgress from "./components/ScrollProgress";

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
          src="https://www.googletagmanager.com/gtag/js?id=G-0E3BSQGJ9Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0E3BSQGJ9Z');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tri-Point Landscaping LLC",
              image: "https://tripointlandscaping.com/logo-black.png",
              "@id": "https://tripointlandscaping.com",
              url: "https://tripointlandscaping.com",
              telephone: "+15863278080",
              email: "tripointlandscaping@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Washington Township",
                addressRegion: "MI",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 42.7367,
                longitude: -82.9929,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "21:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "10",
              },
              areaServed: [
                "Washington Township, MI",
                "Shelby Township, MI",
                "Macomb Township, MI",
                "Romeo, MI",
                "Ray Township, MI",
                "Bruce Township, MI",
                "Macomb County, MI",
              ],
              priceRange: "$$",
              description:
                "Professional landscaping, lawn care, snow removal, mulch & stone, and lawn renovation services throughout Macomb County, Michigan.",
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} min-h-screen flex flex-col`}>
        <ScrollProgress />
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
