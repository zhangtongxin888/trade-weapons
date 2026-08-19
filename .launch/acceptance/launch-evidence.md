# Trade Weapons launch evidence

Checked at: `2026-08-19T16:32:47Z`

Current status: responsive review and the Vercel production deployment are complete. The authoritative DNS provider is Cloudflare (`fay.ns.cloudflare.com` and `kipp.ns.cloudflare.com`), but `tradeweapons.wiki` is not visible to the only Cloudflare account currently authenticated in Wrangler, account ID `bbd34aeeef02a484fc6e1bae4e577e3f`. The official zone-list API completed successfully but returned no matching zone, so no DNS write was attempted. Formal-domain DNS, HTTPS, and online canonical checks remain blocked. GSC was explicitly outside this recovery task and was not opened.

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
| Authoritative DNS and rollback baseline | `tradeweapons.wiki` | `2026-08-19T16:31:21Z` | Provider confirmed; control blocked before write | Public DNS returns `fay.ns.cloudflare.com` and `kipp.ns.cloudflare.com`; apex still returns Cloudflare proxy addresses `104.21.77.36`, `172.67.204.4`, `2606:4700:3030::ac43:cc04`, and `2606:4700:3035::6815:4d24`; `www` still has no CNAME answer. Because the zone was not visible, its record set could not be backed up and no mutation was attempted |
| Cloudflare zone access | Cloudflare account `bbd34aeeef02a484fc6e1bae4e577e3f` | `2026-08-19T16:31:21Z` | Blocked: zone not visible to authenticated account | Wrangler is authenticated with OAuth to exactly one account. `GET /zones?name=tradeweapons.wiki` succeeded but returned no matching zone, distinguishing this from a failed DNS write or browser issue. No credential was printed, persisted, or committed |
| Required apex DNS | `tradeweapons.wiki` | `2026-08-19T16:32:47Z` | Blocked by Cloudflare zone/account ownership | Vercel strict verification remains `misconfigured: true`; exact recommendation is `@ CNAME 21f854500b463559.vercel-dns-017.com.` with proxy disabled. Current apex still returns the two Cloudflare proxy IPv4 values; no record was changed |
| Required `www` DNS | `www.tradeweapons.wiki` | `2026-08-19T16:32:47Z` | Blocked by Cloudflare zone/account ownership | Vercel strict verification remains `misconfigured: true`; exact recommendation is `www CNAME 21f854500b463559.vercel-dns-017.com.`. Current `www` has no DNS answer; no record was changed |
| Main-domain HTTPS | `https://tradeweapons.wiki` | `2026-08-19T16:32:47Z` | Blocked | A command-line HTTPS request timed out after 20 seconds with no response; the Vercel strict check remains misconfigured |
| `www` redirect | `https://www.tradeweapons.wiki` | `2026-08-19T16:32:47Z` | Configured in Vercel; not live | Project-domain configuration sets `www.tradeweapons.wiki` to redirect to `tradeweapons.wiki` with status 308, but public DNS cannot resolve the host |
| Production canonical and HTTP checks | Seven `https://tradeweapons.wiki` page URLs plus `robots.txt` and `sitemap.xml` | `2026-08-19T16:32:47Z` | Blocked by authoritative DNS and TLS | Formal-domain verification cannot run until the zone-controlling Cloudflare account applies the two Vercel records and strict verification reports `misconfigured: false` |
| GSC ownership | `sc-domain:tradeweapons.wiki` | `2026-08-19T16:32:47Z` | Not attempted; outside recovery scope | This recovery was explicitly limited to non-browser Cloudflare DNS and online checks. Chrome and GSC were not opened |
| GSC Sitemap status | `https://tradeweapons.wiki/sitemap.xml` | `2026-08-19T16:32:47Z` | Not submitted; outside recovery scope | GSC was not touched in this recovery, and the formal Sitemap is not publicly reachable yet |

## Provider record

- Research: Grok wrapper was invoked twice, but neither response produced the required structured research package. Codex performed the fallback research and source-by-source approval.
- Candidate design: Kimi K3 wrapper was invoked twice in a disposable directory without `.git` or a remote, but its CLI rejected the non-interactive prompt mode. Sites produced the fallback candidate in a separate disposable directory; Codex independently reviewed and rewrote the formal implementation.
- Formal implementation, responsive browser review, verification, Vercel deployment, repository commit, and push: Codex.

No external provider or sub-agent received repository credentials or access to Chrome, DNS, GSC, Cloudflare, Vercel, or deployment credentials. The earlier launch pass used the granted Trade Weapons browser lock. This recovery used only local command-line clients and official APIs; it did not initialize Chrome, open Spaceship, open GSC, or expose authentication credentials.

## Exact recovery point

1. Authenticate the local Cloudflare CLI/API to the account that owns the active `tradeweapons.wiki` zone, or grant Zone Read and DNS Edit access for that zone to account `bbd34aeeef02a484fc6e1bae4e577e3f`. Do not change nameservers.
2. Back up the visible DNS record set, replace only conflicting apex Web records with `@ CNAME 21f854500b463559.vercel-dns-017.com.`, and add `www CNAME 21f854500b463559.vercel-dns-017.com.`. Keep both unproxied and preserve every unrelated record.
3. Re-run strict Vercel verification for apex and `www`; require `misconfigured: false`, working TLS, and the live 308 redirect.
4. Run the formal-domain launch verifier over all seven pages, `robots.txt`, `sitemap.xml`, and canonical tags. GSC remains a separate total-controller step and was not part of this recovery.
