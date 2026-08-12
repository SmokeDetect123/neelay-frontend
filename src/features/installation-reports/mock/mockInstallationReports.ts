import {
  InstallationReport,
} from "../types";

export const mockInstallationReports: InstallationReport[] = [
  {
    id: 1,

    reportNo: "IR-000001",

    reportDate: "2026-08-01",

    customerName: "Apollo Hospital",

    customerAddress: "Mumbai",

    createdBy: "Admin",

    note: "Initial installation completed successfully.",

    customerSignatureUrl: "",

    signedDate: "2026-08-01",

    createdAt: "2026-08-01T10:00:00",

    updatedAt: "2026-08-01T10:00:00",

    lineItems: [
      {
        id: 1,

        make: "Neelay",

        model: "VAP-100",

        fabricationNo: "FAB-1001",

        fitting: "Wall Mounted",

        qty: 2,

        agent: "Rajesh",

        remarks: "Installed successfully.",
      },

      {
        id: 2,

        make: "Neelay",

        model: "VAP-200",

        fabricationNo: "FAB-1002",

        fitting: "Floor Mounted",

        qty: 1,

        agent: "Rajesh",

        remarks: "Leak test completed.",
      },
    ],
  },

  {
    id: 2,

    reportNo: "IR-000002",

    reportDate: "2026-08-03",

    customerName: "Fortis Hospital",

    customerAddress: "Pune",

    createdBy: "Admin",

    note: "Customer requested additional unit.",

    customerSignatureUrl: "",

    signedDate: "2026-08-03",

    createdAt: "2026-08-03T09:30:00",

    updatedAt: "2026-08-03T09:30:00",

    lineItems: [
      {
        id: 3,

        make: "Neelay",

        model: "VAP-150",

        fabricationNo: "FAB-2001",

        fitting: "Wall Mounted",

        qty: 1,

        agent: "Steen",

        remarks: "Completed.",
      },
    ],
  },
];