"use client";

import { Building2 } from "lucide-react";

import { useFormContext } from "react-hook-form";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FormInput,
  FormTextarea,
} from "@/components/forms";

import {
  InstallationReportFormValues,
} from "../../../schemas";

export default function CustomerInformationSection() {
  const { control } =
    useFormContext<InstallationReportFormValues>();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          Customer Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <FormInput
          control={control}
          name="customerName"
          label="Customer Name"
          placeholder="Enter customer name"
        />

        <FormTextarea
          control={control}
          name="customerAddress"
          label="Customer Address"
          placeholder="Enter customer address"
          rows={3}
        />

        <FormTextarea
          control={control}
          name="note"
          label="Note"
          placeholder="Additional notes (optional)"
          rows={4}
        />
      </CardContent>
    </Card>
  );
}