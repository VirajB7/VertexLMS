import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  shortcut?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, shortcut = "⌘ K", placeholder = "Search anything...", ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full max-w-md">
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <Search className="absolute left-4 w-5 h-5 text-neutral-500 pointer-events-none" />
        <input
          ref={ref}
          id="search-input"
          type="search"
          placeholder={placeholder}
          className={cn(
            "w-full h-[44px] pl-11 pr-14 bg-white text-neutral-900 placeholder:text-neutral-500 text-body rounded-[12px] border border-neutral-200 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors",
            className
          )}
          {...props}
        />
        {shortcut && (
          <span className="absolute right-3.5 select-none pointer-events-none text-small font-medium text-neutral-500 bg-neutral-100 border border-neutral-200 rounded px-1.5 py-0.5">
            {shortcut}
          </span>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
