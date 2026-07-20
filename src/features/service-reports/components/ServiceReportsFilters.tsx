"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { ReportStatus } from "../types/serviceReport.types";

interface ServiceReportsFiltersProps {
    search: string;
    status: ReportStatus | "ALL";

    onSearchChange: (value: string) => void;
    onStatusChange: (value: ReportStatus | "ALL") => void;
}

export default function ServiceReportsFilters({
    search,
    status,
    onSearchChange,
    onStatusChange,
}: ServiceReportsFiltersProps) {
    return (
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                    className="pl-10"
                    placeholder="Search reports..."
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                />
            </div>

            <Select
                value={status}
                onValueChange={(value) =>
                    onStatusChange(value as ReportStatus | "ALL")
                }
            >
                <SelectTrigger className="w-full md:w-56">
                    <SelectValue />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="ALL">
                        All Reports
                    </SelectItem>

                    <SelectItem value="OPEN">
                        Open
                    </SelectItem>

                    <SelectItem value="IN_PROGRESS">
                        In Progress
                    </SelectItem>

                    <SelectItem value="COMPLETED">
                        Completed
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}