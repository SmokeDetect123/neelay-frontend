"use client";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

export default function ServiceReportDetailsPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Service Report Details"
                description="View service report."
            />

            <ContentCard className="p-6">
                Service Report Details
            </ContentCard>
        </PageContainer>
    );
}