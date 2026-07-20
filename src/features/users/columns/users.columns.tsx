"use client";

import { ColumnDef } from "@tanstack/react-table";

import {
    ArrowUpDown,
    UserCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import RoleBadge from "@/components/common/RoleBadge";
import StatusBadge from "@/components/common/StatusBadge";

import UserActions from "../components/UserActions";

import { UserResponse } from "../types/user.types";

export const usersColumns: ColumnDef<UserResponse>[] = [

    {
        accessorKey: "fullName",

        header: ({ column }) => (

            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
                className="h-auto p-0 font-semibold hover:bg-transparent"
            >
                User

                <ArrowUpDown className="ml-2 h-4 w-4" />

            </Button>

        ),

        cell: ({ row }) => {

            const user = row.original;

            return (

                <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">

                        <UserCircle2 className="h-6 w-6 text-primary" />

                    </div>

                    <div>

                        <p className="font-medium">

                            {user.fullName}

                        </p>

                        <p className="text-sm text-muted-foreground">

                            @{user.username}

                        </p>

                    </div>

                </div>

            );
        },
    },

    {
        accessorKey: "email",

        header: ({ column }) => (

            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
                className="h-auto p-0 font-semibold hover:bg-transparent"
            >
                Email

                <ArrowUpDown className="ml-2 h-4 w-4" />

            </Button>

        ),

        cell: ({ row }) => (

            <span className="text-muted-foreground">

                {row.original.email}

            </span>

        ),
    },

    {
        accessorKey: "role",

        header: ({ column }) => (

            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
                className="h-auto p-0 font-semibold hover:bg-transparent"
            >
                Role

                <ArrowUpDown className="ml-2 h-4 w-4" />

            </Button>

        ),

        cell: ({ row }) => (

            <RoleBadge role={row.original.role} />

        ),
    },

    {
        accessorKey: "active",

        header: ({ column }) => (

            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
                className="h-auto p-0 font-semibold hover:bg-transparent"
            >
                Status

                <ArrowUpDown className="ml-2 h-4 w-4" />

            </Button>

        ),

        cell: ({ row }) => (

            <StatusBadge active={row.original.active} />

        ),
    },

    {
        accessorKey: "createdAt",

        header: ({ column }) => (

            <Button
                variant="ghost"
                onClick={() =>
                    column.toggleSorting(
                        column.getIsSorted() === "asc"
                    )
                }
                className="h-auto p-0 font-semibold hover:bg-transparent"
            >
                Created

                <ArrowUpDown className="ml-2 h-4 w-4" />

            </Button>

        ),

        cell: ({ row }) => {

            return (

                <span className="text-muted-foreground">

                    {new Date(
                        row.original.createdAt
                    ).toLocaleDateString("en-IN")}

                </span>

            );
        },
    },

    {
        id: "actions",

        enableSorting: false,

        size: 120,

        header: () => (

            <div className="text-right pr-4">

                Actions

            </div>

        ),

        cell: ({ row }) => (

            <div className="flex justify-end pr-2">

                <UserActions
                    active={row.original.active}
                />

            </div>

        ),
    },

];