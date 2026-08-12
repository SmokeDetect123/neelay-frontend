"use client";

import Link from "next/link";

import {
  Edit,
  Eye,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface InstallationTableActionsProps {
  reportId: number;

  onDelete?: (id: number) => void;
}

export default function InstallationTableActions({
  reportId,
  onDelete,
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
        </Link>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="text-destructive"
        onClick={() =>
          onDelete?.(reportId)
        }
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}