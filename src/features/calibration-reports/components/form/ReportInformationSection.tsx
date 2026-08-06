"use client";

import { useFormContext } from "react-hook-form";

import {
  FormDateInput,
  FormInput,
} from "@/components/forms";

import { Badge } from "@/components/ui/badge";

import { CalibrationReportFormValues } from "../../schemas";

export default function ReportInformationSection() {
  const { control, watch } =
    useFormContext<CalibrationReportFormValues>();

  const status = watch("status");

  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Report Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <FormInput
          control={control}
          name="reportNo"
          label="Report Number"
          readOnly
        />

        <FormDateInput
          control={control}
          name="reportDate"
          label="Report Date"
        />

        <FormInput
          control={control}
          name="createdBy"
          label="Created By"
          readOnly
        />

        <div className="space-y-2">
          <p className="text-sm font-medium">
            Status
          </p>

          <Badge>
            {status ?? "-"}
          </Badge>
        </div>
      </div>
    </section>
  );
}