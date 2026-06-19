export const REPORT_TYPES = {
  INSTALLATION: "INSTALLATION",
  SERVICE: "SERVICE",
  CALIBRATION: "CALIBRATION",
} as const;

export type ReportType =
  (typeof REPORT_TYPES)[keyof typeof REPORT_TYPES];