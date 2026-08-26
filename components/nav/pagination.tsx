import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className,
}: PaginationProps) {
  const pages: (number | string)[] = [1, 2, 3, "...", 8];

  return (
    <nav aria-label="Pagination" className={cn("inline-flex items-center gap-1 text-body", className)}>
      <button
        onClick={() => onPageChange?.(Math.max(1, currentPage - 1))}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="w-9 h-9 flex items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((p, idx) => {
        if (typeof p === "string") {
          return (
            <span key={idx} className="w-9 h-9 flex items-center justify-center text-neutral-400 font-medium select-none">
              ...
            </span>
          );
        }

        const isActive = p === currentPage;

        return (
          <button
            key={idx}
            onClick={() => onPageChange?.(p)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "w-9 h-9 flex items-center justify-center rounded-md font-medium text-body transition-colors",
              isActive
                ? "border border-primary-500 text-primary-500 bg-white shadow-xs font-semibold"
                : "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
            )}
          >
            {p}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange?.(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="w-9 h-9 flex items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 disabled:opacity-40 disabled:pointer-events-none transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
