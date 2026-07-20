"use client";

import * as React from "react";

import {
    ColumnDef,
    SortingState,
    PaginationState,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import { ContentCard } from "@/components/common/ContentCard";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import DataTableEmpty from "./DataTableEmpty";
import DataTableLoading from "./DataTableLoading";
import DataTablePagination from "./DataTablePagination";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];

    data: TData[];

    loading?: boolean;

    emptyTitle?: string;

    emptyDescription?: string;
}

export default function DataTable<TData, TValue>({
    columns,
    data,
    loading = false,
    emptyTitle,
    emptyDescription,
}: DataTableProps<TData, TValue>) {

    const [sorting, setSorting] =
        React.useState<SortingState>([]);

    const [pagination, setPagination] =
        React.useState<PaginationState>({
            pageIndex: 0,
            pageSize: 10,
        });

    const table = useReactTable({

        data,

        columns,

        state: {
            sorting,
            pagination,
        },

        onSortingChange: setSorting,

        onPaginationChange: setPagination,

        getCoreRowModel: getCoreRowModel(),

        getSortedRowModel: getSortedRowModel(),

        getPaginationRowModel:
            getPaginationRowModel(),
    });

    return (

        <ContentCard className="overflow-hidden p-0">

            {loading && <DataTableLoading />}

            {!loading && data.length === 0 && (

                <DataTableEmpty
                    title={emptyTitle}
                    description={emptyDescription}
                />

            )}

            {!loading && data.length > 0 && (

                <>

                    <Table className="w-full">

                        <TableHeader className="bg-muted/30">

                            {table.getHeaderGroups().map((headerGroup) => (

                                <TableRow
                                    key={headerGroup.id}
                                    className="border-b"
                                >

                                    {headerGroup.headers.map((header) => (

                                        <TableHead
                                            key={header.id}
                                            className="h-14 px-6 text-sm font-semibold text-muted-foreground"
                                        >

                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef.header,
                                                      header.getContext(),
                                                  )}

                                        </TableHead>

                                    ))}

                                </TableRow>

                            ))}

                        </TableHeader>

                        <TableBody>

                            {table.getRowModel().rows.map((row) => (

                                <TableRow
                                    key={row.id}
                                    className="h-16 transition-colors hover:bg-muted/40"
                                >

                                    {row.getVisibleCells().map((cell) => (

                                        <TableCell
                                            key={cell.id}
                                            className="px-6 py-4 align-middle"
                                        >

                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}

                                        </TableCell>

                                    ))}

                                </TableRow>

                            ))}

                        </TableBody>

                    </Table>

                    <DataTablePagination
                        table={table}
                    />

                </>

            )}

        </ContentCard>

    );
}