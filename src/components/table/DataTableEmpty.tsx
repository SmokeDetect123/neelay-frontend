"use client";

import { Inbox } from "lucide-react";

interface DataTableEmptyProps {
    title?: string;
    description?: string;
}

export default function DataTableEmpty({
    title = "No Data Found",
    description = "There are no records to display.",
}: DataTableEmptyProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Inbox className="h-8 w-8 text-muted-foreground" />
            </div>

            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                {description}
            </p>

        </div>
    );
}