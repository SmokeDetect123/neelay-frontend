"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { calibrationReportApi } from "../api";

import type {
  CalibrationReport,
  UpdateCalibrationReportRequest,
} from "../types";

interface UpdateCalibrationReportMutation {
  id: number;
  request: UpdateCalibrationReportRequest;
}

export function useUpdateCalibrationReport() {
  const queryClient = useQueryClient();

  return useMutation<
    CalibrationReport,
    Error,
    UpdateCalibrationReportMutation
  >({
    mutationFn: ({ id, request }) =>
      calibrationReportApi.updateReport(
        id,
        request,
      ),

    onSuccess: (updatedReport) => {
      queryClient.setQueryData(
        [
          "calibration-report",
          updatedReport.id,
        ],
        updatedReport,
      );

      queryClient.invalidateQueries({
        queryKey: ["calibration-reports"],
      });

      toast.success(
        "Calibration report updated successfully.",
      );
    },

    onError: (error) => {
      toast.error(
        error.message ||
          "Failed to update calibration report.",
      );
    },
  });
}