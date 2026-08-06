"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ContentCard } from "@/components/common/ContentCard";
import { PageContainer } from "@/components/common/PageContainer";
import { PageHeader } from "@/components/common/PageHeader";

import CalibrationReportsFilters from "../components/CalibrationReportsFilters";
import CalibrationReportsTable from "../components/CalibrationReportsTable";
import CalibrationReportStatistics from "../components/CalibrationReportStatistics";

import {
  CalibrationReportsErrorState,
  CalibrationReportsNoResults,
} from "../states";

import { useCalibrationReports } from "../hooks";

import { CalibrationStatus } from "../types";

export default function CalibrationReportsPage() {
  const { data: reports = [], isLoading, error } =
    useCalibrationReports();

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<
    CalibrationStatus | "ALL"
  >("ALL");

  const filteredReports = useMemo(() => {
    return reports.filter((report) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        query.length === 0 ||
        report.reportNo.toLowerCase().includes(query) ||
        report.customerName.toLowerCase().includes(query) ||
        report.serialNo.toLowerCase().includes(query);

      const matchesStatus =
        status === "ALL" ||
        report.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [reports, search, status]);

  return (
    <PageContainer>
      <PageHeader
        title="Calibration Reports"
        description="Create, manage and track calibration reports."
        actions={
          <Button asChild>
            <Link href="/calibration-reports/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Report
            </Link>
          </Button>
        }
      />

      <CalibrationReportStatistics
        reports={filteredReports}
      />

      <CalibrationReportsFilters
        search={search}
        status={status}
        onSearchChange={setSearch}
        onStatusChange={setStatus}
      />

      <ContentCard className="p-6">
        {error ? (
          <CalibrationReportsErrorState
            message={
              error instanceof Error
                ? error.message
                : "Unable to load calibration reports."
            }
          />
        ) : filteredReports.length === 0 && search.trim() !== "" ? (
          <CalibrationReportsNoResults
            search={search}
          />
        ) : (
          <CalibrationReportsTable
            reports={filteredReports}
            loading={isLoading}
          />
        )}
      </ContentCard>
    </PageContainer>
  );
}