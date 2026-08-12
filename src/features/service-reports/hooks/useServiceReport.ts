"use client";

import {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    serviceReportService,
} from "../services/serviceReport.service";

import type {
    ServiceReportResponse,
} from "../types/serviceReport.types";

export interface UseServiceReportResult {
    report: ServiceReportResponse | undefined;
    isLoading: boolean;
    error: string | undefined;
    refresh: () => Promise<void>;
}

export function useServiceReport(
    id: number | null,
): UseServiceReportResult {
    const [report, setReport] =
        useState<ServiceReportResponse | undefined>(
            undefined,
        );

    const [isLoading, setIsLoading] =
        useState(true);

    const [error, setError] =
        useState<string | undefined>(undefined);

    const loadReport = useCallback(async () => {
        if (
            id === null ||
            !Number.isSafeInteger(id) ||
            id <= 0
        ) {
            setReport(undefined);
            setError("Invalid Service Report ID.");
            setIsLoading(false);
            return;
        }

        try {
            setIsLoading(true);
            setError(undefined);

            const data =
                await serviceReportService.getServiceReportById(
                    id,
                );

            if (!data) {
                setReport(undefined);
                setError(
                    "Service Report not found.",
                );
                return;
            }

            setReport(data);
        } catch (err) {
            setReport(undefined);

            setError(
                err instanceof Error
                    ? err.message
                    : "Failed to load Service Report.",
            );
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        void loadReport();
    }, [loadReport]);

    const refresh = useCallback(async () => {
        await loadReport();
    }, [loadReport]);

    return {
        report,
        isLoading,
        error,
        refresh,
    };
}