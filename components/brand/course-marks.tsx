import React from "react";
import { cn } from "@/lib/utils";

interface MarkProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function NextJsMark({ className, ...props }: MarkProps) {
  return (
    <div className={cn("w-[72px] h-[72px] rounded-2xl bg-black flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M90 180c49.706 0 90-40.294 90-90S139.706 0 90 0 0 40.294 0 90s40.294 90 90 90Zm-20.736-61.942L49.6 62h11.905l15.342 24.542L108.575 140H96.48l-27.216-21.942ZM123.6 62h-11.758v55.856h11.758V62Z"
          fill="#fff"
        />
        <path
          d="M108.575 140 76.847 86.542 64.942 62h-15.342L118.864 170.82a89.598 89.598 0 0 0 16.711-12.01L108.575 140Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="109"
            y1="116.5"
            x2="144.5"
            y2="160.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function DockerMark({ className, ...props }: MarkProps) {
  // A stylized approximation of Docker, using #1D63ED
  return (
    <div className={cn("w-[72px] h-[72px] rounded-2xl bg-[#EAF0FC] flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 text-[#1D63ED]"
        {...props}
      >
        {/* Containers */}
        <rect x="22" y="24" width="6" height="6" fill="currentColor" />
        <rect x="30" y="24" width="6" height="6" fill="currentColor" />
        <rect x="30" y="16" width="6" height="6" fill="currentColor" />
        <rect x="38" y="24" width="6" height="6" fill="currentColor" />
        <rect x="38" y="16" width="6" height="6" fill="currentColor" />
        <rect x="46" y="24" width="6" height="6" fill="currentColor" />
        {/* Whale Body approximation */}
        <path
          d="M10 38C10 32 16 32 20 32H54C54 44 44 50 32 50C20 50 10 44 10 38Z"
          fill="currentColor"
        />
        <circle cx="48" cy="40" r="2" fill="white" />
      </svg>
    </div>
  );
}

export function TypeScriptMark({ className, ...props }: MarkProps) {
  return (
    <div className={cn("w-[72px] h-[72px] rounded-2xl bg-[#3178C6] flex items-center justify-center", className)}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10"
        {...props}
      >
        <path d="M12.91 18.784L12.91 10.963H15.01V18.784H12.91ZM9.106 12.688H13.236V10.963H5.006V12.688H9.106Z" fill="white"/>
        <path d="M20.222 18.847C19.161 18.847 18.318 18.577 17.69 18.037C17.076 17.483 16.712 16.716 16.602 15.736L18.498 15.42C18.568 16.036 18.766 16.488 19.09 16.776C19.414 17.051 19.832 17.188 20.344 17.188C20.871 17.188 21.282 17.064 21.576 16.816C21.884 16.555 22.038 16.216 22.038 15.801C22.038 15.42 21.921 15.123 21.688 14.912C21.469 14.688 21.053 14.484 20.442 14.303L19.49 14.01C18.423 13.684 17.643 13.25 17.152 12.71C16.675 12.155 16.437 11.458 16.437 10.617C16.437 9.68 16.812 8.917 17.564 8.328C18.33 7.726 19.297 7.424 20.462 7.424C21.493 7.424 22.352 7.674 23.04 8.174C23.742 8.66 24.183 9.382 24.363 10.339L22.484 10.627C22.372 10.024 22.124 9.58 21.74 9.292C21.375 8.991 20.913 8.84 20.354 8.84C19.808 8.84 19.37 8.97 19.04 9.231C18.724 9.48 18.566 9.791 18.566 10.166C18.566 10.518 18.683 10.793 18.918 10.993C19.166 11.179 19.566 11.365 20.118 11.551L21.288 11.956C22.366 12.317 23.167 12.753 23.692 13.264C24.232 13.76 24.502 14.467 24.502 15.384C24.502 16.402 24.116 17.225 23.344 17.852C22.585 18.468 21.545 18.775 20.222 18.847Z" fill="white"/>
      </svg>
    </div>
  );
}
