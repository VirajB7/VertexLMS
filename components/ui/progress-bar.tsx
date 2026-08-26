import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  showLabel?: boolean;
  labelPosition?: "right" | "top";
}

export function ProgressBar({
  value,
  showLabel = true,
  className,
  ...props
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full flex items-center gap-4", className)} {...props}>
      <div
        className="relative h-2 w-full bg-neutral-100 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-body text-neutral-900 shrink-0 font-normal">
          <span className="font-bold">{clampedValue}%</span> complete
        </span>
      )}
    </div>
  );
}
