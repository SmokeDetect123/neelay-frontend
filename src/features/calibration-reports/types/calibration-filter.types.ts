import { CalibrationStatus } from "./calibration.enums";

/**
 * ============================================================================
 * Frontend Calibration Filter
 * ============================================================================
 *
 * Used by the existing calibration-report UI.
 */
export interface CalibrationFilter {
  search?: string;

  customerId?: number;

  reportNo?: string;

  status?: CalibrationStatus;

  fromDate?: string;

  toDate?: string;

  page?: number;

  size?: number;

  sortBy?: string;

  sortDirection?: "asc" | "desc";
}

/**
 * ============================================================================
 * Backend Search Request
 * ============================================================================
 *
 * Mirrors:
 *
 * CalibrationReportSearchRequest.java
 *
 * GET /api/calibration-reports/search
 *
 * Supported backend filters:
 * - customerName
 * - reportNo
 * - serialNo
 * - make
 * - fromDate
 * - toDate
 */
export interface CalibrationReportSearchRequest {
  customerName?: string;

  reportNo?: string;

  serialNo?: string;

  make?: string;

  fromDate?: string;

  toDate?: string;
}