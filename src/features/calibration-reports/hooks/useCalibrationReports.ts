"use client";

import { useQuery } from "@tanstack/react-query";

import { calibrationReportApi } from "../api/calibrationReport.api";

export function useCalibrationReports(
    page = 0,
    size = 10,
) {
    return useQuery({
        queryKey: [
            "calibration-reports",
            page,
            size,
        ],

        queryFn: () =>
            calibrationReportApi.getReports({
                page,
                size,
            }),

        staleTime: 30_000,
    });
}