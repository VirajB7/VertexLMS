import React from "react";

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--color-canvas)] relative overflow-hidden flex justify-center">
      {/* Left Gutter Pattern */}
      <div
        className="hidden lg:block absolute top-0 left-0 bottom-0 w-[calc(50%-480px)] opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 10px, var(--color-canvas-line) 10px, var(--color-canvas-line) 11px)",
        }}
      />

      {/* Main 960px Column */}
      <div className="relative w-full max-w-[960px] bg-[var(--color-canvas)] border-x border-[var(--color-canvas-line)] flex flex-col min-h-screen">
        {children}
      </div>

      {/* Right Gutter Pattern */}
      <div
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-[calc(50%-480px)] opacity-50"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 10px, var(--color-canvas-line) 10px, var(--color-canvas-line) 11px)",
        }}
      />
    </div>
  );
}
