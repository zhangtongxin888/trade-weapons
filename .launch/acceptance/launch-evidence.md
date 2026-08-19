# Trade Weapons launch evidence

Checked at: `2026-08-19T14:50:26Z`

Current status: responsive browser review and the Vercel production deployment are complete. Formal-domain cutover is blocked because `tradeweapons.wiki` is not present in the currently signed-in Spaceship account, so no DNS change can be made safely. The formal domain, HTTPS, online canonical checks, GSC ownership, and GSC Sitemap submission are not complete.

| Acceptance item | Production URL or resource | Checked at | Actual result | Evidence |
| --- | --- | --- | --- | --- |
| Independent repository | `https://github.com/zhangtongxin888/trade-weapons` | `2026-08-19T14:26:20Z` | Pass | Formal source exists only in the dedicated repository |
| Source commit pushed | `main` at `https://github.com/zhangtongxin888/trade-weapons` | `2026-08-19T14:39:39Z` | Pass | Site source plus visual-approval evidence commit `20b15d0a839cf5f798f800dac87ab8835a78c799` was pushed before this evidence update |
| Research fact gate | `.launch/research/research-approved.json` | `2026-08-19T14:26:20Z` | Pass | All approved URLs were rechecked through the required system proxy in `.launch/research/source-verification.json` |
| External handoff validator | Research approval and Sites design package | `2026-08-19T14:26:20Z` | Pass | `validate_handoffs.mjs` completed successfully |
| Lint, build, and output tests | Formal repository working tree | `2026-08-19T14:26:20Z` | Pass | `npm run check`; static export succeeded and 5/5 tests passed |
| Production dependency audit | `package-lock.json` | `2026-08-19T14:26:20Z` | Pass | `npm audit --omit=dev --registry=https://registry.npmjs.org`; 0 vulnerabilities |
| Key pages on Vercel production | `https://trade-weapons.vercel.app/` and six guide routes | `2026-08-19T14:49:15Z` | Pass on deployment alias; formal domain blocked | `/`, `/beginner-guide/`, `/core-loop/`, `/progression/`, `/mistakes/`, `/faq/`, and `/sources/` each returned HTTP 200 |
| Primary hero CTA | `https://trade-weapons.vercel.app/` | `2026-08-19T14:38:49Z` | Pass | The largest hero action has target `/beginner-guide/#quick-start`; the target is visible at 375px in `.launch/acceptance/screenshots/beginner-guide-375-viewport.png` |
| SEO metadata | Seven deployed page routes | `2026-08-19T14:49:15Z` | Pass on deployment alias; formal domain blocked | Initial HTML contains the expected title and canonical `https://tradeweapons.wiki/`; the formal host cannot yet be checked |
| `robots.txt` | `https://trade-weapons.vercel.app/robots.txt` | `2026-08-19T14:49:15Z` | Pass on deployment alias; formal domain blocked | Returned HTTP 200; formal URL `https://tradeweapons.wiki/robots.txt` is not reachable yet |
| `sitemap.xml` | `https://trade-weapons.vercel.app/sitemap.xml` | `2026-08-19T14:49:15Z` | Pass on deployment alias; formal domain blocked | Returned HTTP 200; XML contains 7 canonical URLs for `tradeweapons.wiki` |
| Browser review at 375/768/1440 | Local production build | `2026-08-19T14:38:49Z` | Pass | `.launch/acceptance/design-approved.json` is approved; four viewport screenshots are recorded under `.launch/acceptance/screenshots/`; no horizontal overflow or console errors were found |
| Deployment ID and status | Vercel project `prj_qXCJD894Th1Fm7W8qoJ15jv4NyRh` | `2026-08-19T14:42:43Z` | Pass | Deployment `dpl_1p9qc1YmziiUFoPFJCKgj9x9TsFS` is `READY`, target `production`, URL `https://trade-weapons-njvmuu5xl-zhangtongxin888s-projects.vercel.app` |
| Git repository connection | Vercel project `trade-weapons` | `2026-08-19T14:40:19Z` | Pass | Vercel linked `https://github.com/zhangtongxin888/trade-weapons` while creating the project |
| DNS ownership and rollback baseline | `tradeweapons.wiki` | `2026-08-19T14:47:46Z` | Blocked before write | RDAP shows Spaceship, Inc. as registrar and registration on `2026-08-19`; authoritative nameservers are `fay.ns.cloudflare.com` and `kipp.ns.cloudflare.com`; current apex resolves to Cloudflare parking and `www` has no address record |
| Spaceship account access | Spaceship Domain Manager | `2026-08-19T14:48:45Z` | Blocked | Exact and partial searches in the signed-in account returned 0 matching domains. No DNS record was edited because domain ownership could not be resolved safely in that account |
| Required apex DNS | `tradeweapons.wiki` | `2026-08-19T14:44:55Z` | Pending correct Spaceship account | Vercel strict verification requires `@ CNAME 21f854500b463559.vercel-dns-017.com.` with proxy disabled; current apex still serves a Spaceship parking page through Cloudflare |
| Required `www` DNS | `www.tradeweapons.wiki` | `2026-08-19T14:44:55Z` | Pending correct Spaceship account | Vercel strict verification requires `www CNAME 21f854500b463559.vercel-dns-017.com.`; current `www` has no DNS answer |
| Main-domain HTTPS | `https://tradeweapons.wiki` | `2026-08-19T14:34:01Z` | Blocked | HTTPS did not complete and the HTTP host served a parking page, not this deployment |
| `www` redirect | `https://www.tradeweapons.wiki` | `2026-08-19T14:49:11Z` | Configured in Vercel; not live | Project-domain configuration sets `www.tradeweapons.wiki` to redirect to `tradeweapons.wiki` with status 308; DNS and TLS are still missing |
| Production canonical and HTTP checks | Seven `https://tradeweapons.wiki` page URLs | `2026-08-19T14:50:26Z` | Blocked by DNS and TLS | Formal-domain verification cannot run until the Spaceship records are applied and Vercel reports `misconfigured: false` |
| GSC ownership | `sc-domain:tradeweapons.wiki` | `2026-08-19T14:50:26Z` | Not attempted; prerequisite blocked | GSC was not opened because the formal HTTPS site and DNS control are not ready |
| GSC Sitemap status | `https://tradeweapons.wiki/sitemap.xml` | `2026-08-19T14:50:26Z` | Not submitted | A success receipt cannot be obtained until the verified property and public formal Sitemap exist |

