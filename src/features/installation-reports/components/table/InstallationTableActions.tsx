"use client";

import Link from "next/link";

import {
  Edit,
  Eye,
} from "lucide-react";

import {
  Button,
} from "@/components/ui/button";

interface InstallationTableActionsProps {
  reportId: number;
}

export default function InstallationTableActions({
  reportId,
}: InstallationTableActionsProps) {
  return (
    <div className="flex items-center justify-end gap-2">
      <Button
        asChild
        variant="ghost"
        size="icon"
      >
        <Link
          href={`/installation-reports/${reportId}`}
        >
          <Eye className="h-4 w-4" />
          <span className="sr-only">
            View installation report
          </span>
        </Link>
      </Button>

      <Button
        asChild
        variant="ghost"
        size="icon"
      >
        <Link
          href={`/installation-reports/${reportId}/edit`}
        >
          <Edit className="h-4 w-4" />
          <span className="sr-only">
            Edit installation report
          </span>
        </Link>
      </Button>
    </div>
  );
}