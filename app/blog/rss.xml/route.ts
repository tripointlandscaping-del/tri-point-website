import { posts } from "../posts";

export async function GET() {
  const BASE = "https://www.tripointlandscaping.com";

  const publishedPosts = posts
    .filter((p) => new Date(p.date) <= new Date())
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 20);

  const items = publishedPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Tri-Point Landscaping Blog</title>
    <link>${BASE}/blog</link>
    <description>Expert lawn care tips, seasonal advice, and landscaping guides for Macomb County homeowners.</description>
    <language>en-us</language>
    <atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
