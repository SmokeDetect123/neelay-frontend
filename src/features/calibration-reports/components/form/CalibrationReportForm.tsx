"use client";

import { useEffect } from "react";

import {
  FormProvider,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  AlertTriangle,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import {
  calibrationReportDefaultValues,
  calibrationReportSchema,
  CalibrationReportFormValues,
} from "../../schemas";

import {
  CalibrationReport,
} from "../../types";

import {
  useCalibrationReportSubmit,
} from "../../hooks";

import {
  CalibrationResultsSection,
  CalibrationTestRecordsSection,
  CustomerInformationSection,
  EquipmentInformationSection,
  ReportInformationSection,
  SignatureSection,
  CalibrationReportFormFooter,
} from ".";

interface CalibrationReportFormProps {
  report?: CalibrationReport;

  mode?: "create" | "edit";
}

export default function CalibrationReportForm({
  report,
  mode = "create",
}: CalibrationReportFormProps) {

  /**
   * --------------------------------------------------------------------------
   * React Hook Form
   * --------------------------------------------------------------------------
   */

  const methods =
    useForm<CalibrationReportFormValues>({
      resolver: zodResolver(
        calibrationReportSchema
      ),

      defaultValues:
        calibrationReportDefaultValues,

      mode: "onBlur",

      reValidateMode:
        "onChange",
    });

  const {
    reset,
    handleSubmit,
    formState,
  } = methods;

  /**
   * --------------------------------------------------------------------------
   * Submit Hook
   * --------------------------------------------------------------------------
   */

  const {
    onSubmit,
    onCancel,
    isSaving,
    activeMutation,
  } =
    useCalibrationReportSubmit({
      mode,

      report,

      reset,
    });

  /**
   * --------------------------------------------------------------------------
   * Populate Edit Form
   * --------------------------------------------------------------------------
   */

  useEffect(() => {
    if (mode === "create") {
      reset(
        calibrationReportDefaultValues
      );

      return;
    }

    if (!report) {
      return;
    }

    reset({
      ...calibrationReportDefaultValues,

      reportNo:
        report.reportNo,

      reportDate:
        report.reportDate,

      createdBy:
        report.createdBy,

      status:
        report.status,

      customerName:
        report.customerName,

      customerAddress:
        report.customerAddress,

      agentType:
        report.agentType,

      fillingSystem:
        report.fillingSystem,

      connectorSystem:
        report.connectorSystem,

      serialNo:
        report.serialNo,

      make:
        report.make,

      type:
        report.type,

      testSignatureUrl:
        report.testSignature,

      testSignatureDate:
        report.testSignatureDate,

      carriedGas:
        report.carriedGas,

      leakageTest:
        report.leakageTest,

      test1Record000:
        report.test1Record000,

      test1Record060:
        report.test1Record060,

      test1Record100:
        report.test1Record100,

      test1Record200:
        report.test1Record200,

      test1Record300:
        report.test1Record300,

      test1Record400:
        report.test1Record400,

      test1Record500:
        report.test1Record500,

      test1Record600:
        report.test1Record600,

      test1Record700:
        report.test1Record700,

      test1Record800:
        report.test1Record800,

      test2Record000:
        report.test2Record000,

      test2Record060:
        report.test2Record060,

      test2Record100:
        report.test2Record100,

      test2Record200:
        report.test2Record200,

      test2Record300:
        report.test2Record300,

      test2Record400:
        report.test2Record400,

      test2Record500:
        report.test2Record500,

      test2Record600:
        report.test2Record600,

      test2Record700:
        report.test2Record700,

      test2Record800:
        report.test2Record800,

      resistance4lmin:
        report.resistance4lmin,

      leakTestPass:
        report.leakTestPass,

      driedOutPass:
        report.driedOutPass,

      finalLeakTestPass:
        report.finalLeakTestPass,

      overallPass:
        report.overallPass,

      overallComment:
        report.overallComment,

      biomedicalEngineerSignatureUrl:
        report.biomedicalEngineerSignatureUrl,

      serviceEngineerSignatureUrl:
        report.serviceEngineerSignatureUrl,

      signedDate:
        report.signedDate,
    });

  }, [
    mode,
    report,
    reset,
  ]);

  /**
   * --------------------------------------------------------------------------
   * Validation
   * --------------------------------------------------------------------------
   */

  const hasErrors =
    Object.keys(
      formState.errors
    ).length > 0;

      return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {hasErrors && (
          <Card className="border-destructive">
            <CardContent className="flex items-center gap-3 py-4">
              <AlertTriangle className="h-5 w-5 text-destructive" />

              <div>
                <p className="font-medium">
                  Validation Error
                </p>

                <p className="text-sm text-muted-foreground">
                  Please resolve all validation errors before
                  submitting this calibration report.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* Report Information                                                  */}
        {/* ------------------------------------------------------------------ */}

        <ReportInformationSection />

        {/* ------------------------------------------------------------------ */}
        {/* Customer                                                           */}
        {/* ------------------------------------------------------------------ */}

        <CustomerInformationSection />

        {/* ------------------------------------------------------------------ */}
        {/* Equipment                                                          */}
        {/* ------------------------------------------------------------------ */}

        <EquipmentInformationSection />

        {/* ------------------------------------------------------------------ */}
        {/* Calibration Records                                                */}
        {/* ------------------------------------------------------------------ */}

        <CalibrationTestRecordsSection />

        {/* ------------------------------------------------------------------ */}
        {/* Calibration Results                                                */}
        {/* ------------------------------------------------------------------ */}

        <CalibrationResultsSection />

        {/* ------------------------------------------------------------------ */}
        {/* Signatures                                                        */}
        {/* ------------------------------------------------------------------ */}

        <SignatureSection />

        <Separator />

        <CalibrationReportFormFooter
          mode={mode}
          formState={formState}
          reset={reset}
          defaultValues={
            calibrationReportDefaultValues
          }
          isSaving={isSaving}
          activeMutation={activeMutation}
          onCancel={onCancel}
        />
      </form>
    </FormProvider>
  );
}