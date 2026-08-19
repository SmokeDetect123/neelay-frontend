import { apiClient } from "@/services/api-client";
import { API_ENDPOINTS } from "@/constants/api";

import type {
    CalibrationReport,
    CalibrationReportPage,
    CalibrationReportSearchRequest,
    CreateCalibrationReportRequest,
    UpdateCalibrationReportRequest,
} from "../types";

export interface CalibrationReportListParams {
    page?: number;
    size?: number;
}

class CalibrationReportApi {
    /**
     * GET /api/calibration-reports?page=0&size=10
     */
    async getReports(
        params: CalibrationReportListParams = {},
    ): Promise<CalibrationReportPage> {
        return apiClient.get<CalibrationReportPage>(
            API_ENDPOINTS.CALIBRATION_REPORTS,
            {
                params: {
                    page: params.page ?? 0,
                    size: params.size ?? 10,
                },
            },
        );
    }

    /**
     * GET /api/calibration-reports/{id}
     */
    async getReportById(
        id: number,
    ): Promise<CalibrationReport> {
        return apiClient.get<CalibrationReport>(
            `${API_ENDPOINTS.CALIBRATION_REPORTS}/${id}`,
        );
    }

    /**
     * POST /api/calibration-reports
     */
    async createReport(
        request: CreateCalibrationReportRequest,
    ): Promise<CalibrationReport> {
        return apiClient.post<
            CalibrationReport,
            CreateCalibrationReportRequest
        >(
            API_ENDPOINTS.CALIBRATION_REPORTS,
            request,
        );
    }

    /**
     * PUT /api/calibration-reports/{id}
     */
    async updateReport(
        id: number,
        request: UpdateCalibrationReportRequest,
    ): Promise<CalibrationReport> {
        return apiClient.put<
            CalibrationReport,
            UpdateCalibrationReportRequest
        >(
            `${API_ENDPOINTS.CALIBRATION_REPORTS}/${id}`,
            request,
        );
    }

    /**
     * GET /api/calibration-reports/search
     */
    async searchReports(
        request: CalibrationReportSearchRequest,
        page = 0,
        size = 10,
    ): Promise<CalibrationReportPage> {
        return apiClient.get<CalibrationReportPage>(
            `${API_ENDPOINTS.CALIBRATION_REPORTS}/search`,
            {
                params: {
                    ...request,
                    page,
                    size,
                },
            },
        );
    }
}

export const calibrationReportApi =
    new CalibrationReportApi();