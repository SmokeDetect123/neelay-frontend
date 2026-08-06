import { CalibrationReport } from "./calibration-report.types";

export interface CalibrationReportResponse {
  data: CalibrationReport;
}

export interface CalibrationReportListResponse {
  data: CalibrationReport[];

  totalElements: number;

  totalPages: number;

  page: number;

  size: number;
}