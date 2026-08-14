"use client";

import CalibrationReportForm
    from "../components/form/CalibrationReportForm";

import {
    PageHeader,
} from "@/components/common/PageHeader";

export default function CreateCalibrationReportPage() {
    return (
        <div className="space-y-6">

            <PageHeader
                title="Create Calibration Report"
                description="Create a new calibration report."
            />

            <CalibrationReportForm
                mode="create"
            />

        </div>
    );
}