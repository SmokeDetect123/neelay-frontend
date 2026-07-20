import { mockServiceReports } from "../mock/serviceReports.mock";

import type {
    CreateServiceReportRequest,
    ServiceReportResponse,
    UpdateServiceReportRequest,
    ReportStatus,
} from "../types/serviceReport.types";

class ServiceReportService {

    async getReports(): Promise<ServiceReportResponse[]> {
        return Promise.resolve([...mockServiceReports]);
    }

    async getReportById(
        id: number,
    ): Promise<ServiceReportResponse | undefined> {

        return Promise.resolve(
            mockServiceReports.find(report => report.id === id),
        );
    }

    async getReportsByStatus(
        status: ReportStatus,
    ): Promise<ServiceReportResponse[]> {

        return Promise.resolve(
            mockServiceReports.filter(
                report => report.status === status,
            ),
        );
    }

    async searchReports(
        query: string,
    ): Promise<ServiceReportResponse[]> {

        const search = query.toLowerCase();

        return Promise.resolve(
            mockServiceReports.filter(report =>
                report.reportNumber.toLowerCase().includes(search) ||
                report.customerName.toLowerCase().includes(search) ||
                report.equipment.toLowerCase().includes(search) ||
                report.serialNumber.toLowerCase().includes(search),
            ),
        );
    }

    async getRecentReports(
        limit = 5,
    ): Promise<ServiceReportResponse[]> {

        return Promise.resolve(
            [...mockServiceReports]
                .sort(
                    (a, b) =>
                        new Date(b.reportDate).getTime() -
                        new Date(a.reportDate).getTime(),
                )
                .slice(0, limit),
        );
    }

    async createReport(
        request: CreateServiceReportRequest,
    ): Promise<ServiceReportResponse> {

        const newReport: ServiceReportResponse = {

            id: mockServiceReports.length + 1,

            reportNumber: `SR-${String(
                mockServiceReports.length + 1,
            ).padStart(6, "0")}`,

            customerId: request.customerId,

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

        mockServiceReports.push(newReport);

        return Promise.resolve(newReport);
    }

    async updateReport(
        id: number,
        request: UpdateServiceReportRequest,
    ): Promise<ServiceReportResponse | undefined> {

        const report = mockServiceReports.find(
            r => r.id === id,
        );

        if (!report) {
            return undefined;
        }

        Object.assign(report, {

            ...request,

            updatedAt: new Date().toISOString(),
        });

        return Promise.resolve(report);
    }

    async deleteReport(
        id: number,
    ): Promise<boolean> {

        const index = mockServiceReports.findIndex(
            report => report.id === id,
        );

        if (index === -1) {
            return false;
        }

        mockServiceReports.splice(index, 1);

        return true;
    }
}

const serviceReportService = new ServiceReportService();

export default serviceReportService;