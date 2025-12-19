import Link from "next/link";
import { Bot, Pen, Code, ArrowRight, Sparkles } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agentic Systems",
    description:
      "Deploy autonomous AI agents that handle complex workflows end-to-end. From agentic AI to hyperautomation, we help you scale operations without scaling headcount.",
    href: "/services#automation",
    subcategoryCount: 5,
    trending: ["Agentic AI", "Hyperautomation"],
  },
  {
    icon: Pen,
    title: "Multimodal Content & Marketing",
    description:
      "Generate text, images, video, and audio content powered by RAG and multimodal AI. Create high-quality content at scale with knowledge-base backing and brand consistency.",
    href: "/services#content",
    subcategoryCount: 5,
    trending: ["Multimodal AI", "RAG-Powered Content"],
  },
  {
    icon: Code,
    title: "Custom AI & Reasoning Systems",
    description:
      "Build specialized AI solutions from reasoning engines to edge deployment. Custom SLMs, AI governance, RAG systems, and advanced reasoning capabilities tailored to your needs.",
    href: "/services#development",
    subcategoryCount: 7,
    trending: ["AI Reasoning", "Custom SLMs", "AI Governance"],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Badge variant="gradient" className="mb-4">
            <Sparkles className="h-3 w-3 mr-1" />
            Updated for 2025-2026
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            AI Services That Drive Results
          </h2>
          <p className="text-muted-foreground">
            Enterprise-grade AI capabilities powered by the latest 2025-2026
            innovations. We deliver specialized solutions in Agentic AI, RAG,
            Multimodal AI, and more.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="gradient-border">
              <Card className="h-full group">
                <CardHeader>
                  <div className="mb-4 flex items-start justify-between">
                    <div className="icon-orb-orange">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg glass-strong">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <Badge variant="secondary" size="sm">
                      {service.subcategoryCount} services
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
                      Trending 2025-2026
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.trending.map((trend) => (
                        <Badge key={trend} variant="outline" size="sm">
                          {trend}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
