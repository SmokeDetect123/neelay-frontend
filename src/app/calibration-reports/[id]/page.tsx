import ViewCalibrationReportPage from "@/features/calibration-reports/pages/ViewCalibrationReportPage";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: Props) {
  const { id } = await params;

  return (
    <ViewCalibrationReportPage
      id={Number(id)}
    />
  );
}