import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "text";
  size?: "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      icon,
      iconPosition = "right",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none rounded-[12px]";

    const variantStyles: Record<string, string> = {
      primary:
        "bg-[#F97316] text-white hover:bg-[#EA580C] active:bg-[#EA580C] disabled:bg-[#FFEEE5] disabled:text-[#FED7AA]",
      secondary:
        "border border-[#F97316] text-[#F97316] bg-white hover:bg-[#FFEEE5] disabled:border-[#FED7AA] disabled:text-[#FED7AA] disabled:bg-white",
      tertiary:
        "border border-[#E2E8F0] text-[#0F172A] bg-white hover:bg-[#F8FAFC] disabled:border-[#E2E8F0] disabled:text-[#CBD5E1] disabled:bg-white",
      text:
        "text-[#F97316] bg-transparent hover:text-[#EA580C] disabled:text-[#FED7AA] p-0 h-auto font-medium border-0 rounded-none shadow-none",
    };

    const sizeStyles: Record<string, string> = {
      lg: "h-[44px] px-4 text-[15px] gap-2",
      md: "h-[44px] px-3 text-[14px] gap-2",
    };

    const effectiveSizeStyle = variant === "text" ? "text-[14px] font-medium gap-1.5" : sizeStyles[size];

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], effectiveSizeStyle, className)}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        {children && <span>{children}</span>}
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
