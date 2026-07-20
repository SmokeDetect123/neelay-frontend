import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant =
    | "default"
    | "success"
    | "warning"
    | "danger"
    | "info";

interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}

const variants: Record<BadgeVariant, string> = {
    default:
        "bg-muted text-muted-foreground",

    success:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",

    warning:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",

    danger:
        "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",

    info:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
};

export default function Badge({
    children,
    variant = "default",
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                variants[variant],
                className
            )}
        >
            {children}
        </span>
    );
}