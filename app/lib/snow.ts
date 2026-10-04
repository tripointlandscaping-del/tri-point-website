// Commercial snow removal: shared data for the hub, city pages, and property type pages.
// Tri-Point's snow service is commercial only.

export const SNOW_QUOTE_HREF = "/contact#request-form";
export const SNOW_URGENCY = "Now booking 2026/27 commercial snow contracts. Limited route capacity.";

export const snowCities = [
  { slug: "washington-township", name: "Washington Township", short: "Washington Twp" },
  { slug: "shelby-township", name: "Shelby Township", short: "Shelby Twp" },
  { slug: "rochester", name: "Rochester", short: "Rochester" },
  { slug: "rochester-hills", name: "Rochester Hills", short: "Rochester Hills" },
  { slug: "macomb-township", name: "Macomb Township", short: "Macomb Twp" },
  { slug: "romeo", name: "Romeo", short: "Romeo" },
  { slug: "ray-township", name: "Ray Township", short: "Ray Twp" },
  { slug: "bruce-township", name: "Bruce Township", short: "Bruce Twp" },
];

// Commercial snow blog posts linked from the hub (active posts only).
export const snowGuideSlugs = [
  "commercial-snow-contract-checklist-macomb-county",
  "ice-management-liability-pre-treatment-service-logs-michigan",
  "commercial-snow-removal-contracts-macomb-county",
  "commercial-snow-removal-contracts-macomb-county-seasonal-vs-per-push",
  "commercial-snow-removal-washington-township-mi",
  "commercial-snow-removal-shelby-township-plazas-offices",
  "commercial-snow-removal-rochester-mi",
];

// Matching blog guide for each city snow page.
export const citySnowPost: Record<string, string> = {
  "washington-township": "commercial-snow-removal-washington-township-mi",
  "shelby-township": "commercial-snow-removal-shelby-township-plazas-offices",
  rochester: "commercial-snow-removal-rochester-mi",
};

export type PropertyType = {
  slug: string;
  name: string; // short label for cards and links
  title: string; // absolute <title>, under 60 characters
  metaDescription: string; // under 155 characters
  h1: string;
  tagline: string;
  intro: string[];
  concernsHeading: string;
  concerns: { title: string; desc: string }[];
  included: string[];
  faqs: { q: string; a: string }[];
  relatedPosts: string[];
};

