"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import type { CalibrationReport } from "../types";

export const calibrationReportColumns: ColumnDef<CalibrationReport>[] = [
  {
    accessorKey: "reportNo",
    header: "Report No.",
    cell: ({ row }) => {
      const report = row.original;

      return (
        <Button
          asChild
          variant="link"
          className="h-auto p-0 font-medium"
        >
          <Link href={`/calibration-reports/${report.id}`}>
            {report.reportNo}
          </Link>
        </Button>
      );
    },
  },

  {
    accessorKey: "customerName",
    header: "Customer",
    cell: ({ row }) => (
      <span className="font-medium">
        {row.original.customerName}
      </span>
    ),
  },

  {
    accessorKey: "serialNo",
    header: "Serial No.",
  },

  {
    accessorKey: "reportDate",
    header: "Report Date",
    cell: ({ row }) => {
      const value = row.original.reportDate;

      if (!value) {
        return "—";
      }

      return new Intl.DateTimeFormat("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(value));
    },
  },

  {
    accessorKey: "overallPass",
    header: "Result",
    cell: ({ row }) => {
      const passed = row.original.overallPass;

      return (
        <Badge variant={passed ? "default" : "destructive"}>
          {passed ? "PASS" : "FAIL"}
        </Badge>
      );
    },
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      return (
        <Badge variant="outline">
          {String(status).replaceAll("_", " ")}
        </Badge>
      );
    },
  },
];