// Posts the latest blog entry to Facebook (and Instagram via Facebook)
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function getLatestPost() {
  const content = readFileSync(join(__dirname, "../app/blog/posts.ts"), "utf8");
  const slugs = [...content.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const titles = [...content.matchAll(/title:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const descriptions = [...content.matchAll(/description:\s*["']([^"']+)["']/g)].map((m) => m[1]);

  return {
    slug: slugs[slugs.length - 1],
    title: titles[titles.length - 1],
    description: descriptions[descriptions.length - 1],
  };
}

async function getPageAccessToken(userToken, pageId) {
  // Exchange user token for page-specific access token
  const res = await fetch(`https://graph.facebook.com/v19.0/${pageId}?fields=access_token&access_token=${userToken}`);
  const data = await res.json();
  if (data.access_token) {
    console.log("✅ Got page access token");
    return data.access_token;
  }
  console.log("⚠️ Could not get page token, using stored token");
  return userToken;
}

async function postToFacebook(post) {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const userToken = process.env.FACEBOOK_ACCESS_TOKEN;

  if (!pageId || !userToken) {
    console.log("Facebook credentials not set — skipping Facebook post");
    return;
  }

  const pageToken = await getPageAccessToken(userToken, pageId);
  const postUrl = `https://tripointlandscaping.com/blog/${post.slug}`;
  const message = `New on the Tri-Point Blog:\n\n📖 ${post.title}\n\n${post.description}\n\nRead the full article → ${postUrl}\n\n#MacombCounty #WashingtonTownship #Landscaping #LawnCare #Michigan #TriPointLandscaping`;

  console.log(`Posting to Facebook: ${post.title}`);

  const res = await fetch(`https://graph.facebook.com/v19.0/${pageId}/feed`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, link: postUrl, access_token: pageToken }),
  });

  const data = await res.json();
  if (res.ok && data.id) {
    console.log(`✅ Posted to Facebook (post ID: ${data.id})`);
  } else {
    console.error("❌ Facebook API error:", JSON.stringify(data));
  }
}

async function postToInstagram(post) {
  const igAccountId = process.env.INSTAGRAM_ACCOUNT_ID;
  const accessToken = process.env.FACEBOOK_ACCESS_TOKEN; // Same token works for IG Business

  if (!igAccountId || !accessToken) {
    console.log("Instagram credentials not set — skipping Instagram post");
    return;
  }

  const postUrl = `https://tripointlandscaping.com/blog/${post.slug}`;
  // Instagram requires an image URL for feed posts — use the OG image
  const imageUrl = `https://tripointlandscaping.com/og-image.jpg`;
  const caption = `📖 ${post.title}\n\n${post.description}\n\nLink in bio → tripointlandscaping.com/blog\n\n#MacombCounty #WashingtonTownship #Landscaping #LawnCare #Michigan #TriPointLandscaping`;

  console.log(`Posting to Instagram: ${post.title}`);

  // Step 1: Create media container
  const containerRes = await fetch(`https://graph.facebook.com/v19.0/${igAccountId}/media`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image_url: imageUrl, caption, access_token: accessToken }),
  });
  const container = await containerRes.json();

  if (!container.id) {
    console.error("❌ Instagram container error:", JSON.stringify(container));
    return;
  }

  // Step 2: Publish
  const publishRes = await fetch(`https://graph.facebook.com/v19.0/${igAccountId}/media_publish`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ creation_id: container.id, access_token: accessToken }),
  });
  const published = await publishRes.json();

  if (published.id) {
    console.log(`✅ Posted to Instagram (post ID: ${published.id})`);
  } else {
    console.error("❌ Instagram publish error:", JSON.stringify(published));
  }
}

async function main() {
  const post = getLatestPost();
  if (!post.slug) {
    console.error("❌ Could not find latest post");
    process.exit(1);
  }
  console.log(`Latest post: ${post.title}`);

  await postToFacebook(post);
  await postToInstagram(post);
}

main().catch((err) => {
  console.error("❌ Failed:", err.message);
  // Exit 0 — social failures should not break deployment
  process.exit(0);
});
