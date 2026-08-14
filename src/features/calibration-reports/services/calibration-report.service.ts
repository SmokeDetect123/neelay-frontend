import {
  CalibrationFilter,
  CalibrationReport,
  CreateCalibrationReportRequest,
  UpdateCalibrationReportRequest,
} from "../types";

import { mockCalibrationReports } from "../mock/mockCalibrationReports";

class CalibrationReportService {
  private reports: CalibrationReport[] = [
    ...mockCalibrationReports,
  ];

  /**
   * Returns all calibration reports.
   */
  async getCalibrationReports(): Promise<CalibrationReport[]> {
    return [...this.reports];
  }

  /**
   * Returns a single calibration report by ID.
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
   * Creates a calibration report.
   *
   * NOTE:
   * This is currently the mock implementation.
   * During backend integration this method will be
   * replaced by the real API request.
   */
  async createCalibrationReport(
  request: CreateCalibrationReportRequest
): Promise<CalibrationReport> {
  const nextId =
    this.reports.length > 0
      ? Math.max(
          ...this.reports.map((report) => report.id)
        ) + 1
      : 1;

  const template = this.reports[0];

  const now = new Date().toISOString();

  const newReport: CalibrationReport = {
    /*
     * Start from the existing mock report.
     *
     * This guarantees that fields which are not supplied
     * by the current form still have valid values.
     */
    ...template,

    /*
     * Generated fields
     */
    id: nextId,

    reportNo: `CR-${nextId
      .toString()
      .padStart(6, "0")}`,

    reportDate:
      request.reportDate ??
      template.reportDate,

    /*
     * Customer
     */
    customerName:
      request.customerName ??
      template.customerName,

    customerAddress:
      request.customerAddress ??
      template.customerAddress,

    /*
     * User / report information
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

    /*
     * Signature
     */
    testSignatureUrl:
      request.testSignatureUrl ??
      template.testSignatureUrl,

    /*
     * Calibration information
     */
    carriedGas:
      request.carriedGas ??
      template.carriedGas,

    leakageTest:
      request.leakageTest ??
      template.leakageTest,

    /*
     * Test Record Set 1
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

    /*
     * Test Record Set 2
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

    /*
     * Results
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

    /*
     * Signatures
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

    /*
     * Timestamps
     */
    createdAt: now,

    updatedAt: now,
  };

  this.reports.push(newReport);

  return newReport;
}
  /**
   * Updates an existing calibration report.
   *
   * UpdateCalibrationReportRequest is a Partial request,
   * therefore every incoming field may be undefined.
   *
   * We retain the existing value whenever the caller
   * does not provide a new value.
   */
  async updateCalibrationReport(
    id: number,
    request: UpdateCalibrationReportRequest
  ): Promise<CalibrationReport | null> {
    const index =
      this.reports.findIndex(
        (report) => report.id === id
      );

    if (index === -1) {
      return null;
    }

    const existingReport =
      this.reports[index];

    const updatedReport: CalibrationReport = {
      ...existingReport,

      reportDate:
        request.reportDate ??
        existingReport.reportDate,

      customerName:
        request.customerName ??
        existingReport.customerName,

      customerAddress:
        request.customerAddress ??
        existingReport.customerAddress,

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

      testSignatureUrl:
        request.testSignatureUrl ??
        existingReport.testSignatureUrl,

      carriedGas:
        request.carriedGas ??
        existingReport.carriedGas,

      leakageTest:
        request.leakageTest ??
        existingReport.leakageTest,

      /*
       * Test Record Set 1
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

      /*
       * Test Record Set 2
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

      /*
       * CalibrationReport.overallPass is currently
       * OverallResult, whereas the request uses boolean.
       *
       * Do not assign request.overallPass here because
       * boolean is not assignable to OverallResult.
       */
      overallPass:
        existingReport.overallPass,

      overallComment:
        request.overallComment ??
        existingReport.overallComment,

      biomedicalEngineerSignatureUrl:
        request.biomedicalEngineerSignatureUrl ??
        existingReport.biomedicalEngineerSignatureUrl,

      serviceEngineerSignatureUrl:
        request.serviceEngineerSignatureUrl ??
        existingReport.serviceEngineerSignatureUrl,

      signedDate:
        request.signedDate ??
        existingReport.signedDate,

      /*
       * ID, report number and creation timestamp are
       * intentionally preserved.
       */
      id: existingReport.id,

      reportNo:
        existingReport.reportNo,

      createdBy:
        existingReport.createdBy,

      createdAt:
        existingReport.createdAt,

      status:
        existingReport.status,

      updatedAt:
        new Date().toISOString(),
    };

    this.reports[index] =
      updatedReport;

    return updatedReport;
  }

  /**
   * Deletes a calibration report.
   *
   * NOTE:
   * This exists only for the mock service.
   * The real backend requirement is that
   * calibration reports are not deletable.
   */
  async deleteCalibrationReport(
    id: number
  ): Promise<boolean> {
    const index =
      this.reports.findIndex(
        (report) => report.id === id
      );

    if (index === -1) {
      return false;
    }

    this.reports.splice(index, 1);

    return true;
  }

  /**
   * Performs client-side filtering/search.
   *
   * This will later be replaced by backend
   * filtering/search parameters.
   */
  async searchCalibrationReports(
    filter: CalibrationFilter
  ): Promise<CalibrationReport[]> {
    let results = [
      ...this.reports,
    ];

    if (filter.search) {
      const value =
        filter.search.toLowerCase();

      results =
        results.filter(
          (report) =>
            report.reportNo
              .toLowerCase()
              .includes(value) ||
            report.customerName
              .toLowerCase()
              .includes(value) ||
            report.serialNo
              .toLowerCase()
              .includes(value)
        );
    }

    if (filter.status) {
      results =
        results.filter(
          (report) =>
            report.status ===
            filter.status
        );
    }

    return results;
  }
}

export const calibrationReportService =
  new CalibrationReportService();