"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CategoryNavigation } from "@/components/services/category-navigation";
import { ServiceComparisonTable } from "@/components/services/service-comparison-table";
import { ServiceCategorySection } from "@/components/services/service-category-section";
import { serviceCategories } from "@/lib/services-data";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="border-b bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Updated for 2025-2026 AI Trends
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              AI Services for 2025-2026
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Enterprise-grade AI capabilities powered by the latest innovations:
              Agentic AI, Small Language Models, RAG, Multimodal AI, and
              Hyperautomation. We help businesses leverage cutting-edge AI to
              automate, create, and innovate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>90% of enterprises using AI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>$80-100B agentic AI market by 2030</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>17 specialized AI services</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <CategoryNavigation categories={serviceCategories} />

      {/* Comparison Table */}
      <div className="container mx-auto px-4">
        <ServiceComparisonTable />
      </div>

      {/* Service Categories */}
      <div className="container mx-auto px-4 py-20">
        <div className="space-y-32">
          {serviceCategories.map((category, index) => (
            <ServiceCategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-background p-8 text-center shadow-lg md:p-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Not Sure Which Service You Need?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Book a free consultation and we&apos;ll help you identify the best
              AI solutions for your business. Our experts will assess your needs
              and recommend the right combination of services.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
