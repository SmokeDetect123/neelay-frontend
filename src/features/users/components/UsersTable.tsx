"use client";

import DataTable from "@/components/table/DataTable";

import { usersColumns } from "../columns/users.columns";

import { UserResponse } from "../types/user.types";

interface UsersTableProps {

    users: UserResponse[];

}

export default function UsersTable({

    users,

}: UsersTableProps) {

    return (

        <DataTable
            columns={usersColumns}
            data={users}
            emptyTitle="No Users Found"
            emptyDescription="There are no users matching your search."
        />

    );

}