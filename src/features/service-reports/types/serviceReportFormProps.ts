import type { ServiceReportResponse } from "./serviceReport.types";

/**
 * Determines whether the Service Report form is being
 * used to create a new report or edit an existing report.
 */
export type ServiceReportFormMode =
    | "create"
    | "edit";

/**
 * Props accepted by ServiceReportForm.
 *
 * mode:
 * - "create" -> create a new Service Report
 * - "edit"   -> update an existing Service Report
 *
 * report:
 * - Required logically when mode === "edit"
 * - Not required when mode === "create"
 */
export interface ServiceReportFormProps {
    mode: ServiceReportFormMode;
    report?: ServiceReportResponse;
}