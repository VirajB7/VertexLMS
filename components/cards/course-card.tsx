import React from "react";
import { BarChart2, Clock, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface CourseCardProps {
  title?: string;
  description?: string;
  level?: string;
  duration?: string;
  modulesCount?: number;
  logoText?: string;
  layout?: "row" | "stacked";
  children?: React.ReactNode;
  className?: string;
}

export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = 12,
  logoText = "N",
  layout = "row",
  children,
  className,
}: CourseCardProps) {
  const isStacked = layout === "stacked";
  
  return (
    <Card className={cn(
      "flex flex-col justify-between h-full hover:border-neutral-300 transition-colors",
      isStacked ? "p-7" : "", 
      className
    )}>
      <div className={cn("space-y-4", isStacked ? "space-y-6" : "")}>
        {/* Course Logo Tile */}
        {children ? (
          children
        ) : (
          <div className={cn(
            "rounded-md bg-neutral-900 flex items-center justify-center text-white font-bold text-xl",
            isStacked ? "w-[72px] h-[72px] rounded-2xl" : "w-12 h-12"
          )}>
            {logoText}
          </div>
        )}

        {/* Content */}
        <div className="space-y-1.5">
          <h3 className={cn(
            "font-semibold text-neutral-900",
            isStacked ? "font-display text-[22px] leading-tight" : "text-heading-3"
          )}>{title}</h3>
          <p className={cn(
            "text-neutral-500 line-clamp-2",
            isStacked ? "text-[15px] leading-[25px]" : "text-body"
          )}>{description}</p>
        </div>
      </div>

      {/* Meta info row */}
      <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-small text-neutral-500 pt-6 mt-4 border-t border-neutral-100">
        <div className="inline-flex items-center gap-1.5">
          <BarChart2 className="w-4 h-4 text-neutral-500" />
          <span>{level}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-neutral-500" />
          <span>{duration}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-neutral-500" />
          <span>{modulesCount} modules</span>
        </div>
      </div>
    </Card>
  );
}
