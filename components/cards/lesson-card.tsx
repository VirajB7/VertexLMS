import React from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface LessonCardProps {
  title?: string;
  description?: string;
  moduleLabel?: string;
  className?: string;
  onView?: () => void;
}

export function LessonCard({
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleLabel = "Module 5",
  className,
  onView,
}: LessonCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full hover:border-neutral-300 transition-colors", className)}>
      <div className="space-y-3">
        <Badge variant="lesson" />
        <div className="space-y-1.5">
          <h3 className="text-heading-3 font-semibold text-neutral-900">{title}</h3>
          <p className="text-body text-neutral-500 line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 mt-4 border-t border-neutral-100">
        <span className="text-small text-neutral-500 font-medium">{moduleLabel}</span>
        <button
          onClick={onView}
          className="inline-flex items-center gap-1.5 text-body font-medium text-primary-500 hover:text-primary-600 transition-colors"
        >
          <span>View lesson</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </Card>
  );
}
