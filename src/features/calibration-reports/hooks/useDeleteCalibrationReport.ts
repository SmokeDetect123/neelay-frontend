"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  calibrationReportApi,
} from "../api";

import {
  CalibrationReport,
} from "../types";

export function useDeleteCalibrationReport() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn:
      calibrationReportApi.deleteReport,

    onSuccess: (_, id) => {
      queryClient.removeQueries({
        queryKey: [
          "calibration-report",
          id,
        ],
      });

      queryClient.setQueryData<CalibrationReport[]>(
        ["calibration-reports"],
        (old = []) =>
          old.filter(
            (report) =>
              report.id !== id
          )
      );

      queryClient.invalidateQueries({
        queryKey: [
          "calibration-report-statistics",
        ],
      });

      toast.success(
        "Calibration report deleted successfully."
      );
    },

    onError: () => {
      toast.error(
        "Failed to delete calibration report."
      );
    },
  });
}