"use client";

import {
  Building2,
  FileText,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  InstallationReport,
} from "../../../types";

interface CustomerInformationCardProps {
  report: InstallationReport;
}

interface DetailFieldProps {
  icon: React.ElementType;
  label: string;
  value?: string;
}

function DetailField({
  icon: Icon,
  label,
  value,
}: DetailFieldProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Icon className="h-4 w-4" />
        <span>{label}</span>
      </div>

      <div className="rounded-md border bg-muted/30 p-3">
        <p className="whitespace-pre-wrap break-words">
          {value?.trim() || "-"}
        </p>
      </div>
    </div>
  );
}

export default function CustomerInformationCard({
  report,
}: CustomerInformationCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />

          Customer Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <DetailField
          icon={Building2}
          label="Customer Name"
          value={report.customerName}
        />

        <DetailField
          icon={MapPin}
          label="Customer Address"
          value={report.customerAddress}
        />

        <DetailField
          icon={FileText}
          label="Note"
          value={report.note}
        />
      </CardContent>
    </Card>
  );
}