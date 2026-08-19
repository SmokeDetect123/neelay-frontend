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
        request,
      ),

    onSuccess: (
      updatedReport,
    ) => {
      /*
       * updateReport() can return null
       * when the report does not exist.
       *
       * Do not access updatedReport.id
       * until null has been eliminated.
       */
      if (!updatedReport) {
        toast.error(
          "Installation report could not be updated because it was not found.",
        );

        return;
      }

      /*
       * Update the individual report cache.
       */
      queryClient.setQueryData(
        [
          "installation-report",
          updatedReport.id,
        ],
        updatedReport,
      );

      /*
       * Update the installation report list cache.
       */
      queryClient.setQueryData<
        InstallationReport[]
      >(
        [
          "installation-reports",
        ],
        (
          old = [],
        ) =>
          old.map(
            (
              report,
            ) =>
              report.id ===
              updatedReport.id
                ? updatedReport
                : report,
          ),
      );

      /*
       * Statistics depend on
       * the installation report collection.
       */
      queryClient.invalidateQueries({
        queryKey: [
          "installation-statistics",
        ],
      });

      toast.success(
        "Installation report updated successfully.",
      );
    },

    onError: (
      error,
    ) => {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update installation report.",
      );
    },
  });
}