"use client";

import Link from "next/link";

import {
  AlertCircle,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface InstallationNotFoundStateProps {
  title?: string;

  description?: string;

  backHref?: string;
}

export default function InstallationNotFoundState({
  title = "Installation Report Not Found",
  description = "The requested installation report does not exist.",
  backHref = "/installation-reports",
}: InstallationNotFoundStateProps) {
  return (
    <div className="rounded-lg border bg-background p-10 text-center">
      <AlertCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 text-muted-foreground">
        {description}
      </p>

      <Button
        asChild
        className="mt-6"
      >
        <Link href={backHref}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Reports
        </Link>
      </Button>
    </div>
  );
}