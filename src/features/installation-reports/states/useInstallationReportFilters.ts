"use client";

import { useMemo, useState } from "react";

import {
  InstallationFilter,
  InstallationReport,
} from "../types";

interface UseInstallationReportFiltersReturn {
  filter: InstallationFilter;

  setFilter: React.Dispatch<
    React.SetStateAction<InstallationFilter>
  >;

  filteredReports(
    reports: InstallationReport[]
  ): InstallationReport[];
}

export function useInstallationReportFilters():
UseInstallationReportFiltersReturn {
  const [filter, setFilter] =
    useState<InstallationFilter>({
      reportNo: "",

      customerName: "",

      make: "",

      fabricationNo: "",

      fromDate: "",

      toDate: "",
    });

  const filteredReports = (
    reports: InstallationReport[]
  ) => {
    return reports.filter((report) => {
      if (
        filter.reportNo &&
        !report.reportNo
          .toLowerCase()
          .includes(
            filter.reportNo.toLowerCase()
          )
      ) {
        return false;
      }

      if (
        filter.customerName &&
        !report.customerName
          .toLowerCase()
          .includes(
            filter.customerName.toLowerCase()
          )
      ) {
        return false;
      }

      if (
        filter.make &&
        !report.lineItems.some((item) =>
          item.make
            .toLowerCase()
            .includes(
              filter.make.toLowerCase()
            )
        )
      ) {
        return false;
      }

      if (
        filter.fabricationNo &&
        !report.lineItems.some((item) =>
          item.fabricationNo
            .toLowerCase()
            .includes(
              filter.fabricationNo.toLowerCase()
            )
        )
      ) {
        return false;
      }

      if (
        filter.fromDate &&
        report.reportDate < filter.fromDate
      ) {
        return false;
      }

      if (
        filter.toDate &&
        report.reportDate > filter.toDate
      ) {
        return false;
      }

      return true;
    });
  };

  return useMemo(
    () => ({
      filter,

      setFilter,

      filteredReports,
    }),
    [filter]
  );
}