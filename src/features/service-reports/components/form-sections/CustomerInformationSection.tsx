"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import { FormGrid } from "@/components/forms/FormGrid";
import { FormSection } from "@/components/forms/FormSection";

import { Input } from "@/components/ui/input";

import { useCustomers } from "@/features/customers/hooks/useCustomers";

import type { ServiceReportFormValues } from "../../types/serviceReportForm.types";

import CustomerSelectField from "../fields/CustomerSelectField";

export default function CustomerInformationSection() {
    const form = useFormContext<ServiceReportFormValues>();

    const { customers } = useCustomers();

    const customerId = form.watch("customerId");

    const selectedCustomer = useMemo(() => {
        return customers.find(
            (customer) => customer.id === customerId,
        );
    }, [customers, customerId]);

    return (
        <FormSection
            title="Customer Information"
            description="Select the customer for this service report."
        >
            <FormGrid>

                <CustomerSelectField />

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Address
                    </label>

                    <Input
                        value={selectedCustomer?.address ?? ""}
                        readOnly
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm font-medium">
                        Phone
                    </label>

                    <Input
                        value={selectedCustomer?.phone ?? ""}
                        readOnly
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">
                        Email
                    </label>

                    <Input
                        value={selectedCustomer?.email ?? ""}
                        readOnly
                    />
                </div>

            </FormGrid>
        </FormSection>
    );
}