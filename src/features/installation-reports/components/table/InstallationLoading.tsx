"use client";

import { Loader2 } from "lucide-react";

export default function InstallationLoading() {
  return (
    <div className="flex h-56 items-center justify-center rounded-lg border bg-background">
      <div className="flex flex-col items-center gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />

        <p className="text-sm text-muted-foreground">
          Loading installation reports...
        </p>
      </div>
    </div>
  );
}