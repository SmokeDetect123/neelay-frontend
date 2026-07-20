"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import ServiceReportsFilters from "../components/ServiceReportsFilters";
import ServiceReportsTable from "../components/ServiceReportsTable";
import ServiceReportStatistics from "../components/ServiceReportStatistics";

import { useServiceReports } from "../hooks/useServiceReports";
import { ReportStatus } from "../types/serviceReport.types";

export default function ServiceReportsPage() {
    const {
        reports,
        loading,
        error,
    } = useServiceReports();

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<ReportStatus | "ALL">("ALL");

    const filteredReports = useMemo(() => {
        return reports.filter((report) => {
            const matchesSearch =
                report.reportNumber
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                report.customerName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||
                report.equipment
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesStatus =
                status === "ALL" ||
                report.status === status;

            return matchesSearch && matchesStatus;
        });
    }, [reports, search, status]);

    return (
        <PageContainer>
            <PageHeader
                title="Service Reports"
                description="Create, manage and track service reports."
                actions={
                    <Button asChild>
                        <Link href="/service-reports/new">
                            <Plus className="mr-2 h-4 w-4" />
                            Create Report
                        </Link>
                    </Button>
                }
            />

            <ServiceReportStatistics
                reports={reports}
            />
            
            <ServiceReportsFilters
                search={search}
                status={status}
                onSearchChange={setSearch}
                onStatusChange={setStatus}
            />

            <ContentCard className="p-6">
                {error ? (
                    <div className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                        {error}
                    </div>
                ) : (
                    <ServiceReportsTable
                        reports={filteredReports}
                        loading={loading}
                    />
                )}
            </ContentCard>
        </PageContainer>
    );
}