import type {
  InstallationLineItem,
} from "./installation-line-item.types";

/**
 * Installation Report returned by the backend.
 *
 * Server-generated fields:
 * - id
 * - reportNo
 * - createdBy
 * - createdAt
 * - updatedAt
 */
export interface InstallationReport {
  id: number;

  reportNo: string;

  reportDate: string;

  customerName: string;

  customerAddress: string;

  createdBy: string;

  note: string;

  customerSignatureUrl: string | null;

  signedDate: string | null;

  lineItems: InstallationLineItem[];

  createdAt: string;

  updatedAt: string;
}