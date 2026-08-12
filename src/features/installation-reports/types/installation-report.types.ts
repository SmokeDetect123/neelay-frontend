import {
  InstallationLineItem,
} from "./installation-line-item.types";

export interface InstallationReport {
  id: number;

  reportNo: string;

  reportDate: string;

  customerName: string;

  customerAddress: string;

  createdBy: string;

  note: string;

  customerSignatureUrl: string;

  signedDate?: string;

  lineItems: InstallationLineItem[];

  createdAt: string;

  updatedAt: string;
}