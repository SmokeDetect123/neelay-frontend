"use client";

import { useMemo, useState } from "react";

import { ContentCard } from "@/components/common/ContentCard";

import { useUsers } from "../hooks/useUsers";

import UsersFilters from "./UsersFilters";
import UsersSearch from "./UsersSearch";
import UsersTable from "./UsersTable";
import UsersToolbar from "./UsersToolbar";

export default function UsersWorkspace() {

    const {
        users,
        isLoading,
        isError,
    } = useUsers();

    const [search, setSearch] = useState("");

    const [role, setRole] = useState("ALL");

    const [status, setStatus] = useState("ALL");

    const filteredUsers = useMemo(() => {

        return users.filter((user) => {

            const searchValue = search
                .trim()
                .toLowerCase();

            const matchesSearch =
                searchValue === "" ||
                user.username
                    .toLowerCase()
                    .includes(searchValue) ||
                user.fullName
                    .toLowerCase()
                    .includes(searchValue) ||
                user.email
                    .toLowerCase()
                    .includes(searchValue);

            const matchesRole =
                role === "ALL" ||
                user.role === role;

            const matchesStatus =
                status === "ALL" ||
                (status === "ACTIVE" && user.active) ||
                (status === "INACTIVE" && !user.active);

            return (
                matchesSearch &&
                matchesRole &&
                matchesStatus
            );

        });

    }, [
        users,
        search,
        role,
        status,
    ]);

    return (

        <div className="space-y-6">

            <UsersToolbar />

            <ContentCard className="space-y-6 p-6">

                <UsersSearch
                    value={search}
                    onChange={setSearch}
                />

                <UsersFilters
                    role={role}
                    status={status}
                    onRoleChange={setRole}
                    onStatusChange={setStatus}
                />

            </ContentCard>

            {isLoading && (

                <ContentCard className="flex h-72 items-center justify-center">

                    <p className="text-sm text-muted-foreground">
                        Loading users...
                    </p>

                </ContentCard>

            )}

            {isError && (

                <ContentCard className="flex h-72 items-center justify-center">

                    <p className="text-sm text-destructive">
                        Unable to load users.
                    </p>

                </ContentCard>

            )}

            {!isLoading && !isError && (

                <UsersTable
                    users={filteredUsers}
                />

            )}

        </div>

    );

}