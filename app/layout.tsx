import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anami.dev"),
  title: { default: "Anamika — Apps, AI & experiments", template: "%s — anami.dev" },
  description: "Independent apps, intelligent systems, and ambitious experiments by student developer Anamika.",
  keywords: ["Anamika", "app developer", "AI developer", "student builder", "portfolio"],
  openGraph: { title: "Anamika — I make ideas real.", description: "Apps, AI & ambitious experiments.", type: "website", siteName: "anami.dev" },
  twitter: { card: "summary_large_image", title: "Anamika — I make ideas real.", description: "Apps, AI & ambitious experiments." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
