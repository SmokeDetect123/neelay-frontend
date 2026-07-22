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

/**
 * Payload used when creating a Service Report.
 */
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

/**
 * Payload used when updating a Service Report.
 *
 * For this application the editable fields are the
 * same as the create request.
 *
 * The report ID is supplied through the URL:
 *
 * PUT /service-reports/{id}
 *
 * Fields such as:
 * - reportNumber
 * - status
 * - createdAt
 * - updatedAt
 *
 * are managed by the backend and are therefore not
 * included in the request body.
 */
export type UpdateServiceReportRequest =
    CreateServiceReportRequest;