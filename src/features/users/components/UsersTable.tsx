"use client";

import DataTable from "@/components/table/DataTable";

import { userColumns } from "../columns/users.columns";
import type { UserResponse } from "../types/user.types";

interface UsersTableProps {
    users: UserResponse[];
}

export default function UsersTable({
    users,
}: UsersTableProps) {
    return (
        <DataTable
            columns={userColumns}
            data={users}
            emptyTitle="No Users Found"
            emptyDescription="There are no users matching your search."
        />
    );
}