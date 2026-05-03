import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { posts } from "../../blog/posts";

type AreaData = {
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
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
    metaTitle: "Lawn Mowing & Landscaping — Washington Township, MI | Tri-Point",
    metaDescription:
      "Professional landscaping, lawn mowing, grass cutting, snow plowing & leaf removal in Washington Township, MI. Local Macomb County experts. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Washington Township MI",
      "grass cutting Washington Township Michigan",
      "lawn care Washington Township MI",
      "lawn cutting service Washington Township",
      "landscaping Washington Township MI",
      "landscaper near me Washington Township",
      "landscape design Washington Township MI",
      "snow plowing Washington Township MI",
      "driveway plowing Washington Township",
      "snow removal Washington Township Michigan",
      "leaf removal Washington Township MI",
      "fall cleanup Washington Township Michigan",
      "spring cleanup Washington Township MI",
      "yard cleanup Washington Township",
      "mulch installation Washington Township MI",
      "mulch delivery Washington Township Michigan",
      "lawn aeration Washington Township MI",
      "overseeding Washington Township Michigan",
      "landscaping company near me Washington Township",
      "yard work Washington Township MI",
      "Washington Township landscaper",
      "Washington Township lawn mowing service",
      "Washington Township snow removal",
      "landscaping near me Washington Township",
      "Washington Township lawn care company",
      "lawn mowing near me Washington Township",
      "lawn care near me Washington Township MI",
      "lawn service near me Washington Township",
    ],
    heroImage: "/photos/bills-google2.jpeg",
    heroAlt: "Professional landscaping services in Washington Township Michigan",
    intro:
      "Tri-Point Landscaping is Washington Township's trusted local lawn care and landscaping company. From weekly lawn mowing and grass cutting to snow plowing and leaf removal, we keep Macomb County properties looking their best — every season.",
    localDetails:
      "We serve Washington Township homeowners and businesses from 26 Mile Road to 32 Mile Road, and from Van Dyke Avenue to Romeo Plank Road. Whether you're in Stony Creek Meadows, Chattaburg Park, or anywhere in between, Tri-Point Landscaping is your neighbor and your landscaping partner.",
    bodyParagraph:
      "Washington Township is one of Macomb County's most desirable communities — and the homes here reflect that. Properties along 26 Mile, near Stony Creek Metropark, and throughout the township's well-established subdivisions deserve landscaping that matches the neighborhood's character. We bring the same attention to detail to a weekly mowing route as we do to a full landscape installation. We know the soil conditions, the typical drainage challenges on these properties, and the plants that thrive here. That local knowledge shows in every job we complete.",
    highlights: [
      "Based right here in Washington Township — not a distant franchise",
      "Serving properties along 26 Mile, 28 Mile, 30 Mile, and 32 Mile corridors",
      "Familiar with Washington Township's subdivision styles and landscape needs",
      "Fully insured LLC with fast same-day response to estimate requests",
      "4.9 Google rating · Nextdoor Neighborhood Favorite",
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
      { q: "Do you offer lawn mowing, grass cutting, and lawn care in Washington Township?", a: "Yes. Whether you call it lawn mowing, grass cutting, lawn care, or lawn service, Tri-Point Landscaping provides all of it in Washington Township. We offer weekly and bi-weekly schedules with mowing, edging, trimming, and blowing on every visit." },
      { q: "Do you do leaf removal and fall cleanup in Washington Township?", a: "Yes. Leaf removal and fall yard cleanup is one of our most popular Washington Township services. We remove all leaves, cut back perennials, clear beds, and haul everything away — no piles left behind." },
      { q: "Do you provide mulch delivery and installation in Washington Township?", a: "Yes. We deliver and install mulch, decorative stone, and river rock throughout Washington Township. Black, brown, cedar, and hardwood mulch available with clean bed edging on every job." },
      { q: "How much does lawn care or landscaping cost in Washington Township, MI?", a: "Pricing depends on your property size and which services you need. Every quote is based on a free on-site estimate — we walk your property and give you a clear, upfront price with no obligation. Call (586) 327-8080 or request an estimate online." },
    ],
  },
  "shelby-township": {
    name: "Shelby Township",
    metaTitle: "Lawn Mowing & Landscaping — Shelby Township, MI | Tri-Point",
    metaDescription:
      "Professional landscaping, lawn mowing, grass cutting, snow plowing & leaf removal in Shelby Township, MI. Trusted Macomb County experts. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Shelby Township MI",
      "grass cutting Shelby Township Michigan",
      "lawn care Shelby Township MI",
      "lawn cutting service Shelby Township",
      "landscaping Shelby Township MI",
      "landscaper near me Shelby Township",
      "landscape design Shelby Township MI",
      "snow plowing Shelby Township MI",
      "driveway plowing Shelby Township",
      "snow removal Shelby Township Michigan",
      "leaf removal Shelby Township MI",
      "fall cleanup Shelby Township Michigan",
      "spring cleanup Shelby Township MI",
      "yard cleanup Shelby Township",
      "mulch installation Shelby Township MI",
      "lawn aeration Shelby Township Michigan",
      "landscaping company near me Shelby Township",
      "yard work Shelby Township MI",
      "lawn service Shelby Township MI",
      "snow plow near me Shelby Township",
      "Shelby Township landscaper",
      "Shelby Township lawn mowing service",
      "Shelby Township snow removal",
      "landscaping near me Shelby Township",
      "Shelby Township lawn care company",
      "lawn mowing near me Shelby Township",
      "lawn care near me Shelby Township MI",
      "lawn service near me Shelby Township",
    ],
    heroImage: "/photos/IMG_4417.jpeg",
    heroAlt: "Professional landscaping services in Shelby Township Michigan",
    intro:
      "Tri-Point Landscaping provides professional lawn mowing, landscaping, and property maintenance throughout Shelby Township. From weekly grass cutting and lawn care to snow plowing and seasonal cleanup, we deliver results that Shelby Township homeowners and businesses can count on.",
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
      { q: "Do you offer grass cutting and lawn mowing in Shelby Township?", a: "Yes — lawn mowing, grass cutting, lawn care, lawn trimming — whatever you call it, we provide it in Shelby Township on weekly or bi-weekly schedules, April through October." },
      { q: "Do you plow driveways and do snow removal in Shelby Township?", a: "Yes. We provide snow plowing, driveway clearing, sidewalk salting, and ice management throughout Shelby Township. Seasonal contracts and per-push pricing both available." },
      { q: "Do you do leaf removal and spring cleanup in Shelby Township?", a: "Yes. Leaf removal, fall cleanup, and spring yard cleanup are all available in Shelby Township. We remove all debris and haul it away — leaving your property clean and ready for the season." },
      { q: "How much does lawn care or landscaping cost in Shelby Township, MI?", a: "Pricing depends on your property size and the services you need. Every quote is based on a free on-site estimate — we walk your property and give you a clear, upfront price with no obligation. Call (586) 327-8080 or request an estimate online." },
    ],
  },
  "macomb-township": {
    name: "Macomb Township",
    metaTitle: "Lawn Mowing & Landscaping — Macomb Township, MI | Tri-Point",
    metaDescription:
      "Professional landscaping, lawn mowing, grass cutting, snow plowing & leaf removal in Macomb Township, MI. Reliable Macomb County experts. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Macomb Township MI",
      "grass cutting Macomb Township Michigan",
      "lawn care Macomb Township MI",
      "lawn cutting service Macomb Township",
      "landscaping Macomb Township MI",
      "landscaper near me Macomb Township",
      "landscape design Macomb Township MI",
      "snow plowing Macomb Township MI",
      "driveway plowing Macomb Township",
      "snow removal Macomb Township Michigan",
      "leaf removal Macomb Township MI",
      "fall cleanup Macomb Township Michigan",
      "spring cleanup Macomb Township MI",
      "mulch installation Macomb Township MI",
      "lawn aeration Macomb Township Michigan",
      "landscaping company near me Macomb Township",
      "yard work Macomb Township MI",
      "lawn service Macomb Township MI",
      "Macomb Township landscaper",
      "Macomb Township lawn mowing service",
      "Macomb Township snow removal",
      "landscaping near me Macomb Township",
      "Macomb Township lawn care company",
      "lawn mowing near me Macomb Township",
      "lawn care near me Macomb Township MI",
      "lawn service near me Macomb Township",
    ],
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
      "4.9 Google rating and growing reputation in Macomb County",
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
      { q: "Do you offer lawn mowing and grass cutting in Macomb Township?", a: "Yes. We provide lawn mowing, grass cutting, and lawn care throughout Macomb Township on weekly and bi-weekly schedules. Every visit includes mowing, edging, trimming, and blowing." },
      { q: "Do you do snow plowing and driveway plowing in Macomb Township?", a: "Yes. We serve Macomb Township homeowners with snow plowing, driveway clearing, sidewalk salting, and full ice management. Seasonal contracts and per-push options available." },
      { q: "Do you offer leaf removal and yard cleanup in Macomb Township?", a: "Yes. Leaf removal and seasonal yard cleanup are available throughout Macomb Township. We remove leaves, debris, and plant material and haul everything away." },
      { q: "How much does lawn care or landscaping cost in Macomb Township, MI?", a: "Pricing is based on your specific property and services needed. All estimates are free — we assess your property in person and give you a clear, upfront quote before any work begins. Call (586) 327-8080 or request an estimate online." },
    ],
  },
  "romeo": {
    name: "Romeo",
    metaTitle: "Lawn Mowing & Landscaping — Romeo, MI | Tri-Point Landscaping",
    metaDescription:
      "Professional landscaping, lawn mowing, grass cutting, snow plowing & leaf removal in Romeo, MI. Serving the Village of Romeo and surrounding Macomb County areas. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Romeo MI",
      "grass cutting Romeo Michigan",
      "lawn care Romeo MI",
      "landscaping Romeo MI",
      "landscaper near me Romeo Michigan",
      "snow plowing Romeo MI",
      "driveway plowing Romeo Michigan",
      "snow removal Village of Romeo",
      "leaf removal Romeo MI",
      "fall cleanup Romeo Michigan",
      "spring cleanup Romeo MI",
      "mulch installation Romeo MI",
      "lawn aeration Romeo Michigan",
      "landscaping company near me Romeo MI",
      "yard work Romeo Michigan",
      "lawn service Romeo MI",
      "Romeo landscaper",
      "Romeo lawn mowing service",
      "Romeo snow removal",
      "landscaping near me Romeo",
      "Romeo lawn care company",
      "lawn mowing near me Romeo MI",
      "lawn care near me Romeo Michigan",
      "lawn service near me Romeo",
    ],
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
      { q: "Do you offer lawn mowing and grass cutting in Romeo, MI?", a: "Yes. We provide lawn mowing, grass cutting, and lawn care in Romeo on weekly and bi-weekly schedules, from April through October. Every visit includes mowing, edging, trimming, and blowing." },
      { q: "Do you plow driveways and provide snow removal in Romeo?", a: "Yes. We serve Romeo homeowners with snow plowing, driveway clearing, and salting. Seasonal contracts and per-push pricing available. Long driveways and rural access roads included." },
      { q: "How much does lawn care or landscaping cost in Romeo, MI?", a: "Pricing varies by property size, lot type, and services needed — rural and larger properties in Romeo are quoted based on the specific scope of work. All estimates are free. Call (586) 327-8080 or request one online." },
    ],
  },
  "ray-township": {
    name: "Ray Township",
    metaTitle: "Lawn Mowing & Landscaping — Ray Township, MI | Tri-Point",
    metaDescription:
      "Professional landscaping, lawn mowing, snow plowing & leaf removal in Ray Township, MI. Serving Macomb County rural and residential properties. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Ray Township MI",
      "grass cutting Ray Township Michigan",
      "lawn care Ray Township MI",
      "landscaping Ray Township MI",
      "landscaper near me Ray Township",
      "snow plowing Ray Township MI",
      "driveway plowing Ray Township Michigan",
      "snow removal Ray Township MI",
      "leaf removal Ray Township Michigan",
      "fall cleanup Ray Township MI",
      "spring cleanup Ray Township MI",
      "mulch installation Ray Township MI",
      "landscaping company near me Ray Township",
      "lawn service Ray Township MI",
      "rural lawn care Ray Township Michigan",
      "Ray Township landscaper",
      "Ray Township lawn mowing service",
      "Ray Township snow removal",
      "landscaping near me Ray Township",
      "Ray Township lawn care company",
      "lawn mowing near me Ray Township MI",
      "lawn care near me Ray Township Michigan",
      "lawn service near me Ray Township",
    ],
    heroImage: "/photos/lawn-mow-4.jpeg",
    heroAlt: "Professional lawn mowing on large property in Ray Township Michigan",
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
      { q: "Do you offer lawn mowing and grass cutting in Ray Township?", a: "Yes. We mow lawns throughout Ray Township on weekly and bi-weekly schedules. Our equipment is sized for larger rural lots and extended mowing routes — not just small suburban yards." },
      { q: "Do you provide leaf removal and yard cleanup in Ray Township?", a: "Yes. We do complete leaf removal, fall yard cleanup, and spring cleanup for Ray Township properties, including larger acreage lots. We haul all debris away." },
      { q: "How much does lawn care or landscaping cost in Ray Township, MI?", a: "Ray Township properties vary widely in lot size and scope, so pricing is always quoted individually after a free on-site estimate. Call (586) 327-8080 or request an estimate online and we'll give you a clear, upfront price." },
    ],
  },
  "bruce-township": {
    name: "Bruce Township",
    metaTitle: "Lawn Mowing & Landscaping — Bruce Township, MI | Tri-Point",
    metaDescription:
      "Professional landscaping, lawn mowing, snow plowing & leaf removal in Bruce Township, MI. Serving Macomb County properties. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Bruce Township MI",
      "grass cutting Bruce Township Michigan",
      "lawn care Bruce Township MI",
      "landscaping Bruce Township MI",
      "landscaper near me Bruce Township",
      "snow plowing Bruce Township MI",
      "driveway plowing Bruce Township Michigan",
      "snow removal Bruce Township MI",
      "leaf removal Bruce Township Michigan",
      "fall cleanup Bruce Township MI",
      "spring cleanup Bruce Township MI",
      "mulch installation Bruce Township MI",
      "landscaping company near me Bruce Township",
      "lawn service Bruce Township MI",
      "rural lawn care Bruce Township Michigan",
      "Bruce Township landscaper",
      "Bruce Township lawn mowing service",
      "Bruce Township snow removal",
      "landscaping near me Bruce Township",
      "Bruce Township lawn care company",
      "lawn mowing near me Bruce Township MI",
      "lawn care near me Bruce Township Michigan",
      "lawn service near me Bruce Township",
    ],
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
      { q: "Do you offer lawn mowing and grass cutting in Bruce Township?", a: "Yes. We mow lawns throughout Bruce Township weekly or bi-weekly during the growing season. Our crew handles grass cutting, edging, trimming, and blowing on every visit." },
      { q: "Do you do snow plowing and driveway clearing in Bruce Township?", a: "Yes. Bruce Township snow plowing, driveway clearing, and salting are all available. Seasonal contracts and per-push pricing, including long rural driveway routes." },
      { q: "How much does lawn care or landscaping cost in Bruce Township, MI?", a: "Pricing is based on your property size and service scope — all estimates are free and done on-site. Call (586) 327-8080 or request an estimate online for a clear, upfront quote." },
    ],
  },
  "rochester": {
    name: "Rochester",
    metaTitle: "Lawn Mowing & Landscaping — Rochester, MI | Tri-Point",
    metaDescription:
      "Premium landscaping, lawn mowing, grass cutting, snow plowing & leaf removal in Rochester, MI. Serving Oakland County's most prestigious properties. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Rochester MI",
      "grass cutting Rochester Michigan",
      "lawn care Rochester MI",
      "lawn cutting service Rochester MI",
      "landscaping Rochester MI",
      "landscaper near me Rochester Michigan",
      "landscape design Rochester MI",
      "snow plowing Rochester MI",
      "driveway plowing Rochester Michigan",
      "snow removal Rochester MI",
      "leaf removal Rochester Michigan",
      "fall cleanup Rochester MI",
      "spring cleanup Rochester MI",
      "mulch installation Rochester MI",
      "mulch delivery Rochester Michigan",
      "lawn aeration Rochester MI",
      "landscaping company near me Rochester",
      "yard work Rochester MI",
      "lawn service Rochester MI Oakland County",
      "landscaping Oakland County Rochester",
      "Rochester landscaper",
      "Rochester lawn mowing service",
      "Rochester snow removal",
      "landscaping near me Rochester MI",
      "Rochester lawn care company",
      "lawn mowing near me Rochester MI",
      "lawn care near me Rochester Michigan",
      "lawn service near me Rochester",
    ],
    heroImage: "/photos/bills-google2.jpeg",
    heroAlt: "Premium landscaping and lawn care in Rochester Michigan",
    intro:
      "Tri-Point Landscaping brings premium lawn mowing, landscaping, and property care services to Rochester, MI. From weekly grass cutting and lawn care to snow plowing, leaf removal, and mulch installation, we deliver the quality Rochester homeowners and businesses expect on every visit.",
    localDetails:
      "We serve Rochester properties along Walnut Boulevard, University Drive, Tienken Road, and throughout the city's prestigious residential corridors and commercial areas. Rochester's mature, established neighborhoods require experienced, detail-oriented care — and Tri-Point Landscaping delivers that on every visit.",
    bodyParagraph:
      "Rochester is one of Michigan's most desirable communities — beautiful historic neighborhoods, award-winning downtown, and homeowners who take exceptional pride in their properties. That means the landscaping bar is high. Tri-Point Landscaping meets that bar. We provide weekly lawn maintenance with precise edging and trimming, detailed bed care, professional mulch and stone installation, seasonal cleanups done right, and reliable snow removal so Rochester homeowners don't have to worry when winter hits. Our crews are trained to the standard that Rochester properties demand — and we back our work with a commitment to getting it right every time.",
    highlights: [
      "Serving Rochester's prestigious residential and commercial properties",
      "Premium attention to detail that matches Rochester's high standards",
      "Consistent crew scheduling — same team, same quality, every visit",
      "Fully insured LLC — licensed and professional",
      "Free estimates for all Rochester properties",
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
      { q: "Do you provide landscaping services in Rochester, MI?", a: "Yes. Tri-Point Landscaping serves Rochester with premium lawn maintenance, landscape design & installation, mulch & stone, seasonal cleanups, and snow removal. Call (586) 327-8080 for a free estimate." },
      { q: "Can you maintain high-end properties in Rochester?", a: "Absolutely. Our crews are trained to the detail-oriented standards that Rochester properties require. We provide precise edging, clean bed lines, and professional results on every visit." },
      { q: "Do you offer lawn mowing and grass cutting in Rochester, MI?", a: "Yes — whether you call it lawn mowing, grass cutting, lawn care, lawn cutting, or yard service, Tri-Point Landscaping provides all of it in Rochester on weekly and bi-weekly schedules from April through October. Mowing, edging, trimming, and blowing on every visit." },
      { q: "Do you offer snow plowing and driveway plowing in Rochester, MI?", a: "Yes. We provide snow plowing, driveway clearing, sidewalk salting, and ice management throughout Rochester. Seasonal contracts and per-push pricing are both available for Rochester homeowners." },
      { q: "Do you do leaf removal and fall cleanup in Rochester, MI?", a: "Yes. Leaf removal and fall cleanup is one of our most requested Rochester services. We remove all leaves, clear beds, cut back perennials, and haul everything away — no piles left behind." },
      { q: "Do you deliver and install mulch in Rochester, MI?", a: "Yes. We offer mulch delivery and installation throughout Rochester. Black, brown, cedar, and hardwood mulch options available, with clean bed edging included on every mulch job." },
      { q: "How much does lawn care or landscaping cost in Rochester, MI?", a: "Pricing depends on your specific property and services. Every estimate is free and done on-site so we can give you an accurate, honest quote. Call (586) 327-8080 or request an estimate online." },
    ],
  },
  "rochester-hills": {
    name: "Rochester Hills",
    metaTitle: "Lawn Care & Landscaping — Rochester Hills, MI | Tri-Point",
    metaDescription:
      "Premium landscaping, lawn mowing, grass cutting, snow plowing & leaf removal in Rochester Hills, MI. Professional service for Oakland County's premier community. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing Rochester Hills MI",
      "grass cutting Rochester Hills Michigan",
      "lawn care Rochester Hills MI",
      "lawn cutting service Rochester Hills",
      "landscaping Rochester Hills MI",
      "landscaper near me Rochester Hills Michigan",
      "landscape design Rochester Hills MI",
      "snow plowing Rochester Hills MI",
      "driveway plowing Rochester Hills Michigan",
      "snow removal Rochester Hills MI",
      "leaf removal Rochester Hills Michigan",
      "fall cleanup Rochester Hills MI",
      "spring cleanup Rochester Hills MI",
      "mulch installation Rochester Hills MI",
      "mulch delivery Rochester Hills Michigan",
      "lawn aeration Rochester Hills MI",
      "overseeding Rochester Hills Michigan",
      "landscaping company near me Rochester Hills",
      "yard work Rochester Hills MI",
      "lawn service Rochester Hills MI Oakland County",
      "lawn care Oakland County Rochester Hills",
      "Rochester Hills landscaper",
      "Rochester Hills lawn mowing service",
      "Rochester Hills snow removal",
      "landscaping near me Rochester Hills",
      "Rochester Hills lawn care company",
      "lawn mowing near me Rochester Hills MI",
      "lawn care near me Rochester Hills Michigan",
      "lawn service near me Rochester Hills",
    ],
    heroImage: "/photos/IMG_4417.jpeg",
    heroAlt: "Premium landscaping and lawn care in Rochester Hills Michigan",
    intro:
      "Tri-Point Landscaping provides premium lawn mowing, landscaping, and property care throughout Rochester Hills, MI. From weekly grass cutting and lawn care to snow plowing and leaf removal, we deliver the quality Rochester Hills homeowners expect.",
    localDetails:
      "We serve Rochester Hills along Auburn Road, Tienken Road, Adams Road, Livernois Road, and throughout this Oakland County community's well-established residential neighborhoods and commercial corridors. Rochester Hills properties are among the most beautiful in southeast Michigan — and we help keep them that way.",
    bodyParagraph:
      "Rochester Hills is consistently ranked among Michigan's best places to live — beautiful neighborhoods, excellent schools, and homeowners who invest significantly in their properties. Maintaining a Rochester Hills property to its full potential requires a landscaping company that takes the same pride in their work as residents take in their community. Tri-Point Landscaping brings that level of commitment. Our services cover the full property care calendar: spring cleanup and fresh mulch in April, weekly precision mowing through summer, fall leaf removal in October, and reliable driveway plowing all winter. We serve Rochester Hills homeowners who want it done right — every time.",
    highlights: [
      "Serving Rochester Hills — one of Michigan's premier residential communities",
      "Premium quality that matches Rochester Hills' exceptional properties",
      "Detail-oriented crews with consistent scheduling",
      "Fully insured LLC — professional on every job",
      "Free on-site estimates throughout Rochester Hills",
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
      { q: "Do you provide landscaping in Rochester Hills, MI?", a: "Yes. We serve Rochester Hills with lawn maintenance, landscape design & installation, mulch & stone, seasonal cleanups, and snow removal. Call (586) 327-8080 for a free estimate." },
      { q: "Do you work on larger, high-end properties in Rochester Hills?", a: "Absolutely. Rochester Hills properties are some of the most beautiful in southeast Michigan, and we approach every one with the detail and care they deserve." },
      { q: "Do you offer full-season lawn care contracts in Rochester Hills?", a: "Yes. Our seasonal maintenance packages cover all mowing visits, spring and fall cleanups, and optional mulch, snow removal, and aeration — all under one simple agreement." },
      { q: "Do you offer lawn mowing and grass cutting in Rochester Hills, MI?", a: "Yes — lawn mowing, grass cutting, lawn care, lawn service — we provide all of it in Rochester Hills on consistent weekly or bi-weekly schedules from April through October." },
      { q: "Do you offer snow plowing and driveway plowing in Rochester Hills?", a: "Yes. We provide snow plowing, driveway clearing, sidewalk salting, and ice management throughout Rochester Hills in Oakland County. Seasonal contracts and per-push pricing available." },
      { q: "Do you do leaf removal, mulch installation, and yard cleanup in Rochester Hills?", a: "Yes. We offer complete leaf removal, spring and fall cleanup, and mulch delivery & installation throughout Rochester Hills. Multiple mulch types available, clean bed edging included." },
      { q: "How much does lawn care or landscaping cost in Rochester Hills, MI?", a: "Pricing is always quoted individually after a free on-site estimate — no guesswork, no generic rates. Call (586) 327-8080 or request an estimate online and we'll walk your property and give you a clear, upfront price." },
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
  "rochester": "Rochester",
  "rochester-hills": "Rochester Hills",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) return {};
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    keywords: area.keywords,
    alternates: { canonical: `https://www.tripointlandscaping.com/service-areas/${slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://www.tripointlandscaping.com/service-areas/${slug}`,
      siteName: "Tri-Point Landscaping",
      type: "website",
      images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: area.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(areas).map((slug) => ({ slug }));
}

