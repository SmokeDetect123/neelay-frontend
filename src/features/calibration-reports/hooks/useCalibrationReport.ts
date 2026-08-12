import { useQuery, useQueryClient } from "@tanstack/react-query";

import { calibrationReportService } from "../services";
import { CalibrationReport } from "../types";

export function useCalibrationReport(id: number) {
  const queryClient = useQueryClient();

  const query = useQuery<CalibrationReport | null, Error>({
    queryKey: ["calibration-report", id],

    queryFn: () =>
      calibrationReportService.getCalibrationReportById(id),

    enabled: Number.isFinite(id) && id > 0,

    initialData: () => {
      // First try the individual report cache.
      const cachedReport =
        queryClient.getQueryData<CalibrationReport>([
          "calibration-report",
          id,
        ]);

      if (cachedReport) {
        return cachedReport;
      }

      // Then try the reports-list cache.
      const reports =
        queryClient.getQueryData<CalibrationReport[]>([
          "calibration-reports",
        ]);

      return (
        reports?.find(
          (report) => report.id === id
        ) ?? undefined
      );
    },

    staleTime: 60_000,
  });

  return {
    ...query,

    // Keep the page API stable:
    // const { report, isLoading } = useCalibrationReport(id)
    report: query.data ?? undefined,
  };
}