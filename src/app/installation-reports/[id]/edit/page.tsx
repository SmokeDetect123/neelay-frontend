import {
  EditInstallationReportPage,
} from "@/features/installation-reports";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { id } =
    await params;

  return (
    <EditInstallationReportPage
      id={Number(id)}
    />
  );
}