// Google Indexing API — requests indexing for the latest blog post URL
import { readFileSync } from "fs";
import { createSign } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function getAccessToken(serviceAccountJson) {
  const key = JSON.parse(serviceAccountJson);
  const now = Math.floor(Date.now() / 1000);

  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const payload = Buffer.from(JSON.stringify({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  })).toString("base64url");

  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = sign.sign(key.private_key, "base64url");

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth2:grant-type:jwt-bearer",
      assertion: `${header}.${payload}.${signature}`,
    }),
  });

  const data = await res.json();
  if (!data.access_token) throw new Error(`Token error: ${JSON.stringify(data)}`);
  return data.access_token;
}

async function requestIndexing() {
  const serviceAccountJson = process.env.GOOGLE_INDEXING_KEY;
  if (!serviceAccountJson) {
    console.log("GOOGLE_INDEXING_KEY not set — skipping indexing request");
    return;
  }

  const postsContent = readFileSync(join(__dirname, "../app/blog/posts.ts"), "utf8");
  const slugs = [...postsContent.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => m[1]);
  const latestSlug = slugs[slugs.length - 1];

  if (!latestSlug) throw new Error("Could not find latest post slug");

  const url = `https://tripointlandscaping.com/blog/${latestSlug}`;
  console.log(`Requesting indexing for: ${url}`);

  const token = await getAccessToken(serviceAccountJson);

  const res = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url, type: "URL_UPDATED" }),
  });

  const data = await res.json();
  if (res.ok) {
    console.log(`✅ Indexing requested for ${url}`);
  } else {
    console.error("❌ Indexing API error:", JSON.stringify(data));
    process.exit(1);
  }
}

requestIndexing().catch((err) => {
  console.error("❌ Failed:", err.message);
  process.exit(1);
});
