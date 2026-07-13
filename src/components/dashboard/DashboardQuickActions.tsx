import {
    ClipboardCheck,
    FileText,
    Users,
    Wrench,
} from "lucide-react";

import QuickActionCard from "./QuickActionCard";

export default function DashboardQuickActions() {
    return (
        <section>

            <div className="mb-6">

                <h2 className="text-2xl font-semibold text-slate-900">
                    Quick Actions
                </h2>

                <p className="mt-2 text-slate-500">
                    Quickly navigate to the most frequently used modules.
                </p>

            </div>

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >
                <QuickActionCard
                    title="Users"
                    description="Manage users, engineers and administrators."
                    href="/users"
                    icon={Users}
                />

                <QuickActionCard
                    title="Service Reports"
                    description="Create and manage service reports."
                    href="/service-reports"
                    icon={FileText}
                />

                <QuickActionCard
                    title="Calibration Reports"
                    description="Manage calibration reports."
                    href="/calibration-reports"
                    icon={ClipboardCheck}
                />

                <QuickActionCard
                    title="Installation Reports"
                    description="Manage installation reports."
                    href="/installation-reports"
                    icon={Wrench}
                />

            </div>

        </section>
    );
}