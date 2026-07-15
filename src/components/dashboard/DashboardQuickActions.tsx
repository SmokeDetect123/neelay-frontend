import {
    ClipboardCheck,
    FileText,
    Users,
    Wrench,
} from "lucide-react";

import QuickActionCard from "./QuickActionCard";

export default function DashboardQuickActions() {
    return (
        <section className="space-y-8">

            <div className="space-y-2">

                <h2
                    className="
                        text-3xl
                        font-bold
                        tracking-tight
                        text-foreground
                    "
                >
                    Quick Actions
                </h2>

                <p
                    className="
                        max-w-3xl
                        text-base
                        text-muted-foreground
                    "
                >
                    Access the most frequently used modules of the
                    Neelay Service Report System.
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
                    description="Create, edit and review service reports."
                    href="/service-reports"
                    icon={FileText}
                />

                <QuickActionCard
                    title="Calibration Reports"
                    description="Manage calibration verification reports."
                    href="/calibration-reports"
                    icon={ClipboardCheck}
                />

                <QuickActionCard
                    title="Installation Reports"
                    description="Create and manage installation reports."
                    href="/installation-reports"
                    icon={Wrench}
                />

            </div>

        </section>
    );
}