import { apiClient } from "@/services/api-client";
import { API_ENDPOINTS } from "@/constants/api";

import type {
    CreateServiceReportRequest,
    PageResponse,
    ServiceReportResponse,
    ServiceReportSearchRequest,
    UpdateServiceReportRequest,
} from "../types/serviceReport.types";

class ServiceReportService {
    /**
     * Fetch paginated Service Reports.
     *
     * Backend:
     * GET /api/service-reports?page=0&size=10
     */
    async getServiceReports(
        page = 0,
        size = 10,
    ): Promise<PageResponse<ServiceReportResponse>> {
        return apiClient.get<
            PageResponse<ServiceReportResponse>
        >(
            API_ENDPOINTS.SERVICE_REPORTS,
            {
                params: {
                    page,
                    size,
                },
            },
        );
    }

    /**
     * Fetch one Service Report.
     *
     * Backend:
     * GET /api/service-reports/{id}
     */
    async getServiceReportById(
        id: number,
    ): Promise<ServiceReportResponse> {
        return apiClient.get<ServiceReportResponse>(
            `${API_ENDPOINTS.SERVICE_REPORTS}/${id}`,
        );
    }

    /**
     * Create a Service Report.
     *
     * Backend generates:
     * - id
     * - reportNo
     * - createdById
     * - createdAt
     * - updatedAt
     *
     * Backend:
     * POST /api/service-reports
     */
    async createServiceReport(
        request: CreateServiceReportRequest,
    ): Promise<ServiceReportResponse> {
        return apiClient.post<
            ServiceReportResponse,
            CreateServiceReportRequest
        >(
            API_ENDPOINTS.SERVICE_REPORTS,
            request,
        );
    }

    /**
     * Update an existing Service Report.
     *
     * Backend:
     * PUT /api/service-reports/{id}
     */
    async updateServiceReport(
        id: number,
        request: UpdateServiceReportRequest,
    ): Promise<ServiceReportResponse> {
        return apiClient.put<
            ServiceReportResponse,
            UpdateServiceReportRequest
        >(
            `${API_ENDPOINTS.SERVICE_REPORTS}/${id}`,
            request,
        );
    }

    /**
     * Search Service Reports.
     *
     * Backend:
     * GET /api/service-reports/search
     */
    async searchServiceReports(
        request: ServiceReportSearchRequest,
        page = 0,
        size = 10,
    ): Promise<PageResponse<ServiceReportResponse>> {
        return apiClient.get<
            PageResponse<ServiceReportResponse>
        >(
            `${API_ENDPOINTS.SERVICE_REPORTS}/search`,
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

export const serviceReportService =
    new ServiceReportService();