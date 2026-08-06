"use client";

import { ContentCard } from "@/components/common/ContentCard";

import { CalibrationReport } from "../../types";

import { DetailField } from ".";

interface CustomerInformationCardProps {
  report?: CalibrationReport;
}

export default function CustomerInformationCard({
  report,
}: CustomerInformationCardProps) {
  if (!report) {
    return (
      <ContentCard className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Customer Information
        </h2>

        <p className="text-sm text-muted-foreground">
          No customer information available.
        </p>
      </ContentCard>
    );
  }

  return (
    <ContentCard className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Customer Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <DetailField
          label="Customer Name"
          value={report.customerName}
        />

        <DetailField
          label="Customer Address"
          value={report.customerAddress}
        />
      </div>
    </ContentCard>
  );
}