import type { LucideIcon } from "lucide-react";
import { Inbox } from "lucide-react";

import {Surface } from "./Surface";

interface EmptyStateProps {
    title: string;
    description: string;
    icon?: LucideIcon;
}

export default function EmptyState({
    title,
    description,
    icon: Icon = Inbox,
}: EmptyStateProps) {
    return (
        <Surface className="p-12">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="mb-5 rounded-full bg-muted p-5">
                    <Icon className="h-10 w-10 text-muted-foreground" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                    {title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                    {description}
                </p>
            </div>
        </Surface>
    );
}