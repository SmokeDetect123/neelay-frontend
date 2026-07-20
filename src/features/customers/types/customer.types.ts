// Backend DTOs

export interface CreateCustomerRequest {
    name: string;
    address: string;
    phone: string;
    email: string;
}

export interface UpdateCustomerRequest {
    name: string;
    address: string;
    phone: string;
    email: string;
}

export interface CustomerResponse {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    createdAt: string;
}

// UI Types

export interface CustomerSearchRequest {
    search?: string;
}

export interface CustomerFilterState {
    search: string;
}

export type CustomerTableRow = CustomerResponse;