"use client";

import { ColumnDef } from "@tanstack/react-table";

import StatusBadge from "@/components/crud/StatusBadge";

import { UserResponse } from "../types/user.types";

export const userColumns: ColumnDef<UserResponse>[] = [
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "fullName",
        header: "Full Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "role",
        header: "Role",
    },
    {
        accessorKey: "active",
        header: "Status",
        cell: ({ row }) => (
            <StatusBadge
                status={
                    row.original.active
                        ? "ACTIVE"
                        : "INACTIVE"
                }
            />
        ),
    },
];