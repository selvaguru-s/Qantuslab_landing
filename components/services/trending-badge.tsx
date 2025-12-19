import { Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TrendingBadgeProps {
  trendInfo?: string;
  className?: string;
}

export function TrendingBadge({ trendInfo, className }: TrendingBadgeProps) {
  return (
    <div className={cn("group relative inline-flex", className)}>
      <Badge
        variant="gradient"
        className="animate-pulse-glow flex items-center gap-1"
      >
        <Sparkles className="h-3 w-3" />
        <span>Trending 2025-2026</span>
      </Badge>
      {trendInfo && (
        <div className="absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-md bg-popover px-3 py-2 text-xs text-popover-foreground shadow-md group-hover:block">
          {trendInfo}
          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-4 border-transparent border-t-popover" />
        </div>
      )}
    </div>
  );
}
