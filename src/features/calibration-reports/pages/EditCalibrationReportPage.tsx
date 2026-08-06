"use client";

import Link from "next/link";

import { useParams } from "next/navigation";

import {
  ArrowLeft,
  Save,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import {
  CalibrationReportLoading,
  CalibrationReportNotFound,
} from "../components/details";

import { CalibrationReportForm } from "../components/form";

import { useCalibrationReport } from "../hooks";

export default function EditCalibrationReportPage() {
  const params = useParams();

  const id = Number(params.id);

  const {
    report,
    isLoading,
  } = useCalibrationReport(id);

  if (isLoading) {
    return (
      <PageContainer>
        <CalibrationReportLoading />
      </PageContainer>
    );
  }

  if (!report) {
    return (
      <PageContainer>
        <CalibrationReportNotFound />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageHeader
        title={`Edit ${report.reportNo}`}
        description="Update calibration report."
        actions={
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
            >
              <Link href={`/calibration-reports/${report.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>

            <Button disabled>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        }
      />

      <CalibrationReportForm
        report={report}
      />
    </PageContainer>
  );
}