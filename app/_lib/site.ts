import type { Metadata } from "next";

export const SITE_URL = "https://tradeweapons.wiki";
export const ROBLOX_URL = "https://www.roblox.com/games/124993558819856/Trade-Weapons";

export const navigation = [
  { href: "/beginner-guide/", label: "Beginner Guide" },
  { href: "/core-loop/", label: "Core Loop" },
  { href: "/progression/", label: "Progression" },
  { href: "/mistakes/", label: "Mistakes" },
  { href: "/faq/", label: "FAQ" },
  { href: "/sources/", label: "Sources" },
];

export const verifiedFacts = [
  {
    id: "fact-001",
    label: "Official experience",
    value: "Trade Weapons",
    source: "Roblox game API",
  },
  {
    id: "fact-002",
    label: "Creator group",
    value: "Jew Trade & Clothing LLC",
    source: "Roblox game API",
  },
  {
    id: "fact-003",
    label: "Root place ID",
    value: "124993558819856",
    source: "Roblox game API",
  },
  {
    id: "fact-004",
    label: "Universe ID",
    value: "10625493331",
    source: "Roblox universe API",
  },
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      images: [],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [],
    },
  };
}
