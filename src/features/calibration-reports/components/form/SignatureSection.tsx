"use client";

import { useFormContext } from "react-hook-form";

import {
  FormDateInput,
  FormFileUpload,
} from "@/components/forms";

import { CalibrationReportFormValues } from "../../schemas";

export default function SignatureSection() {
  const { control } =
    useFormContext<CalibrationReportFormValues>();

  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Signature Information
      </h2>

      <div className="grid gap-6 lg:grid-cols-2">
        <FormFileUpload
          control={control}
          name="biomedicalEngineerSignatureUrl"
          label="Biomedical Engineer Signature"
        />

        <FormFileUpload
          control={control}
          name="serviceEngineerSignatureUrl"
          label="Service Engineer Signature"
        />
      </div>

      <div className="mt-8 max-w-sm">
        <FormDateInput
          control={control}
          name="signedDate"
          label="Signed Date"
        />
      </div>
    </section>
  );
}