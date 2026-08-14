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

const LOCATION_TYPES = [
    {
        value: "ON_SITE",
        label: "On Site",
    },
    {
        value: "REMOTE",
        label: "Remote",
    },
];

export default function LocationTypeField() {
    const form =
        useFormContext<ServiceReportFormValues>();

    return (
        <FormField
            control={form.control}
            name="locationType"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Location
                        </RequiredLabel>
                    </FormLabel>

                    <Select
                        value={field.value}
                        onValueChange={field.onChange}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {LOCATION_TYPES.map(
                                (location) => (
                                    <SelectItem
                                        key={
                                            location.value
                                        }
                                        value={
                                            location.value
                                        }
                                    >
                                        {
                                            location.label
                                        }
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