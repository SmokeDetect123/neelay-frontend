import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SurfaceProps {
    children: ReactNode;
    className?: string;
}

export function Surface({
    children,
    className,
}: SurfaceProps) {
    return (
        <div
            className={cn(
                "rounded-xl bg-background",
                className
            )}
        >
            {children}
        </div>
    );
}