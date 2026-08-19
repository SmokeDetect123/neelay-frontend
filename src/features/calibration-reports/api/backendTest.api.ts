import { apiClient } from "@/services/api-client";

import type { CalibrationReportPage } from "../types";

export const backendTestApi = {
  getCalibrationReports(): Promise<CalibrationReportPage> {
    return apiClient.get<CalibrationReportPage>(
      "/calibration-reports?page=0&size=10",
    );
  },
};