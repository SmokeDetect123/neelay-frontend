"use client";

import {
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import { calibrationReportApi } from "../api";

import type {
    CalibrationReport,
    CreateCalibrationReportRequest,
} from "../types";

export function useCreateCalibrationReport() {
    const queryClient = useQueryClient();

    return useMutation<
        CalibrationReport,
        Error,
        CreateCalibrationReportRequest
    >({
        mutationFn: (request) =>
            calibrationReportApi.createReport(request),

        onSuccess: (createdReport) => {
            /**
             * Cache the newly created report.
             */
            queryClient.setQueryData(
                [
                    "calibration-report",
                    createdReport.id,
                ],
                createdReport,
            );

            /**
             * Refresh the calibration report list.
             */
            queryClient.invalidateQueries({
                queryKey: [
                    "calibration-reports",
                ],
            });

            /**
             * Refresh statistics.
             */
            queryClient.invalidateQueries({
                queryKey: [
                    "calibration-report-statistics",
                ],
            });

            toast.success(
                `Calibration report ${createdReport.reportNo} created successfully.`,
            );
        },

        onError: (error) => {
            toast.error(
                error.message ||
                    "Failed to create calibration report.",
            );
        },
    });
}