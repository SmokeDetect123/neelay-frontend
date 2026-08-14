import { z } from "zod";

export const serviceReportSchema =
    z.object({
        customerId: z
            .number()
            .positive(
                "Please select a customer.",
            ),

        customerName: z
            .string()
            .trim()
            .min(
                1,
                "Customer name is required.",
            ),

        customerAddress: z
            .string()
            .trim(),

        department: z
            .string()
            .trim(),

        personContacted: z
            .string()
            .trim(),

        attendedBy: z
            .number()
            .positive(
                "Please select an engineer.",
            ),

        reportDate: z
            .string()
            .min(
                1,
                "Report date is required.",
            ),

        make: z
            .string()
            .trim()
            .min(
                1,
                "Make is required.",
            )
            .max(
                150,
                "Make cannot exceed 150 characters.",
            ),

        model: z
            .string()
            .trim()
            .min(
                1,
                "Model is required.",
            )
            .max(
                150,
                "Model cannot exceed 150 characters.",
            ),

        serialNo: z
            .string()
            .trim()
            .min(
                1,
                "Serial number is required.",
            )
            .max(
                100,
                "Serial number cannot exceed 100 characters.",
            ),

        callType: z
            .string()
            .min(
                1,
                "Call type is required.",
            ),

        locationType: z
            .string()
            .min(
                1,
                "Location is required.",
            ),

        problemDescription: z
            .string()
            .trim()
            .min(
                1,
                "Problem description is required.",
            )
            .max(
                5000,
                "Problem description cannot exceed 5000 characters.",
            ),

        actionTaken: z
            .string()
            .trim()
            .min(
                1,
                "Action taken is required.",
            )
            .max(
                5000,
                "Action taken cannot exceed 5000 characters.",
            ),

        materialUsed: z
            .string()
            .trim()
            .max(
                5000,
                "Material used cannot exceed 5000 characters.",
            ),

        customerSignatureUrl: z
            .string()
            .trim(),

        signedDate: z
            .string()
            .trim(),
    });

export type ServiceReportSchema =
    z.infer<
        typeof serviceReportSchema
    >;