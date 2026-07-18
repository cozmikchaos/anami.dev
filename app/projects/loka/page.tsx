import type { Metadata } from "next";
import { LokaProject } from "./LokaProject";

export const metadata: Metadata = {
  title: "Loka — Immersive AI Learning",
  description: "An immersive learning platform where AI turns lessons into explorable worlds.",
};

export default function LokaPage() {
  return <LokaProject />;
}
