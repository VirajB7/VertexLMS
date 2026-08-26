import React from "react";
import { CheckCircle2, Lock, Play } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showLabel?: boolean;
}

export function StatusIndicator({
  status,
  label,
  showLabel = true,
  className,
  ...props
}: StatusIndicatorProps) {
  const statusConfig = {
    "in-progress": {
      defaultLabel: "In Progress",
      icon: (
        <svg className="w-5 h-5 text-primary-500" viewBox="0 0 20 20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="#FED7AA"
            strokeWidth="2"
          />
          <path
            d="M10 2C14.4183 2 18 5.58172 18 10"
            stroke="#F97316"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      textColor: "text-neutral-900",
    },
    completed: {
      defaultLabel: "Completed",
      icon: <CheckCircle2 className="w-5 h-5 text-[#16A34A]" />,
      textColor: "text-neutral-900",
    },
    "now-playing": {
      defaultLabel: "Now Playing",
      icon: (
        <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
          <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
        </div>
      ),
      textColor: "text-neutral-900",
    },
    locked: {
      defaultLabel: "Locked",
      icon: <Lock className="w-5 h-5 text-neutral-500" />,
      textColor: "text-neutral-500",
    },
  };

  const config = statusConfig[status];
  const displayLabel = label || config.defaultLabel;

  return (
    <div className={cn("inline-flex items-center gap-2 text-body font-medium", className)} {...props}>
      {config.icon}
      {showLabel && <span className={config.textColor}>{displayLabel}</span>}
    </div>
  );
}
