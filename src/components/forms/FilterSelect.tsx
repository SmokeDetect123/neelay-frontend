"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { cn } from "@/lib/utils";

export const FILTER_ALL = "__ALL__";

export interface FilterOption {
    label: string;
    value: string;
}

interface FilterSelectProps {
    value: string;
    options: FilterOption[];
    placeholder?: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    className?: string;
    widthClassName?: string;
}

export default function FilterSelect({
    value,
    options,
    placeholder = "Select",
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
                    "h-11 rounded-xl border border-border bg-background shadow-sm",
                    widthClassName ?? "w-[240px]",
                    className
                )}
            >
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>

            <SelectContent
                position="popper"
                sideOffset={6}
                align="start"
                className="
                    z-[9999]
                    min-w-[240px]
                    rounded-xl
                    border
                    border-border
                    bg-background
                    p-1
                    shadow-2xl
                    backdrop-blur-none
                    opacity-100
                "
            >
                {options.map((option) => (
                    <SelectItem
                        key={option.value}
                        value={option.value}
                        className="
                            rounded-lg
                            px-3
                            py-2
                            text-sm
                            cursor-pointer
                            focus:bg-accent
                            focus:text-accent-foreground
                        "
                    >
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}