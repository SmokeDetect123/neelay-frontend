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

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function SerialNumberField() {
    const form = useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="serialNumber"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        Serial Number
                    </FormLabel>

                    <FormControl>
                        <Input
                            {...field}
                            placeholder="Enter serial number"
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}