"use client";

import {
  InstallationReport,
} from "../../types";

import {
  CustomerInformationCard,
  EquipmentCard,
  ReportInformationCard,
  SignatureCard,
} from "./sections";

interface InstallationReportDetailsProps {
  report: InstallationReport;
}

export default function InstallationReportDetails({
  report,
}: InstallationReportDetailsProps) {
  return (
    <div className="space-y-6">
      <ReportInformationCard
        report={report}
      />

      <CustomerInformationCard
        report={report}
      />

      <EquipmentCard
        report={report}
      />

      <SignatureCard
        report={report}
      />
    </div>
  );
}