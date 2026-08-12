"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";

import {
  InstallationReport,
} from "../../types";

import InstallationTableActions
from "./InstallationTableActions";

export const installationTableColumns = (
  onDelete?: (id: number) => void
): ColumnDef<InstallationReport>[] => [
  {
    accessorKey: "reportNo",
    header: "Report No.",
  },

  {
    accessorKey: "reportDate",
    header: "Report Date",
  },

  {
    accessorKey: "customerName",
    header: "Customer",
  },

  {
    id: "equipment",

    header: "Equipment",

    cell: ({ row }) => (
      <div className="space-y-1">
        {row.original.lineItems.map(
          (item) => (
            <div key={item.id}>
              {item.make} {item.model}
            </div>
          )
        )}
      </div>
    ),
  },

  {
    id: "fabrication",

    header: "Fabrication No.",

    cell: ({ row }) => (
      <div className="space-y-1">
        {row.original.lineItems.map(
          (item) => (
            <div key={item.id}>
              {item.fabricationNo}
            </div>
          )
        )}
      </div>
    ),
  },

  {
    id: "quantity",

    header: "Qty",

    cell: ({ row }) => (
      <Badge variant="secondary">
        {row.original.lineItems.reduce(
          (sum, item) => sum + item.qty,
          0
        )}
      </Badge>
    ),
  },

  {
    id: "actions",

    header: "",

    enableSorting: false,

    cell: ({ row }) => (
      <InstallationTableActions
        reportId={row.original.id}
        onDelete={onDelete}
      />
    ),
  },
];