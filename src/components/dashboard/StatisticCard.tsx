import { LucideIcon, Users } from "lucide-react";

import Surface from "@/components/common/Surface";
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
    iconColor = "text-blue-600",
    description,
}: StatisticCardProps) {
    return (
        <Surface className="p-6 hover:shadow-md transition-shadow duration-300">

            <div className="flex items-start justify-between">

                <div className="space-y-2">

                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900">
                        {value}
                    </h2>

                    {description && (
                        <p className="text-xs text-slate-500">
                            {description}
                        </p>
                    )}

                </div>

                <div
                    className={cn(
                        "rounded-xl bg-slate-100 p-3",
                        iconColor
                    )}
                >
                    <Icon className="h-7 w-7" />
                </div>

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