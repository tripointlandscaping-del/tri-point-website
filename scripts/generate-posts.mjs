import { readFileSync, writeFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_FILE = join(__dirname, "../app/blog/posts.ts");
const QUEUE_FILE = join(__dirname, "topic-queue.json");

// All allowed categories — must match exactly
const ALLOWED_CATEGORIES = [
  "Lawn Care",
  "Landscaping",
  "Mulch & Stone",
  "Seasonal",
  "Snow & Ice",
  "Lawn Renovations",
  "Hardscaping",
  "Commercial",
];

// Topics annotated with their category for weighted selection
const TOPIC_POOL = [
  // ── LAWN CARE ──
  { topic: "Why your grass turns yellow and how to fix it in Michigan", category: "Lawn Care" },
  { topic: "How to get rid of dandelions without killing your lawn in Macomb County", category: "Lawn Care" },
  { topic: "Lawn striping: how to get those professional mowing patterns", category: "Lawn Care" },
  { topic: "How to choose the right grass seed for Michigan", category: "Lawn Care" },
  { topic: "Grub control in Michigan: signs, timing, and treatment", category: "Lawn Care" },
  { topic: "How to edge a lawn like a professional", category: "Lawn Care" },
  { topic: "Irrigation tips for Michigan homeowners", category: "Lawn Care" },
  { topic: "How to revive a neglected lawn in Macomb County", category: "Lawn Care" },
  { topic: "How to deal with lawn fungus in Michigan", category: "Lawn Care" },
  { topic: "How to keep your lawn green during a Michigan drought", category: "Lawn Care" },
  { topic: "Tips for maintaining a lawn near trees in Michigan", category: "Lawn Care" },
  { topic: "How to remove moss from your lawn in Michigan", category: "Lawn Care" },
  { topic: "How to maintain a healthy lawn on a budget in Macomb County", category: "Lawn Care" },
  { topic: "How to get rid of weeds in garden beds without chemicals", category: "Lawn Care" },
  { topic: "What is the right mowing height for Michigan grass", category: "Lawn Care" },
  { topic: "How to water your lawn correctly in Macomb County", category: "Lawn Care" },
  { topic: "Why your lawn has stripes or uneven color after mowing", category: "Lawn Care" },
  { topic: "Dog urine spots on lawn: how to fix and prevent in Michigan", category: "Lawn Care" },
  { topic: "How to deal with moles in your Michigan lawn", category: "Lawn Care" },
  { topic: "Mushrooms growing in my lawn in Michigan: causes and fixes", category: "Lawn Care" },
  { topic: "Ground ivy takeover: how to reclaim your Michigan lawn", category: "Lawn Care" },
  { topic: "How to fix lawn ruts caused by vehicles or equipment in Macomb County", category: "Lawn Care" },
  { topic: "Weekly vs bi-weekly mowing: which is better for Michigan lawns", category: "Lawn Care" },
  { topic: "Organic fertilizer vs synthetic: which is better for Michigan lawns", category: "Lawn Care" },
  { topic: "How to deal with crabgrass that is already growing in Michigan", category: "Lawn Care" },
  { topic: "Why your lawn looks patchy after fertilizing in Macomb County", category: "Lawn Care" },
  { topic: "How to fix lawn damage from grubs in Macomb County", category: "Lawn Care" },
  { topic: "Hydroseeding vs traditional overseeding in Michigan", category: "Lawn Care" },
  { topic: "Lawn care for new construction homes in Macomb County", category: "Lawn Care" },
  { topic: "How to read a soil test for your Michigan lawn", category: "Lawn Care" },

  // ── LANDSCAPING ──
  { topic: "How to create curb appeal with landscaping in Michigan", category: "Landscaping" },
  { topic: "The best plants for a low-maintenance Michigan landscape", category: "Landscaping" },
  { topic: "How to attract pollinators to your Michigan landscape", category: "Landscaping" },
  { topic: "The best shrubs for Michigan winters", category: "Landscaping" },
  { topic: "How to install landscape edging in Michigan", category: "Landscaping" },
  { topic: "Why fall is the best time for landscaping projects in Macomb County", category: "Landscaping" },
  { topic: "How to plant trees and shrubs in Macomb County", category: "Landscaping" },
  { topic: "Landscaping mistakes Michigan homeowners make every year", category: "Landscaping" },
  { topic: "How to design a front yard landscape in Washington Township", category: "Landscaping" },
  { topic: "The best flowering plants for Macomb County landscapes", category: "Landscaping" },
  { topic: "How to add privacy to your yard with landscaping in Michigan", category: "Landscaping" },
  { topic: "Native plants for Michigan landscaping: what to choose", category: "Landscaping" },
  { topic: "How to landscape around a pool in Macomb County", category: "Landscaping" },
  { topic: "Red flags when hiring a landscaper in Michigan", category: "Landscaping" },
  { topic: "How to improve your home resale value with landscaping in Macomb County", category: "Landscaping" },
  { topic: "DIY landscaping vs hiring a pro in Macomb County: real cost comparison", category: "Landscaping" },
  { topic: "How to landscape a sloped yard in Michigan", category: "Landscaping" },
  { topic: "The best evergreen shrubs for year-round color in Michigan", category: "Landscaping" },
  { topic: "How to fix erosion in your Macomb County yard", category: "Landscaping" },
  { topic: "Standing water in my yard: how to fix drainage in Macomb County", category: "Landscaping" },
  { topic: "How to landscape a corner lot in Washington Township", category: "Landscaping" },
  { topic: "Landscape lighting ideas for Macomb County homes", category: "Landscaping" },
  { topic: "How to create a backyard oasis in Macomb County on a budget", category: "Landscaping" },
  { topic: "What a landscaping contract should include in Macomb County", category: "Landscaping" },

  // ── MULCH & STONE ──
  { topic: "The difference between topsoil, compost, and mulch", category: "Mulch & Stone" },
  { topic: "How much mulch do you need: a guide for Macomb County homeowners", category: "Mulch & Stone" },
  { topic: "Mulch vs decorative stone: which is better for Michigan landscapes", category: "Mulch & Stone" },
  { topic: "How often should you replace mulch in Michigan", category: "Mulch & Stone" },
  { topic: "The best mulch colors for homes in Macomb County", category: "Mulch & Stone" },
  { topic: "How to prevent weeds in mulch beds in Michigan", category: "Mulch & Stone" },
  { topic: "River rock vs lava rock: which is better for Michigan landscaping", category: "Mulch & Stone" },
  { topic: "Mulch volcano: why piling mulch against trees kills them in Michigan", category: "Mulch & Stone" },
  { topic: "How deep should mulch be in Michigan: avoiding common mistakes", category: "Mulch & Stone" },
  { topic: "The best time to apply mulch in Michigan: spring vs fall", category: "Mulch & Stone" },
  { topic: "How to edge garden beds professionally in Macomb County", category: "Mulch & Stone" },
  { topic: "Rubber mulch vs wood mulch: which is right for Michigan yards", category: "Mulch & Stone" },
  { topic: "How to install a river rock drainage swale in Macomb County", category: "Mulch & Stone" },
  { topic: "Landscape fabric: does it actually prevent weeds in Michigan", category: "Mulch & Stone" },
  { topic: "How much does mulch installation cost in Macomb County in 2026", category: "Mulch & Stone" },
  { topic: "Black mulch vs brown mulch vs red mulch: which looks best in Michigan", category: "Mulch & Stone" },

  // ── SEASONAL ──
  { topic: "Spring landscaping checklist for Macomb County homeowners", category: "Seasonal" },
  { topic: "When to plant flowers in Macomb County Michigan", category: "Seasonal" },
  { topic: "How to prepare garden beds for spring in Michigan", category: "Seasonal" },
  { topic: "Fall cleanup checklist for Macomb County homeowners", category: "Seasonal" },
  { topic: "How to clean up leaves without damaging your lawn in Michigan", category: "Seasonal" },
  { topic: "When to cut back perennials in Michigan", category: "Seasonal" },
  { topic: "How to prepare your yard for winter in Macomb County", category: "Seasonal" },
  { topic: "Why spring cleanup matters for your lawn and landscape", category: "Seasonal" },
  { topic: "What to do with your yard in January in Macomb County", category: "Seasonal" },
  { topic: "February yard prep: what Michigan homeowners should do before spring", category: "Seasonal" },
  { topic: "March lawn care: what to do before the grass wakes up in Michigan", category: "Seasonal" },
  { topic: "May lawn care checklist for Macomb County homeowners", category: "Seasonal" },
  { topic: "July lawn care: surviving Michigan summer heat and drought", category: "Seasonal" },
  { topic: "August lawn care checklist for Macomb County", category: "Seasonal" },
  { topic: "November yard shutdown: closing out the season in Michigan the right way", category: "Seasonal" },
  { topic: "When does spring cleanup season start in Macomb County", category: "Seasonal" },
  { topic: "How much does spring cleanup cost in Washington Township MI", category: "Seasonal" },
  { topic: "How much does fall cleanup cost in Macomb County in 2026", category: "Seasonal" },

  // ── SNOW & ICE ──
  { topic: "How to fix lawn damage caused by snow plowing in Michigan", category: "Snow & Ice" },
  { topic: "How to prevent ice dams on your property in Macomb County", category: "Snow & Ice" },
  { topic: "Rock salt vs calcium chloride: what to use on Michigan driveways", category: "Snow & Ice" },
  { topic: "How to protect your landscaping from snow plow damage", category: "Snow & Ice" },
  { topic: "When to hire a snow removal company vs doing it yourself in Michigan", category: "Snow & Ice" },
  { topic: "How to prepare your driveway for winter in Macomb County", category: "Snow & Ice" },
  { topic: "Commercial snow removal: what to expect from a contractor", category: "Snow & Ice" },
  { topic: "How salt damage affects your lawn and how to fix it in spring", category: "Snow & Ice" },
  { topic: "Seasonal vs per-push snow removal: which contract is better in Macomb County", category: "Snow & Ice" },
  { topic: "Emergency snow removal in Macomb County: when to call and what to expect", category: "Snow & Ice" },
  { topic: "Snow removal liability: why Michigan homeowners hire professionals", category: "Snow & Ice" },
  { topic: "The best de-icing products for Michigan driveways in 2026", category: "Snow & Ice" },
  { topic: "How to winterize your irrigation system in Michigan before the freeze", category: "Snow & Ice" },
  { topic: "What questions to ask your snow removal contractor before winter", category: "Snow & Ice" },
  { topic: "How to deal with ice on walkways and steps safely in Macomb County", category: "Snow & Ice" },
  { topic: "Snow removal cost in Macomb County: complete 2026 pricing guide", category: "Snow & Ice" },
  { topic: "When to start thinking about snow removal contracts in Macomb County", category: "Snow & Ice" },
  { topic: "How Michigan winters affect your driveway and what to do about it", category: "Snow & Ice" },

  // ── LAWN RENOVATIONS ──
  { topic: "Lawn renovation vs lawn replacement: which do you need in Michigan", category: "Lawn Renovations" },
  { topic: "How to aerate your lawn in Michigan: timing and technique", category: "Lawn Renovations" },
  { topic: "What is dethatching and when should you do it in Macomb County", category: "Lawn Renovations" },
  { topic: "Top dressing a lawn: how and when to do it in Michigan", category: "Lawn Renovations" },
  { topic: "How long does it take to grow a new lawn from seed in Michigan", category: "Lawn Renovations" },
  { topic: "Core aeration vs liquid aeration: which is better for Michigan soil", category: "Lawn Renovations" },
  { topic: "Sod vs seed: which is better for a Michigan lawn renovation", category: "Lawn Renovations" },
  { topic: "How to fix compacted soil in a Michigan lawn permanently", category: "Lawn Renovations" },
  { topic: "Kentucky bluegrass vs tall fescue: best grass for Macomb County", category: "Lawn Renovations" },
  { topic: "When is it too late to overseed a lawn in Michigan", category: "Lawn Renovations" },
  { topic: "How to grow grass in shaded areas of your Michigan yard", category: "Lawn Renovations" },
  { topic: "Why your lawn looks worse after overseeding and what to do in Macomb County", category: "Lawn Renovations" },
  { topic: "Aeration and overseeding cost in Macomb County: 2026 pricing guide", category: "Lawn Renovations" },
  { topic: "How to prepare your lawn for overseeding this fall in Michigan", category: "Lawn Renovations" },
  { topic: "What causes thatch buildup in Michigan lawns and how to fix it", category: "Lawn Renovations" },
  { topic: "Lawn renovation timeline for Macomb County: what to expect month by month", category: "Lawn Renovations" },
  { topic: "How to fix a lawn destroyed by construction in Macomb County", category: "Lawn Renovations" },
  { topic: "Spring lawn renovation checklist for Washington Township homeowners", category: "Lawn Renovations" },

  // ── HARDSCAPING ──
  { topic: "How to choose between a paver patio and concrete patio in Michigan", category: "Hardscaping" },
  { topic: "Fire pit installation ideas for Macomb County backyards", category: "Hardscaping" },
  { topic: "How much does a retaining wall cost in Macomb County", category: "Hardscaping" },
  { topic: "Outdoor kitchen installation in Macomb County Michigan", category: "Hardscaping" },
  { topic: "Best patio materials for Michigan winters: what holds up", category: "Hardscaping" },
  { topic: "Hardscaping ideas for small yards in Macomb County", category: "Hardscaping" },
  { topic: "How to add curb appeal with a front walkway in Michigan", category: "Hardscaping" },
  { topic: "Patio contractor questions to ask before hiring in Macomb County", category: "Hardscaping" },
  { topic: "How much does hardscaping cost in Macomb County: complete 2026 guide", category: "Hardscaping" },
  { topic: "Retaining wall vs landscape timbers: which is better in Michigan", category: "Hardscaping" },
  { topic: "How to add a seating wall to your patio in Michigan", category: "Hardscaping" },
  { topic: "Permeable pavers vs standard pavers: which is right for Michigan", category: "Hardscaping" },
  { topic: "How to extend your outdoor living season in Macomb County", category: "Hardscaping" },
  { topic: "Flagstone vs pavers: which is better for a Michigan patio", category: "Hardscaping" },
  { topic: "How to prevent frost heave damage to patios in Macomb County", category: "Hardscaping" },
  { topic: "Walkway installation cost guide for Macomb County homeowners", category: "Hardscaping" },
  { topic: "How to design a backyard patio for Michigan weather", category: "Hardscaping" },
  { topic: "Step installation for sloped yards in Macomb County", category: "Hardscaping" },

  // ── COMMERCIAL ──
  { topic: "What to look for in a commercial landscaping contract in Michigan", category: "Commercial" },
  { topic: "How commercial snow removal contracts work in Macomb County", category: "Commercial" },
  { topic: "Why consistent landscaping matters for commercial properties in Michigan", category: "Commercial" },
  { topic: "How to find a reliable commercial lawn care company in Macomb County", category: "Commercial" },
  { topic: "HOA landscaping requirements: what property managers need to know in Michigan", category: "Commercial" },
  { topic: "Commercial snow removal contracts in Macomb County: seasonal vs per-push", category: "Commercial" },
  { topic: "How commercial landscaping affects property values in Macomb County", category: "Commercial" },
  { topic: "What is grounds maintenance and what should your contract include", category: "Commercial" },
  { topic: "Apartment complex landscaping: what property managers need in Macomb County", category: "Commercial" },
  { topic: "How to get landscaping bids for commercial properties in Macomb County", category: "Commercial" },
  { topic: "Retail center landscaping: first impressions and foot traffic in Michigan", category: "Commercial" },
  { topic: "How to budget for commercial landscaping in Macomb County", category: "Commercial" },
  { topic: "Office park grounds maintenance schedules that actually work in Michigan", category: "Commercial" },
  { topic: "Why HOA communities in Macomb County need a professional snow removal contract", category: "Commercial" },
  { topic: "Commercial property curb appeal: how landscaping affects tenant retention in Michigan", category: "Commercial" },
  { topic: "5 signs your commercial landscaping company is underperforming in Macomb County", category: "Commercial" },
  { topic: "Year-round lawn care contracts for Michigan businesses: what to expect", category: "Commercial" },
  { topic: "HOA lawn enforcement: how to maintain uniform landscaping standards in Michigan", category: "Commercial" },

  // ── HYPER-LOCAL ──
  { topic: "Lawn care in Shelby Township MI: what homeowners need to know", category: "Lawn Care" },
  { topic: "Rochester Hills landscaping guide for new homeowners", category: "Landscaping" },
  { topic: "Macomb Township lawn care: common issues and how to fix them", category: "Lawn Care" },
  { topic: "Romeo MI landscaping: rural property care tips and challenges", category: "Landscaping" },
  { topic: "Ray Township property maintenance: large lot lawn care guide", category: "Lawn Care" },
  { topic: "Washington Township snow removal: what residents need to know each winter", category: "Snow & Ice" },
  { topic: "Shelby Township spring cleanup: when to book and what to expect", category: "Seasonal" },
  { topic: "Macomb County clay soil: how it affects your lawn and what to do", category: "Lawn Care" },
  { topic: "Best grass types for Washington Township and Shelby Township lawns", category: "Lawn Renovations" },
  { topic: "Why Macomb County homeowners book landscaping services in January", category: "Landscaping" },
  { topic: "Bruce Township landscaping: acreage property care in northern Macomb County", category: "Landscaping" },
  { topic: "Spring lawn care in Rochester Hills: what Oakland County homeowners need to know", category: "Lawn Care" },
  { topic: "Snow removal in Washington Township 48094: what to expect from a local company", category: "Snow & Ice" },
  { topic: "Lawn renovation in Shelby Township: best timing and what it costs", category: "Lawn Renovations" },

  // ── DECISION / COMPARISON ──
  { topic: "How to choose the best landscaping company in Macomb County", category: "Landscaping" },
  { topic: "Questions to ask before hiring a lawn care company in Michigan", category: "Lawn Care" },
  { topic: "Local vs national landscaping companies: why local wins in Macomb County", category: "Landscaping" },
  { topic: "How to read a landscaping estimate in Michigan", category: "Landscaping" },
  { topic: "Why hire a fully insured landscaping company in Michigan", category: "Landscaping" },
  { topic: "Gas vs electric snow blower: which is right for Macomb County", category: "Snow & Ice" },
  { topic: "Push mower vs riding mower: what is right for your Macomb County property", category: "Lawn Care" },
  { topic: "Spring vs fall aeration: which is better for Michigan lawns", category: "Lawn Renovations" },
  { topic: "Landscape contractor vs handyman: who should you hire in Michigan", category: "Landscaping" },
  { topic: "How to compare lawn care bids in Macomb County without getting burned", category: "Lawn Care" },
];

// ── QUEUE MANAGEMENT ──
// Loads or initializes the round-robin queue file.
// usedTopics: array of topic strings already used since last reset.
function loadQueue() {
  if (existsSync(QUEUE_FILE)) {
    try {
      return JSON.parse(readFileSync(QUEUE_FILE, "utf8"));
    } catch {
      // corrupt file — start fresh
    }
  }
  return { usedTopics: [] };
}

function saveQueue(queue) {
  writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2));
}

