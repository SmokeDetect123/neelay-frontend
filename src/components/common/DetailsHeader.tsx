"use client";

import { ReactNode } from "react";

import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";

interface DetailsHeaderProps {
    title: string;
    description?: string;
    backHref: string;
    backLabel?: string;
    actions?: ReactNode;
}

export default function DetailsHeader({
    title,
    description,
    backHref,
    backLabel = "Back",
    actions,
}: DetailsHeaderProps) {
    return (
        <div className="space-y-6">
            <Link
                href={backHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />

                {backLabel}
            </Link>

            <PageHeader
                title={title}
                description={description}
                actions={actions}
            />
        </div>
    );
}