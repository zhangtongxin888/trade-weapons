import { GuidePage } from "../_components/GuidePage";
import { pageMetadata } from "../_lib/site";

export const metadata = pageMetadata(
  "Trade Weapons Progression Guide",
  "A practical Trade Weapons progression method based on visible income signals, careful records, and source-aware comparisons.",
  "/progression/",
);

export default function Progression() {
  return (
    <GuidePage
      eyebrow="Advanced route · Practical method"
      title="Progress by improving your decisions."
      intro="There is no approved creator value list in our source set. Instead of inventing a tier list, this route helps you build a repeatable comparison method around current, visible information."
      related={[
        { href: "/core-loop/", label: "Review the core loop", description: "Reconnect each phase of the decision cycle." },
        { href: "/sources/", label: "Inspect the evidence", description: "See exactly what is verified and what remains unknown." },
      ]}
    >
      <section className="progression-stages">
        <article><span>Stage 1</span><h2>Calibrate</h2><p>Learn where the current interface shows the weapon and its per-second income. Treat interface placement as changeable.</p><strong>Goal: read one offer accurately.</strong></article>
        <article><span>Stage 2</span><h2>Record</h2><p>Keep your own short list of names and rates you personally observe. Add the date so you know how current it is.</p><strong>Goal: replace memory with notes.</strong></article>
        <article><span>Stage 3</span><h2>Compare</h2><p>Look at both sides and separate visible rate information from appearance, hype, and unsupported market claims.</p><strong>Goal: explain your decision.</strong></article>
        <article><span>Stage 4</span><h2>Verify</h2><p>When an update changes the live game, retire old assumptions. Prefer current creator-controlled information where it exists.</p><strong>Goal: keep your method current.</strong></article>
      </section>

      <section className="article-section">
        <span className="section-number">01</span>
        <div><p className="section-kicker">Your comparison ledger</p><h2>Record only what you can observe</h2><p>A useful private note can be simple: weapon name as displayed, current per-second rate, date observed, and what you gave or received. Do not turn one observation into a universal value.</p><div className="ledger-example" aria-label="Example comparison ledger"><div><span>Field</span><span>What to record</span></div><div><strong>Weapon</strong><span>Exact live display name</span></div><div><strong>Income</strong><span>Visible per-second label</span></div><div><strong>Observed</strong><span>Date and session</span></div><div><strong>Outcome</strong><span>Accepted or declined</span></div></div></div>
      </section>

      <section className="article-section">
        <span className="section-number">02</span>
        <div><p className="section-kicker">Trade quality</p><h2>Use a three-layer check</h2><ol className="numbered-cards"><li><strong>Screen layer</strong><span>What is visible in the offer right now?</span></li><li><strong>Source layer</strong><span>Does a creator-controlled source support the mechanic you are relying on?</span></li><li><strong>Decision layer</strong><span>Can you explain why the exchange helps your goal without using an invented value?</span></li></ol></div>
      </section>

      <section className="article-section">
        <span className="section-number">03</span>
        <div><p className="section-kicker">Update discipline</p><h2>Old certainty is a progression risk</h2><p>No detailed update-log fact is approved for this guide. Re-check the live interface after changes and treat old screenshots, lists, and videos as historical until confirmed.</p><p className="advice-callout"><strong>Site policy:</strong> this guide displays a check date and never presents an unapproved value list as verified.</p></div>
      </section>
    </GuidePage>
  );
}
