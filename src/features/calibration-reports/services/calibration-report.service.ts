import {
  CalibrationFilter,
  CalibrationReport,
  CreateCalibrationReportRequest,
  UpdateCalibrationReportRequest,
  CalibrationStatus,
} from "../types";

import { mockCalibrationReports } from "../mock/mockCalibrationReports";

class CalibrationReportService {
  private reports: CalibrationReport[] = [...mockCalibrationReports];

  async getCalibrationReports(): Promise<CalibrationReport[]> {
    return [...this.reports];
  }

  async getCalibrationReportById(
    id: number
  ): Promise<CalibrationReport | null> {
    return (
      this.reports.find((report) => report.id === id) ?? null
    );
  }

  async createCalibrationReport(
    request: CreateCalibrationReportRequest
  ): Promise<CalibrationReport> {
    const nextId =
      this.reports.length > 0
        ? Math.max(...this.reports.map((r) => r.id)) + 1
        : 1;

    const now = new Date().toISOString();

    const newReport: CalibrationReport = {
      id: nextId,

      reportNo: `CR-${nextId
        .toString()
        .padStart(6, "0")}`,

      reportDate: request.reportDate,

      customerName: request.customerName,

      customerAddress:
        request.customerAddress ?? "",

      createdBy: "Admin",

      agentType: request.agentType ?? "",

      fillingSystem:
        request.fillingSystem ?? "",

      connectorSystem:
        request.connectorSystem ?? "",

      serialNo: request.serialNo ?? "",

      make: request.make ?? "",

      type: request.type ?? "",

      testSignature: request.testSignatureUrl ?? "",

      testSignatureDate:
        request.testSignatureDate,

      carriedGas:
        request.carriedGas ?? "",

      leakageTest:
        request.leakageTest ?? "",

      test1Record000:
        request.test1Record000 ?? 0,

      test1Record060:
        request.test1Record060 ?? 0,

      test1Record100:
        request.test1Record100 ?? 0,

      test1Record200:
        request.test1Record200 ?? 0,

      test1Record300:
        request.test1Record300 ?? 0,

      test1Record400:
        request.test1Record400 ?? 0,

      test1Record500:
        request.test1Record500 ?? 0,

      test1Record600:
        request.test1Record600 ?? 0,

      test1Record700:
        request.test1Record700 ?? 0,

      test1Record800:
        request.test1Record800 ?? 0,

      test2Record000:
        request.test2Record000 ?? 0,

      test2Record060:
        request.test2Record060 ?? 0,

      test2Record100:
        request.test2Record100 ?? 0,

      test2Record200:
        request.test2Record200 ?? 0,

      test2Record300:
        request.test2Record300 ?? 0,

      test2Record400:
        request.test2Record400 ?? 0,

      test2Record500:
        request.test2Record500 ?? 0,

      test2Record600:
        request.test2Record600 ?? 0,

      test2Record700:
        request.test2Record700 ?? 0,

      test2Record800:
        request.test2Record800 ?? 0,

      resistance4lmin:
        request.resistance4lmin ?? 0,

      leakTestPass:
        request.leakTestPass ?? false,

      driedOutPass:
        request.driedOutPass ?? false,

      finalLeakTestPass:
        request.finalLeakTestPass ?? false,

      overallPass:
        request.overallPass ?? false,

      overallComment:
        request.overallComment ?? "",

      biomedicalEngineerSignatureUrl:
        request.biomedicalEngineerSignatureUrl ??
        "",

      serviceEngineerSignatureUrl:
        request.serviceEngineerSignatureUrl ??
        "",

      signedDate: request.signedDate,

      status: CalibrationStatus.PENDING,

      createdAt: now,

      updatedAt: now,
    };

    this.reports.push(newReport);

    return newReport;
  }

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

    const current = this.reports[index];

    this.reports[index] = {
      ...current,

      reportDate:
        request.reportDate ??
        current.reportDate,

      customerName:
        request.customerName ??
        current.customerName,

      customerAddress:
        request.customerAddress ??
        current.customerAddress,

      agentType:
        request.agentType ??
        current.agentType,

      fillingSystem:
        request.fillingSystem ??
        current.fillingSystem,

      connectorSystem:
        request.connectorSystem ??
        current.connectorSystem,

      serialNo:
        request.serialNo ??
        current.serialNo,

      make:
        request.make ??
        current.make,

      type:
        request.type ??
        current.type,

      testSignature:
        request.testSignatureUrl ??
        current.testSignature,

      testSignatureDate:
        request.testSignatureDate ??
        current.testSignatureDate,

      carriedGas:
        request.carriedGas ??
        current.carriedGas,

      leakageTest:
        request.leakageTest ??
        current.leakageTest,

      test1Record000:
        request.test1Record000 ??
        current.test1Record000,

      test1Record060:
        request.test1Record060 ??
        current.test1Record060,

      test1Record100:
        request.test1Record100 ??
        current.test1Record100,

      test1Record200:
        request.test1Record200 ??
        current.test1Record200,

      test1Record300:
        request.test1Record300 ??
        current.test1Record300,

      test1Record400:
        request.test1Record400 ??
        current.test1Record400,

      test1Record500:
        request.test1Record500 ??
        current.test1Record500,

      test1Record600:
        request.test1Record600 ??
        current.test1Record600,

      test1Record700:
        request.test1Record700 ??
        current.test1Record700,

      test1Record800:
        request.test1Record800 ??
        current.test1Record800,

      test2Record000:
        request.test2Record000 ??
        current.test2Record000,

      test2Record060:
        request.test2Record060 ??
        current.test2Record060,

      test2Record100:
        request.test2Record100 ??
        current.test2Record100,

      test2Record200:
        request.test2Record200 ??
        current.test2Record200,

      test2Record300:
        request.test2Record300 ??
        current.test2Record300,

      test2Record400:
        request.test2Record400 ??
        current.test2Record400,

      test2Record500:
        request.test2Record500 ??
        current.test2Record500,

      test2Record600:
        request.test2Record600 ??
        current.test2Record600,

      test2Record700:
        request.test2Record700 ??
        current.test2Record700,

      test2Record800:
        request.test2Record800 ??
        current.test2Record800,

      resistance4lmin:
        request.resistance4lmin ??
        current.resistance4lmin,

      leakTestPass:
        request.leakTestPass ??
        current.leakTestPass,

      driedOutPass:
        request.driedOutPass ??
        current.driedOutPass,

      finalLeakTestPass:
        request.finalLeakTestPass ??
        current.finalLeakTestPass,

      overallPass:
        request.overallPass ??
        current.overallPass,

      overallComment:
        request.overallComment ??
        current.overallComment,

      biomedicalEngineerSignatureUrl:
        request.biomedicalEngineerSignatureUrl ??
        current.biomedicalEngineerSignatureUrl,

      serviceEngineerSignatureUrl:
        request.serviceEngineerSignatureUrl ??
        current.serviceEngineerSignatureUrl,

      signedDate:
        request.signedDate ??
        current.signedDate,

      updatedAt: new Date().toISOString(),
    };

    return this.reports[index];
  }

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

  async searchCalibrationReports(
    filter: CalibrationFilter
  ): Promise<CalibrationReport[]> {
    let results = [...this.reports];

    if (filter.search) {
      const value =
        filter.search.toLowerCase();

      results = results.filter(
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
      results = results.filter(
        (report) =>
          report.status === filter.status
      );
    }

    return results;
  }
}

export const calibrationReportService =
  new CalibrationReportService();