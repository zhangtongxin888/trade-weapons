import type { ReactNode } from "react";
import { SiteChrome } from "./SiteChrome";
import { AdSlot, AdsterraRuntime } from "./AdsterraSlots";

type GuidePageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
  related: { href: string; label: string; description: string }[];
  ads?: boolean;
};

export function GuidePage({ eyebrow, title, intro, children, related, ads = true }: GuidePageProps) {
  return (
    <SiteChrome>
      <main id="main-content" className="guide-main">
        {ads ? <AdSlot slot="top" /> : null}
        <header className="guide-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="guide-intro">{intro}</p>
          <div className="verified-pill"><span aria-hidden="true">✓</span> Built only from approved facts and clearly labeled advice</div>
        </header>
        {ads ? <AdSlot slot="mid" /> : null}
        <div className="guide-layout">
          <article className="guide-article">{children}</article>
          <aside className="guide-aside" aria-label="Related guides">
            <p className="aside-label">Continue learning</p>
            {related.map((item) => (
              <a href={item.href} key={item.href}>
                <strong>{item.label}</strong>
                <span>{item.description}</span>
              </a>
            ))}
            <div className="source-mini">
              <span>Source policy</span>
              <p>If an official source does not support a mechanic, we do not present it as fact.</p>
              <a href="/sources/">Review every source →</a>
            </div>
          </aside>
        </div>
        {ads ? <AdSlot slot="bottom" /> : null}
        {ads ? <AdsterraRuntime /> : null}
      </main>
    </SiteChrome>
  );
}
