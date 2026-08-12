"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { useServiceReports } from "../hooks/useServiceReports";

import { serviceReportSchema } from "../schemas/serviceReport.schema";

import type {
    ServiceReportFormValues,
} from "../types/serviceReportForm.types";

import type {
    ServiceReportFormProps,
} from "../types/serviceReportFormProps";

import CustomerInformationSection from "./form-sections/CustomerInformationSection";
import EngineerInformationSection from "./form-sections/EngineerInformationSection";
import EquipmentInformationSection from "./form-sections/EquipmentInformationSection";
import ServiceDetailsSection from "./form-sections/ServiceDetailsSection";
import FormActions from "./form-sections/FormActions";

export default function ServiceReportForm({
    mode,
    report,
}: ServiceReportFormProps) {
    const router = useRouter();

    const {
        createServiceReport,
        updateServiceReport,
    } = useServiceReports();

    const form = useForm<ServiceReportFormValues>({
        resolver: zodResolver(
            serviceReportSchema,
        ),

        mode: "onSubmit",

        reValidateMode: "onChange",

        defaultValues: {
            customerId: 0,

            attendedBy: 0,

            reportDate:
                new Date()
                    .toISOString()
                    .split("T")[0],

            equipment: "",

            serialNumber: "",

            observations: "",

            actionTaken: "",

            recommendations: "",
        },
    });

    const {
        handleSubmit,
        reset,
        setFocus,

        formState: {
            errors,
        },
    } = form;

    /*
     * Populate the form when editing an
     * existing service report.
     *
     * The report is loaded asynchronously by
     * EditServiceReportPage, so defaultValues
     * cannot be used for the loaded report.
     *
     * React Hook Form must therefore be
     * explicitly reset with the report data.
     */
    useEffect(() => {
        if (
            mode !== "edit" ||
            !report
        ) {
            return;
        }

        reset({
            customerId:
                report.customerId,

            attendedBy:
                report.attendedBy,

            reportDate:
                report.reportDate,

            equipment:
                report.equipment,

            serialNumber:
                report.serialNumber,

            observations:
                report.observations,

            actionTaken:
                report.actionTaken,

            recommendations:
                report.recommendations,
        });
    }, [
        mode,
        report,
        reset,
    ]);

    /*
     * Focus the first invalid field after
     * validation.
     */
    useEffect(() => {
        const firstError =
            Object.keys(errors)[0];

        if (firstError) {
            setFocus(
                firstError as keyof ServiceReportFormValues,
            );
        }
    }, [
        errors,
        setFocus,
    ]);

    const onSubmit = async (
        data: ServiceReportFormValues,
    ) => {
        try {
            if (mode === "create") {
                await createServiceReport(
                    data,
                );

                toast.success(
                    "Service Report created successfully.",
                );
            } else {
                if (!report) {
                    throw new Error(
                        "Service Report not found.",
                    );
                }

                await updateServiceReport(
                    report.id,
                    data,
                );

                toast.success(
                    "Service Report updated successfully.",
                );
            }

            reset();

            router.push(
                "/service-reports",
            );
        } catch (error) {
            console.error(
                "Service Report submission failed:",
                error,
            );

            toast.error(
                error instanceof Error
                    ? error.message
                    : mode === "create"
                      ? "Failed to create Service Report."
                      : "Failed to update Service Report.",
            );
        }
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={handleSubmit(
                    onSubmit,
                )}
                autoComplete="off"
                noValidate
                className="space-y-8"
            >
                <CustomerInformationSection />

                <EngineerInformationSection />

                <EquipmentInformationSection />

                <ServiceDetailsSection />

                <FormActions />
            </form>
        </FormProvider>
    );
}