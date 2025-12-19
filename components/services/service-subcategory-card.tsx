"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { TrendingBadge } from "./trending-badge";
import { TechnicalDetailsAccordion } from "./technical-details-accordion";
import type { ServiceSubcategory } from "@/lib/services-data";

interface ServiceSubcategoryCardProps {
  subcategory: ServiceSubcategory;
}

export function ServiceSubcategoryCard({
  subcategory,
}: ServiceSubcategoryCardProps) {
  const [showTechnical, setShowTechnical] = useState(false);
  const Icon = subcategory.icon;

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          {subcategory.trending && (
            <TrendingBadge trendInfo={subcategory.trendInfo} />
          )}
        </div>
        <CardTitle className="text-xl">{subcategory.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">{subcategory.description}</p>

        {/* Benefits */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Key Benefits</h4>
          <ul className="space-y-2">
            {subcategory.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Use Cases</h4>
          <ul className="space-y-2">
            {subcategory.useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-medium">
                  {index + 1}
                </span>
                <span className="text-sm text-muted-foreground">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technical Details Toggle */}
        <div className="pt-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setShowTechnical(!showTechnical)}
          >
            {showTechnical ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Hide Technical Details
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                View Technical Details
              </>
            )}
          </Button>
        </div>

        {/* Technical Details Accordion */}
        {showTechnical && (
          <div className="animate-in slide-in-from-top-2 duration-200">
            <TechnicalDetailsAccordion details={subcategory.technicalDetails} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
