"use client";

import SearchInput from "@/components/crud/SearchInput";

interface UsersSearchProps {
    value: string;
    onChange: (value: string) => void;
}

export default function UsersSearch({
    value,
    onChange,
}: UsersSearchProps) {
    return (
        <SearchInput
            value={value}
            onChange={onChange}
            placeholder="Search by username or email..."
        />
    );
}