"use client";

import {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FormTextareaProps<
  TFieldValues extends FieldValues,
> {
  control: Control<TFieldValues>;

  name: FieldPath<TFieldValues>;

  label: string;

  placeholder?: string;

  rows?: number;
}

export default function FormTextarea<
  TFieldValues extends FieldValues,
>({
  control,
  name,
  label,
  placeholder,
  rows = 4,
}: FormTextareaProps<TFieldValues>) {
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
            <Textarea
              {...field}
              value={field.value ?? ""}
              rows={rows}
              placeholder={placeholder}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}