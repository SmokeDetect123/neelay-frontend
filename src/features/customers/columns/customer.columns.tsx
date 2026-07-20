"use client";

import { ColumnDef } from "@tanstack/react-table";

import CustomerActions from "../components/CustomerActions";
import { CustomerResponse } from "../types/customer.types";

export const customerColumns: ColumnDef<CustomerResponse>[] = [
    {
        accessorKey: "name",
        header: "Customer",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "phone",
        header: "Phone",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        id: "actions",
        header: "",
        enableSorting: false,
        cell: ({ row }) => (
            <CustomerActions
                customerId={row.original.id}
            />
        ),
    },
];