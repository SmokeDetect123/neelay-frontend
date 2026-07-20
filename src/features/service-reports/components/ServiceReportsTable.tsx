"use client";

import DataTable from "@/components/table/DataTable";

import { reportColumns } from "../columns/report.columns";

import type { ServiceReportResponse } from "../types/serviceReport.types";

interface ReportsTableProps {
    reports: ServiceReportResponse[];
    loading?: boolean;
}

export default function ReportsTable({
    reports,
    loading = false,
}: ReportsTableProps) {
    return (
        <DataTable
            columns={reportColumns}
            data={reports}
            loading={loading}
            emptyTitle="No Service Reports Found"
            emptyDescription="There are currently no service reports in the system."
        />
    );
}