import { z } from "zod";

const installationLineItemSchema = z.object({
  make: z.string().trim(),

  model: z.string().trim(),

  fabricationNo: z.string().trim(),

  fitting: z.string().trim(),

  qty: z.coerce
    .number()
    .int({
      message: "Quantity must be a whole number.",
    })
    .min(1, {
      message: "Quantity must be at least 1.",
    }),

  agent: z.string().trim(),

  remarks: z.string().trim(),
});

export const installationReportSchema =
  z.object({
    reportDate: z
      .string()
      .min(1, "Report date is required."),

    customerName: z
      .string()
      .trim()
      .min(1, "Customer name is required."),

    customerAddress:
      z.string().optional(),

    note:
      z.string().optional(),

    customerSignatureUrl:
      z.union([
        z.string(),
        z.instanceof(File),
      ]).optional(),

    signedDate:
      z.string().optional(),

    lineItems: z
      .array(
        installationLineItemSchema
      )
      .min(
        1,
        "At least one installation item is required."
      ),
  });

export type InstallationReportSchema =
  typeof installationReportSchema;