import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

/* ─────────────────────────────────────────
   SERVICE DATA
───────────────────────────────────────── */
const services: Record<string, {
  name: string;
  shortDesc: string;
  heroImage: string;
  included: string[];
  benefits: string[];
  bodyTemplate: (area: string, roads: string) => string;
}> = {
  "lawn-maintenance": {
    name: "Lawn Maintenance",
    shortDesc: "Weekly mowing, edging, trimming & blowing — April through October.",
    heroImage: "/photos/lawn-stripe-hero.jpeg",
    included: [
      "Weekly mowing at the correct cutting height",
      "Crisp, clean edging along all beds and hardscapes",
      "String trimming around obstacles, fences & trees",
      "Full blowing of walks, drives & patios after each visit",
      "Spring startup and end-of-season shutdown",
      "Schedule adjustments during drought or heavy growth",
    ],
    benefits: [
      "Consistent curb appeal that stands out in your neighborhood",
      "Healthy turf — proper mowing height prevents disease and drought stress",
      "Time back in your week — let us handle it every time",
      "Reliable professionals who show up and communicate proactively",
    ],
    bodyTemplate: (area, roads) =>
      `Maintaining a lawn in ${area} takes more than showing up with a mower. Michigan's variable seasons — from soggy springs to dry July stretches — demand a crew that adapts to what your turf actually needs week-to-week. Tri-Point Landscaping has been providing professional lawn maintenance to homeowners across ${area} and all of northern Macomb County. We service properties along ${roads} and throughout the community's established subdivisions. Our crews work with precision — every edge is clean, every visit is consistent, and every property is treated with the same attention to detail we'd give our own. Whether you're looking for a reliable weekly service or want to free up your weekends for good, Tri-Point Landscaping is the team ${area} homeowners trust.`,
  },
  "landscaping": {
    name: "Landscaping",
    shortDesc: "Custom bed design, plantings, stone features & full landscape installations.",
    heroImage: "/photos/0728A183-FBB6-4A53-AA3D-103C3E39A7EF.jpeg",
    included: [
      "Custom landscape design consultation",
      "New planting bed creation and edging",
      "Plant and tree selection tailored to Michigan climate",
      "Sod installation and lawn establishment",
      "Stone features, retaining walls & borders",
      "Full landscape renovation and renovation planning",
    ],
    benefits: [
      "Dramatically improved curb appeal and property value",
      "Plants chosen to thrive in Macomb County's climate and soil",
      "One team handles design, installation, and follow-up care",
      "Clean, professional results that last season after season",
    ],
    bodyTemplate: (area, roads) =>
      `A well-designed landscape transforms a property — and in ${area}, where homeowners take pride in their properties, great landscaping stands out. Whether you're starting from scratch on a new build or renovating an established yard, Tri-Point Landscaping brings the expertise to make your vision real. We serve properties throughout ${area}, from homes along ${roads} to newer subdivisions and established neighborhoods. Our team handles every phase: design consultation, plant selection, installation, and cleanup. We know what thrives in Michigan's soil and climate, and we select every plant with longevity in mind. The result is a landscape that looks stunning the day we finish — and keeps improving for years to come.`,
  },
  "mulch-and-stone": {
    name: "Mulch & Stone",
    shortDesc: "Premium mulch installation, decorative stone & crisp bed edging.",
    heroImage: "/photos/mulch.jpg",
    included: [
      "Premium shredded hardwood or dyed mulch",
      "Decorative stone: river rock, crushed granite, lava rock & more",
      "Sharp, clean spade bed edging",
      "Removal and disposal of old mulch",
      "Weed barrier installation where needed",
      "Tree ring and garden bed preparation",
    ],
    benefits: [
      "Instant, dramatic curb appeal improvement",
      "Moisture retention and weed suppression for your plants",
      "Clean lines and consistent color across all your beds",
      "Professional results that take hours to DIY — done in one visit",
    ],
    bodyTemplate: (area, roads) =>
      `Nothing refreshes a property's appearance faster than fresh mulch and clean bed edges — and in ${area}, where curb appeal matters, Tri-Point Landscaping delivers results that turn heads. We serve homeowners throughout ${area}, including properties along ${roads} and all surrounding neighborhoods. Our mulch and stone installations are done right: beds are edged with a sharp spade before any material goes down, old mulch is removed if needed, and every inch of ground coverage is installed at the right depth. We carry premium hardwood, dyed mulch, and a full selection of decorative stone options. One visit can transform a tired-looking front yard into a polished, professional landscape that makes the whole property look cared for.`,
  },
  "seasonal-cleanup": {
    name: "Seasonal Cleanup",
    shortDesc: "Spring and fall cleanups that protect and prepare your property.",
    heroImage: "/photos/spring.jpg",
    included: [
      "Complete leaf removal and hauling",
      "Perennial cutback and bed cleanup",
      "Debris removal from all beds and lawns",
      "Edge cleanup and border refresh",
      "Gutter clearing (add-on available)",
      "Property walk-through and condition report",
    ],
    benefits: [
      "Your property looks pristine before and after every season",
      "Prevents disease and pests caused by leaf accumulation",
      "Protects your plantings from winter damage",
      "Saves 4–8 hours of hard labor you don't have to do",
    ],
    bodyTemplate: (area, roads) =>
      `Michigan's springs and falls are beautiful — but they leave a lot of work behind. In ${area}, where mature trees line many neighborhoods, fall leaf cleanup alone can take a full weekend. Tri-Point Landscaping handles it all so you don't have to. We serve properties throughout ${area}, from neighborhoods along ${roads} to newer developments across the township. Our spring cleanups prep your property for the growing season: beds are cut back, debris is cleared, and everything is reset after the winter. Our fall cleanups go deep — leaves are fully removed, perennials are cut down, and beds are cleaned before the freeze. We haul everything away, leaving your property looking its best when it matters most.`,
  },
  "snow-removal": {
    name: "Snow & Ice Management",
    shortDesc: "Driveway plowing, salting & de-icing across Macomb County.",
    heroImage: "/photos/12D7CE8B-99F8-4285-BFD8-A33E849120E0.jpeg",
    included: [
      "Residential driveway and parking area plowing",
      "Sidewalk and walkway clearing",
      "Rock salt and calcium chloride application",
      "Ice management and de-icing treatments",
      "Seasonal service contracts",
      "Per-push pricing also available",
    ],
    benefits: [
      "Safe, passable driveways and walkways every storm",
      "Priority service — you're never waiting all day",
      "Seasonal contracts mean no phone calls during storms",
      "Reliable local crew that knows Macomb County weather",
    ],
    bodyTemplate: (area, roads) =>
      `Michigan winters in ${area} are serious — and a driveway buried in snow or covered in ice shouldn't be your problem at 6 AM. Tri-Point Landscaping provides dependable residential snow removal throughout ${area}, serving properties along ${roads} and across the township. We offer both seasonal service contracts (the simplest option — one payment covers the whole winter) and per-push pricing for homeowners who prefer flexibility. Our crews are out early and working efficiently so you can get where you need to go. Ice management is included — we apply salt and calcium chloride after plowing to keep driveways and walkways safe. Don't wait until the first storm. Reach out now and get on our route before winter hits.`,
  },
  "lawn-renovations": {
    name: "Lawn Renovations",
    shortDesc: "Core aeration, overseeding, dethatching & top dressing for a thicker, healthier lawn.",
    heroImage: "/photos/Aeration-with-aerator.jpg",
    included: [
      "Core aeration — relieves compaction and opens root channels",
      "Overseeding with premium Michigan-adapted grass seed",
      "Dethatching to remove dead buildup and improve water absorption",
      "Top dressing with compost or sand blend",
      "Starter fertilizer application after seeding",
      "Watering and aftercare guidance",
    ],
    benefits: [
      "Dramatically thicker turf — results visible within 2–3 weeks",
      "Healthier root systems that hold up through drought and cold",
      "Reduced weed pressure as dense grass crowds out competition",
      "Science-backed process — the same approach used on professional turf",
    ],
    bodyTemplate: (area, roads) =>
      `A thin, struggling lawn in ${area} doesn't need to be replaced — it needs to be renovated. Tri-Point Landscaping's lawn renovation programs use core aeration, overseeding, and dethatching to transform weak, patchy turf into a dense, healthy lawn that stands up to Michigan's climate. We serve homeowners throughout ${area}, including properties along ${roads} and across the community. Core aeration breaks up compaction and creates seed-to-soil contact, while overseeding fills in bare areas with premium grass varieties proven to thrive in Macomb County. Dethatching removes the layer of dead material that chokes new growth and blocks water penetration. The results are visible in weeks and build year over year. If your lawn hasn't been aerated in the last two seasons, it's time — and Tri-Point Landscaping makes the process easy, affordable, and effective.`,
  },
  "hardscaping": {
    name: "Hardscaping",
    shortDesc: "Patios, walkways, retaining walls, fire pits & outdoor living spaces.",
    heroImage: "/photos/0728A183-FBB6-4A53-AA3D-103C3E39A7EF.jpeg",
    included: [
      "Custom patio design and paver or natural stone installation",
      "Flagstone, paver & natural stone walkways and pathways",
      "Retaining walls in block, natural stone, or timber",
      "Custom fire pits and outdoor fire features",
      "Garden steps, borders, and landscape edging",
      "Outdoor room design and living space planning",
      "Project coordination with trusted local hardscaping partners",
      "Full site cleanup after installation",
    ],
    benefits: [
      "Dramatically expanded outdoor living space that adds real value to your home",
      "One point of contact — we coordinate partners and manage the project end to end",
      "Materials and base prep engineered for Michigan's freeze-thaw cycles",
      "Finished result integrates seamlessly with your existing lawn and landscape",
    ],
    bodyTemplate: (area, roads) =>
      `Homeowners in ${area} are investing more in their outdoor spaces than ever — and hardscaping is one of the highest-ROI improvements you can make. Whether you want a paver patio off the back door, a natural stone walkway through the front yard, or a retaining wall to manage the grade on a sloped property, Tri-Point Landscaping coordinates every detail for properties throughout ${area}, including homes along ${roads}. We work with trusted local hardscaping partners and stay on-site through every phase, ensuring quality, cleanliness, and a finished product that complements your existing landscape. One call to Tri-Point Landscaping is all it takes to get started.`,
  },
  "commercial": {
    name: "Commercial Landscaping",
    shortDesc: "Full-service landscaping for offices, HOAs, retail centers & commercial properties.",
    heroImage: "/photos/boxwood.jpg",
    included: [
      "Weekly or bi-weekly commercial mowing programs",
      "Commercial bed maintenance and mulching",
      "Seasonal commercial plantings and color rotation",
      "Snow removal and ice management",
      "Irrigation system management",
      "HOA common area maintenance",
    ],
    benefits: [
      "Consistent, professional appearance that impresses clients",
      "Reliable scheduling — we show up every time, no excuses",
      "Single point of contact for all your property needs",
      "Competitive commercial pricing with transparent contracts",
    ],
    bodyTemplate: (area, roads) =>
      `The appearance of your commercial property in ${area} is one of the first things clients, customers, and tenants notice. A well-maintained commercial landscape communicates professionalism, attention to detail, and a business that cares. Tri-Point Landscaping provides full-service commercial landscaping to offices, HOAs, retail centers, and businesses throughout ${area}, including properties along ${roads} and across the commercial corridors. We offer flexible commercial programs: weekly mowing, seasonal bed maintenance, mulching, snow removal, and more — all under one reliable contract. Our crews show up consistently, communicate proactively, and hold commercial properties to the same high standard as our residential clients. If you manage a commercial property in ${area} and want a landscaping partner who delivers, call Tri-Point Landscaping today.`,
  },
};

