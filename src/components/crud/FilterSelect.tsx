"use client";

import { cn } from "@/lib/utils";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const FILTER_ALL = "ALL";

export interface FilterOption {
    label: string;
    value: string;
}

interface FilterSelectProps {
    value: string;

    placeholder?: string;

    options: FilterOption[];

    onChange: (value: string) => void;

    disabled?: boolean;

    className?: string;

    widthClassName?: string;
}

export default function FilterSelect({
    value,
    placeholder = "Select",
    options,
    onChange,
    disabled = false,
    className,
    widthClassName,
}: FilterSelectProps) {
    return (
        <Select
            value={value}
            onValueChange={onChange}
            disabled={disabled}
        >
            <SelectTrigger
                className={cn(
                    "h-10 rounded-xl border-border bg-background",
                    widthClassName ?? "w-[180px]",
                    className
                )}
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent>
                {options
                    .filter(
                        (option) =>
                            option.value !== undefined &&
                            option.value !== null &&
                            option.value.trim() !== ""
                    )
                    .map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    );
}