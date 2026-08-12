"use client";

import {
  Calendar,
  Filter,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import {
  InstallationFilter,
} from "../../types";

interface InstallationFiltersProps {
  filter: InstallationFilter;

  onFilterChange: (
    filter: InstallationFilter
  ) => void;
}

export default function InstallationFilters({
  filter,
  onFilterChange,
}: InstallationFiltersProps) {
  function update<K extends keyof InstallationFilter>(
    key: K,
    value: InstallationFilter[K]
  ) {
    onFilterChange({
      ...filter,
      [key]: value,
    });
  }

  return (
    <Card>
      <CardContent className="space-y-6 py-6">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-primary" />

          <h3 className="font-semibold">
            Filters
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Input
            placeholder="Customer Name"
            value={filter.customerName}
            onChange={(event) =>
              update(
                "customerName",
                event.target.value
              )
            }
          />

          <Input
            placeholder="Make"
            value={filter.make}
            onChange={(event) =>
              update(
                "make",
                event.target.value
              )
            }
          />

          <Input
            placeholder="Fabrication No."
            value={filter.fabricationNo}
            onChange={(event) =>
              update(
                "fabricationNo",
                event.target.value
              )
            }
          />

          <div />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4" />

              From Date
            </label>

            <Input
              type="date"
              value={filter.fromDate}
              onChange={(event) =>
                update(
                  "fromDate",
                  event.target.value
                )
              }
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="h-4 w-4" />

              To Date
            </label>

            <Input
              type="date"
              value={filter.toDate}
              onChange={(event) =>
                update(
                  "toDate",
                  event.target.value
                )
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}