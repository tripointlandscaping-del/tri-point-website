import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FaqAccordion from "../../components/FaqAccordion";
import { posts } from "../../blog/posts";

const serviceBlogMap: Record<string, string[]> = {
  "lawn-maintenance": [
    "lawn-care-service-shelby-township-mi",
    "spring-lawn-care-checklist-washington-township",
    "how-often-to-mow-lawn-michigan",
  ],
  "landscaping": [
    "landscape-design-ideas-washington-township",
    "how-to-improve-curb-appeal-macomb-county",
    "landscaping-washington-township-mi",
  ],
  "mulch-and-stone": [
    "benefits-of-professional-mulching-macomb-county",
    "how-to-improve-curb-appeal-macomb-county",
    "difference-between-topsoil-compost-mulch-macomb-county",
  ],
  "seasonal-cleanup": [
    "spring-lawn-care-checklist-washington-township",
    "when-to-schedule-spring-cleanup-macomb-county",
    "fall-lawn-care-checklist-macomb-county",
  ],
  "snow-removal": [
    "snow-plowing-service-shelby-township",
    "snow-removal-tips-macomb-county",
    "how-to-choose-snow-removal-company-macomb-county",
  ],
  "lawn-renovations": [
    "best-time-to-overseed-lawn-michigan",
    "how-to-fix-bare-spots-in-your-lawn-michigan",
    "how-to-choose-the-right-grass-seed-michigan",
  ],
  "commercial": [
    "commercial-landscaping-macomb-county",
    "benefits-of-year-round-lawn-care-contract",
    "how-to-improve-curb-appeal-macomb-county",
  ],
};

type ServiceData = {
  title: string;
  metaTitle: string;
  keywords: string[];
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  heroTagline: string;
  intro: string;
  bodyParagraph: string;
  included: string[];
  benefits: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  image2?: string;
  image2Alt?: string;
  relatedServices: { name: string; href: string }[];
};

