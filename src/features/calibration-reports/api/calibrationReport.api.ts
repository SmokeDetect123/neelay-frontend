import { apiClient } from "@/services/api-client";

import type {
    CalibrationReport,
    CalibrationReportPage,
    CreateCalibrationReportRequest,
} from "../types";

export interface CalibrationReportListParams {
    page?: number;
    size?: number;
}

export const calibrationReportApi = {
    /**
     * GET /api/calibration-reports
     *
     * Returns the paginated calibration report response
     * from the backend.
     */
    async getReports(
        params: CalibrationReportListParams = {},
    ): Promise<CalibrationReportPage> {
        const page = params.page ?? 0;
        const size = params.size ?? 10;

        return apiClient.get<CalibrationReportPage>(
            "/calibration-reports",
            {
                params: {
                    page,
                    size,
                },
            },
        );
    },

    /**
     * GET /api/calibration-reports/{id}
     *
     * Returns a single calibration report.
     */
    async getReportById(
        id: number,
    ): Promise<CalibrationReport> {
        return apiClient.get<CalibrationReport>(
            `/calibration-reports/${id}`,
        );
    },

    /**
     * POST /api/calibration-reports
     *
     * Creates a new calibration report.
     */
    async createReport(
        request: CreateCalibrationReportRequest,
    ): Promise<CalibrationReport> {
        return apiClient.post<
            CalibrationReport,
            CreateCalibrationReportRequest
        >(
            "/calibration-reports",
            request,
        );
    },
};