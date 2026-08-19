"use client";

import { Badge } from "@/components/ui/badge";
import { ContentCard } from "@/components/common/ContentCard";

import type { CalibrationReport } from "../../types";

import { DetailField } from ".";

interface CalibrationResultsCardProps {
    report?: CalibrationReport;
}

function ResultBadge({
    value,
}: {
    value: boolean | null;
}) {
    if (value === null) {
        return (
            <Badge variant="outline">
                PENDING
            </Badge>
        );
    }

    return (
        <Badge
            variant={
                value
                    ? "default"
                    : "destructive"
            }
        >
            {value ? "PASS" : "FAIL"}
        </Badge>
    );
}

export default function CalibrationResultsCard({
    report,
}: CalibrationResultsCardProps) {
    if (!report) {
        return (
            <ContentCard className="p-6">
                <h2 className="mb-6 text-lg font-semibold">
                    Calibration Results
                </h2>

                <p className="text-sm text-muted-foreground">
                    No calibration results available.
                </p>
            </ContentCard>
        );
    }

    return (
        <ContentCard className="p-6">
            <h2 className="mb-6 text-lg font-semibold">
                Calibration Results
            </h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                <DetailField
                    label="Resistance @ 4 L/min"
                    value={report.resistance4lmin}
                />

                <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Leak Test
                    </p>

                    <ResultBadge
                        value={report.leakTestPass}
                    />
                </div>

                <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Dried Out
                    </p>

                    <ResultBadge
                        value={report.driedOutPass}
                    />
                </div>

                <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Final Leak Test
                    </p>

                    <ResultBadge
                        value={
                            report.finalLeakTestPass
                        }
                    />
                </div>

                <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Overall Result
                    </p>

                    <ResultBadge
                        value={report.overallPass}
                    />
                </div>

                <DetailField
                    label="Overall Comment"
                    value={report.overallComment}
                />
            </div>
        </ContentCard>
    );
}