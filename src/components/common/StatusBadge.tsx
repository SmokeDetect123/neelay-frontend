"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    active: boolean;
    className?: string;
}

export default function StatusBadge({
    active,
    className,
}: StatusBadgeProps) {
    return (
        <Badge
            className={cn(
                "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                active
                    ? "border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                    : "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-300",
                className
            )}
        >
            {active ? "Active" : "Inactive"}
        </Badge>
    );
}