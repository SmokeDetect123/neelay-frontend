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

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function ActionTakenField() {
    const form = useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="actionTaken"
            render={({ field }) => (
                <FormItem className="md:col-span-2">
                    <FormLabel>
                        Action Taken
                    </FormLabel>

                    <FormControl>
                        <Textarea
                            {...field}
                            rows={5}
                            className="resize-y"
                            placeholder="Describe the work performed..."
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}