const services: Record<string, ServiceData> = {
  "lawn-maintenance": {
    title: "Lawn Maintenance in Macomb County, MI",
    metaTitle: "Lawn Mowing & Grass Cutting — Macomb County, MI | Tri-Point",
    metaDescription:
      "Professional lawn mowing, grass cutting, and lawn care throughout Macomb County, MI — Washington Township, Shelby Township & beyond. Weekly mowing, edging, trimming & blowing. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn mowing service Macomb County MI",
      "grass cutting service Washington Township",
      "lawn care near me Macomb County",
      "lawn cutting service Shelby Township MI",
      "lawn maintenance Macomb County",
      "lawn mowing company near me",
      "yard mowing service Michigan",
      "weekly lawn service Macomb County",
      "grass mowing near me",
      "lawn service Washington Township MI",
      "lawn trimming service Macomb County",
      "lawn mowing Rochester Hills MI",
      "grass cutting Rochester MI",
      "lawn care near me Oakland County",
    ],
    heroImage: "/photos/1.png",
    heroAlt: "Perfectly striped lawn maintained by Tri-Point Landscaping in Macomb County Michigan",
    heroTagline: "Weekly Mowing · Edging · Trimming · Blowing",
    intro:
      "A well-maintained lawn doesn't happen by accident. At Tri-Point Landscaping, we provide consistent, professional lawn maintenance for residential and commercial properties throughout Washington Township, Shelby Township, and Macomb County. From the first cut in spring to the last trim in fall, your lawn gets the attention it deserves — every single visit.",
    bodyParagraph:
      "Michigan lawns have a short but demanding growing season. Inconsistent mowing height, missed edging, and neglected clippings cause real damage — uneven turf, weed invasion, and a tired appearance that brings down the whole neighborhood. Our crew arrives on a consistent schedule, uses commercial-grade equipment maintained to professional standards, and treats every property like it's their own. Whether you're in a Stony Creek Meadows subdivision or a commercial corridor off Van Dyke, the result is the same: clean, sharp, and healthy.",
    included: [
      "Weekly or bi-weekly mowing at the correct height for your grass type",
      "Clean edging along driveways, sidewalks, curbs & landscape beds",
      "String trimming around all obstacles, fences & structures",
      "Blowing clippings off all hard surfaces after every visit",
      "Mulching clippings back into the turf for natural fertilization",
      "Consistent same-day scheduling (weather permitting)",
      "Reliable communication — you always know when we're coming",
    ],
    benefits: [
      { title: "Healthier Turf", desc: "Regular mowing at the correct height promotes thick, healthy grass that naturally crowds out weeds and handles Michigan heat." },
      { title: "Superior Curb Appeal", desc: "A freshly mowed and edged lawn is one of the fastest ways to improve your property's appearance and neighborhood standing." },
      { title: "Your Time Back", desc: "Stop spending weekends behind a mower. Let Tri-Point handle it so you can enjoy your yard instead of maintaining it." },
      { title: "Commercial-Grade Equipment", desc: "We use professional, well-maintained equipment that delivers a precise, even cut every single time — no scalping, no streaks." },
    ],
    faqs: [
      { q: "How often will you mow my lawn?", a: "Most residential lawns in Macomb County are mowed weekly during the growing season (late April through October). We also offer bi-weekly mowing based on your grass type and growth rate. We'll help you determine the right frequency during your free estimate." },
      { q: "What is included in each lawn maintenance visit?", a: "Every visit includes mowing at the appropriate height, trimming around all obstacles and landscape beds, edging along all hard surfaces like driveways and sidewalks, and blowing clippings off walkways, driveways, and any hard surfaces. We leave your property looking sharp every time." },
      { q: "Do you bag or mulch grass clippings?", a: "We use mulching mowers that finely shred clippings back into the lawn, returning nutrients to the soil and supporting healthier turf growth. Bagging is available upon request if you prefer, typically at an additional fee." },
      { q: "What if it rains on my scheduled mowing day?", a: "We monitor weather closely and will reschedule within 24–48 hours if conditions prevent mowing. We'll always keep you informed. Michigan weather is unpredictable — we've been handling it for years." },
      { q: "Do you offer seasonal lawn maintenance contracts?", a: "Yes. Our full-season packages cover April through October and offer better value than per-visit pricing. We also offer bundled packages that include mulch, cleanups, and other services. Contact us for package pricing." },
      { q: "What areas of Macomb County do you serve for lawn maintenance?", a: "We serve Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, Rochester, and Rochester Hills throughout Macomb County and Oakland County." },
      { q: "Do you offer grass cutting and lawn mowing near me?", a: "Yes — whether you call it lawn mowing, grass cutting, lawn care, lawn cutting, or yard service, we provide exactly that throughout Macomb County and Oakland County, MI. We mow, edge, trim, and blow your property clean on a consistent weekly or bi-weekly schedule." },
    ],
    image2: "/photos/IMG_3369.jpeg",
    image2Alt: "Clean backyard lawn after professional mowing in Macomb County Michigan",
    relatedServices: [
      { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { name: "Mulch & Stone", href: "/services/mulch-and-stone" },
      { name: "Landscaping", href: "/services/landscaping" },
    ],
  },
  "landscaping": {
    title: "Landscaping Services in Macomb County, MI",
    metaTitle: "Landscaping & Landscape Design — Macomb County, MI | Tri-Point",
    metaDescription:
      "Professional landscaping, landscape design, and yard transformations throughout Macomb County, MI. Planting beds, curb appeal, stone features, sod & more. Free estimates. Call (586) 327-8080.",
    keywords: [
      "landscaping company Macomb County MI",
      "landscaper near me Washington Township",
      "landscape design Macomb County",
      "yard work near me Michigan",
      "curb appeal landscaping Macomb County",
      "landscape installation Shelby Township",
      "backyard landscaping ideas Macomb County",
      "front yard landscaping near me",
      "planting beds Macomb County",
      "hardscape installation Michigan",
      "landscaping company Rochester Hills MI",
      "landscape design Oakland County",
      "yard makeover near me Michigan",
      "outdoor landscaping company near me",
    ],
    heroImage: "/photos/0728A183-FBB6-4A53-AA3D-103C3E39A7EF.jpeg",
    heroAlt: "Custom landscape installation with stone pathway and plantings in Macomb County Michigan",
    heroTagline: "Design · Installation · Planting · Stone Features",
    intro:
      "Your outdoor space should be beautiful, functional, and built to last. Tri-Point Landscaping designs and installs custom landscapes for residential and commercial properties throughout Macomb County. Whether you're starting from scratch or refreshing an existing space, we bring your vision to life with quality craftsmanship and plants suited for Michigan's climate.",
    bodyParagraph:
      "A great landscape does more than look good — it works with your property's grade, drainage, and sun exposure to create something that thrives long after installation day. We select plants proven to survive Macomb County's Zone 5/6 climate and winter freeze-thaw cycles, and we pair them with hardscape elements — stone, mulch, edging — that give the installation structure and longevity. Every project includes an on-site consultation so we understand your goals before we touch a single shovel.",
    included: [
      "Custom landscape bed design and creation",
      "Planting — annuals, perennials, ornamental grasses, shrubs & trees",
      "Sod installation and soil preparation",
      "Stepping stone and walkway installation",
      "Mulch, river rock & decorative stone installation",
      "Shrub and hedge trimming and shaping",
      "Landscape lighting installation",
      "On-site design consultation",
    ],
    benefits: [
      { title: "Boost Property Value", desc: "Professional landscaping increases home value by up to 15% — one of the highest-ROI improvements available to Macomb County homeowners." },
      { title: "Michigan-Ready Plants", desc: "We select species proven to thrive in Macomb County's soil and climate, so your investment looks great year after year." },
      { title: "Fully Custom", desc: "Every landscape we design is tailored to your property, your style, and your budget. No templates, no shortcuts." },
      { title: "Turnkey Installation", desc: "We handle everything — design, materials, delivery, installation, and cleanup. You just enjoy the result." },
    ],
    faqs: [
      { q: "Do you offer landscape design consultations?", a: "Yes. We work closely with every client on-site to understand their vision, assess the property, and develop a customized design before any installation begins. This ensures the finished product looks exactly as intended." },
      { q: "When is the best time to install landscaping in Michigan?", a: "Spring (April–June) is ideal for most planting, mulch, and stone projects. Fall is excellent for aeration, overseeding, and certain plantings. We assess your specific project any time of year and advise on optimal timing." },
      { q: "What types of plants do you install?", a: "We install annuals, perennials, ornamental grasses, flowering shrubs, evergreens, and ornamental trees — all selected for compatibility with Michigan's Zone 5/6 climate and your property's specific conditions." },
      { q: "Can you renovate an existing landscape?", a: "Absolutely. Landscape renovation is one of our most requested services. We refresh existing beds, remove overgrown plants, add new features, and bring tired landscapes back to life. The transformation is often dramatic." },
      { q: "Do you do cleanup after the project?", a: "Yes. We leave your property completely clean — all debris, packaging, and excess material removed. You walk out and see the finished result, nothing else." },
      { q: "Do you install sod?", a: "Yes. We prepare the soil properly and install sod for new lawns, repair patches, or complete yard installations. Proper soil prep is the key to sod that roots quickly and lasts." },
      { q: "Are you a landscaper near me in Macomb County or Oakland County?", a: "Yes — we are a local landscaping company serving Macomb County and Oakland County, Michigan. Whether you're searching for a landscaper, landscape designer, yard work company, or curb appeal contractor near you in Washington Township, Shelby Township, Rochester Hills, or surrounding areas, Tri-Point Landscaping is your local option." },
    ],
    image2: "/photos/IMG_4417.jpeg",
    image2Alt: "Custom stepping stone path and landscape installation by Tri-Point Landscaping in Macomb County",
    relatedServices: [
      { name: "Mulch & Stone", href: "/services/mulch-and-stone" },
      { name: "Lawn Renovations", href: "/services/lawn-renovations" },
      { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
    ],
  },
  "mulch-and-stone": {
    title: "Mulch & Decorative Stone Installation in Macomb County, MI",
    metaTitle: "Mulch Delivery & Installation — Macomb County, MI | Tri-Point",
    metaDescription:
      "Professional mulch delivery, mulch installation, and decorative rock & stone throughout Macomb County, MI. Black mulch, brown mulch, cedar, river rock, bed edging & more. Free estimates. Call (586) 327-8080.",
    keywords: [
      "mulch delivery Macomb County MI",
      "mulch installation near me Michigan",
      "mulching service Washington Township",
      "decorative stone installation Macomb County",
      "landscape rock near me Michigan",
      "river rock installation Shelby Township",
      "black mulch installation Macomb County",
      "brown mulch near me Michigan",
      "cedar mulch service Macomb County",
      "garden bed mulch near me",
      "bed edging service Macomb County MI",
      "mulch company near me Michigan",
      "mulch yards installed Rochester Hills",
      "landscape mulch Oakland County MI",
    ],
    heroImage: "/photos/mulch1.jpeg",
    heroAlt: "Fresh mulch installation in landscape beds in Washington Township Michigan",
    heroTagline: "Mulch Installation · Decorative Stone · Bed Edging",
    intro:
      "Fresh mulch is one of the fastest, most cost-effective ways to transform your property's curb appeal. Tri-Point Landscaping installs mulch and decorative stone for residential and commercial properties throughout Macomb County — cleanly applied, sharply edged, and built to endure Michigan's seasons.",
    bodyParagraph:
      "We see a lot of properties where the bones are great but the mulch is faded, decomposed, or missing entirely. It makes the whole landscape look neglected even when everything else is maintained. Fresh mulch with clean, crisp bed edging is a one-day investment that pays off every single day in curb appeal. We offer multiple mulch types — shredded hardwood, dyed black, dyed brown, cedar, and natural wood chip — so you choose the look that matches your property. Our crews install it properly: right depth, clean edges, and no mess left behind.",
    included: [
      "Multiple mulch types and colors available",
      "Decorative river rock and gravel installation",
      "Bed edging for sharp, clean borders",
      "Weed barrier installation upon request",
      "Old mulch removal if needed",
      "Full debris and packaging cleanup after installation",
    ],
    benefits: [
      { title: "Retains Moisture", desc: "Proper mulch depth keeps soil moist during Michigan's hot summers, reducing watering needs and protecting plant roots." },
      { title: "Suppresses Weeds", desc: "Mulch blocks sunlight from reaching weed seeds, dramatically reducing bed maintenance throughout the season." },
      { title: "Protects Plant Roots", desc: "Mulch insulates soil against Michigan's brutal freeze-thaw cycles, protecting roots through the winter months." },
      { title: "Instant Curb Appeal", desc: "Nothing refreshes a property faster than fresh mulch with sharp bed edges. The transformation is immediate and dramatic." },
    ],
    faqs: [
      { q: "What types of mulch do you offer?", a: "We offer shredded hardwood, cedar, dyed black, dyed brown, and natural wood chip mulch. During your estimate we help you choose the best type for your property's aesthetics and plant needs." },
      { q: "How much mulch do I need?", a: "Most beds need 2–3 inches of fresh mulch. We assess your beds during the estimate and calculate the exact amount for full, even coverage — no guessing, no waste." },
      { q: "Do I need to remove old mulch first?", a: "Not always. If existing mulch is under 2 inches, we can top-dress directly. If it's excessively deep or deteriorating incorrectly, we'll recommend removal and replacement for better results." },
      { q: "When is the best time to mulch in Michigan?", a: "Spring is most popular — after the ground thaws and before summer heat sets in. Fall mulching is also highly beneficial to protect plant roots heading into winter. We install mulch year-round based on weather." },
      { q: "Do you also do bed edging?", a: "Yes, and we recommend it every time. Sharp bed edges contain the mulch, prevent grass creep into beds, and give the entire landscape a polished, professional appearance." },
      { q: "Do you do mulch delivery and installation near me?", a: "Yes — we handle both delivery and full installation. Whether you need black mulch, brown mulch, cedar mulch, wood chips, river rock, or decorative stone, we supply the material and install it professionally with clean bed edging throughout Macomb County and Oakland County, MI." },
    ],
    image2: "/photos/mulch.jpg",
    image2Alt: "Decorative mulch bed with flowering plants and clean edging in Macomb County Michigan",
    relatedServices: [
      { name: "Landscaping", href: "/services/landscaping" },
      { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
    ],
  },
  "seasonal-cleanup": {
    title: "Spring & Fall Cleanup Services in Macomb County, MI",
    metaTitle: "Leaf Removal & Yard Cleanup — Macomb County, MI | Tri-Point",
    metaDescription:
      "Professional leaf removal, yard cleanup, and spring & fall cleanup throughout Macomb County, MI. Leaf blowing, debris hauling, bed clearing, yard waste removal & more. Free estimates. Call (586) 327-8080.",
    keywords: [
      "leaf removal service Macomb County MI",
      "fall cleanup near me Michigan",
      "spring yard cleanup Washington Township",
      "yard cleanup service Macomb County",
      "leaf blowing service Michigan",
      "fall leaf removal near me",
      "debris removal yard Macomb County",
      "spring cleanup service Shelby Township MI",
      "yard waste removal Macomb County",
      "seasonal yard cleanup Michigan",
      "lawn cleanup service near me",
      "yard cleaning service Rochester Hills",
      "fall cleanup Oakland County MI",
      "leaf cleanup near me Michigan",
    ],
    heroImage: "/photos/217A6A02-1ABD-438C-90B1-CB49915F1D1A.jpeg",
    heroAlt: "Fall leaf cleanup and seasonal yard cleanup in Macomb County Michigan by Tri-Point Landscaping",
    heroTagline: "Spring Cleanup · Fall Cleanup · Leaf Removal · Bed Clearing",
    intro:
      "Michigan seasons are hard on your property. Tri-Point Landscaping provides thorough spring and fall cleanups that prep your lawn and landscape for the season ahead — leaving your property healthy, sharp, and ready for whatever comes next.",
    bodyParagraph:
      "Proper seasonal cleanup isn't just about appearance — it's about plant and turf health. Leaf debris left on grass through winter creates the perfect environment for snow mold, fungal disease, and root damage. Dead perennial stalks harbor overwintering pests. Matted bed debris prevents airflow and traps moisture against crowns. Our crews do this work thoroughly, not just aesthetically. We cut back what needs cutting, remove what needs removing, and leave every surface clean. Starting the season right sets up everything that follows.",
    included: [
      "Complete leaf removal and hauling off-site",
      "Landscape bed clearing and debris removal",
      "Cutting back perennials and ornamental grasses",
      "Shrub and hedge trimming and shaping",
      "Edging cleanup along all beds and hardscapes",
      "Lawn dethatching (spring)",
      "Final blowout of all hard surfaces and walkways",
    ],
    benefits: [
      { title: "Prevent Disease", desc: "Leaf buildup and dead plant material harbor disease and pests. A thorough cleanup eliminates these threats before they cause turf or plant damage." },
      { title: "Healthier Regrowth", desc: "Removing debris in spring lets sunlight and air reach the soil, promoting faster, healthier lawn and plant growth for the entire season." },
      { title: "Winter Protection", desc: "A fall cleanup removes matted material that smothers grass over winter and creates conditions for snow mold — common and costly in Michigan." },
      { title: "Season-Ready Property", desc: "Starting spring with a clean, prepared property makes all subsequent maintenance easier and your outdoor space more enjoyable from day one." },
    ],
    faqs: [
      { q: "When should I schedule a spring cleanup in Michigan?", a: "Typically late March through April, once temperatures are consistently above freezing and the ground has dried enough to work without damage. We'll assess timing with you and schedule at the right window for your property." },
      { q: "When should I schedule a fall cleanup?", a: "Late October through November, after the majority of leaves have fallen but before heavy snow arrives. Getting it done before the ground freezes ensures thorough results and protects your turf through winter." },
      { q: "Do you haul away all the debris?", a: "Yes. We remove all leaves, trimmings, and debris from your property. You don't need to arrange disposal — we handle it completely." },
      { q: "Can I bundle cleanup with other services?", a: "Absolutely. Many customers add mulch, fertilization, or aeration to their spring cleanup for a complete seasonal refresh. We can bundle services for better overall value." },
      { q: "Do you offer standalone leaf removal?", a: "Yes. We offer leaf removal as a standalone service during fall for customers who just need leaves cleared between full cleanup visits or after a heavy leaf fall." },
      { q: "Do you offer leaf removal, yard cleanup, and debris removal near me?", a: "Yes — whatever you call it: leaf removal, fall cleanup, yard cleanup, yard waste removal, or just 'clean up my yard,' we cover it all in Macomb County and Oakland County, MI. We haul everything away so your property is completely clear." },
    ],
    image2: "/photos/boxwood.jpg",
    image2Alt: "Fall cleanup with trimmed boxwood hedges in Washington Township Michigan",
    relatedServices: [
      { name: "Mulch & Stone", href: "/services/mulch-and-stone" },
      { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { name: "Snow Removal", href: "/services/snow-removal" },
    ],
  },
  "snow-removal": {
    title: "Snow Removal & Ice Management in Macomb County, MI",
    metaTitle: "Snow Plowing & Driveway Plowing — Macomb County, MI | Tri-Point",
    metaDescription:
      "Professional snow plowing, snow removal, driveway plowing & ice management throughout Macomb County, MI. Residential & commercial snow service — seasonal contracts & per-push available. Call (586) 327-8080.",
    keywords: [
      "snow plowing service Macomb County MI",
      "snow removal near me Washington Township",
      "driveway plowing service Michigan",
      "snow plow near me Macomb County",
      "ice removal service Macomb County MI",
      "snow blowing service Michigan",
      "residential snow removal near me",
      "commercial snow plowing Macomb County",
      "snow shoveling service Michigan",
      "salt driveway service Macomb County",
      "winter snow service Washington Township MI",
      "snow removal Rochester Hills MI",
      "driveway plowing Oakland County",
      "snow plowing company near me Michigan",
    ],
    heroImage: "/photos/12D7CE8B-99F8-4285-BFD8-A33E849120E0.jpeg",
    heroAlt: "Snow removal and ice management in Macomb County Michigan by Tri-Point Landscaping",
    heroTagline: "Plowing · Salting · Ice Management · Seasonal Contracts",
    intro:
      "Michigan winters don't wait. Tri-Point Landscaping provides fast, reliable snow removal and ice management for residential and commercial properties throughout Washington Township and Macomb County. Whether you need a seasonal contract or per-push service, we keep your driveway, sidewalks, and parking lots safe and accessible after every storm.",
    bodyParagraph:
      "When 3AM rolls around and the snow is coming down hard, the last thing you want is uncertainty about whether your property will be cleared. We monitor forecasts actively, mobilize proactively, and service our route efficiently so you wake up to a plowed driveway — not a packed snowfield. We offer seasonal contracts (fixed price, full winter coverage) and per-push pricing, and we can help you choose which makes sense for your budget and property. Our commercial clients get the reliability and documentation that property management companies require.",
    included: [
      "Residential driveway plowing",
      "Commercial parking lot plowing",
      "Sidewalk and walkway clearing",
      "Salt and ice melt application",
      "De-icing pre-treatment for freezing rain events",
      "Seasonal contracts and per-push pricing available",
      "Active weather monitoring and proactive crew deployment",
    ],
    benefits: [
      { title: "24/7 Storm Response", desc: "We track every forecast and mobilize before and after significant snowfall — so you don't have to think about it." },
      { title: "Liability Protection", desc: "Icy driveways and sidewalks are a real liability risk. Professional salting and clearing keeps your property safe and keeps you protected." },
      { title: "Predictable Pricing", desc: "Seasonal contracts give you a fixed winter cost — no surprises, no per-event stress. Great for homeowners who want total peace of mind." },
      { title: "Commercial-Ready", desc: "We service offices, retail centers, and commercial properties with the reliability and thoroughness your business depends on." },
    ],
    faqs: [
      { q: "Do you offer seasonal contracts or per-push pricing?", a: "Both. Seasonal contracts provide a fixed price for the full winter — ideal for predictable budgeting. Per-push pricing means you pay only when we come out. We'll help you decide what makes sense for your situation." },
      { q: "What areas do you serve for snow removal?", a: "Washington Township, Shelby Township, Macomb Township, Romeo, Ray Township, Bruce Township, and surrounding areas throughout Macomb County." },
      { q: "When do you plow — before, during, or after the storm?", a: "All three as needed. We pre-treat driveways and parking lots with salt before freezing rain events, plow during and after snowfalls, and follow up with de-icing as conditions require." },
      { q: "Do you handle commercial snow removal?", a: "Yes. We service office parks, retail centers, storage facilities, and commercial properties of all sizes. We can provide certificates of insurance, service logs, and meet standard commercial documentation requirements." },
      { q: "Is there a minimum snowfall amount before you come out?", a: "Trigger depths are specified in your service agreement. We work with residential and commercial clients to set appropriate thresholds based on their specific needs and safety requirements." },
      { q: "Do you offer snow plowing, driveway plowing, and snow removal near me?", a: "Yes — whether you're searching for snow plowing, snow removal, driveway plowing, snow blowing, ice management, or snow service near you, Tri-Point Landscaping covers Macomb County and Oakland County, MI including Washington Township, Shelby Township, Rochester Hills, and surrounding areas." },
    ],
    relatedServices: [
      { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { name: "Commercial", href: "/services/commercial" },
      { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
    ],
  },
  "lawn-renovations": {
    title: "Lawn Renovations in Macomb County, MI",
    metaTitle: "Lawn Aeration & Overseeding — Macomb County, MI | Tri-Point",
    metaDescription:
      "Professional lawn aeration, overseeding, lawn seeding, dethatching & lawn repair throughout Macomb County, MI. Fix bare spots, patchy grass & thin lawns. Free estimates. Call (586) 327-8080.",
    keywords: [
      "lawn aeration service Macomb County MI",
      "overseeding service Michigan",
      "core aeration near me Macomb County",
      "lawn seeding service Washington Township",
      "lawn repair service Macomb County",
      "fix bare spots in lawn Michigan",
      "dethatching service Macomb County",
      "thatch removal near me Michigan",
      "lawn restoration service Macomb County",
      "patchy lawn repair Michigan",
      "thin lawn fix Macomb County",
      "lawn reseeding service near me",
      "aeration overseeding Rochester Hills MI",
      "lawn renovation Oakland County Michigan",
    ],
    heroImage: "/photos/Aeration-with-aerator.jpg",
    heroAlt: "Core aeration service for lawn renovation in Macomb County Michigan by Tri-Point Landscaping",
    heroTagline: "Core Aeration · Overseeding · Dethatching · Top Dressing",
    intro:
      "A thin, patchy, or compacted lawn doesn't need to be replaced — it needs to be renovated. Tri-Point Landscaping provides professional lawn renovation services throughout Macomb County: core aeration, overseeding, dethatching, and top dressing. These are the science-backed techniques that transform struggling lawns into thick, dense, healthy turf that stays green through Michigan's summers and fights off weeds naturally.",
    bodyParagraph:
      "Michigan's clay-heavy soil compacts over time, suffocating grass roots and making it nearly impossible for water, oxygen, and nutrients to penetrate. Core aeration breaks up that compaction by physically removing plugs of soil, opening channels that allow roots to breathe and grow deep. Paired with premium overseeding — using turf varieties selected for Michigan's climate — and a light top dressing to protect germinating seed, the results are dramatic. We typically see significant improvement within one growing season. Dethatching removes the dead mat of grass stems and debris that builds up between the soil and living grass, further improving airflow and water absorption. If your lawn has struggled for years, a single renovation program can be the reset it needs.",
    included: [
      "Core aeration (soil plug removal for deep root growth)",
      "Premium overseeding with Michigan-adapted grass varieties",
      "Dethatching to remove compacted debris layer",
      "Top dressing with quality compost or topsoil blend",
      "Pre- and post-service lawn assessment",
      "Watering and care instructions provided",
    ],
    benefits: [
      { title: "Thicker, Denser Turf", desc: "Aeration + overseeding is the most effective way to fill in thin spots, bare patches, and tired lawn areas — without starting over." },
      { title: "Deeper Root Systems", desc: "Aeration breaks up compacted Michigan clay soil, allowing roots to grow deeper and access more water and nutrients." },
      { title: "Natural Weed Suppression", desc: "Thick, healthy turf is the best weed prevention there is. Dense grass crowds out crabgrass, dandelions, and opportunistic weeds." },
      { title: "Long-Term Lawn Health", desc: "Annual or biennial aeration and overseeding keeps your lawn in peak condition, reducing the need for expensive chemical treatments." },
    ],
    faqs: [
      { q: "When is the best time to aerate and overseed in Michigan?", a: "Late summer to early fall (mid-August through September) is ideal in Macomb County. Soil is warm enough for germination, the summer heat has peaked, and fall rains help establishment. Spring aeration is also beneficial for severely compacted lawns." },
      { q: "How long until I see results after overseeding?", a: "New grass seedlings typically appear within 10–21 days depending on the seed variety and weather. Full establishment into your existing lawn takes one full growing season, but most homeowners see visible improvement within 4–6 weeks of seeding." },
      { q: "Can I aerate and overseed a lawn with existing grass?", a: "Absolutely — that's the standard approach. Aeration holes provide perfect seed-to-soil contact for overseeding into an established lawn. You don't need to kill off existing turf to renovate it." },
      { q: "How is core aeration different from spike aeration?", a: "Core aeration removes actual plugs of soil, which genuinely relieves compaction. Spike aeration only pokes holes, which can actually worsen compaction around the spikes. We only use core aeration equipment." },
      { q: "Do I need to do anything after the service?", a: "We'll provide complete instructions. The main requirement is consistent watering in the weeks following overseeding to support germination. We'll walk you through exactly what to do for best results." },
      { q: "How often should I aerate my lawn?", a: "For most Macomb County properties with clay-heavy soil, annual core aeration delivers the best results. Lighter soil properties may need it every 2–3 years. We'll assess your specific lawn and recommend the right schedule." },
      { q: "Do you offer lawn seeding, lawn repair, and fixing bare spots near me?", a: "Yes — whether you need lawn aeration, overseeding, lawn seeding, dethatching, fixing bare spots, repairing patchy grass, or a full lawn renovation, we offer all of it in Macomb County and Oakland County, MI. If your lawn is thin, patchy, or struggling, one renovation program can turn it around in a single growing season." },
    ],
    image2: "/photos/bills-google2.jpeg",
    image2Alt: "Beautifully renovated and striped lawn in Macomb County Michigan by Tri-Point Landscaping",
    relatedServices: [
      { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
      { name: "Landscaping", href: "/services/landscaping" },
    ],
  },
  "commercial": {
    title: "Commercial Landscaping in Macomb County, MI",
    metaTitle: "Commercial Landscaping & Grounds Maintenance — Macomb County | Tri-Point",
    metaDescription:
      "Professional commercial landscaping, grounds maintenance, and HOA lawn care in Macomb County, MI. Commercial mowing, commercial snow removal, property management landscaping & more. Call (586) 327-8080.",
    keywords: [
      "commercial landscaping Macomb County MI",
      "commercial lawn care near me Michigan",
      "grounds maintenance Macomb County",
      "HOA landscaping Macomb County MI",
      "commercial mowing service Michigan",
      "commercial snow removal Macomb County",
      "property management landscaping Michigan",
      "office park landscaping Macomb County",
      "commercial lawn maintenance near me",
      "HOA grounds maintenance Michigan",
      "commercial landscaping company near me",
      "business landscaping service Macomb County",
      "commercial grounds care Rochester Hills MI",
      "commercial property landscaping Oakland County",
    ],
    heroImage: "/photos/88FBBFEE-A720-48B9-BF7D-1B45F0439580.jpeg",
    heroAlt: "Professional commercial landscaping and curb appeal by Tri-Point Landscaping in Macomb County Michigan",
    heroTagline: "Offices · HOAs · Retail Centers · Year-Round Service",
    intro:
      "Your property's exterior is the first thing clients, customers, and tenants see. Tri-Point Landscaping provides reliable, professional commercial landscaping for offices, retail centers, HOAs, and commercial properties throughout Macomb County. We show up consistently, communicate clearly, and make your property look its best — every week, every season.",
    bodyParagraph:
      "Commercial landscaping requires a different level of accountability than residential work. You have tenants, customers, and in some cases board members who hold the property to a standard. We understand that. Our commercial clients get a dedicated point of contact, documented service records, proof of insurance on request, and a crew that treats the property with professional respect. From a small strip mall on Van Dyke to a multi-building office complex, we apply the same attention to detail and the same reliability. One call, one company, year-round.",
    included: [
      "Weekly lawn mowing and edging",
      "Shrub and hedge trimming",
      "Seasonal spring and fall cleanups",
      "Mulch and decorative stone installation",
      "Snow removal and ice management",
      "Parking lot and sidewalk plowing",
      "Salting and de-icing",
      "Landscape bed maintenance throughout the season",
    ],
    benefits: [
      { title: "Consistent Reliability", desc: "We treat commercial accounts with strict scheduling standards. Count on us to show up on time, every time — no surprises, no excuses." },
      { title: "Seasonal Contracts", desc: "Year-round coverage at a fixed, predictable price. One company handling everything from spring mulching to winter plowing." },
      { title: "Fully Insured & Documented", desc: "Tri-Point Landscaping is a fully insured LLC. We provide certificates of insurance, service logs, and any documentation required by property management." },
      { title: "Single Point of Contact", desc: "From spring installation to winter plowing, you work with one local team who knows your property — not a rotating cast of subcontractors." },
    ],
    faqs: [
      { q: "Do you service HOAs and property management companies?", a: "Yes. We work with HOAs, property management firms, and commercial property owners throughout Macomb County. We customize service packages to match your specific requirements, schedule, and budget." },
      { q: "Can you provide formal service contracts and insurance documentation?", a: "Absolutely. We offer annual and seasonal service contracts with clearly defined scope of work, scheduling, and pricing. We provide proof of insurance and W-9 documentation on request." },
      { q: "Do you offer commercial snow removal?", a: "Yes. Commercial snow removal is one of our core services. We plow lots, clear sidewalks, and apply salt and de-icing products to keep your property safe, accessible, and liability-managed." },
      { q: "How quickly can you respond to commercial inquiries?", a: "We prioritize commercial inquiries and typically respond within a few hours. For larger properties, we schedule an on-site walk-through before providing a detailed proposal." },
      { q: "Can you handle multiple properties for one management company?", a: "Yes. We work with property management companies managing multiple sites. We can coordinate service schedules across all properties and provide consolidated reporting." },
      { q: "Do you offer commercial grounds maintenance and HOA lawn care near me?", a: "Yes — whether you need commercial landscaping, grounds maintenance, HOA lawn care, property management landscaping, commercial mowing, or commercial snow removal in Macomb County or Oakland County, MI, Tri-Point Landscaping handles it all under one contract." },
    ],
    image2: "/photos/boxwood.jpg",
    image2Alt: "Commercial landscaping with maintained hedges and grounds in Macomb County Michigan",
    relatedServices: [
      { name: "Snow Removal", href: "/services/snow-removal" },
      { name: "Lawn Maintenance", href: "/services/lawn-maintenance" },
      { name: "Seasonal Cleanup", href: "/services/seasonal-cleanup" },
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug];
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `https://www.tripointlandscaping.com/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.tripointlandscaping.com/services/${slug}`,
      siteName: "Tri-Point Landscaping",
      type: "website",
      images: [{ url: "https://www.tripointlandscaping.com/photos/bills-google2.jpeg", width: 1200, height: 630, alt: service.metaTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["https://www.tripointlandscaping.com/photos/bills-google2.jpeg"],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug];
  if (!service) notFound();

  const relatedPosts = (serviceBlogMap[slug] ?? [])
    .map((s) => posts.find((p) => p.slug === s))
    .filter(Boolean) as typeof posts;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.tripointlandscaping.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.tripointlandscaping.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://www.tripointlandscaping.com/services/${slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    url: `https://www.tripointlandscaping.com/services/${slug}`,
    provider: {
      "@type": "LandscapingBusiness",
      name: "Tri-Point Landscaping LLC",
      telephone: "+15863278080",
      url: "https://www.tripointlandscaping.com",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "10",
        bestRating: "5",
        worstRating: "1",
      },
    },
    areaServed: "Macomb County, Michigan",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[580px] flex items-end overflow-hidden">
          <Image src={service.heroImage} alt={service.heroAlt} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />

          {/* Breadcrumb */}
          <div className="absolute top-6 left-0 right-0">
            <div className="max-w-7xl mx-auto px-6">
              <nav className="flex items-center gap-2 text-white/50 text-xs">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white/70">Services</span>
                <span>/</span>
                <span className="text-white">{service.title.split(" in ")[0]}</span>
              </nav>
            </div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32">
            <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">
              {service.heroTagline}
            </p>
            <h1
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-3xl"
            >
              {service.title}
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
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (586) 327-8080
              </a>
            </div>
          </div>
        </section>

        {/* ── INTRO + WHAT'S INCLUDED ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">Overview</p>
                <h2
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  What&apos;s Included
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{service.intro}</p>
                <p className="text-gray-500 leading-relaxed mb-10">{service.bodyParagraph}</p>

                <div className="space-y-3">
                  {service.included.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div style={{ backgroundColor: "#2C5F2E" }} className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-[15px]">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    style={{ backgroundColor: "#111111" }}
                    className="inline-flex items-center gap-2 text-white px-7 py-3.5 font-semibold tracking-wide hover:opacity-80 transition-opacity"
                  >
                    Get Your Free Estimate
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <a
                    href="tel:+15863278080"
                    style={{ borderColor: "#2C5F2E", color: "#2C5F2E" }}
                    className="inline-flex items-center gap-2 border-2 px-7 py-3.5 font-semibold tracking-wide hover:bg-green-50 transition-colors"
                  >
                    Call (586) 327-8080
                  </a>
                </div>
              </div>

              {service.image2 && (
                <div className="relative">
                  <Image
                    src={service.image2}
                    alt={service.image2Alt || ""}
                    width={700}
                    height={520}
                    className="object-cover w-full h-[260px] sm:h-[380px] lg:h-[480px]"
                  />
                  {/* Decorative accent */}
                  <div style={{ backgroundColor: "#2C5F2E" }} className="absolute -bottom-4 -left-4 w-24 h-24 hidden lg:block" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── BENEFITS — dark section ── */}
        <section style={{ backgroundColor: "#111111" }} className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-3">Why It Matters</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-4xl font-bold text-white"
              >
                The Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {service.benefits.map((b, i) => (
                <div key={b.title} style={{ backgroundColor: "#1a1a1a" }} className="p-8 hover:bg-[#222] transition-colors">
                  <div
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "#7ecb82" }}
                    className="text-4xl font-bold mb-4 opacity-30"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-white mb-3">{b.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ — cream section ── */}
        <section style={{ backgroundColor: "#f5f0e8" }} className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              <div className="lg:col-span-2">
                <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-4">FAQ</p>
                <h2
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  className="text-4xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Still have questions? Call us at{" "}
                  <a href="tel:+15863278080" className="text-green-700 font-semibold hover:underline">
                    (586) 327-8080
                  </a>{" "}
                  or{" "}
                  <Link href="/contact" className="text-green-700 font-semibold hover:underline">
                    request a free estimate
                  </Link>
                  .
                </p>
                <div className="bg-white p-6 border-l-4 border-[#2C5F2E]">
                  <p className="font-bold text-gray-900 mb-1">Free Estimates</p>
                  <p className="text-gray-500 text-sm">No obligation. We assess your property and give you a clear, upfront quote.</p>
                </div>
              </div>
              <div className="lg:col-span-3 bg-white p-8">
                <FaqAccordion faqs={service.faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS ── */}
        <section style={{ backgroundColor: "#0f2418" }} className="py-20 dot-grid">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <p style={{ color: "#7ecb82" }} className="text-sm font-semibold uppercase tracking-widest mb-3">Coverage Area</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-4xl font-bold text-white mb-4"
              >
                Available in Your Area
              </h2>
              <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
                We serve all of northern Macomb County. Select your area below for local pricing, service details, and hyper-local info.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { name: "Washington Township", slug: "washington-township" },
                { name: "Shelby Township", slug: "shelby-township" },
                { name: "Macomb Township", slug: "macomb-township" },
                { name: "Romeo", slug: "romeo" },
                { name: "Ray Township", slug: "ray-township" },
                { name: "Bruce Township", slug: "bruce-township" },
                { name: "Rochester", slug: "rochester" },
                { name: "Rochester Hills", slug: "rochester-hills" },
              ].map((area) => (
                <Link
                  key={area.slug}
                  href={`/services/${slug}/${area.slug}`}
                  className="group flex flex-col items-center justify-center gap-2 p-5 border border-white/10 hover:border-[#2C5F2E] hover:bg-[#2C5F2E]/15 transition-all text-center"
                >
                  <svg className="w-5 h-5 text-white/30 group-hover:text-[#7ecb82] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/70 group-hover:text-white text-sm font-semibold transition-colors leading-snug">{area.name}</span>
                  <span style={{ color: "#7ecb82" }} className="text-xs opacity-0 group-hover:opacity-100 transition-opacity font-medium">View Details →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── RELATED BLOG POSTS ── */}
        {relatedPosts.length > 0 && (
          <section className="py-20 bg-[#f9f7f4] border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">From the Blog</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-3xl font-bold text-gray-900 mb-10"
              >
                Tips & Guides
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white border border-gray-100 hover:border-green-200 p-6 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2C5F2E" }}>{p.category}</span>
                    <h3 className="text-base font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#2C5F2E] transition-colors leading-snug">{p.title}</h3>
                    <span className="text-xs text-gray-400">{p.readTime}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED SERVICES ── */}
        {service.relatedServices.length > 0 && (
          <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
              <p className="text-green-700 text-sm font-semibold uppercase tracking-widest mb-3">Related</p>
              <h2
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                className="text-3xl font-bold text-gray-900 mb-10"
              >
                Other Services You May Need
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {service.relatedServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    style={{ borderColor: "#e5e7eb" }}
                    className="group border p-6 hover:border-[#2C5F2E] hover:bg-[#f5f0e8] transition-all flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900 group-hover:text-[#2C5F2E] transition-colors">{s.name}</span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#2C5F2E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="relative py-32 overflow-hidden">
          <Image src={service.heroImage} alt={`${service.title} — Tri-Point Landscaping`} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75" />
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
            <p className="text-green-300 text-sm font-semibold uppercase tracking-widest mb-4">Ready to Get Started?</p>
            <h2
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Let&apos;s Transform<br />Your Property
            </h2>
            <p className="text-xl text-white/60 mb-10 max-w-lg mx-auto">
              Free estimates. Fast response. Macomb County&apos;s most trusted landscaping team.
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
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-10 py-4 font-semibold tracking-wide hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (586) 327-8080
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
