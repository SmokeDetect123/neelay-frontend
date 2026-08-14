"use client";

import { useFormContext } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { RequiredLabel } from "@/components/forms/RequiredLabel";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

const CALL_TYPES = [
    {
        value: "BREAKDOWN",
        label: "Breakdown",
    },
    {
        value: "PREVENTIVE_MAINTENANCE",
        label: "Preventive Maintenance",
    },
    {
        value: "INSTALLATION",
        label: "Installation",
    },
    {
        value: "INSPECTION",
        label: "Inspection",
    },
    {
        value: "OTHER",
        label: "Other",
    },
];

export default function CallTypeField() {
    const form =
        useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="callType"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Call Type
                        </RequiredLabel>
                    </FormLabel>

                    <Select
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select call type" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {CALL_TYPES.map(
                                (type) => (
                                    <SelectItem
                                        key={type.value}
                                        value={type.value}
                                    >
                                        {type.label}
                                    </SelectItem>
                                ),
                            )}
                        </SelectContent>
                    </Select>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}