/* ─────────────────────────────────────────
   AREA DATA
───────────────────────────────────────── */
const areas: Record<string, {
  name: string;
  county: string;
  roads: string;
  heroImage: string;
  localDesc: string;
}> = {
  "washington-township": {
    name: "Washington Township",
    county: "Macomb County",
    roads: "26 Mile Road, 28 Mile Road, Van Dyke Avenue & Romeo Plank Road",
    heroImage: "/photos/weekly-mowing-shelby-township-mi.jpg.png",
    localDesc: "Washington Township is Macomb County's premier residential community, home to Stony Creek Metropark and well-established subdivisions along Van Dyke and Romeo Plank Road. Homeowners here expect consistently excellent property care — and that's exactly what we deliver.",
  },
  "shelby-township": {
    name: "Shelby Township",
    county: "Macomb County",
    roads: "23 Mile Road, 24 Mile Road, Schoenherr & M-59",
    heroImage: "/photos/IMG_4417.jpeg",
    localDesc: "Shelby Township's thriving residential corridors — from the neighborhoods near River Bends Park to the growing subdivisions along M-59 — make it one of Macomb County's most active markets for professional property care.",
  },
  "macomb-township": {
    name: "Macomb Township",
    county: "Macomb County",
    roads: "25 Mile Road, 26 Mile Road & Hall Road",
    heroImage: "/photos/mulch.jpg",
    localDesc: "Macomb Township's rapid residential growth — from new builds near Partridge Creek to established neighborhoods along Hall Road — has created a vibrant community of homeowners who take real pride in their properties.",
  },
  "romeo": {
    name: "Romeo",
    county: "Macomb County",
    roads: "Main Street, Thirty-two Mile Road & Van Dyke Avenue",
    heroImage: "/photos/spring.jpg",
    localDesc: "Romeo's historic downtown village, the orchards along Thirty-two Mile Road, and its mix of residential and rural properties create a landscape environment that demands careful, expert care — the kind Tri-Point Landscaping delivers every visit.",
  },
  "ray-township": {
    name: "Ray Township",
    county: "Macomb County",
    roads: "30 Mile Road, 31 Mile Road & Card Road",
    heroImage: "/photos/IMG_3369.jpeg",
    localDesc: "Ray Township's larger rural lots, properties near the Macomb Orchard Trail, and proximity to Lake St. Clair Metropark require the heavy-duty equipment and local expertise that Tri-Point Landscaping brings to every job.",
  },
  "bruce-township": {
    name: "Bruce Township",
    county: "Macomb County",
    roads: "32 Mile Road, 33 Mile Road & Van Dyke Avenue",
    heroImage: "/photos/boxwood.jpg",
    localDesc: "Bruce Township — home to Wolcott Mill Metropark and sitting at the northern edge of Macomb County's growth corridor — offers a blend of rural character and residential development that calls for experienced, adaptable crews.",
  },
  "rochester": {
    name: "Rochester",
    county: "Oakland County",
    roads: "Walnut Boulevard, University Drive & Tienken Road",
    heroImage: "/photos/bills-google2.jpeg",
    localDesc: "Rochester's walkable downtown, the Paint Creek Trail, and prestigious residential neighborhoods like those near Stoney Creek make this one of Michigan's most desirable communities — with landscaping expectations to match.",
  },
  "rochester-hills": {
    name: "Rochester Hills",
    county: "Oakland County",
    roads: "Auburn Road, Adams Road & Livernois Road",
    heroImage: "/photos/IMG_4417.jpeg",
    localDesc: "Rochester Hills — consistently ranked among Michigan's best places to live — is home to the Paint Creek Trail, Bald Mountain Recreation Area, and Meadow Brook Hall. Homeowners here invest significantly in their properties, and Tri-Point Landscaping meets that standard on every visit.",
  },
};

