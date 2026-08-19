import { useQuery } from "@tanstack/react-query";

import { calibrationReportApi } from "../api";

import type {
  CalibrationReportSearchRequest,
} from "../types";

export function useSearchCalibrationReports(
  request: CalibrationReportSearchRequest,
) {
  return useQuery({
    queryKey: ["calibration-search", request],

    queryFn: () =>
      calibrationReportApi.searchReports(request),
  });
}