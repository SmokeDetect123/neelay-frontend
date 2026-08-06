"use client";

import {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface FormSelectOption<T = string> {
  label: string;
  value: T;
}

interface FormSelectProps<
  TFieldValues extends FieldValues,
  TValue = string,
> {
  control: Control<TFieldValues>;

  name: FieldPath<TFieldValues>;

  label: string;

  options: FormSelectOption<TValue>[];

  placeholder?: string;

  disabled?: boolean;

  valueToString?: (value: TValue | undefined) => string;

  stringToValue?: (value: string) => TValue;
}

export default function FormSelect<
  TFieldValues extends FieldValues,
  TValue = string,
>({
  control,
  name,
  label,
  options,
  placeholder,
  disabled,
  valueToString = (value) =>
    value === undefined ? "" : String(value),

  stringToValue = (value) =>
    value as TValue,
}: FormSelectProps<
  TFieldValues,
  TValue
>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({
        field,
      }: {
        field: ControllerRenderProps<
          TFieldValues,
          FieldPath<TFieldValues>
        >;
      }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <Select
            disabled={disabled}
            value={valueToString(
              field.value as TValue
            )}
            onValueChange={(value) =>
              field.onChange(
                stringToValue(value)
              )
            }
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  placeholder={placeholder}
                />
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={String(option.value)}
                  value={String(option.value)}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}