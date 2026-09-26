import type { Metadata } from "next";
import { Figtree, Sora } from "next/font/google";
import "@cirofy/ui/styles.css";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cirofy — Pazaryeri kârlılık platformu",
  description:
    "Satış değil, cebinize kalan kâr. Sipariş net kârı, hakediş farkları ve kampanya öncesi marj filtresi tek panelde.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${sora.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
