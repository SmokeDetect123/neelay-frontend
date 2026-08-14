"use client";

import { useMemo } from "react";

import { ClipboardList } from "lucide-react";

import StatisticCard from "@/components/dashboard/StatisticCard";

import type { ServiceReportResponse } from "../types/serviceReport.types";

interface ServiceReportStatisticsProps {
    reports: ServiceReportResponse[];
}

export default function ServiceReportStatistics({
    reports,
}: ServiceReportStatisticsProps) {
    const statistics = useMemo(
        () => ({
            total: reports.length,
        }),
        [reports],
    );

    return (
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatisticCard
                title="Reports"
                value={statistics.total}
                icon={ClipboardList}
            />
        </div>
    );
}