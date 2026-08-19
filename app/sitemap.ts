import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  "",
  "/beginner-guide/",
  "/core-loop/",
  "/progression/",
  "/mistakes/",
  "/faq/",
  "/sources/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://tradeweapons.wiki${route || "/"}`,
    lastModified: new Date("2026-08-19T00:00:00.000Z"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.7,
  }));
}
