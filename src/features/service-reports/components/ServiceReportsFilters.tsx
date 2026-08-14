"use client";

import FilterSelect, {
    FILTER_ALL,
} from "@/components/forms/FilterSelect";

import {
    CALL_TYPES,
    LOCATION_TYPES,
} from "../types/service-report.enums";

interface ServiceReportsFiltersProps {
    callType: string;
    locationType: string;

    onCallTypeChange: (
        value: string,
    ) => void;

    onLocationTypeChange: (
        value: string,
    ) => void;
}

function formatLabel(value: string): string {
    return value
        .toLowerCase()
        .replaceAll("_", " ")
        .replace(/\b\w/g, (character) =>
            character.toUpperCase(),
        );
}

export default function ServiceReportsFilters({
    callType,
    locationType,
    onCallTypeChange,
    onLocationTypeChange,
}: ServiceReportsFiltersProps) {
    return (
        <div className="flex flex-wrap gap-4">
            <FilterSelect
                placeholder="All Call Types"
                value={callType}
                onChange={onCallTypeChange}
                widthClassName="w-full md:w-56"
                options={[
                    {
                        label: "All Call Types",
                        value: FILTER_ALL,
                    },

                    ...Object.values(
                        CALL_TYPES,
                    ).map((type) => ({
                        label: formatLabel(type),
                        value: type,
                    })),
                ]}
            />

            <FilterSelect
                placeholder="All Locations"
                value={locationType}
                onChange={
                    onLocationTypeChange
                }
                widthClassName="w-full md:w-56"
                options={[
                    {
                        label: "All Locations",
                        value: FILTER_ALL,
                    },

                    ...Object.values(
                        LOCATION_TYPES,
                    ).map((type) => ({
                        label: formatLabel(type),
                        value: type,
                    })),
                ]}
            />
        </div>
    );
}