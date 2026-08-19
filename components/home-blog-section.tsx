// Seção de blog da home. Server component: lê os artigos do autoblog no
// Supabase; se não houver artigo (ou o banco estiver fora), não renderiza nada.
import Link from "next/link";
import { getAllArticles } from "@/lib/blog/supabase-blog";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function HomeBlogSection() {
  let articles: Awaited<ReturnType<typeof getAllArticles>> = [];
  try {
    articles = await getAllArticles();
  } catch {
    return null;
  }

  const latest = articles.slice(0, 3);
  if (latest.length === 0) return null;

  return (
    <section className="bg-[#0a0a0a] py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-medium text-white/50 tracking-widest uppercase mb-3">
              Blog
            </p>
            <h2
              className="text-3xl md:text-4xl font-medium text-white leading-tight"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              Economia de energia elétrica
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-green-400 hover:text-green-300 transition-colors"
          >
            Ver todos os artigos →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block p-6 border border-white/10 rounded-sm hover:border-white/25 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                {article.keyword && (
                  <span className="text-xs font-semibold uppercase tracking-widest text-green-400 line-clamp-1">
                    {article.keyword}
                  </span>
                )}
              </div>
              <h3
                className="text-lg font-medium mb-2 text-white group-hover:text-green-400 transition-colors leading-snug line-clamp-3"
                style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              >
                {article.title}
              </h3>
              {article.meta_desc && (
                <p className="text-sm text-white/55 leading-relaxed line-clamp-3">
                  {article.meta_desc}
                </p>
              )}
              <p className="text-xs text-white/30 mt-3">
                {formatDate(article.published_at)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
