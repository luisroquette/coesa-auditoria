import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://auditoria.coesasolar.com.br",
      lastModified: new Date("2026-06-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
