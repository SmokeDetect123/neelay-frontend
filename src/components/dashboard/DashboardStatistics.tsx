import {
    ClipboardCheck,
    FileText,
    Users,
    Wrench,
} from "lucide-react";

import StatisticCard from "./StatisticCard";

export default function DashboardStatistics() {
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
                iconColor="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                description="Registered system users"
            />

            <StatisticCard
                title="Service Reports"
                value={0}
                icon={FileText}
                iconColor="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                description="Generated service reports"
            />

            <StatisticCard
                title="Calibration Reports"
                value={0}
                icon={ClipboardCheck}
                iconColor="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300"
                description="Completed calibrations"
            />

            <StatisticCard
                title="Installation Reports"
                value={0}
                icon={Wrench}
                iconColor="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                description="Completed installations"
            />
        </section>
    );
}