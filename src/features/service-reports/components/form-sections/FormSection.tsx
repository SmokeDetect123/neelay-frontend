import { ReactNode } from "react";

import { ContentCard } from "@/components/common/ContentCard";

interface FormSectionProps {
    title: string;
    description?: string;
    children?: ReactNode;
}

export default function FormSection({
    title,
    description,
    children,
}: FormSectionProps) {
    return (
        <ContentCard>
            <div className="p-6 space-y-6">

                <div>
                    <h2 className="text-lg font-semibold">
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