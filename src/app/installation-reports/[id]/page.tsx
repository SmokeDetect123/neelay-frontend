import {
  InstallationReportDetailsPage,
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
    <InstallationReportDetailsPage
      id={Number(id)}
    />
  );
}