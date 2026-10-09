import Script from "next/script";

const CONFIG = {
  adNetwork: "adsterra",
  status: "ready",
  cleanPage: false,
  slots: [
    {
      id: "top",
      format: "banner",
      variants: [
        {
          minWidth: 768,
          width: 728,
          height: 90,
          key: "e553816d6698fde96a93080cd4d1156b",
          scriptUrl: "https://bauval.org/22/e553816d6698fde96a93080cd4d1156b",
        },
        {
          minWidth: 0,
          width: 320,
          height: 50,
          key: "1ffb4f9c80ca657ce0538f9d05d4d9b3",
          scriptUrl: "https://bauval.org/22/1ffb4f9c80ca657ce0538f9d05d4d9b3",
        },
      ],
    },
    {
      id: "mid",
      format: "native",
      containerId: "container-b9154c9f7a4e45afc8952251c90f87a6",
      scriptUrl: "https://bauval.org/21/b9154c9f7a4e45afc8952251c90f87a6",
    },
    {
      id: "bottom",
      format: "banner",
      width: 300,
      height: 250,
      key: "920a3e383991bcacbfe46174774ba573",
      scriptUrl: "https://bauval.org/22/920a3e383991bcacbfe46174774ba573",
    },
  ],
  enablePopunder: false,
  enableSocialBar: false,
  popunderScriptUrl: "",
  socialBarScriptUrl: "",
};

export function AdSlot({ slot }: { slot: "top" | "mid" | "bottom" }) {
  return (
    <aside className="ad-placement" data-ad-slot={slot} aria-label="Advertisement">
      <span className="ad-label">Advertisement</span>
      <div className="ad-host" data-ad-host={slot} />
    </aside>
  );
}

export function AdsterraRuntime() {
  return (
    <>
      <style id="adsterra-placement-css">{`
        .ad-placement{margin:1rem 0;padding:.5rem;border:1px dashed rgba(127,127,127,.45)}
        .ad-label{display:block;font-size:.75rem;letter-spacing:.04em;text-transform:uppercase;opacity:.7}
      `}</style>
      <script
        type="application/json"
        id="adsterra-config"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(CONFIG) }}
      />
      <Script src="/adsterra/runtime.js" strategy="lazyOnload" />
    </>
  );
}
