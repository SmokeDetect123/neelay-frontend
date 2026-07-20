export type ReportStatus =
    | "OPEN"
    | "IN_PROGRESS"
    | "COMPLETED";

export interface ServiceReportResponse {
    id: number;

    reportNumber: string;

    customerId: number;

    customerName: string;

    customerAddress: string;

    attendedBy: number;

    attendedByName: string;

    reportDate: string;

    equipment: string;

    serialNumber: string;

    observations: string;

    actionTaken: string;

    recommendations: string;

    customerSignatureUrl?: string;

    engineerSignatureUrl?: string;

    status: ReportStatus;

    createdAt: string;

    updatedAt: string;
}

export interface CreateServiceReportRequest {
    customerId: number;

    reportDate: string;

    attendedBy: number;

    equipment: string;

    serialNumber: string;

    observations: string;

    actionTaken: string;

    recommendations: string;

    customerSignatureUrl?: string;

    engineerSignatureUrl?: string;
}

export interface UpdateServiceReportRequest {
    reportDate: string;

    attendedBy: number;

    equipment: string;

    serialNumber: string;

    observations: string;

    actionTaken: string;

    recommendations: string;

    customerSignatureUrl?: string;

    engineerSignatureUrl?: string;

    status: ReportStatus;
}