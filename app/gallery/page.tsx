import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Project Gallery | Tri-Point Landscaping | Macomb County, MI",
  description:
    "Browse real photos of landscaping, lawn care, mulch installation, snow removal and more from Tri-Point Landscaping in Washington Township, Macomb County, MI.",
  alternates: { canonical: "https://www.tripointlandscaping.com/gallery" },
  openGraph: {
    title: "Project Gallery | Tri-Point Landscaping",
    description: "Real work. Real results. Browse our project photos from across Macomb County, MI.",
    url: "https://www.tripointlandscaping.com/gallery",
    siteName: "Tri-Point Landscaping",
    type: "website",
    images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: "Tri-Point Landscaping Project Gallery — Macomb County, MI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Tri-Point Landscaping | Macomb County, MI",
    description: "Real work. Real results. Browse our project photos from across Macomb County, MI.",
    images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
  },
};

const photos = [
  {
    src: "/photos/1.png",
    alt: "Perfectly striped lawn mowing service in Washington Township Michigan by Tri-Point Landscaping",
    category: "Lawn Care",
    label: "Lawn Striping — Washington Township",
  },
  {
    src: "/photos/0728A183-FBB6-4A53-AA3D-103C3E39A7EF.jpeg",
    alt: "Professional landscaping and mulch bed installation at residential home in Macomb County Michigan",
    category: "Landscaping",
    label: "Landscape & Mulch Installation — Macomb County",
  },
  {
    src: "/photos/IMG_4417.jpeg",
    alt: "Custom flagstone pathway with ornamental grass and mulch landscaping in Washington Township MI",
    category: "Landscaping",
    label: "Flagstone Pathway & Ornamental Landscaping",
  },
  {
    src: "/photos/88FBBFEE-A720-48B9-BF7D-1B45F0439580.jpeg",
    alt: "Trimmed boxwood shrubs and black mulch bed maintenance at luxury home in Macomb County Michigan",
    category: "Landscaping",
    label: "Shrub Trimming & Mulch — Macomb County",
  },
  {
    src: "/photos/ED11EC55-C5EC-45B9-817E-039367B9B789.jpeg",
    alt: "Fresh black mulch installation and lawn maintenance at brick home in Washington Township Michigan",
    category: "Landscaping",
    label: "Mulch Installation & Lawn Care",
  },
  {
    src: "/photos/mulch.jpg",
    alt: "Black mulch installation in flower bed with shrubs and perennials in Macomb County Michigan",
    category: "Mulch & Stone",
    label: "Mulch Bed Installation — Macomb County",
  },
  {
    src: "/photos/mulch1.jpeg",
    alt: "Fresh mulch installation with shrub bed edging at residential property in Washington Township MI",
    category: "Mulch & Stone",
    label: "Mulch & Bed Edging — Washington Township",
  },
  {
    src: "/photos/boxwood.jpg",
    alt: "Boxwood hedge trimming and landscape maintenance in Macomb County Michigan by Tri-Point Landscaping",
    category: "Landscaping",
    label: "Boxwood Hedge Trimming — Macomb County",
  },
  {
    src: "/photos/IMG_3369.jpeg",
    alt: "Spring cleanup and fresh lawn with flowering tree and mulch beds in Macomb County Michigan",
    category: "Seasonal Cleanup",
    label: "Spring Cleanup & Lawn Care",
  },
  {
    src: "/photos/spring.jpg",
    alt: "Commercial landscaping with ornamental grasses and annual flowers in Macomb County Michigan",
    category: "Landscaping",
    label: "Commercial Landscape Bed — Macomb County",
  },
  {
    src: "/photos/aeration.jpg",
    alt: "Lawn aeration service using commercial aerator in Washington Township Macomb County Michigan",
    category: "Lawn Care",
    label: "Lawn Aeration Service",
  },
  {
    src: "/photos/DB2668C7-A1A2-40F2-8B0D-4C3365E14325.jpeg",
    alt: "Fall leaf cleanup service at residential property in Macomb County Michigan",
    category: "Seasonal Cleanup",
    label: "Fall Leaf Cleanup — Macomb County",
  },
  {
    src: "/photos/217A6A02-1ABD-438C-90B1-CB49915F1D1A.jpeg",
    alt: "Fall seasonal cleanup at residential home in Washington Township Michigan",
    category: "Seasonal Cleanup",
    label: "Fall Cleanup — Washington Township",
  },
  {
    src: "/photos/12D7CE8B-99F8-4285-BFD8-A33E849120E0.jpeg",
    alt: "Snow removal and driveway plowing service at residential home in Macomb County Michigan",
    category: "Snow Removal",
    label: "Snow Removal & Plowing — Macomb County",
  },
];

const categories = ["All", "Lawn Care", "Landscaping", "Mulch & Stone", "Seasonal Cleanup", "Snow Removal"];

const imageGallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Tri-Point Landscaping Project Gallery",
  description: "Real photos of landscaping, lawn care, mulch installation, and snow removal projects completed by Tri-Point Landscaping in Macomb County, Michigan.",
  url: "https://www.tripointlandscaping.com/gallery",
  author: { "@type": "Organization", name: "Tri-Point Landscaping LLC" },
  image: photos.map((p) => ({
    "@type": "ImageObject",
    contentUrl: `https://www.tripointlandscaping.com${p.src}`,
    description: p.alt,
    name: p.label,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#111111" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#7ecb82" }}>
            Real Work · Real Results
          </p>
          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Landscaping Project Gallery — Macomb County, MI
          </h1>
          <p className="text-white/55 leading-relaxed max-w-xl mx-auto">
            Every property we touch gets the same obsessive attention to detail — from weekly lawn maintenance to full landscape installations across Macomb County, MI.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 px-6" style={{ backgroundColor: "#f9f7f4" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo, i) => (
              <div key={i} className="group relative overflow-hidden bg-gray-100">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest px-2 py-1 mb-2"
                      style={{ backgroundColor: "#2C5F2E", color: "white" }}
                    >
                      {photo.category}
                    </span>
                    <p className="text-white text-sm font-semibold">{photo.label}</p>
                  </div>
                </div>
                {/* Mobile label (always visible) */}
                <div className="sm:hidden px-3 py-2 bg-white border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2C5F2E" }}>
                    {photo.category}
                  </span>
                  <p className="text-gray-700 text-sm font-medium">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: "#2C5F2E" }}>
        <div className="max-w-2xl mx-auto">
          <h2
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Want Results Like These?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Free estimates for all services throughout Washington Township, Shelby Township, Macomb Township and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 font-bold text-sm hover:bg-green-50 transition-colors"
            >
              Get a Free Estimate →
            </Link>
            <a
              href="tel:+15863278080"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Call (586) 327-8080
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
