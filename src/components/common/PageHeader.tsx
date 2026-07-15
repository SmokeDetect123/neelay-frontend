import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: ReactNode;
    className?: string;
}

export default function PageHeader({
    title,
    description,
    actions,
    className,
}: PageHeaderProps) {
    return (
        <div
            className={cn(
                "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
                className
            )}
        >
            <div className="space-y-2">
                <h1
                    className="
                        text-4xl
                        font-bold
                        tracking-tight
                        text-foreground
                    "
                >
                    {title}
                </h1>

                {description && (
                    <p
                        className="
                            max-w-3xl
                            text-base
                            text-muted-foreground
                        "
                    >
                        {description}
                    </p>
                )}
            </div>

            {actions && (
                <div className="flex items-center gap-3">
                    {actions}
                </div>
            )}
        </div>
    );
}