"use client";

import DataTable from "@/components/table/DataTable";

import { customerColumns } from "../columns/customer.columns";
import { CustomerResponse } from "../types/customer.types";

interface CustomersTableProps {
    customers: CustomerResponse[];
}

export default function CustomersTable({
    customers,
}: CustomersTableProps) {
    return (
        <DataTable
            columns={customerColumns}
            data={customers}
            loading={false}
            emptyTitle="No Customers Found"
            emptyDescription="There are currently no customers in the system."
        />
    );
}