import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContentCardProps {
    children: ReactNode;
    className?: string;
}

export default function ContentCard({
    children,
    className,
}: ContentCardProps) {
    return (
        <section
            className={cn(
                "rounded-3xl border border-border/60 bg-card text-card-foreground shadow-sm transition-all duration-300",
                className
            )}
        >
            {children}
        </section>
    );
}
// easy to use justt type <content></content>