"use client";

import { useFormContext } from "react-hook-form";

import {
    FormDateInput,
    FormInput,
} from "@/components/forms";

import { Badge } from "@/components/ui/badge";

import type { CalibrationReportFormValues } from "../../schemas";

interface ReportInformationSectionProps {
    mode?: "create" | "edit";
}

export default function ReportInformationSection({
    mode = "create",
}: ReportInformationSectionProps) {
    const { control, watch } =
        useFormContext<CalibrationReportFormValues>();

    const status = watch("status");

    return (
        <section className="rounded-lg border bg-card p-6">
            <h2 className="mb-6 text-lg font-semibold">
                Report Information
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {mode === "edit" && (
                    <FormInput
                        control={control}
                        name="reportNo"
                        label="Report Number"
                        disabled
                    />
                )}

                <FormDateInput
                    control={control}
                    name="reportDate"
                    label="Report Date"
                />

                {mode === "edit" && (
                    <FormInput
                        control={control}
                        name="createdBy"
                        label="Created By"
                        disabled
                    />
                )}

                <div className="space-y-2">
                    <p className="text-sm font-medium">
                        Status
                    </p>

                    <Badge>
                        {status ?? "PENDING"}
                    </Badge>
                </div>
            </div>
        </section>
    );
}