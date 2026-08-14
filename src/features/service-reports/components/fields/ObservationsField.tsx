"use client";

import { useFormContext } from "react-hook-form";

import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";

import { RequiredLabel } from "@/components/forms/RequiredLabel";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function ObservationsField() {
    const form =
        useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="problemDescription"
            render={({ field }) => (
                <FormItem className="md:col-span-2">
                    <FormLabel>
                        <RequiredLabel>
                            Problem Description
                        </RequiredLabel>
                    </FormLabel>

                    <FormControl>
                        <Textarea
                            {...field}
                            rows={5}
                            className="resize-y"
                            placeholder="Describe the problem, inspection findings, or observations."
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}