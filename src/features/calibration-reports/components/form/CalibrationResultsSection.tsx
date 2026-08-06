"use client";

import { useMemo } from "react";

import { useFormContext } from "react-hook-form";

import {
  FormNumberInput,
  FormSelect,
  FormTextarea,
} from "@/components/forms";

import { CalibrationReportFormValues } from "../../schemas";

import { OverallResult } from "../../types";

export default function CalibrationResultsSection() {
  const { control } =
    useFormContext<CalibrationReportFormValues>();

  const booleanOptions = useMemo(
    () => [
      {
        label: "PASS",
        value: "true",
      },
      {
        label: "FAIL",
        value: "false",
      },
    ],
    []
  );

  const overallOptions = useMemo(
    () => [
      {
        label: "PASS",
        value: true,
      },
      {
        label: "FAIL",
        value: false,
      },
    ],
    []
  );

  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Calibration Results
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <FormNumberInput
          control={control}
          name="resistance4lmin"
          label="Resistance @ 4 L/min"
        />

        <FormSelect
          control={control}
          name="leakTestPass"
          label="Leak Test"
          options={[
            { label: "PASS", value: true },
            { label: "FAIL", value: false },
          ]}
          valueToString={(value) =>
            value === undefined ? "" : String(value)
          }
          stringToValue={(value) => value === "true"}
        />

        <FormSelect
          control={control}
          name="driedOutPass"
          label="Dried Out"
          options={[
            { label: "PASS", value: true },
            { label: "FAIL", value: false },
          ]}
          valueToString={(value) =>
            value === undefined ? "" : String(value)
          }
          stringToValue={(value) => value === "true"}
        />

        <FormSelect
          control={control}
          name="finalLeakTestPass"
          label="Final Leak Test"
          options={[
            { label: "PASS", value: true },
            { label: "FAIL", value: false },
          ]}
          valueToString={(value) =>
            value === undefined ? "" : String(value)
          }
          stringToValue={(value) => value === "true"}
        />

        <FormSelect
          control={control}
          name="overallPass"
          label="Overall Result"
          options={[
            {
              label: "PASS",
              value: OverallResult.PASS,
            },
            {
              label: "FAIL",
              value: OverallResult.FAIL,
            },
          ]}
        />

        <div className="md:col-span-2 xl:col-span-3">
          <FormTextarea
            control={control}
            name="overallComment"
            label="Overall Comment"
            rows={4}
          />
        </div>
      </div>
    </section>
  );
}