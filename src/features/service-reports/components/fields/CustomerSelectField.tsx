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

import { useCustomers } from "@/features/customers/hooks/useCustomers";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

export default function CustomerSelectField() {
    const form =
        useFormContext<ServiceReportFormValues>();

    const { customers } = useCustomers();

    return (
        <FormField
            control={form.control}
            name="customerId"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        <RequiredLabel>
                            Customer
                        </RequiredLabel>
                    </FormLabel>

                    <Select
                        value={
                            field.value
                                ? field.value.toString()
                                : ""
                        }
                        onValueChange={(value) => {
                            const customerId =
                                Number(value);

                            field.onChange(
                                customerId,
                            );

                            const customer =
                                customers.find(
                                    (item) =>
                                        item.id ===
                                        customerId,
                                );

                            if (customer) {
                                form.setValue(
                                    "customerName",
                                    customer.name,
                                );
                            }
                        }}
                        onOpenChange={() => {
                            field.onBlur();
                        }}
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
                                        key={
                                            customer.id
                                        }
                                        value={customer.id.toString()}
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