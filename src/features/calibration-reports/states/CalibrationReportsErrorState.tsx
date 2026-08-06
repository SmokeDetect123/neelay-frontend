"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export default function CalibrationReportsErrorState({
  message = "Unable to load calibration reports.",
  onRetry,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-destructive/20 bg-destructive/5 px-6 py-12 text-center">
      <AlertTriangle className="mb-4 h-12 w-12 text-destructive" />

      <h3 className="text-lg font-semibold">
        Something went wrong
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {message}
      </p>

      {onRetry && (
        <Button
          className="mt-6"
          onClick={onRetry}
        >
          Try Again
        </Button>
      )}
    </div>
  );
}