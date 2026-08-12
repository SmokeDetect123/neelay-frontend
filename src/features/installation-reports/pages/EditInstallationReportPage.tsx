"use client";

import Link from "next/link";

import {
  ArrowLeft,
  Loader2,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  PageContainer,
} from "@/components/common/PageContainer";

import {
  PageHeader,
} from "@/components/common/PageHeader";

import {
  useInstallationReport,
} from "../hooks";

import InstallationReportForm
from "../components/form/InstallationReportForm";

interface EditInstallationReportPageProps {
  id: number;
}

export default function EditInstallationReportPage({
  id,
}: EditInstallationReportPageProps) {
  const {
    data: report,
    isLoading,
    isError,
  } = useInstallationReport(id);

  if (isLoading) {
    return (
      <PageContainer>
        <div className="flex h-80 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </PageContainer>
    );
  }

  if (isError || !report) {
    return (
      <PageContainer>
        <PageHeader
          title="Edit Installation Report"
          description="Report not found"
        />

        <div className="rounded-lg border border-destructive p-8 text-center">
          <h2 className="text-xl font-semibold">
            Report Not Found
          </h2>

          <p className="mt-2 text-muted-foreground">
            Unable to load the requested installation report.
          </p>

          <Button
            asChild
            className="mt-6"
          >
            <Link href="/installation-reports">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Reports
            </Link>
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={`Edit ${report.reportNo}`}
        description={report.customerName}
        icon={Pencil}
        breadcrumbs={[
          {
            label: "Installation Reports",
            href: "/installation-reports",
          },
          {
            label: report.reportNo,
            href: `/installation-reports/${report.id}`,
          },
          {
            label: "Edit",
          },
        ]}
        actions={
          <Button
            asChild
            variant="outline"
          >
            <Link
              href={`/installation-reports/${report.id}`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Details
            </Link>
          </Button>
        }
      />

      <div className="mt-6">
        <InstallationReportForm
          report={report}
          mode="edit"
        />
      </div>
    </PageContainer>
  );
}