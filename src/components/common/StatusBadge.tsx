import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status: string;
    className?: string;
}

const STATUS_STYLES: Record<
    string,
    string
> = {
    ACTIVE:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",

    INACTIVE:
        "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",

    PENDING:
        "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",

    COMPLETED:
        "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",

    FAILED:
        "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

export default function StatusBadge({
    status,
    className,
}: StatusBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                STATUS_STYLES[status.toUpperCase()] ??
                    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
                className
            )}
        >
            {status}
        </span>
    );
}