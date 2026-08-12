"use client";

import { ClipboardList } from "lucide-react";

import { useFormContext } from "react-hook-form";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  FormDateInput,
  FormInput,
} from "@/components/forms";

import {
  InstallationReportFormValues,
} from "../../../schemas";

interface ReportInformationSectionProps {
  mode?: "create" | "edit";
}

export default function ReportInformationSection({
  mode = "create",
}: ReportInformationSectionProps) {
  const { control } =
    useFormContext<InstallationReportFormValues>();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="h-5 w-5" />

          Report Information
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2">
        <FormDateInput
            control={control}
            name="reportDate"
            label="Report Date"
        />
      </CardContent>
    </Card>
  );
}