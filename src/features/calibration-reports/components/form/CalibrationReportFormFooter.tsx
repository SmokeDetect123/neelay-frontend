"use client";

import {
  Loader2,
  Plus,
  Save,
  X,
} from "lucide-react";

import {
  UseFormReset,
  FormState,
} from "react-hook-form";

import { Button } from "@/components/ui/button";

import {
  CalibrationReportFormValues,
} from "../../schemas";

interface CalibrationReportFormFooterProps {
  mode: "create" | "edit";

  formState: FormState<CalibrationReportFormValues>;

  reset: UseFormReset<CalibrationReportFormValues>;

  defaultValues: CalibrationReportFormValues;

  isSaving: boolean;

  activeMutation: {
    isPending: boolean;
  };

  onCancel: () => void;
}

export default function CalibrationReportFormFooter({
  mode,
  formState,
  reset,
  defaultValues,
  isSaving,
  activeMutation,
  onCancel,
}: CalibrationReportFormFooterProps) {
  return (
    <div className="sticky bottom-0 z-30 rounded-xl border bg-background/95 p-4 backdrop-blur">
      <div className="flex items-center justify-between">

        <div>
          {formState.isDirty ? (
            <p className="text-sm font-medium text-amber-600">
              You have unsaved changes.
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              {mode === "create"
                ? "Complete the form to create a calibration report."
                : "All changes have been saved."}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">

          <Button
            type="button"
            variant="outline"
            disabled={isSaving}
            onClick={() =>
              reset(
                mode === "create"
                  ? defaultValues
                  : undefined
              )
            }
          >
            <X className="mr-2 h-4 w-4" />
            Reset
          </Button>

          <Button
            type="button"
            variant="ghost"
            disabled={activeMutation.isPending}
            onClick={onCancel}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={
              activeMutation.isPending ||
              !formState.isDirty
            }
          >
            {activeMutation.isPending ? (
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