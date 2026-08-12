"use client";

import { useRouter } from "next/navigation";

import {
  Loader2,
  Plus,
  Save,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface InstallationReportFormFooterProps {
  mode?: "create" | "edit";

  isSubmitting: boolean;

  isDirty: boolean;

  onReset: () => void;
}

export default function InstallationReportFormFooter({
  mode = "create",
  isSubmitting,
  isDirty,
  onReset,
}: InstallationReportFormFooterProps) {
  const router = useRouter();

  return (
    <div className="sticky bottom-0 z-30 rounded-xl border bg-background/95 p-4 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          {isDirty ? (
            <p className="text-sm font-medium text-amber-600">
              You have unsaved changes.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              {mode === "create"
                ? "Fill in the form to create an installation report."
                : "All changes saved."}
            </p>
          )}
        </div>

        <div className="flex flex-wrap justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={onReset}
            disabled={isSubmitting}
          >
            <X className="mr-2 h-4 w-4" />
            Reset
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={() =>
              router.push("/installation-reports")
            }
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={
              isSubmitting ||
              !isDirty
            }
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : mode === "create" ? (
              <>
                <Plus className="mr-2 h-4 w-4" />
                Create Report
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}