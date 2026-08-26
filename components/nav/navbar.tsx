import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  activePath?: string;
  className?: string;
}

export function Navbar({ activePath = "/courses", className }: NavbarProps) {
  const navItems = [
    { label: "Courses", href: "/courses" },
    { label: "My Learning", href: "/my-learning" },
  ];

  return (
    <header className={cn("w-full bg-white border-b border-neutral-200 py-4 px-6 md:px-8", className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Logo size="md" />
        </Link>
        <nav className="flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activePath === item.href || (item.href === "/courses" && activePath.startsWith("/courses"));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-body font-medium transition-colors hover:text-primary-500",
                  isActive ? "text-primary-500 font-semibold" : "text-neutral-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
