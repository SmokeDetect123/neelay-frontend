import type {
  InstallationFilter,
  InstallationReport,
  CreateInstallationReportRequest,
  UpdateInstallationReportRequest,
} from "../types";

import {
  mockInstallationReports,
} from "../mock";

class InstallationReportService {
  private reports: InstallationReport[] = [
    ...mockInstallationReports,
  ];

  async getInstallationReports(): Promise<
    InstallationReport[]
  > {
    return [...this.reports];
  }

  async getInstallationReportById(
    id: number,
  ): Promise<InstallationReport | null> {
    return (
      this.reports.find(
        (report) =>
          report.id === id,
      ) ?? null
    );
  }

  async createInstallationReport(
    request: CreateInstallationReportRequest,
  ): Promise<InstallationReport> {
    const nextReportId =
      this.reports.length > 0
        ? Math.max(
            ...this.reports.map(
              (report) => report.id,
            ),
          ) + 1
        : 1;

    let nextLineItemId =
      Math.max(
        0,
        ...this.reports.flatMap(
          (report) =>
            report.lineItems.map(
              (item) => item.id,
            ),
        ),
      ) + 1;

    const report: InstallationReport = {
      id: nextReportId,

      reportNo:
        `IR-${nextReportId
          .toString()
          .padStart(6, "0")}`,

      reportDate:
        request.reportDate,

      customerName:
        request.customerName,

      customerAddress:
        request.customerAddress ?? "",

      createdBy:
        "Administrator",

      note:
        request.note ?? "",

      customerSignatureUrl:
        request.customerSignatureUrl ??
        null,

      signedDate:
        request.signedDate ?? null,

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),

      lineItems:
        request.lineItems.map(
          (item) => ({
            id: nextLineItemId++,
            make: item.make,
            model: item.model,
            fabricationNo:
              item.fabricationNo,
            fitting: item.fitting,
            qty: item.qty,
            agent: item.agent,
            remarks: item.remarks,
          }),
        ),
    };

    this.reports.push(report);

    return report;
  }

  async updateInstallationReport(
    id: number,
    request: UpdateInstallationReportRequest,
  ): Promise<InstallationReport | null> {
    const index =
      this.reports.findIndex(
        (report) =>
          report.id === id,
      );

    if (index === -1) {
      return null;
    }

    const existing =
      this.reports[index];

    let nextLineItemId =
      Math.max(
        0,
        ...this.reports.flatMap(
          (report) =>
            report.lineItems.map(
              (item) => item.id,
            ),
        ),
      ) + 1;

    this.reports[index] = {
      ...existing,

      reportDate:
        request.reportDate ??
        existing.reportDate,

      customerName:
        request.customerName ??
        existing.customerName,

      customerAddress:
        request.customerAddress ??
        existing.customerAddress,

      note:
        request.note ??
        existing.note,

      customerSignatureUrl:
        request.customerSignatureUrl ??
        existing.customerSignatureUrl,

      signedDate:
        request.signedDate ??
        existing.signedDate,

      lineItems:
        request.lineItems?.map(
          (item) => ({
            id: nextLineItemId++,
            make: item.make,
            model: item.model,
            fabricationNo:
              item.fabricationNo,
            fitting: item.fitting,
            qty: item.qty,
            agent: item.agent,
            remarks: item.remarks,
          }),
        ) ?? existing.lineItems,

      updatedAt:
        new Date().toISOString(),
    };

    return this.reports[index];
  }

  async deleteInstallationReport(
    id: number,
  ): Promise<boolean> {
    const index =
      this.reports.findIndex(
        (report) =>
          report.id === id,
      );

    if (index === -1) {
      return false;
    }

    this.reports.splice(index, 1);

    return true;
  }

  async searchInstallationReports(
    filter: InstallationFilter,
  ): Promise<InstallationReport[]> {
    let reports = [
      ...this.reports,
    ];

    if (filter.customerName) {
      const value =
        filter.customerName.toLowerCase();

      reports =
        reports.filter(
          (report) =>
            report.customerName
              .toLowerCase()
              .includes(value),
        );
    }

    if (filter.reportNo) {
      const value =
        filter.reportNo.toLowerCase();

      reports =
        reports.filter(
          (report) =>
            report.reportNo
              .toLowerCase()
              .includes(value),
        );
    }

    if (filter.make) {
      const value =
        filter.make.toLowerCase();

      reports =
        reports.filter(
          (report) =>
            report.lineItems.some(
              (item) =>
                (item.make ?? "")
                  .toLowerCase()
                  .includes(value),
            ),
        );
    }

    if (filter.fabricationNo) {
      const value =
        filter.fabricationNo.toLowerCase();

      reports =
        reports.filter(
          (report) =>
            report.lineItems.some(
              (item) =>
                (item.fabricationNo ?? "")
                  .toLowerCase()
                  .includes(value),
            ),
        );
    }

    if (filter.fromDate) {
      reports =
        reports.filter(
          (report) =>
            report.reportDate >=
            filter.fromDate!,
        );
    }

    if (filter.toDate) {
      reports =
        reports.filter(
          (report) =>
            report.reportDate <=
            filter.toDate!,
        );
    }

    return reports;
  }
}

export const installationReportService =
  new InstallationReportService();