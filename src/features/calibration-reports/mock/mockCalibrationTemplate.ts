import {
  CalibrationReport,
  CalibrationStatus,
  ConnectorSystem,
  FillingSystem,
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

  status: CalibrationStatus.PASS,

  testSignatureUrl: "",

  testSignatureDate: undefined,

  carriedGas: "Oxygen",

  leakageTest: "Completed",

  /*
   * Test Record Set 1
   */

  test1Record000: 0,
  test1Record060: 0,
  test1Record100: 0,
  test1Record200: 0,
  test1Record300: 0,
  test1Record400: 0,
  test1Record500: 0,
  test1Record600: 0,
  test1Record700: 0,
  test1Record800: 0,

  /*
   * Test Record Set 2
   */

  test2Record000: 0,
  test2Record060: 0,
  test2Record100: 0,
  test2Record200: 0,
  test2Record300: 0,
  test2Record400: 0,
  test2Record500: 0,
  test2Record600: 0,
  test2Record700: 0,
  test2Record800: 0,

  resistance4lmin: 0.25,

  leakTestPass: true,

  driedOutPass: true,

  finalLeakTestPass: true,

  overallPass: false,

  biomedicalEngineerSignatureUrl:
    "/mock/signatures/biomedical-engineer.png",

  serviceEngineerSignatureUrl:
    "/mock/signatures/service-engineer.png",

  signedDate: "2026-08-04",

  createdAt: "2026-08-04T09:00:00",

  updatedAt: "2026-08-04T09:30:00",

};