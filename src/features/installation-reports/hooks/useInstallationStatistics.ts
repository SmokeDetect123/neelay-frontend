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
  } =
    useInstallationReports();

  return useMemo(
    () => ({
      totalReports:
        data.length,

      totalLineItems:
        data.reduce(
          (
            total,
            report
          ) =>
            total +
            report.lineItems.length,
          0
        ),

      uniqueCustomers:
        new Set(
          data.map(
            (
              report
            ) =>
              report.customerName
          )
        ).size,

      reportsThisMonth:
        data.filter(
          (
            report
          ) => {
            const today =
              new Date();

            const reportDate =
              new Date(
                report.reportDate
              );

            return (
              reportDate.getMonth() ===
                today.getMonth() &&
              reportDate.getFullYear() ===
                today.getFullYear()
            );
          }
        ).length,
    }),
    [data]
  );
}