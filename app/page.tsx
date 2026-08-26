import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/home/hero";
import { ChartDecoration } from "@/components/home/chart-decoration";
import { CourseCard } from "@/components/cards/course-card";
import { NextJsMark, DockerMark, TypeScriptMark } from "@/components/brand/course-marks";

// Placeholder data for courses
const courses = [
  {
    id: "nextjs",
    title: "Next.js for Production",
    description: "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modulesCount: 12,
    mark: <NextJsMark />,
  },
  {
    id: "docker",
    title: "Docker Essentials",
    description: "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modulesCount: 8,
    mark: <DockerMark />,
  },
  {
    id: "typescript",
    title: "TypeScript Deep Dive",
    description: "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modulesCount: 10,
    mark: <TypeScriptMark />,
  },
];

export default function HomePage() {
  return (
    <PageFrame>
      <SiteHeader />
      
      <main className="flex-1 w-full pb-32">
        <Hero />

        {/* Full bleed hairline divider */}
        <div className="w-full h-px bg-[var(--color-canvas-line)]" aria-hidden="true" />

        {/* All Courses Section */}
        <section className="px-6 md:px-[82px] pt-12 pb-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-[30px] font-bold text-neutral-900">All Courses</h2>
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            >
              View all courses
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                layout="stacked"
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                modulesCount={course.modulesCount}
                className="h-[373px] bg-white border-neutral-200"
              >
                {course.mark}
              </CourseCard>
            ))}
          </div>
        </section>

        {/* Footer Note */}
        <div className="flex items-center justify-center gap-4 px-6 md:px-[82px] text-neutral-600 mb-8">
          <div className="flex-1 h-px bg-[var(--color-canvas-line)]" aria-hidden="true" />
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-primary-400" />
            <span className="text-[17px]">New courses and lessons added every week.</span>
          </div>
          <div className="flex-1 h-px bg-[var(--color-canvas-line)]" aria-hidden="true" />
        </div>
      </main>

      <ChartDecoration />
    </PageFrame>
  );
}
