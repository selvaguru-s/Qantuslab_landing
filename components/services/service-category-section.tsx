"use client";

import { ServiceSubcategoryCard } from "./service-subcategory-card";
import type { ServiceCategory } from "@/lib/services-data";
import { CheckCircle } from "lucide-react";

interface ServiceCategorySectionProps {
  category: ServiceCategory;
  index: number;
}

export function ServiceCategorySection({
  category,
  index,
}: ServiceCategorySectionProps) {
  const Icon = category.icon;

  return (
    <section id={category.id} className="scroll-mt-24">
      {/* Category Header */}
      <div className="mb-12 text-center">
        <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
          <Icon className="h-8 w-8" />
        </div>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{category.title}</h2>
        <p className="mx-auto mb-6 max-w-3xl text-lg text-muted-foreground">
          {category.description}
        </p>
        <p className="text-sm font-medium text-primary">{category.tagline}</p>

        {/* Category-level Benefits */}
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {category.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center justify-center gap-2 rounded-lg bg-muted/50 p-3 text-sm"
              >
                <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subcategory Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {category.subcategories.map((subcategory) => (
          <ServiceSubcategoryCard
            key={subcategory.id}
            subcategory={subcategory}
          />
        ))}
      </div>
    </section>
  );
}
