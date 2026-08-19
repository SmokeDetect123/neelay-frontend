"use client";

import { useQuery } from "@tanstack/react-query";

import {
  installationReportApi,
} from "../api";

export function useInstallationReports(
  page = 0,
  size = 10,
) {
  return useQuery({
    queryKey: [
      "installation-reports",
      page,
      size,
    ],

    queryFn: () =>
      installationReportApi.getReports(
        page,
        size,
      ),

    staleTime: 30_000,
  });
}