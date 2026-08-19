import {
  CalibrationFilter,
  CalibrationReport,
  CreateCalibrationReportRequest,
  UpdateCalibrationReportRequest,
} from "../types";

import { mockCalibrationReports } from "../mock/mockCalibrationReports";

/**
 * ============================================================================
 * Internal compatibility type
 * ============================================================================
 *
 * Some versions of the frontend CalibrationReport type do not expose the
 * `status` property even though the calibration-report module uses status
 * filtering and some mock objects may contain it at runtime.
 *
 * We therefore treat status as an optional runtime property here.
 *
 * This keeps this service compatible with the currently resolved
 * CalibrationReport type without forcing changes into the rest of the module.
 */
type CalibrationReportWithOptionalStatus =
  CalibrationReport & {
    status?: CalibrationFilter["status"];
  };

/**
 * Safely retrieves a report status.
 *
 * The current CalibrationReport type may not declare `status`, but the
 * runtime object may still contain it.
 */
function getReportStatus(
  report: CalibrationReport
): CalibrationFilter["status"] | undefined {
  return (
    report as CalibrationReportWithOptionalStatus
  ).status;
}

/**
 * ============================================================================
 * Calibration Report Service
 * ============================================================================
 *
 * Current implementation:
 * - Uses mock calibration report data.
 * - Provides CRUD-like operations for frontend development.
 * - Provides client-side search/filtering.
 *
 * Future backend integration:
 * - The API layer will call the Spring Boot backend.
 * - This service can subsequently be removed or retained as a domain layer.
 */
class CalibrationReportService {
  /**
   * In-memory calibration reports.
   *
   * Start with the existing mock data.
   */
  private reports: CalibrationReport[] = [
    ...mockCalibrationReports,
  ];

  /**
   * ==========================================================================
   * GET ALL REPORTS
   * ==========================================================================
   *
   * Returns a copy of all calibration reports.
   *
   * Returning a new array prevents callers from directly mutating the
   * internal service state.
   */
  async getCalibrationReports(): Promise<CalibrationReport[]> {
    return [...this.reports];
  }

  /**
   * ==========================================================================
   * GET REPORT BY ID
   * ==========================================================================
   */
  async getCalibrationReportById(
    id: number
  ): Promise<CalibrationReport | null> {
    return (
      this.reports.find(
        (report) => report.id === id
      ) ?? null
    );
  }

  /**
   * ==========================================================================
   * CREATE CALIBRATION REPORT
   * ==========================================================================
   *
   * Current implementation:
   * - Generates a local numeric ID.
   * - Generates a temporary report number.
   * - Uses the first mock report as a template.
   * - Replaces fields supplied by the request.
   *
   * Backend integration will eventually replace this mock implementation
   * with an API POST request.
   */
  async createCalibrationReport(
    request: CreateCalibrationReportRequest
  ): Promise<CalibrationReport> {
    /**
     * Generate the next local ID.
     */
    const nextId =
      this.reports.length > 0
        ? Math.max(
            ...this.reports.map(
              (report) => report.id
            )
          ) + 1
        : 1;

    /**
     * Use the first mock report as a template.
     *
     * This allows fields not currently supplied by the form to remain
     * valid during mock development.
     */
    const template = this.reports[0];

    /**
     * Use one timestamp for creation and update.
     */
    const now = new Date().toISOString();

    /**
     * Construct the new report.
     */
    const newReport: CalibrationReport = {
      /**
       * Preserve all fields available on the mock template.
       */
      ...template,

      /**
       * Generated fields.
       */
      id: nextId,

      reportNo: `CR-${nextId
        .toString()
        .padStart(6, "0")}`,

      reportDate:
        request.reportDate ??
        template.reportDate,

      /**
       * Customer information.
       */
      customerName:
        request.customerName ??
        template.customerName,

      customerAddress:
        request.customerAddress ??
        template.customerAddress,

      /**
       * User / report information.
       */
      createdBy:
        template.createdBy,

      agentType:
        request.agentType ??
        template.agentType,

      fillingSystem:
        request.fillingSystem ??
        template.fillingSystem,

      connectorSystem:
        request.connectorSystem ??
        template.connectorSystem,

      serialNo:
        request.serialNo ??
        template.serialNo,

      make:
        request.make ??
        template.make,

      type:
        request.type ??
        template.type,

      /**
       * Signature.
       */
      testSignatureUrl:
        request.testSignatureUrl ??
        template.testSignatureUrl,

      /**
       * Calibration information.
       */
      carriedGas:
        request.carriedGas ??
        template.carriedGas,

      leakageTest:
        request.leakageTest ??
        template.leakageTest,

      /**
       * Test Record Set 1.
       */
      test1Record000:
        request.test1Record000 ??
        template.test1Record000,

      test1Record100:
        request.test1Record100 ??
        template.test1Record100,

      test1Record200:
        request.test1Record200 ??
        template.test1Record200,

      test1Record300:
        request.test1Record300 ??
        template.test1Record300,

      test1Record400:
        request.test1Record400 ??
        template.test1Record400,

      test1Record500:
        request.test1Record500 ??
        template.test1Record500,

      test1Record600:
        request.test1Record600 ??
        template.test1Record600,

      test1Record700:
        request.test1Record700 ??
        template.test1Record700,

      test1Record800:
        request.test1Record800 ??
        template.test1Record800,

      /**
       * Test Record Set 2.
       */
      test2Record000:
        request.test2Record000 ??
        template.test2Record000,

      test2Record100:
        request.test2Record100 ??
        template.test2Record100,

      test2Record200:
        request.test2Record200 ??
        template.test2Record200,

      test2Record300:
        request.test2Record300 ??
        template.test2Record300,

      test2Record400:
        request.test2Record400 ??
        template.test2Record400,

      test2Record500:
        request.test2Record500 ??
        template.test2Record500,

      test2Record600:
        request.test2Record600 ??
        template.test2Record600,

      test2Record700:
        request.test2Record700 ??
        template.test2Record700,

      test2Record800:
        request.test2Record800 ??
        template.test2Record800,

      /**
       * Calibration results.
       */
      resistance4lmin:
        request.resistance4lmin ??
        template.resistance4lmin,

      leakTestPass:
        request.leakTestPass ??
        template.leakTestPass,

      driedOutPass:
        request.driedOutPass ??
        template.driedOutPass,

      finalLeakTestPass:
        request.finalLeakTestPass ??
        template.finalLeakTestPass,

      overallPass:
        request.overallPass ??
        template.overallPass,

      overallComment:
        request.overallComment ??
        template.overallComment,

      /**
       * Signatures.
       */
      biomedicalEngineerSignatureUrl:
        request.biomedicalEngineerSignatureUrl ??
        template.biomedicalEngineerSignatureUrl,

      serviceEngineerSignatureUrl:
        request.serviceEngineerSignatureUrl ??
        template.serviceEngineerSignatureUrl,

      signedDate:
        request.signedDate ??
        template.signedDate,

      /**
       * Timestamps.
       */
      createdAt: now,

      updatedAt: now,
    };

    /**
     * Store the new report.
     */
    this.reports.push(newReport);

    return newReport;
  }

