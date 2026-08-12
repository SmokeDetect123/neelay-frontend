"use client";

import { Plus, Wrench } from "lucide-react";

import {
  useFieldArray,
  useFormContext,
} from "react-hook-form";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  InstallationReportFormValues,
} from "../../../schemas";

import InstallationItemCard from "./InstallationItemCard";

export default function InstallationItemsSection() {
  const { control } =
    useFormContext<InstallationReportFormValues>();

  const {
    fields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "lineItems",
  });

  function createEmptyItem() {
    return {
      make: "",
      model: "",
      fabricationNo: "",
      fitting: "",
      qty: 1,
      agent: "",
      remarks: "",
    };
  }

  function handleAddItem() {
    append(createEmptyItem(), {
      shouldFocus: false,
    });
  }

  function handleRemoveItem(
    index: number
  ) {
    if (fields.length <= 1) {
      return;
    }

    remove(index);
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Wrench className="h-5 w-5" />

          Installation Equipment
        </CardTitle>

        <Button
          type="button"
          onClick={handleAddItem}
        >
          <Plus className="mr-2 h-4 w-4" />

          Add Equipment
        </Button>
      </CardHeader>

      <CardContent className="space-y-6">
        {fields.length === 0 ? (
          <div className="rounded-lg border border-dashed p-8 text-center">
            <p className="text-sm text-muted-foreground">
              No equipment added.
            </p>

            <Button
              type="button"
              className="mt-4"
              onClick={handleAddItem}
            >
              <Plus className="mr-2 h-4 w-4" />

              Add First Equipment
            </Button>
          </div>
        ) : (
          fields.map((field, index) => (
            <InstallationItemCard
              key={field.id}
              index={index}
              totalItems={fields.length}
              onRemove={() =>
                handleRemoveItem(index)
              }
            />
          ))
        )}
      </CardContent>
    </Card>
  );
}