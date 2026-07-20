"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import CustomersWorkspace from "../components/CustomersWorkspace";

export default function CustomersPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Customers"
                description="Manage customer information."
            />

            <div className="mb-6 flex justify-end">
                <Button asChild>
                    <Link href="/customers/new">
                        <Plus className="mr-2 h-4 w-4" />
                        New Customer
                    </Link>
                </Button>
            </div>

            <CustomersWorkspace />
        </PageContainer>
    );
}