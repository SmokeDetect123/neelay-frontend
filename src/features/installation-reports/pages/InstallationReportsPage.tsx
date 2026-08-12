"use client";

import Link from "next/link";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  PageContainer,
} from "@/components/common/PageContainer";

import {
  PageHeader,
} from "@/components/common/PageHeader";

import {
  useInstallationReports,
} from "../hooks";

import {
  useInstallationReportFilters,
} from "../states";

import {
  InstallationFilters,
  InstallationReportsTable,
  InstallationSearch,
  InstallationStatistics,
} from "../components/table";

export default function InstallationReportsPage() {
  const {
    data = [],
    isLoading,
  } =
    useInstallationReports();

  const {
    filter,
    setFilter,
    filteredReports,
  } =
    useInstallationReportFilters();

  const reports =
    filteredReports(data);

  return (
    <PageContainer>
      <PageHeader
        title="Installation Reports"
        description="Manage installation reports and installation history."
        actions={
          <Button asChild>
            <Link href="/installation-reports/create">
              <Plus className="mr-2 h-4 w-4" />

              New Report
            </Link>
          </Button>
        }
      />

      <div className="space-y-6">
        <InstallationStatistics />

        <InstallationSearch
          filter={filter}
          onFilterChange={setFilter}
        />

        <InstallationFilters
          filter={filter}
          onFilterChange={setFilter}
        />

        <InstallationReportsTable
          reports={reports}
          isLoading={isLoading}
        />
      </div>
    </PageContainer>
  );
}