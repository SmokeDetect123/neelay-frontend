"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {ContentCard} from "@/components/common/ContentCard";
import EmptyState from "@/components/common/EmptyState";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    emptyTitle?: string;
    emptyDescription?: string;
}

export default function DataTable<TData, TValue>({
    columns,
    data,
    emptyTitle = "No Data Found",
    emptyDescription = "No records are available.",
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    /*return (
        <ContentCard>

            <Table>

                <TableHeader>

                    {table.getHeaderGroups().map((headerGroup) => (

                        <TableRow key={headerGroup.id}>

                            {headerGroup.headers.map((header) => (

                                <TableHead key={header.id}>

                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}

                                </TableHead>

                            ))}

                        </TableRow>

                    ))}

                </TableHeader>

                <TableBody>

                    {table.getRowModel().rows.length ? (

                        table.getRowModel().rows.map((row) => (

                            <TableRow key={row.id}>

                                {row.getVisibleCells().map((cell) => (

                                    <TableCell key={cell.id}>

                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}

                                    </TableCell>

                                ))}

                            </TableRow>

                        ))

                    ) : (

                        <TableRow>

                            <TableCell
                                colSpan={columns.length}
                                className="p-8"
                            >

                                <EmptyState
                                    title={emptyTitle}
                                    description={emptyDescription}
                                />

                            </TableCell>

                        </TableRow>

                    )}

                </TableBody>

            </Table>

        </ContentCard>
    );*/
    return (
    <ContentCard className="p-8">
        DataTable Test
    </ContentCard>
);
}