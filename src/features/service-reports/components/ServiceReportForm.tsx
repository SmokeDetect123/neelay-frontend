"use client";

import { useEffect } from "react";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    serviceReportSchema,
} from "../schemas/serviceReport.schema";

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
    const form =
        useForm<ServiceReportFormValues>({
            resolver:
                zodResolver(
                    serviceReportSchema,
                ),

            mode: "onSubmit",

            reValidateMode: "onChange",

            defaultValues: {
                customerId: 0,

                customerName: "",
                customerAddress: "",
                department: "",
                personContacted: "",

                attendedBy: 0,

                reportDate:
                    new Date()
                        .toISOString()
                        .split("T")[0],

                make: "",
                model: "",
                serialNo: "",

                callType: "",
                locationType: "",

                problemDescription: "",
                actionTaken: "",
                materialUsed: "",

                customerSignatureUrl: "",
                signedDate: "",
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
     * Populate the form when editing an existing report.
     *
     * This intentionally maps only fields that belong to
     * the current frontend form contract.
     */
    useEffect(() => {
        if (
            mode !== "edit" ||
            !report
        ) {
            return;
        }

        reset({
            customerName:
                report.customerName ?? "",

            customerAddress:
                report.customerAddress ?? "",

            department:
                report.department ?? "",

            personContacted:
                report.personContacted ?? "",

            reportDate:
                report.reportDate,

            make:
                report.make ?? "",

            model:
                report.model ?? "",

            serialNo:
                report.serialNo ?? "",

            callType:
                report.callType ?? "",

            locationType:
                report.locationType ?? "",

            problemDescription:
                report.problemDescription ?? "",

            actionTaken:
                report.actionTaken ?? "",

            materialUsed:
                report.materialUsed ?? "",

            customerSignatureUrl:
                report.customerSignatureUrl ?? "",

            signedDate:
                report.signedDate ?? "",
        });
    }, [
        mode,
        report,
        reset,
    ]);

    /*
     * Focus the first invalid field after
     * a failed validation attempt.
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
        console.log(
            mode === "create"
                ? "Creating service report:"
                : "Updating service report:",
            data,
        );

        /*
         * Backend integration intentionally remains
         * outside this checkpoint.
         *
         * Create:
         *   POST /api/service-reports
         *
         * Edit:
         *   PUT /api/service-reports/{id}
         *
         * These calls will be connected after the
         * frontend compiles cleanly.
         */
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