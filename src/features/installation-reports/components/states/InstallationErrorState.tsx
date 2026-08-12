"use client";

import {
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface InstallationErrorStateProps {
  title?: string;

  description?: string;

  onRetry?: () => void;
}

export default function InstallationErrorState({
  title = "Something went wrong",
  description = "Unable to load the installation report.",
  onRetry,
}: InstallationErrorStateProps) {
  return (
    <div className="rounded-lg border border-destructive bg-background p-10 text-center">
      <AlertTriangle className="mx-auto mb-4 h-12 w-12 text-destructive" />

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-muted-foreground">
        {description}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
}