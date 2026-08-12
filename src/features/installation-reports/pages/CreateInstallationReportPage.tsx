"use client";

import { FilePlus2 } from "lucide-react";

import {
  PageContainer,
} from "@/components/common/PageContainer";

import {
  PageHeader,
} from "@/components/common/PageHeader";

import InstallationReportForm
from "../components/form/InstallationReportForm";

export default function CreateInstallationReportPage() {
  return (
    <PageContainer>
      <PageHeader
        title="Create Installation Report"
        description="Create a new installation report."
        icon={FilePlus2}
        breadcrumbs={[
          {
            label: "Installation Reports",
            href: "/installation-reports",
          },
          {
            label: "Create Report",
          },
        ]}
      />

      <div className="mt-6">
        <InstallationReportForm />
      </div>
    </PageContainer>
  );
}