import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ResourceCardProps {
  title?: string;
  description?: string;
  fileType?: string;
  fileSize?: string;
  className?: string;
  onOpen?: () => void;
}

export function ResourceCard({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  fileType = "PDF",
  fileSize = "1.2 MB",
  className,
  onOpen,
}: ResourceCardProps) {
  return (
    <Card className={cn("flex flex-col justify-between h-full hover:border-neutral-300 transition-colors", className)}>
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center text-neutral-900">
          <FileText className="w-5 h-5 text-neutral-700" />
        </div>
        <div className="space-y-1">
          <h3 className="text-heading-3 font-semibold text-neutral-900">{title}</h3>
          <p className="text-body text-neutral-500 line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-6 mt-4 border-t border-neutral-100">
        <span className="text-small text-neutral-500 font-medium">
          {fileType} · {fileSize}
        </span>
        <button
          onClick={onOpen}
          aria-label={`Open ${title}`}
          className="p-1 text-primary-500 hover:text-primary-600 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </button>
      </div>
    </Card>
  );
}
