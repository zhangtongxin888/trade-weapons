import { GuidePage } from "../_components/GuidePage";
import { pageMetadata, ROBLOX_URL } from "../_lib/site";

export const metadata = pageMetadata(
  "Trade Weapons Beginner Guide",
  "A cautious first-session route for Trade Weapons: identify visible income, compare both sides of an offer, and know when to decline.",
  "/beginner-guide/",
);

export default function BeginnerGuide() {
  return (
    <GuidePage
      eyebrow="Beginner route · 10 minute read"
      title="Start with the evidence on screen."
      intro="The approved research package does not contain a complete creator tutorial, so this guide stays deliberately precise: it explains what official media confirms, then separates practical advice from unapproved mechanics."
      related={[
        { href: "/core-loop/", label: "Understand the core loop", description: "Turn visible offer information into a repeatable routine." },
        { href: "/mistakes/", label: "Avoid common mistakes", description: "Five ways a rushed comparison goes wrong." },
      ]}
    >
      <section id="quick-start" className="article-section anchor-section">
        <span className="section-number">01</span>
        <div>
          <p className="section-kicker">Quick start</p>
          <h2>Your first three decisions</h2>
          <div className="step-list">
            <article>
              <span>1</span>
              <div><h3>Find the visible rate</h3><p>Official game media places per-second income figures beneath weapons. Before comparing anything, identify the rate attached to what you hold.</p></div>
            </article>
            <article>
              <span>2</span>
              <div><h3>Read both offer panels</h3><p>The official trade image shows separate give and receive sides. Check the item shown on each side and the information directly attached to it.</p></div>
            </article>
            <article>
              <span>3</span>
              <div><h3>Choose accept or decline</h3><p>Official media shows both outcomes. Declining an unclear offer is a valid decision; a flashy appearance is not proof of value.</p></div>
            </article>
          </div>
        </div>
      </section>

      <section className="article-section">
        <span className="section-number">02</span>
        <div>
          <p className="section-kicker">First ten minutes</p>
          <h2>A safe learning route</h2>
          <ol className="timeline-list">
            <li><strong>Minute 0–2</strong><span>Confirm you joined the official experience by checking place ID <code>124993558819856</code>.</span></li>
            <li><strong>Minute 2–4</strong><span>Look for where the live interface displays a weapon and its per-second income. Interface placement can change.</span></li>
            <li><strong>Minute 4–7</strong><span>Observe an offer without rushing. Compare the give side with the receive side and note every visible difference.</span></li>
            <li><strong>Minute 7–10</strong><span>Practice a simple rule: accept only what you can verify on screen; decline anything ambiguous.</span></li>
          </ol>
          <p className="advice-callout"><strong>Advice, not a claimed game rule:</strong> keep a small personal note of weapon names and observed rates. No value-list fact is approved for this guide, so current observations are safer than treating third-party numbers as verified.</p>
        </div>
      </section>

      <section className="article-section">
        <span className="section-number">03</span>
        <div>
          <p className="section-kicker">Before you accept</p>
          <h2>The 20-second check</h2>
          <ul className="check-list">
            <li>Is the item on the receive side the one you intended to get?</li>
            <li>Did you read the visible income label rather than judging by color or shape?</li>
            <li>Did the offer change while you were reviewing it?</li>
            <li>Are you relying on a value, code, rarity, or probability that is not approved in the current fact set?</li>
            <li>If anything is unclear, have you used the decline option?</li>
          </ul>
        </div>
      </section>

      <section className="article-cta">
        <div><p className="section-kicker">Ready to play?</p><h2>Use the guide first, then open the official experience.</h2></div>
        <a className="button button-secondary" href={ROBLOX_URL} rel="noreferrer" target="_blank">Open official game ↗</a>
      </section>
    </GuidePage>
  );
}
