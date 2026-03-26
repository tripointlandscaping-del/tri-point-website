// Google Indexing API — requests indexing for the latest blog post URL
import { readFileSync } from "fs";
import { createSign } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

function toBase64Url(buf) {
  return buf.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function getAccessToken(serviceAccountJson) {
  const key = JSON.parse(serviceAccountJson);
  // Normalize private key newlines — GitHub secrets can double-escape them
  key.private_key = key.private_key.replace(/\\n/g, "\n");

  const now = Math.floor(Date.now() / 1000);
  const header = toBase64Url(Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })));
  const payload = toBase64Url(Buffer.from(JSON.stringify({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  })));

  const sign = createSign("RSA-SHA256");
  sign.update(`${header}.${payload}`);
  const signature = toBase64Url(sign.sign(key.private_key));

  const assertion = `${header}.${payload}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth2%3Agrant-type%3Ajwt-bearer&assertion=${encodeURIComponent(assertion)}`,
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
