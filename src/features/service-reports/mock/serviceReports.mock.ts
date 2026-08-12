import type {
    ServiceReportResponse,
} from "../types/serviceReport.types";

/**
 * Mock service reports used by the frontend
 * until the Spring Boot backend is connected.
 *
 * IMPORTANT:
 * This is the only file that should contain
 * mock service-report records.
 */
export const mockServiceReports: ServiceReportResponse[] = [
    {
        id: 1,
        reportNumber: "SR-000001",

        // Customer
        customerId: 1,
        customerName: "ABC Hospital",
        customerAddress: "Mumbai, Maharashtra",

        // Engineer / attended by
        attendedBy: 2,
        attendedByName: "John Smith",

        // Report
        reportDate: "2026-07-20",

        // Equipment
        equipment: "Oxygen Vaporizer",
        serialNumber: "VP-2026-001",

        // Service details
        observations:
            "Leakage observed near the pressure regulator during inspection.",

        actionTaken:
            "Pressure regulator tightened and leakage test performed successfully.",

        recommendations:
            "Inspect regulator again during the next scheduled maintenance.",

        // Signatures
        customerSignatureUrl: "",
        engineerSignatureUrl: "",

        // Status
        status: "OPEN",

        // Audit timestamps
        createdAt: "2026-07-20T10:00:00Z",
        updatedAt: "2026-07-20T10:00:00Z",
    },

    {
        id: 2,
        reportNumber: "SR-000002",

        // Customer
        customerId: 2,
        customerName: "City Medical Centre",
        customerAddress: "Pune, Maharashtra",

        // Engineer / attended by
        attendedBy: 3,
        attendedByName: "David Wilson",

        // Report
        reportDate: "2026-07-18",

        // Equipment
        equipment: "Nitrous Oxide Manifold",
        serialNumber: "NM-45872",

        // Service details
        observations:
            "Routine preventive maintenance completed.",

        actionTaken:
            "Filters cleaned, pressure checked, and alarm tested.",

        recommendations:
            "Replace filter cartridge during next maintenance cycle.",

        // Signatures
        customerSignatureUrl: "",
        engineerSignatureUrl: "",

        // Status
        status: "COMPLETED",

        // Audit timestamps
        createdAt: "2026-07-18T09:30:00Z",
        updatedAt: "2026-07-18T11:00:00Z",
    },

    {
        id: 3,
        reportNumber: "SR-000003",

        // Customer
        customerId: 3,
        customerName: "Sunrise Hospital",
        customerAddress: "Nashik, Maharashtra",

        // Engineer / attended by
        attendedBy: 2,
        attendedByName: "John Smith",

        // Report
        reportDate: "2026-07-15",

        // Equipment
        equipment: "Medical Air Compressor",
        serialNumber: "MAC-98765",

        // Service details
        observations:
            "Abnormal vibration detected while compressor was running.",

        actionTaken:
            "Motor mounting bolts tightened and vibration reduced significantly.",

        recommendations:
            "Monitor vibration levels over the next month.",

        // Signatures
        customerSignatureUrl: "",
        engineerSignatureUrl: "",

        // Status
        status: "IN_PROGRESS",

        // Audit timestamps
        createdAt: "2026-07-15T08:45:00Z",
        updatedAt: "2026-07-15T09:40:00Z",
    },
];