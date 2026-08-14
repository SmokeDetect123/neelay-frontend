"use client";

import Link from "next/link";

import {
    ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {PageContainer} from "@/components/common/PageContainer";
import PageHeader from "@/components/common/PageHeader";

import ServiceReportForm from "../components/ServiceReportForm";

export default function CreateServiceReportPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Create Service Report"
                description="Create a new service report."
                actions={
                    <Button
                        asChild
                        variant="outline"
                    >
                        <Link href="/service-reports">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Reports
                        </Link>
                    </Button>
                }
            />

            <ServiceReportForm
                mode="create"
            />
        </PageContainer>
    );
}