"use client";

import { useFormContext } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { RequiredLabel } from "@/components/forms/RequiredLabel";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function SerialNumberField() {
    const form =
        useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="serialNo"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Serial Number
                        </RequiredLabel>
                    </FormLabel>

                    <FormControl>
                        <Input
                            {...field}
                            placeholder="e.g. VP-2026-001"
                            autoComplete="off"
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}