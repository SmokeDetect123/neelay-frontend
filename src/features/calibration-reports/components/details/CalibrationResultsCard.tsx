"use client";

import { CheckCircle2, XCircle } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { CalibrationReport } from "../../types";

interface CalibrationResultsCardProps {
  report: CalibrationReport;
}

export default function CalibrationResultsCard({
  report,
}: CalibrationResultsCardProps) {
  const overallPass = report.overallPass;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calibration Results</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ResultItem
            label="Leak Test"
            passed={report.leakTestPass}
          />

          <ResultItem
            label="Dried Out"
            passed={report.driedOutPass}
          />

          <ResultItem
            label="Final Leak Test"
            passed={report.finalLeakTestPass}
          />

          <ResultItem
            label="Overall Result"
            passed={overallPass}
          />
        </div>

        {report.overallComment && (
          <div className="rounded-lg border bg-muted/30 p-4">
            <p className="mb-1 text-sm font-medium">
              Overall Comment
            </p>

            <p className="text-sm text-muted-foreground">
              {report.overallComment}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface ResultItemProps {
  label: string;
  passed: boolean;
}

function ResultItem({
  label,
  passed,
}: ResultItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <span className="text-sm font-medium">
        {label}
      </span>

      <div className="flex items-center gap-2">
        {passed ? (
          <>
            <CheckCircle2 className="h-4 w-4" />
            <span className="text-sm font-medium">
              PASS
            </span>
          </>
        ) : (
          <>
            <XCircle className="h-4 w-4" />
            <span className="text-sm font-medium">
              FAIL
            </span>
          </>
        )}
      </div>
    </div>
  );
}