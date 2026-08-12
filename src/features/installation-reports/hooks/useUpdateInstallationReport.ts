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
  InstallationReport,
  UpdateInstallationReportRequest,
} from "../types";

interface UpdateInstallationReportMutation {
  id: number;

  request: UpdateInstallationReportRequest;
}

export function useUpdateInstallationReport() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      request,
    }: UpdateInstallationReportMutation) =>
      installationReportApi.updateReport(
        id,
        request
      ),

    onSuccess: (
      updatedReport
    ) => {
      if (!updatedReport) {
        return;
      }

      queryClient.setQueryData(
        [
          "installation-report",
          updatedReport.id,
        ],
        updatedReport
      );

      queryClient.setQueryData<
        InstallationReport[]
      >(
        [
          "installation-reports",
        ],
        (
          old = []
        ) =>
          old.map(
            (
              report
            ) =>
              report.id ===
              updatedReport.id
                ? updatedReport
                : report
          )
      );

      queryClient.invalidateQueries({
        queryKey: [
          "installation-statistics",
        ],
      });

      toast.success(
        "Installation report updated successfully."
      );
    },

    onError: () => {
      toast.error(
        "Failed to update installation report."
      );
    },
  });
}