  /**
   * ==========================================================================
   * UPDATE CALIBRATION REPORT
   * ==========================================================================
   *
   * Updates an existing report while preserving fields that are not supplied
   * by the request.
   *
   * Immutable report fields:
   * - id
   * - reportNo
   * - createdBy
   * - createdAt
   *
   * updatedAt is regenerated on every update.
   */
  async updateCalibrationReport(
    id: number,
    request: UpdateCalibrationReportRequest
  ): Promise<CalibrationReport | null> {
    /**
     * Find the report.
     */
    const index =
      this.reports.findIndex(
        (report) => report.id === id
      );

    /**
     * Report does not exist.
     */
    if (index === -1) {
      return null;
    }

    /**
     * Preserve the existing report.
     */
    const existingReport =
      this.reports[index];

    /**
     * Construct updated report.
     *
     * We begin with the complete existing object and replace only fields
     * supplied by the update request.
     */
    const updatedReport: CalibrationReport = {
      ...existingReport,

      /**
       * Report information.
       */
      reportDate:
        request.reportDate ??
        existingReport.reportDate,

      /**
       * Customer information.
       */
      customerName:
        request.customerName ??
        existingReport.customerName,

      customerAddress:
        request.customerAddress ??
        existingReport.customerAddress,

      /**
       * Calibration configuration.
       */
      agentType:
        request.agentType ??
        existingReport.agentType,

      fillingSystem:
        request.fillingSystem ??
        existingReport.fillingSystem,

      connectorSystem:
        request.connectorSystem ??
        existingReport.connectorSystem,

      serialNo:
        request.serialNo ??
        existingReport.serialNo,

      make:
        request.make ??
        existingReport.make,

      type:
        request.type ??
        existingReport.type,

      /**
       * Signature.
       */
      testSignatureUrl:
        request.testSignatureUrl ??
        existingReport.testSignatureUrl,

      /**
       * Calibration information.
       */
      carriedGas:
        request.carriedGas ??
        existingReport.carriedGas,

      leakageTest:
        request.leakageTest ??
        existingReport.leakageTest,

      /**
       * Test Record Set 1.
       */
      test1Record000:
        request.test1Record000 ??
        existingReport.test1Record000,

      test1Record100:
        request.test1Record100 ??
        existingReport.test1Record100,

      test1Record200:
        request.test1Record200 ??
        existingReport.test1Record200,

      test1Record300:
        request.test1Record300 ??
        existingReport.test1Record300,

      test1Record400:
        request.test1Record400 ??
        existingReport.test1Record400,

      test1Record500:
        request.test1Record500 ??
        existingReport.test1Record500,

      test1Record600:
        request.test1Record600 ??
        existingReport.test1Record600,

      test1Record700:
        request.test1Record700 ??
        existingReport.test1Record700,

      test1Record800:
        request.test1Record800 ??
        existingReport.test1Record800,

      /**
       * Test Record Set 2.
       */
      test2Record000:
        request.test2Record000 ??
        existingReport.test2Record000,

      test2Record100:
        request.test2Record100 ??
        existingReport.test2Record100,

      test2Record200:
        request.test2Record200 ??
        existingReport.test2Record200,

      test2Record300:
        request.test2Record300 ??
        existingReport.test2Record300,

      test2Record400:
        request.test2Record400 ??
        existingReport.test2Record400,

      test2Record500:
        request.test2Record500 ??
        existingReport.test2Record500,

      test2Record600:
        request.test2Record600 ??
        existingReport.test2Record600,

      test2Record700:
        request.test2Record700 ??
        existingReport.test2Record700,

      test2Record800:
        request.test2Record800 ??
        existingReport.test2Record800,

      /**
       * Calibration results.
       */
      resistance4lmin:
        request.resistance4lmin ??
        existingReport.resistance4lmin,

      leakTestPass:
        request.leakTestPass ??
        existingReport.leakTestPass,

      driedOutPass:
        request.driedOutPass ??
        existingReport.driedOutPass,

      finalLeakTestPass:
        request.finalLeakTestPass ??
        existingReport.finalLeakTestPass,

      /**
       * The request and response models currently use different
       * representations for overallPass.
       *
       * Therefore preserve the existing response value here.
       */
      overallPass:
        existingReport.overallPass,

      overallComment:
        request.overallComment ??
        existingReport.overallComment,

      /**
       * Signatures.
       */
      biomedicalEngineerSignatureUrl:
        request.biomedicalEngineerSignatureUrl ??
        existingReport.biomedicalEngineerSignatureUrl,

      serviceEngineerSignatureUrl:
        request.serviceEngineerSignatureUrl ??
        existingReport.serviceEngineerSignatureUrl,

      signedDate:
        request.signedDate ??
        existingReport.signedDate,

      /**
       * Immutable fields.
       *
       * These assignments are explicit for clarity.
       */
      id: existingReport.id,

      reportNo:
        existingReport.reportNo,

      createdBy:
        existingReport.createdBy,

      createdAt:
        existingReport.createdAt,

      /**
       * Do NOT explicitly assign `status` here.
       *
       * The object spread above already preserves it at runtime when
       * it exists on the report object.
       *
       * This keeps the service compatible with versions of
       * CalibrationReport that do not declare `status`.
       */

      /**
       * Updated timestamp.
       */
      updatedAt:
        new Date().toISOString(),
    };

    /**
     * Store updated report.
     */
    this.reports[index] =
      updatedReport;

    return updatedReport;
  }

