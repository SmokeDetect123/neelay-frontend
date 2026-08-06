"use client";

import { ContentCard } from "@/components/common/ContentCard";

import { CalibrationReport } from "../../types";

import { DetailField } from ".";

interface EquipmentInformationCardProps {
  report?: CalibrationReport;
}

export default function EquipmentInformationCard({
  report,
}: EquipmentInformationCardProps) {
  if (!report) {
    return (
      <ContentCard className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Equipment Information
        </h2>

        <p className="text-sm text-muted-foreground">
          No equipment information available.
        </p>
      </ContentCard>
    );
  }

  return (
    <ContentCard className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Equipment Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <DetailField
          label="Agent Type"
          value={report.agentType}
        />

        <DetailField
          label="Filling System"
          value={report.fillingSystem}
        />

        <DetailField
          label="Connector System"
          value={report.connectorSystem}
        />

        <DetailField
          label="Serial Number"
          value={report.serialNo}
        />

        <DetailField
          label="Make"
          value={report.make}
        />

        <DetailField
          label="Equipment Type"
          value={report.type}
        />

        <DetailField
          label="Carried Gas"
          value={report.carriedGas}
        />
      </div>
    </ContentCard>
  );
}