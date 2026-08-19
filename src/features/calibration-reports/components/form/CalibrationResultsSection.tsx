"use client";

import { useFormContext } from "react-hook-form";

import {
    FormNumberInput,
    FormSelect,
    FormTextarea,
} from "@/components/forms";

import type {
    CalibrationReportFormValues,
} from "../../schemas";

export default function CalibrationResultsSection() {
    const { control } =
        useFormContext<CalibrationReportFormValues>();

    const booleanOptions = [
        {
            label: "PASS",
            value: true,
        },
        {
            label: "FAIL",
            value: false,
        },
    ];

    const booleanToString = (
        value: boolean | undefined,
    ): string => {
        if (value === undefined) {
            return "";
        }

        return String(value);
    };

    const stringToBoolean = (
        value: string,
    ): boolean => {
        return value === "true";
    };

    return (
        <section className="rounded-lg border bg-card p-6">
            <h2 className="mb-6 text-lg font-semibold">
                Calibration Results
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <FormNumberInput
                    control={control}
                    name="resistance4lmin"
                    label="Resistance @ 4 L/min"
                />

                <FormSelect
                    control={control}
                    name="leakTestPass"
                    label="Leak Test"
                    options={booleanOptions}
                    valueToString={booleanToString}
                    stringToValue={stringToBoolean}
                />

                <FormSelect
                    control={control}
                    name="driedOutPass"
                    label="Dried Out"
                    options={booleanOptions}
                    valueToString={booleanToString}
                    stringToValue={stringToBoolean}
                />

                <FormSelect
                    control={control}
                    name="finalLeakTestPass"
                    label="Final Leak Test"
                    options={booleanOptions}
                    valueToString={booleanToString}
                    stringToValue={stringToBoolean}
                />

                <FormSelect
                    control={control}
                    name="overallPass"
                    label="Overall Result"
                    options={booleanOptions}
                    valueToString={booleanToString}
                    stringToValue={stringToBoolean}
                />

                <div className="md:col-span-2 xl:col-span-3">
                    <FormTextarea
                        control={control}
                        name="overallComment"
                        label="Overall Comment"
                        rows={4}
                    />
                </div>
            </div>
        </section>
    );
}