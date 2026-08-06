import { CalibrationStatus } from "./calibration.enums";

export interface CalibrationFilter {
  search?: string;

  customerId?: number;

  reportNo?: string;

  status?: CalibrationStatus;

  fromDate?: string;

  toDate?: string;

  page?: number;

  size?: number;

  sortBy?: string;

  sortDirection?: "asc" | "desc";
}