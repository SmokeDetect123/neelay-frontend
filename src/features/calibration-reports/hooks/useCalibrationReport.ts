"use client";

import { useQuery } from "@tanstack/react-query";

import { calibrationReportApi } from "../api/calibrationReport.api";

export function useCalibrationReport(
    id: number | null,
) {
    return useQuery({
        queryKey: [
            "calibration-report",
            id,
        ],

        queryFn: () => {
            if (id === null) {
                throw new Error(
                    "Calibration report ID is required.",
                );
            }

            return calibrationReportApi.getReportById(id);
        },

        enabled: id !== null,

        staleTime: 30_000,
    });
}