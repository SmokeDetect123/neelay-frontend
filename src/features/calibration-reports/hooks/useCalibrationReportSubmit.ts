"use client";

import { useRouter } from "next/navigation";

import {
  useCreateCalibrationReport,
  useUpdateCalibrationReport,
} from ".";

import type {
  CalibrationReport,
  UpdateCalibrationReportMutation,
} from "../types";

import {
  CalibrationReportFormValues,
  calibrationReportDefaultValues,
} from "../schemas";

import {
  toCreateCalibrationRequest,
  toUpdateCalibrationRequest,
} from "../utils";

interface UseCalibrationReportSubmitProps {
  mode: "create" | "edit";

  report?: CalibrationReport;

  reset: (
    values?: CalibrationReportFormValues
  ) => void;
}

export function useCalibrationReportSubmit({
  mode,
  report,
  reset,
}: UseCalibrationReportSubmitProps) {
  const router = useRouter();

  const createMutation =
    useCreateCalibrationReport();

  const updateMutation =
    useUpdateCalibrationReport();

  const activeMutation =
    mode === "create"
      ? createMutation
      : updateMutation;

  async function onSubmit(
    values: CalibrationReportFormValues
  ) {
    try {
      if (mode === "create") {
        const createdReport =
          await createMutation.mutateAsync(
            toCreateCalibrationRequest(values)
          );

        reset(
          calibrationReportDefaultValues
        );

        router.push(
          `/calibration-reports/${createdReport.id}`
        );

        return;
    }

      if (!report) {
        return;
      }

      const request: UpdateCalibrationReportMutation =
        {
          id: report.id,

          request:
            toUpdateCalibrationRequest(
              values
            ),
        };

      await updateMutation.mutateAsync(
        request
      );

      reset(values);

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  }

  function onCancel() {
    router.push("/calibration-reports");
  }

  return {
    onSubmit,

    onCancel,

    activeMutation,

    isSaving:
      activeMutation.isPending,
  };
}