import type {
    CallType,
    LocationType,
} from "./service-report.enums";

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

export interface ServiceReportSearchRequest {
    customerName?: string;
    reportNo?: string;
    fromDate?: string;
    toDate?: string;
}

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

export type ServiceReportTableRow =
    ServiceReportResponse;