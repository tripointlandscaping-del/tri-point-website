import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_FILE = join(__dirname, "../app/blog/posts.ts");

// Topics organized by service category so posts rotate across all services
const TOPIC_POOL = [
  // ── LAWN CARE ──
  "Why your grass turns yellow and how to fix it in Michigan",
  "How to get rid of dandelions without killing your lawn in Macomb County",
  "Lawn striping: how to get those professional mowing patterns",
  "How to choose the right grass seed for Michigan",
  "Grub control in Michigan: signs, timing, and treatment",
  "How to edge a lawn like a professional",
  "Irrigation tips for Michigan homeowners",
  "How to revive a neglected lawn in Macomb County",
  "How to deal with lawn fungus in Michigan",
  "Hydroseeding vs traditional overseeding in Michigan",
  "How to keep your lawn green during a Michigan drought",
  "Tips for maintaining a lawn near trees in Michigan",
  "How to remove moss from your lawn in Michigan",
  "How to maintain a healthy lawn on a budget in Macomb County",
  "How to get rid of weeds in garden beds without chemicals",
  "What is the right mowing height for Michigan grass",
  "How to water your lawn correctly in Macomb County",
  "Why your lawn has stripes or uneven color after mowing",

  // ── LANDSCAPING ──
  "How to create curb appeal with landscaping in Michigan",
  "The best plants for a low-maintenance Michigan landscape",
  "How to attract pollinators to your Michigan landscape",
  "The best shrubs for Michigan winters",
  "How to install landscape edging in Michigan",
  "Why fall is the best time for landscaping projects in Macomb County",
  "How to plant trees and shrubs in Macomb County",
  "Landscaping mistakes Michigan homeowners make every year",
  "How to design a front yard landscape in Washington Township",
  "The best flowering plants for Macomb County landscapes",
  "How to add privacy to your yard with landscaping in Michigan",
  "Native plants for Michigan landscaping: what to choose",
  "How to landscape around a pool in Macomb County",

  // ── MULCH & STONE ──
  "The difference between topsoil, compost, and mulch",
  "How much mulch do you need: a guide for Macomb County homeowners",
  "Mulch vs decorative stone: which is better for Michigan landscapes",
  "How often should you replace mulch in Michigan",
  "The best mulch colors for homes in Macomb County",
  "How to prevent weeds in mulch beds in Michigan",
  "River rock vs lava rock: which is better for Michigan landscaping",

  // ── SEASONAL CLEANUP ──
  "Spring landscaping checklist for Macomb County homeowners",
  "When to plant flowers in Macomb County Michigan",
  "How to prepare garden beds for spring in Michigan",
  "Fall cleanup checklist for Macomb County homeowners",
  "How to clean up leaves without damaging your lawn in Michigan",
  "When to cut back perennials in Michigan",
  "How to prepare your yard for winter in Macomb County",
  "Why spring cleanup matters for your lawn and landscape",

  // ── SNOW & ICE ──
  "How to fix lawn damage caused by snow plowing in Michigan",
  "How to prevent ice dams on your property",
  "Rock salt vs calcium chloride: what to use on Michigan driveways",
  "How to protect your landscaping from snow plow damage",
  "When to hire a snow removal company vs doing it yourself",
  "How to prepare your driveway for winter in Macomb County",
  "Commercial snow removal: what to expect from a contractor",
  "How salt damage affects your lawn and how to fix it in spring",

  // ── LAWN RENOVATIONS ──
  "Lawn renovation vs lawn replacement: which do you need",
  "How to aerate your lawn in Michigan: timing and technique",
  "What is dethatching and when should you do it in Macomb County",
  "Top dressing a lawn: how and when to do it in Michigan",
  "How long does it take to grow a new lawn from seed in Michigan",
  "Core aeration vs liquid aeration: which is better for Michigan soil",

  // ── COMMERCIAL ──
  "What to look for in a commercial landscaping contract in Michigan",
  "How commercial snow removal contracts work in Macomb County",
  "Why consistent landscaping matters for commercial properties",
  "How to find a reliable commercial lawn care company in Macomb County",
  "HOA landscaping requirements: what property managers need to know",
];

async function generatePosts() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not set");

  const currentContent = readFileSync(POSTS_FILE, "utf8");
  const existingTitles = [...currentContent.matchAll(/title:\s*["']([^"']+)["']/g)].map((m) => m[1].toLowerCase());

  const available = TOPIC_POOL.filter((topic) => {
    const keywords = topic.toLowerCase().split(" ").filter((w) => w.length > 4);
    return !existingTitles.some((title) => keywords.filter((w) => title.includes(w)).length >= 3);
  });

  const topics = available.slice(0, 1); // 1 topic per run (runs twice a week = 2 posts/week)
  console.log("Generating post for topic:", topics[0]);

  const today = new Date();
  const publishDate = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const prompt = `You are a professional content writer for Tri-Point Landscaping, a highly-rated local landscaping company based in Washington Township, Macomb County, Michigan. Phone: (586) 327-8080. Website: tripointlandscaping.com.

Write ONE detailed, genuinely helpful blog post on this topic: "${topics[0]}"

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
  "category": "Lawn Care|Landscaping|Mulch & Stone|Seasonal|Snow & Ice|Lawn Renovations|Commercial",
  "readTime": "X min read",
  "content": "full article content here"
}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
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

  console.log(`✅ Added: ${post.title}`);
}

generatePosts().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
