"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/lib/services-data";

interface CategoryNavigationProps {
  categories: ServiceCategory[];
}

export function CategoryNavigation({ categories }: CategoryNavigationProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -80% 0px",
      }
    );

    categories.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [categories]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="sticky top-20 z-10 mb-8 border-b bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto pb-2 md:justify-center">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeSection === category.id;

            return (
              <button
                key={category.id}
                onClick={() => scrollToSection(category.id)}
                className={cn(
                  "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="whitespace-nowrap">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
