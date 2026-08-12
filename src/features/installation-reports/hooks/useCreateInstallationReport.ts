"use client";

import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  installationReportApi,
} from "../api";

import {
  CreateInstallationReportRequest,
  InstallationReport,
} from "../types";

export function useCreateInstallationReport() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      request: CreateInstallationReportRequest
    ) =>
      installationReportApi.createReport(
        request
      ),

    onSuccess: (
      createdReport
    ) => {
      queryClient.setQueryData(
        [
          "installation-report",
          createdReport.id,
        ],
        createdReport
      );

      queryClient.setQueryData<
        InstallationReport[]
      >(
        [
          "installation-reports",
        ],
        (
          old = []
        ) => [
          ...old,
          createdReport,
        ]
      );

      queryClient.invalidateQueries({
        queryKey: [
          "installation-statistics",
        ],
      });

      toast.success(
        "Installation report created successfully."
      );
    },

    onError: (
      error: Error
    ) => {
      toast.error(
        error.message ??
          "Failed to create installation report."
      );
    },
  });
}