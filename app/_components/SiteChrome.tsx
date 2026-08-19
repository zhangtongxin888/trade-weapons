import type { ReactNode } from "react";
import Link from "next/link";
import { navigation, ROBLOX_URL } from "../_lib/site";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to guide</a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Trade Weapons Wiki home">
          <span className="brand-mark" aria-hidden="true">TW</span>
          <span>Trade Weapons <strong>Wiki</strong></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.slice(0, 5).map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>{item.label}</a>
            ))}
          </nav>
        </details>
      </header>
      {children}
      <footer className="site-footer">
        <div>
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark" aria-hidden="true">TW</span>
            <span>Trade Weapons <strong>Wiki</strong></span>
          </Link>
          <p>An independent, source-checked player guide. Not affiliated with Roblox or the game creator.</p>
        </div>
        <div className="footer-links">
          <strong>Learn</strong>
          <a href="/beginner-guide/">Beginner guide</a>
          <a href="/core-loop/">Core loop</a>
          <a href="/progression/">Progression</a>
        </div>
        <div className="footer-links">
          <strong>Verify</strong>
          <a href="/sources/">Sources</a>
          <a href="/faq/">FAQ</a>
          <a href={ROBLOX_URL} rel="noreferrer" target="_blank">Official game ↗</a>
        </div>
      </footer>
      <div className="footer-base">
        <span>tradeweapons.wiki</span>
        <span>Facts checked August 19, 2026</span>
      </div>
    </div>
  );
}
