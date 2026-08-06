import { useQuery } from "@tanstack/react-query";

import { calibrationReportApi } from "../api";

export function useCalibrationReports() {
  return useQuery({
    queryKey: ["calibration-reports"],
    queryFn: () => calibrationReportApi.getReports(),
  });
}