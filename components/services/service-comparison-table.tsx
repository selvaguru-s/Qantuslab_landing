import { Check, X } from "lucide-react";
import { serviceComparisons } from "@/lib/services-data";
import { cn } from "@/lib/utils";

export function ServiceComparisonTable() {
  const renderCell = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="mx-auto h-5 w-5 text-green-500" />
      ) : (
        <X className="mx-auto h-5 w-5 text-muted-foreground/30" />
      );
    }
    return <span className="text-sm">{value}</span>;
  };

  return (
    <div className="my-16">
      <div className="mb-8 text-center">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
          Service Comparison
        </h2>
        <p className="text-muted-foreground">
          Compare features across our three main service categories
        </p>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-lg border md:block">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">
                  Automation
                  <div className="mt-1 text-xs font-normal text-muted-foreground">
                    & Agentic Systems
                  </div>
                </th>
                <th className="p-4 text-center font-semibold">
                  Content
                  <div className="mt-1 text-xs font-normal text-muted-foreground">
                    & Marketing
                  </div>
                </th>
                <th className="p-4 text-center font-semibold">
                  Development
                  <div className="mt-1 text-xs font-normal text-muted-foreground">
                    & Reasoning
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {serviceComparisons.map((comparison, index) => (
                <tr
                  key={comparison.feature}
                  className={cn(
                    "border-b transition-colors hover:bg-muted/30",
                    index % 2 === 0 && "bg-muted/10"
                  )}
                >
                  <td className="p-4">
                    <div className="font-medium">{comparison.feature}</div>
                    {comparison.description && (
                      <div className="mt-1 text-xs text-muted-foreground">
                        {comparison.description}
                      </div>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {renderCell(comparison.automation)}
                  </td>
                  <td className="p-4 text-center">
                    {renderCell(comparison.content)}
                  </td>
                  <td className="p-4 text-center">
                    {renderCell(comparison.development)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="space-y-4 md:hidden">
        {serviceComparisons.map((comparison) => (
          <div
            key={comparison.feature}
            className="rounded-lg border bg-card p-4"
          >
            <h3 className="mb-3 font-semibold">{comparison.feature}</h3>
            {comparison.description && (
              <p className="mb-4 text-sm text-muted-foreground">
                {comparison.description}
              </p>
            )}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Automation & Agentic Systems</span>
                {renderCell(comparison.automation)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Content & Marketing</span>
                {renderCell(comparison.content)}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Development & Reasoning</span>
                {renderCell(comparison.development)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
