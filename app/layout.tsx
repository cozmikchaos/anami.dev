import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./projects/loka/loka.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://anami.dev"),
  title: { default: "Anamika Hareesh — Student builder", template: "%s — anami.dev" },
  description: "Anamika Hareesh is a high school student building apps and exploring agentic AI and AI-powered education.",
  keywords: ["Anamika", "app developer", "AI developer", "student builder", "portfolio"],
  openGraph: { title: "Anamika Hareesh — Building apps that matter.", description: "High school student exploring agentic AI and AI-powered education.", type: "website", siteName: "anami.dev" },
  twitter: { card: "summary_large_image", title: "Anamika Hareesh — Student builder", description: "Building apps that matter." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark"><body className={`${geist.variable} ${mono.variable}`}>{children}</body></html>;
}
