/**
 * UI form model for creating/editing a Service Report.
 *
 * This intentionally remains independent from the backend DTO.
 * The form contains values required by the UI and can later be
 * transformed into CreateServiceReportRequest by the service layer.
 */

export interface ServiceReportFormValues {
    customerId: number;

    customerName: string;
    customerAddress: string;
    department: string;
    personContacted: string;

    attendedBy: number;

    reportDate: string;

    make: string;
    model: string;
    serialNo: string;

    callType: string;
    locationType: string;

    problemDescription: string;
    actionTaken: string;
    materialUsed: string;

    customerSignatureUrl: string;
    signedDate: string;
}