/* ─────────────────────────────────────────
   FAQ DATA PER SERVICE
───────────────────────────────────────── */
const serviceFaqs: Record<string, { q: string; a: string }[]> = {
  "lawn-maintenance": [
    { q: "How often will you mow my lawn?", a: "We mow on a weekly schedule April through October — the right frequency for Michigan's growing season. Weekly mowing keeps turf healthy, prevents scalping, and ensures consistent results every visit." },
    { q: "Do you offer lawn maintenance contracts?", a: "Yes. Most of our customers choose a full-season contract that covers all mowing visits from spring startup through fall shutdown. It's the simplest option — no scheduling calls, no surprises." },
    { q: "What's included in each visit?", a: "Every lawn maintenance visit includes mowing at the correct height, edging along all hard surfaces, string trimming around obstacles, and blowing clippings off all walks and drives. We leave the property clean every time." },
  ],
  "landscaping": [
    { q: "Do you offer free landscaping design consultations?", a: "Yes. Every project starts with a free on-site consultation where we walk your property, understand your goals, and discuss plant options and budget. No obligation." },
    { q: "What types of landscaping do you install?", a: "We handle everything — new planting beds, perennial and shrub installations, sod, stone features, retaining walls, and full property renovations from concept to completion." },
    { q: "How long does a landscaping project take?", a: "Small projects like a new bed or mulch refresh can be done in a single day. Full landscape installations typically take 2–5 days depending on scope. We'll give you a clear timeline before any work begins." },
  ],
  "mulch-and-stone": [
    { q: "How much mulch do I need?", a: "For most residential beds, 2–3 inches of mulch depth is ideal. During your free estimate we'll measure your beds and tell you exactly how much material is needed — no guessing." },
    { q: "What types of mulch do you carry?", a: "We offer premium shredded hardwood, cedar, black dyed, brown dyed, and natural wood chip mulch. For stone we carry river rock, crushed granite, lava rock, and pea gravel." },
    { q: "Do you remove old mulch before installing new?", a: "If your beds have excessive mulch buildup (over 4 inches total), we recommend removing the old layer first. We offer old mulch removal as part of our service." },
  ],
  "seasonal-cleanup": [
    { q: "What's included in a spring cleanup?", a: "Spring cleanup includes full leaf and debris removal, perennial cutback, bed cleanup, edge refresh along all bed borders, and hauling everything away. We leave the property ready for the growing season." },
    { q: "What's included in a fall cleanup?", a: "Fall cleanup focuses on complete leaf removal (including all lawn and bed areas), late-season perennial cutback, and final bed cleanup before freeze. We haul all material off-site." },
    { q: "How early should I book my cleanup?", a: "Book as early as possible — spring cleanups especially fill up by March and April. Customers who book in January or February get the best available slots." },
  ],
  "snow-removal": [
    { q: "Do you offer seasonal snow removal contracts?", a: "Yes. Our seasonal contracts cover unlimited plowing for the entire winter — one payment, no per-storm calls. You're automatically on our route for every qualifying snow event." },
    { q: "When do you plow?", a: "We monitor weather forecasts and typically begin plowing once accumulation hits 2 inches. We're out early so you can get where you need to go before your workday starts." },
    { q: "Do you offer salting and de-icing?", a: "Yes. We apply rock salt and calcium chloride after plowing to keep driveways and walkways safe after the plow passes. De-icing is available as an add-on or included in some service packages." },
  ],
  "lawn-renovations": [
    { q: "When is the best time to aerate a Michigan lawn?", a: "Late August through October is ideal — soil is still warm, grass is actively growing roots, and there's less weed competition. Spring aeration in April–May is also effective but fall is preferred." },
    { q: "How soon will I see results after aeration and overseeding?", a: "New grass seed typically germinates within 7–14 days, and you'll see noticeable thickening within 3–4 weeks. Full density builds over 2–3 seasons of consistent care." },
    { q: "Does my lawn need renovation or just maintenance?", a: "If more than 50% of your lawn is thin, bare, or weedy, renovation is the better investment. We'll assess your lawn during the free estimate and give you an honest recommendation." },
  ],
  "hardscaping": [
    { q: "Do you install hardscaping directly or use partners?", a: "We coordinate with trusted local hardscaping partners and manage the project from start to finish. You work with Tri-Point Landscaping throughout — one point of contact, one standard of quality." },
    { q: "What types of hardscaping do you offer?", a: "Paver and natural stone patios, flagstone and paver walkways, block and natural stone retaining walls, custom fire pits, garden steps, and full outdoor living space design and installation." },
    { q: "Can hardscaping be combined with my landscaping project?", a: "Absolutely — we recommend it. Combining hardscaping with planting beds, mulch, and lawn work creates a fully cohesive outdoor space that looks intentional and dramatically improves curb appeal." },
  ],
  "commercial": [
    { q: "Do you serve HOAs and property management companies?", a: "Yes. We work with HOAs, property managers, office parks, retail centers, and apartment complexes throughout Macomb County. We provide all certificates of insurance and documentation required." },
    { q: "Can you handle multiple commercial properties?", a: "Absolutely. We can set up recurring maintenance across multiple commercial locations under one contract with consolidated billing and consistent crews." },
    { q: "Do you offer commercial snow removal?", a: "Yes. We offer full commercial snow and ice management — parking lot plowing, sidewalk clearing, salting, and de-icing — available under seasonal contracts." },
  ],
};

