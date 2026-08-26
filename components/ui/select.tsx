import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[];
  label?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, children, label = "Select option", ...props }, ref) => {
    return (
      <div className="relative inline-flex items-center w-full max-w-xs">
        <label htmlFor="select-input" className="sr-only">
          {label}
        </label>
        <select
          ref={ref}
          id="select-input"
          className={cn(
            "w-full h-[44px] pl-4 pr-10 bg-white text-neutral-900 text-body rounded-[12px] border border-neutral-200 appearance-none focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors cursor-pointer font-medium",
            className
          )}
          {...props}
        >
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <ChevronDown className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
      </div>
    );
  }
);

Select.displayName = "Select";
