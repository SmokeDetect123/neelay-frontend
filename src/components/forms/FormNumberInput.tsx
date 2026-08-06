"use client";

import {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FormNumberInputProps<
  TFieldValues extends FieldValues,
> {
  control: Control<TFieldValues>;

  name: FieldPath<TFieldValues>;

  label: string;

  step?: number;
}

export default function FormNumberInput<
  TFieldValues extends FieldValues,
>({
  control,
  name,
  label,
  step = 0.01,
}: FormNumberInputProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
          </FormLabel>

          <FormControl>
            <Input
              type="number"
              step={step}
              value={field.value ?? ""}
              onChange={(e) =>
                field.onChange(
                  e.target.value === ""
                    ? undefined
                    : Number(e.target.value)
                )
              }
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}