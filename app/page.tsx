import type { Metadata } from "next";
import { SiteChrome } from "./_components/SiteChrome";
import { ROBLOX_URL } from "./_lib/site";

export const metadata: Metadata = {
  title: "Trade Weapons Guide — Start Trading With Verified Facts",
  description:
    "A source-checked beginner guide to Trade Weapons on Roblox: read offers, compare visible income, and avoid unsupported value claims.",
  alternates: { canonical: "https://tradeweapons.wiki/" },
  openGraph: {
    type: "website",
    title: "Trade Weapons Wiki — Read the Offer. Check the Facts.",
    description: "A verified beginner guide to the Trade Weapons Roblox game.",
    url: "https://tradeweapons.wiki/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Trade Weapons Wiki offer comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trade Weapons Wiki — Read the Offer. Check the Facts.",
    description: "A verified beginner guide to the Trade Weapons Roblox game.",
    images: ["/og.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Trade Weapons Wiki",
      url: "https://tradeweapons.wiki/",
      description: "Independent, source-checked player guides for Trade Weapons on Roblox.",
      publisher: { "@type": "Organization", name: "Trade Weapons Wiki", url: "https://tradeweapons.wiki/" },
    },
    {
      "@type": "VideoGame",
      name: "Trade Weapons",
      url: ROBLOX_URL,
      gamePlatform: "Roblox",
      author: { "@type": "Organization", name: "Jew Trade & Clothing LLC" },
    },
  ],
};

export default function Home() {
  return (
    <SiteChrome>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span aria-hidden="true">●</span> Source-checked player guide</p>
            <h1 id="hero-title">Make your next trade with <em>clear eyes.</em></h1>
            <p className="hero-lede">Learn what the official Trade Weapons media actually shows, how to compare visible income labels, and when to decline an offer that does not add up.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="/beginner-guide/#quick-start">Start the Beginner Guide <span aria-hidden="true">→</span></a>
              <a className="text-link" href="#verified-facts">See verified facts</a>
            </div>
            <p className="hero-note">Independent guide · No invented codes, values, or crate odds</p>
          </div>

          <div className="trade-board" aria-label="Illustration of comparing a weapon trade">
            <div className="board-topline"><span>Offer review</span><span>01 / 03</span></div>
            <div className="offer-grid">
              <article className="offer-card"><span className="offer-label">You give</span><span className="weapon-shape" aria-hidden="true" /><strong>Read the rate</strong><small>Visible income is evidence</small></article>
              <span className="swap-mark" aria-hidden="true">⇄</span>
              <article className="offer-card offer-card-accent"><span className="offer-label">You receive</span><span className="weapon-shape weapon-shape-alt" aria-hidden="true" /><strong>Compare both sides</strong><small>Looks alone are not value</small></article>
            </div>
            <div className="decision-row"><span className="decision decline">Decline if unclear</span><span className="decision accept">Accept after review</span></div>
          </div>
        </section>

        <section className="proof-strip" id="verified-facts" aria-label="Verified game facts">
          <div><span>Official game</span><strong>Trade Weapons</strong></div>
          <div><span>Root place ID</span><strong>124993558819856</strong></div>
          <div><span>Guide policy</span><strong>Sources before claims</strong></div>
        </section>

        <section className="home-section quick-section" aria-labelledby="quick-title">
          <div className="section-heading"><div><p className="section-kicker">Quick start</p><h2 id="quick-title">Three decisions before your first trade.</h2></div><a href="/beginner-guide/">Full beginner route →</a></div>
          <div className="home-card-grid">
            <article><span>01</span><h3>Find the visible rate</h3><p>Official media shows per-second income labels beneath weapons. Read the number attached to the item.</p></article>
            <article><span>02</span><h3>Check both sides</h3><p>Review the weapon shown in the give panel and the one shown in the receive panel.</p></article>
            <article><span>03</span><h3>Choose with intent</h3><p>Accept only a clear offer. Use the decline control whenever information is missing or ambiguous.</p></article>
          </div>
        </section>

        <section className="loop-section" aria-labelledby="loop-title">
          <div><p className="section-kicker">Core gameplay loop</p><h2 id="loop-title">A five-beat routine built from approved facts.</h2><p>We do not pretend the creator published a full manual. This loop connects only what official media confirms with clearly labeled player advice.</p><a className="button button-outline" href="/core-loop/">Explore the core loop →</a></div>
          <ol className="loop-track"><li><span>01</span><strong>Hold</strong></li><li><span>02</span><strong>Read</strong></li><li><span>03</span><strong>Compare</strong></li><li><span>04</span><strong>Decide</strong></li><li><span>05</span><strong>Repeat</strong></li></ol>
        </section>

        <section className="home-section progression-home" aria-labelledby="progress-title">
          <div className="section-heading"><div><p className="section-kicker">Advanced route</p><h2 id="progress-title">Progress without a made-up value list.</h2></div><a href="/progression/">Open progression guide →</a></div>
          <div className="route-grid">
            <article><span>Calibrate</span><p>Learn where the current interface puts the information you need.</p></article>
            <article><span>Record</span><p>Note exact live names, income labels, and the date you observed them.</p></article>
            <article><span>Compare</span><p>Separate current evidence from appearance, hype, and stale estimates.</p></article>
            <article><span>Verify</span><p>Retire old assumptions when the creator changes the live experience.</p></article>
          </div>
        </section>

        <section className="mistakes-home" aria-labelledby="mistakes-title">
          <div><p className="section-kicker">Common mistakes</p><h2 id="mistakes-title">The skipped check is usually the costly one.</h2><p>Rushed acceptance, appearance-based assumptions, unofficial values, invented box odds, and the wrong game link all create avoidable risk.</p><a className="text-link" href="/mistakes/">Review all five mistakes →</a></div>
          <blockquote><span>“</span><p>If you cannot verify the claim, do not trade as if it were true.</p></blockquote>
        </section>

        <section className="home-section faq-home" aria-labelledby="faq-title">
          <div className="section-heading"><div><p className="section-kicker">FAQ</p><h2 id="faq-title">Short answers to high-intent questions.</h2></div><a href="/faq/">Read all answers →</a></div>
          <div className="faq-preview">
            <article><h3>Are any codes approved here?</h3><p>The current approval file contains no code or redemption fact, so this site does not publish one.</p></article>
            <article><h3>Is a value list approved here?</h3><p>No value-list claim is approved for publication. Treat third-party numbers as estimates.</p></article>
            <article><h3>Who made the game?</h3><p>Roblox lists Jew Trade & Clothing LLC as the creator group.</p></article>
            <article><h3>Does it include trading?</h3><p>Official media depicts weapon-for-weapon offers with accept and decline controls.</p></article>
          </div>
        </section>

        <section className="source-banner">
          <div><p className="section-kicker">Source transparency</p><h2>Ten approved facts. Zero room for invented mechanics.</h2><p>Review every official API, media URL, confidence label, and publishing boundary behind this guide.</p></div>
          <div className="source-banner-actions"><a className="button button-primary" href="/sources/">Open the source ledger →</a><a className="text-link" href={ROBLOX_URL} rel="noreferrer" target="_blank">Official game ↗</a></div>
        </section>
      </main>
    </SiteChrome>
  );
}
