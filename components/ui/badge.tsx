import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "video" | "lesson" | "popular";
  children?: React.ReactNode;
}

export function Badge({ className, variant = "video", children, ...props }: BadgeProps) {
  const variantStyles = {
    video: "bg-primary-100 text-primary-500 font-semibold",
    lesson: "bg-[#EEF0FE] text-[#4F46E5] font-semibold",
    popular: "bg-primary-100 text-primary-500 font-bold",
  };

  const defaultText = {
    video: "VIDEO",
    lesson: "LESSON",
    popular: "POPULAR",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-2 py-1 text-[11px] leading-none uppercase tracking-wider rounded-[6px]",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children || defaultText[variant]}
    </span>
  );
}
