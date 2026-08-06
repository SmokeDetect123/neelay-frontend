import {
  CalibrationReport,
  CalibrationStatus,
  ConnectorSystem,
  FillingSystem,
  OverallResult,
} from "../types";

export const calibrationReportTemplate: Omit<
  CalibrationReport,
  | "id"
  | "reportNo"
  | "reportDate"
  | "customerName"
  | "customerAddress"
  | "serialNo"
  | "overallComment"
> = {
  createdBy: "admin",

  agentType: "Medical Oxygen",

  fillingSystem: FillingSystem.MANIFOLD,

  connectorSystem: ConnectorSystem.PIN_INDEX,

  make: "Neelay",

  type: "VM-500",

  testSignature: "Calibration Test Completed",

  carriedGas: "Oxygen",

  leakageTest: "Completed",

  /*
   * Test Record Set 1
   */

  test1Record000: 0,
  test1Record100: 1,
  test1Record200: 2,
  test1Record300: 3,
  test1Record400: 4,
  test1Record500: 5,
  test1Record600: 6,
  test1Record700: 7,
  test1Record800: 8,

  /*
   * Test Record Set 2
   */

  test2Record000: 0,
  test2Record100: 1,
  test2Record200: 2,
  test2Record300: 3,
  test2Record400: 4,
  test2Record500: 5,
  test2Record600: 6,
  test2Record700: 7,
  test2Record800: 8,

  resistance4lmin: 0.25,

  leakTestPass: true,

  driedOutPass: true,

  finalLeakTestPass: true,

  overallPass: OverallResult.PASS,

  biomedicalEngineerSignatureUrl:
    "/mock/signatures/biomedical-engineer.png",

  serviceEngineerSignatureUrl:
    "/mock/signatures/service-engineer.png",

  signedDate: "2026-08-04",

  createdAt: "2026-08-04T09:00:00",

  updatedAt: "2026-08-04T09:30:00",

  status: CalibrationStatus.PASS,
};