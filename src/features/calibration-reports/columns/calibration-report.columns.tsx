"use client";

import Link from "next/link";

import { ColumnDef } from "@tanstack/react-table";

import { Eye, Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { CalibrationReport } from "../types";

export const calibrationReportColumns: ColumnDef<CalibrationReport>[] = [
    {
        accessorKey: "reportNo",
        header: "Report No",
    },

    {
        accessorKey: "customerName",
        header: "Customer",
    },

    {
        accessorKey: "serialNo",
        header: "Serial No",
    },

    {
        accessorKey: "type",
        header: "Equipment Type",
    },

    {
        accessorKey: "reportDate",
        header: "Report Date",
    },

    {
        accessorKey: "overallPass",

        header: "Overall Result",

        cell: ({ row }) => {
            const value = row.original.overallPass;

            return (
                <Badge
                    variant={
                        value === "PASS"
                            ? "default"
                            : "destructive"
                    }
                >
                    {value}
                </Badge>
            );
        },
    },

    {
        accessorKey: "status",

        header: "Status",

        cell: ({ row }) => {
            const value = row.original.status;

            return (
                <Badge
                    variant={
                        value === "PASS"
                            ? "default"
                            : value === "FAIL"
                              ? "destructive"
                              : "secondary"
                    }
                >
                    {value}
                </Badge>
            );
        },
    },

    {
        id: "actions",

        header: "Actions",

        enableSorting: false,

        cell: ({ row }) => {
            const report = row.original;

            return (
            <div className="flex items-center justify-center gap-2">
                <Button
                asChild
                variant="ghost"
                size="icon"
                title="View Report"
                >
                <Link href={`/calibration-reports/${report.id}`}>
                    <Eye className="h-4 w-4" />
                </Link>
                </Button>

                <Button
                asChild
                variant="ghost"
                size="icon"
                title="Edit Report"
                >
                <Link
                    href={`/calibration-reports/${report.id}/edit`}
                >
                    <Pencil className="h-4 w-4" />
                </Link>
                </Button>
            </div>
            );
        },
    },
];