// Página dinâmica dos artigos do autoblog (engine My_Blog_Makes_Neil_Proud).
// As 7 páginas estáticas de artigos continuam em pastas próprias — o Next
// dá precedência à rota estática quando o slug coincide.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/blog/supabase-blog";
import MarkdownContent from "@/components/blog/MarkdownContent";
import { AUTOBLOG_PROFILE } from "@/lib/autoblog-profile";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCta } from "@/components/blog-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${AUTOBLOG_PROFILE.brand.name}`,
    description: article.meta_desc ?? undefined,
    alternates: {
      canonical: `${AUTOBLOG_PROFILE.brand.siteUrl}/blog/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.meta_desc ?? undefined,
      url: `${AUTOBLOG_PROFILE.brand.siteUrl}/blog/${params.slug}`,
      type: "article",
      images: article.cover_url
        ? [{ url: article.cover_url, width: 1536, height: 1024 }]
        : [],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const publishedDate = new Date(article.published_at).toISOString();
  const readableDate = new Date(article.published_at).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${AUTOBLOG_PROFILE.brand.siteUrl}/blog/${article.slug}#article`,
    headline: article.title,
    description: article.meta_desc,
    image: article.cover_url,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: { "@type": "Organization", name: AUTOBLOG_PROFILE.brand.name },
    publisher: {
      "@type": "Organization",
      name: AUTOBLOG_PROFILE.brand.name,
      url: AUTOBLOG_PROFILE.brand.siteUrl,
    },
    mainEntityOfPage: `${AUTOBLOG_PROFILE.brand.siteUrl}/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-3xl">
          <Link
            href="/blog"
            className="inline-block text-sm text-white/50 hover:text-white transition-colors mb-8"
          >
            ← Blog
          </Link>

          {/* <img> padrão, não next/image — evita configurar remotePatterns para Supabase Storage */}
          {article.cover_url && (
            <img
              src={article.cover_url}
              alt={article.title}
              className="w-full rounded-sm mb-8 object-cover max-h-[400px]"
            />
          )}

          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {article.keyword && (
                <span className="text-xs font-semibold uppercase tracking-widest text-green-400">
                  {article.keyword}
                </span>
              )}
              <span className="text-xs text-white/30">{readableDate}</span>
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {article.title}
            </h1>
            {article.meta_desc && (
              <p className="text-lg text-white/60 leading-relaxed">
                {article.meta_desc}
              </p>
            )}
          </header>

          <MarkdownContent content={article.content} />

          <div className="mt-14">
            <BlogCta />
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
