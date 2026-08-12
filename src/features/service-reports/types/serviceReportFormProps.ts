import type {
    ServiceReportResponse,
} from "./serviceReport.types";

export type ServiceReportFormMode =
    | "create"
    | "edit";

export interface ServiceReportFormProps {
    mode: ServiceReportFormMode;

    report?: ServiceReportResponse;
}