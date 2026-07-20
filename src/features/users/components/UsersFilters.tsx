"use client";

import FilterSelect from "@/components/crud/FilterSelect";

interface UsersFiltersProps {
    role: string;
    status: string;
    onRoleChange: (value: string) => void;
    onStatusChange: (value: string) => void;
}

const ROLE_OPTIONS = [
    {
        label: "All Roles",
        value: "ALL",
    },
    {
        label: "Administrator",
        value: "ADMIN",
    },
    {
        label: "Employee",
        value: "EMPLOYEE",
    },
];

const STATUS_OPTIONS = [
    {
        label: "All Status",
        value: "ALL",
    },
    {
        label: "Active",
        value: "ACTIVE",
    },
    {
        label: "Inactive",
        value: "INACTIVE",
    },
];

export default function UsersFilters({
    role,
    status,
    onRoleChange,
    onStatusChange,
}: UsersFiltersProps) {
    return (
        <div className="flex flex-wrap items-center gap-4">

            <FilterSelect
                value={role}
                options={ROLE_OPTIONS}
                onChange={onRoleChange}
                placeholder="Role"
            />

            <FilterSelect
                value={status}
                options={STATUS_OPTIONS}
                onChange={onStatusChange}
                placeholder="Status"
            />

        </div>
    );
}