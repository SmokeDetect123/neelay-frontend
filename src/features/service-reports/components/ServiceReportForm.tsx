"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { toast } from "sonner";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { FormGrid } from "@/components/forms/FormGrid";
import {
    FormSection,
} from "@/components/forms/FormSection";
import {
    FormActions,
} from "@/components/forms/FormActions";
import {
    RequiredLabel,
} from "@/components/forms/RequiredLabel";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { serviceReportSchema } from "../schemas/serviceReport.schema";
import { useServiceReports } from "../hooks/useServiceReports";
import {
    CALL_TYPES,
    LOCATION_TYPES,
} from "../types/service-report.enums";

import type {
    ServiceReportFormValues,
} from "../types/serviceReportForm.types";

import type {
    ServiceReportResponse,
} from "../types/serviceReport.types";

const today =
    new Date()
        .toISOString()
        .split("T")[0];

const DEFAULT_VALUES: ServiceReportFormValues = {
    reportDate: today,

    customerName: "",
    customerAddress: "",
    department: "",
    personContacted: "",

    make: "",
    model: "",
    serialNo: "",

    callType: "CALL_BASIS",

    problemDescription: "",
    actionTaken: "",
    materialUsed: "",

    locationType: "ON_SITE",

    customerSignatureUrl: "",
    signedDate: "",
};

