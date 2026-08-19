import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tradeweapons.wiki"),
  title: {
    default: "Trade Weapons Wiki — Verified Player Guide",
    template: "%s | Trade Weapons Wiki",
  },
  description:
    "Independent, source-checked guides for Trade Weapons on Roblox.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    siteName: "Trade Weapons Wiki",
    title: "Trade Weapons Wiki — Verified Player Guide",
    description: "Read the offer. Compare the evidence. Trade with clear eyes.",
    url: "https://tradeweapons.wiki/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Trade Weapons Wiki offer comparison" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#080f1d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
