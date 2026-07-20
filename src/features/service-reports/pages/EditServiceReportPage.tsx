"use client";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

export default function EditServiceReportPage() {
    return (
        <PageContainer>
            <PageHeader
                title="Edit Service Report"
                description="Update a service report."
            />

            <ContentCard className="p-6">
                Edit Service Report
            </ContentCard>
        </PageContainer>
    );
}