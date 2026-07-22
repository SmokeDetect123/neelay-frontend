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

export default function ReportDateField() {
    const form = useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="reportDate"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Report Date
                        </RequiredLabel>
                    </FormLabel>

                    <FormControl>
                        <Input
                            type="date"
                            {...field}
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}