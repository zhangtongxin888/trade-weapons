import { GuidePage } from "../_components/GuidePage";
import { pageMetadata } from "../_lib/site";

export const metadata = pageMetadata(
  "Trade Weapons FAQ — Codes, Values, IDs and Trading",
  "Verified answers about the Trade Weapons Roblox game, creator, game ID, trading, codes, value lists, boxes, and server size.",
  "/faq/",
);

const faq = [
  { question: "What is the official Trade Weapons Roblox game?", answer: "The verified experience is 🗡️ Trade Weapons at root place ID 124993558819856 and universe ID 10625493331." },
  { question: "Who made Trade Weapons?", answer: "Roblox lists the creator as the group Jew Trade & Clothing LLC, group ID 761176814." },
  { question: "Can players trade weapons?", answer: "Official experience media depicts a weapon-for-weapon offer with separate give and receive panels plus accept and decline controls." },
  { question: "How should I compare a trade?", answer: "Official media displays per-second income labels beneath weapons. Compare the visible information on both sides and decline if the exchange is unclear. This is practical advice, not a creator-published trade rule." },
  { question: "Are there verified Trade Weapons codes?", answer: "The current approval file contains no code or redemption fact, so this guide does not publish a code. It will not invent or repeat unverified codes." },
  { question: "Is there an official Trade Weapons value list?", answer: "No value-list claim is approved for publication on this site. Treat third-party values as estimates and check current in-game information." },
  { question: "Does Trade Weapons have boxes or crates?", answer: "An official experience image shows a weapon emerging from a box. The approved sources do not document exact opening controls, prices, odds, or guarantees." },
  { question: "How many players fit in a server?", answer: "The Roblox game API listed a maximum server size of 12 when checked on August 19, 2026." },
];

export default function Faq() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <GuidePage
      eyebrow="FAQ · Verified answers"
      title="Clear answers, with the gaps left visible."
      intro="Every answer below traces to an approved Roblox source or is explicitly labeled as practical advice. Unapproved details remain unpublished—we do not fill them with guesswork."
      related={[
        { href: "/sources/", label: "Open the source ledger", description: "See the URLs, fact IDs, confidence, and review date." },
        { href: "/mistakes/", label: "Avoid common mistakes", description: "Turn the answers into safer trade habits." },
      ]}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="faq-list">
        {faq.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <p className="advice-callout"><strong>Still unsure?</strong> Check the <a href="/sources/">source ledger</a>. If a mechanic is absent there, this site does not treat it as verified.</p>
    </GuidePage>
  );
}
