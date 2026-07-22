import { z } from "zod";

export const serviceReportSchema = z.object({
    customerId: z
        .number()
        .positive("Please select a customer."),

    attendedBy: z
        .number()
        .positive("Please select an engineer."),

    reportDate: z
        .string()
        .min(1, "Report date is required."),

    equipment: z
        .string()
        .trim()
        .min(1, "Equipment is required.")
        .max(100, "Equipment cannot exceed 100 characters."),

    serialNumber: z
        .string()
        .trim()
        .min(1, "Serial number is required.")
        .max(100, "Serial number cannot exceed 100 characters."),

    observations: z
        .string()
        .trim()
        .max(2000, "Observations cannot exceed 2000 characters."),

    actionTaken: z
        .string()
        .trim()
        .max(2000, "Action Taken cannot exceed 2000 characters."),

    recommendations: z
        .string()
        .trim()
        .max(2000, "Recommendations cannot exceed 2000 characters."),
});

export type ServiceReportSchema = z.infer<typeof serviceReportSchema>;