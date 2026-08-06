"use client";

import { useMemo } from "react";

import DataTable from "@/components/table/DataTable";

import { calibrationReportColumns } from "../columns/calibration-report.columns";

import { CalibrationReport } from "../types";

interface CalibrationReportsTableProps {
  reports: CalibrationReport[];
  loading?: boolean;
}

export default function CalibrationReportsTable({
  reports,
  loading = false,
}: CalibrationReportsTableProps) {
  const columns = useMemo(
    () => calibrationReportColumns,
    []
  );

  const data = useMemo(
    () => reports,
    [reports]
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      loading={loading}
      emptyTitle="No Calibration Reports Found"
      emptyDescription="There are currently no calibration reports in the system."
    />
  );
}