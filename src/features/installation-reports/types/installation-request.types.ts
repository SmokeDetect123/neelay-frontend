import {
  InstallationLineItemRequest,
} from "./installation-line-item.types";

export interface CreateInstallationReportRequest {
  reportDate: string;

  customerName: string;

  customerAddress?: string;

  note?: string;

  customerSignatureUrl?: string;

  signedDate?: string;

  lineItems: InstallationLineItemRequest[];
}

export interface UpdateInstallationReportRequest {
  reportDate?: string;

  customerName?: string;

  customerAddress?: string;

  note?: string;

  customerSignatureUrl?: string;

  signedDate?: string;

  lineItems?: InstallationLineItemRequest[];
}