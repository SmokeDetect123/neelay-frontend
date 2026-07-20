"use client";

import * as React from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

type SearchInputProps =
    React.InputHTMLAttributes<HTMLInputElement>;

export default function SearchInput({
    className,
    ...props
}: SearchInputProps) {
    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
                className={[
                    "pl-10",
                    className,
                ]
                    .filter(Boolean)
                    .join(" ")}
                {...props}
            />
        </div>
    );
}