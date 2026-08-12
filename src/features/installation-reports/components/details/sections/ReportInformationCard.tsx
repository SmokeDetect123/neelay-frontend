"use client";

import {
  Calendar,
  ClipboardList,
  User,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { InstallationReport } from "../../../types";

interface ReportInformationCardProps {
  report: InstallationReport;
}

function DetailItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value?: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>

      <p className="font-medium">
        {value || "-"}
      </p>
    </div>
  );
}

export default function ReportInformationCard({
  report,
}: ReportInformationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5" />

          Report Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <DetailItem
          icon={ClipboardList}
          label="Report Number"
          value={report.reportNo}
        />

        <DetailItem
          icon={Calendar}
          label="Report Date"
          value={report.reportDate}
        />

        <DetailItem
          icon={User}
          label="Created By"
          value={report.createdBy}
        />

        <DetailItem
          icon={Calendar}
          label="Created At"
          value={report.createdAt}
        />

        <DetailItem
          icon={Calendar}
          label="Updated At"
          value={report.updatedAt}
        />
      </CardContent>
    </Card>
  );
}