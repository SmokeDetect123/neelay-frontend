import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SurfaceProps {
    children: ReactNode;
    className?: string;
}

export default function Surface({
    children,
    className,
}: SurfaceProps) {
    return (
        <section
            className={cn(
                `
                rounded-2xl
                border
                border-slate-200
                bg-white
                shadow-sm
                transition-all
                duration-200
                `,
                className
            )}
        >
            {children}
        </section>
    );
}