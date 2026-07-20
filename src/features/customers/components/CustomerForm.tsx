"use client";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    createCustomerSchema,
    updateCustomerSchema,
    type CreateCustomerFormValues,
    type UpdateCustomerFormValues,
} from "../schemas/customer.schema";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import type {
    CreateCustomerRequest,
    UpdateCustomerRequest,
    CustomerResponse,
} from "../types/customer.types";

import { Input } from "@/components/ui/input";

import { FormSection } from "@/components/forms/FormSection";
import { FormGrid } from "@/components/forms/FormGrid";
import { RequiredLabel } from "@/components/forms/RequiredLabel";
import { Button } from "@/components/ui/button";
import { FormActions } from "@/components/forms/FormActions";

interface CustomerFormProps {
    mode: "create" | "edit";

    initialValues?: Partial<CustomerResponse>;

    loading?: boolean;

    onSubmit: (
        values:
            | CreateCustomerRequest
            | UpdateCustomerRequest
    ) => Promise<void> | void;

    onCancel: () => void;
}   

export function CustomerForm({
    mode,
    initialValues,
    loading = false,
    onSubmit,
    onCancel,
}: CustomerFormProps) {
    const isCreate = mode === "create";

    const form = useForm<
        CreateCustomerFormValues | UpdateCustomerFormValues
    >({
        resolver: zodResolver(
            isCreate
                ? createCustomerSchema
                : updateCustomerSchema
        ),

        defaultValues: {
            name: "",
            address: "",
            phone: "",
            email: "",
        },
    });

    useEffect(() => {
        if (!initialValues) {
            return;
        }

        form.reset({
            name: initialValues.name ?? "",
            address: initialValues.address ?? "",
            phone: initialValues.phone ?? "",
            email: initialValues.email ?? "",
        });
    }, [form, initialValues]);

    async function handleSubmit(
        values:
            | CreateCustomerFormValues
            | UpdateCustomerFormValues
    ) {
        await onSubmit(
            values as
                | CreateCustomerRequest
                | UpdateCustomerRequest
        );
    }

    return (
        <Form {...form}>
                <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
        >
            <FormSection
                title="Customer Information"
                description="Enter the customer details."
            >
                <FormGrid>

                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    <RequiredLabel>
                                        Customer Name
                                    </RequiredLabel>
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter customer name"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Phone
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter phone number"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        {...field}
                                        type="email"
                                        placeholder="name@example.com"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem className="md:col-span-2">
                                <FormLabel>
                                    <RequiredLabel>
                                        Address
                                    </RequiredLabel>
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Enter customer address"
                                    />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                </FormGrid>
            </FormSection>

            <FormActions>

                <Button
                    type="button"
                    variant="outline"
                    disabled={loading}
                    onClick={onCancel}
                >
                    Cancel
                </Button>

                <Button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Saving..."
                        : isCreate
                            ? "Create Customer"
                            : "Save Changes"}
                </Button>

            </FormActions>

        </form>
    </Form>
    );
}