  /**
   * ==========================================================================
   * DELETE CALIBRATION REPORT
   * ==========================================================================
   *
   * NOTE:
   * This exists only for mock development.
   *
   * The actual backend requirement is that calibration reports are not
   * deletable. Therefore this method should not be wired to a destructive
   * UI action once backend integration is completed.
   */
  async deleteCalibrationReport(
    id: number
  ): Promise<boolean> {
    /**
     * Locate report.
     */
    const index =
      this.reports.findIndex(
        (report) => report.id === id
      );

    /**
     * Report does not exist.
     */
    if (index === -1) {
      return false;
    }

    /**
     * Remove from mock storage.
     */
    this.reports.splice(index, 1);

    return true;
  }

  /**
   * ==========================================================================
   * SEARCH / FILTER CALIBRATION REPORTS
   * ==========================================================================
   *
   * Current implementation performs filtering locally.
   *
   * Future backend implementation will move this logic to query parameters
   * handled by Spring Boot.
   */
  async searchCalibrationReports(
    filter: CalibrationFilter
  ): Promise<CalibrationReport[]> {
    /**
     * Work on a copy so the internal collection is never mutated.
     */
    let results = [
      ...this.reports,
    ];

    /**
     * Text search.
     *
     * Searches:
     * - Report number
     * - Customer name
     * - Serial number
     */
    if (filter.search) {
      const value =
        filter.search
          .trim()
          .toLowerCase();

      if (value.length > 0) {
        results =
          results.filter(
            (report) => {
              const reportNo =
                report.reportNo
                  .toLowerCase();

              const customerName =
                report.customerName
                  .toLowerCase();

              /**
               * serialNo can be null in the currently resolved
               * frontend type, so normalize it before calling
               * string methods.
               */
              const serialNo =
                String(
                  report.serialNo ?? ""
                ).toLowerCase();

              return (
                reportNo.includes(value) ||
                customerName.includes(value) ||
                serialNo.includes(value)
              );
            }
          );
      }
    }

    /**
     * Status filtering.
     *
     * `CalibrationReport` in the currently resolved type does not expose
     * status directly, so retrieve it through the compatibility helper.
     *
     * If the runtime mock object contains status, filtering works normally.
     */
    if (filter.status) {
      results =
        results.filter(
          (report) =>
            getReportStatus(report) ===
            filter.status
        );
    }

    return results;
  }
}

/**
 * Singleton service instance.
 */
export const calibrationReportService =
  new CalibrationReportService();