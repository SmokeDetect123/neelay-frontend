import { z } from "zod";

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const CALL_TYPES = [
    "CALL_BASIS",
    "AMC",
    "PREVENTIVE_MAINT",
    "OTHER",
] as const;

const LOCATION_TYPES = [
    "ON_SITE",
    "DEPOT",
] as const;

export const serviceReportSchema = z.object({
    reportDate: z
        .string()
        .min(1, "Report date is required")
        .regex(
            DATE_PATTERN,
            "Enter a valid report date.",
        ),

    customerName: z
        .string()
        .trim()
        .min(1, "Customer name is required")
        .max(
            150,
            "Customer name cannot exceed 150 characters.",
        ),

    customerAddress: z
        .string()
        .max(
            500,
            "Customer address cannot exceed 500 characters.",
        )
        .optional(),

    department: z
        .string()
        .max(
            150,
            "Department cannot exceed 150 characters.",
        )
        .optional(),

    personContacted: z
        .string()
        .max(
            150,
            "Person contacted cannot exceed 150 characters.",
        )
        .optional(),

    make: z
        .string()
        .max(
            100,
            "Make cannot exceed 100 characters.",
        )
        .optional(),

    model: z
        .string()
        .max(
            100,
            "Model cannot exceed 100 characters.",
        )
        .optional(),

    serialNo: z
        .string()
        .max(
            100,
            "Serial number cannot exceed 100 characters.",
        )
        .optional(),

    callType: z.enum(CALL_TYPES),

    problemDescription: z
        .string()
        .optional(),

    actionTaken: z
        .string()
        .optional(),

    materialUsed: z
        .string()
        .max(
            255,
            "Material used cannot exceed 255 characters.",
        )
        .optional(),

    locationType: z
        .enum(LOCATION_TYPES)
        .optional(),

    customerSignatureUrl: z
        .union([
            z.string().url("Enter a valid signature URL."),
            z.literal(""),
        ])
        .optional(),

    signedDate: z
        .union([
            z.string().regex(
                DATE_PATTERN,
                "Enter a valid signed date.",
            ),
            z.literal(""),
        ])
        .optional(),
});