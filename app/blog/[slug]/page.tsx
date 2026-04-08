import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://www.tripointlandscaping.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.tripointlandscaping.com/blog/${post.slug}`,
      siteName: "Tri-Point Landscaping",
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    },
  };
}

// Simple markdown-ish renderer for the content
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { elements.push(<div key={key++} className="h-3" />); continue; }
    if (trimmed.startsWith("## ")) {
      elements.push(<h2 key={key++} style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(<p key={key++} className="font-bold text-gray-900 mt-4">{trimmed.slice(2, -2)}</p>);
    } else if (trimmed.startsWith("- ")) {
      elements.push(<li key={key++} className="text-gray-600 leading-relaxed ml-4 list-disc">{trimmed.slice(2)}</li>);
    } else {
      // Handle inline links and bold
      const parts = trimmed.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*)/g);
      const rendered = parts.map((part, i) => {
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) return <Link key={i} href={linkMatch[2]} className="text-green-700 underline hover:text-green-600">{linkMatch[1]}</Link>;
        const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
        if (boldMatch) return <strong key={i}>{boldMatch[1]}</strong>;
        return part;
      });
      elements.push(<p key={key++} className="text-gray-600 leading-relaxed">{rendered}</p>);
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Tri-Point Landscaping LLC" },
            publisher: { "@type": "Organization", name: "Tri-Point Landscaping LLC", url: "https://www.tripointlandscaping.com" },
            url: `https://www.tripointlandscaping.com/blog/${post.slug}`,
          }),
        }}
      />
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Back */}
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors mb-10">
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1" style={{ backgroundColor: "#f0f7f0", color: "#2C5F2E" }}>
              {post.category}
            </span>
            <span className="text-gray-400 text-xs">{post.readTime}</span>
            <span className="text-gray-400 text-xs">{post.date}</span>
          </div>
          <h1
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            {post.title}
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed border-l-4 pl-4" style={{ borderColor: "#2C5F2E" }}>
            {post.description}
          </p>
        </div>

        <div className="border-t border-gray-100 pt-10 space-y-2">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 text-center" style={{ backgroundColor: "#2C5F2E" }}>
          <p style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} className="text-xl font-bold text-white mb-2">
            Ready to get started?
          </p>
          <p className="text-white/70 text-sm mb-6">Free estimates for all services in Macomb County.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 py-3 font-bold text-sm hover:bg-green-50 transition-colors">
              Get a Free Estimate →
            </Link>
            <a href="tel:+15863278080" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-6 py-3 font-semibold text-sm hover:bg-white/10 transition-colors">
              Call (586) 327-8080
            </a>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-gray-900 mb-6">More Tips</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group border border-gray-100 hover:border-green-200 p-6 hover:shadow-md transition-all">
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#2C5F2E" }}>{p.category}</span>
                  <h4 className="text-base font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#2C5F2E] transition-colors leading-snug">{p.title}</h4>
                  <span className="text-xs text-gray-400">{p.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <Footer />
    </>
  );
}
