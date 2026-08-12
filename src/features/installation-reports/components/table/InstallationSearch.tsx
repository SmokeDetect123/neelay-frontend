"use client";

import { Search, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  InstallationFilter,
} from "../../types";

interface InstallationSearchProps {
  filter: InstallationFilter;

  onFilterChange: (
    filter: InstallationFilter
  ) => void;
}

export default function InstallationSearch({
  filter,
  onFilterChange,
}: InstallationSearchProps) {
  function updateSearch(
    value: string
  ) {
    onFilterChange({
      ...filter,
      reportNo: value,
    });
  }

  function clearSearch() {
    onFilterChange({
      ...filter,
      reportNo: "",
    });
  }

  return (
    <Card>
      <CardContent className="flex items-center gap-3 py-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            value={filter.reportNo}
            placeholder="Search by report number..."
            onChange={(event) =>
              updateSearch(event.target.value)
            }
            className="pl-10"
          />
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={clearSearch}
          disabled={!filter.reportNo}
        >
          <X className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </CardContent>
    </Card>
  );
}