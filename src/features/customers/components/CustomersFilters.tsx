"use client";

import FilterSelect from "@/components/forms/FilterSelect";

interface CustomersFiltersProps {
    value: string;
    onChange: (value: string) => void;
}

export default function CustomersFilters({
    value,
    onChange,
}: CustomersFiltersProps) {
    return (
        <FilterSelect
            value={value}
            onChange={onChange}
            placeholder="Customer Type"
            options={[
                {
                    label: "All Customers",
                    value: "ALL",
                },
            ]}
        />
    );
}