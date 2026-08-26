import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

export function Logo({ className = "", size = "md", showWordmark = true }: LogoProps) {
  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Vertex Orange Icon Mark */}
      <svg
        className={iconSizes[size]}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2 4L12 20L22 4H16L12 11L8 4H2Z"
          fill="#F97316"
        />
      </svg>
      {showWordmark && (
        <span
          className={`font-display font-bold tracking-tight text-neutral-900 ${textSizes[size]}`}
        >
          Vertex
        </span>
      )}
    </div>
  );
}
