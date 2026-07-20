import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface InfoFieldProps {
    label: string;
    value: ReactNode;
    className?: string;
}

export default function InfoField({
    label,
    value,
    className,
}: InfoFieldProps) {
    return (
        <div className={cn("space-y-1", className)}>
            <p className="text-sm font-medium text-muted-foreground">
                {label}
            </p>

            <div className="text-base font-medium text-foreground">
                {value}
            </div>
        </div>
    );
}