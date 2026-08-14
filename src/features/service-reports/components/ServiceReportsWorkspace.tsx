"use client";

import { useMemo, useState } from "react";

import { ContentCard } from "@/components/common/ContentCard";
import { FILTER_ALL } from "@/components/forms/FilterSelect";

import ServiceReportDateRange from "./ServiceReportDateRange";
import ServiceReportsFilters from "./ServiceReportsFilters";
import ServiceReportsSearch from "./ServiceReportsSearch";
import ServiceReportsToolbar from "./ServiceReportsToolbar";
import ServiceReportsTable from "./ServiceReportsTable";

import { useServiceReports } from "../hooks/useServiceReports";
import type { ServiceReportResponse } from "../types/serviceReport.types";

export default function ServiceReportsWorkspace() {
    const [search, setSearch] = useState("");

    const [callType, setCallType] =
        useState(FILTER_ALL);

    const [locationType, setLocationType] =
        useState(FILTER_ALL);

    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    const {
        reports,
        loading,
        error,
    } = useServiceReports();

    const filteredReports = useMemo(() => {
        const normalizedSearch =
            search.trim().toLowerCase();

        return reports.filter(
            (report: ServiceReportResponse) => {
                /*
                 * Search fields:
                 *
                 * - Report number
                 * - Customer name
                 * - Make
                 * - Model
                 * - Serial number
                 *
                 * The optional fields are handled safely.
                 */
                const matchesSearch =
                    normalizedSearch.length === 0 ||
                    report.reportNo
                        .toLowerCase()
                        .includes(normalizedSearch) ||
                    report.customerName
                        .toLowerCase()
                        .includes(normalizedSearch) ||
                    (report.make ?? "")
                        .toLowerCase()
                        .includes(normalizedSearch) ||
                    (report.model ?? "")
                        .toLowerCase()
                        .includes(normalizedSearch) ||
                    (report.serialNo ?? "")
                        .toLowerCase()
                        .includes(normalizedSearch);

                /*
                 * Call type filter.
                 *
                 * FILTER_ALL means no call-type filtering.
                 */
                const matchesCallType =
                    callType === FILTER_ALL ||
                    report.callType === callType;

                /*
                 * Location type filter.
                 *
                 * FILTER_ALL means no location filtering.
                 */
                const matchesLocationType =
                    locationType === FILTER_ALL ||
                    report.locationType === locationType;

                /*
                 * Date range filter.
                 *
                 * Backend reportDate is transported as
                 * an ISO date string: YYYY-MM-DD.
                 */
                const matchesFromDate =
                    fromDate === "" ||
                    report.reportDate >= fromDate;

                const matchesToDate =
                    toDate === "" ||
                    report.reportDate <= toDate;

                return (
                    matchesSearch &&
                    matchesCallType &&
                    matchesLocationType &&
                    matchesFromDate &&
                    matchesToDate
                );
            },
        );
    }, [
        reports,
        search,
        callType,
        locationType,
        fromDate,
        toDate,
    ]);

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
                        onLocationTypeChange={
                            setLocationType
                        }
                    />

                    <ServiceReportDateRange
                        fromDate={fromDate}
                        toDate={toDate}
                        onFromDateChange={
                            setFromDate
                        }
                        onToDateChange={
                            setToDate
                        }
                    />
                </div>
            </ContentCard>

            <ContentCard className="p-6">
                {error ? (
                    <div className="rounded-md border border-destructive/20 bg-destructive/5 p-4 text-sm text-destructive">
                        {error}
                    </div>
                ) : (
                    <ServiceReportsTable
                        reports={filteredReports}
                        loading={loading}
                    />
                )}
            </ContentCard>
        </div>
    );
}