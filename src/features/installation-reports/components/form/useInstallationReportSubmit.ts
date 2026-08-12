"use client";

import { useRouter } from "next/navigation";

import type {
  SubmitHandler,
  UseFormReset,
} from "react-hook-form";

import {
  installationReportDefaultValues,
  type InstallationReportFormValues,
} from "../../schemas";

import {
  InstallationReport,
} from "../../types";

import {
  useCreateInstallationReport,
  useUpdateInstallationReport,
} from "../../hooks";

interface UseInstallationReportSubmitProps {
  report?: InstallationReport;
  mode: "create" | "edit";
  reset: UseFormReset<InstallationReportFormValues>;
}

interface UseInstallationReportSubmitReturn {
  onSubmit: SubmitHandler<InstallationReportFormValues>;
  isSubmitting: boolean;
}

export function useInstallationReportSubmit({
  report,
  mode,
  reset,
}: UseInstallationReportSubmitProps): UseInstallationReportSubmitReturn {
  const router = useRouter();

  const createMutation =
    useCreateInstallationReport();

  const updateMutation =
    useUpdateInstallationReport();

  const onSubmit: SubmitHandler<
    InstallationReportFormValues
  > = async (values) => {
    try {
      /**
       * -------------------------
       * CREATE REPORT
       * -------------------------
       */
      if (mode === "create") {
        const createdReport =
          await createMutation.mutateAsync(
            values
          );

        reset(
          installationReportDefaultValues
        );

        router.refresh();

        router.replace(
          `/installation-reports/${createdReport.id}`
        );

        return;
      }

      /**
       * -------------------------
       * UPDATE REPORT
       * -------------------------
       */
      if (!report) {
        return;
      }

      const updatedReport =
        await updateMutation.mutateAsync({
          id: report.id,
          request: values,
        });

      /**
       * Clear dirty state by
       * resetting to saved values.
       */
      reset(values);

      /**
       * Refresh App Router cache.
       */
      router.refresh();

      /**
       * Return to the updated
       * report details page.
       */
      router.replace(
        `/installation-reports/${updatedReport.id}`
      );
    } catch (error) {
      console.error(error);
    }
  };

  return {
    onSubmit,

    isSubmitting:
      createMutation.isPending ||
      updateMutation.isPending,
  };
}