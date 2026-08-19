export enum CalibrationStatus {
  PASS = "PASS",
  FAIL = "FAIL",
  PENDING = "PENDING",
}

export enum LeakageTestResult {
  PASS = "PASS",
  FAIL = "FAIL",
}

export enum LeakTestResult {
  PASS = "PASS",
  FAIL = "FAIL",
}

export enum OverallResult {
  PASS = "PASS",
  FAIL = "FAIL",
}

export enum GasType {
  OXYGEN = "OXYGEN",
  AIR = "AIR",
  NITROGEN = "NITROGEN",
  VACUUM = "VACUUM",
}

export enum FillingSystem {
  MANIFOLD = "MANIFOLD",
  CYLINDER = "CYLINDER",
}

export enum ConnectorSystem {
  PIN_INDEX = "PIN_INDEX",
  BULLNOSE = "BULLNOSE",
  QUICK_CONNECT = "QUICK_CONNECT",
}

export function getCalibrationStatus(
    overallPass: boolean | null | undefined,
): CalibrationStatus {
    if (overallPass === true) {
        return CalibrationStatus.PASS;
    }

    if (overallPass === false) {
        return CalibrationStatus.FAIL;
    }

    return CalibrationStatus.PENDING;
}