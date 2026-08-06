"use client";

import Link from "next/link";

import { FileX } from "lucide-react";

import { Button } from "@/components/ui/button";

import { ContentCard } from "@/components/common/ContentCard";

export default function CalibrationReportNotFound() {
  return (
    <ContentCard className="flex flex-col items-center justify-center p-12">
      <FileX className="mb-6 h-14 w-14 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        Calibration Report Not Found
      </h2>

      <p className="mt-2 text-center text-muted-foreground">
        The requested calibration report does not exist.
      </p>

      <Button
        asChild
        className="mt-8"
      >
        <Link href="/calibration-reports">
          Back to Reports
        </Link>
      </Button>
    </ContentCard>
  );
}