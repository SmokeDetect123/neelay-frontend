"use client";

import { useMemo } from "react";

import {
  useInstallationReports,
} from ".";

import {
  InstallationStatistics,
} from "../types";

export function useInstallationStatistics(): InstallationStatistics {
  const {
    data = [],
  } = useInstallationReports();

  const reports = data;

  return useMemo(
    () => ({
      totalReports:
        reports.length,

      totalLineItems:
        reports.reduce(
          (
            total,
            report,
          ) =>
            total +
            report.lineItems.length,
          0,
        ),

      uniqueCustomers:
        new Set(
          reports.map(
            (report) =>
              report.customerName,
          ),
        ).size,

      reportsThisMonth:
        reports.filter(
          (report) => {
            const today =
              new Date();

            const reportDate =
              new Date(
                report.reportDate,
              );

            return (
              reportDate.getMonth() ===
                today.getMonth() &&
              reportDate.getFullYear() ===
                today.getFullYear()
            );
          },
        ).length,
    }),
    [reports],
  );
}