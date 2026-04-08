import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type AreaData = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  localDetails: string;
  bodyParagraph: string;
  highlights: string[];
  services: { label: string; href: string }[];
  faqs: { q: string; a: string }[];
};

const areas: Record<string, AreaData> = {
  "washington-township": {
    name: "Washington Township",
    metaTitle: "Landscaping in Washington Township, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn care, snow removal & lawn renovations in Washington Township, MI. Local Macomb County experts. Free estimates. Call (586) 327-8080.",
    heroImage: "/photos/bills-google2.jpeg",
    heroAlt: "Professional landscaping services in Washington Township Michigan",
    intro:
      "Tri-Point Landscaping is Washington Township's trusted local landscaping company. We live and work here, and we take pride in keeping Macomb County properties looking their best — from the first green of spring to the last snowfall of winter.",
    localDetails:
      "We serve Washington Township homeowners and businesses from 26 Mile Road to 32 Mile Road, and from Van Dyke Avenue to Romeo Plank Road. Whether you're in Stony Creek Meadows, Chattaburg Park, or anywhere in between, Tri-Point Landscaping is your neighbor and your landscaping partner.",
    bodyParagraph:
      "Washington Township is one of Macomb County's most desirable communities — and the homes here reflect that. Properties along 26 Mile, near Stony Creek Metropark, and throughout the township's well-established subdivisions deserve landscaping that matches the neighborhood's character. We bring the same attention to detail to a weekly mowing route as we do to a full landscape installation. We know the soil conditions, the typical drainage challenges on these properties, and the plants that thrive here. That local knowledge shows in every job we complete.",
    highlights: [
      "Based right here in Washington Township — not a distant franchise",
      "Serving properties along 26 Mile, 28 Mile, 30 Mile, and 32 Mile corridors",
      "Familiar with Washington Township's subdivision styles and landscape needs",
      "Fully insured LLC with fast same-day response to estimate requests",
      "5.0 Google rating · Nextdoor Neighborhood Favorite",
    ],
    services: [
      { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { label: "Landscaping & Design", href: "/services/landscaping" },
      { label: "Mulch & Decorative Stone", href: "/services/mulch-and-stone" },
      { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { label: "Snow Removal & Plowing", href: "/services/snow-removal" },
      { label: "Lawn Renovations", href: "/services/lawn-renovations" },
      { label: "Commercial Landscaping", href: "/services/commercial" },
    ],
    faqs: [
      { q: "Do you offer free estimates in Washington Township?", a: "Yes. We provide free, no-obligation on-site estimates for all landscaping, lawn care, snow removal, and property services throughout Washington Township. Call (586) 327-8080 or submit a request online." },
      { q: "What parts of Washington Township do you serve?", a: "We serve the entire township — from 26 Mile Road north to 32 Mile Road, and from Van Dyke Avenue west to Romeo Plank Road, including Stony Creek Meadows, Chattaburg Park, and all surrounding subdivisions and commercial areas." },
      { q: "Do you offer snow plowing for Washington Township driveways?", a: "Yes. We provide residential driveway plowing, sidewalk clearing, and salting for Washington Township homeowners. We offer both seasonal contracts and per-push pricing." },
    ],
  },
  "shelby-township": {
    name: "Shelby Township",
    metaTitle: "Landscaping in Shelby Township, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn care & snow removal in Shelby Township, MI. Serving Macomb County homeowners and businesses. Free estimates. Call (586) 327-8080.",
    heroImage: "/photos/IMG_4417.jpeg",
    heroAlt: "Professional landscaping services in Shelby Township Michigan",
    intro:
      "Tri-Point Landscaping provides professional landscaping, lawn care, and property maintenance throughout Shelby Township. From weekly lawn maintenance to custom landscape installations, we deliver quality workmanship that Shelby Township homeowners and businesses can count on.",
    localDetails:
      "We serve Shelby Township properties along M-59, 23 Mile Road, and throughout the subdivisions and commercial corridors of this thriving Macomb County community. From residential neighborhoods to commercial plazas, Tri-Point Landscaping has the experience and equipment to handle it all.",
    bodyParagraph:
      "Shelby Township's rapid residential and commercial growth has created a vibrant community of homeowners who take their properties seriously. The subdivision developments along 23 Mile, 24 Mile, and Schoenherr represent a range of landscape styles — from newer construction with minimal plantings to established properties with mature trees and complex beds. We work with both. Our crews understand what it takes to maintain Shelby Township properties through Michigan's demanding four-season cycle, and we bring the reliability and professionalism that this community expects.",
    highlights: [
      "Serving Shelby Township homeowners and commercial properties",
      "Experienced with Shelby Township's subdivision styles and property sizes",
      "Reliable scheduling — we communicate proactively about every visit",
      "Fully insured LLC — you're protected on every job",
      "Fast response to estimate requests — typically same day",
    ],
    services: [
      { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { label: "Landscaping & Design", href: "/services/landscaping" },
      { label: "Mulch & Decorative Stone", href: "/services/mulch-and-stone" },
      { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { label: "Snow Removal & Plowing", href: "/services/snow-removal" },
      { label: "Lawn Renovations", href: "/services/lawn-renovations" },
      { label: "Commercial Landscaping", href: "/services/commercial" },
    ],
    faqs: [
      { q: "Do you provide landscaping services in Shelby Township?", a: "Yes. We serve all of Shelby Township with lawn maintenance, landscape installation, mulch, seasonal cleanups, snow removal, and lawn renovations. Call (586) 327-8080 for a free estimate." },
      { q: "Do you mow lawns in Shelby Township weekly?", a: "Yes. We offer weekly and bi-weekly lawn maintenance programs for residential and commercial properties throughout Shelby Township during the April–October growing season." },
      { q: "Can you do a full landscape renovation in Shelby Township?", a: "Absolutely. Landscape renovation — new beds, plantings, stone features, lighting, and fresh mulch — is one of our most popular services in Shelby Township. We offer on-site design consultations before any work begins." },
    ],
  },
  "macomb-township": {
    name: "Macomb Township",
    metaTitle: "Landscaping in Macomb Township, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn care & snow removal in Macomb Township, MI. Reliable Macomb County landscaping. Free estimates. Call (586) 327-8080.",
    heroImage: "/photos/mulch.jpg",
    heroAlt: "Professional landscaping and mulch installation in Macomb Township Michigan",
    intro:
      "Tri-Point Landscaping serves Macomb Township with the same attention to detail and commitment to quality that has made us one of the most trusted landscaping companies in northern Macomb County. We understand Macomb Township's properties and deliver results that stand out.",
    localDetails:
      "Macomb Township's growing residential communities deserve landscaping that matches the quality and pride homeowners invest in their properties. Whether you're in a newer subdivision near 25 Mile Road or an established neighborhood closer to the township's core, Tri-Point Landscaping is ready to serve you.",
    bodyParagraph:
      "Macomb Township has seen significant residential growth over the past decade, and with it comes a community of homeowners who want their properties to reflect that investment. New construction landscapes often need filling in — beds established, plantings selected, and mulch or stone installed for the first time. Established properties need consistent maintenance and periodic renovation. We handle both with the same care and professionalism. Our crews work efficiently throughout Macomb Township, bringing the same reliable, schedule-consistent service that has earned us our reputation in northern Macomb County.",
    highlights: [
      "Serving all of Macomb Township's residential and commercial properties",
      "Experienced with both new construction and established landscape maintenance",
      "Consistent scheduling and proactive communication on every job",
      "Fully insured LLC — you're protected from start to finish",
      "5.0 Google rating and growing reputation in Macomb County",
    ],
    services: [
      { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { label: "Landscaping & Design", href: "/services/landscaping" },
      { label: "Mulch & Decorative Stone", href: "/services/mulch-and-stone" },
      { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { label: "Snow Removal & Plowing", href: "/services/snow-removal" },
      { label: "Lawn Renovations", href: "/services/lawn-renovations" },
    ],
    faqs: [
      { q: "Do you serve all of Macomb Township?", a: "Yes. We serve residential and commercial properties throughout Macomb Township, including areas near 25 Mile Road, 26 Mile Road, and surrounding subdivisions." },
      { q: "Do you offer seasonal contracts in Macomb Township?", a: "Yes. We offer full-season lawn maintenance packages as well as annual property care contracts that cover mowing, mulching, cleanups, and snow removal for Macomb Township homeowners." },
      { q: "Can you handle landscape installation for a new home in Macomb Township?", a: "Absolutely. New construction landscape installation is something we do regularly in Macomb Township. We help homeowners establish beds, select plants, install mulch or stone, and create a landscape that grows with the property." },
    ],
  },
  "romeo": {
    name: "Romeo",
    metaTitle: "Landscaping in Romeo, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn care & snow removal in Romeo, MI. Serving the Village of Romeo and surrounding Macomb County areas. Free estimates. Call (586) 327-8080.",
    heroImage: "/photos/spring.jpg",
    heroAlt: "Professional landscaping services in Romeo Michigan",
    intro:
      "Tri-Point Landscaping proudly serves the Village of Romeo and surrounding areas with professional landscaping, lawn care, and seasonal property maintenance. Romeo's beautiful character deserves landscaping that complements its unique charm.",
    localDetails:
      "From the historic village center to the surrounding residential and rural properties, Tri-Point Landscaping understands what it takes to maintain Romeo's natural beauty. We serve properties throughout the Romeo area with the attention to detail and local knowledge that national chains simply can't match.",
    bodyParagraph:
      "Romeo has a character unlike any other Macomb County community — its historic village center, mature trees, and mix of rural and residential properties create a landscape environment that demands thoughtful, experienced care. Properties here often feature large mature plantings, older stone features, and the kind of established landscape that takes decades to develop and only one bad season to set back. We approach Romeo properties with respect for what's already there, and the expertise to help it thrive. Whether you're maintaining a historic village home or a newer rural property on the outskirts, Tri-Point brings the same quality and care.",
    highlights: [
      "Serving the Village of Romeo and surrounding areas",
      "Experienced with Romeo's mix of rural, residential, and historic properties",
      "Thoughtful care for mature trees, established plantings, and unique landscapes",
      "Fully insured LLC — reliable and professional on every property",
      "Fast response to estimates — typically same day",
    ],
    services: [
      { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { label: "Landscaping & Design", href: "/services/landscaping" },
      { label: "Mulch & Decorative Stone", href: "/services/mulch-and-stone" },
      { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { label: "Snow Removal & Plowing", href: "/services/snow-removal" },
      { label: "Lawn Renovations", href: "/services/lawn-renovations" },
    ],
    faqs: [
      { q: "Do you provide landscaping in Romeo, Michigan?", a: "Yes. We serve the Village of Romeo and surrounding areas with lawn maintenance, landscape installation, mulch, cleanups, snow removal, and lawn renovations. Call (586) 327-8080 for a free estimate." },
      { q: "Can you maintain larger rural properties near Romeo?", a: "Yes. We have the equipment and crew capacity to handle larger rural properties in the Romeo area, including extended mowing, long driveway plowing, and extensive bed maintenance." },
      { q: "Do you offer fall cleanup in Romeo?", a: "Absolutely. Fall cleanup is one of our busiest services in the Romeo area. We remove leaves, cut back perennials, clear beds, and leave the property ready for winter." },
    ],
  },
  "ray-township": {
    name: "Ray Township",
    metaTitle: "Landscaping in Ray Township, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn care & snow removal in Ray Township, MI. Serving Macomb County rural and residential properties. Free estimates. Call (586) 327-8080.",
    heroImage: "/photos/IMG_3369.jpeg",
    heroAlt: "Professional lawn care and landscaping in Ray Township Michigan",
    intro:
      "Tri-Point Landscaping serves Ray Township with professional landscaping and lawn care tailored to the unique character of this Macomb County community. Whether you have a sprawling rural property or a residential lot, we bring the same quality and reliability.",
    localDetails:
      "Ray Township's rural landscape requires a different approach than suburban neighborhoods — our team has the experience and equipment to handle larger properties, longer driveways, and the specific demands of rural Macomb County. We're your local landscaping partner in Ray Township.",
    bodyParagraph:
      "Ray Township's rural character is one of its defining qualities — larger lots, longer driveways, more naturalized landscapes, and a pace that values quality work done right over speed. Our crews come prepared for Ray Township properties. We bring the right equipment for extended mowing runs, we know how to approach longer driveway plowing routes efficiently, and we understand that these properties require a slightly different standard than a suburban quarter-acre. Whether you need routine lawn maintenance or a complete landscape overhaul, Tri-Point Landscaping brings the expertise and equipment to handle Ray Township's properties with care.",
    highlights: [
      "Equipped for larger rural Ray Township properties",
      "Experience with extended mowing routes and long driveways",
      "Reliable scheduling that works around Ray Township's rural rhythms",
      "Fully insured LLC — professional service on every property",
      "Free on-site estimates throughout Ray Township",
    ],
    services: [
      { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { label: "Landscaping & Design", href: "/services/landscaping" },
      { label: "Mulch & Decorative Stone", href: "/services/mulch-and-stone" },
      { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { label: "Snow Removal & Plowing", href: "/services/snow-removal" },
      { label: "Lawn Renovations", href: "/services/lawn-renovations" },
    ],
    faqs: [
      { q: "Do you serve Ray Township properties?", a: "Yes. We service residential and rural properties throughout Ray Township with lawn maintenance, landscaping, seasonal cleanup, snow removal, and lawn renovations." },
      { q: "Can you handle large rural properties in Ray Township?", a: "Yes. We have the equipment and crew capacity for larger rural properties in Ray Township, including extended mowing, large acreage cleanup, and long driveway snow plowing." },
      { q: "Do you plow driveways in Ray Township?", a: "Yes. We offer residential driveway plowing, sidewalk clearing, and salting for Ray Township properties. Long driveways and rural access roads are something we handle regularly." },
    ],
  },
  "bruce-township": {
    name: "Bruce Township",
    metaTitle: "Landscaping in Bruce Township, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn care & snow removal in Bruce Township, MI. Serving Macomb County properties. Free estimates. Call (586) 327-8080.",
    heroImage: "/photos/boxwood.jpg",
    heroAlt: "Professional landscaping services in Bruce Township Michigan",
    intro:
      "Tri-Point Landscaping serves Bruce Township with professional, reliable landscaping and property maintenance. From lawn care to full landscape installations, we bring the expertise and dedication that Bruce Township homeowners deserve.",
    localDetails:
      "Bruce Township's residential and rural properties present unique opportunities to create beautiful, well-maintained outdoor spaces. Tri-Point Landscaping has the equipment and expertise to handle properties of all sizes throughout Bruce Township and surrounding Macomb County communities.",
    bodyParagraph:
      "Bruce Township sits at the northern edge of Macomb County's residential growth corridor, offering a blend of rural character and residential development that makes it a special community to work in. Properties here tend to have more acreage, more mature plantings, and a landscape environment that rewards careful, considered maintenance. Our crews approach Bruce Township properties with the patience and professionalism they deserve — thorough cleanups, well-maintained beds, and reliable year-round service. We're committed to being a landscaping partner that Bruce Township homeowners can count on season after season.",
    highlights: [
      "Serving residential and rural Bruce Township properties",
      "Equipped for larger lots and mature, established landscapes",
      "Consistent, professional service year-round",
      "Fully insured LLC — protected on every job",
      "Free estimates throughout Bruce Township",
    ],
    services: [
      { label: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { label: "Landscaping & Design", href: "/services/landscaping" },
      { label: "Mulch & Decorative Stone", href: "/services/mulch-and-stone" },
      { label: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { label: "Snow Removal & Plowing", href: "/services/snow-removal" },
      { label: "Lawn Renovations", href: "/services/lawn-renovations" },
    ],
    faqs: [
      { q: "Do you provide landscaping in Bruce Township?", a: "Yes. We serve Bruce Township with lawn maintenance, landscaping, mulch, seasonal cleanups, snow removal, and lawn renovations. Call (586) 327-8080 for a free estimate." },
      { q: "Can you handle larger properties in Bruce Township?", a: "Yes. We have experience with the larger residential and rural properties typical of Bruce Township, including extended mowing, acreage cleanup, and longer driveway snow plowing." },
      { q: "Do you offer spring and fall cleanup in Bruce Township?", a: "Absolutely. Seasonal cleanup is one of our most popular services in Bruce Township. We clear leaves, cut back perennials, clean beds, and haul everything away." },
    ],
  },
};

const otherAreas: Record<string, string> = {
  "washington-township": "Washington Township",
  "shelby-township": "Shelby Township",
  "macomb-township": "Macomb Township",
  "romeo": "Romeo",
  "ray-township": "Ray Township",
  "bruce-township": "Bruce Township",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://www.tripointlandscaping.com/service-areas/${slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://tripointlandscaping.com/service-areas/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://tripointlandscaping.com/service-areas" },
      { "@type": "ListItem", position: 3, name: area.name, item: `https://tripointlandscaping.com/service-areas/${slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    "@id": `https://tripointlandscaping.com/service-areas/${slug}`,
    name: "Tri-Point Landscaping LLC",
    image: "https://tripointlandscaping.com/logo-black.png",
    url: `https://tripointlandscaping.com/service-areas/${slug}`,
    telephone: "+15863278080",
    email: "tripointlandscaping@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Washington Township",
      addressRegion: "MI",
      addressCountry: "US",
      postalCode: "48094",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Macomb County, Michigan" },
    },
    description: `Professional landscaping, lawn care, snow removal, and property services in ${area.name}, Michigan. Serving all of Macomb County. Free estimates — call (586) 327-8080.`,
    priceRange: "$$",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "10" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[500px] flex items-end overflow-hidden">
          <Image src={area.heroImage} alt={area.heroAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-0 right-0">
            <div className="max-w-7xl mx-auto px-6">
              <nav className="flex items-center gap-2 text-white/50 text-xs">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white/70">Service Areas</span>
                <span>/</span>
                <span className="text-white">{area.name}</span>
              </nav>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32">
            <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
              Macomb County, Michigan
            </p>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Landscaping in<br />{area.name}, MI
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center gap-2 text-white px-8 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                Get a Free Estimate
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href="tel:+15863278080"
                className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                (586) 327-8080
              </a>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

              {/* Main content */}
              <div className="lg:col-span-2">
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">Local Experts</p>
                <h2
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Tri-Point Landscaping Serves<br />{area.name}, MI
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-5">{area.intro}</p>
                <p className="text-gray-600 leading-relaxed mb-5">{area.localDetails}</p>
                <p className="text-gray-600 leading-relaxed mb-10">{area.bodyParagraph}</p>

                {/* Why choose us */}
                <div style={{ backgroundColor: "#f5f0e8" }} className="p-8 mb-12">
                  <h3
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-2xl font-bold text-gray-900 mb-5"
                  >
                    Why {area.name} Homeowners Choose Tri-Point
                  </h3>
                  <div className="space-y-3">
                    {area.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-3">
                        <div style={{ backgroundColor: "#2C5F2E" }} className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-[15px]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Services grid */}
                <h3
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  Our Services in {area.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                  {area.services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="group flex items-center justify-between p-4 border border-gray-100 hover:border-[#2C5F2E] hover:bg-[#f5f0e8] transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div style={{ backgroundColor: "#2C5F2E" }} className="w-2 h-2 shrink-0" />
                        <span className="font-medium text-gray-900 group-hover:text-[#2C5F2E] transition-colors text-[15px]">{s.label}</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-300 group-hover:text-[#2C5F2E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>

                {/* FAQ */}
                <h3
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-2xl font-bold text-gray-900 mb-6"
                >
                  Frequently Asked Questions
                </h3>
                <div className="space-y-0 border-t border-gray-100">
                  {area.faqs.map((faq) => (
                    <div key={faq.q} className="border-b border-gray-100 py-5">
                      <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                      <p className="text-gray-600 text-[15px] leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Estimate CTA */}
                <div style={{ backgroundColor: "#111111" }} className="p-8 text-white">
                  <h3
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    className="text-xl font-bold mb-3"
                  >
                    Get a Free Estimate
                  </h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    Serving {area.name} and all of Macomb County. Fast response — typically same day.
                  </p>
                  <Link
                    href="/contact"
                    style={{ backgroundColor: "#2C5F2E" }}
                    className="block text-center text-white px-4 py-3.5 font-semibold tracking-wide hover:opacity-90 transition-opacity mb-3 text-sm"
                  >
                    Request Estimate Online
                  </Link>
                  <a
                    href="tel:+15863278080"
                    className="block text-center border border-white/20 text-white px-4 py-3.5 font-semibold text-sm hover:bg-white/10 transition-colors"
                  >
                    Call (586) 327-8080
                  </a>
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-1.5 text-sm text-white/40">
                    <p>Mon–Sat: 7:00 AM – 9:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                {/* Trust signals */}
                <div style={{ backgroundColor: "#f5f0e8" }} className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Why Tri-Point</h3>
                  <div className="space-y-3">
                    {[
                      ["★★★★★", "5.0 Google Rating"],
                      ["✓", "Fully Insured LLC"],
                      ["✓", "Nextdoor Neighborhood Favorite"],
                      ["✓", "Free Estimates"],
                      ["✓", "Locally Owned & Operated"],
                    ].map(([icon, text]) => (
                      <div key={text} className="flex items-center gap-3">
                        <span style={{ color: "#2C5F2E" }} className="font-bold text-sm w-6 shrink-0">{icon}</span>
                        <span className="text-gray-700 text-sm">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other service areas */}
                <div className="bg-white border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Also Serving</h3>
                  <ul className="space-y-2.5">
                    {Object.entries(otherAreas)
                      .filter(([s]) => s !== slug)
                      .map(([s, name]) => (
                        <li key={s}>
                          <Link
                            href={`/service-areas/${s}`}
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#2C5F2E] transition-colors group"
                          >
                            <span className="w-3 h-px bg-gray-300 group-hover:bg-[#2C5F2E] transition-colors" />
                            {name}, MI
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section style={{ backgroundColor: "#111111" }} className="py-20 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Ready?</p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-4xl md:text-5xl font-bold mb-5"
            >
              Improve Your {area.name} Property Today
            </h2>
            <p className="text-white/50 mb-10 text-lg max-w-xl mx-auto">
              Free estimates. Fast response. The trusted local choice in Macomb County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                style={{ backgroundColor: "#2C5F2E" }}
                className="inline-flex items-center justify-center gap-2 text-white px-10 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity"
              >
                Request a Free Estimate
              </Link>
              <a
                href="tel:+15863278080"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-10 py-4 font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                Call (586) 327-8080
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
