import { GuidePage } from "../_components/GuidePage";
import { pageMetadata } from "../_lib/site";

export const metadata = pageMetadata(
  "Trade Weapons Sources and Fact Ledger",
  "Review the official Roblox APIs, media, fact IDs, confidence levels, rejected claim policy, and verification date behind Trade Weapons Wiki.",
  "/sources/",
);

const sources = [
  { ids: "001–003, 009", title: "Roblox game details API", url: "https://games.roblox.com/v1/games?universeIds=10625493331", supports: "Official name, creator group, place ID, universe record, and maximum server size", confidence: "High" },
  { ids: "004", title: "Roblox place-to-universe API", url: "https://apis.roblox.com/universes/v1/places/124993558819856/universe", supports: "Place ID 124993558819856 maps to universe ID 10625493331", confidence: "High" },
  { ids: "005–007", title: "Official experience trade media", url: "https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=10625493331&countPerUniverse=10&defaults=true&size=768x432&format=Png&isCircular=false", evidenceUrl: "https://tr.rbxcdn.com/180DAY-7d9af4e793401afe1376481a2f3ca6ef/768/432/Image/Png/noFilter", supports: "Roblox maps the media to this universe; the image shows a weapon-for-weapon offer, two offer panels, accept and decline controls, and per-second income labels", confidence: "High" },
  { ids: "008", title: "Official experience box media", url: "https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=10625493331&countPerUniverse=10&defaults=true&size=768x432&format=Png&isCircular=false", evidenceUrl: "https://tr.rbxcdn.com/180DAY-22953b50506d6d06460efcb066c95271/768/432/Image/Png/noFilter", supports: "Roblox maps the media to this universe; the image presents a weapon emerging from a box, while exact box mechanics remain unapproved", confidence: "Medium" },
  { ids: "010", title: "Roblox badges API", url: "https://badges.roblox.com/v1/universes/10625493331/badges?limit=100&sortOrder=Asc", supports: "An enabled badge named Welcome", confidence: "High" },
];

export default function Sources() {
  return (
    <GuidePage
      eyebrow="Source ledger · Checked August 19, 2026"
      title="Every durable claim starts here."
      intro="We reviewed live Roblox APIs and official experience media. The table records what each source supports, how confident the wording can be, and where this guide deliberately stops."
      related={[
        { href: "/beginner-guide/", label: "Apply the evidence", description: "Use the approved facts in a first-session route." },
        { href: "/faq/", label: "Read verified answers", description: "See how the source boundary shapes each answer." },
      ]}
    >
      <section className="source-summary">
        <div><strong>10</strong><span>approved facts</span></div>
        <div><strong>4</strong><span>identity checks</span></div>
        <div><strong>4</strong><span>play and growth signals</span></div>
        <div><strong>0</strong><span>unsupported claims published</span></div>
      </section>

      <div className="source-ledger">
        {sources.map((source) => (
          <article key={source.ids}>
            <div className="source-id">Fact {source.ids}</div>
            <div><h2>{source.title}</h2><p>{source.supports}</p><a href={source.url} rel="noreferrer" target="_blank">Open official source ↗</a>{"evidenceUrl" in source && <><span aria-hidden="true"> · </span><a href={source.evidenceUrl} rel="noreferrer" target="_blank">View image evidence ↗</a></>}</div>
            <span className={`confidence confidence-${source.confidence.toLowerCase()}`}>{source.confidence} confidence</span>
          </article>
        ))}
      </div>

      <section className="article-section">
        <span className="section-number">!</span>
        <div><p className="section-kicker">Not approved</p><h2>What this guide will not claim</h2><ul className="check-list forbidden-list"><li>Exact weapon names, rarities, values, demand scores, or rankings without a creator source.</li><li>Active codes, a redemption path, reward amounts, or a release schedule.</li><li>Box prices, odds, guarantees, upgrade costs, rebirths, quests, pets, zones, or combat systems.</li><li>That this independent site is official, endorsed by Roblox, or run by the creator group.</li></ul></div>
      </section>

      <section className="method-note">
        <p className="section-kicker">Method note</p>
        <h2>Images show presentation, not every live step.</h2>
        <p>Official media is strong evidence for visible concepts such as offer sides, decision controls, and income labels. It is not enough to assert an undocumented sequence, price, probability, or market value. That distinction shapes every page on this site.</p>
      </section>
    </GuidePage>
  );
}
