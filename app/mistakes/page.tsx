import { GuidePage } from "../_components/GuidePage";
import { pageMetadata } from "../_lib/site";

export const metadata = pageMetadata(
  "Trade Weapons Common Mistakes",
  "Avoid rushed Trade Weapons decisions: compare both offer panels, read visible income, and reject unsupported values, codes, and probabilities.",
  "/mistakes/",
);

const mistakes = [
  { number: "01", title: "Accepting before the offer is clear", problem: "The official media shows separate give and receive panels plus two decision controls. Skipping the review defeats the information the interface provides.", fix: "Pause on both sides. If the intended item or visible rate is unclear, decline." },
  { number: "02", title: "Treating appearance as value", problem: "A bright or elaborate weapon can look more desirable, but the current approval file contains no rarity-ladder or demand-table claim.", fix: "Use visible information and current observations, not color, size, or visual effects alone." },
  { number: "03", title: "Repeating an unofficial value as fact", problem: "The approval file contains no value-list claim. Third-party numbers can be outdated, incomplete, or based on a different goal than yours.", fix: "Label community estimates as estimates and verify the live offer independently." },
  { number: "04", title: "Inventing box odds or guarantees", problem: "Approved fact 008 covers only the official boxed-weapon presentation; it does not approve a price, probability, guarantee, or opening control.", fix: "Follow the live interface and avoid any guide that states unsupported odds as certain." },
  { number: "05", title: "Joining the wrong experience", problem: "Search results and copied experiences can look similar. The verified root place ID is 124993558819856.", fix: "Use the official link on this site or compare the place ID before you play." },
];

export default function Mistakes() {
  return (
    <GuidePage
      eyebrow="Risk control · Five checks"
      title="Most bad trades start before the button."
      intro="The mistake is usually not the final click. It is the skipped comparison, the unsupported assumption, or the failure to confirm the official experience."
      related={[
        { href: "/beginner-guide/#quick-start", label: "Use the beginner checklist", description: "Build a safer first-session routine." },
        { href: "/faq/", label: "Check common questions", description: "Get clear answers about codes, values, IDs, and sources." },
      ]}
    >
      <div className="mistake-list">
        {mistakes.map((item) => (
          <article key={item.number}>
            <span className="mistake-number">{item.number}</span>
            <div><h2>{item.title}</h2><p>{item.problem}</p><p className="fix-line"><strong>Better move:</strong> {item.fix}</p></div>
          </article>
        ))}
      </div>
      <section className="article-cta">
        <div><p className="section-kicker">One rule to remember</p><h2>If you cannot verify the claim, do not trade as if it were true.</h2></div>
        <a className="button button-secondary" href="/sources/">See the source ledger →</a>
      </section>
    </GuidePage>
  );
}
