import { apiClient } from "@/services/api-client";

import type { CalibrationReport } from "../types";

export interface CalibrationReportPage {
    content: CalibrationReport[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    first: boolean;
    last: boolean;
}

export const backendTestApi = {
    getCalibrationReports(): Promise<CalibrationReportPage> {
        return apiClient.get<CalibrationReportPage>(
            "/calibration-reports?page=0&size=10"
        );
    },
};