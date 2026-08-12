"use client";

import { Loader2 } from "lucide-react";

interface InstallationLoadingStateProps {
  message?: string;
}

export default function InstallationLoadingState({
  message = "Loading installation report...",
}: InstallationLoadingStateProps) {
  return (
    <div className="flex h-80 flex-col items-center justify-center gap-4 rounded-lg border bg-background">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />

      <p className="text-sm text-muted-foreground">
        {message}
      </p>
    </div>
  );
}