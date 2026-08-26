"use client";

import React from "react";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
  Eye,
  Grid,
  Target,
  Accessibility,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Navbar } from "@/components/nav/navbar";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Pagination } from "@/components/nav/pagination";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-neutral-900 px-6 py-10 md:px-12 md:py-16">
      <main className="max-w-[1400px] mx-auto space-y-16">
        {/* Header */}
        <header className="space-y-4 pb-8 border-b border-neutral-200">
          <Logo size="lg" />
          <div className="space-y-2 pt-2">
            <h1 className="text-display-1 font-bold text-neutral-900 tracking-tight font-display">
              Design System
            </h1>
            <p className="text-body-lg text-neutral-500 max-w-3xl leading-relaxed">
              A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences.
            </p>
          </div>
          <div className="text-small font-medium text-neutral-500 tracking-wider uppercase pt-2">
            VERSION 1.0 &nbsp;&bull;&nbsp; MAY 2025
          </div>
        </header>

        {/* Section 01 & 02 & 03: Colors & Typography */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* 01 COLORS */}
          <section className="xl:col-span-5 space-y-8 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-small font-bold text-primary-500">01</span>
              <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">COLORS</h2>
            </div>

            <div className="space-y-8">
              {/* Primary */}
              <div className="space-y-3">
                <h3 className="text-body font-semibold text-neutral-800">Primary</h3>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    { name: "Primary 500", hex: "#F97316", bg: "bg-[#F97316]" },
                    { name: "Primary 400", hex: "#FB923C", bg: "bg-[#FB923C]" },
                    { name: "Primary 300", hex: "#FDBA74", bg: "bg-[#FDBA74]" },
                    { name: "Primary 200", hex: "#FED7AA", bg: "bg-[#FED7AA]" },
                    { name: "Primary 100", hex: "#FFEEE5", bg: "bg-[#FFEEE5]" },
                  ].map((color) => (
                    <div key={color.name} className="space-y-2">
                      <div className={`h-16 rounded-xl ${color.bg} border border-neutral-200/60 shadow-2xs`} />
                      <div className="text-[12px] font-semibold text-neutral-900 leading-tight">{color.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono">{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Neutral */}
              <div className="space-y-3">
                <h3 className="text-body font-semibold text-neutral-800">Neutral</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { name: "Neutral 900", hex: "#0F172A", bg: "bg-[#0F172A]" },
                    { name: "Neutral 700", hex: "#334155", bg: "bg-[#334155]" },
                    { name: "Neutral 500", hex: "#64748B", bg: "bg-[#64748B]" },
                    { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-[#CBD5E1]" },
                    { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-[#E2E8F0]" },
                    { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-[#F1F5F9]" },
                    { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-[#FAFAFC]" },
                    { name: "White", hex: "#FFFFFF", bg: "bg-white border-neutral-300" },
                  ].map((color) => (
                    <div key={color.name} className="space-y-2">
                      <div className={`h-14 rounded-xl ${color.bg} border border-neutral-200/60 shadow-2xs`} />
                      <div className="text-[12px] font-semibold text-neutral-900 leading-tight">{color.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono">{color.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 02 TYPOGRAPHY & 03 TYPE SCALE */}
          <section className="xl:col-span-7 space-y-8 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
            {/* 02 TYPOGRAPHY */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-small font-bold text-primary-500">02</span>
                <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">TYPOGRAPHY</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-baseline gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="font-display text-5xl font-bold text-neutral-900">Ag</span>
                  <div className="space-y-1">
                    <h3 className="font-display text-heading-2 font-bold text-neutral-900">Playfair Display</h3>
                    <p className="text-small text-neutral-500">Elegant &bull; Readable &bull; Timeless</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-4 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="font-sans text-5xl font-bold text-neutral-900">Ag</span>
                  <div className="space-y-1">
                    <h3 className="font-sans text-heading-2 font-bold text-neutral-900">Inter</h3>
                    <p className="text-small text-neutral-500">Clean &bull; Modern &bull; Highly legible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 TYPE SCALE */}
            <div className="space-y-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center gap-2">
                <span className="text-small font-bold text-primary-500">03</span>
                <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">TYPE SCALE</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="text-neutral-500 text-small border-b border-neutral-200">
                      <th className="pb-3 px-2 font-medium">Style</th>
                      <th className="pb-3 px-2 font-medium">Font</th>
                      <th className="pb-3 px-2 font-medium">Size / Line Height</th>
                      <th className="pb-3 px-2 font-medium">Weight</th>
                      <th className="pb-3 px-2 font-medium">Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-body">
                    <tr>
                      <td className="py-3 px-2 font-bold font-display text-heading-2 text-neutral-900">Display 1</td>
                      <td className="py-3 px-2 text-neutral-500">Playfair Display</td>
                      <td className="py-3 px-2 text-neutral-500">48 / 56</td>
                      <td className="py-3 px-2 text-neutral-500">Bold</td>
                      <td className="py-3 px-2 text-neutral-500">Page titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-bold font-display text-heading-3 text-neutral-900">Display 2</td>
                      <td className="py-3 px-2 text-neutral-500">Playfair Display</td>
                      <td className="py-3 px-2 text-neutral-500">36 / 44</td>
                      <td className="py-3 px-2 text-neutral-500">Bold</td>
                      <td className="py-3 px-2 text-neutral-500">Section titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold text-heading-3 text-neutral-900">Heading 1</td>
                      <td className="py-3 px-2 text-neutral-500">Inter</td>
                      <td className="py-3 px-2 text-neutral-500">28 / 36</td>
                      <td className="py-3 px-2 text-neutral-500">Semi Bold</td>
                      <td className="py-3 px-2 text-neutral-500">Card titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-semibold text-body-lg text-neutral-900">Heading 2</td>
                      <td className="py-3 px-2 text-neutral-500">Inter</td>
                      <td className="py-3 px-2 text-neutral-500">22 / 30</td>
                      <td className="py-3 px-2 text-neutral-500">Semi Bold</td>
                      <td className="py-3 px-2 text-neutral-500">Sub section</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 font-medium text-body text-neutral-900">Heading 3</td>
                      <td className="py-3 px-2 text-neutral-500">Inter</td>
                      <td className="py-3 px-2 text-neutral-500">18 / 26</td>
                      <td className="py-3 px-2 text-neutral-500">Medium</td>
                      <td className="py-3 px-2 text-neutral-500">Small titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-body-lg text-neutral-900">Body Large</td>
                      <td className="py-3 px-2 text-neutral-500">Inter</td>
                      <td className="py-3 px-2 text-neutral-500">16 / 24</td>
                      <td className="py-3 px-2 text-neutral-500">Regular</td>
                      <td className="py-3 px-2 text-neutral-500">Body copy</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-body text-neutral-900">Body</td>
                      <td className="py-3 px-2 text-neutral-500">Inter</td>
                      <td className="py-3 px-2 text-neutral-500">14 / 20</td>
                      <td className="py-3 px-2 text-neutral-500">Regular</td>
                      <td className="py-3 px-2 text-neutral-500">Supporting text</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-small text-neutral-900">Small</td>
                      <td className="py-3 px-2 text-neutral-500">Inter</td>
                      <td className="py-3 px-2 text-neutral-500">12 / 16</td>
                      <td className="py-3 px-2 text-neutral-500">Regular</td>
                      <td className="py-3 px-2 text-neutral-500">Captions, meta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* Section 04 & 05: Spacing, Radius & Shadows */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* 04 SPACING SYSTEM */}
          <section className="xl:col-span-5 space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-small font-bold text-primary-500">04</span>
              <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">SPACING SYSTEM</h2>
            </div>
            <p className="text-small text-neutral-500 font-medium">Base unit: 4px</p>

            <div className="overflow-x-auto pb-4 pt-2">
              <div className="flex items-end gap-5 min-w-[500px]">
                {[
                  { px: 4, rem: "0.25rem", height: 20 },
                  { px: 8, rem: "0.5rem", height: 28 },
                  { px: 12, rem: "0.75rem", height: 36 },
                  { px: 16, rem: "1rem", height: 44 },
                  { px: 24, rem: "1.5rem", height: 56 },
                  { px: 32, rem: "2rem", height: 68 },
                  { px: 40, rem: "2.5rem", height: 80 },
                  { px: 48, rem: "3rem", height: 92 },
                  { px: 64, rem: "4rem", height: 108 },
                ].map((space) => (
                  <div key={space.px} className="flex flex-col items-center gap-2.5 shrink-0">
                    <div
                      className="bg-[#FFEEE5] border border-[#FED7AA] rounded-md"
                      style={{ width: `${Math.max(space.px * 0.9, 16)}px`, height: `${space.height}px` }}
                    />
                    <span className="text-small font-bold text-neutral-900">{space.px}</span>
                    <span className="text-[11px] text-neutral-500 font-mono">({space.rem})</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 05 RADIUS & SHADOWS */}
          <section className="xl:col-span-7 space-y-8 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-small font-bold text-primary-500">05</span>
              <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">RADIUS & SHADOWS</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-body font-semibold text-neutral-800 mb-4">Radius</h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                  {[
                    { name: "4px", label: "(xs)", radius: "rounded-[4px]" },
                    { name: "8px", label: "(sm)", radius: "rounded-[8px]" },
                    { name: "12px", label: "(md)", radius: "rounded-[12px]" },
                    { name: "16px", label: "(lg)", radius: "rounded-[16px]" },
                    { name: "24px", label: "(xl)", radius: "rounded-[24px]" },
                    { name: "Full", label: "(circle)", radius: "rounded-full" },
                  ].map((item) => (
                    <div key={item.name} className="flex flex-col items-center gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-100">
                      <div className={`w-12 h-12 bg-white border border-neutral-300 shadow-2xs ${item.radius}`} />
                      <span className="text-small font-semibold text-neutral-900">{item.name}</span>
                      <span className="text-[11px] text-neutral-500 font-mono">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-body font-semibold text-neutral-800 mb-4">Shadows</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: "Sm", css: "0 1px 2px rgba(15, 23, 42, 0.05)", shadow: "shadow-sm" },
                    { name: "Md", css: "0 4px 12px rgba(15, 23, 42, 0.08)", shadow: "shadow-md" },
                    { name: "Lg", css: "0 12px 24px rgba(15, 23, 42, 0.10)", shadow: "shadow-lg" },
                    { name: "Xl", css: "0 20px 40px rgba(15, 23, 42, 0.12)", shadow: "shadow-xl" },
                  ].map((item) => (
                    <div key={item.name} className={`p-4 bg-white rounded-xl border border-neutral-200/80 ${item.shadow} space-y-1.5`}>
                      <div className="text-small font-bold text-neutral-900">{item.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono leading-relaxed">{item.css}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Section 06 & 07: Icons & Buttons */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
          {/* 06 ICONS */}
          <section className="xl:col-span-4 space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-small font-bold text-primary-500">06</span>
              <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">ICONS</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-small font-semibold text-neutral-500 mb-3">Outline Style</h3>
                <div className="flex flex-wrap gap-3 text-neutral-900">
                  {[Bell, Search, Play, FileText, Bookmark, BarChart2, Clock, User, ChevronRight].map((Icon, i) => (
                    <div key={i} className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-xl hover:bg-neutral-100 transition-colors">
                      <Icon className="w-6 h-6 stroke-[2px]" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-small font-semibold text-neutral-500 mb-3">Filled Style</h3>
                <div className="flex flex-wrap gap-3 text-neutral-900">
                  {[Bell, Search, Play, FileText, Bookmark, BarChart2, Clock, User, ChevronRight].map((Icon, i) => (
                    <div key={i} className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-xl hover:bg-neutral-100 transition-colors">
                      <Icon className="w-6 h-6 fill-neutral-900 stroke-[1px]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-neutral-50 p-5 rounded-xl border border-neutral-200/80 space-y-2">
                <h3 className="text-small font-bold text-neutral-900">Icon Specs</h3>
                <ul className="list-disc list-inside text-small text-neutral-600 space-y-1">
                  <li>24x24px grid</li>
                  <li>2px stroke width (outline)</li>
                  <li>Rounded line caps</li>
                  <li>Consistent optical balance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 07 BUTTONS */}
          <section className="xl:col-span-8 space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs">
            <div className="flex items-center gap-2">
              <span className="text-small font-bold text-primary-500">07</span>
              <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">BUTTONS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr className="text-neutral-500 text-small border-b border-neutral-200">
                      <th className="pb-3 px-3 font-medium">State</th>
                      <th className="pb-3 px-3 font-medium">Primary</th>
                      <th className="pb-3 px-3 font-medium">Secondary</th>
                      <th className="pb-3 px-3 font-medium">Tertiary</th>
                      <th className="pb-3 px-3 font-medium">Text</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    <tr>
                      <td className="py-4 px-3 text-small font-semibold text-neutral-500">Default</td>
                      <td className="py-4 px-3">
                        <Button variant="primary">Get Started</Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="secondary">Explore Courses</Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="tertiary" icon={<ExternalLink className="w-4 h-4" />}>
                          View Lesson
                        </Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="text" icon={<Play className="w-4 h-4 fill-current" />}>
                          Watch Video
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-3 text-small font-semibold text-neutral-500">Hover</td>
                      <td className="py-4 px-3">
                        <Button variant="primary" className="bg-primary-600">Get Started</Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="secondary" className="bg-primary-50">Explore Courses</Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="tertiary" className="bg-neutral-50" icon={<ExternalLink className="w-4 h-4" />}>
                          View Lesson
                        </Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="text" className="text-primary-600" icon={<Play className="w-4 h-4 fill-current" />}>
                          Watch Video
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-3 text-small font-semibold text-neutral-500">Disabled</td>
                      <td className="py-4 px-3">
                        <Button variant="primary" disabled>Get Started</Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="secondary" disabled>Explore Courses</Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="tertiary" disabled icon={<ExternalLink className="w-4 h-4" />}>
                          View Lesson
                        </Button>
                      </td>
                      <td className="py-4 px-3">
                        <Button variant="text" disabled icon={<Play className="w-4 h-4 fill-current" />}>
                          Watch Video
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="lg:col-span-4 bg-neutral-50 p-5 rounded-xl border border-neutral-200/80 space-y-2">
                <h3 className="text-small font-bold text-neutral-900">Button Specs</h3>
                <ul className="list-disc list-inside text-small text-neutral-600 space-y-1">
                  <li>Height: 44px (default)</li>
                  <li>Padding: 0 16px (lg), 0 12px (md)</li>
                  <li>Radius: 12px</li>
                  <li>Font: Inter Medium (14–16px)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Section 08, 09, 10, 11: Inputs, Badges, Status, Progress */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs space-y-8">
          {/* 08 INPUTS */}
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-small font-bold text-primary-500">08</span>
              <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">INPUTS</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="text-small font-semibold text-neutral-700">Search / Text Input</span>
                  <SearchInput />
                </div>

                <div className="space-y-2">
                  <span className="text-small font-semibold text-neutral-700">Select</span>
                  <Select
                    options={[
                      { value: "most-relevant", label: "Most Relevant" },
                      { value: "newest", label: "Newest First" },
                      { value: "popular", label: "Most Popular" },
                    ]}
                  />
                </div>
              </div>

              <div className="lg:col-span-4 bg-neutral-50 p-5 rounded-xl border border-neutral-200/80 space-y-2">
                <h3 className="text-small font-bold text-neutral-900">Field Specs</h3>
                <ul className="list-disc list-inside text-small text-neutral-600 space-y-1">
                  <li>Height: 44px</li>
                  <li>Radius: 12px</li>
                  <li>Border: 1px solid #E2E8F0</li>
                  <li>Padding: 0 16px</li>
                  <li>Focus: Border color #FB923C</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 09 BADGES, 10 STATUS, 11 PROGRESS BAR */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-neutral-100">
            {/* 09 BADGES / TAGS */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-small font-bold text-primary-500">09</span>
                <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">BADGES / TAGS</h2>
              </div>
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium text-neutral-500 block">Video</span>
                  <Badge variant="video" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium text-neutral-500 block">Lesson</span>
                  <Badge variant="lesson" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[11px] font-medium text-neutral-500 block">Popular</span>
                  <Badge variant="popular" />
                </div>
              </div>
            </section>

            {/* 10 STATUS / INDICATORS */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-small font-bold text-primary-500">10</span>
                <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">STATUS / INDICATORS</h2>
              </div>
              <div className="flex items-center gap-4 flex-wrap pt-2">
                <StatusIndicator status="in-progress" />
                <StatusIndicator status="completed" />
                <StatusIndicator status="now-playing" />
                <StatusIndicator status="locked" />
              </div>
            </section>

            {/* 11 PROGRESS BAR */}
            <section className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-small font-bold text-primary-500">11</span>
                <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">PROGRESS BAR</h2>
              </div>
              <div className="pt-2">
                <ProgressBar value={35} />
              </div>
            </section>
          </div>
        </div>

        {/* Section 12: Cards */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-small font-bold text-primary-500">12</span>
            <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">CARDS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <span className="text-small text-neutral-500 font-medium block">Course Card</span>
              <CourseCard />
            </div>
            <div className="space-y-2">
              <span className="text-small text-neutral-500 font-medium block">Lesson Card (Video)</span>
              <LessonVideoCard />
            </div>
            <div className="space-y-2">
              <span className="text-small text-neutral-500 font-medium block">Lesson Card (Lesson)</span>
              <LessonCard />
            </div>
            <div className="space-y-2">
              <span className="text-small text-neutral-500 font-medium block">Resource Card</span>
              <ResourceCard />
            </div>
          </div>
        </section>

        {/* Section 13: Navigation */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-small font-bold text-primary-500">13</span>
            <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">NAVIGATION</h2>
          </div>

          <div className="space-y-6 bg-neutral-50 p-6 rounded-xl border border-neutral-200/80">
            <div>
              <span className="text-small text-neutral-500 font-medium mb-3 block">Navbar</span>
              <Navbar />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-neutral-200/80">
              <div>
                <span className="text-small text-neutral-500 font-medium mb-3 block">Breadcrumbs</span>
                <Breadcrumbs />
              </div>

              <div>
                <span className="text-small text-neutral-500 font-medium mb-3 block">Pagination</span>
                <Pagination currentPage={1} totalPages={8} />
              </div>
            </div>
          </div>
        </section>

        {/* Section 14: Principles */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200/80 shadow-2xs space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-small font-bold text-primary-500">14</span>
            <h2 className="text-small font-bold text-neutral-900 tracking-wider uppercase">PRINCIPLES</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Clarity First",
                desc: "Every element should communicate clearly.",
              },
              {
                icon: Grid,
                title: "Consistency",
                desc: "Use components and patterns consistently across the platform.",
              },
              {
                icon: Target,
                title: "Focus & Calm",
                desc: "Remove noise and help learners focus on what matters.",
              },
              {
                icon: Accessibility,
                title: "Accessible",
                desc: "Design with accessibility and inclusivity in mind.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-neutral-50 border border-neutral-200/80 rounded-xl space-y-3 hover:bg-white hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-2xs">
                  <item.icon className="w-5 h-5 text-neutral-800" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-body font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-small text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
