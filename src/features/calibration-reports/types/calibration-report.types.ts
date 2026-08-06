import {
  CalibrationStatus,
  ConnectorSystem,
  FillingSystem,
  GasType,
  OverallResult,
} from "./calibration.enums";

/**
 * Mirrors backend CalibrationReportResponse.java
 * Keep field names aligned with backend.
 */
export interface CalibrationReport {
  id: number;

  reportNo: string;

  reportDate: string;

  customerName: string;

  customerAddress: string;

  createdBy: string;

  agentType: string;

  fillingSystem: string;

  connectorSystem: string;

  serialNo: string;

  make: string;

  type: string;

  testSignatureUrl: string;

  testSignature: string;

  testSignatureDate?: string;

  carriedGas: string;

  leakageTest: string;

  /*
   * Calibration Test Record 1
   */

  test1Record000: number;
  test1Record060: number;
  test1Record100: number;
  test1Record200: number;
  test1Record300: number;
  test1Record400: number;
  test1Record500: number;
  test1Record600: number;
  test1Record700: number;
  test1Record800: number;

  /*
   * Calibration Test Record 2
   */

  test2Record000: number;
  test2Record060: number;
  test2Record100: number;
  test2Record200: number;
  test2Record300: number;
  test2Record400: number;
  test2Record500: number;
  test2Record600: number;
  test2Record700: number;
  test2Record800: number;

  resistance4lmin: number;

  leakTestPass: boolean;

  driedOutPass: boolean;

  finalLeakTestPass: boolean;

  overallPass: boolean;

  overallComment: string;

  biomedicalEngineerSignatureUrl?: string;

  serviceEngineerSignatureUrl?: string;

  signedDate?: string;

  createdAt: string;

  updatedAt: string;

  status: CalibrationStatus;
}