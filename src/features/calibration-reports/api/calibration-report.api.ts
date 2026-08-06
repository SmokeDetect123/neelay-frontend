import {
  CalibrationFilter,
  CalibrationReport,
  CreateCalibrationReportRequest,
  UpdateCalibrationReportRequest,
} from "../types";

import { calibrationReportService } from "../services/calibration-report.service";

/**
 * ============================================================================
 * Calibration Report API
 *
 * During mock development this delegates to the mock service.
 *
 * During backend integration ONLY THIS FILE should change to Axios.
 * ============================================================================
 */
class CalibrationReportApi {
  async getReports(): Promise<CalibrationReport[]> {
    return calibrationReportService.getCalibrationReports();
  }

  async getReport(
    id: number
  ): Promise<CalibrationReport | null> {
    return calibrationReportService.getCalibrationReportById(
      id
    );
  }

  async createReport(
    request: CreateCalibrationReportRequest
  ): Promise<CalibrationReport> {
    return calibrationReportService.createCalibrationReport(
      request
    );
  }

  async updateReport(
    id: number,
    request: UpdateCalibrationReportRequest
  ): Promise<CalibrationReport | null> {
    return calibrationReportService.updateCalibrationReport(
      id,
      request
    );
  }

  async deleteReport(
    id: number
  ): Promise<boolean> {
    return calibrationReportService.deleteCalibrationReport(
      id
    );
  }

  async searchReports(
    filter: CalibrationFilter
  ): Promise<CalibrationReport[]> {
    return calibrationReportService.searchCalibrationReports(
      filter
    );
  }
}

export const calibrationReportApi =
  new CalibrationReportApi();