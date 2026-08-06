"use client";

import { useFormContext } from "react-hook-form";

import { FormNumberInput } from "@/components/forms";

import { CalibrationReportFormValues } from "../../schemas";

interface EditableCalibrationRecordTableProps {
  title: string;

  fields: {
    label: string;
    name: keyof CalibrationReportFormValues;
  }[];
}

export default function EditableCalibrationRecordTable({
  title,
  fields,
}: EditableCalibrationRecordTableProps) {
  const { control } =
    useFormContext<CalibrationReportFormValues>();

  return (
    <div className="space-y-4">
      <h3 className="text-base font-semibold">
        {title}
      </h3>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">
                Set Point
              </th>

              <th className="px-4 py-3 text-left">
                Reading
              </th>
            </tr>
          </thead>

          <tbody>
            {fields.map((field) => (
              <tr
                key={field.name}
                className="border-t"
              >
                <td className="px-4 py-3 font-medium">
                  {field.label}
                </td>

                <td className="px-4 py-3">
                  <FormNumberInput
                    control={control}
                    name={field.name}
                    label=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}