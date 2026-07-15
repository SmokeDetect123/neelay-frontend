"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

}

export default function FilterSelect({

    value,

    placeholder = "Select",

    options,

    onChange,

    disabled = false,

}: FilterSelectProps) {

    return (

        <Select
            value={value}
            onValueChange={onChange}
            disabled={disabled}
        >

            <SelectTrigger className="w-[180px]">

                <SelectValue placeholder={placeholder} />

            </SelectTrigger>

            <SelectContent>

                {options.map((option) => (

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