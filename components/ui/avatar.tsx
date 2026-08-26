import React from "react";
import { cn } from "@/lib/utils";

export interface AvatarProps {
  initials: string;
  className?: string;
}

export function Avatar({ initials, className }: AvatarProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-12 h-12 rounded-full bg-neutral-200 text-neutral-700 font-semibold text-body-lg border border-neutral-300",
        className
      )}
    >
      {initials}
    </div>
  );
}
