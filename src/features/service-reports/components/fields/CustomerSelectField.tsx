"use client";

import { useCustomers } from "@/features/customers/hooks/useCustomers";
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

export default function CustomerSelectField() {
    const form =
        useFormContext<ServiceReportFormValues>();

    const { customers } = useCustomers();

    return (
        <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Customer
                        </RequiredLabel>
                    </FormLabel>

                    <Select
                        value={field.value ?? ""}
                        onValueChange={field.onChange}
                    >
                        <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select customer" />
                            </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                            {customers.map(
                                (customer) => (
                                    <SelectItem
                                        key={customer.id}
                                        value={customer.name}
                                    >
                                        {customer.name}
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