import { apiClient } from "@/services/api-client";
import { API_ENDPOINTS } from "@/constants/api";

/**
 * Dashboard statistics returned from the backend.
 *
 * Each value represents the total number of records
 * currently stored in the corresponding database table.
 */
export interface DashboardReportCounts {
    serviceReports: number;
    calibrationReports: number;
    installationReports: number;
}

/**
 * Dashboard API service.
 *
 * Responsible only for communication with the backend
 * for dashboard-level statistics.
 */
class DashboardService {
    /**
     * Get total number of Service Reports.
     *
     * Backend:
     * GET /api/service-reports/count
     */
    async getServiceReportCount(): Promise<number> {
        return apiClient.get<number>(
            API_ENDPOINTS.SERVICE_REPORTS_COUNT,
        );
    }

    /**
     * Get total number of Calibration Reports.
     *
     * Backend:
     * GET /api/calibration-reports/count
     */
    async getCalibrationReportCount(): Promise<number> {
        return apiClient.get<number>(
            API_ENDPOINTS.CALIBRATION_REPORTS_COUNT,
        );
    }

    /**
     * Get total number of Installation Reports.
     *
     * Backend:
     * GET /api/installation-reports/count
     */
    async getInstallationReportCount(): Promise<number> {
        return apiClient.get<number>(
            API_ENDPOINTS.INSTALLATION_REPORTS_COUNT,
        );
    }

    /**
     * Fetch all dashboard report counts in parallel.
     */
    async getReportCounts(): Promise<DashboardReportCounts> {
        const [
            serviceReports,
            calibrationReports,
            installationReports,
        ] = await Promise.all([
            this.getServiceReportCount(),
            this.getCalibrationReportCount(),
            this.getInstallationReportCount(),
        ]);

        return {
            serviceReports,
            calibrationReports,
            installationReports,
        };
    }
}

export const dashboardService =
    new DashboardService();