"use client";

import { useCallback, useEffect, useState } from "react";

import serviceReportService from "../services/serviceReport.service";

import type {
    CreateServiceReportRequest,
    ReportStatus,
    ServiceReportResponse,
    UpdateServiceReportRequest,
} from "../types/serviceReport.types";

export function useServiceReports() {
    const [reports, setReports] = useState<ServiceReportResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Initial load only
    useEffect(() => {
        let cancelled = false;

        async function initialize() {
            try {
                const data = await serviceReportService.getReports();

                if (!cancelled) {
                    setReports(data);
                    setError(null);
                }
            } catch {
                if (!cancelled) {
                    setError("Failed to load service reports.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        void initialize();

        return () => {
            cancelled = true;
        };
    }, []);

    // Manual refresh
    const refresh = useCallback(async () => {
        try {
            setLoading(true);

            const data = await serviceReportService.getReports();

            setReports(data);
            setError(null);
        } catch {
            setError("Failed to load service reports.");
        } finally {
            setLoading(false);
        }
    }, []);

    const getReport = useCallback(async (id: number) => {
        return serviceReportService.getReportById(id);
    }, []);

    const getReportsByStatus = useCallback(
        async (status: ReportStatus) => {
            return serviceReportService.getReportsByStatus(status);
        },
        [],
    );

    const searchReports = useCallback(async (query: string) => {
        return serviceReportService.searchReports(query);
    }, []);

    const getRecentReports = useCallback(async (limit?: number) => {
        return serviceReportService.getRecentReports(limit);
    }, []);

    const createReport = useCallback(
        async (request: CreateServiceReportRequest) => {
            const report =
                await serviceReportService.createReport(request);

            await refresh();

            return report;
        },
        [refresh],
    );

    const updateReport = useCallback(
        async (
            id: number,
            request: UpdateServiceReportRequest,
        ) => {
            const report =
                await serviceReportService.updateReport(
                    id,
                    request,
                );

            await refresh();

            return report;
        },
        [refresh],
    );

    const deleteReport = useCallback(
        async (id: number) => {
            const deleted =
                await serviceReportService.deleteReport(id);

            if (deleted) {
                await refresh();
            }

            return deleted;
        },
        [refresh],
    );

    return {
        reports,
        loading,
        error,

        refresh,

        getReport,
        getReportsByStatus,
        searchReports,
        getRecentReports,

        createReport,
        updateReport,
        deleteReport,
    };
}