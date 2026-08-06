"use client";

import { SearchX } from "lucide-react";

interface Props {
  search: string;
}

export default function CalibrationReportsNoResults({
  search,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border px-6 py-12 text-center">
      <SearchX className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        No matching reports
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        No calibration reports matched "{search}".
      </p>
    </div>
  );
}