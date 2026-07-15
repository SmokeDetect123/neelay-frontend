"use client";

import DataTable from "@/components/crud/DataTable";

import { userColumns } from "./users.columns";

import { User } from "../types/user.types";

const users: User[] = [];

export default function UsersTable() {
    return (
        <DataTable
            columns={userColumns}
            data={users}
            emptyTitle="No Users Found"
            emptyDescription="Create your first user to get started."
        />
    );
}