export const propertyTypes: PropertyType[] = [
  {
    slug: "hoa-condo-associations",
    name: "HOAs & Condo Associations",
    title: "HOA & Condo Association Snow Removal, MI | Tri-Point",
    metaDescription:
      "Commercial snow removal for HOAs and condo associations: entrances, common walks, shared parking, service logs. Get a snow contract quote.",
    h1: "Commercial Snow Removal for HOAs & Condo Associations",
    tagline: "Entrances · Common Walkways · Shared Parking · Board Reporting",
    intro: [
      "HOA boards and condo associations answer to every resident when it snows. When the entrance isn't plowed or the walk to the mailboxes is icy, the board hears about it first. Tri-Point Landscaping provides commercial snow removal for HOAs and condo associations across Macomb County and Oakland County, with a written plan your board and management company can point to.",
      "We work under an agreement with the association or its management company, not with individual homeowners, and we clear the areas the association is responsible for: entrances, common walkways, mailbox areas, clubhouse lots, and shared parking. We do not plow individual residential driveways.",
    ],
    concernsHeading: "What Associations Need From a Snow Contractor",
    concerns: [
      { title: "Entrances and main routes", desc: "The entrance is the first thing residents and visitors see after a storm. We put entrances and the main routes through the areas we maintain at the top of the priority list in your agreement." },
      { title: "Common walkways and mailbox areas", desc: "Clubhouse walks, common sidewalks, and mailbox clusters see foot traffic every day. We clear and salt the walkways named in your agreement, with extra attention to steps and ramps." },
      { title: "Shared parking in condo communities", desc: "For condo communities with shared lots, we plan where snow goes during the site walk so piles don't bury parked cars or block garage rows and dumpster areas." },
      { title: "A clear scope for the board", desc: "A marked site map shows exactly what's included, so the board can answer residents' questions without guessing what the contractor is responsible for." },
      { title: "Records for meetings and owners", desc: "Service logs after every visit give your management company a record of when crews were on site and what was done, which is useful for board meetings and resident questions." },
      { title: "A predictable budget", desc: "A seasonal contract gives the association a fixed winter cost for the annual budget. Per-push service is available too, and we can quote both." },
    ],
    included: [
      "Entrance and common-area plowing",
      "Common sidewalk, clubhouse, and mailbox area clearing",
      "Shared parking lot plowing for condo communities",
      "Salt and ice melt on walkways, steps, and ramps",
      "Trigger depths and priorities written into the agreement",
      "Seasonal contracts or per-push pricing",
      "Service logs after every visit",
      "Certificates of insurance and W-9 on request",
    ],
    faqs: [
      { q: "Do you plow individual homeowners' driveways in our community?", a: "No. We contract with the association or its management company and clear the common areas in the agreement, such as entrances, common walks, mailbox areas, and shared parking. We don't plow individual residential driveways." },
      { q: "Who do residents contact during a storm?", a: "Your board or management company is our point of contact. Keeping communication in one channel avoids mixed messages and makes sure changes go through the people responsible for the agreement." },
      { q: "Can we get service logs for board meetings?", a: "Yes. We keep a service log after every visit and can share it with your management company or board." },
      { q: "Do you provide certificates of insurance and a W-9 for the association?", a: "Yes. We carry general liability and workers' comp coverage and provide certificates of insurance and a W-9 on request." },
      { q: "Should our association choose a seasonal contract or per-push?", a: "A seasonal contract gives the board a fixed winter cost, while per-push service is billed by visit. We'll walk the community and can quote either option." },
    ],
    relatedPosts: ["commercial-snow-contract-checklist-macomb-county", "commercial-snow-removal-contracts-macomb-county-seasonal-vs-per-push"],
  },
  {
    slug: "retail-plazas-shopping-centers",
    name: "Retail Plazas & Shopping Centers",
    title: "Retail Plaza & Shopping Center Snow Removal | Tri-Point",
    metaDescription:
      "Commercial snow removal for retail plazas and shopping centers: drive lanes, storefront walks, fire lanes, salting. Get a snow contract quote today.",
    h1: "Commercial Snow Removal for Retail Plazas & Shopping Centers",
    tagline: "Drive Lanes · Storefront Walks · Fire Lanes · Snow Storage",
    intro: [
      "A plaza only does business when customers can pull in, park, and walk to the door. After a storm, every tenant is counting on the lot being open before they unlock. Tri-Point Landscaping plows and salts retail plazas and shopping centers in Washington Township, Shelby Township, Rochester, Rochester Hills, Macomb Township, and the rest of our service area.",
      "Plazas come with specific challenges: several tenants with different hours, tight drive lanes, fire lanes that must stay open, and very little room to store snow. We work those details out during the site walk and write them into the agreement, so property managers and tenants know what to expect.",
    ],
    concernsHeading: "What Matters Most at a Plaza",
    concerns: [
      { title: "Entrances and drive lanes first", desc: "Customers need to get in from the road and move through the lot. Entrances and main drive lanes are the first priority in most plaza agreements." },
      { title: "Storefront walkways", desc: "Tenants notice when the sidewalk in front of their door isn't cleared. We include walkways along the full length of the building and salt them after clearing." },
      { title: "Fire lanes and accessible parking", desc: "Fire lanes and accessible spaces need to stay clear, and snow should never be piled in them. We mark these areas on the site map." },
      { title: "Snow storage", desc: "Plazas rarely have spare room. We decide ahead of time where piles go so they don't take up parking, cover drains, or block sight lines at exits onto busy roads." },
      { title: "Tenants with early hours", desc: "Grocery, pharmacy, and restaurant tenants may open earlier than others. We set clearing priorities around the earliest opening on the property." },
      { title: "One plan for every tenant", desc: "A written plan you can share with tenants keeps expectations the same for everyone and cuts down on calls to the property manager." },
    ],
    included: [
      "Parking lot and drive lane plowing",
      "Storefront sidewalk and entrance clearing",
      "Fire lane and accessible parking clearing",
      "Salt and ice melt on walkways and high-traffic pavement",
      "Pre-treatment ahead of freezing rain when conditions call for it",
      "Snow storage plan and relocation terms in the agreement",
      "Service logs after every visit",
      "Certificates of insurance and W-9 on request",
    ],
    faqs: [
      { q: "Can you clear the lot before our tenants open?", a: "We'll go over tenant hours during the site walk and set clearing priorities so entrances, drive lanes, and storefront walks are handled first. Timing during heavy, ongoing storms depends on conditions, and we'll keep you updated." },
      { q: "Where will you pile the snow?", a: "We pick storage spots during the site walk and mark them on the site map. Snow is never piled in fire lanes, accessible spaces, or drains, and the agreement explains what happens if the plaza runs out of room." },
      { q: "Do you clear the sidewalks in front of each store?", a: "Yes. Storefront walkways and entrances are part of our plaza service when they're included in the agreement, along with salting." },
      { q: "Can we get documentation for owners or tenants?", a: "Yes. We keep service logs after every visit and provide certificates of insurance for general liability and workers' comp, plus a W-9, on request." },
    ],
    relatedPosts: ["commercial-snow-removal-shelby-township-plazas-offices", "commercial-snow-contract-checklist-macomb-county"],
  },
  {
    slug: "office-buildings",
    name: "Office Buildings",
    title: "Office Building Snow Removal & Ice Management | Tri-Point",
    metaDescription:
      "Commercial snow removal for office buildings and office parks: employee lots, entrances, ramps, salting, service logs. Get a snow contract quote.",
    h1: "Commercial Snow Removal for Office Buildings",
    tagline: "Employee Lots · Entrances · Steps & Ramps · Early Starts",
    intro: [
      "Office buildings run on a schedule. Employees arrive early, visitors have appointments, and nobody wants the first hour of the day spent digging out. Tri-Point Landscaping provides commercial snow removal for office buildings and office parks across Macomb County and Oakland County, with clearing priorities built around your start time.",
      "Whether you manage a single building or several buildings in an office park, we set up one written agreement with trigger depths, priorities, and salting terms, and one point of contact for the whole property.",
    ],
    concernsHeading: "What Office Properties Need",
    concerns: [
      { title: "Clear before the workday", desc: "We go over your start time and when the first employees arrive, then set priorities so drive lanes, main entrances, and walkways are handled first." },
      { title: "Every door people use", desc: "Main entrances, side doors, and staff entrances all get used in winter. We include each one you need in the agreement so none get missed." },
      { title: "Steps, ramps, and walkways", desc: "Slips happen on foot, not in the drive lane. Steps, ramps, and the walks from parking to the building get cleared and salted." },
      { title: "Visitor and accessible parking", desc: "Visitor spaces and accessible parking near the entrance stay clear, and snow is never piled into them." },
      { title: "Morning refreeze", desc: "Meltwater from snow piles often refreezes overnight. The agreement explains how return visits for refreeze and morning salting are handled." },
      { title: "Office parks with several buildings", desc: "For office parks, we coordinate service across buildings under one agreement so the facility manager has a single contact and a single set of service logs." },
    ],
    included: [
      "Employee and visitor lot plowing",
      "Main, side, and staff entrance clearing",
      "Steps, ramps, and walkway clearing",
      "Salt and ice melt after clearing",
      "Pre-treatment ahead of freezing rain when conditions call for it",
      "Seasonal contracts or per-push pricing",
      "Service logs after every visit",
      "Certificates of insurance and W-9 on request",
    ],
    faqs: [
      { q: "Can our lot be cleared before employees arrive?", a: "We set clearing priorities around your start time so lanes, entrances, and walkways come first. During heavy, ongoing storms timing depends on conditions, and we'll keep your facility contact updated." },
      { q: "Do you service multiple buildings in an office park?", a: "Yes. We can coordinate service across several buildings under one agreement, with one point of contact and one set of service logs." },
      { q: "How do you handle ice that forms overnight?", a: "The agreement spells out salting after clearing and how return visits for refreeze are handled, including pre-treatment ahead of freezing rain when conditions call for it." },
      { q: "Can you provide a certificate of insurance and W-9 for vendor setup?", a: "Yes. We carry general liability and workers' comp coverage and provide certificates of insurance and a W-9 on request." },
    ],
    relatedPosts: ["ice-management-liability-pre-treatment-service-logs-michigan", "commercial-snow-removal-washington-township-mi"],
  },
  {
    slug: "churches",
    name: "Churches",
    title: "Church Parking Lot Snow Removal, MI | Tri-Point",
    metaDescription:
      "Commercial snow removal for churches: Sunday-ready lots, entrances, steps, ramps and salting in Macomb & Oakland County. Get a snow contract quote.",
    h1: "Commercial Snow Removal for Churches",
    tagline: "Sunday Services · Evening Events · Entrances & Steps · Drop-Off Areas",
    intro: [
      "A church parking lot may sit quiet most of the week, then fill up for Sunday services, weddings, funerals, and evening events. When snow falls, the lot, the steps, and the walk to the door all need to be ready for people of every age. Tri-Point Landscaping provides commercial snow removal for churches across Macomb County and Oakland County.",
      "We work with your church office, facilities committee, or board to set up a written plan built around your schedule, so you're not relying on volunteers with shovels on a Sunday morning.",
    ],
    concernsHeading: "What Churches Need From a Snow Plan",
    concerns: [
      { title: "Ready for Sunday services", desc: "We set clearing priorities around your service times so the lot, entrances, and walkways are the focus before people arrive." },
      { title: "Midweek and evening events", desc: "Bible studies, choir practice, weddings, and funerals happen outside Sunday mornings. Let us know your regular schedule, and tell us about special events as soon as they're planned." },
      { title: "Steps, handrails, and ramps", desc: "Many congregations include older members and people with limited mobility. Steps, ramps, and entrances get cleared and salted with care." },
      { title: "Drop-off areas and accessible parking", desc: "Drop-off lanes at the main entrance and accessible spaces near the door stay clear, and snow is never piled into them." },
      { title: "A budget that fits how the lot is used", desc: "Because many church lots are busiest only a few days a week, some churches prefer per-push service and others prefer a fixed seasonal cost. We'll walk the property and quote what fits." },
      { title: "Records for your board", desc: "Service logs after every visit and certificates of insurance on request give your board and insurance carrier the documentation they need." },
    ],
    included: [
      "Parking lot and drive lane plowing",
      "Main entrance, side door, and walkway clearing",
      "Steps and ramps cleared and salted",
      "Drop-off lane and accessible parking clearing",
      "Priorities set around service and event times",
      "Seasonal contracts or per-push pricing",
      "Service logs after every visit",
      "Certificates of insurance and W-9 on request",
    ],
    faqs: [
      { q: "Can you have our lot ready for Sunday morning services?", a: "We set clearing priorities around your service times so the lot, entrances, and walkways come first. During heavy, ongoing storms timing depends on conditions, and we'll keep your church contact updated." },
      { q: "Do you handle midweek and evening events?", a: "Share your regular weekly schedule during the site walk and we'll build it into the plan. For weddings, funerals, and special events, let us know as soon as they're scheduled." },
      { q: "Should a church choose seasonal or per-push?", a: "It depends on how often the lot is used and how your budget works. A seasonal contract gives a fixed winter cost, while per-push is billed by visit. We can quote both." },
      { q: "Can you provide a certificate of insurance for our board or insurance carrier?", a: "Yes. We carry general liability and workers' comp coverage and provide certificates of insurance and a W-9 on request." },
    ],
    relatedPosts: ["commercial-snow-removal-contracts-macomb-county-seasonal-vs-per-push", "ice-management-liability-pre-treatment-service-logs-michigan"],
  },
  {
    slug: "medical-offices",
    name: "Medical Offices",
    title: "Medical Office Snow Removal & Ice Management | Tri-Point",
    metaDescription:
      "Commercial snow removal for medical offices: patient parking, drop-off lanes, accessible spaces, ramps and salting. Get a snow contract quote today.",
    h1: "Commercial Snow Removal for Medical Offices",
    tagline: "Patient Parking · Drop-Off Lanes · Ramps & Entrances · Ice Management",
    intro: [
      "Patients at a medical office are often the people least able to handle a snowy lot or an icy step: older adults, people using walkers or wheelchairs, parents carrying small children, and anyone who isn't feeling well. Tri-Point Landscaping provides commercial snow removal and ice management for medical offices, dental practices, and medical buildings across Macomb County and Oakland County.",
      "We build the plan around patient safety and your schedule: accessible parking, drop-off lanes, ramps, and entrances first, with salting and pre-treatment to keep ice from forming where patients walk.",
    ],
    concernsHeading: "What Medical Offices Need",
    concerns: [
      { title: "Accessible parking and routes", desc: "Accessible spaces, curb cuts, and the route from those spaces to the entrance are a top priority. Snow is never piled into accessible spaces." },
      { title: "Patient drop-off and pickup", desc: "Drop-off lanes and the area right in front of the entrance get cleared early and salted, so patients can get from the car to the door safely." },
      { title: "Ramps, steps, and entrances", desc: "Ramps and steps are where many winter slips happen. We clear and salt them, and we pay attention to shaded spots that stay icy longer." },
      { title: "Early appointments and staff arrival", desc: "We go over your first appointment and staff arrival times during the site walk and set priorities around them." },
      { title: "Ice management, not just plowing", desc: "Pre-treatment ahead of freezing rain when conditions call for it, salting after clearing, and return visits for refreeze are all spelled out in the agreement." },
      { title: "Documentation for practice managers", desc: "Service logs after every visit and certificates of insurance on request give your practice manager or building owner a clear record." },
    ],
    included: [
      "Patient and staff parking lot plowing",
      "Accessible parking and curb cut clearing",
      "Drop-off lane and entrance clearing",
      "Ramps, steps, and walkways cleared and salted",
      "Pre-treatment ahead of freezing rain when conditions call for it",
      "Seasonal contracts or per-push pricing",
      "Service logs after every visit",
      "Certificates of insurance and W-9 on request",
    ],
    faqs: [
      { q: "Can you clear patient parking and drop-off before the first appointment?", a: "We set clearing priorities around your first appointments and staff arrival, with accessible parking, drop-off lanes, and entrances first. During heavy, ongoing storms timing depends on conditions, and we'll keep your office updated." },
      { q: "Do you clear and salt ramps and entrances?", a: "Yes. Ramps, steps, entrances, and the walkways patients use are cleared and salted, and we pre-treat ahead of freezing rain when conditions call for it." },
      { q: "Do you service medical buildings with several practices?", a: "Yes. We can work with the building owner or property manager under one agreement covering shared lots, entrances, and walkways." },
      { q: "Can you provide certificates of insurance and a W-9?", a: "Yes. We carry general liability and workers' comp coverage and provide certificates of insurance and a W-9 on request." },
    ],
    relatedPosts: ["ice-management-liability-pre-treatment-service-logs-michigan", "commercial-snow-removal-rochester-mi"],
  },
  {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse Lots",
    title: "Industrial & Warehouse Lot Snow Plowing | Tri-Point",
    metaDescription:
      "Commercial snow removal for industrial and warehouse lots: truck routes, loading docks, employee lots, shift changes. Get a snow contract quote today.",
    h1: "Commercial Snow Removal for Industrial & Warehouse Lots",
    tagline: "Truck Routes · Loading Docks · Employee Lots · Shift Changes",
    intro: [
      "At an industrial or warehouse property, snow doesn't just slow customers down. It can stop trucks from reaching the docks and make it hard for shift workers to park and walk in. Tri-Point Landscaping provides commercial snow removal for industrial buildings, warehouses, and flex properties across Macomb County and Oakland County.",
      "Every industrial site is laid out differently, so we start with a site walk to map truck routes, dock approaches, employee parking, and where snow can be stored. Then we write those priorities into the agreement.",
    ],
    concernsHeading: "What Industrial Sites Need",
    concerns: [
      { title: "Truck routes and dock approaches", desc: "Trucks need a clear path from the road to the docks. We map truck routes and dock approaches during the site walk and make them a priority in the agreement." },
      { title: "Shift changes", desc: "Plants and warehouses often run more than one shift. We go over shift times so employee lots and entrances are cleared around them." },
      { title: "Employee lots and walkways", desc: "Employee parking, the walks to the building, and the doors workers actually use get cleared and salted." },
      { title: "Snow storage on large lots", desc: "Big paved areas create big piles. We plan storage that won't block dock doors, trailer parking, hydrants, or drainage, and the agreement covers relocation if space runs out." },
      { title: "Trailers and equipment", desc: "Parked trailers and equipment change from day to day. We'll talk through how to handle areas that are blocked on service day." },
      { title: "Vendor documentation", desc: "Certificates of insurance, a W-9, and service logs after every visit make vendor setup and recordkeeping straightforward." },
    ],
    included: [
      "Truck route and dock approach plowing",
      "Employee parking lot plowing",
      "Entrance and walkway clearing",
      "Salt and ice melt on walkways and dock areas",
      "Snow storage plan and relocation terms",
      "Seasonal contracts or per-push pricing",
      "Service logs after every visit",
      "Certificates of insurance and W-9 on request",
    ],
    faqs: [
      { q: "Can you work around our shift changes?", a: "Yes. We go over your shift times during the site walk and set priorities so employee lots and entrances are cleared around them. During heavy, ongoing storms timing depends on conditions, and we'll keep your facility contact updated." },
      { q: "Do you clear loading dock approaches?", a: "Yes. Truck routes and dock approaches are mapped during the site walk and included in the agreement, along with salting where needed." },
      { q: "What happens when we run out of room to pile snow?", a: "The agreement covers where snow goes and what happens when storage runs out, including how relocation is handled." },
      { q: "Can you provide a certificate of insurance and W-9 for vendor onboarding?", a: "Yes. We carry general liability and workers' comp coverage and provide certificates of insurance and a W-9 on request." },
    ],
    relatedPosts: ["commercial-snow-contract-checklist-macomb-county", "commercial-snow-removal-shelby-township-plazas-offices"],
  },
];

export const propertyTypeSlugs = propertyTypes.map((p) => p.slug);
