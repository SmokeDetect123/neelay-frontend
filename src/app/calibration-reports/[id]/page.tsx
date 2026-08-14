import ViewCalibrationReportPage from "@/features/calibration-reports/pages/ViewCalibrationReportPage";

interface CalibrationReportPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function CalibrationReportPage({
    params,
}: CalibrationReportPageProps) {
    await params;

    return <ViewCalibrationReportPage />;
}