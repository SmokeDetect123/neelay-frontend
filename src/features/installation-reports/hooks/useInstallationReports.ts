"use client";

import { useQuery } from "@tanstack/react-query";

import {
  installationReportApi,
} from "../api";

export function useInstallationReports() {
  return useQuery({
    queryKey: ["installation-reports"],

    queryFn: () =>
      installationReportApi.getReports(),

    staleTime: 60_000,
  });
}