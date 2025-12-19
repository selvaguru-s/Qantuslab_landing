"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type?: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}

export function Accordion({
  type = "single",
  defaultValue,
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(() => {
    if (!defaultValue) return [];
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
  });

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        if (type === "single") {
          return prev.includes(value) ? [] : [value];
        }
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      });
    },
    [type]
  );

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

function AccordionItemBase({
  value,
  children,
  className,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b border-border", className)} data-value={value}>
      {children}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionTrigger must be used within an Accordion");
  }

  const { openItems, toggleItem } = context;

  const value =
    React.useContext(AccordionItemContext) ||
    (() => {
      throw new Error("AccordionTrigger must be used within an AccordionItem");
    })();

  const isOpen = openItems.includes(value);

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:underline",
        className
      )}
      onClick={() => toggleItem(value)}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionContent must be used within an Accordion");
  }

  const { openItems } = context;

  const value =
    React.useContext(AccordionItemContext) ||
    (() => {
      throw new Error("AccordionContent must be used within an AccordionItem");
    })();

  const isOpen = openItems.includes(value);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  );
}

// Create a context for the item value
const AccordionItemContext = React.createContext<string | undefined>(undefined);

// Wrap AccordionItem to provide value context
export function AccordionItem({
  value,
  children,
  ...props
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <AccordionItemBase value={value} {...props}>
        {children}
      </AccordionItemBase>
    </AccordionItemContext.Provider>
  );
}
