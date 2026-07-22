import { mockServiceReports } from "../mock/serviceReports.mock";

import type {
    CreateServiceReportRequest,
    ServiceReportResponse,
    UpdateServiceReportRequest,
} from "../types/serviceReport.types";

class ServiceReportService {
    async getServiceReports(): Promise<ServiceReportResponse[]> {
        return [...mockServiceReports];
    }

    async getServiceReportById(
        id: number,
    ): Promise<ServiceReportResponse | undefined> {
        return mockServiceReports.find(
            (report) => report.id === id,
        );
    }

    async createServiceReport(
        request: CreateServiceReportRequest,
    ): Promise<ServiceReportResponse> {
        const report: ServiceReportResponse = {
            id:
                mockServiceReports.length > 0
                    ? Math.max(
                          ...mockServiceReports.map(
                              (report) => report.id,
                          ),
                      ) + 1
                    : 1,

            reportNumber: `SR-${String(
                mockServiceReports.length + 1,
            ).padStart(6, "0")}`,

            customerId: request.customerId,

            // Temporary values.
            // These will come from the backend later.
            customerName: "Unknown Customer",
            customerAddress: "",

            attendedBy: request.attendedBy,
            attendedByName: "Unknown Engineer",

            reportDate: request.reportDate,

            equipment: request.equipment,
            serialNumber: request.serialNumber,

            observations: request.observations,
            actionTaken: request.actionTaken,
            recommendations: request.recommendations,

            customerSignatureUrl:
                request.customerSignatureUrl,

            engineerSignatureUrl:
                request.engineerSignatureUrl,

            status: "OPEN",

            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        mockServiceReports.push(report);

        return report;
    }

    async updateServiceReport(
        id: number,
        request: UpdateServiceReportRequest,
    ): Promise<ServiceReportResponse> {
        const report = mockServiceReports.find(
            (item) => item.id === id,
        );

        if (!report) {
            throw new Error(
                "Service Report not found.",
            );
        }

    

        report.customerId = request.customerId;

        report.reportDate = request.reportDate;

        report.attendedBy = request.attendedBy;

        report.equipment = request.equipment;

        report.serialNumber =
            request.serialNumber;

        report.observations =
            request.observations;

        report.actionTaken =
            request.actionTaken;

        report.recommendations =
            request.recommendations;

        report.customerSignatureUrl =
            request.customerSignatureUrl;

        report.engineerSignatureUrl =
            request.engineerSignatureUrl;

        report.updatedAt =
            new Date().toISOString();

        return report;
    }
    async deleteServiceReport(
        id: number,
    ): Promise<void> {
        const index = mockServiceReports.findIndex(
            (report) => report.id === id,
        );

        if (index === -1) {
            throw new Error(
                "Service Report not found.",
            );
        }

        mockServiceReports.splice(index, 1);
    }
}

export const serviceReportService =
    new ServiceReportService();