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
  "The benefits of mulching your lawn clippings in Michigan",
  "How to maintain a healthy lawn on a budget in Macomb County",
  "What to do when your lawn care company lets you down",
  "Spring landscaping checklist for Macomb County homeowners",
  "How to create curb appeal with landscaping in Michigan",
  "Landscaping mistakes Michigan homeowners make every year",
  "How to get rid of weeds in garden beds without chemicals",
  "What does a landscaping contract include in Macomb County",
  "How to winterize your irrigation system in Michigan",
  "The best time to plant trees and shrubs in Macomb County",
];

async function generatePosts() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error("ANTHROPIC_API_KEY not set");

  const currentContent = readFileSync(POSTS_FILE, "utf8");
  const existingSlugs = [...currentContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);

  const available = TOPIC_POOL.filter(
    (t) => !existingSlugs.some((s) => s.includes(t.toLowerCase().split(" ").slice(0, 3).join("-")))
  );

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
  "category": "Lawn Care|Landscaping|Snow & Ice|Seasonal",
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

  const updated = currentContent.replace(/\];\s*$/, `,\n${newEntry},\n];\n`);
  writeFileSync(POSTS_FILE, updated);

  console.log(`✅ Added: ${post.title}`);
}

generatePosts().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