## Provider record

- Research: Grok wrapper was invoked twice, but neither response produced the required structured research package. Codex performed the fallback research and source-by-source approval.
- Candidate design: Kimi K3 wrapper was invoked twice in a disposable directory without `.git` or a remote, but its CLI rejected the non-interactive prompt mode. Sites produced the fallback candidate in a separate disposable directory; Codex independently reviewed and rewrote the formal implementation.
- Formal implementation, responsive browser review, verification, Vercel deployment, repository commit, and push: Codex.

No external provider or sub-agent received repository credentials or access to Chrome, DNS, GSC, Cloudflare, Vercel, or deployment credentials. Codex alone used the granted Trade Weapons browser lock and deployment account.

## Exact recovery point

1. Use the Spaceship account that owns `tradeweapons.wiki`; do not change nameservers or unrelated records.
2. Replace only conflicting apex Web records with the Vercel project-specific apex CNAME above, add the project-specific `www` CNAME, and keep both unproxied.
3. Re-run strict Vercel verification for apex and `www`; require `misconfigured: false`, working TLS, and the live 308 redirect.
4. Run the formal-domain launch verifier, then create or reuse `sc-domain:tradeweapons.wiki`, add the Google DNS verification record without replacing unrelated TXT records, submit the exact Sitemap URL, and require a successful receipt.
