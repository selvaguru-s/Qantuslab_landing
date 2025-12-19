import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Services 2025-2026 - Agentic AI, RAG, Multimodal Solutions",
  description:
    "Enterprise AI services: Agentic AI automation, multimodal content generation, RAG systems, custom SLM development, AI governance, and reasoning engines. Updated for 2025-2026 trends.",
  keywords: [
    "agentic AI",
    "AI agents 2025",
    "hyperautomation",
    "RAG systems",
    "small language models",
    "multimodal AI",
    "AI reasoning",
    "knowledge graphs",
    "edge AI",
    "AI governance",
    "AI automation",
    "custom AI development",
  ].join(", "),
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
