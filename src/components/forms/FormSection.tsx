import { ReactNode } from "react";

import { ContentCard } from "@/components/common/ContentCard";
import { cn } from "@/lib/utils";

interface FormSectionProps {
    title: string;
    description?: string;
    children: ReactNode;
    className?: string;
}

export function FormSection({
    title,
    description,
    children,
    className,
}: FormSectionProps) {
    return (
        <ContentCard className={cn("p-6", className)}>
            <div className="space-y-6">
                <div className="border-b border-border pb-4">
                    <h2 className="text-lg font-semibold tracking-tight">
                        {title}
                    </h2>

                    {description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>

                {children}
            </div>
        </ContentCard>
    );
}