"use client";

import { useFormContext } from "react-hook-form";

import {
  FormInput,
  FormTextarea,
} from "@/components/forms";

import { CalibrationReportFormValues } from "../../schemas";

export default function CustomerInformationSection() {
  const { control } =
    useFormContext<CalibrationReportFormValues>();

  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Customer Information
      </h2>

      <div className="grid gap-6">
        <FormInput
          control={control}
          name="customerName"
          label="Customer Name"
          placeholder="Enter customer name"
        />

        <FormTextarea
          control={control}
          name="customerAddress"
          label="Customer Address"
          placeholder="Enter customer address"
          rows={4}
        />
      </div>
    </section>
  );
}