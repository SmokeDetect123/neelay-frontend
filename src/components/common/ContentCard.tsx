import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContentCardProps {
    children: ReactNode;
    className?: string;
}

export function ContentCard({
    children,
    className,
}: ContentCardProps) {
    return (
        <section
            className={cn(
                "rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-colors",
                className
            )}
        >
            {children}
        </section>
    );
}