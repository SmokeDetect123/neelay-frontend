"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import type { ComponentType } from "react";

import {
    AlertCircle,
    ArrowLeft,
    Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import ServiceReportForm from "../components/ServiceReportForm";
import { useServiceReport } from "../hooks/useServiceReport";

import type { ServiceReportResponse } from "../types/serviceReport.types";
import type { ServiceReportFormProps } from "../types/serviceReportFormProps";

/**
 * ServiceReportForm currently exposes no props in its
 * TypeScript declaration, while the edit workflow requires
 * mode + report.
 *
 * We keep ServiceReportForm.tsx untouched and define the
 * expected edit-page contract locally through a type adapter.
 *
 * This does not change the runtime component.
 */
const ServiceReportFormWithProps =
    ServiceReportForm as unknown as ComponentType<ServiceReportFormProps>;

export default function EditServiceReportPage() {
    const params = useParams();

    /**
     * Next.js route parameters can be:
     *
     * string
     * string[]
     * undefined
     */
    const rawId = Array.isArray(params.id)
        ? params.id[0]
        : params.id;

    /**
     * Convert the route parameter into a numeric report ID.
     *
     * Example:
     *
     * /service-reports/edit/12
     *
     * becomes:
     *
     * 12
     */
    const reportId =
        rawId && /^\d+$/.test(rawId)
            ? Number(rawId)
            : NaN;

    const {
        report,
        isLoading,
        error,
    } = useServiceReport(reportId);

    /**
     * Loading state
     */
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

    /**
     * Error / missing report state
     */
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

    /**
     * Edit form
     */
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

            <ServiceReportFormWithProps
                mode="edit"
                report={report as ServiceReportResponse}
            />
        </div>
    );
}