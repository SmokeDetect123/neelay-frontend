"use client";

import { useEffect } from "react";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  installationReportDefaultValues,
  installationReportSchema,
  type InstallationReportFormValues,
} from "../../schemas";

import type {
  InstallationReport,
} from "../../types";

import {
  useInstallationReportSubmit,
} from "./useInstallationReportSubmit";

import {
  CustomerInformationSection,
  InstallationItemsSection,
  ReportInformationSection,
  SignatureSection,
} from "./sections";

import InstallationReportFormFooter from "./InstallationReportFormFooter";

interface InstallationReportFormProps {
  report?: InstallationReport;
  mode?: "create" | "edit";
}

export default function InstallationReportForm({
  report,
  mode = "create",
}: InstallationReportFormProps) {
  const methods =
    useForm<InstallationReportFormValues>({
      resolver: zodResolver(
        installationReportSchema,
      ),

      defaultValues:
        installationReportDefaultValues,

      mode: "onBlur",

      reValidateMode: "onChange",
    });

  const {
    handleSubmit,
    reset,
    formState,
  } = methods;

  const {
    onSubmit,
    isSubmitting,
  } =
    useInstallationReportSubmit({
      report,
      mode,
      reset,
    });

  useEffect(() => {
    if (mode !== "edit") {
      reset(
        installationReportDefaultValues,
      );

      return;
    }

    if (!report) {
      return;
    }

    reset({
      reportDate:
        report.reportDate,

      customerName:
        report.customerName,

      customerAddress:
        report.customerAddress,

      note:
        report.note,

      customerSignatureUrl:
        report.customerSignatureUrl ?? "",

      signedDate:
        report.signedDate ?? "",

      lineItems:
        report.lineItems.map(
          (item) => ({
            make: item.make,
            model: item.model,
            fabricationNo:
              item.fabricationNo,
            fitting: item.fitting,
            qty: item.qty,
            agent: item.agent,
            remarks: item.remarks,
          }),
        ),
    });
  }, [
    mode,
    report,
    reset,
  ]);

  const resetValues =
    mode === "create"
      ? installationReportDefaultValues
      : {
          reportDate:
            report?.reportDate ?? "",

          customerName:
            report?.customerName ?? "",

          customerAddress:
            report?.customerAddress ?? "",

          note:
            report?.note ?? "",

          customerSignatureUrl:
            report?.customerSignatureUrl ??
            "",

          signedDate:
            report?.signedDate ?? "",

          lineItems:
            report?.lineItems.map(
              (item) => ({
                make: item.make,
                model: item.model,
                fabricationNo:
                  item.fabricationNo,
                fitting: item.fitting,
                qty: item.qty,
                agent: item.agent,
                remarks: item.remarks,
              }),
            ) ??
            installationReportDefaultValues.lineItems,
        };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <ReportInformationSection
          mode={mode}
        />

        <CustomerInformationSection />

        <InstallationItemsSection />

        <SignatureSection />

        <InstallationReportFormFooter
          mode={mode}
          isSubmitting={isSubmitting}
          isDirty={formState.isDirty}
          onReset={() =>
            reset(resetValues)
          }
        />
      </form>
    </FormProvider>
  );
}