import { MetadataRoute } from "next";
import { distribuidoras } from "@/lib/distribuidoras";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = [
    "icms-conta-de-energia",
    "bandeira-tarifaria",
    "enquadramento-tarifario",
    "energia-solar-assinatura",
    "reduzir-conta-energia-empresa",
    "cobrancas-indevidas-energia",
  ];

  return [
    {
      url: "https://auditoria.coesasolar.com.br",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://auditoria.coesasolar.com.br/como-verificar-conta-de-energia",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://auditoria.coesasolar.com.br/blog",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogSlugs.map((slug) => ({
      url: `https://auditoria.coesasolar.com.br/blog/${slug}`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: "https://auditoria.coesasolar.com.br/distribuidoras",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...distribuidoras.map((d) => ({
      url: `https://auditoria.coesasolar.com.br/distribuidoras/${d.slug}`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    {
      url: "https://auditoria.coesasolar.com.br/privacidade",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://auditoria.coesasolar.com.br/termos",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
