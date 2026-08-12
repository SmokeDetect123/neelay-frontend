export interface InstallationLineItem {
  id: number;

  make: string;

  model: string;

  fabricationNo: string;

  fitting: string;

  qty: number;

  agent: string;

  remarks: string;
}

export interface InstallationLineItemRequest {
  make: string;

  model: string;

  fabricationNo: string;

  fitting: string;

  qty: number;

  agent: string;

  remarks: string;
}