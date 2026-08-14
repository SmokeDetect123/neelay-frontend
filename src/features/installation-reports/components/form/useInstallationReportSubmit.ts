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

import type {
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

/**
 * Converts the customer signature form value into
 * the string URL expected by the backend request.
 */
function normalizeCustomerSignatureUrl(
  value: string | File | undefined
): string | undefined {
  if (typeof value === "string") {
    return value;
  }

  return undefined;
}

/**
 * Converts InstallationReportFormValues into the
 * request shape expected by the backend.
 *
 * Important:
 * The form schema currently exposes lineItems[].qty
 * as unknown, while the backend contract requires
 * qty to be a number.
 */
function normalizeInstallationReportValues(
  values: InstallationReportFormValues
) {
  return {
    ...values,

    customerSignatureUrl:
      normalizeCustomerSignatureUrl(
        values.customerSignatureUrl
      ),

    lineItems: values.lineItems.map((item) => ({
      ...item,
      qty: Number(item.qty),
    })),
  };
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

  const onSubmit: SubmitHandler<InstallationReportFormValues> =
    async (values) => {
      try {
        /**
         * Convert the form values to the backend request shape.
         */
        const normalizedValues =
          normalizeInstallationReportValues(values);

        /**
         * ========================================================
         * EDIT
         * ========================================================
         */
        if (mode === "edit" && report) {
          const updatedReport =
            await updateMutation.mutateAsync({
              id: report.id,
              request: normalizedValues,
            });

          reset(values);

          router.refresh();

          if (!updatedReport) {
            return;
          }

          router.replace(
            `/installation-reports/${updatedReport.id}`
          );

          return;
        }

        /**
         * ========================================================
         * CREATE
         * ========================================================
         */
        const createdReport =
          await createMutation.mutateAsync(
            normalizedValues
          );

        if (!createdReport) {
          return;
        }

        reset(installationReportDefaultValues);

        router.refresh();

        router.replace(
          `/installation-reports/${createdReport.id}`
        );
      } catch (error) {
        console.error(
          "Failed to submit installation report:",
          error
        );
      }
    };

  const isSubmitting =
    createMutation.isPending ||
    updateMutation.isPending;

  return {
    onSubmit,
    isSubmitting,
  };
}