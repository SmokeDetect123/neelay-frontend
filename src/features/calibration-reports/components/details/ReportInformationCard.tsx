"use client";

import { ContentCard } from "@/components/common/ContentCard";

import { CalibrationReport } from "../../types";

import { DetailField } from ".";

interface Props {
  report?: CalibrationReport;
}

export default function ReportInformationCard({
  report,
}: Props) {
  if (!report) {
    return (
      <ContentCard className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Report Information
        </h2>

        <p className="text-sm text-muted-foreground">
          No report selected.
        </p>
      </ContentCard>
    );
  }

  return (
    <ContentCard className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Report Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <DetailField
          label="Report Number"
          value={report.reportNo}
        />

        <DetailField
          label="Report Date"
          value={report.reportDate}
        />

        <DetailField
          label="Created By"
          value={report.createdBy}
        />

        

        <DetailField
          label="Created At"
          value={report.createdAt}
        />

        <DetailField
          label="Updated At"
          value={report.updatedAt}
        />
      </div>
    </ContentCard>
  );
}