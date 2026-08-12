"use client";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  installationReportApi,
} from "../api";

import {
  InstallationReport,
} from "../types";

export function useInstallationReport(
  id: number
) {
  const queryClient =
    useQueryClient();

  return useQuery<
    InstallationReport | null
  >({
    queryKey: [
      "installation-report",
      id,
    ],

    queryFn: () =>
      installationReportApi.getReport(id),

    enabled:
      Number.isFinite(id) &&
      id > 0,

    initialData: () => {
      const cached =
        queryClient.getQueryData<InstallationReport>([
          "installation-report",
          id,
        ]);

      if (cached) {
        return cached;
      }

      const reports =
        queryClient.getQueryData<
          InstallationReport[]
        >([
          "installation-reports",
        ]);

      return (
        reports?.find(
          (report) =>
            report.id === id
        ) ?? null
      );
    },

    staleTime: 60_000,
  });
}