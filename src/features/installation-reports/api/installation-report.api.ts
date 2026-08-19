import {
  InstallationReport,
  CreateInstallationReportRequest,
  UpdateInstallationReportRequest,
} from "../types";

import { apiClient } from "@/services/api-client";

const INSTALLATION_REPORTS_ENDPOINT =
  "/installation-reports";

/**
 * Query parameters accepted by:
 *
 * GET /api/installation-reports/search
 *
 * These properties are optional because an empty search
 * request is valid.
 */
export interface InstallationReportSearchParams {
  reportNo?: string;
  customerName?: string;
  make?: string;
  fabricationNo?: string;
  fromDate?: string;
  toDate?: string;

  page?: number;
  size?: number;
  sort?: string | string[];
}

/**
 * Spring Data Page response.
 */
export interface InstallationReportPage {
  content: InstallationReport[];

  totalElements: number;
  totalPages: number;

  size: number;
  number: number;
  numberOfElements: number;

  first: boolean;
  last: boolean;
  empty: boolean;
}

class InstallationReportApi {
  /**
   * Creates an installation report.
   */
  async createReport(
    request: CreateInstallationReportRequest,
  ): Promise<InstallationReport> {
    return apiClient.post<
      InstallationReport,
      CreateInstallationReportRequest
    >(
      INSTALLATION_REPORTS_ENDPOINT,
      request,
    );
  }

  /**
   * Returns a single installation report.
   */
  async getReport(
    id: number,
  ): Promise<InstallationReport> {
    return apiClient.get<InstallationReport>(
      `${INSTALLATION_REPORTS_ENDPOINT}/${id}`,
    );
  }

  /**
   * Returns installation reports for the requested page.
   *
   * The backend search endpoint is used even when
   * there are no filters.
   */
  async getReports(
    page = 0,
    size = 10,
  ): Promise<InstallationReport[]> {
    const response =
      await this.searchReports({
        page,
        size,
      });

    return response.content;
  }

  /**
   * Updates an installation report.
   */
  async updateReport(
    id: number,
    request: UpdateInstallationReportRequest,
  ): Promise<InstallationReport> {
    return apiClient.put<
      InstallationReport,
      UpdateInstallationReportRequest
    >(
      `${INSTALLATION_REPORTS_ENDPOINT}/${id}`,
      request,
    );
  }

  /**
   * Searches installation reports.
   *
   * All search fields are optional because the backend
   * accepts an empty search request.
   */
  async searchReports(
    filter: InstallationReportSearchParams = {},
  ): Promise<InstallationReportPage> {
    const params = new URLSearchParams();

    const {
      reportNo,
      customerName,
      make,
      fabricationNo,
      fromDate,
      toDate,
      page = 0,
      size = 10,
      sort = "createdAt,desc",
    } = filter;

    params.set(
      "page",
      String(page),
    );

    params.set(
      "size",
      String(size),
    );

    if (Array.isArray(sort)) {
      for (const value of sort) {
        params.append("sort", value);
      }
    } else if (sort) {
      params.set("sort", sort);
    }

    if (reportNo?.trim()) {
      params.set(
        "reportNo",
        reportNo.trim(),
      );
    }

    if (customerName?.trim()) {
      params.set(
        "customerName",
        customerName.trim(),
      );
    }

    if (make?.trim()) {
      params.set(
        "make",
        make.trim(),
      );
    }

    if (fabricationNo?.trim()) {
      params.set(
        "fabricationNo",
        fabricationNo.trim(),
      );
    }

    if (fromDate) {
      params.set(
        "fromDate",
        fromDate,
      );
    }

    if (toDate) {
      params.set(
        "toDate",
        toDate,
      );
    }

    return apiClient.get<InstallationReportPage>(
      `${INSTALLATION_REPORTS_ENDPOINT}/search?${params.toString()}`,
    );
  }
}

export const installationReportApi =
  new InstallationReportApi();