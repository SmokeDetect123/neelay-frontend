"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import { CustomerForm } from "../components/CustomerForm";
import { useCustomers } from "../hooks/useCustomers";

import type { CreateCustomerRequest } from "../types/customer.types";

export default function CreateCustomerPage() {
    const router = useRouter();

    const { createCustomer } = useCustomers();

    const [submitting, setSubmitting] = useState(false);

    async function handleSubmit(
        values: CreateCustomerRequest,
    ): Promise<void> {
        try {
            setSubmitting(true);

            await createCustomer(values);

            router.push("/customers");
        } catch (error) {
            console.error("Failed to create customer.", error);
        } finally {
            setSubmitting(false);
        }
    }

    function handleCancel() {
        router.push("/customers");
    }

    return (
        <PageContainer>
            <PageHeader
                title="Create Customer"
                description="Add a new customer to the system."
            />

            <ContentCard className="p-6">
                <CustomerForm
                    mode="create"
                    loading={submitting}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            </ContentCard>
        </PageContainer>
    );
}