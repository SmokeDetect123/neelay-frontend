import { useQuery } from "@tanstack/react-query";

import { backendTestApi } from "../api/backendTest.api";

export function useBackendCalibrationReports() {
    return useQuery({
        queryKey: ["backend-calibration-reports-test"],
        queryFn: () =>
            backendTestApi.getCalibrationReports(),
        retry: false,
    });
}