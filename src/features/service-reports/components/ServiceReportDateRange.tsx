"use client";

import { Input } from "@/components/ui/input";

interface Props {
    fromDate: string;
    toDate: string;

    onFromDateChange: (value: string) => void;
    onToDateChange: (value: string) => void;
}

export default function ServiceReportDateRange({
    fromDate,
    toDate,
    onFromDateChange,
    onToDateChange,
}: Props) {
    return (
        <div className="flex flex-wrap gap-4">

            <Input
                type="date"
                value={fromDate}
                onChange={(e) =>
                    onFromDateChange(e.target.value)
                }
                className="w-48"
            />

            <Input
                type="date"
                value={toDate}
                onChange={(e) =>
                    onToDateChange(e.target.value)
                }
                className="w-48"
            />

        </div>
    );
}