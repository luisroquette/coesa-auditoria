import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
