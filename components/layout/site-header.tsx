import React from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Avatar } from "@/components/ui/avatar";

export function SiteHeader() {
  return (
    <header className="h-[96px] w-full border-b border-[var(--color-canvas-line)] flex items-center justify-between px-6 md:px-10">
      <div className="flex items-center gap-12">
        <Logo size="md" />
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/courses"
            className="text-[15px] font-medium text-neutral-900 hover:text-primary-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
          >
            Courses
          </Link>
          <Link
            href="/my-learning"
            className="text-[15px] font-medium text-neutral-900 hover:text-primary-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
          >
            My Learning
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-6">
        <button
          aria-label="Notifications"
          className="p-2 text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <Bell className="w-6 h-6 stroke-[1.5px]" />
        </button>
        <Avatar initials="JD" />
      </div>
    </header>
  );
}
