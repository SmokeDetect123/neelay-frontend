import {
  InstallationReport,
} from "./installation-report.types";

export interface InstallationTableColumn {
  key: keyof InstallationReport | string;

  label: string;

  sortable?: boolean;

  width?: number | string;
}