import type { ServiceReportResponse } from "../types/serviceReport.types";

export const mockServiceReports: ServiceReportResponse[] = [
    {
        id: 1,
        reportNumber: "SR-000001",

        customerId: 1,
        customerName: "ABC Hospital",
        customerAddress: "123 Main St, City",

        attendedBy: 2,
        attendedByName: "John Smith",

        reportDate: "2026-07-20",

        equipment: "Oxygen Vaporizer",
        serialNumber: "VP-2026-001",

        observations:
            "Leakage observed near the pressure regulator during inspection.",

        actionTaken:
            "Pressure regulator tightened and leakage test performed successfully.",

        recommendations:
            "Inspect regulator again during the next scheduled maintenance.",

        status: "OPEN",

        createdAt: "2026-07-20T10:00:00Z",
        updatedAt: "2026-07-20T10:00:00Z",
    },

    {
        id: 2,
        reportNumber: "SR-000002",

        customerId: 2,
        customerName: "City Medical Centre",
        customerAddress: "456 Wellness Ave, Healthtown",

        attendedBy: 3,
        attendedByName: "David Wilson",

        reportDate: "2026-07-18",

        equipment: "Nitrous Oxide Manifold",
        serialNumber: "NM-45872",

        observations:
            "Routine preventive maintenance completed.",

        actionTaken:
            "Filters cleaned, pressure checked, and alarm tested.",

        recommendations:
            "Replace filter cartridge during next maintenance cycle.",

        status: "COMPLETED",

        createdAt: "2026-07-18T09:30:00Z",
        updatedAt: "2026-07-18T11:00:00Z",
    },

    {
        id: 3,
        reportNumber: "SR-000003",

        customerId: 3,
        customerName: "Sunrise Hospital",
        customerAddress: "789 Health Blvd, Wellness City",

        attendedBy: 2,
        attendedByName: "John Smith",

        reportDate: "2026-07-15",

        equipment: "Medical Air Compressor",
        serialNumber: "MAC-98765",

        observations:
            "Abnormal vibration detected while compressor was running.",

        actionTaken:
            "Motor mounting bolts tightened and vibration reduced significantly.",

        recommendations:
            "Monitor vibration levels over the next month.",

        status: "IN_PROGRESS",

        createdAt: "2026-07-15T08:45:00Z",
        updatedAt: "2026-07-15T09:40:00Z",
    },
];