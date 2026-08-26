import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-24 pb-20 px-6">
      {/* Eyebrow Pill */}
      <div className="h-10 px-6 rounded-full border border-primary-200 bg-white flex items-center justify-center mb-8 shadow-sm">
        <span className="text-[11px] font-bold text-primary-500 tracking-[0.12em] uppercase">
          Intelligent Learning
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-display text-[48px] md:text-[60px] leading-[1.1] md:leading-[74px] font-bold text-neutral-900 max-w-2xl mb-6">
        Search your learning<br />in plain English.
      </h1>

      {/* Subtitle */}
      <p className="text-[18px] leading-[33px] text-neutral-500 max-w-2xl mb-10">
        Vertex understands what you want to learn and<br className="hidden sm:block" />
        finds the exact lessons across all your courses.
      </p>

      {/* CTA */}
      <Button variant="primary" size="xl" className="mb-14">
        <Link href="/courses" className="flex items-center gap-2 w-full h-full justify-center">
          Explore Courses
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Button>

      {/* Search Input */}
      <div className="w-full max-w-[750px]">
        <SearchInput size="lg" placeholder="Ask anything about your learning..." />
      </div>
    </section>
  );
}
