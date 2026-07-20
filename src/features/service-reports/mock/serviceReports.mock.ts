import { ServiceReportResponse } from "../types/serviceReport.types";

export const mockServiceReports: ServiceReportResponse[] = [
    {
        id: 1,
        reportNumber: "SR-000001",

        customerId: 1,
        customerName: "ABC Hospitals",
        customerAddress: "Mumbai, Maharashtra",

        attendedBy: 1,
        attendedByName: "Rahul Sharma",

        reportDate: "2026-07-19",

        equipment: "Medical Oxygen Manifold",
        serialNumber: "MOM-1001",

        observations:
            "Pressure fluctuation observed during inspection.",

        actionTaken:
            "Adjusted pressure regulator and tested complete system.",

        recommendations:
            "Monitor pressure readings for the next seven days.",

        customerSignatureUrl: "",

        engineerSignatureUrl: "",

        status: "COMPLETED",

        createdAt: "2026-07-19T10:30:00Z",

        updatedAt: "2026-07-19T10:45:00Z",
    },

    {
        id: 2,
        reportNumber: "SR-000002",

        customerId: 2,
        customerName: "Sunrise Multispeciality",
        customerAddress: "Pune, Maharashtra",

        attendedBy: 2,
        attendedByName: "Ankit Patel",

        reportDate: "2026-07-18",

        equipment: "Vacuum Pipeline",
        serialNumber: "VP-2234",

        observations:
            "Minor leakage detected near isolation valve.",

        actionTaken:
            "Valve replaced and leakage test performed.",

        recommendations:
            "Perform preventive maintenance every quarter.",

        customerSignatureUrl: "",

        engineerSignatureUrl: "",

        status: "IN_PROGRESS",

        createdAt: "2026-07-18T09:20:00Z",

        updatedAt: "2026-07-18T12:10:00Z",
    },

    {
        id: 3,
        reportNumber: "SR-000003",

        customerId: 3,
        customerName: "City Care Hospital",
        customerAddress: "Nashik, Maharashtra",

        attendedBy: 3,
        attendedByName: "Vikas Singh",

        reportDate: "2026-07-17",

        equipment: "Medical Air Compressor",
        serialNumber: "MAC-8712",

        observations:
            "Routine preventive maintenance completed.",

        actionTaken:
            "Filters cleaned and compressor pressure verified.",

        recommendations:
            "",

        customerSignatureUrl: "",

        engineerSignatureUrl: "",

        status: "OPEN",

        createdAt: "2026-07-17T14:10:00Z",

        updatedAt: "2026-07-17T14:10:00Z",
    },
];