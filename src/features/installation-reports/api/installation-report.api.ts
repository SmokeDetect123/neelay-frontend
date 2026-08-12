import {
  InstallationFilter,
  InstallationReport,
  CreateInstallationReportRequest,
  UpdateInstallationReportRequest,
} from "../types";

import {
  installationReportService,
} from "../services";

class InstallationReportApi {
  /**
   * Returns every installation report.
   */
  async getReports(): Promise<
    InstallationReport[]
  > {
    return installationReportService.getInstallationReports();
  }

  /**
   * Returns a single report.
   */
  async getReport(
    id: number
  ): Promise<
    InstallationReport | null
  > {
    return installationReportService.getInstallationReportById(
      id
    );
  }

  /**
   * Creates a report.
   */
  async createReport(
    request: CreateInstallationReportRequest
  ): Promise<
    InstallationReport
  > {
    return installationReportService.createInstallationReport(
      request
    );
  }

  /**
   * Updates a report.
   */
  async updateReport(
    id: number,
    request: UpdateInstallationReportRequest
  ): Promise<
    InstallationReport | null
  > {
    return installationReportService.updateInstallationReport(
      id,
      request
    );
  }

  /**
   * Deletes a report.
   */
  async deleteReport(
    id: number
  ): Promise<boolean> {
    return installationReportService.deleteInstallationReport(
      id
    );
  }

  /**
   * Searches reports.
   */
  async searchReports(
    filter: InstallationFilter
  ): Promise<
    InstallationReport[]
  > {
    return installationReportService.searchInstallationReports(
      filter
    );
  }
}

export const installationReportApi =
  new InstallationReportApi();