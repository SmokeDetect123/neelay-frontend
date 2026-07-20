import { z } from "zod";

export const serviceReportSchema = z.object({
    customerId: z
        .number()
        .positive("Customer is required."),

    reportDate: z
        .string()
        .min(1, "Report date is required."),

    attendedBy: z
        .number()
        .positive("Engineer is required."),

    equipment: z
        .string()
        .trim()
        .min(1, "Equipment is required.")
        .max(150, "Equipment cannot exceed 150 characters."),

    serialNumber: z
        .string()
        .trim()
        .min(1, "Serial number is required.")
        .max(100, "Serial number cannot exceed 100 characters."),

    observations: z
        .string()
        .trim()
        .min(1, "Observations are required.")
        .max(5000),

    actionTaken: z
        .string()
        .trim()
        .min(1, "Action taken is required.")
        .max(5000),

    recommendations: z
        .string()
        .trim()
        .max(5000)
        .optional()
        .or(z.literal("")),

    customerSignatureUrl: z
        .string()
        .url("Invalid signature URL.")
        .optional()
        .or(z.literal("")),

    engineerSignatureUrl: z
        .string()
        .url("Invalid signature URL.")
        .optional()
        .or(z.literal("")),
});

export type ServiceReportFormValues =
    z.infer<typeof serviceReportSchema>;