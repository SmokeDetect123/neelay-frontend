"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import { CustomerForm } from "../components/CustomerForm";
import { useCustomers } from "../hooks/useCustomers";

import type {
    CustomerResponse,
    UpdateCustomerRequest,
} from "../types/customer.types";

export default function EditCustomerPage() {
    const params = useParams();
    const router = useRouter();

    const customerId = Number(params.id as string);

    const {
        getCustomerById,
        updateCustomer,
    } = useCustomers();

    const [customer, setCustomer] =
        useState<CustomerResponse>();

    const [loading, setLoading] =
        useState(true);

    const [submitting, setSubmitting] =
        useState(false);

    useEffect(() => {
        async function loadCustomer() {
            try {
                const data =
                    await getCustomerById(customerId);

                if (!data) {
                    router.push("/customers");
                    return;
                }

                setCustomer(data);
            } catch (error) {
                console.error(error);
                router.push("/customers");
            } finally {
                setLoading(false);
            }
        }

        void loadCustomer();
    }, [customerId, getCustomerById, router]);

    async function handleSubmit(
        values: UpdateCustomerRequest,
    ): Promise<void> {
        try {
            setSubmitting(true);

            await updateCustomer(customerId, values);

            router.push("/customers");
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    }

    function handleCancel() {
        router.push("/customers");
    }

    if (loading) {
        return (
            <PageContainer>
                <PageHeader
                    title="Edit Customer"
                    description="Loading customer..."
                />

                <ContentCard className="p-6">
                    Loading...
                </ContentCard>
            </PageContainer>
        );
    }

    if (!customer) {
        return null;
    }

    return (
        <PageContainer>
            <PageHeader
                title="Edit Customer"
                description="Update customer information."
            />

            <ContentCard className="p-6">
                <CustomerForm
                    mode="edit"
                    loading={submitting}
                    initialValues={customer}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            </ContentCard>
        </PageContainer>
    );
}