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
                description="Registered system users"
            />

            <StatisticCard
                title="Service Reports"
                value={0}
                icon={FileText}
                description="Generated reports"
            />

            <StatisticCard
                title="Calibration Reports"
                value={0}
                icon={ClipboardCheck}
                description="Completed calibrations"
            />

            <StatisticCard
                title="Installation Reports"
                value={0}
                icon={Wrench}
                description="Completed installations"
            />

        </section>
    );
}