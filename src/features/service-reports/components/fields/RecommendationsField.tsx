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

export default function RecommendationsField() {
    const form = useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="recommendations"
            render={({ field }) => (
                <FormItem className="md:col-span-2">
                    <FormLabel>
                        Recommendations
                    </FormLabel>

                    <FormControl>
                        <Textarea
                            {...field}
                            rows={5}
                            className="resize-y"
                            placeholder="Enter recommendations or follow-up actions..."
                        />
                    </FormControl>

                    <FormMessage />
                </FormItem>
            )}
        />
    );
}