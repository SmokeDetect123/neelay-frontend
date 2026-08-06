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

interface FormDateInputProps<
  TFieldValues extends FieldValues,
> {
  control: Control<TFieldValues>;

  name: FieldPath<TFieldValues>;

  label: string;

  disabled?: boolean;
}

export default function FormDateInput<
  TFieldValues extends FieldValues,
>({
  control,
  name,
  label,
  disabled,
}: FormDateInputProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input
              type="date"
              value={field.value ?? ""}
              onChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}