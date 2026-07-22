"use client";

import { useCallback, useEffect, useState } from "react";

import { serviceReportService } from "../services/serviceReport.service";

import type {
    CreateServiceReportRequest,
    ServiceReportResponse,
    UpdateServiceReportRequest,
} from "../types/serviceReport.types";

export function useServiceReports() {
    const [reports, setReports] = useState<ServiceReportResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();

    const loadReports = useCallback(
        async (
            signal?: AbortSignal,
        ): Promise<ServiceReportResponse[]> => {
            const data =
                await serviceReportService.getServiceReports();

            if (signal?.aborted) {
                return [];
            }

            return data;
        },
        [],
    );

    useEffect(() => {
        const controller = new AbortController();

        async function initialize() {
            try {
                const data = await loadReports(
                    controller.signal,
                );

                if (controller.signal.aborted) {
                    return;
                }

                setReports(data);
                setError(undefined);
            } catch (err) {
                if (controller.signal.aborted) {
                    return;
                }

                setError(
                    err instanceof Error
                        ? err.message
                        : "Failed to load service reports.",
                );
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        void initialize();

        return () => controller.abort();
    }, [loadReports]);

    const refresh = useCallback(async () => {
        setLoading(true);

        try {
            const data = await loadReports();

            setReports(data);
            setError(undefined);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to load service reports.",
            );
        } finally {
            setLoading(false);
        }
    }, [loadReports]);

    const getServiceReportById = useCallback(
        async (
            id: number,
        ): Promise<ServiceReportResponse | undefined> => {
            return serviceReportService.getServiceReportById(
                id,
            );
        },
        [],
    );

    const createServiceReport = useCallback(
        async (
            request: CreateServiceReportRequest,
        ): Promise<ServiceReportResponse> => {
            const report =
                await serviceReportService.createServiceReport(
                    request,
                );

            await refresh();

            return report;
        },
        [refresh],
    );

    const updateServiceReport = useCallback(
        async (
            id: number,
            request: UpdateServiceReportRequest,
        ): Promise<ServiceReportResponse> => {
            const report =
                await serviceReportService.updateServiceReport(
                    id,
                    request,
                );

            await refresh();

            return report;
        },
        [refresh],
    );

    const deleteServiceReport = useCallback(
        async (id: number): Promise<void> => {
            await serviceReportService.deleteServiceReport(
                id,
            );

            await refresh();
        },
        [refresh],
    );

    return {
        reports,
        loading,
        error,

        refresh,

        getServiceReportById,

        createServiceReport,

        updateServiceReport,

        deleteServiceReport,
    };
}