const allServiceSlugs = Object.keys(services);
const allAreaSlugs = Object.keys(areas);

/* ─────────────────────────────────────────
   SEARCH VARIANT TERMS PER SERVICE
   These mirror every way a real person might search for each service.
───────────────────────────────────────── */
const serviceSearchVariants: Record<string, string[]> = {
  "lawn-maintenance": [
    "lawn mowing", "grass cutting", "lawn care", "lawn cutting",
    "lawn service", "yard mowing", "weekly lawn service", "lawn trimming",
    "lawn mowing service", "lawn mowing company", "lawn care company",
    "grass cutting service", "lawn maintenance company", "yard maintenance",
    "residential lawn care", "lawn mowing near me", "grass cutting near me",
    "lawn care near me", "lawn service near me",
  ],
  "landscaping": [
    "landscaping", "landscaper", "landscape design", "yard work",
    "curb appeal landscaping", "landscape installation", "outdoor landscaping",
    "landscaping company", "landscaping service", "landscaping near me",
    "landscaper near me", "landscape contractor", "landscape company",
    "professional landscaping", "landscaping contractor",
  ],
  "mulch-and-stone": [
    "mulch installation", "mulch delivery", "mulching service",
    "decorative stone", "river rock installation", "bed edging", "garden mulch",
    "mulch service", "mulch and stone", "stone installation", "mulch company",
    "mulch installer", "mulch near me", "stone landscaping", "mulch service near me",
  ],
  "seasonal-cleanup": [
    "leaf removal", "fall cleanup", "spring cleanup", "yard cleanup",
    "debris removal", "yard waste removal", "leaf blowing service",
    "seasonal cleanup", "yard cleaning", "debris hauling", "leaf raking",
    "lawn cleanup", "leaf removal service", "fall yard cleanup", "spring yard cleanup",
    "seasonal cleanup near me", "leaf cleanup near me",
  ],
  "snow-removal": [
    "snow plowing", "snow removal", "driveway plowing",
    "ice removal", "snow blowing service", "snow service",
    "snow removal service", "snow removal company", "de-icing service",
    "salting service", "ice management", "driveway snow removal",
    "snow removal near me", "snow plowing near me", "snow plow service",
  ],
  "lawn-renovations": [
    "lawn aeration", "core aeration", "overseeding", "lawn seeding",
    "dethatching", "lawn repair", "bare spot repair", "lawn renovation",
    "aeration service", "grass seeding", "lawn renovation service",
    "soil aeration", "lawn overseeding", "lawn restoration",
    "lawn aeration near me", "lawn renovation near me",
  ],
  "commercial": [
    "commercial landscaping", "commercial lawn care", "grounds maintenance",
    "HOA landscaping", "commercial mowing", "property management landscaping",
    "commercial landscaping company", "commercial landscaping service",
    "commercial property maintenance", "commercial grounds maintenance",
    "commercial landscaping near me", "commercial lawn service",
    "HOA lawn care", "office park landscaping",
  ],
  "hardscaping": [
    "hardscaping", "patio installation", "retaining wall installation",
    "walkway installation", "fire pit installation", "outdoor living space",
    "hardscape installation", "patio contractor", "paver patio",
    "hardscaping company", "retaining walls", "paver installation",
    "hardscaping near me", "patio installer near me", "patio company",
    "hardscaping contractor", "patio builder",
  ],
};

