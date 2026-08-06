import { z } from "zod";

import { CalibrationStatus } from "../types";

/**
 * ============================================================================
 * Backend-aligned Calibration Report Schema
 * Mirrors CreateCalibrationReportRequest.java
 * ============================================================================
 */

export const calibrationReportSchema = z.object({
  // ---------------------------------------------------------------------------
  // Report Information
  // ---------------------------------------------------------------------------

  reportNo: z.string().optional(),

  reportDate: z.string().min(1, "Report date is required"),

  createdBy: z.string().optional(),

  status: z.nativeEnum(CalibrationStatus).optional(),

  // ---------------------------------------------------------------------------
  // Customer
  // ---------------------------------------------------------------------------

  customerName: z
    .string()
    .trim()
    .min(1, "Customer name is required"),

  customerAddress: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Equipment
  // ---------------------------------------------------------------------------

  agentType: z.string().optional(),

  fillingSystem: z.string().optional(),

  connectorSystem: z.string().optional(),

  serialNo: z.string().optional(),

  make: z.string().optional(),

  type: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Test Information
  // ---------------------------------------------------------------------------

  testSignatureUrl: z.string().optional(),

  testSignatureDate: z.string().optional(),

  carriedGas: z.string().optional(),

  leakageTest: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Calibration Test Record 1
  // ---------------------------------------------------------------------------

  test1Record000: z.number().optional(),
  test1Record060: z.number().optional(),
  test1Record100: z.number().optional(),
  test1Record200: z.number().optional(),
  test1Record300: z.number().optional(),
  test1Record400: z.number().optional(),
  test1Record500: z.number().optional(),
  test1Record600: z.number().optional(),
  test1Record700: z.number().optional(),
  test1Record800: z.number().optional(),

  // ---------------------------------------------------------------------------
  // Calibration Test Record 2
  // ---------------------------------------------------------------------------

  test2Record000: z.number().optional(),
  test2Record060: z.number().optional(),
  test2Record100: z.number().optional(),
  test2Record200: z.number().optional(),
  test2Record300: z.number().optional(),
  test2Record400: z.number().optional(),
  test2Record500: z.number().optional(),
  test2Record600: z.number().optional(),
  test2Record700: z.number().optional(),
  test2Record800: z.number().optional(),

  // ---------------------------------------------------------------------------
  // Results
  // ---------------------------------------------------------------------------

  resistance4lmin: z.number().optional(),

  leakTestPass: z.boolean(),

  driedOutPass: z.boolean(),

  finalLeakTestPass: z.boolean(),

  overallPass: z.boolean(),

  overallComment: z.string().optional(),

  // ---------------------------------------------------------------------------
  // Signatures
  // ---------------------------------------------------------------------------

  biomedicalEngineerSignatureUrl: z
    .union([
      z.string(),
      z.instanceof(File),
    ])
    .optional(),

  serviceEngineerSignatureUrl: z
    .union([
      z.string(),
      z.instanceof(File),
    ])
    .optional(),

  signedDate: z.string().optional(),
});

export type CalibrationReportFormValues =
  z.infer<typeof calibrationReportSchema>;

/**
 * ============================================================================
 * Default Values
 * ============================================================================
 */

export const calibrationReportDefaultValues: CalibrationReportFormValues =
  {
    reportNo: "",

    reportDate: "",

    createdBy: "",

    status: CalibrationStatus.PENDING,

    customerName: "",

    customerAddress: "",

    agentType: "",

    fillingSystem: "",

    connectorSystem: "",

    serialNo: "",

    make: "",

    type: "",

    testSignatureUrl: "",

    testSignatureDate: "",

    carriedGas: "",

    leakageTest: "",

    test1Record000: undefined,
    test1Record060: undefined,
    test1Record100: undefined,
    test1Record200: undefined,
    test1Record300: undefined,
    test1Record400: undefined,
    test1Record500: undefined,
    test1Record600: undefined,
    test1Record700: undefined,
    test1Record800: undefined,

    test2Record000: undefined,
    test2Record060: undefined,
    test2Record100: undefined,
    test2Record200: undefined,
    test2Record300: undefined,
    test2Record400: undefined,
    test2Record500: undefined,
    test2Record600: undefined,
    test2Record700: undefined,
    test2Record800: undefined,

    resistance4lmin: undefined,

    leakTestPass: false,

    driedOutPass: false,

    finalLeakTestPass: false,

    overallPass: false,

    overallComment: "",

    biomedicalEngineerSignatureUrl: "",

    serviceEngineerSignatureUrl: "",

    signedDate: "",
  };