async function generatePosts() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not set");

  const currentContent = readFileSync(POSTS_FILE, "utf8");
  const existingSlugs = new Set([...currentContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]));

  // Load round-robin queue
  const queue = loadQueue();

  // If every topic has been used once, reset the queue so the cycle begins again
  if (queue.usedTopics.length >= TOPIC_POOL.length) {
    console.log("🔄 Full cycle complete — resetting topic queue for next rotation.");
    queue.usedTopics = [];
  }

  // Topics not yet used in this cycle
  const remaining = TOPIC_POOL.filter(({ topic }) => !queue.usedTopics.includes(topic));

  if (remaining.length === 0) {
    // Shouldn't happen after reset above, but safety net
    console.log("⚠️ No remaining topics — skipping.");
    process.exit(0);
  }

  // Count existing posts per category (normalize legacy names)
  const categoryCounts = {};
  ALLOWED_CATEGORIES.forEach((c) => (categoryCounts[c] = 0));
  [...currentContent.matchAll(/category:\s*["']([^"']+)["']/g)].forEach((m) => {
    const raw = m[1];
    const normalized =
      raw === "Lawn Maintenance" ? "Lawn Care" :
      raw === "Snow Removal"    ? "Snow & Ice" :
      raw === "Seasonal Cleanup" ? "Seasonal" :
      raw;
    if (categoryCounts[normalized] !== undefined) categoryCounts[normalized]++;
  });

  console.log("Category counts:", categoryCounts);
  console.log(`Topics remaining in queue: ${remaining.length} / ${TOPIC_POOL.length}`);

  // Find underrepresented categories (within 2 of minimum)
  const minCount = Math.min(...ALLOWED_CATEGORIES.map((c) => categoryCounts[c]));
  const underrepresented = ALLOWED_CATEGORIES.filter((c) => categoryCounts[c] <= minCount + 2);

  // Prefer topics in underrepresented categories from remaining pool
  let prioritized = remaining.filter(({ category }) => underrepresented.includes(category));
  if (prioritized.length === 0) prioritized = remaining;

  // Pick the first (deterministic within the filtered set, but queue order means variety)
  const { topic, category: suggestedCategory } = prioritized[0];
  console.log(`Generating: "${topic}" [${suggestedCategory}]`);

  const today = new Date();
  const publishDate = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const prompt = `You are a professional content writer for Tri-Point Landscaping, a highly-rated local landscaping company based in Washington Township, Macomb County, Michigan. Phone: (586) 327-8080. Website: tripointlandscaping.com.

Write ONE detailed, genuinely helpful blog post on this topic: "${topic}"

WRITING GUIDELINES — follow these exactly:

TONE & QUALITY:
- Write like a knowledgeable local expert talking to a neighbor, not a corporate website
- Be specific and practical — give real advice people can actually use today
- Use exact details: specific temperatures, dates, measurements, product types
- Avoid vague filler like "it's important to..." — just say what to do and why
- Every paragraph should teach the reader something they didn't know

STRUCTURE:
- Start with a hook that immediately addresses the reader's problem or question
- Use ## headings to break up sections (3-5 sections minimum)
- Use **bold** for key terms, warnings, and important takeaways
- Use bullet lists for steps, checklists, and comparisons
- Include at least one specific Michigan/Macomb County detail per section (soil type, climate, local timing, etc.)
- End with a strong CTA section that naturally leads to contacting Tri-Point

LENGTH: 600-800 words of actual useful content (not padding)

SEO:
- Naturally include "Macomb County", "Washington Township", or "Michigan" throughout
- The title should include the location where it reads naturally
- Write for humans first, Google second

CALL TO ACTION (final section):
- Don't just say "contact us" — give a reason why NOW is the right time
- Reference the season or specific timing
- Link to [contact Tri-Point Landscaping](/contact) and mention [(586) 327-8080](tel:+15863278080)
- Mention that estimates are free

Return ONLY a valid JSON object (no markdown fencing, no explanation) with these exact fields:
{
  "slug": "url-friendly-slug",
  "title": "SEO Title Here",
  "description": "Meta description under 155 characters",
  "date": "${publishDate}",
  "category": "${suggestedCategory}",
  "readTime": "X min read",
  "content": "full article content here"
}

IMPORTANT: The category field MUST be exactly "${suggestedCategory}" — do not change it.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 2000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) throw new Error(`API error: ${response.status} ${await response.text()}`);

  const data = await response.json();
  const text = data.content[0].text.trim();

  let post;
  try {
    post = JSON.parse(text);
  } catch {
    const match = text.match(/\{[\s\S]*\}/);
    if (!match) throw new Error("Could not parse JSON from response");
    post = JSON.parse(match[0]);
  }

  if (!post.slug || !post.content) throw new Error("Invalid post returned from API");

  // Force correct date and category — never trust the model
  post.date = publishDate;
  post.category = suggestedCategory;

  // Hard reject duplicate slugs
  if (existingSlugs.has(post.slug)) {
    console.log(`⚠️ Duplicate slug "${post.slug}" — marking topic used and skipping.`);
    queue.usedTopics.push(topic);
    saveQueue(queue);
    process.exit(0);
  }

  const newEntry = `  {
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    description: "${post.description.replace(/"/g, '\\"')}",
    date: "${post.date}",
    category: "${post.category}",
    readTime: "${post.readTime}",
    content: \`
${post.content}
    \`,
  }`;

  // Normalize any trailing comma before ]; to avoid double-comma bugs
  const normalized = currentContent.replace(/,(\s*\];\s*)$/, "$1");
  const updated = normalized.replace(/\];\s*$/, `,\n${newEntry},\n];\n`);
  writeFileSync(POSTS_FILE, updated);

  // Mark topic as used in queue
  queue.usedTopics.push(topic);
  saveQueue(queue);

  console.log(`✅ Added: ${post.title} [${post.category}]`);
  console.log(`📋 Queue: ${queue.usedTopics.length} / ${TOPIC_POOL.length} topics used this cycle`);
}

generatePosts().catch((err) => {
  console.error("❌ Failed:", err.message);
  if (err.stack) console.error(err.stack);
  process.exit(1);
});
