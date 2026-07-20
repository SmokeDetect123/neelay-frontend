"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import { useCustomers } from "../hooks/useCustomers";

import type { CustomerResponse } from "../types/customer.types";

export default function CustomerDetailsPage() {
    const params = useParams();
    const router = useRouter();

    const customerId = Number(params.id as string);

    const { getCustomerById } = useCustomers();

    const [customer, setCustomer] =
        useState<CustomerResponse>();

    const [loading, setLoading] =
        useState(true);

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

    if (loading) {
        return (
            <PageContainer>
                <PageHeader
                    title="Customer Details"
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
                title={customer.name}
                description="Customer Details"
            />

            <ContentCard className="space-y-6 p-6">

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Address
                    </h3>

                    <p>{customer.address}</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Phone
                    </h3>

                    <p>{customer.phone}</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Email
                    </h3>

                    <p>{customer.email}</p>
                </div>

                <div>
                    <h3 className="text-sm font-medium text-muted-foreground">
                        Created At
                    </h3>

                    <p>{customer.createdAt}</p>
                </div>

                <div className="flex gap-3">

                    <Button
                        variant="outline"
                        asChild
                    >
                        <Link href="/customers">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Link>
                    </Button>

                    <Button asChild>
                        <Link
                            href={`/customers/${customer.id}/edit`}
                        >
                            <Pencil className="mr-2 h-4 w-4" />
                            Edit Customer
                        </Link>
                    </Button>

                </div>

            </ContentCard>
        </PageContainer>
    );
}