"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  InstallationReport,
} from "../../types";

import InstallationEmptyState from "./InstallationEmptyState";
import InstallationLoading from "./InstallationLoading";

import {
  installationTableColumns,
} from "./InstallationTableColumns";

interface InstallationReportsTableProps {
  reports: InstallationReport[];

  isLoading: boolean;
}

export default function InstallationReportsTable({
  reports,
  isLoading,
}: InstallationReportsTableProps) {
  const table =
    useReactTable({
      data: reports,

      columns:
        installationTableColumns(),

      getCoreRowModel:
        getCoreRowModel(),
    });

  if (isLoading) {
    return <InstallationLoading />;
  }

  if (reports.length === 0) {
    return <InstallationEmptyState />;
  }

  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          {table
            .getHeaderGroups()
            .map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
              >
                {headerGroup.headers.map(
                  (header) => (
                    <TableHead
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column
                              .columnDef
                              .header,
                            header.getContext(),
                          )}
                    </TableHead>
                  ),
                )}
              </TableRow>
            ))}
        </TableHeader>

        <TableBody>
          {table
            .getRowModel()
            .rows
            .map((row) => (
              <TableRow
                key={row.id}
              >
                {row
                  .getVisibleCells()
                  .map((cell) => (
                    <TableCell
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column
                          .columnDef
                          .cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}