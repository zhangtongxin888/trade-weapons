import { GuidePage } from "../_components/GuidePage";
import { pageMetadata } from "../_lib/site";

export const metadata = pageMetadata(
  "Trade Weapons Core Gameplay Loop",
  "Learn the evidence-backed Trade Weapons loop: hold, read, compare, decide, and repeat without relying on invented values.",
  "/core-loop/",
);

export default function CoreLoop() {
  return (
    <GuidePage
      eyebrow="Core gameplay · Evidence-backed"
      title="Hold. Read. Compare. Decide."
      intro="Official media confirms weapon-for-weapon offer panels, per-second income labels, and accept or decline controls. Together, those facts support a compact decision loop without pretending to know undocumented systems."
      related={[
        { href: "/progression/", label: "Build a progression method", description: "Improve the quality of your comparisons over time." },
        { href: "/beginner-guide/#quick-start", label: "Return to quick start", description: "Use the three-decision beginner route." },
      ]}
    >
      <section className="loop-diagram" aria-label="Five stage core loop">
        {[
          ["01", "Hold", "Know what is on your side."],
          ["02", "Read", "Locate the visible income signal."],
          ["03", "Compare", "Review both offer panels."],
          ["04", "Decide", "Accept clearly or decline safely."],
          ["05", "Repeat", "Use the next offer to learn more."],
        ].map(([number, title, text]) => (
          <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>
        ))}
      </section>

      <section className="article-section">
        <span className="section-number">A</span>
        <div><p className="section-kicker">Visible evidence</p><h2>Income labels are a comparison signal</h2><p>One official image places different per-second figures beneath the weapons in a trade. That makes the displayed rate useful for comparison. It does not establish a complete market value, rarity, demand score, or future performance.</p><p>Use the rate as one piece of current evidence. If another player or website gives you a number that the live offer does not support, pause.</p></div>
      </section>

      <section className="article-section">
        <span className="section-number">B</span>
        <div><p className="section-kicker">Decision point</p><h2>Accept and decline are equally important</h2><p>The official trade art displays a green acceptance control and a red decline control. The useful habit is not accepting more often—it is deciding only after both sides have been checked.</p><div className="compare-grid"><div><span>Accept when</span><strong>The visible offer matches your intended exchange.</strong></div><div><span>Decline when</span><strong>An item, rate, or assumption is unclear.</strong></div></div></div>
      </section>

      <section className="article-section">
        <span className="section-number">C</span>
        <div><p className="section-kicker">Acquisition signal</p><h2>Boxes appear in official presentation—with limits</h2><p>A second official image shows a weapon emerging from a box. This supports describing boxed weapon rewards as part of the game presentation. It does not support claims about how boxes are opened, what they cost, their odds, or guaranteed rewards.</p><p className="advice-callout"><strong>Boundary:</strong> if the live game shows a box flow, follow the on-screen instructions. This guide will not fill documentation gaps with guesses.</p></div>
      </section>
    </GuidePage>
  );
}
