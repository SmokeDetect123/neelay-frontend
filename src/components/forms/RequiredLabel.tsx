import { ReactNode } from "react";

interface RequiredLabelProps {
    children: ReactNode;
    required?: boolean;
}

export function RequiredLabel({
    children,
    required = true,
}: RequiredLabelProps) {
    return (
        <span className="inline-flex items-center gap-1">
            <span>{children}</span>

            {required && (
                <span
                    className="text-destructive"
                    aria-hidden="true"
                >
                    *
                </span>
            )}
        </span>
    );
}