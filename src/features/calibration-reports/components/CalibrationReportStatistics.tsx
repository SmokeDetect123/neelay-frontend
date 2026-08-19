"use client";

import { useMemo } from "react";

import {
    CheckCircle2,
    ClipboardList,
    Clock3,
    XCircle,
} from "lucide-react";

import StatisticCard from "@/components/dashboard/StatisticCard";

import {
    CalibrationReport,
    getCalibrationStatus,
    CalibrationStatus,
} from "../types";

interface Props {
    reports: CalibrationReport[];
}

export default function CalibrationReportStatistics({
    reports,
}: Props) {
    const statistics = useMemo(() => {
        const total = reports.length;

        const passed = reports.filter(
            (report) =>
                getCalibrationStatus(
                    report.overallPass,
                ) === CalibrationStatus.PASS,
        ).length;

        const failed = reports.filter(
            (report) =>
                getCalibrationStatus(
                    report.overallPass,
                ) === CalibrationStatus.FAIL,
        ).length;

        const pending = reports.filter(
            (report) =>
                getCalibrationStatus(
                    report.overallPass,
                ) === CalibrationStatus.PENDING,
        ).length;

        return {
            total,
            passed,
            failed,
            pending,
        };
    }, [reports]);

    return (
        <div className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatisticCard
                title="Total Reports"
                value={statistics.total}
                description="Calibration reports"
                icon={ClipboardList}
            />

            <StatisticCard
                title="Passed"
                value={statistics.passed}
                description="Successfully calibrated"
                icon={CheckCircle2}
            />

            <StatisticCard
                title="Failed"
                value={statistics.failed}
                description="Calibration failed"
                icon={XCircle}
            />

            <StatisticCard
                title="Pending"
                value={statistics.pending}
                description="Awaiting completion"
                icon={Clock3}
            />
        </div>
    );
}