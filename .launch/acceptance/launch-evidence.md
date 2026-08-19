# Trade Weapons launch evidence

Checked at: `2026-08-19T14:26:20Z`

Current status: the non-browser implementation phase is complete. Browser review, deployment, domain configuration, and Google Search Console work are intentionally pending until the controller grants the site-specific lock.

| Acceptance item | Status | Evidence |
| --- | --- | --- |
| Independent repository | Pass | `https://github.com/zhangtongxin888/trade-weapons` |
| Source commit pushed | Pass | `5c5e6879177b9ca30dd795a5c45c394cf5b7b7f0` on `main` |
| Research fact gate | Pass | `.launch/research/research-approved.json`; all approved URLs rechecked through the required system proxy in `.launch/research/source-verification.json` |
| External handoff validator | Pass | Validator completed successfully against the research approval and Sites design package |
| Lint, build, and output tests | Pass | `npm run check`; Next.js static export succeeded and 5/5 tests passed |
| Production dependency audit | Pass | `npm audit --omit=dev --registry=https://registry.npmjs.org`; 0 vulnerabilities |
| Key pages | Local pass; production pending | Static output contains `/`, `/beginner-guide/`, `/core-loop/`, `/progression/`, `/mistakes/`, `/faq/`, and `/sources/` |
| Primary hero CTA | Pass | Largest hero action links to `/beginner-guide/#quick-start` |
| SEO metadata | Local pass; production pending | Unique page titles/descriptions/canonicals, JSON-LD, Open Graph metadata, and favicon are present in the static output |
| `robots.txt` | Local pass; production pending | Generated at `out/robots.txt` |
| `sitemap.xml` | Local pass; production pending | Generated at `out/sitemap.xml` with 7 URLs |
| Browser review at 375/768/1440 | Pending controller lock | No browser was opened; `.launch/acceptance/design-review-pending.json` remains unapproved |
| Deployment ID and status | Pending controller lock | No Cloudflare or Vercel deployment was created |
| `https://tradeweapons.wiki` | Pending controller lock | DNS and production HTTPS were not touched |
| `www` redirect | Pending controller lock | DNS and redirect configuration were not touched |
| Production canonical and HTTP checks | Pending deployment | Must be checked against the deployed domain |
| GSC ownership | Pending controller lock | Google Search Console was not opened or changed |
| GSC Sitemap status | Pending controller lock | Sitemap was not submitted |

## Provider record

- Research: Grok wrapper was invoked twice, but neither response produced the required structured research package. Codex performed the fallback research and source-by-source approval.
- Candidate design: Kimi K3 wrapper was invoked twice in a disposable directory without `.git` or a remote, but its CLI rejected the non-interactive prompt mode. Sites produced the fallback candidate in a separate disposable directory; Codex independently reviewed and rewrote the formal implementation.
- Formal implementation, verification, repository commit, and push: Codex.

No provider or sub-agent received repository credentials or access to Chrome, DNS, GSC, Cloudflare, Vercel, or deployment credentials.
