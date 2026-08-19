import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const out = new URL("../out/", import.meta.url);

async function output(path) {
  return readFile(new URL(path, out), "utf8");
}

const pages = [
  ["index.html", "Trade Weapons Guide", "https://tradeweapons.wiki/"],
  ["beginner-guide/index.html", "Trade Weapons Beginner Guide", "https://tradeweapons.wiki/beginner-guide/"],
  ["core-loop/index.html", "Trade Weapons Core Gameplay Loop", "https://tradeweapons.wiki/core-loop/"],
  ["progression/index.html", "Trade Weapons Progression Guide", "https://tradeweapons.wiki/progression/"],
  ["mistakes/index.html", "Trade Weapons Common Mistakes", "https://tradeweapons.wiki/mistakes/"],
  ["faq/index.html", "Trade Weapons FAQ", "https://tradeweapons.wiki/faq/"],
  ["sources/index.html", "Trade Weapons Sources", "https://tradeweapons.wiki/sources/"],
];

test("exports all seven canonical pages with unique metadata", async () => {
  for (const [file, title, canonical] of pages) {
    const html = await output(file);
    assert.match(html, new RegExp(`<title>[^<]*${title}`, "i"), file);
    assert.match(html, new RegExp(`rel="canonical"[^>]+${canonical.replaceAll("/", "\\/")}`, "i"), file);
    assert.match(html, /<meta name="description" content="[^"]{40,}"/i, file);
    assert.match(html, /class="skip-link"/i, file);
    assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i, file);
  }
});

test("keeps the largest homepage action inside the beginner guide", async () => {
  const html = await output("index.html");
  assert.match(html, /class="button button-primary" href="\/beginner-guide\/#quick-start"/i);
  assert.doesNotMatch(html, /class="button button-primary" href="https:\/\/www\.roblox\.com/i);
  assert.match(html, /Core gameplay loop/i);
  assert.match(html, /Common mistakes/i);
  assert.match(html, /Source transparency/i);
  assert.match(html, /property="og:image" content="https:\/\/tradeweapons\.wiki\/og\.png"/i);
});

test("publishes verified FAQ schema and clears the shared image on detail routes", async () => {
  const faq = await output("faq/index.html");
  assert.match(faq, /"@type":"FAQPage"/);
  assert.match(faq, /Are there verified Trade Weapons codes/);

  for (const [file] of pages.slice(1)) {
    const html = await output(file);
    assert.doesNotMatch(html, /property="og:image"[^>]+og\.png/i, file);
  }
});

test("exports robots, sitemap, social card, and every linked internal route", async () => {
  const [robots, sitemap] = await Promise.all([output("robots.txt"), output("sitemap.xml")]);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/tradeweapons\.wiki\/sitemap\.xml/);
  assert.equal((sitemap.match(/<url>/g) ?? []).length, 7);
  for (const [, , canonical] of pages) assert.match(sitemap, new RegExp(canonical.replaceAll("/", "\\/")));
  await access(new URL("og.png", out));
  await access(new URL("favicon.png", out));

  const allHtml = await Promise.all(pages.map(([file]) => output(file)));
  const paths = new Set(
    allHtml.flatMap((html) => [...html.matchAll(/href="(\/[^"]*)"/g)].map((match) => match[1].split("#")[0])),
  );
  for (const path of paths) {
    if (!path || path === "/" || path.startsWith("/_next/") || /\.[a-z0-9]+$/i.test(path)) continue;
    await access(new URL(`${path.replace(/^\//, "")}index.html`, out));
  }
});

test("defines responsive and keyboard-accessible behavior for 375, 768, and 1440 widths", async () => {
  const [css, chrome] = await Promise.all([
    readFile(new URL("app/globals.css", root), "utf8"),
    readFile(new URL("app/_components/SiteChrome.tsx", root), "utf8"),
  ]);
  assert.match(css, /width:\s*min\(100% - 2rem, 1180px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 640px\)/);
  assert.match(css, /\.mobile-menu\s*\{\s*display:\s*block/);
  assert.match(css, /a:focus-visible\s*\{/);
  assert.match(css, /min-width:\s*320px/);
  assert.match(chrome, /aria-label="Primary navigation"/);
  assert.match(chrome, /<details className="mobile-menu">/);
  assert.match(chrome, /className="skip-link"/);
});
