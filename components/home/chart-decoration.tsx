import React from "react";

export function ChartDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[200px] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* 
        The decoration uses a series of blurred, semi-transparent bars
        in the primary orange color to simulate the chart-like 
        bar clusters seen in the reference design.
      */}
      <div className="absolute bottom-0 w-full flex justify-between items-end px-12 opacity-80 blur-xl">
        {/* Left Cluster */}
        <div className="flex items-end gap-2 h-full">
          <div className="w-12 h-[80px] bg-primary-400 opacity-60 rounded-t" />
          <div className="w-16 h-[120px] bg-primary-500 opacity-70 rounded-t" />
          <div className="w-14 h-[160px] bg-primary-300 opacity-80 rounded-t" />
          <div className="w-12 h-[100px] bg-primary-400 opacity-60 rounded-t" />
          <div className="w-16 h-[140px] bg-primary-500 opacity-70 rounded-t" />
          <div className="w-10 h-[90px] bg-primary-200 opacity-50 rounded-t" />
        </div>
        
        {/* Right Cluster */}
        <div className="flex items-end gap-2 h-full">
          <div className="w-12 h-[110px] bg-primary-400 opacity-60 rounded-t" />
          <div className="w-16 h-[150px] bg-primary-500 opacity-70 rounded-t" />
          <div className="w-14 h-[130px] bg-primary-300 opacity-80 rounded-t" />
          <div className="w-12 h-[90px] bg-primary-200 opacity-50 rounded-t" />
          <div className="w-16 h-[160px] bg-primary-500 opacity-70 rounded-t" />
          <div className="w-10 h-[100px] bg-primary-400 opacity-60 rounded-t" />
        </div>
      </div>
    </div>
  );
}
