import { apiClient } from "@/services/api-client";

import type {
    CalibrationReport,
} from "../types/calibration-report.types";

import type {
    CreateCalibrationReportRequest,
    UpdateCalibrationReportRequest,
} from "../types/calibration-request.types";

export interface CalibrationReportListParams {
    page?: number;
    size?: number;
}

interface CalibrationReportPageResponse {
    content: CalibrationReport[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
    first: boolean;
    last: boolean;
}

/**
 * Calibration Report API
 *
 * Backend endpoints:
 *
 * POST /api/calibration-reports
 * GET  /api/calibration-reports/{id}
 * GET  /api/calibration-reports?page={page}&size={size}
 * PUT  /api/calibration-reports/{id}
 */
export const calibrationReportApi = {
    /**
     * Get calibration reports.
     *
     * The backend returns a Spring Page object.
     * The existing frontend report list expects an array,
     * so only the `content` array is returned here.
     */
    async getReports(
        params: CalibrationReportListParams = {},
    ): Promise<CalibrationReport[]> {
        const page = params.page ?? 0;
        const size = params.size ?? 10;

        const response =
            await apiClient.get<CalibrationReportPageResponse>(
                `/calibration-reports?page=${page}&size=${size}`,
            );

        return response.content;
    },

    /**
     * Get a single calibration report by ID.
     */
    async getReportById(
        id: number,
    ): Promise<CalibrationReport> {
        return apiClient.get<CalibrationReport>(
            `/calibration-reports/${id}`,
        );
    },

    /**
     * Create a calibration report.
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

    /**
     * Update a calibration report.
     */
    async updateReport(
        id: number,
        request: UpdateCalibrationReportRequest,
    ): Promise<CalibrationReport> {
        return apiClient.put<
            CalibrationReport,
            UpdateCalibrationReportRequest
        >(
            `/calibration-reports/${id}`,
            request,
        );
    },
};