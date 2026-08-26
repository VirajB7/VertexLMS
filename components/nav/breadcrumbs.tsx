import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({
  items = [
    { label: "All Courses", href: "/courses" },
    { label: "Next.js for Production", href: "/courses/nextjs-for-production" },
    { label: "Data Fetching & Caching" },
  ],
  className,
}: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("inline-flex items-center text-body", className)}>
      <ol className="inline-flex items-center gap-2 flex-wrap">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              {idx > 0 && <ChevronRight className="w-4 h-4 text-neutral-400 shrink-0" aria-hidden="true" />}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-neutral-500 hover:text-neutral-900 font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(isLast ? "text-neutral-500 font-medium" : "text-neutral-500")}
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
