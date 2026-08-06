"use client";

import { Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CalibrationStatus } from "../types";

interface Props {
  search: string;

  status: CalibrationStatus | "ALL";

  onSearchChange: (value: string) => void;

  onStatusChange: (
    value: CalibrationStatus | "ALL"
  ) => void;
}

export default function CalibrationReportsFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: Props) {
  const clearFilters = () => {
    onSearchChange("");
    onStatusChange("ALL");
  };

  return (
    <div className="mb-6 rounded-lg border bg-card p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
        {/* Search */}

        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium">
            Search
          </label>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              placeholder="Report No, Customer or Serial No..."
              onChange={(e) =>
                onSearchChange(e.target.value)
              }
              className="pl-10"
            />
          </div>
        </div>

        {/* Status */}

        <div className="w-full lg:w-60">
          <label className="mb-2 block text-sm font-medium">
            Status
          </label>

          <Select
            value={status}
            onValueChange={(value) =>
              onStatusChange(
                value as CalibrationStatus | "ALL"
              )
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ALL">
                All Status
              </SelectItem>

              <SelectItem value={CalibrationStatus.PASS}>
                PASS
              </SelectItem>

              <SelectItem value={CalibrationStatus.FAIL}>
                FAIL
              </SelectItem>

              <SelectItem value={CalibrationStatus.PENDING}>
                PENDING
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Clear */}

        <Button
          type="button"
          variant="outline"
          onClick={clearFilters}
        >
          <X className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}