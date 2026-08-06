import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  calibrationReportService,
} from "../services";

import {
  CalibrationReport,
} from "../types";

export function useCalibrationReport(
  id: number
) {
  const queryClient =
    useQueryClient();

  return useQuery<
    CalibrationReport | null
  >({
    queryKey: [
      "calibration-report",
      id,
    ],

    queryFn: () =>
      calibrationReportService.getCalibrationReportById(
        id
      ),

    enabled:
      Number.isFinite(id) &&
      id > 0,

    initialData: () => {
      const cachedReport =
        queryClient.getQueryData<CalibrationReport>([
          "calibration-report",
          id,
        ]);

      if (cachedReport) {
        return cachedReport;
      }

      const reports =
        queryClient.getQueryData<
          CalibrationReport[]
        >([
          "calibration-reports",
        ]);

      return (
        reports?.find(
          (report) =>
            report.id === id
        ) ?? null
      );
    },

    staleTime: 60_000,
  });
}