"use client";

import { useMemo, useState } from "react";

import { ContentCard } from "@/components/common/ContentCard";
import SearchInput from "@/components/forms/SearchInput";

import { useCustomers } from "../hooks/useCustomers";
import CustomerStatistics from "./CustomerStatistics";
import CustomersFilters from "./CustomersFilters";
import CustomersTable from "./CustomersTable";

export default function CustomersWorkspace() {
    const {
        customers,
        loading,
        error,
    } = useCustomers();

    const [search, setSearch] = useState("");

    const [filter, setFilter] = useState("ALL");

    const filteredCustomers = useMemo(() => {
        const searchValue = search.trim().toLowerCase();

        return customers.filter((customer) => {
            const matchesSearch =
                searchValue === "" ||
                customer.name.toLowerCase().includes(searchValue) ||
                customer.email.toLowerCase().includes(searchValue) ||
                customer.phone.toLowerCase().includes(searchValue);

            const matchesFilter =
                filter === "ALL";

            return (
                matchesSearch &&
                matchesFilter
            );
        });
    }, [
        customers,
        search,
        filter,
    ]);

    if (loading) {
        return (
            <ContentCard className="flex h-72 items-center justify-center">
                <p className="text-sm text-muted-foreground">
                    Loading customers...
                </p>
            </ContentCard>
        );
    }

    if (error) {
        return (
            <ContentCard className="flex h-72 items-center justify-center">
                <p className="text-sm text-destructive">
                    {error}
                </p>
            </ContentCard>
        );
    }

    return (
        <div className="space-y-6">
            <CustomerStatistics
                totalCustomers={filteredCustomers.length}
            />

            <ContentCard className="space-y-6 p-6">
                <SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search customers..."
                />

                <CustomersFilters
                    value={filter}
                    onChange={setFilter}
                />
            </ContentCard>

            <CustomersTable
                customers={filteredCustomers}
            />
        </div>
    );
}