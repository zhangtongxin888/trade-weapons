# Trade Weapons launch evidence

Checked at: `2026-08-19T14:26:20Z`

Current status: the non-browser implementation phase is complete. Browser review, deployment, domain configuration, and Google Search Console work are intentionally pending until the controller grants the site-specific lock.

| Acceptance item | Production URL or resource | Checked at | Actual result | Evidence |
| --- | --- | --- | --- | --- |
| Independent repository | `https://github.com/zhangtongxin888/trade-weapons` | `2026-08-19T14:26:20Z` | Pass | Formal source exists only in the dedicated repository |
| Source commit pushed | `main` at `https://github.com/zhangtongxin888/trade-weapons` | `2026-08-19T14:26:20Z` | Pass | Source commit `5c5e6879177b9ca30dd795a5c45c394cf5b7b7f0` was pushed before this evidence-only commit |
| Research fact gate | `.launch/research/research-approved.json` | `2026-08-19T14:26:20Z` | Pass | All approved URLs were rechecked through the required system proxy in `.launch/research/source-verification.json` |
| External handoff validator | Research approval and Sites design package | `2026-08-19T14:26:20Z` | Pass | `validate_handoffs.mjs` completed successfully |
| Lint, build, and output tests | Formal repository working tree | `2026-08-19T14:26:20Z` | Pass | `npm run check`; static export succeeded and 5/5 tests passed |
| Production dependency audit | `package-lock.json` | `2026-08-19T14:26:20Z` | Pass | `npm audit --omit=dev --registry=https://registry.npmjs.org`; 0 vulnerabilities |
| Key pages | `https://tradeweapons.wiki/` and six guide routes | `2026-08-19T14:26:20Z` | Local pass; production pending | Static output contains `/`, `/beginner-guide/`, `/core-loop/`, `/progression/`, `/mistakes/`, `/faq/`, and `/sources/` |
| Primary hero CTA | `https://tradeweapons.wiki/` | `2026-08-19T14:26:20Z` | Pass in static output | Largest hero action links to `/beginner-guide/#quick-start` |
| SEO metadata | Seven planned production page URLs | `2026-08-19T14:26:20Z` | Local pass; production pending | Unique titles, descriptions, canonicals, JSON-LD, Open Graph metadata, and favicon are present in the static output |
| `robots.txt` | `https://tradeweapons.wiki/robots.txt` | `2026-08-19T14:26:20Z` | Local pass; production pending | Generated at `out/robots.txt` |
| `sitemap.xml` | `https://tradeweapons.wiki/sitemap.xml` | `2026-08-19T14:26:20Z` | Local pass; production pending | Generated at `out/sitemap.xml` with 7 URLs |
| Browser review at 375/768/1440 | Local production build | `2026-08-19T14:26:20Z` | Pending controller lock | No browser was opened; `.launch/acceptance/design-review-pending.json` remains unapproved |
| Deployment ID and status | Cloudflare Pages or Vercel project | `2026-08-19T14:26:20Z` | Pending controller lock | No deployment was created |
| Main-domain HTTPS | `https://tradeweapons.wiki` | `2026-08-19T14:26:20Z` | Pending controller lock | DNS and production HTTPS were not touched |
| `www` redirect | `https://www.tradeweapons.wiki` | `2026-08-19T14:26:20Z` | Pending controller lock | DNS and redirect configuration were not touched |
| Production canonical and HTTP checks | Seven production page URLs | `2026-08-19T14:26:20Z` | Pending deployment | Must be checked against the deployed domain |
| GSC ownership | `sc-domain:tradeweapons.wiki` | `2026-08-19T14:26:20Z` | Pending controller lock | Google Search Console was not opened or changed |
| GSC Sitemap status | `https://tradeweapons.wiki/sitemap.xml` | `2026-08-19T14:26:20Z` | Pending controller lock | Sitemap was not submitted |

## Provider record

- Research: Grok wrapper was invoked twice, but neither response produced the required structured research package. Codex performed the fallback research and source-by-source approval.
- Candidate design: Kimi K3 wrapper was invoked twice in a disposable directory without `.git` or a remote, but its CLI rejected the non-interactive prompt mode. Sites produced the fallback candidate in a separate disposable directory; Codex independently reviewed and rewrote the formal implementation.
- Formal implementation, verification, repository commit, and push: Codex.

No provider or sub-agent received repository credentials or access to Chrome, DNS, GSC, Cloudflare, Vercel, or deployment credentials.
