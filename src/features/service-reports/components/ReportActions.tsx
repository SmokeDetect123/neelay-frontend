"use client";

import Link from "next/link";

import { Eye, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

interface ReportActionsProps {
    reportId: number;
}

export default function ReportActions({
    reportId,
}: ReportActionsProps) {
    return (
        <div className="flex items-center gap-2">
            <Button
                asChild
                variant="outline"
                size="icon"
            >
                <Link href={`/service-reports/${reportId}`}>
                    <Eye className="h-4 w-4" />
                </Link>
            </Button>

            <Button
                asChild
                variant="outline"
                size="icon"
            >
                <Link
                    href={`/service-reports/${reportId}/edit`}
                >
                    <Pencil className="h-4 w-4" />
                </Link>
            </Button>
        </div>
    );
}