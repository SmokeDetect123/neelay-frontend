"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import {
    AlertCircle,
    ArrowLeft,
    Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ServiceReportForm from "../components/ServiceReportForm";

import { useServiceReport } from "../hooks/useServiceReport";

export default function EditServiceReportPage() {
    const params = useParams();

    const rawId = Array.isArray(params.id)
        ? params.id[0]
        : params.id;

    const reportId =
        rawId && /^\d+$/.test(rawId)
            ? Number(rawId)
            : null;

    const {
        report,
        isLoading,
        error,
    } = useServiceReport(reportId);

    if (isLoading) {
        return (
            <Card className="flex min-h-[320px] flex-col items-center justify-center gap-4">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />

                <div className="space-y-1 text-center">
                    <h2 className="text-lg font-semibold">
                        Loading Service Report
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Please wait while we fetch the report details.
                    </p>
                </div>
            </Card>
        );
    }

    if (error || !report) {
        return (
            <Card className="flex min-h-[320px] flex-col items-center justify-center gap-5 p-8">
                <AlertCircle className="h-12 w-12 text-destructive" />

                <div className="space-y-2 text-center">
                    <h2 className="text-xl font-semibold">
                        Unable to Load Report
                    </h2>

                    <p className="text-muted-foreground">
                        {error ??
                            "Service Report not found."}
                    </p>
                </div>

                <Button asChild>
                    <Link href="/service-reports">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Service Reports
                    </Link>
                </Button>
            </Card>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Edit Service Report
                </h1>

                <p className="text-muted-foreground">
                    Update an existing service report.
                </p>
            </div>

            <ServiceReportForm
                mode="edit"
                report={report}
            />
        </div>
    );
}