import type {
    CallType,
    LocationType,
} from "./service-report.enums";

/**
 * Request payload accepted by POST /api/service-reports.
 * Mirrors CreateServiceReportRequest.java.
 */
export interface CreateServiceReportRequest {
    reportDate: string;

    customerName: string;
    customerAddress?: string;
    department?: string;
    personContacted?: string;

    make?: string;
    model?: string;
    serialNo?: string;

    callType: CallType;

    problemDescription?: string;
    actionTaken?: string;
    materialUsed?: string;

    locationType?: LocationType;

    customerSignatureUrl?: string;
    signedDate?: string;
}

/**
 * Request payload accepted by PUT /api/service-reports/{id}.
 * Mirrors UpdateServiceReportRequest.java.
 */
export interface UpdateServiceReportRequest {
    reportDate: string;

    customerName: string;
    customerAddress?: string;
    department?: string;
    personContacted?: string;

    make?: string;
    model?: string;
    serialNo?: string;

    callType: CallType;

    problemDescription?: string;
    actionTaken?: string;
    materialUsed?: string;

    locationType?: LocationType;

    customerSignatureUrl?: string;
    signedDate?: string;
}

/**
 * Response returned by the backend.
 * Mirrors ServiceReportResponse.java.
 */
export interface ServiceReportResponse {
    id: number;
    reportNo: string;
    reportDate: string;

    customerName: string;
    customerAddress?: string;
    department?: string;
    personContacted?: string;

    createdById: number;

    make?: string;
    model?: string;
    serialNo?: string;

    callType: CallType;

    problemDescription?: string;
    actionTaken?: string;
    materialUsed?: string;

    locationType?: LocationType;

    customerSignatureUrl?: string;
    signedDate?: string;

    createdAt: string;
    updatedAt: string;
}

/**
 * Query parameters accepted by GET /api/service-reports/search.
 * Mirrors ServiceReportSearchRequest.java.
 */
export interface ServiceReportSearchRequest {
    customerName?: string;
    reportNo?: string;
    fromDate?: string;
    toDate?: string;
}

/**
 * Spring Data page response used by Service Reports.
 */
export interface PageResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    numberOfElements: number;
    first: boolean;
    last: boolean;
    empty: boolean;
}

export type ServiceReportTableRow = ServiceReportResponse;