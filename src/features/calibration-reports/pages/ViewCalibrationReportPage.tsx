"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  ArrowLeft,
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
  CalibrationReportLoading,
  CalibrationReportNotFound,
  CalibrationResultsCard,
  CalibrationSignatureCard,
  CalibrationTestRecordsCard,
  CustomerInformationCard,
  EquipmentInformationCard,
  ReportInformationCard,
} from "../components/details";

import {
  useCalibrationReport,
} from "../hooks";

export default function ViewCalibrationReportPage() {
  const params =
    useParams();

  const id =
    Number(params.id);

  const {
    data: report,
    isLoading,
    isFetching,
    isError,
  } =
    useCalibrationReport(id);

  /**
   * Invalid route
   */
  if (
    Number.isNaN(id) ||
    id <= 0
  ) {
    return (
      <PageContainer>
        <CalibrationReportNotFound />
      </PageContainer>
    );
  }

  /**
   * Initial loading
   */
  if (
    isLoading &&
    !report
  ) {
    return (
      <PageContainer>
        <CalibrationReportLoading />
      </PageContainer>
    );
  }

  /**
   * Report not found
   */
  if (
    isError ||
    (!isFetching &&
      !report)
  ) {
    return (
      <PageContainer>
        <CalibrationReportNotFound />
      </PageContainer>
    );
  }

  return (
    <PageContainer>

      <PageHeader
        title={`Calibration Report ${report!.reportNo}`}
        description="View complete calibration report."
        actions={
          <div className="flex items-center gap-2">

            <Button
              asChild
              variant="outline"
            >
              <Link href="/calibration-reports">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>

            <Button asChild>
              <Link
                href={`/calibration-reports/${report!.id}/edit`}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit Report
              </Link>
            </Button>

          </div>
        }
      />

      <div className="space-y-6">

        <ReportInformationCard
          report={report!}
        />

        <CustomerInformationCard
          report={report!}
        />

        <EquipmentInformationCard
          report={report!}
        />

        <CalibrationTestRecordsCard
          report={report!}
        />

        <CalibrationResultsCard
          report={report!}
        />

        <CalibrationSignatureCard
          report={report!}
        />

      </div>

    </PageContainer>
  );
}