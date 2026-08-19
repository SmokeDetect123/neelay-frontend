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
    CreateServiceReportRequest,
    PageResponse,
    ServiceReportResponse,
    UpdateServiceReportRequest,
} from "../types/serviceReport.types";

export function useServiceReports() {
    const [reports, setReports] =
        useState<ServiceReportResponse[]>([]);

    const [page, setPage] =
        useState(0);

    const [pageSize, setPageSize] =
        useState(10);

    const [totalElements, setTotalElements] =
        useState(0);

    const [totalPages, setTotalPages] =
        useState(0);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState<string | undefined>();

    const loadReports = useCallback(
        async (
            requestedPage = page,
            requestedSize = pageSize,
        ) => {
            setLoading(true);

            try {
                const response:
                    PageResponse<ServiceReportResponse> =
                    await serviceReportService
                        .getServiceReports(
                            requestedPage,
                            requestedSize,
                        );

                setReports(
                    response.content,
                );

                setPage(
                    response.number,
                );

                setPageSize(
                    response.size,
                );

                setTotalElements(
                    response.totalElements,
                );

                setTotalPages(
                    response.totalPages,
                );

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
        },
        [
            page,
            pageSize,
        ],
    );

    useEffect(() => {
        void loadReports();
    }, [loadReports]);

    const refresh = useCallback(
        async () => {
            await loadReports(
                page,
                pageSize,
            );
        },
        [
            loadReports,
            page,
            pageSize,
        ],
    );

    const goToPage = useCallback(
        async (
            nextPage: number,
        ) => {
            if (
                nextPage < 0 ||
                (
                    totalPages > 0 &&
                    nextPage >= totalPages
                )
            ) {
                return;
            }

            await loadReports(
                nextPage,
                pageSize,
            );
        },
        [
            loadReports,
            pageSize,
            totalPages,
        ],
    );

    const getServiceReportById =
        useCallback(
            async (
                id: number,
            ): Promise<ServiceReportResponse> => {
                return serviceReportService
                    .getServiceReportById(id);
            },
            [],
        );

    const createServiceReport =
        useCallback(
            async (
                request: CreateServiceReportRequest,
            ): Promise<ServiceReportResponse> => {
                const report =
                    await serviceReportService
                        .createServiceReport(
                            request,
                        );

                await loadReports(
                    page,
                    pageSize,
                );

                return report;
            },
            [
                loadReports,
                page,
                pageSize,
            ],
        );

    const updateServiceReport =
        useCallback(
            async (
                id: number,
                request: UpdateServiceReportRequest,
            ): Promise<ServiceReportResponse> => {
                const report =
                    await serviceReportService
                        .updateServiceReport(
                            id,
                            request,
                        );

                await loadReports(
                    page,
                    pageSize,
                );

                return report;
            },
            [
                loadReports,
                page,
                pageSize,
            ],
        );

    return {
        reports,

        page,
        pageSize,
        totalElements,
        totalPages,

        loading,
        error,

        refresh,
        goToPage,

        getServiceReportById,
        createServiceReport,
        updateServiceReport,
    };
}