/* ─────────────────────────────────────────
   GENERATE STATIC PARAMS (42 pages)
───────────────────────────────────────── */
export function generateStaticParams() {
  const params: { slug: string; area: string }[] = [];
  for (const slug of allServiceSlugs) {
    for (const area of allAreaSlugs) {
      params.push({ slug, area });
    }
  }
  return params;
}

/* ─────────────────────────────────────────
   METADATA
───────────────────────────────────────── */
type Props = { params: Promise<{ slug: string; area: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, area } = await params;
  const svc = services[slug];
  const areaData = areas[area];
  if (!svc || !areaData) return {};

  const variants = serviceSearchVariants[slug] ?? [svc.name.toLowerCase()];
  const keywords = variants.flatMap((v) => [
    `${v} ${areaData.name} MI`,
    `${v} near me ${areaData.name}`,
    `${v} ${areaData.county} MI`,
  ]).concat([
    `${svc.name.toLowerCase()} company ${areaData.name} Michigan`,
    `best ${variants[0]} ${areaData.name} MI`,
    `affordable ${variants[0]} ${areaData.name}`,
  ]);

  return {
    title: `${variants[0].charAt(0).toUpperCase() + variants[0].slice(1)} in ${areaData.name}, MI | Tri-Point`,
    description: `Professional ${variants[0]} and ${variants[1] ?? svc.name.toLowerCase()} in ${areaData.name}, Michigan. ${svc.shortDesc} Serving all of ${areaData.county}. Free estimates — call (586) 327-8080.`,
    keywords,
    alternates: {
      canonical: `https://www.tripointlandscaping.com/services/${slug}/${area}`,
    },
    openGraph: {
      title: `${variants[0].charAt(0).toUpperCase() + variants[0].slice(1)} in ${areaData.name}, MI | Tri-Point`,
      description: `${svc.shortDesc} Proudly serving ${areaData.name} and all of ${areaData.county}.`,
      url: `https://www.tripointlandscaping.com/services/${slug}/${area}`,
      siteName: "Tri-Point Landscaping",
      type: "website",
      images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: `${svc.name} in ${areaData.name}, MI` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${variants[0].charAt(0).toUpperCase() + variants[0].slice(1)} in ${areaData.name}, MI | Tri-Point`,
      description: `${svc.shortDesc} Proudly serving ${areaData.name} and all of ${areaData.county}.`,
      images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
    },
  };
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default async function ServiceAreaPage({ params }: Props) {
  const { slug, area } = await params;
  const svc = services[slug];
  const areaData = areas[area];
  if (!svc || !areaData) notFound();

  const otherAreas = allAreaSlugs.filter((a) => a !== area);
  const otherServices = allServiceSlugs.filter((s) => s !== slug);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.tripointlandscaping.com/services/lawn-maintenance" },
      { "@type": "ListItem", position: 3, name: svc.name, item: `https://www.tripointlandscaping.com/services/${slug}` },
      { "@type": "ListItem", position: 4, name: areaData.name, item: `https://www.tripointlandscaping.com/services/${slug}/${area}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${svc.name} in ${areaData.name}, MI`,
    description: svc.shortDesc,
    url: `https://www.tripointlandscaping.com/services/${slug}/${area}`,
    provider: {
      "@type": ["LocalBusiness", "LandscapingBusiness"],
      name: "Tri-Point Landscaping LLC",
      telephone: "+15863278080",
      url: "https://www.tripointlandscaping.com",
      address: { "@type": "PostalAddress", addressLocality: "Washington Township", addressRegion: "MI", postalCode: "48094", addressCountry: "US" },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "10",
        bestRating: "5",
        worstRating: "1",
      },
    },
    areaServed: { "@type": "City", name: areaData.name, addressRegion: "MI" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free estimate — no obligation",
    },
  };

  const pageFaqs = serviceFaqs[slug] ?? [];
  const faqSchema = pageFaqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  const serviceDisplayName = svc.name.replace(" Landscaping", "");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[580px] flex items-end overflow-hidden">
          <Image src={areaData.heroImage} alt={`${svc.name} in ${areaData.name} Michigan by Tri-Point Landscaping`} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-6">
              <nav className="flex items-center flex-wrap gap-1.5 text-white/45 text-xs">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href={`/services/${slug}`} className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <Link href={`/services/${slug}`} className="hover:text-white transition-colors">{svc.name}</Link>
                <span>/</span>
                <span className="text-white">{areaData.name}</span>
              </nav>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-28">
            <div className="max-w-3xl">
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">{areaData.name}, {areaData.county}</p>
              <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-5">
                {(serviceSearchVariants[slug]?.[0] ?? serviceDisplayName).replace(/\b\w/g, c => c.toUpperCase())}<br />
                <span style={{ color: "#7ecb82" }}>in {areaData.name}, MI</span>
              </h1>
              <p className="text-lg text-white/65 mb-8 max-w-xl leading-relaxed">{svc.shortDesc}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="group inline-flex items-center gap-2 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity">
                  Get a Free Estimate
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <a href="tel:+15863278080" className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  (586) 327-8080
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── MAIN CONTENT + SIDEBAR ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">

                {/* Intro */}
                <AnimateOnScroll animation="fade-up">
                  <div className="bg-white p-10">
                    <span className="section-line" />
                    <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Professional Service</p>
                    <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-3xl font-bold text-gray-900 mb-5">
                      {svc.name} in {areaData.name}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{areaData.localDesc}</p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      {svc.bodyTemplate(areaData.name, areaData.roads)}
                    </p>
                  </div>
                </AnimateOnScroll>

                {/* What's Included */}
                <AnimateOnScroll animation="fade-up" delay={100}>
                  <div style={{ backgroundColor: "#111111" }} className="p-10">
                    <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">What&apos;s Included</p>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-white mb-6">
                      Everything You Need, Nothing You Don&apos;t
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {svc.included.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div style={{ backgroundColor: "#2C5F2E" }} className="w-5 h-5 flex items-center justify-center mt-0.5 shrink-0">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-white/75 text-sm leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Benefits */}
                <AnimateOnScroll animation="fade-up" delay={80}>
                  <div className="bg-white p-10">
                    <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
                    <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-gray-900 mb-6">
                      The Tri-Point Difference in {areaData.name}
                    </h3>
                    <div className="space-y-4">
                      {svc.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 hover:border-green-200 transition-colors">
                          <div style={{ backgroundColor: "#2C5F2E" }} className="w-8 h-8 flex items-center justify-center shrink-0">
                            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-white text-xs font-bold">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed pt-1">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* FAQ Section */}
                {pageFaqs.length > 0 && (
                  <AnimateOnScroll animation="fade-up">
                    <div className="bg-white p-10">
                      <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
                      <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-gray-900 mb-6">
                        {svc.name} in {areaData.name} — FAQ
                      </h3>
                      <div className="space-y-0 border-t border-gray-100">
                        {pageFaqs.map((faq) => (
                          <div key={faq.q} className="border-b border-gray-100 py-5">
                            <h4 className="font-bold text-gray-900 mb-2 text-[15px]">{faq.q}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimateOnScroll>
                )}

                {/* Other areas for this service */}
                <AnimateOnScroll animation="fade-up">
                  <div style={{ backgroundColor: "#f5f0e8" }} className="p-8 border border-gray-200">
                    <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Also Available In</p>
                    <h3 className="font-bold text-gray-900 mb-4">{svc.name} — All Service Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {otherAreas.map((a) => (
                        <Link
                          key={a}
                          href={`/services/${slug}/${a}`}
                          style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
                          className="border text-xs font-semibold px-4 py-2 hover:bg-green-50 transition-colors"
                        >
                          {areas[a].name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* SIDEBAR */}
              <div className="space-y-6">

                {/* Estimate CTA */}
                <AnimateOnScroll animation="fade-left">
                  <div style={{ backgroundColor: "#111111" }} className="p-8">
                    <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-white mb-2">
                      Free Estimate
                    </p>
                    <p className="text-white/50 text-sm mb-6 leading-relaxed">
                      Get a free, no-obligation quote for {svc.name.toLowerCase()} in {areaData.name}. Same-day response.
                    </p>
                    <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="block text-center text-white font-semibold py-4 text-sm tracking-wide hover:opacity-90 transition-opacity mb-4">
                      Request a Free Estimate
                    </Link>
                    <a href="tel:+15863278080" className="flex items-center justify-center gap-2 border border-white/20 text-white/70 py-3.5 text-sm font-semibold hover:border-white/50 hover:text-white transition-all">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                      (586) 327-8080
                    </a>
                  </div>
                </AnimateOnScroll>

                {/* Trust signals */}
                <AnimateOnScroll animation="fade-left" delay={100}>
                  <div className="bg-white p-7 border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-5">Why Tri-Point</h4>
                    <div className="space-y-4">
                      {[
                        ["4.9★ Google Rating", "Rated by real Macomb County homeowners"],
                        ["Fully Insured LLC", "Your property is protected on every job"],
                        ["Same-Day Response", "We respond to estimates within hours"],
                        ["Locally Owned", "Macomb County based — your neighbors"],
                      ].map(([title, desc]) => (
                        <div key={title} className="flex items-start gap-3">
                          <svg className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#2C5F2E" }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{title}</p>
                            <p className="text-gray-400 text-xs">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>

                {/* Other services in this area */}
                <AnimateOnScroll animation="fade-left" delay={150}>
                  <div style={{ backgroundColor: "#f5f0e8" }} className="p-7">
                    <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-4">More Services in {areaData.name}</h4>
                    <div className="space-y-2">
                      {otherServices.map((s) => (
                        <Link
                          key={s}
                          href={`/services/${s}/${area}`}
                          className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-800 font-medium group py-1"
                        >
                          <div style={{ backgroundColor: "#2C5F2E" }} className="w-1.5 h-1.5 shrink-0" />
                          {services[s].name}
                          <svg className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="relative py-32 overflow-hidden">
          <Image src="/photos/mulch1.jpeg" alt={`${svc.name} in ${areaData.name} Michigan`} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
            <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-4">Serving {areaData.name}</p>
            <h2 style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              Ready for Professional<br />{serviceDisplayName}?
            </h2>
            <p className="text-white/60 mb-8 max-w-md mx-auto">Free estimate. Same-day response. {areaData.name}&apos;s most reliable landscaping crew — ready when you are.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" style={{ backgroundColor: "#2C5F2E" }} className="inline-flex items-center justify-center gap-2 text-white px-10 py-4 font-semibold tracking-wide hover:opacity-90 transition-opacity">
                Get Your Free Estimate
              </Link>
              <a href="tel:+15863278080" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-10 py-4 font-semibold tracking-wide hover:bg-white/10 transition-colors">
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
