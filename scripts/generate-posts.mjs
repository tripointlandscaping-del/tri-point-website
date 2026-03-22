import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_FILE = join(__dirname, "../app/blog/posts.ts");

const TOPIC_POOL = [
  "How to fix bare spots in your lawn in Michigan",
  "The best fertilizer schedule for Macomb County lawns",
  "Why your grass turns yellow and how to fix it",
  "How to get rid of dandelions without killing your lawn",
  "Lawn striping: how to get those professional mowing patterns",
  "How to choose the right grass seed for Michigan",
  "When to plant flowers in Macomb County Michigan",
  "How to fix lawn damage caused by snow plowing",
  "Grub control in Michigan: signs, timing, and treatment",
  "How to edge a lawn like a professional",
  "Irrigation tips for Michigan homeowners",
  "How to revive a neglected lawn in Macomb County",
  "Tree trimming vs tree removal: what you need to know",
  "How to attract pollinators to your Michigan landscape",
  "The best shrubs for Michigan winters",
  "How to install landscape edging in Michigan",
  "Why fall is the best time for landscaping projects",
  "How to deal with lawn fungus in Michigan",
  "Hydroseeding vs traditional overseeding in Michigan",
  "How to keep your lawn green during a Michigan drought",
  "The difference between topsoil, compost, and mulch",
  "How to price landscaping services: what to expect in Macomb County",
  "Tips for maintaining a lawn near trees in Michigan",
  "How to remove moss from your lawn in Michigan",
  "Winter landscaping ideas for Michigan homes",
  "How to plant a new lawn from scratch in Macomb County",
  "The best time to trim hedges in Michigan",
  "How to prevent ice dams on your property",
  "Lawn renovation vs lawn replacement: which do you need",
  "How to find a trustworthy landscaping company in Macomb County",
];

async function generatePosts() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not set");

  // Read current posts file to extract existing slugs and pick new topics
  const currentContent = readFileSync(POSTS_FILE, "utf8");
  const existingSlugs = [...currentContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);

  // Pick 2 topics not yet used (based on slug similarity)
  const usedTopics = new Set(existingSlugs.map((s) => s.replace(/-/g, " ")));
  const available = TOPIC_POOL.filter(
    (t) => !existingSlugs.some((s) => s.includes(t.toLowerCase().split(" ").slice(0, 3).join("-")))
  );

  if (available.length < 2) {
    console.log("Topic pool running low — using first 2 available");
  }

  const topics = available.slice(0, 2);
  console.log("Generating posts for topics:", topics);

  // Get today's date as publish date
  const today = new Date();
  const publishDate = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const prompt = `Write 2 detailed, helpful blog posts for Tri-Point Landscaping, a local landscaping company in Washington Township, Macomb County, Michigan. Phone: (586) 327-8080.

Topics:
1. ${topics[0]}
2. ${topics[1]}

For EACH post return a JSON object with these exact fields:
- slug: URL-friendly slug (lowercase, hyphens)
- title: SEO-optimized title including location when natural
- description: 1-2 sentence meta description (under 160 chars)
- date: "${publishDate}"
- category: one of "Lawn Care", "Landscaping", "Snow & Ice", "Seasonal"
- readTime: "X min read"
- content: Full article 500-700 words using ## for headings, **bold text** for emphasis, - for bullet points. Mention Macomb County, Washington Township, or Michigan naturally throughout. End with a CTA paragraph mentioning [contact Tri-Point](/contact) or [(586) 327-8080](tel:+15863278080).

Return ONLY a valid JSON array with 2 objects, no markdown fencing, no explanation.`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!response.ok) throw new Error(`API error: ${response.status} ${await response.text()}`);

  const data = await response.json();
  const text = data.content[0].text.trim();

  let newPosts;
  try {
    newPosts = JSON.parse(text);
  } catch {
    // Try to extract JSON array from response
    const match = text.match(/\[[\s\S]*\]/);
    if (!match) throw new Error("Could not parse JSON from response");
    newPosts = JSON.parse(match[0]);
  }

  if (!Array.isArray(newPosts) || newPosts.length === 0) {
    throw new Error("No posts returned from API");
  }

  // Build TypeScript entries to append
  const newEntries = newPosts.map((post) => `  {
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    description: "${post.description.replace(/"/g, '\\"')}",
    date: "${post.date}",
    category: "${post.category}",
    readTime: "${post.readTime}",
    content: \`
${post.content}
    \`,
  }`).join(",\n");

  // Insert before the closing `];`
  const updated = currentContent.replace(/\];\s*$/, `,\n${newEntries},\n];\n`);
  writeFileSync(POSTS_FILE, updated);

  console.log(`✅ Added ${newPosts.length} new posts:`);
  newPosts.forEach((p) => console.log(`  - ${p.title}`));
}

generatePosts().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
