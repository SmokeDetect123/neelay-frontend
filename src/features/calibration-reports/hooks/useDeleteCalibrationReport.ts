"use client";

/**
 * Delete is intentionally not implemented.
 *
 * The Calibration Reports backend currently exposes:
 *
 * POST /api/calibration-reports
 * GET  /api/calibration-reports
 * GET  /api/calibration-reports/{id}
 * PUT  /api/calibration-reports/{id}
 * GET  /api/calibration-reports/search
 *
 * There is no DELETE endpoint.
 */
export function useDeleteCalibrationReport() {
    throw new Error(
        "Deleting calibration reports is not supported by the backend.",
    );
}