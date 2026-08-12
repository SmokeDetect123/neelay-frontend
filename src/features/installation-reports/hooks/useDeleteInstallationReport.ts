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
} from "../types";

export function useDeleteInstallationReport() {
  const queryClient =
    useQueryClient();

  return useMutation({
    mutationFn: (
      id: number
    ) =>
      installationReportApi.deleteReport(
        id
      ),

    onSuccess: (
      _,
      id
    ) => {
      queryClient.removeQueries({
        queryKey: [
          "installation-report",
          id,
        ],
      });

      queryClient.setQueryData<
        InstallationReport[]
      >(
        [
          "installation-reports",
        ],
        (
          old = []
        ) =>
          old.filter(
            (
              report
            ) =>
              report.id !==
              id
          )
      );

      queryClient.invalidateQueries({
        queryKey: [
          "installation-statistics",
        ],
      });

      toast.success(
        "Installation report deleted successfully."
      );
    },

    onError: () => {
      toast.error(
        "Failed to delete installation report."
      );
    },
  });
}