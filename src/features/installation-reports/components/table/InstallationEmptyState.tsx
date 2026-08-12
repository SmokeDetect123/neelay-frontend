"use client";

import Link from "next/link";

import {
  ClipboardList,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function InstallationEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-20">
      <ClipboardList className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        No Installation Reports
      </h3>

      <p className="mt-2 text-sm text-muted-foreground">
        Create your first Installation Report.
      </p>

      <Button
        asChild
        className="mt-6"
      >
        <Link href="/installation-reports/create">
          <Plus className="mr-2 h-4 w-4" />

          New Report
        </Link>
      </Button>
    </div>
  );
}