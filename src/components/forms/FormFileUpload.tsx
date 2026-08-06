"use client";

import {
  Control,
  FieldPath,
  FieldValues,
} from "react-hook-form";

import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface FormFileUploadProps<
  TFieldValues extends FieldValues,
> {
  control: Control<TFieldValues>;

  name: FieldPath<TFieldValues>;

  label: string;

  accept?: string;
}

export default function FormFileUpload<
  TFieldValues extends FieldValues,
>({
  control,
  name,
  label,
  accept = "image/*",
}: FormFileUploadProps<TFieldValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <div className="space-y-3">
              <Input
                type="file"
                accept={accept}
                onChange={(event) => {
                  const file =
                    event.target.files?.[0];

                  field.onChange(file ?? null);
                }}
              />

              <Button
                type="button"
                variant="outline"
                className="w-full"
              >
                <Upload className="mr-2 h-4 w-4" />

                Upload File
              </Button>
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}