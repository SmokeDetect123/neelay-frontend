"use client";

import { Skeleton } from "@/components/ui/skeleton";

import { ContentCard } from "@/components/common/ContentCard";

export default function CalibrationReportLoading() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <ContentCard
          key={index}
          className="p-6"
        >
          <Skeleton className="mb-6 h-7 w-56" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((__, field) => (
              <div
                key={field}
                className="space-y-2"
              >
                <Skeleton className="h-4 w-24" />

                <Skeleton className="h-6 w-full" />
              </div>
            ))}
          </div>
        </ContentCard>
      ))}
    </div>
  );
}