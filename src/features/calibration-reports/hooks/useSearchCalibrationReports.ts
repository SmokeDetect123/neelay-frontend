import { useQuery } from "@tanstack/react-query";

import { calibrationReportApi } from "../api";

import { CalibrationFilter } from "../types";

export function useSearchCalibrationReports(
  filter: CalibrationFilter
) {
  return useQuery({
    queryKey: ["calibration-search", filter],

    queryFn: () =>
      calibrationReportApi.searchReports(filter),
  });
}