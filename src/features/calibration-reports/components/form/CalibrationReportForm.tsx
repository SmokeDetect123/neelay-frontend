"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    AlertTriangle,
    Loader2,
    Plus,
    Save,
    X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

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

import { CalibrationReport } from "../../types";

import {
    useCreateCalibrationReport,
    useUpdateCalibrationReport,
} from "../../hooks";

import {
    toCreateCalibrationRequest,
    toUpdateCalibrationRequest,
} from "../../utils";

import {
    CalibrationResultsSection,
    CalibrationTestRecordsSection,
    CustomerInformationSection,
    EquipmentInformationSection,
    ReportInformationSection,
    SignatureSection,
} from ".";

interface CalibrationReportFormProps {
    report?: CalibrationReport;
    mode?: "create" | "edit";
}

export default function CalibrationReportForm({
    report,
    mode = "create",
}: CalibrationReportFormProps) {
    const router = useRouter();

    const methods =
        useForm<CalibrationReportFormValues>({
            resolver: zodResolver(
                calibrationReportSchema,
            ),

            defaultValues:
                calibrationReportDefaultValues,

            mode: "onBlur",

            reValidateMode: "onChange",
        });

    const {
        reset,
        handleSubmit,
        formState,
    } = methods;

    const createMutation =
        useCreateCalibrationReport();

    const updateMutation =
        useUpdateCalibrationReport();

    const activeMutation =
        mode === "create"
            ? createMutation
            : updateMutation;

    useEffect(() => {
        if (mode === "create") {
            reset(
                calibrationReportDefaultValues,
            );

            return;
        }

        if (!report) {
            return;
        }

        reset({
            ...calibrationReportDefaultValues,

            reportNo:
                report.reportNo ?? "",

            reportDate:
                report.reportDate ?? "",

            createdBy:
                report.createdBy ?? "",

            status:
                report.status ??
                calibrationReportDefaultValues.status,

            customerName:
                report.customerName ?? "",

            customerAddress:
                report.customerAddress ?? "",

            agentType:
                report.agentType ?? "",

            fillingSystem:
                report.fillingSystem ??
                undefined,

            connectorSystem:
                report.connectorSystem ??
                undefined,

            serialNo:
                report.serialNo ?? "",

            make:
                report.make ?? "",

            type:
                report.type ?? "",

            carriedGas:
                report.carriedGas ?? "",

            leakageTest:
                report.leakageTest ?? "",

            test1Record000:
                report.test1Record000 ??
                undefined,

            test1Record100:
                report.test1Record100 ??
                undefined,

            test1Record200:
                report.test1Record200 ??
                undefined,

            test1Record300:
                report.test1Record300 ??
                undefined,

            test1Record400:
                report.test1Record400 ??
                undefined,

            test1Record500:
                report.test1Record500 ??
                undefined,

            test1Record600:
                report.test1Record600 ??
                undefined,

            test1Record700:
                report.test1Record700 ??
                undefined,

            test1Record800:
                report.test1Record800 ??
                undefined,

            test2Record000:
                report.test2Record000 ??
                undefined,

            test2Record100:
                report.test2Record100 ??
                undefined,

            test2Record200:
                report.test2Record200 ??
                undefined,

            test2Record300:
                report.test2Record300 ??
                undefined,

            test2Record400:
                report.test2Record400 ??
                undefined,

            test2Record500:
                report.test2Record500 ??
                undefined,

            test2Record600:
                report.test2Record600 ??
                undefined,

            test2Record700:
                report.test2Record700 ??
                undefined,

            test2Record800:
                report.test2Record800 ??
                undefined,

            resistance4lmin:
                report.resistance4lmin ??
                undefined,

            leakTestPass:
                report.leakTestPass,

            driedOutPass:
                report.driedOutPass,

            finalLeakTestPass:
                report.finalLeakTestPass,

            overallPass:
                report.overallPass,

            overallComment:
                report.overallComment ?? "",

            biomedicalEngineerSignatureUrl:
                report.biomedicalEngineerSignatureUrl ??
                "",

            serviceEngineerSignatureUrl:
                report.serviceEngineerSignatureUrl ??
                "",

            signedDate:
                report.signedDate ?? "",
        });
    }, [mode, report, reset]);

    async function onSubmit(
        values: CalibrationReportFormValues,
    ) {
        try {
            if (mode === "create") {
                const request =
                    toCreateCalibrationRequest(
                        values,
                    );

                const createdReport =
                    await createMutation.mutateAsync(
                        request,
                    );

                reset(
                    calibrationReportDefaultValues,
                );

                router.push(
                    `/calibration-reports/${createdReport.id}`,
                );

                return;
            }

            if (!report) {
                return;
            }

            const request =
                toUpdateCalibrationRequest(
                    values,
                );

            await updateMutation.mutateAsync({
                id: report.id,
                request,
            });

            reset(values);

            router.refresh();
        } catch (error) {
            console.error(
                "Calibration report submission failed:",
                error,
            );
        }
    }

    const hasErrors =
        Object.keys(formState.errors).length > 0;

    const isSaving =
        activeMutation.isPending;

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
                                    Please resolve all validation errors before submitting this calibration report.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <ReportInformationSection
                    mode={mode}
                />

                <CustomerInformationSection />

                <EquipmentInformationSection />

                <CalibrationTestRecordsSection />

                <CalibrationResultsSection />

                <SignatureSection />

                <Separator />

                <div className="sticky bottom-0 z-30 rounded-xl border bg-background/95 p-4 backdrop-blur">
                    <div className="flex items-center justify-between">
                        <div>
                            {formState.isDirty ? (
                                <p className="text-sm font-medium text-amber-600">
                                    You have unsaved changes.
                                </p>
                            ) : (
                                <p className="text-sm text-muted-foreground">
                                    {mode === "create"
                                        ? "Fill in the form to create a calibration report."
                                        : "All changes saved."}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                    reset(
                                        mode ===
                                            "create"
                                            ? calibrationReportDefaultValues
                                            : undefined,
                                    )
                                }
                                disabled={isSaving}
                            >
                                <X className="mr-2 h-4 w-4" />
                                Reset
                            </Button>

                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() =>
                                    router.push(
                                        "/calibration-reports",
                                    )
                                }
                                disabled={isSaving}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                disabled={
                                    isSaving ||
                                    !formState.isDirty
                                }
                            >
                                {isSaving ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Saving...
                                    </>
                                ) : mode ===
                                  "create" ? (
                                    <>
                                        <Plus className="mr-2 h-4 w-4" />
                                        Create Report
                                    </>
                                ) : (
                                    <>
                                        <Save className="mr-2 h-4 w-4" />
                                        Save Changes
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </FormProvider>
    );
}