export default function ServiceReportForm() {
    const router = useRouter();

    const { createServiceReport } =
        useServiceReports();

    const form =
        useForm<ServiceReportFormValues>({
            resolver:
                zodResolver(
                    serviceReportSchema,
                ),

            defaultValues:
                DEFAULT_VALUES,

            mode: "onSubmit",

            reValidateMode:
                "onChange",

            shouldFocusError: true,
        });

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: {
            errors,
            isSubmitting,
            isDirty,
        },
    } = form;

    const callType =
        watch("callType");

    const locationType =
        watch("locationType");

    /**
     * Submit the validated form to the Spring Boot API.
     *
     * The backend generates the report number and audit
     * fields, so only fields from CreateServiceReportRequest
     * are sent. Empty optional values are omitted where the
     * backend expects nullable values such as LocalDate.
     */
    const onSubmit = async (
        values: ServiceReportFormValues,
    ) => {
        try {
            const request: ServiceReportFormValues = {
                ...values,
                customerSignatureUrl:
                    values.customerSignatureUrl?.trim() ||
                    undefined,
                signedDate:
                    values.signedDate?.trim() ||
                    undefined,
            };

            const createdReport =
                await createServiceReport(request);

            toast.success(
                `Service Report ${createdReport.reportNo} created successfully.`,
            );

            reset({
                ...DEFAULT_VALUES,
                reportDate: today,
            });

            router.push("/service-reports");
        } catch (error) {
            console.error(
                "Failed to create Service Report:",
                error,
            );

            toast.error(
                "Failed to create Service Report. Please try again.",
            );
        }
    };

    /**
     * Focus the first invalid field.
     *
     * React Hook Form normally does this automatically,
     * but this effect also keeps the behavior explicit.
     */
    useEffect(() => {
        const firstError =
            Object.keys(errors)[0];

        if (!firstError) {
            return;
        }

        const element =
            document.querySelector<HTMLElement>(
                `[name="${firstError}"]`,
            );

        element?.focus();
    }, [errors]);

    const handleReset = () => {
        reset({
            ...DEFAULT_VALUES,
            reportDate: today,
        });
    };

    return (
        <FormProvider {...form}>
            <form
                onSubmit={
                    handleSubmit(onSubmit)
                }
                autoComplete="off"
                noValidate
                className="space-y-6"
            >
                {/* ========================================================= */}
                {/* REPORT INFORMATION */}
                {/* ========================================================= */}

                <FormSection
                    title="Report Information"
                    description="Enter the date and basic information for this service report."
                >
                    <FormGrid>
                        <div className="space-y-2">
                            <label
                                htmlFor="reportDate"
                                className="text-sm font-medium"
                            >
                                <RequiredLabel>
                                    Report Date
                                </RequiredLabel>
                            </label>

                            <Input
                                id="reportDate"
                                type="date"
                                {...register(
                                    "reportDate",
                                )}
                            />

                            {errors.reportDate && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .reportDate
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                    </FormGrid>
                </FormSection>

                {/* ========================================================= */}
                {/* CUSTOMER INFORMATION */}
                {/* ========================================================= */}

                <FormSection
                    title="Customer Information"
                    description="Enter the customer and contact information associated with the service visit."
                >
                    <FormGrid>
                        <div className="space-y-2">
                            <label
                                htmlFor="customerName"
                                className="text-sm font-medium"
                            >
                                <RequiredLabel>
                                    Customer Name
                                </RequiredLabel>
                            </label>

                            <Input
                                id="customerName"
                                placeholder="Enter customer name"
                                maxLength={150}
                                {...register(
                                    "customerName",
                                )}
                            />

                            {errors.customerName && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .customerName
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="department"
                                className="text-sm font-medium"
                            >
                                Department
                            </label>

                            <Input
                                id="department"
                                placeholder="e.g. ICU, Biomedical, Maintenance"
                                maxLength={150}
                                {...register(
                                    "department",
                                )}
                            />

                            {errors.department && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .department
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label
                                htmlFor="customerAddress"
                                className="text-sm font-medium"
                            >
                                Customer Address
                            </label>

                            <Textarea
                                id="customerAddress"
                                placeholder="Enter customer address"
                                maxLength={500}
                                rows={3}
                                {...register(
                                    "customerAddress",
                                )}
                            />

                            {errors.customerAddress && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .customerAddress
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="personContacted"
                                className="text-sm font-medium"
                            >
                                Person Contacted
                            </label>

                            <Input
                                id="personContacted"
                                placeholder="Enter contact person"
                                maxLength={150}
                                {...register(
                                    "personContacted",
                                )}
                            />

                            {errors.personContacted && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .personContacted
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                    </FormGrid>
                </FormSection>

                {/* ========================================================= */}
                {/* EQUIPMENT INFORMATION */}
                {/* ========================================================= */}

                <FormSection
                    title="Equipment Information"
                    description="Provide the equipment details that were serviced."
                >
                    <FormGrid columns={3}>
                        <div className="space-y-2">
                            <label
                                htmlFor="make"
                                className="text-sm font-medium"
                            >
                                Make
                            </label>

                            <Input
                                id="make"
                                placeholder="e.g. Drager"
                                maxLength={100}
                                {...register(
                                    "make",
                                )}
                            />

                            {errors.make && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .make
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="model"
                                className="text-sm font-medium"
                            >
                                Model
                            </label>

                            <Input
                                id="model"
                                placeholder="Enter model"
                                maxLength={100}
                                {...register(
                                    "model",
                                )}
                            />

                            {errors.model && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .model
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="serialNo"
                                className="text-sm font-medium"
                            >
                                Serial Number
                            </label>

                            <Input
                                id="serialNo"
                                placeholder="Enter serial number"
                                maxLength={100}
                                {...register(
                                    "serialNo",
                                )}
                            />

                            {errors.serialNo && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .serialNo
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                    </FormGrid>
                </FormSection>

                {/* ========================================================= */}
                {/* SERVICE DETAILS */}
                {/* ========================================================= */}

                <FormSection
                    title="Service Details"
                    description="Describe the service request, work performed, and materials used."
                >
                    <div className="space-y-6">
                        <FormGrid>
                            <div className="space-y-2">
                                <label
                                    htmlFor="callType"
                                    className="text-sm font-medium"
                                >
                                    <RequiredLabel>
                                        Call Type
                                    </RequiredLabel>
                                </label>

                                <Select
                                    value={
                                        callType
                                    }
                                    onValueChange={(
                                        value,
                                    ) => {
                                        setValue(
                                            "callType",
                                            value as ServiceReportFormValues["callType"],
                                            {
                                                shouldDirty:
                                                    true,
                                                shouldValidate:
                                                    true,
                                            },
                                        );
                                    }}
                                >
                                    <SelectTrigger
                                        id="callType"
                                    >
                                        <SelectValue placeholder="Select call type" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem
                                            value={
                                                CALL_TYPES.CALL_BASIS
                                            }
                                        >
                                            Call Basis
                                        </SelectItem>

                                        <SelectItem
                                            value={
                                                CALL_TYPES.AMC
                                            }
                                        >
                                            AMC
                                        </SelectItem>

                                        <SelectItem
                                            value={
                                                CALL_TYPES.PREVENTIVE_MAINT
                                            }
                                        >
                                            Preventive Maintenance
                                        </SelectItem>

                                        <SelectItem
                                            value={
                                                CALL_TYPES.OTHER
                                            }
                                        >
                                            Other
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.callType && (
                                    <p className="text-sm text-destructive">
                                        {
                                            errors
                                                .callType
                                                .message
                                        }
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="locationType"
                                    className="text-sm font-medium"
                                >
                                    Location
                                </label>

                                <Select
                                    value={
                                        locationType ??
                                        ""
                                    }
                                    onValueChange={(
                                        value,
                                    ) => {
                                        setValue(
                                            "locationType",
                                            value as ServiceReportFormValues["locationType"],
                                            {
                                                shouldDirty:
                                                    true,
                                                shouldValidate:
                                                    true,
                                            },
                                        );
                                    }}
                                >
                                    <SelectTrigger
                                        id="locationType"
                                    >
                                        <SelectValue placeholder="Select location" />
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem
                                            value={
                                                LOCATION_TYPES.ON_SITE
                                            }
                                        >
                                            On Site
                                        </SelectItem>

                                        <SelectItem
                                            value={
                                                LOCATION_TYPES.DEPOT
                                            }
                                        >
                                            Depot
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                {errors.locationType && (
                                    <p className="text-sm text-destructive">
                                        {
                                            errors
                                                .locationType
                                                .message
                                        }
                                    </p>
                                )}
                            </div>
                        </FormGrid>

                        <div className="space-y-2">
                            <label
                                htmlFor="problemDescription"
                                className="text-sm font-medium"
                            >
                                Problem Description
                            </label>

                            <Textarea
                                id="problemDescription"
                                placeholder="Describe the reported problem or service request."
                                rows={5}
                                {...register(
                                    "problemDescription",
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="actionTaken"
                                className="text-sm font-medium"
                            >
                                Action Taken
                            </label>

                            <Textarea
                                id="actionTaken"
                                placeholder="Describe the inspection, repair, replacement, testing, or other work performed."
                                rows={5}
                                {...register(
                                    "actionTaken",
                                )}
                            />
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="materialUsed"
                                className="text-sm font-medium"
                            >
                                Material Used
                            </label>

                            <Textarea
                                id="materialUsed"
                                placeholder="Enter materials, spare parts, or consumables used."
                                maxLength={255}
                                rows={3}
                                {...register(
                                    "materialUsed",
                                )}
                            />

                            {errors.materialUsed && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .materialUsed
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                    </div>
                </FormSection>

                {/* ========================================================= */}
                {/* CUSTOMER SIGNATURE */}
                {/* ========================================================= */}

                <FormSection
                    title="Customer Signature"
                    description="Record the customer signature reference and signing date."
                >
                    <FormGrid>
                        <div className="space-y-2">
                            <label
                                htmlFor="customerSignatureUrl"
                                className="text-sm font-medium"
                            >
                                Signature URL
                            </label>

                            <Input
                                id="customerSignatureUrl"
                                type="url"
                                placeholder="https://..."
                                maxLength={255}
                                {...register(
                                    "customerSignatureUrl",
                                )}
                            />

                            {errors.customerSignatureUrl && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .customerSignatureUrl
                                            .message
                                    }
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label
                                htmlFor="signedDate"
                                className="text-sm font-medium"
                            >
                                Signed Date
                            </label>

                            <Input
                                id="signedDate"
                                type="date"
                                {...register(
                                    "signedDate",
                                )}
                            />

                            {errors.signedDate && (
                                <p className="text-sm text-destructive">
                                    {
                                        errors
                                            .signedDate
                                            .message
                                    }
                                </p>
                            )}
                        </div>
                    </FormGrid>
                </FormSection>

                {/* ========================================================= */}
                {/* ACTIONS */}
                {/* ========================================================= */}

                <FormActions>
                    <Button
                        type="button"
                        variant="outline"
                        disabled={
                            isSubmitting
                        }
                        onClick={
                            handleReset
                        }
                    >
                        Reset
                    </Button>

                    <Button
                        type="submit"
                        disabled={
                            isSubmitting
                        }
                    >
                        {isSubmitting
                            ? "Saving..."
                            : "Create Service Report"}
                    </Button>
                </FormActions>

                {isDirty && (
                    <p className="text-right text-xs text-muted-foreground">
                        You have unsaved changes.
                    </p>
                )}
            </form>
        </FormProvider>
    );
}