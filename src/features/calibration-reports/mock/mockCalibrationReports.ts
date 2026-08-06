import { CalibrationReport } from "../types";
import { OverallResult } from "../types";
import { calibrationReportTemplate } from "./mockCalibrationTemplate";

export const mockCalibrationReports: CalibrationReport[] = [
  {
    ...calibrationReportTemplate,

    id: 1,

    reportNo: "CR-000001",

    reportDate: "2026-08-01",

    customerName: "ABC Multispeciality Hospital",

    customerAddress: "Mumbai, Maharashtra",

    serialNo: "VP-2026-0001",

    overallComment:
      "Calibration completed successfully. Equipment operating within tolerance.",
  },

  {
    ...calibrationReportTemplate,

    id: 2,

    reportNo: "CR-000002",

    reportDate: "2026-08-02",

    customerName: "Sunrise Healthcare",

    customerAddress: "Pune, Maharashtra",

    serialNo: "VP-2026-0002",

    overallComment:
      "Calibration verified successfully after preventive maintenance.",
  },

  {
    ...calibrationReportTemplate,

    id: 3,

    reportNo: "CR-000003",

    reportDate: "2026-08-03",

    customerName: "City Care Hospital",

    customerAddress: "Navi Mumbai, Maharashtra",

    serialNo: "VP-2026-0003",

    leakTestPass: false,

    finalLeakTestPass: false,

    overallPass: OverallResult.FAIL,

    overallComment:
      "Leak test failed. Recalibration and servicing required before certification.",
  },
];