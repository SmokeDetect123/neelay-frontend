"use client";

import { ColumnDef } from "@tanstack/react-table";

import ReportActions from "../components/ReportActions";

import { Badge } from "@/components/ui/badge";


import { ServiceReportResponse } from "../types/serviceReport.types";

function getStatusVariant(
    status: ServiceReportResponse["status"],
):
    | "default"
    | "secondary"
    | "destructive"
    | "outline" {
    switch (status) {
        case "COMPLETED":
            return "default";

        case "IN_PROGRESS":
            return "secondary";

        case "OPEN":
            return "outline";

        default:
            return "outline";
    }
}

export const reportColumns: ColumnDef<ServiceReportResponse>[] = [
    {
        accessorKey: "reportNumber",
        header: "Report No.",
    },

    {
        accessorKey: "customerName",
        header: "Customer",
    },

    {
        accessorKey: "equipment",
        header: "Equipment",
    },

    {
        accessorKey: "attendedByName",
        header: "Engineer",
    },

    {
        accessorKey: "reportDate",
        header: "Date",
    },

    {
        accessorKey: "status",

        header: "Status",

        cell: ({ row }) => (
            <Badge
                variant={getStatusVariant(
                    row.original.status,
                )}
            >
                {row.original.status.replace("_", " ")}
            </Badge>
        ),
    },

    {
        id: "actions",

        header: "Actions",

        enableSorting: false,

        cell: ({ row }) => (
            <ReportActions
                reportId={row.original.id}
            />
        ),
    },
];