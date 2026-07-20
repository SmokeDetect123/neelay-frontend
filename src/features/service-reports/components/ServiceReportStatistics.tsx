"use client";

import { useMemo } from "react";

import StatisticCard from "@/components/dashboard/StatisticCard";

import { ClipboardList } from "lucide-react";
import { Clock3 } from "lucide-react";
import { Wrench } from "lucide-react";
import { CheckCircle2 } from "lucide-react";

import type { ServiceReportResponse } from "../types/serviceReport.types";

interface ServiceReportStatisticsProps {
    reports: ServiceReportResponse[];
}

export default function ServiceReportStatistics({
    reports,
}: ServiceReportStatisticsProps) {
    const statistics = useMemo(() => {
        return {
            total: reports.length,

            open: reports.filter(
                (report) => report.status === "OPEN",
            ).length,

            inProgress: reports.filter(
                (report) => report.status === "IN_PROGRESS",
            ).length,

            completed: reports.filter(
                (report) => report.status === "COMPLETED",
            ).length,
        };
    }, [reports]);

    return (
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <StatisticCard
                title="Total Reports"
                value={statistics.total}
                icon={ClipboardList}
            />

            <StatisticCard
                title="Open Reports"
                value={statistics.open}
                icon={Clock3}
            />

            <StatisticCard
                title="In Progress"
                value={statistics.inProgress}
                icon={Wrench}
            />

            <StatisticCard
                title="Completed"
                value={statistics.completed}
                icon={CheckCircle2}
            />

        </div>
    );
}