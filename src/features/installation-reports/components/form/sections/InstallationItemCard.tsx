"use client";

import { Trash2 } from "lucide-react";

import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";

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

interface InstallationItemCardProps {
  index: number;

  totalItems: number;

  onRemove: () => void;
}

export default function InstallationItemCard({
  index,
  totalItems,
  onRemove,
}: InstallationItemCardProps) {
  const { control } =
    useFormContext<InstallationReportFormValues>();

  const base =
    `lineItems.${index}` as const;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>
          Equipment #{index + 1}
        </CardTitle>

        <Button
          type="button"
          variant="destructive"
          size="icon"
          onClick={onRemove}
          disabled={totalItems === 1}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormInput
            control={control}
            name={`${base}.make`}
            label="Make"
          />

          <FormInput
            control={control}
            name={`${base}.model`}
            label="Model"
          />

          <FormInput
            control={control}
            name={`${base}.fabricationNo`}
            label="Fabrication Number"
          />

          <FormInput
            control={control}
            name={`${base}.fitting`}
            label="Fitting"
          />

          <FormInput
            control={control}
            name={`${base}.qty`}
            label="Quantity"
            type="number"
          />

          <FormInput
            control={control}
            name={`${base}.agent`}
            label="Agent"
          />
        </div>

        <FormTextarea
          control={control}
          name={`${base}.remarks`}
          label="Remarks"
          rows={3}
        />
      </CardContent>
    </Card>
  );
}