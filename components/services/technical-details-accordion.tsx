"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Blocks, Gauge, Plug, Rocket } from "lucide-react";
import type { TechnicalSpecs } from "@/lib/services-data";

interface TechnicalDetailsAccordionProps {
  details: TechnicalSpecs;
}

export function TechnicalDetailsAccordion({
  details,
}: TechnicalDetailsAccordionProps) {
  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <Accordion type="multiple" className="w-full">
        {/* Technology Stack */}
        <AccordionItem value="stack">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Blocks className="h-4 w-4 text-primary" />
              <span>Technology Stack</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {details.stack.map((category) => (
                <div key={category.category}>
                  <h4 className="mb-2 text-sm font-semibold">
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Architecture & Workflow */}
        <AccordionItem value="architecture">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-primary" />
              <span>Architecture & Workflow</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-semibold">Architecture</h4>
                <p className="text-sm text-muted-foreground">
                  {details.architecture.description}
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Workflow</h4>
                <ol className="space-y-2">
                  {details.architecture.workflow.map((step, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Metrics & Specifications */}
        <AccordionItem value="metrics">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-primary" />
              <span>Metrics & Specifications</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {details.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border bg-background p-4"
                >
                  <div className="text-2xl font-bold text-primary">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm font-medium">{metric.label}</div>
                  {metric.description && (
                    <div className="mt-2 text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Integration & Deployment */}
        <AccordionItem value="integration">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              <Plug className="h-4 w-4 text-primary" />
              <span>Integration & Deployment</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-sm font-semibold">
                  Platform Integrations
                </h4>
                <div className="flex flex-wrap gap-2">
                  {details.integration.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" size="sm">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">
                  Deployment Options
                </h4>
                <div className="flex flex-wrap gap-2">
                  {details.integration.deploymentOptions.map((option) => (
                    <Badge key={option} variant="outline" size="sm">
                      {option}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">API Support</h4>
                <div className="flex flex-wrap gap-2">
                  {details.integration.apiSupport.map((api) => (
                    <Badge key={api} variant="outline" size="sm">
                      {api}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
