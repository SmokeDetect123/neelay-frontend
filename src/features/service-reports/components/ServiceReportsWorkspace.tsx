"use client";

import { useState } from "react";

import { ContentCard } from "@/components/common/ContentCard";  
import { FILTER_ALL } from "@/components/forms/FilterSelect";

import ServiceReportDateRange from "./ServiceReportDateRange";
import ServiceReportsFilters from "./ServiceReportsFilters";
import ServiceReportsSearch from "./ServiceReportsSearch";
import ServiceReportsToolbar from "./ServiceReportsToolbar";
import ServiceReportsTable from "./ServiceReportsTable";

export default function ServiceReportsWorkspace() {

    const [search, setSearch] = useState("");

    const [callType, setCallType] = useState(FILTER_ALL);

    const [locationType, setLocationType] = useState(FILTER_ALL);

    const [fromDate, setFromDate] = useState("");

    const [toDate, setToDate] = useState("");

    return (
        <div className="space-y-6">

            <ServiceReportsToolbar />

            <ContentCard className="space-y-6 p-6">

                <ServiceReportsSearch
                    value={search}
                    onChange={setSearch}
                />

                <div className="flex flex-wrap gap-4">

                    <ServiceReportsFilters
                        callType={callType}
                        locationType={locationType}
                        onCallTypeChange={setCallType}
                        onLocationTypeChange={setLocationType}
                    />

                    <ServiceReportDateRange
                        fromDate={fromDate}
                        toDate={toDate}
                        onFromDateChange={setFromDate}
                        onToDateChange={setToDate}
                    />

                </div>

            </ContentCard>
            <ServiceReportsTable />

        </div>
    );
}