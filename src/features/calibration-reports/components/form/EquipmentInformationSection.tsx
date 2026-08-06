"use client";

import { useMemo } from "react";

import { useFormContext } from "react-hook-form";

import {
  FormInput,
  FormSelect,
} from "@/components/forms";

import {
  CalibrationReportFormValues,
} from "../../schemas";

import {
  ConnectorSystem,
  FillingSystem,
  GasType,
} from "../../types/calibration.enums";

export default function EquipmentInformationSection() {
  const { control } =
    useFormContext<CalibrationReportFormValues>();

  const fillingOptions = useMemo(
    () =>
      Object.values(FillingSystem).map(
        (value) => ({
          label: value,
          value,
        })
      ),
    []
  );

  const connectorOptions = useMemo(
    () =>
      Object.values(ConnectorSystem).map(
        (value) => ({
          label: value,
          value,
        })
      ),
    []
  );

  const gasOptions = useMemo(
    () =>
      Object.values(GasType).map(
        (value) => ({
          label: value,
          value,
        })
      ),
    []
  );

  return (
    <section className="rounded-lg border bg-card p-6">
      <h2 className="mb-6 text-lg font-semibold">
        Equipment Information
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <FormInput
          control={control}
          name="agentType"
          label="Agent Type"
        />

        <FormSelect
          control={control}
          name="fillingSystem"
          label="Filling System"
          placeholder="Select Filling System"
          options={fillingOptions}
        />

        <FormSelect
          control={control}
          name="connectorSystem"
          label="Connector System"
          placeholder="Select Connector System"
          options={connectorOptions}
        />

        <FormInput
          control={control}
          name="serialNo"
          label="Serial Number"
        />

        <FormInput
          control={control}
          name="make"
          label="Make"
        />

        <FormInput
          control={control}
          name="type"
          label="Equipment Type"
        />

        <FormSelect
          control={control}
          name="carriedGas"
          label="Carried Gas"
          placeholder="Select Gas Type"
          options={gasOptions}
        />
      </div>
    </section>
  );
}