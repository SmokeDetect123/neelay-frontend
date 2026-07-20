"use client";

import SearchInput from "@/components/forms/SearchInput";

interface ServiceReportsSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function ServiceReportsSearch({
    value,
    onChange,
}: ServiceReportsSearchProps) {
    return (
        <SearchInput
            placeholder="Search by customer or report number..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}