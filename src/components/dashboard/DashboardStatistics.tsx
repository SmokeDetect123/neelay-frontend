"use client";

import { useEffect, useState } from "react";

import {
    ClipboardCheck,
    FileText,
    Users,
    Wrench,
} from "lucide-react";

import StatisticCard from "./StatisticCard";

import {
    dashboardService,
} from "@/services/dashboard.service";

interface DashboardReportCounts {
    serviceReports: number;
    calibrationReports: number;
    installationReports: number;
}

const INITIAL_COUNTS: DashboardReportCounts = {
    serviceReports: 0,
    calibrationReports: 0,
    installationReports: 0,
};

export default function DashboardStatistics() {
    const [
        reportCounts,
        setReportCounts,
    ] = useState<DashboardReportCounts>(
        INITIAL_COUNTS,
    );

    const [
        isLoading,
        setIsLoading,
    ] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const loadReportCounts = async () => {
            try {
                const counts =
                    await dashboardService.getReportCounts();

                if (!isMounted) {
                    return;
                }

                setReportCounts(counts);
            } catch (error) {
                console.error(
                    "Failed to load dashboard report counts:",
                    error,
                );

                if (!isMounted) {
                    return;
                }

                /*
                 * Keep the dashboard usable if the statistics
                 * endpoints are temporarily unavailable.
                 *
                 * The backend/database remains the source of truth.
                 */
                setReportCounts(INITIAL_COUNTS);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        void loadReportCounts();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-4
            "
        >
            <StatisticCard
                title="Users"
                value={0}
                icon={Users}
                iconColor="
                    bg-blue-100
                    text-blue-700
                    dark:bg-blue-900/30
                    dark:text-blue-300
                "
                description="Registered system users"
            />

            <StatisticCard
                title="Service Reports"
                value={
                    isLoading
                        ? "..."
                        : reportCounts.serviceReports
                }
                icon={FileText}
                iconColor="
                    bg-emerald-100
                    text-emerald-700
                    dark:bg-emerald-900/30
                    dark:text-emerald-300
                "
                description="Generated service reports"
            />

            <StatisticCard
                title="Calibration Reports"
                value={
                    isLoading
                        ? "..."
                        : reportCounts.calibrationReports
                }
                icon={ClipboardCheck}
                iconColor="
                    bg-violet-100
                    text-violet-700
                    dark:bg-violet-900/30
                    dark:text-violet-300
                "
                description="Completed calibrations"
            />

            <StatisticCard
                title="Installation Reports"
                value={
                    isLoading
                        ? "..."
                        : reportCounts.installationReports
                }
                icon={Wrench}
                iconColor="
                    bg-orange-100
                    text-orange-700
                    dark:bg-orange-900/30
                    dark:text-orange-300
                "
                description="Completed installations"
            />
        </section>
    );
}