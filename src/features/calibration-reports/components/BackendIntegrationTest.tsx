"use client";

import { useBackendCalibrationReports } from "../hooks/useBackendCalibrationReports";

export default function BackendIntegrationTest() {
    const {
        data,
        isLoading,
        isError,
        error,
    } = useBackendCalibrationReports();

    if (isLoading) {
        return (
            <div className="p-6">
                Loading backend calibration reports...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="p-6 text-red-600">
                Backend request failed:
                {" "}
                {error instanceof Error
                    ? error.message
                    : "Unknown error"}
            </div>
        );
    }

    return (
        <div className="space-y-4 p-6">
            <h2 className="text-xl font-semibold">
                Backend Integration Test
            </h2>

            <div>
                <strong>Total reports:</strong>{" "}
                {data?.totalElements ?? 0}
            </div>

            <div>
                <strong>Current page:</strong>{" "}
                {data?.number ?? 0}
            </div>

            <div>
                <strong>Page size:</strong>{" "}
                {data?.size ?? 0}
            </div>

            <div>
                <strong>Authenticated request:</strong>{" "}
                Yes
            </div>

            {data?.content?.length ? (
                <div className="space-y-2">
                    {data.content.map((report) => (
                        <div
                            key={report.id}
                            className="rounded border p-4"
                        >
                            <div>
                                <strong>
                                    Report No:
                                </strong>{" "}
                                {report.reportNo}
                            </div>

                            <div>
                                <strong>
                                    Customer:
                                </strong>{" "}
                                {report.customerName}
                            </div>

                            <div>
                                <strong>
                                    Serial No:
                                </strong>{" "}
                                {report.serialNo}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    No calibration reports exist
                    in the backend.
                </div>
            )}
        </div>
    );
}