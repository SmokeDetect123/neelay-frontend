import { LucideIcon } from "lucide-react";

import { Surface } from "@/components/common/Surface";
import { cn } from "@/lib/utils";

interface StatisticCardProps {
    title: string;
    value: number | string;
    icon: LucideIcon;
    iconColor?: string;
    description?: string;
}

export default function StatisticCard({
    title,
    value,
    icon: Icon,
    iconColor,
    description,
}: StatisticCardProps) {
    return (
        <Surface
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
            )}
        >
            {/* Decorative accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r  from-blue-600  via-blue-500  to-red-500"/>

            <div className="flex items-start justify-between gap-5">

                {/* Left Section */}
                <div className="flex-1 space-y-3">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        {title}
                    </p>

                    <h2 className="text-4xl font-bold leading-none tracking-tight text-foreground">
                        {value}
                    </h2>

                    {description && (
                        <p className="text-sm leading-6 text-muted-foreground">
                            {description}
                        </p>
                    )}

                </div>

                {/* Right Section */}
                <div
                    className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl",
                        "bg-primary/10 text-primary",
                        "transition-all duration-300",
                        "group-hover:scale-110 group-hover:bg-primary group-hover:text-white",
                        iconColor
                    )}
                >
                    <Icon className="h-8 w-8" />
                </div>

            </div>

            {/* Bottom information */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-medium text-muted-foreground">
                    Updated Today
                </span>

                <span
                    className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30  dark:text-emerald-300">
                    Live
                </span>
            </div>
        </Surface>
    );
}
/*    <StatisticCard
        title="Users"
        value={dashboard.totalUsers}
        icon={Users}
    />
Add later when integrating backend 
    */