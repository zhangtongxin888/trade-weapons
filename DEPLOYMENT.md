# Non-browser deployment handoff

This repository builds a static site and does not require runtime secrets, databases, or server functions.

## Build contract

- Node.js: 22
- Install: `npm ci`
- Build: `npm run build`
- Output directory: `out`
- Production domain: `tradeweapons.wiki`

## Vercel

Import this repository as a Next.js project. Keep the build command as `npm run build`. The static export is generated in `out/`. Do not attach the production domain until the total controller grants browser/DNS access.

## Cloudflare Pages

Connect this repository, use `npm run build`, and set the output directory to `out`. Do not create DNS records or bind the production domain until the total controller grants browser/DNS access.

## Post-deploy checks

After deployment is authorized, verify the production domain, `www` redirect, HTTPS, all seven pages, `/robots.txt`, `/sitemap.xml`, canonicals, GSC ownership, and GSC Sitemap success before reporting completion.
