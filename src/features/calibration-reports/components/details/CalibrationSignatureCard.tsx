"use client";

import Image from "next/image";

import { ContentCard } from "@/components/common/ContentCard";

import { CalibrationReport } from "../../types";

import { DetailField } from ".";

interface CalibrationSignatureCardProps {
  report?: CalibrationReport;
}

interface SignaturePreviewProps {
  title: string;
  signatureUrl?: string | null;
}

function SignaturePreview({
  title,
  signatureUrl,
}: SignaturePreviewProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {title}
      </p>

      <div className="flex h-40 items-center justify-center rounded-lg border bg-muted/20">
        {signatureUrl ? (
          <Image
            src={signatureUrl}
            alt={title}
            width={240}
            height={120}
            className="max-h-32 w-auto object-contain"
          />
        ) : (
          <span className="text-sm text-muted-foreground">
            No Signature Available
          </span>
        )}
      </div>
    </div>
  );
}

export default function CalibrationSignatureCard({
  report,
}: CalibrationSignatureCardProps) {
  if (!report) {
    return (
      <ContentCard className="p-6">
        <h2 className="mb-6 text-lg font-semibold">
          Signature Information
        </h2>

        <p className="text-sm text-muted-foreground">
          No signature information available.
        </p>
      </ContentCard>
    );
  }

  return (
    <ContentCard className="p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Signature Information
      </h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <SignaturePreview
          title="Biomedical Engineer"
          signatureUrl={
            report.biomedicalEngineerSignatureUrl
          }
        />

        <SignaturePreview
          title="Service Engineer"
          signatureUrl={
            report.serviceEngineerSignatureUrl
          }
        />
      </div>

      <div className="mt-8">
        <DetailField
          label="Signed Date"
          value={report.signedDate}
        />
      </div>
    </ContentCard>
  );
}