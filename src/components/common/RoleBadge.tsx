"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Role = "ADMIN" | "EMPLOYEE";

interface RoleBadgeProps {
    role: Role;
    className?: string;
}

export default function RoleBadge({
    role,
    className,
}: RoleBadgeProps) {
    const isAdmin = role === "ADMIN";

    return (
        <Badge
            className={cn(
                "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                isAdmin
                    ? "border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300"
                    : "border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300",
                className
            )}
        >
            {isAdmin ? "Administrator" : "Employee"}
        </Badge>
    );
}