import React from "react";
import { PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface LessonVideoCardProps {
  title?: string;
  description?: string;
  lessonLabel?: string;
  timestamp?: string;
  className?: string;
  onWatch?: () => void;
}

export function LessonVideoCard({
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonLabel = "Lesson 5.1",
  timestamp = "12:45",
  className,
  onWatch,
}: LessonVideoCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full hover:border-neutral-300 transition-colors", className)}>
      <div className="space-y-3">
        <Badge variant="video" />
        <div className="space-y-1.5">
          <h3 className="text-heading-3 font-semibold text-neutral-900">{title}</h3>
          <p className="text-body text-neutral-500 line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2 pt-6 mt-4 border-t border-neutral-100">
        <span className="text-small text-neutral-500 font-medium">
          {lessonLabel} · {timestamp}
        </span>
        <button
          onClick={onWatch}
          className="inline-flex items-center gap-1.5 text-body font-medium text-primary-500 hover:text-primary-600 transition-colors"
        >
          <PlayCircle className="w-4 h-4" />
          <span>Watch from {timestamp}</span>
        </button>
      </div>
    </Card>
  );
}
