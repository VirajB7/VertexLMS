import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  shortcut?: string;
  size?: "md" | "lg";
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, shortcut = "⌘ K", placeholder = "Search anything...", size = "md", ...props }, ref) => {
    const isLg = size === "lg";
    
    return (
      <div className={cn("relative flex items-center w-full", isLg ? "max-w-none" : "max-w-md")}>
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <Search className={cn("absolute text-neutral-500 pointer-events-none", isLg ? "left-6 w-6 h-6" : "left-4 w-5 h-5")} />
        <input
          ref={ref}
          id="search-input"
          type="search"
          placeholder={placeholder}
          className={cn(
            "w-full bg-white text-neutral-900 placeholder:text-neutral-500 rounded-[12px] border border-neutral-200 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors",
            isLg ? "h-[88px] pl-[68px] pr-20 text-[18px]" : "h-[44px] pl-11 pr-14 text-body",
            className
          )}
          {...props}
        />
        {shortcut && (
          <span className={cn(
            "absolute select-none pointer-events-none font-medium text-neutral-500 bg-neutral-100 border border-neutral-200 rounded",
            isLg ? "right-6 px-3 py-1.5 text-[15px]" : "right-3.5 px-1.5 py-0.5 text-small"
          )}>
            {shortcut}
          </span>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
