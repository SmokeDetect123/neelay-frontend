import type { CalibrationReport } from "./calibration-report.types";

/**
 * ============================================================================
 * Single Calibration Report Response
 * ============================================================================
 */
export interface CalibrationReportResponse {
  data: CalibrationReport;
}

/**
 * ============================================================================
 * Legacy/List Response
 * ============================================================================
 *
 * Kept because existing frontend code may use this shape.
 */
export interface CalibrationReportListResponse {
  data: CalibrationReport[];

  totalElements: number;

  totalPages: number;

  page: number;

  size: number;
}

/**
 * ============================================================================
 * Spring Boot Page<CalibrationReportResponse>
 * ============================================================================
 *
 * Matches the actual response returned by:
 *
 * GET /api/calibration-reports?page=0&size=10
 */
export interface CalibrationReportPage {
  content: CalibrationReport[];

  totalElements: number;

  totalPages: number;

  number: number;

  size: number;

  first: boolean;

  last: boolean;

  numberOfElements?: number;

  empty?: boolean;
}