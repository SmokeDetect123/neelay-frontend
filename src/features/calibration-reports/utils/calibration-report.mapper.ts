import {
  CalibrationReportFormValues,
} from "../schemas";

import {
  CreateCalibrationReportRequest,
  UpdateCalibrationReportRequest,
} from "../types";

/**
 * Converts React Hook Form values into
 * backend request DTO.
 *
 * During mock development File objects are
 * converted to their filename.
 *
 * During backend integration this mapper
 * will convert uploaded files into URLs.
 */

function mapSignature(
  value: string | File | undefined
): string | undefined {
  if (!value) {
    return undefined;
  }

  if (typeof value === "string") {
    return value;
  }

  return value.name;
}

export function toCreateCalibrationRequest(
  values: CalibrationReportFormValues
): CreateCalibrationReportRequest {
  return {
    reportDate: values.reportDate,

    customerName: values.customerName,

    customerAddress:
      values.customerAddress,

    agentType:
      values.agentType,

    fillingSystem:
      values.fillingSystem,

    connectorSystem:
      values.connectorSystem,

    serialNo:
      values.serialNo,

    make:
      values.make,

    type:
      values.type,

    testSignatureUrl:
      values.testSignatureUrl,

    testSignatureDate:
      values.testSignatureDate,

    carriedGas:
      values.carriedGas,

    leakageTest:
      values.leakageTest,

    test1Record000:
      values.test1Record000,

    test1Record060:
      values.test1Record060,

    test1Record100:
      values.test1Record100,

    test1Record200:
      values.test1Record200,

    test1Record300:
      values.test1Record300,

    test1Record400:
      values.test1Record400,

    test1Record500:
      values.test1Record500,

    test1Record600:
      values.test1Record600,

    test1Record700:
      values.test1Record700,

    test1Record800:
      values.test1Record800,

    test2Record000:
      values.test2Record000,

    test2Record060:
      values.test2Record060,

    test2Record100:
      values.test2Record100,

    test2Record200:
      values.test2Record200,

    test2Record300:
      values.test2Record300,

    test2Record400:
      values.test2Record400,

    test2Record500:
      values.test2Record500,

    test2Record600:
      values.test2Record600,

    test2Record700:
      values.test2Record700,

    test2Record800:
      values.test2Record800,

    resistance4lmin:
      values.resistance4lmin,

    leakTestPass:
      values.leakTestPass,

    driedOutPass:
      values.driedOutPass,

    finalLeakTestPass:
      values.finalLeakTestPass,

    overallPass:
      values.overallPass,

    overallComment:
      values.overallComment,

    biomedicalEngineerSignatureUrl:
      mapSignature(
        values.biomedicalEngineerSignatureUrl
      ),

    serviceEngineerSignatureUrl:
      mapSignature(
        values.serviceEngineerSignatureUrl
      ),

    signedDate:
      values.signedDate,
  };
}

export function toUpdateCalibrationRequest(
  values: CalibrationReportFormValues
): UpdateCalibrationReportRequest {
  return {
    ...toCreateCalibrationRequest(values),
  };
}