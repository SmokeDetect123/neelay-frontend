"use client";

import {
  Calendar,
  FileSignature,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  InstallationReport,
} from "../../../types";

interface SignatureCardProps {
  report: InstallationReport;
}

function DetailField({
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

      <div className="rounded-md border bg-muted/30 p-3">
        <p>{value || "-"}</p>
      </div>
    </div>
  );
}

export default function SignatureCard({
  report,
}: SignatureCardProps) {
  const hasSignature =
    !!report.customerSignatureUrl;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSignature className="h-5 w-5" />

          Customer Signature
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Signature Status
          </span>

          <Badge
            variant={
              hasSignature
                ? "default"
                : "secondary"
            }
          >
            {hasSignature
              ? "Available"
              : "Not Available"}
          </Badge>
        </div>

        <DetailField
          icon={Calendar}
          label="Signed Date"
          value={report.signedDate}
        />

        <DetailField
          icon={FileSignature}
          label="Signature URL"
          value={report.customerSignatureUrl}
        />
      </CardContent>
    </Card>
  );
}