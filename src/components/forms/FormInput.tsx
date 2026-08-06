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

interface FormInputProps<
  TFieldValues extends FieldValues,
> {
  control: Control<TFieldValues>;

  name: FieldPath<TFieldValues>;

  label: string;

  placeholder?: string;

  disabled?: boolean;

  readOnly?: boolean;

  type?: React.HTMLInputTypeAttribute;
}

export default function FormInput<
  TFieldValues extends FieldValues,
>({
  control,
  name,
  label,
  placeholder,
  disabled,
  readOnly,
  type = "text",
}: FormInputProps<TFieldValues>) {
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
              {...field}
              value={field.value ?? ""}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              readOnly={readOnly}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}