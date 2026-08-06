"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  calibrationReportService,
} from "../services";

import {
  CalibrationReport,
  CreateCalibrationReportRequest,
} from "../types";

export function useCreateCalibrationReport() {
  const queryClient = useQueryClient();

  return useMutation<
    CalibrationReport,
    Error,
    CreateCalibrationReportRequest
  >({
    mutationFn: (request) =>
      calibrationReportService.createCalibrationReport(
        request
      ),

    onSuccess: (createdReport) => {
      queryClient.setQueryData(
        ["calibration-report", createdReport.id],
        createdReport
      );

      queryClient.setQueryData<CalibrationReport[]>(
        ["calibration-reports"],
        (old = []) => [...old, createdReport]
      );

      queryClient.invalidateQueries({
        queryKey: ["calibration-report-statistics"],
      });

      toast.success(
        "Calibration report created successfully."
      );
    },

    onError: (error) => {
      toast.error(
        error.message ??
          "Failed to create calibration report."
      );
    },
  });
}