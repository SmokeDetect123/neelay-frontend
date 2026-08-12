"use client";

import { FileSignature } from "lucide-react";

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

export default function SignatureSection() {
  const { control } =
    useFormContext<InstallationReportFormValues>();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileSignature className="h-5 w-5" />

          Customer Signature
        </CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6 md:grid-cols-2">
        <FormInput
          control={control}
          name="customerSignatureUrl"
          label="Signature"
          placeholder="Signature URL or uploaded file path"
        />

        <FormDateInput
          control={control}
          name="signedDate"
          label="Signed Date"
        />
      </CardContent>
    </Card>
  );
}