const oaklandCountyAreas = new Set(["rochester", "rochester-hills"]);

const areaPostSlugs: Record<string, string[]> = {
  "washington-township": [
    "landscaping-washington-township-mi",
    "residential-landscaping-washington-township-mi",
    "spring-lawn-care-checklist-washington-township",
    "snow-removal-washington-township-mi",
    "fall-cleanup-washington-township-mi",
    "landscape-design-ideas-washington-township",
    "patio-installation-washington-township-mi",
  ],
  "shelby-township": [
    "lawn-care-service-shelby-township-mi",
    "landscape-design-shelby-township-mi",
    "spring-cleanup-shelby-township-mi",
    "fall-cleanup-shelby-township-mi",
    "snow-removal-shelby-township-mi",
    "patio-installation-shelby-township-mi",
    "retaining-wall-shelby-township-mi",
  ],
  "macomb-township": [
    "landscaping-macomb-township-mi",
    "lawn-care-macomb-township-mi",
    "spring-cleanup-macomb-township-mi",
    "fall-cleanup-macomb-township-mi",
    "snow-plowing-macomb-township-mi",
    "patio-installation-macomb-township-mi",
  ],
  "romeo": [
    "lawn-care-romeo-mi",
    "landscaping-romeo-mi",
    "snow-removal-romeo-mi",
    "spring-cleanup-romeo-mi",
    "fall-cleanup-romeo-mi",
  ],
  "ray-township": [
    "landscaping-ray-township-mi",
    "lawn-care-ray-township-mi",
    "spring-cleanup-ray-township-mi",
    "snow-removal-ray-township-mi",
  ],
  "bruce-township": [
    "landscaping-bruce-township-mi",
    "lawn-care-bruce-township-mi",
    "spring-cleanup-bruce-township-mi",
    "fall-cleanup-bruce-township-mi",
    "snow-removal-bruce-township-mi",
  ],
  "rochester": [
    "landscaping-rochester-mi",
    "lawn-care-rochester-mi",
    "snow-removal-rochester-mi",
    "spring-cleanup-rochester-mi",
  ],
  "rochester-hills": [
    "landscaping-rochester-hills-mi",
    "lawn-care-rochester-hills-mi",
    "snow-removal-rochester-hills-mi",
  ],
};

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = areas[slug];
  if (!area) notFound();

  const county = oaklandCountyAreas.has(slug) ? "Oakland County" : "Macomb County";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://www.tripointlandscaping.com/service-areas" },
      { "@type": "ListItem", position: 3, name: area.name, item: `https://www.tripointlandscaping.com/service-areas/${slug}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LandscapingBusiness"],
    "@id": `https://www.tripointlandscaping.com/service-areas/${slug}`,
    name: "Tri-Point Landscaping LLC",
    image: "https://www.tripointlandscaping.com/logo-black.png",
    url: `https://www.tripointlandscaping.com/service-areas/${slug}`,
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
      containedInPlace: { "@type": "AdministrativeArea", name: `${county}, Michigan` },
    },
    description: `Professional landscaping, lawn care, snow removal, and property services in ${area.name}, Michigan. Serving all of ${county}. Free estimates — call (586) 327-8080.`,
    priceRange: "$$",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "10" },
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
              {county}, Michigan
            </p>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            >
              Lawn Mowing, Landscaping<br />&amp; Lawn Care in {area.name}, MI
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
                    Serving {area.name} and all of {county}. Fast response — typically same day.
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
                    <div className="flex items-center gap-3">
                      <span className="text-yellow-500 text-sm shrink-0 tracking-tight">★★★★★</span>
                      <span className="text-gray-700 text-sm">4.9 Google Rating</span>
                    </div>
                    {[
                      "Fully Insured LLC",
                      "Nextdoor Neighborhood Favorite",
                      "Free Estimates",
                      "Locally Owned & Operated",
                    ].map((text) => (
                      <div key={text} className="flex items-center gap-3">
                        <span style={{ color: "#2C5F2E" }} className="font-bold text-sm w-4 shrink-0">✓</span>
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

        {/* ── RELATED ARTICLES ── */}
        {(() => {
          const slugsForArea = areaPostSlugs[slug] ?? [];
          const areaPosts = slugsForArea
            .map((s) => posts.find((p) => p.slug === s))
            .filter(Boolean) as NonNullable<typeof posts[number]>[];
          if (areaPosts.length === 0) return null;
          return (
            <section className="py-16 bg-[#f9f7f4] border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Local Resources</p>
                <h2
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-3xl font-bold text-gray-900 mb-8"
                >
                  {area.name} Lawn &amp; Landscaping Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {areaPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-white border border-gray-100 p-6 hover:border-[#2C5F2E] hover:shadow-sm transition-all"
                    >
                      <p className="text-xs text-green-700 font-semibold uppercase tracking-wider mb-2">{post.category}</p>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#2C5F2E] transition-colors leading-snug mb-2 text-[15px]">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{post.description}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/blog" className="text-sm font-semibold text-[#2C5F2E] hover:underline">
                    View all articles →
                  </Link>
                </div>
              </div>
            </section>
          );
        })()}

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
