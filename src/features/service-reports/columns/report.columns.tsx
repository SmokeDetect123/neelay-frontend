"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { Eye, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { ServiceReportResponse } from "../types/serviceReport.types";

/**
 * Service Report table columns.
 *
 * These columns intentionally use only fields that exist
 * in the current backend ServiceReportResponse.
 *
 * Backend fields:
 * - reportNo
 * - customerName
 * - department
 * - make
 * - model
 * - serialNo
 * - callType
 * - locationType
 * - reportDate
 */
export const reportColumns: ColumnDef<ServiceReportResponse>[] = [
    {
        accessorKey: "reportNo",
        header: "Report No.",
    },

    {
        accessorKey: "customerName",
        header: "Customer",
    },

    {
        id: "equipment",
        header: "Equipment",
        accessorFn: (row) => {
            const parts = [
                row.make,
                row.model,
            ].filter(Boolean);

            return parts.length > 0
                ? parts.join(" ")
                : "—";
        },
    },

    {
        accessorKey: "serialNo",
        header: "Serial No.",
        cell: ({ row }) =>
            row.original.serialNo || "—",
    },

    {
        accessorKey: "department",
        header: "Department",
        cell: ({ row }) =>
            row.original.department || "—",
    },

    {
        accessorKey: "callType",
        header: "Call Type",
    },

    {
        accessorKey: "locationType",
        header: "Location",
        cell: ({ row }) =>
            row.original.locationType
                ? row.original.locationType.replace(
                      "_",
                      " ",
                  )
                : "—",
    },

    {
        accessorKey: "reportDate",
        header: "Date",
    },

    {
        id: "actions",
        header: "Actions",
        enableSorting: false,

        cell: ({ row }) => {
            const report = row.original;

            return (
                <div className="flex items-center gap-2">
                    <Button
                        asChild
                        variant="outline"
                        size="icon"
                    >
                        <Link
                            href={`/service-reports/${report.id}`}
                            aria-label={`View report ${report.reportNo}`}
                        >
                            <Eye className="h-4 w-4" />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="icon"
                    >
                        <Link
                            href={`/service-reports/${report.id}/edit`}
                            aria-label={`Edit report ${report.reportNo}`}
                        >
                            <Pencil className="h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            );
        },
    },
];