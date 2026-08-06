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
  UpdateCalibrationReportRequest,
} from "../types";

interface UpdateCalibrationReportMutation {
  id: number;
  request: UpdateCalibrationReportRequest;
}

export function useUpdateCalibrationReport() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      request,
    }: UpdateCalibrationReportMutation) =>
      calibrationReportApi.updateReport(
        id,
        request
      ),

    onSuccess: (updatedReport) => {
      if (!updatedReport) {
        return;
      }

      queryClient.setQueryData(
        [
          "calibration-report",
          updatedReport.id,
        ],
        updatedReport
      );

      queryClient.setQueryData<CalibrationReport[]>(
        ["calibration-reports"],
        (old = []) =>
          old.map((report) =>
            report.id === updatedReport.id
              ? updatedReport
              : report
          )
      );

      queryClient.invalidateQueries({
        queryKey: [
          "calibration-report-statistics",
        ],
      });

      toast.success(
        "Calibration report updated successfully."
      );
    },

    onError: () => {
      toast.error(
        "Failed to update calibration report."
      );
    },
  });
}